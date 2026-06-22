# Layer Operations Image, Layer Operations Overview

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Image Layer Operations Migration; Layer Operations Migration Overview.

## Image Layer Operations Migration

Use this migration guide when moving image-layer and solid-color-layer requests from the v1 `/documentCreate` and `/documentOperations` endpoints to the v2 `/create-composite` endpoint.

### Overview

The v1 `/pie/psdService/documentCreate` endpoint created documents containing image or fill layers, while `/pie/psdService/documentOperations` added or edited those layer types in existing documents.

In the v2 API, `/v2/create-composite` centralizes those layer actions through the `edits.layers` array.

The covered layer-type mappings are:

- **Image or pixel layer mapping** - V1 `type: "layer"` -> V2 `type: "layer"`
- **Solid-color layer mapping** - V1 `type: "fillLayer"` -> V2 `type: "solid_color_layer"`

### Key migration changes

### 1. Add operation structure

In v1, an `add` block carried insertion instructions for where the new layer should be placed.

```json
{
  "type": "layer",
  "name": "New Layer",
  "add": {
    "insertTop": true
  },
  "input": {
    "href": "<URL>",
    "storage": "external"
  }
}
```

For v2, placement moves into the `placement` property inside a single `operation` block.

```json
{
  "type": "layer",
  "name": "New Layer",
  "image": {
    "source": {
      "url": "<URL>"
    }
  },
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```

### 2. Source image field

V1 supplied image content through the `input` object.

```json
{
  "input": {
    "href": "<URL>",
    "storage": "external"
  }
}
```

V2 supplies that same content through `image.source`.

```json
{
  "image": {
    "source": {
      "url": "<URL>"
    }
  }
}
```

### 3. Placement field

Use `operation.placement` to define layer placement in V2. Additional detail appears in [Layer placement migration patterns](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-image.md#layer-placement-migration-patterns).

### Adding image layers

### V1 request

V1 adds a new image layer by sending `/documentOperations` with an `add` block.

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
        "type": "layer",
        "name": "New Image",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<IMAGE_URL>",
          "storage": "external"
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

### V2 request

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
        "type": "layer",
        "name": "New Image",
        "image": {
          "source": {
            "url": "<IMAGE_URL>"
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
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

### Layer placement migration patterns

In v1, these parameters determined how a layer was inserted:

- `insertTop: true` - Place the new layer at the top of the layer stack.
- `insertBottom: true` - Place the new layer at the bottom of the layer stack.
- `insertAbove: {id: 123}` - Insert above a particular layer identified by ID.
- `insertBelow: {name: "Layer"}` - Insert below a particular layer identified by name.
- `insertInto: {name: "Group"}` - Put the layer inside a named group.

In v2, the same placement intent is expressed through the `operation.placement` property:

- `type: "top"` - Place at the top.
- `type: "bottom"` - Place at the bottom.
- `type: "above"` with `referenceLayer` - Place above the referenced layer.
- `type: "below"` with `referenceLayer` - Place below the referenced layer.
- `type: "into"` with `referenceLayer` - Use a group as the container.

### Top insertion

**V1:**

```json
{
  "add": {
    "insertTop": true
  }
}
```

**V2:**

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

### Bottom insertion

**V1:**

```json
{
  "add": {
    "insertBottom": true
  }
}
```

**V2:**

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "bottom"
    }
  }
}
```

### Above-layer insertion

**V1:**

```json
{
  "add": {
    "insertAbove": {
      "name": "Background"
    }
  }
}
```

**V2:**

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "above",
      "referenceLayer": {
        "name": "Background"
      }
    }
  }
}
```

### Below-layer insertion

**V1:**

```json
{
  "add": {
    "insertBelow": {
      "id": 123
    }
  }
}
```

**V2:**

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "below",
      "referenceLayer": {
        "id": 123
      }
    }
  }
}
```

### Group insertion

**V1:**

```json
{
  "add": {
    "insertInto": {
      "name": "My Group"
    }
  }
}
```

**V2:**

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "into",
      "referenceLayer": {
        "name": "My Group"
      }
    }
  }
}
```

### Solid Color Layers

