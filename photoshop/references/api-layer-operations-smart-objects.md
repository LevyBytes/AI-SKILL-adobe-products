# Layer Operations Smart Objects

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

This guide covers moving smart object layer workflows from V1's `/documentCreate` and `/documentOperations` endpoints to the V2 `/create-composite` endpoint.

V1 also offered `/psdService/smartObject` specifically for smart object place and replace workflows. The scope here is smart object usage through `documentCreate` and `documentOperations`; for the other path, use [Smart Object Replace Migration](api-smart-object-replace.md).

## Overview

**V1 Endpoints:**

- `/pie/psdService/documentCreate` - Build documents that include smart object layers
- `/pie/psdService/documentOperations` - Add smart object layers or change existing ones

**V2 Endpoint:** `/v2/create-composite`, using `edits.layers`

### Smart Object Types

- **Embedded Smart Objects** - The PSD contains the source file data
- **Linked Smart Objects** - The source file stays outside the PSD
  (`smartObject.isLinked: true` in V2)

## Adding Smart Object Layers

### V1 documentOperations request

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentOperations \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [{
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  }],
  "options": {
    "layers": [
      {
        "type": "smartObject",
        "name": "Logo Smart Object",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<SMART_OBJECT_SOURCE_URL>",
          "storage": "external"
        },
        "smartObject": {
          "linked": false
        }
      }
    ]
  },
  "outputs": [{
    "href": "<SIGNED_POST_URL>",
    "storage": "external",
    "type": "image/vnd.adobe.photoshop"
  }]
}'
```

### V2 create-composite request

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Logo Smart Object",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "smartObject": {
          "smartObjectFile": {
            "source": {
              "url": "<SMART_OBJECT_SOURCE_URL>"
            }
          }
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

## Key Migration Changes

### 1. Type mapping

**V1:** `"type": "smartObject"`

**V2:** `"type": "smart_object_layer"`

### 2. Source location

**V1:** source details are placed in the `input` property

```json
{
  "type": "smartObject",
  "input": {
    "href": "<URL>",
    "storage": "external"
  }
}
```

**V2:** source details move to the `smartObject.smartObjectFile.source` path

```json
{
  "type": "smart_object_layer",
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<URL>"
      }
    }
  }
}
```

The smart object source URL belongs inside `smartObject.smartObjectFile.source.url`; it is not a top-level layer value.

### 3. Linked vs Embedded

**V1:** linked state is declared with `smartObject.linked`

```json
{
  "type": "smartObject",
  "smartObject": {
    "linked": false
  }
}
```

**V2:** set `smartObject.isLinked`; `true` means linked, and `false` means embedded

```json
{
  "type": "smart_object_layer",
  "smartObject": {
    "isLinked": true,
    "smartObjectFile": {
      "source": {
        "url": "<URL>"
      }
    }
  }
}
```

For V2, set `smartObject.isLinked` directly so linked-versus-embedded behavior is unambiguous.

### 4. Add Operation Structure

**V1:** `add` appears as its own block

```json
{
  "type": "smartObject",
  "add": {
    "insertTop": true
  }
}
```

**V2:** put the add details in `operation` and include the `smartObject` data

```json
{
  "type": "smart_object_layer",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<SMART_OBJECT_SOURCE_URL>"
      }
    }
  }
}
```

## Supported Source File Types

Smart object sources may use several formats:

**V1 Supported:**

- PSD (image/vnd.adobe.photoshop)
- JPEG (image/jpeg)
- PNG (image/png)
- PDF (application/pdf)

**V2 Supported:**

- PSD (image/vnd.adobe.photoshop)
- JPEG (image/jpeg)
- PNG (image/png)
- TIFF (image/tiff)
- SVG (image/svg+xml)
- AI / Adobe Illustrator (application/illustrator) - save from Illustrator with **Create PDF Compatible File** enabled
- PDF (application/pdf)

V2 newly includes SVG as a smart object source format; AI and PDF were already supported in V1.

**Note:** AI input is valid only when Adobe Illustrator saved the file with **Create PDF Compatible File** enabled.

## Transform Mode

In V2, `transformMode` sets the way the smart object **layer** is placed and resized in the document:

- **`"none"`** - leaves the layer at its original size and position with no transform applied
- **`"custom"`** - uses explicit transform fields such as `offset`, `dimension`, `angle`, `skew`, `anchor`, and related values; include the required `transform` object
- **`"fit"`** - resizes the layer so it fits inside the canvas without changing aspect ratio; the layer is placed at `(0, 0)`. **Do not include a `transform` object** â€” requests that include one fail with 400.
- **`"fill"`** - resizes the layer so it covers the canvas, with possible cropping; the layer is placed at `(0, 0)`. **Do not include a `transform` object** â€” requests that include one fail with 400.

With either `fit` or `fill`, scaling leaves the layer positioned at `(0, 0)`. To place it elsewhere, send the fit/fill request without `transform`, then make a **second request** against that same layer using `transformMode: "custom"` and the required `transform.offset`.

```json
{
  "type": "smart_object_layer",
  "transformMode": "fit",
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<SMART_OBJECT_URL>"
      }
    }
  }
}
```

**`transformMode` operates at the document layer level; it does not define how replacement pixels are resized inside the smart object canvas.** Scaling inside the SO canvas is handled by `transform.dimension`:

- **No `transform.dimension`** (default) - the replacement image is resized proportionally to fit the SO canvas while keeping its aspect ratio. This rule applies no matter which `transformMode` is used. Use it for transparent-background assets such as cutout player photos when distortion must be avoided.
- **With `transform.dimension`** - the replacement image is stretched to the exact SO canvas dimensions. Choose this when the SO canvas size must be controlled pixel for pixel.

For example, `transformMode: "fill"` with no `transform.dimension` first scales the replacement proportionally onto the SO canvas; after that, `fill` is applied to the document layer. These are separate operations.

## Smart Object with Transformations

### V1 approach

```json
{
  "type": "smartObject",
  "name": "Scaled Logo",
  "add": {
    "insertTop": true
  },
  "input": {
    "href": "<URL>",
    "storage": "external"
  },
  "bounds": {
    "left": 100,
    "top": 100,
    "width": 500,
    "height": 300
  }
}
```

### V2 approach

```json
{
  "type": "smart_object_layer",
  "name": "Scaled Logo",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<URL>"
      }
    }
  },
  "transformMode": "custom",
  "transform": {
    "offset": {
      "horizontal": 100,
      "vertical": 100
    },
    "dimension": {
      "width": 500,
      "height": 300
    }
  }
}
```

Instead of `bounds`, V2 expresses the same placement and sizing through `transform.offset` and `transform.dimension`. The `transformMode` value determines the transform behavior and accepts `"custom"`, `"fit"`, `"fill"`, or `"none"`.

## Editing Existing Smart Objects

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Existing Smart Object",
        "edit": {},
        "visible": false
      }
    ]
  }
}
```

