# Layer Operations Advanced

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide to migrate advanced layer operations from the V1 `/documentOperations` endpoint to the V2 `/create-composite` endpoint, including layer movement, deletion, masking, grouping, and transforms.

## Overview

**V1 Endpoint:** `/pie/psdService/documentOperations`

**V2 Endpoint:** `/v2/create-composite` with `edits.layers`

**This guide covers these operations:**

- Moving layers
- Deleting layers
- Layer masks (pixel masks)
- Layer groups (layerSection)
- Blend modes and opacity
- Layer transformations

## Moving layers

### V1 approach

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
        "name": "Layer to Move",
        "move": {
          "insertTop": true
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

### V2 approach

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
        "name": "Layer to Move",
        "operation": {
          "type": "move",
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

### Move operation changes

**V1:** Separate `move` block

```json
{
  "name": "Layer to Move",
  "move": {
    "insertTop": true
  }
}
```

**V2:** Unified `operation` block

```json
{
  "name": "Layer to Move",
  "operation": {
    "type": "move",
    "placement": {
      "type": "top"
    }
  }
}
```

### Move placement options

**V1 → V2 Mapping:**

| V1 | V2 |
| --- | --- |
| `move: {insertTop: true}` | `operation: {type: "move", placement: {type: "top"}}` |
| `move: {insertBottom: true}` | `operation: {type: "move", placement: {type: "bottom"}}` |
| `move: {insertAbove: {name: "X"}}` | `operation: {type: "move", placement: {type: "above", referenceLayer: {name: "X"}}}` |
| `move: {insertBelow: {id: 123}}` | `operation: {type: "move", placement: {type: "below", referenceLayer: {id: 123}}}` |
| `move: {insertInto: {name: "Group"}}` | `operation: {type: "move", placement: {type: "into", referenceLayer: {name: "Group"}}}` |

## Deleting layers

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Layer to Delete",
        "delete": {}
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
        "name": "Layer to Delete",
        "operation": {
          "type": "delete"
        }
      }
    ]
  }
}
```

### Delete operation changes

**V1:** `delete: {}` block (can include `includeChildren`)

```json
{
  "name": "Group Layer",
  "delete": {
    "includeChildren": true
  }
}
```

**V2:** `operation: {type: "delete"}` (verify child-layer behavior in the V2 documentation)

```json
{
  "name": "Group Layer",
  "operation": {
    "type": "delete"
  }
}
```

### Deleting multiple layers

One request can remove several layers in either V1 or V2:

**V2 Example:**

```json
{
  "edits": {
    "layers": [
      {
        "name": "Unwanted Layer 1",
        "operation": {
          "type": "delete"
        }
      },
      {
        "name": "Unwanted Layer 2",
        "operation": {
          "type": "delete"
        }
      }
    ]
  }
}
```

## Layer masks (pixel masks)

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Masked Layer",
        "edit": {},
        "mask": {
          "input": {
            "href": "<MASK_IMAGE_URL>",
            "storage": "external"
          },
          "linked": true,
          "enabled": true,
          "offset": {
            "x": 0,
            "y": 0
          }
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
        "name": "Masked Layer",
        "operation": { "type": "edit" },
        "pixelMask": {
          "source": {
            "url": "<MASK_IMAGE_URL>"
          },
          "isLinked": true,
          "isEnabled": true,
          "offset": {
            "horizontal": 0,
            "vertical": 0
          }
        }
      }
    ]
  }
}
```

### Mask property changes

**V1:**

```json
{
  "mask": {
    "input": {
      "href": "<URL>",
      "storage": "external"
    },
    "linked": true,
    "enabled": true,
    "clip": false
  }
}
```

**V2:**

```json
{
  "pixelMask": {
    "source": {
      "url": "<URL>"
    },
    "isLinked": true,
    "isEnabled": true,
    "offset": {
      "horizontal": 0,
      "vertical": 0
    }
  }
}
```

**Key Changes:**