### V1 request: fillLayer

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
        "type": "fillLayer",
        "name": "Red Fill",
        "add": {
          "insertTop": true
        },
        "fill": {
          "solidColor": {
            "rgb": {
              "red": 255,
              "green": 0,
              "blue": 0
            }
          }
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

### V2 request

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
        "type": "solid_color_layer",
        "name": "Red Fill",
        "fill": {
          "solidColor": {
            "rgb": {
              "red": 255,
              "green": 0,
              "blue": 0
            }
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
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

### Solid Color Layer Mapping

**V1:** `type: "fillLayer"` and an `rgb` object nested under `fill.solidColor`

```json
{
  "type": "fillLayer",
  "fill": {
    "solidColor": {
      "rgb": {
        "red": 255,
        "green": 0,
        "blue": 0
      }
    }
  }
}
```

**V2:** `type: "solid_color_layer"` using the same wrapping around `rgb`

```json
{
  "type": "solid_color_layer",
  "fill": {
    "solidColor": {
      "rgb": {
        "red": 255,
        "green": 0,
        "blue": 0
      }
    }
  }
}
```

**Mapping note:**

Map any V1 `fillLayer` indicated by `type: "fillLayer"` or `fill.solidColor.rgb.*` to V2 `type: "solid_color_layer"`. When a V1 layer also includes layer-level `input.href`, remove that field because V2 `solid_color_layer` does not accept `input`. Preserve only `mask.input.href` from V1 `MaskDetails`, translating it to `pixelMask.source.url`.

### Editing Existing Layers

### V1 edit-block form

```json
{
  "options": {
    "layers": [
      {
        "name": "Existing Layer",
        "edit": {},
        "visible": false,
        "blendOptions": {
          "opacity": 75
        }
      }
    ]
  }
}
```

### V2 edit form

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Layer",
        "isVisible": false,
        "opacity": 75
      }
    ]
  }
}
```

V2 edit requests for existing layers need the operation type to be stated explicitly. Add `operation: { "type": "edit" }`, identify the layer by name or ID, and include the properties being changed. Requests without the `operation` field are rejected by the Core API Server.

### Replacing Layer Content

### V1 replacement form

```json
{
  "options": {
    "layers": [
      {
        "name": "Existing Layer",
        "edit": {},
        "input": {
          "href": "<NEW_IMAGE_URL>",
          "storage": "external"
        }
      }
    ]
  }
}
```

### V2 replacement form

For V2 replacement, include `operation: { "type": "edit" }`, then address the layer with either `id` or `name`. Supply the new image in that request through `image.source.url`:

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "id": 751,
        "name": "Existing Layer",
        "operation": {
          "type": "edit"
        },
        "image": {
          "source": {
            "url": "<NEW_IMAGE_URL>"
          }
        }
      }
    ]
  }
}
```

**Required target type.** The `id` or `name` used for the edit must resolve to an image/pixel layer in the document.

### Layer Positioning

### Bounds placement

Explicit positioning is supported in both V1 and V2:

**V1:**

```json
{
  "type": "layer",
  "name": "Positioned Image",
  "bounds": {
    "left": 100,
    "top": 100,
    "width": 500,
    "height": 300
  }
}
```

**V2:** (identical bounds shape)

```json
{
  "type": "layer",
  "name": "Positioned Image",
  "bounds": {
    "left": 100,
    "top": 100,
    "width": 500,
    "height": 300
  }
}
```

### Alignment fields

**V1:** `horizontalAlign` and `verticalAlign`

```json
{
  "type": "layer",
  "horizontalAlign": "center",
  "verticalAlign": "center"
}
```

**V2:** Placement alignment

```json
{
  "type": "layer",
  "operation": {
    "type": "add",
    "placement": {
      "type": "custom",
      "horizontalAlignment": "center",
      "verticalAlignment": "center"
    }
  }
}
```

### Canvas fill

**V1:** `fillToCanvas` property

```json
{
  "type": "layer",
  "fillToCanvas": true
}
```

**V2:** No current counterpart

V2 does not currently provide the V1 `fillToCanvas` property.

### Creating Documents with Image Layers

### V1 documentCreate request

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
        "type": "layer",
        "name": "Logo",
        "input": {
          "href": "<IMAGE_URL>",
          "storage": "external"
        }
      }
    ]
  }
}
```

### V2 request

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
        "type": "layer",
        "name": "Logo",
        "image": {
          "source": {
            "url": "<IMAGE_URL>"
          }
        },
        "operation": {
          "type": "add"
        }
      }
    ]
  }
}
```

### Migration checklist

For image-layer migration work that moves from v1 to v2, check each item below:

- [ ] Rename image-reference `input` fields as `source`
- [ ] Replace `href`/`storage` pairs with `url`/`storageType`; leave storageType out for external sources when appropriate
- [ ] Express the old `add` block as `operation.type: "add"`
- [ ] Map `insertTop` placement to `placement.type: "top"`
- [ ] Map `insertBottom` placement to `placement.type: "bottom"`
- [ ] Map `insertAbove` placement to `placement.type: "above"` and include `referenceLayer`
- [ ] Map `insertBelow` placement to `placement.type: "below"` and include `referenceLayer`
- [ ] Map `insertInto` placement to `placement.type: "into"` and include `referenceLayer`
- [ ] Rename `type: "fillLayer"` as `type: "solid_color_layer"`
- [ ] Leave out the explicit `edit: {}` wrapper when making modifications
- [ ] Promote `blendOptions.opacity` to the top-level `opacity` property
- [ ] Rename `visible` as `isVisible`
- [ ] Locking: replace `locked` with a `protection` array; see [Advanced Layer Operations](api-layer-operations-advanced.md)
- [ ] Availability note: V2 does not yet provide `fillToCanvas`

### Common migration issues

### Missing placement for an add operation

For `add` operations, v2 expects placement to be declared directly; include the placement type every time.

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

### Storage type changes

**V1:** storage type had to be stated explicitly

```json
{
  "href": "<URL>",
  "storage": "external"
}
```

**V2:** external storage is the default, so the storage type can be omitted

```json
{
  "url": "<URL>"
}
```

### Solid color structure

**V1:** `rgb` remains nested inside the color object

```json
{
  "fill": {
    "solidColor": {
      "rgb": {
        "red": 255,
        "green": 0,
        "blue": 0
      }
    }
  }
}
```

**V2:** the same nested layout is still used

```json
{
  "fill": {
    "solidColor": {
      "rgb": {
        "red": 255,
        "green": 0,
        "blue": 0
      }
    }
  }
}
```