### V2 approach

```json
{
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Existing Smart Object",
        "operation": {
          "type": "edit"
        },
        "isVisible": false
      }
    ]
  }
}
```

For changes to an existing layer, V2 needs `operation.type: "edit"` stated directly, even when the edit has no additional fields.

## Replacing Smart Object Content

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Existing Smart Object",
        "edit": {},
        "input": {
          "href": "<NEW_SOURCE_URL>",
          "storage": "external"
        }
      }
    ]
  }
}
```

### V2 approach

```json
{
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Existing Smart Object",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "smartObjectFile": {
            "source": {
              "url": "<NEW_SOURCE_URL>"
            }
          }
        }
      }
    ]
  }
}
```

To swap in new smart object content, provide the replacement file URL at `smartObject.smartObjectFile.source.url`. The layer edit still requires `operation.type: "edit"`.

Known limitation: V2 cannot replace a linked smart object layer with an embedded smart object.

## Placement Options

Smart object layers use the standard placement choices available to other layer types:

### V1 Placement

```json
{
  "add": {
    "insertTop": true              // or
    "insertBottom": true            // or
    "insertAbove": {"name": "..."}  // or
    "insertBelow": {"id": 123}      // or
    "insertInto": {"name": "Group"}
  }
}
```

### V2 Placement

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```

For placement relative to another layer, set `"above"`, `"below"`, or `"into"` and provide `referenceLayer` as `{"name": "..."}` or `{"id": 123}`.

Placement patterns are covered in [Image Layer Operations](api-v1-to-v2-4.md).

## Creating Documents with Smart Objects

### V1 approach: documentCreate

```json
{
  "options": {
    "document": {
      "width": 1000,
      "height": 1000,
      "resolution": 72,
      "fill": "white",
      "mode": "rgb"
    },
    "layers": [
      {
        "type": "smartObject",
        "name": "Logo",
        "input": {
          "href": "<LOGO_URL>",
          "storage": "external"
        }
      }
    ]
  }
}
```

### V2 approach