| V1 Property | V2 Property | Notes |
| --- | --- | --- |
| `mask` | `pixelMask` | Layer-level property name changed |
| `input.href` + `input.storage` | `source.url` | A single URL field replaces the prior pair |
| `linked` | `isLinked` | Boolean field now follows the V2 naming pattern |
| `enabled` | `isEnabled` | Boolean field now follows the V2 naming pattern |
| `offset.x` / `offset.y` | `offset.horizontal` / `offset.vertical` | Coordinate field names changed |
| `clip` | Moved to layer level | V2 uses top-level `isClipped`; see [Clipping Masks](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-advanced.md#clipping-masks) below |

V2 moves the former `clip` behavior out of `mask.clip`. Control clipping masks with the layer-level `isClipped` property instead.

### Deleting a pixel mask

During an edit operation, V2 can remove the layer's pixel mask. Put `pixelMask.delete` on the layer and set it to `true`; that deletes the mask itself. If `delete` is `true`, the service disregards the remaining `pixelMask` settings: `source`, `isEnabled`, `isLinked`, and `offset`.

Pixel mask deletion applies only to **edit** operations (`operation.type: "edit"`). **Add** operations cannot use it.

**V2 Example - Delete pixel mask from a layer:**

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "Layer with Mask to Remove",
        "operation": { "type": "edit" },
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

**V2 Example - Delete pixel mask using layer ID:**

```json
{
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "id": 42,
        "operation": { "type": "edit" },
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

**Combining with other layer edits:**

The same layer entry may remove a pixel mask and alter additional layer properties:

```json
{
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Update Layer",
        "operation": { "type": "edit" },
        "opacity": 80,
        "isVisible": true,
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

**Validation rules:**

- `delete` must be a boolean (`true` or `false`).
- If `delete` is `false` or is omitted during add operations, the normal `pixelMask` fields still apply: `source`, `isEnabled`, `isLinked`, and `offset`.

### Mask requirements

The mask constraints are the same for both versions:

- Use a grayscale mask image
- Supported formats: JPEG, PNG, PSD
- White = visible, Black = hidden

## Layer groups

**A new document cannot yet be created with a group layer; support is listed as an upcoming feature.** For **editing an existing document**, adding a layer inside a group layer **is supported**; existing group layers can also be edited for name, visibility, protection, and similar settings. To place a layer in an existing group, use placement `type: "into"` with `referenceLayer`.

### Adding a layer into an existing group

For an **editing an existing document** flow, such as create-composite against an existing PSD, a new layer can be inserted into a group that is already present. Use `operation.type: "add"` together with `placement.type: "into"` and a `referenceLayer` that targets the group:

```json
{
  "type": "layer",
  "name": "Child Layer",
  "image": { "source": { "url": "<IMAGE_URL>" } },
  "operation": {
    "type": "add",
    "placement": {
      "type": "into",
      "referenceLayer": { "name": "My Group" }
    }
  }
}
```

The referenced group needs to exist already in the document, for example in the input PSD. New-document creation with a group layer remains an upcoming feature and is not currently supported.

### Editing group layers

For an existing group layer edit (`operation.type: "edit"`), these fields may be changed:

- `name` - sets the group layer name
- `isVisible` - controls whether the group is visible
- `protection` - applies protection flags and passes them to descendant layers
- `blendOptions` - carries opacity and blend mode values
- `pixelMask` - supplies mask settings

**Not supported for edit operations on group layers:** `isClipped`, because clipping belongs to content layers rather than group layers, and `children`, because edit operations do not accept a `children` array. Add layers to an existing group with `into` placement and `referenceLayer`.

**Example: Editing a group layer**

```json
{
  "edits": {
    "layers": [
      {
        "name": "My Group",
        "type": "group_layer",
        "operation": { "type": "edit" },
        "isVisible": true,
        "protection": ["all"]
      }
    ]
  }
}
```

## Blend modes and opacity

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Layer with Blend",
        "edit": {},
        "blendOptions": {
          "opacity": 75,
          "blendMode": "multiply"
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
        "name": "Layer with Blend",
        "opacity": 75,
        "blendMode": "multiply"
      }
    ]
  }
}
```

### Blend property changes

**V1:** Nested in `blendOptions`

```json
{
  "blendOptions": {
    "opacity": 75,
    "blendMode": "multiply"
  }
}
```

**V2:** Top-level properties

```json
{
  "opacity": 75,
  "blendMode": "multiply"
}
```

### Supported blend modes

The supported blend mode set is the same in V1 and V2:

- `normal`, `dissolve`
- `darken`, `multiply`, `colorBurn`, `linearBurn`, `darkerColor`
- `lighten`, `screen`, `colorDodge`, `linearDodge`, `lighterColor`
- `overlay`, `softLight`, `hardLight`, `vividLight`, `linearLight`, `pinLight`, `hardMix`
- `difference`, `exclusion`, `subtract`, `divide`
- `hue`, `saturation`, `color`, `luminosity`

## Layer visibility and lock

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Layer",
        "edit": {},
        "visible": false,
        "locked": true
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
        "name": "Layer",
        "isVisible": false,
        "protection": ["all"]
      }
    ]
  }
}
```