### Complete Migration Example

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
        "type": "layer",
        "name": "Hero Image",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<IMAGE_URL>",
          "storage": "external"
        },
        "bounds": {
          "left": 0,
          "top": 0,
          "width": 1920,
          "height": 600
        }
      },
      {
        "type": "fillLayer",
        "name": "Background",
        "add": {
          "insertBottom": true
        },
        "fill": {
          "solidColor": {
            "rgb": {
              "red": 240,
              "green": 240,
              "blue": 240
            }
          }
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
        "type": "layer",
        "name": "Hero Image",
        "image": {
          "source": {
            "url": "<IMAGE_URL>"
          }
        },
        "bounds": {
          "left": 0,
          "top": 0,
          "width": 1920,
          "height": 600
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      },
      {
        "type": "solid_color_layer",
        "name": "Background",
        "fill": {
          "solidColor": {
            "rgb": {
              "red": 240,
              "green": 240,
              "blue": 240
            }
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "bottom"
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
}
```

### Feature Availability

### Currently Available in V2

- Available: Add image layers
- Available: Add solid color layers
- Available: Edit existing layers
- Available: Replace layer content
- Available: Layer positioning (bounds)
- Available: Layer placement (top, bottom, above, below, into)
- Available: Layer visibility and opacity

### V1 Features Not Yet in V2

- Pending: `fillToCanvas` property
- Pending: Some advanced alignment options

### Next steps

- For broader concepts, read [Layer Operations Overview](api-v1-to-v2-4.md)
- For text-related changes, use [Text Layers](api-layer-operations-text.md)
- For masks and transforms, refer to [Advanced Operations](api-layer-operations-advanced.md)

## Layer Operations Migration Overview

Use this guide to understand the v1-to-v2 layer operation changes and to choose the right migration path.

### V1 layer operations landscape

In v1, layer work had these characteristics:

- **Scattered across multiple endpoints** - Separate APIs handled different operation categories
- **Limited in capability** - Programmatic control did not cover many layer types
- **Sequential only** - Complex edits required several API requests
- **Inconsistent patterns** - Endpoint-specific request and response shapes varied

**V1 support was narrow in these areas:**

- Simple changes to image layers
- A subset of text-editing workflows
- Restricted smart object workflows
- Adjustment layers, layer groups, and advanced compositing were not exposed for programmatic control

### V2 unified approach

V2 routes layer edits through `/v2/create-composite`:

- **Unified route** - one endpoint handles layer manipulation work
- **Batch operations** - one request can contain several layer edits
- **Atomic transactions** - the request applies as a whole or fails as a whole
- **Expanded capabilities** - v2 covers layer types that v1 did not expose

Only part of v1's behavior is available in the current v2 API. Adobe is still moving some advanced v1 features over, so consult the layer-specific guides for support details.

### Basic request structure

Layer requests now use the following overall shape:

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
        "type": "layer_type",
        "name": "Layer Name",
        // Layer-specific properties
        "operation": {
          "type": "add|edit|delete"
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

### Key migration changes

### Request structure changes

Under v1, every operation used an endpoint-specific request layout.

Under v2, layer edits are collected into one `edits.layers` array.

```json
{
  "image": {"source": {"url": "<DOCUMENT_URL>"}},
  "edits": {
    "layers": [
      // All layer operations here
    ]
  },
  "outputs": [...]
}
```

### Operation types

V2 makes the operation kind explicit:

- `add` - Create layers
- `edit` - Change properties on existing layers
- `delete` - Delete layers

Move behavior is represented as an edit that changes transform or bounds properties.

### Batch operations

With v1, a batch-style workflow meant sending multiple API requests in sequence.

```shell
POST /endpoint1 (add layer)
POST /endpoint2 (modify layer)
POST /endpoint3 (add another layer)
```

With v2, one API request can carry several operations.

```json
{
  "edits": {
    "layers": [
      {"type": "layer", "operation": {"type": "add"}, ...},
      {"name": "Existing", "isVisible": false},
      {"type": "text_layer", "operation": {"type": "add"}, ...}
    ]
  }
}
```

### Layer processing order

In v1 payload arrays, processing ran from the last layer toward the first, which effectively meant bottom-up handling.

V2 handles the `layers` array in the same sequence it is sent. The first item in the request is evaluated before the second item, and that ordering continues through the array. Because request order now controls the final composition, arrange the payload in the order the dependencies require.

When a newly created layer must refer to another layer from the same payload, such as placements using `above`, `below`, or `into` with `referenceLayer`, place the referenced layer earlier in the array. That differs from v1, where reverse-order processing allowed the dependent layer to appear first.

### Example

Use the case where Layer B must sit over Layer A:

**V1 payload:** (reverse-order processing)

```json
{
  "layers": [
    {
      "name": "Layer B",
      "add": { "insertAbove": { "name": "Layer A" } }
    },
    {
      "name": "Layer A",
      "add": { "insertTop": true }
    }
  ]
}
```

Layer A gets created before Layer B can point to it.

**V2 payload:** (forward-order processing)

```json
{
  "edits": {
    "layers": [
      {
        "name": "Layer A",
        "type": "layer",
        "operation": {
          "type": "add",
          "placement": { "type": "top" }
        }
      },
      {
        "name": "Layer B",
        "type": "layer",
        "operation": {
          "type": "add",
          "placement": {
            "type": "above",
            "referenceLayer": { "name": "Layer A" }
          }
        }
      }
    ]
  }
}
```

Because v2 evaluates Layer A first, Layer B can safely use Layer A as its reference.

### Migration strategy

1. **Audit your V1 usage** - Determine which V1 endpoints your integration calls today.
2. **Choose specific migration guides** - Open the guide that matches each layer type.
3. **Start simple** - Move one operation category before tackling others.
4. **Test incrementally** - Confirm each migrated step before continuing.
5. **Combine operations** - After individual operations are working, batch them for better efficiency.

### Specific layer type guides

For layer-type details, use these focused guides:

- **[Background Layers](api-layer-operations-background.md)** - Operations for background layers and their conversion paths
- **[Image Layers](api-v1-to-v2-4.md)** - Workflows for image layers and solid color layers
- **[Text Layers](api-layer-operations-text.md)** - Character-style and paragraph-style handling for text layers
- **[Adjustment Layers](api-layer-operations-adjustments.md)** - Adjustment-layer workflows that keep edits non-destructive
- **[Smart Objects](api-layer-operations-smart-objects.md)** - Migration guidance for smart object layers
- **[Advanced Operations](api-layer-operations-advanced.md)** - Transformations along with masks, groups, and blend modes

### Related migration guides

The broader V2 migration includes layer operations along with these areas:

- **[Format Conversion](api-format-conversion-migration.md)** - Move PSD export work from `/renditionCreate`
- **[Document Creation](api-document-creation-migration.md)** - Move new-document workflows from `/documentCreate`
- **[Document Operations](api-document-operations-migration.md)** - Move crop, resize, and trim workflows from `/documentOperations`

### Next steps

1. Select the [specific layer type guide](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-overview.md#specific-layer-type-guides) that fits your V1 workflow.
2. Begin with simple migrations, then combine operations after those work.
3. Use development endpoints for testing before sending requests to production.