```json
{
  "document": {
    "width": 1000,
    "height": 1000,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": {
      "solidColor": {
        "red": 255,
        "green": 255,
        "blue": 255
      }
    },
    "mode": "rgb"
  },
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Logo",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "smartObject": {
          "smartObjectFile": {
            "source": {
              "url": "<LOGO_URL>"
            }
          }
        }
      }
    ]
  }
}
```

## Layer Properties

Smart object layers can carry the regular layer-level settings:

```json
{
  "type": "smart_object_layer",
  "name": "My Smart Object",
  "isVisible": true,
  "protection": ["none"],
  "blendOptions": {
    "opacity": 90,
    "blendMode": "normal"
  },
  "transformMode": "custom",
  "transform": {
    "offset": {
      "horizontal": 100,
      "vertical": 100
    },
    "dimension": {
      "width": 500,
      "height": 300
    },
    "angle": 0,
    "skew": {
      "horizontal": 0,
      "vertical": 0
    },
    "anchor": {
      "horizontal": 0.5,
      "vertical": 0.5
    }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<SMART_OBJECT_URL>"
      }
    }
  }
}
```

- Place `opacity` and `blendMode` inside `blendOptions`, rather than directly on the layer.
- Replace `bounds` with a `transform` object that includes `offset` and `dimension`.
- Valid `transformMode` values are `"custom"`, `"fit"`, `"fill"`, and `"none"`.
- Use the `protection` array for layer locking, for example `["all"]`, `["none"]`, or individual flags. Note: when `all` or `none` is used, it must be the sole array item and cannot be mixed with other flags.

For blend mode and transform details, use [Advanced Layer Operations](api-layer-operations-advanced.md).

## Migration Checklist

For a V1-to-V2 smart object migration, check each of these changes:

- [ ] Replace `type: "smartObject"` with `type: "smart_object_layer"`.
- [ ] Use `smartObject.smartObjectFile.source` instead of `input` for the smart object file reference.
- [ ] Map `href`/`storage` onto `url`; `storageType` is unnecessary.
- [ ] Swap the `add` block for `operation.type: "add"` and include `placement`.
- [ ] Translate placement directives such as insertTop â†’ placement.type: "top".
- [ ] Use `referenceLayer` with `name` or `id` in place of `relativeTo`.
- [ ] Include `operation.type: "edit"` when changing an existing layer.
- [ ] Rename `visible` to `isVisible`.
- [ ] Lock: replace `locked` with the `protection` array; see [Advanced Layer Operations](api-layer-operations-advanced.md).
- [ ] Put `opacity` and `blendMode` inside the `blendOptions` object.
- [ ] Replace `bounds` with `transform` containing `offset` and `dimension`; use `transformMode: "custom"`.
- [ ] Keep the `transform` object out of requests where `transformMode` is `fit`, `fill`, or `none`; otherwise the service returns 400.
- [ ] For `fit`/`fill`, scaling always leaves the layer at (0,0); to use a different position, make a second request with `transformMode: "custom"` and the needed offset.
- [ ] For `custom` plus dimension/angle/skew, execution runs in two passes: first geometry uses anchor as the pivot with default (0,0), then `setOffset` sets the location; priority order is offset â†’ alignment â†’ restore original x,y.
- [ ] Map `smartObject.linked` onto `smartObject.isLinked`
      (`true` for linked, `false` for embedded)
- [ ] Confirm which source file types V2 supports.

## Common Migration Issues

### Issue: Linked smart objects

**Problem:** V1 named the field `smartObject.linked`; V2 uses a different field name.

**Solution:** Use `smartObject.isLinked` in V2 while keeping the same boolean meaning.

### Issue: Source file type support

**Problem:** Some source file types might not be available in V2.

**Solution:** Check the V2 documentation for the supported types before migrating.

### Issue: Missing operation block

**Problem:** V2 needs an explicit operation when a request creates layers.

**Solution:** Include an operation block every time you add a layer.

```json
{
  "type": "smart_object_layer",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<SMART_OBJECT_URL>"
      }
    }
  }
}
```

## Complete Migration Example

**V1 documentOperations:**

```json
{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "type": "smartObject",
        "name": "Logo",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<LOGO_PSD_URL>",
          "storage": "external"
        },
        "bounds": {
          "left": 50,
          "top": 50,
          "width": 400,
          "height": 400
        },
        "smartObject": {
          "linked": false
        }
      },
      {
        "type": "smartObject",
        "name": "Product Image",
        "add": {
          "insertAbove": {
            "name": "Logo"
          }
        },
        "input": {
          "href": "<PRODUCT_IMAGE_URL>",
          "storage": "external"
        },
        "blendOptions": {
          "opacity": 85
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}
```