### Property name changes

| V1 | V2 |
| --- | --- |
| `visible` | `isVisible` |
| `locked` | `protection` (array, e.g. `["all"]` or `["none"]`) |

### Protection array (all flag types)

V2 replaces the Boolean `locked` value with the `protection` array. Valid values:

- `none` - No protection; the layer stays fully editable
- `all` - Full protection; every aspect is locked
- `transparency` - Prevents edits to layer transparency
- `composite` - Prevents layer compositing/painting changes
- `position` - Prevents movement of the layer position
- `artboard_autonest` - Artboard-specific autonest protection

If `all` or `none` is used, it must be the only item in the array. `["all","transparency"]` and `["none","position"]` are invalid; use `["all"]`, `["none"]`, or combine only the four individual flags.

**Examples:** `["all"]`, `["none"]`, `["transparency","position"]`

**Add operations:** For a newly added layer, omitted `protection`, `null`, or an empty array defaults to `["none"]`. That matches V1, where leaving out `locked` meant the layer was unlocked.

**Edit operations:** In an edit, omitted, `null`, and `[]` all leave the existing protection unchanged. Send `protection` only when intentionally setting it.

**Group layers:** During a group-layer edit, setting `protection` also applies it to every descendant, including child layers and nested groups.

### Artboard visibility behavior differs between V1 and V2

The two API versions handle `visible: false` on an **artboard root layer** differently:

| Behavior | V1 (`documentOperations`) | V2 (`create-composite`) |
| --- | --- | --- |
| Artboard content rendered | **Always** (visibility ignored) | Only if `isVisible: true` |
| Output dimensions | Full document canvas | Shrinks to visible artboards only |
| Effect on child layers | No change | Children not composited |

**V1 quirk:** In V1, hiding an artboard container by `id`, such as `{"id": 328, "visible": false}`, does not change the rendered image. Even when artboard visibility is tracked, render time ignores it and returns the full document canvas at its original pixel size. This is a known V1 limitation.

**V2 behavior:** V2 honors artboard visibility correctly. If a PSD has several artboards and some are hidden, the generated image is sized around only the visible artboard content.

**Migration impact:** A V1 export workflow that hides artboard root IDs to isolate one artboard will get a different, smaller output size in V2. Treat that as the expected behavior and update downstream assumptions about dimensions.

## Layer transformations

### Positioning and sizing

**V1:** Position and size are supplied through `bounds`

```json
{
  "name": "Transformed Layer",
  "bounds": {
    "left": 100,
    "top": 100,
    "width": 500,
    "height": 300
  }
}
```

**V2:** Position and size are supplied through `transform`, `offset`, and `dimension`