**V2 create-composite:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Logo",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "smartObject": {
          "isLinked": false,
          "smartObjectFile": {
            "source": {
              "url": "<LOGO_PSD_URL>"
            }
          }
        },
        "transformMode": "custom",
        "transform": {
          "offset": {
            "horizontal": 50,
            "vertical": 50
          },
          "dimension": {
            "width": 400,
            "height": 400
          }
        }
      },
      {
        "type": "smart_object_layer",
        "name": "Product Image",
        "operation": {
          "type": "add",
          "placement": {
            "type": "above",
            "referenceLayer": {
              "name": "Logo"
            }
          }
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<PRODUCT_IMAGE_URL>"
            }
          }
        },
        "blendOptions": {
          "opacity": 85
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

## New features in V2

V2 adds smart object workflows that V1 did not provide:

### Replacement of linked smart object with another linked smart object

With V2, an existing linked smart object can be replaced by a different linked smart object. V1 did not allow that replacement.

**Example:**

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Linked Smart Object",
        "type": "smart_object_layer",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<NEW_LINKED_FILE_URL>"
            }
          }
        }
      }
    ]
  }
}
```

### Replacement of embedded smart object with linked smart object

V2 can turn an embedded smart object into a linked smart object when it is replaced with a linked file. V1 did not support this flow.

**Example:**

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Embedded Smart Object",
        "type": "smart_object_layer",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<LINKED_FILE_URL>"
            }
          }
        }
      }
    ]
  }
}
```

When converting an embedded smart object to a linked smart object, set `isLinked` to `true`.

### Resize with linked smart objects

V1 rejected every resize (`width`/`maxWidth`) for documents that contained linked smart objects. V2 removes that restriction.

| Scenario | Linked SO with content provided | Other linked SOs (no content) |
| --- | --- | --- |
| Width resize only (no edits) | N/A | Rasterized to pixel layer |
| Edit/add linked SO + width resize | Stays linked smart object | Rasterized to pixel layer |

**Example â€” Width resize only:**

If no edits are included, the engine has no linked file content available. During the resize, every linked smart object layer is rasterized into a pixel layer.

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_INPUT_PSD_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_OUTPUT_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop",
      "width": 200
    }
  ]
}
```

**Result:** The output PSD becomes 200px wide while preserving aspect ratio. Each linked smart object layer in the document is converted to a regular pixel (image) layer.

**Example â€” Edit linked SO + width resize:**

If the same request edits or adds a linked smart object and also resizes the document, the edited or added layer remains a linked smart object because its content came through the API. Preexisting linked SO layers that are not edited turn into pixel layers.

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_INPUT_PSD_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "<EXISTING_SMART_OBJECT_LAYER_NAME>",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "isLinked": true,
          "smartObjectFile": {
            "source": {
              "url": "<SIGNED_REPLACEMENT_FILE_GET_URL>"
            }
          }
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_OUTPUT_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop",
      "width": 200
    }
  ]
}
```

**Result:** The output PSD is resized to 200px width. The edited layer stays a linked smart object, since the edit supplied its content. Every other linked SO layer in the document is rasterized into a pixel layer.

## Feature Availability

### Currently available in V2

- âœ… Add embedded smart object layers
- âœ… Edit existing smart objects
- âœ… Replace smart object content
- âœ… Smart object transformations (transform with offset, dimension, angle, skew, anchor)
- âœ… Transform modes (custom, fit, fill)
- âœ… Layer visibility (`isVisible`)
- âœ… Layer locking (`protection` array)
- âœ… Blend options (opacity, blendMode)
- âœ… Placement options (top, bottom, above, below, into)
- âœ… Reference layer by name or ID
- âœ… Multiple source file types (PSD, JPEG, PNG, TIFF, SVG, AI, PDF)
- âœ… Linked and embedded smart objects (`smartObject.isLinked`)
- âœ… Resize (`width`/`maxWidth`) documents containing linked smart objects

### Coming soon

For upcoming capabilities, consult the V2 API documentation and release notes.

## Next steps

- Review [Layer Operations Overview](api-v1-to-v2-4.md) for the broader model
- Check [Image Layers](api-v1-to-v2-4.md) for placement examples
- See [Advanced Operations](api-layer-operations-advanced.md) for transform and effect details