```json
{
  "name": "Transformed Layer",
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

When a request includes the `transform` object, V2 also needs `transformMode: "custom"`. Beyond simple placement and sizing, `transform` can also carry `horizontalAlign`, `verticalAlign`, `anchor`, `skew`, and degree-based `angle` values.

**`transform` object is only valid with `transformMode: "custom"`**. Sending `transform` with `fit`, `fill`, or `none` makes the service respond with HTTP 400.

**After scaling, `fit` and `fill` place the layer at `(0, 0)`**. For any nonzero placement, first send the fit/fill request without `transform`, then issue another request for the same layer with `transformMode: "custom"` and the target `offset`.

**Custom mode uses two passes when `dimension`, `angle`, or `skew` is present:**

1. **Pass 1** - if `anchor` is missing, PIE uses `(0, 0)`; otherwise geometry (`dimension` + `angle` + `skew`) pivots on `anchor`.
2. **Pass 2** - `setOffset` chooses `offset` first, then `horizontalAlign`/`verticalAlign`, and finally the fallback that restores original x, y so the layer does not drift.

**Geometry-only** requests, meaning dimension/angle/skew without offset or alignment, use the fallback; the original position is preserved silently. That matches V1 behavior.

### Alignment options

**V1:** `horizontalAlign` and `verticalAlign`

```json
{
  "name": "Centered Layer",
  "horizontalAlign": "center",
  "verticalAlign": "center"
}
```

**V2:** Uses placement alignment (for add/move operations)

```json
{
  "name": "Centered Layer",
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

## Clipping masks

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Clipped Layer",
        "edit": {},
        "mask": {
          "clip": true
        }
      }
    ]
  }
}
```

### V2 approach

In V2, the clipping mask flag sits directly on the layer instead of inside `mask`:

```json
{
  "edits": {
    "layers": [
      {
        "name": "Clipped Layer",
        "isClipped": true
      }
    ]
  }
}
```

**Key Change:**

| V1 Property | V2 Property | Notes |
| --- | --- | --- |
| `mask.clip` | `isClipped` | Moved from mask object to top-level layer property |

V2 restructures clipping masks around `isClipped`. Set that Boolean on the layer itself rather than nesting it under `mask`.

## Migration checklist

When moving advanced layer operations from V1 to V2, verify this conversion list:

- [ ] Move: convert `move: {...}` into `operation: {type: "move", placement: {...}}`
- [ ] Delete: convert `delete: {}` into `operation: {type: "delete"}`
- [ ] Transforms: replace `bounds` by setting `transform` with `offset` plus `dimension`, and include `transformMode: "custom"`
- [ ] Do not send a `transform` object when `transformMode` is `fit`, `fill`, or `none`; that request returns 400
- [ ] `fit`/`fill`: scaling leaves the layer at (0,0); for another position, follow with a second `transformMode: "custom"` request using the desired offset
- [ ] `custom` with dimension/angle/skew: apply geometry first with `anchor` as pivot and default (0,0), then position through `setOffset`; priority is offset -> alignment -> original x,y restoration
- [ ] Masks: rename `mask` as `pixelMask`
- [ ] Masks: map `mask.input` to `pixelMask.source`
- [ ] Masks: map `mask.linked` to `pixelMask.isLinked`
- [ ] Masks: map `mask.enabled` to `pixelMask.isEnabled`
- [ ] Masks: map `offset.x`/`offset.y` to `offset.horizontal`/`offset.vertical`
- [ ] Masks: delete a pixel mask by using `pixelMask: { "delete": true }` on an edit operation
- [ ] Clipping: put `mask.clip` on the top-level `isClipped` property
- [ ] Groups: replace `type: "layerSection"` with `type: "group_layer"`
- [ ] Groups: use `into` placement and `referenceLayer` instead of a `children` array
- [ ] Blend: promote `blendOptions.opacity` to top-level `opacity`
- [ ] Blend: promote `blendOptions.blendMode` to top-level `blendMode`
- [ ] Visibility: rename `visible` as `isVisible`
- [ ] Lock: use `protection` for former `locked`; accepted array examples include `["all"]` and `["none"]`
- [ ] Drop standalone `edit: {}` blocks
- [ ] Storage: convert `href`/`storage` syntax to `url`/`storageType`

## Common migration issues

### Issue: multiple operations on same layer

**Problem:** V1 could combine edit + move in one layer block

**Solution:** In V2, each layer reference selects a single operation type

```json
// Use move as the operation when movement and property edits must be combined
{
  "name": "Layer",
  "opacity": 80,
  "operation": {
    "type": "move",
    "placement": {
      "type": "top"
    }
  }
}
```

### Issue: group children structure

**Problem:** V1 used a nested `children` array

**Solution:** V2 adds layers into an existing group through sequential layer entries, using `into` placement with `referenceLayer`; see the example below.

```json
// Create the group first
{
  "type": "group_layer",
  "name": "Group",
  "operation": {"type": "add", "placement": {"type": "top"}}
},
// Then add layers into it
{
  "type": "layer",
  "name": "Child",
  "image": {
    "source": {...}
  },
  "operation": {
    "type": "add",
    "placement": {
      "type": "into",
      "referenceLayer": {"name": "Group"}
    }
  }
}
```

### Issue: blend mode naming

**Problem:** Some blend modes use different names

**Solution:** Use the exact values from the supported list; V1 and V2 share that list

## Complete migration example

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
        "name": "Background",
        "move": {
          "insertBottom": true
        }
      },
      {
        "name": "Old Layer",
        "delete": {}
      },
      {
        "type": "layerSection",
        "name": "Effects Group",
        "add": {
          "insertTop": true
        }
      },
      {
        "type": "layer",
        "name": "Overlay",
        "add": {
          "insertInto": {
            "name": "Effects Group"
          }
        },
        "input": {
          "href": "<OVERLAY_URL>",
          "storage": "external"
        },
        "blendOptions": {
          "opacity": 60,
          "blendMode": "overlay"
        }
      },
      {
        "name": "Existing Layer",
        "edit": {},
        "mask": {
          "input": {
            "href": "<MASK_URL>",
            "storage": "external"
          },
          "linked": true,
          "enabled": true
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

**V2 create-composite:** A group layer still cannot be created as part of new-document creation; that support remains an upcoming feature. For an existing document, the overlay can use `into` placement with `referenceLayer` when the PSD already contains the group.

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
        "name": "Background",
        "operation": {
          "type": "move",
          "placement": {
            "type": "bottom"
          }
        }
      },
      {
        "name": "Old Layer",
        "operation": {
          "type": "delete"
        }
      },
      {
        "type": "layer",
        "name": "Overlay",
        "image": {
          "source": {
            "url": "<OVERLAY_URL>"
          }
        },
        "opacity": 60,
        "blendMode": "overlay",
        "operation": {
          "type": "add",
          "placement": {
            "type": "into",
            "referenceLayer": {
              "name": "Effects Group"
            }
          }
        }
      },
      {
        "name": "Existing Layer",
        "operation": { "type": "edit" },
        "pixelMask": {
          "source": {
            "url": "<MASK_URL>"
          },
          "isLinked": true,
          "isEnabled": true
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

## Feature availability

### Supported V2 layer capabilities

- ✅ Layer movement
- ✅ Layer deletion
- ✅ Pixel-mask layer operations: add, edit, and delete
- ✅ Clipping masks through the `isClipped` property
- ✅ Group layers
- ✅ Opacity and blend-mode controls
- ✅ Visibility and lock controls
- ✅ Bounds-based layer positioning

### V1 feature parity still TBD

- ⏳ Group children deletion options
- ⏳ Some alignment options

## Next steps

- Start with [Layer Operations Overview](api-v1-to-v2-4.md) for the general model
- Use [Image Layers](api-v1-to-v2-4.md) for placement patterns
- Open [Text Layers](api-layer-operations-text.md) for text operations
- Open [Adjustment Layers](api-layer-operations-adjustments.md) for adjustment workflows
