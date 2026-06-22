# Layer Operations Background

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide when converting background-layer operations from the V1 `/documentOperations` endpoint to the V2 `/create-composite` endpoint.

## Overview

**V1 Endpoint:**

- `/pie/psdService/documentOperations` - Add, edit, or delete background layers

**V2 Endpoint:** `/v2/create-composite` with `edits.layers`

In a Photoshop document, the background layer is the default layer and behaves differently from normal image layers. V1 refers to it as `type: "backgroundLayer"`; V2 uses the snake_case form `type: "background_layer"`.

## Supported Operations

| Operation | V1 | V2 | Notes |
| --- | --- | --- | --- |
| Add (create) | ✓ | ✓ | Create a new background layer with pixel content |
| Read (manifest) | ✓ | ✓ | Background appears with `id: -1` in v1. In v2, a valid layer ID is returned. For assets that contain only a background layer, the ID is `0` |
| Edit pixel content | ✓ (internal auto-convert) | ✓ (via `image.source`) | V2 is explicit about image replacement |
| Convert to layer | ✓ (internal) | ✓ (explicit `convertToLayer: true`) | Convert background to regular layer |
| Delete | ✓ | ✓ | Remove background layer |
| Move | ✗ | ✗ | Background layer position is fixed; move operations not supported |

## Key Migration Changes

### Type Name Change

**V1:** `"backgroundLayer"`

```json
{
  "type": "backgroundLayer"
}
```

**V2:** `"background_layer"` (snake_case)

```json
{
  "type": "background_layer"
}
```

### Visibility Property

**V1:** `"visible": true`

**V2:** `"isVisible": true`

### Layer Lock Property

**V1:** `"locked": true`

**V2:** `"protection": ["all"]` (array of protection types)

For protection details, see [Advanced Layer Operations](api-layer-operations-advanced.md).

### Operation Structure

**V1:** Separate `add` block

```json
{
  "type": "backgroundLayer",
  "name": "Background",
  "add": {},
  "input": {
    "href": "<IMAGE_URL>",
    "storage": "external"
  }
}
```

**V2:** Explicit `operation` block

```json
{
  "type": "background_layer",
  "name": "Background",
  "image": {
    "source": {
      "url": "<IMAGE_URL>"
    }
  },
  "operation": {
    "type": "add"
  }
}
```

## Adding a Background Layer

### V1 Approach

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
        "type": "backgroundLayer",
        "name": "Background",
        "add": {},
        "input": {
          "href": "<IMAGE_URL>",
          "storage": "external"
        },
        "locked": false,
        "visible": true
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

### V2 Approach

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
        "type": "background_layer",
        "name": "Background",
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

The operation for background layers does not take `placement`; they always sit at the bottom of the layer stack. Other layer types differ because they require an explicit placement.

## Editing a Background Layer

### V1 Approach

```json
{
  "options": {
    "layers": [
      {
        "type": "backgroundLayer",
        "id": -1,
        "edit": {},
        "visible": false,
        "locked": true
      }
    ]
  }
}
```

### V2 Approach

For v2 edits, include an explicit `operation` block and identify the target layer by the `id` or `name` that the manifest returned.
These properties can be changed **directly** on a background layer without converting it first:

- `isVisible` - changes whether the layer is visible
- `image.source` - supplies new pixels for the background

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "id": 1,
        "operation": {
          "type": "edit"
        },
        "isVisible": false
      }
    ]
  }
}
```

Properties such as `transform`, `transformMode`, `pixelMask`, `protection`, and `blendOptions` are **not supported** directly on a background layer. Convert the background to a regular layer with `convertToLayer: true` before applying those options.

V2 layer edits **require** an explicit `operation` block with `type: "edit"`. Use the `id` or `name` from the manifest when referencing the background layer:

## Editing Pixel Content

### V1 internal form

V1 performed background-layer pixel replacement inside the service:

```json
{
  "options": {
    "layers": [
      {
        "type": "backgroundLayer",
        "id": -1,
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

### V2 explicit form

With V2, callers express replacement through `image.source`:

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "id": 1,
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

## Converting Background to Regular Layer

A background layer can be promoted into a normal layer; in V2, that action is represented as an explicit operation rather than a side effect.

### V1 implicit form

Under V1, operations could trigger the conversion without a separate request field.

### V2 conversion request

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "id": 1,
        "operation": {
          "type": "edit"
        },
        "convertToLayer": true,
        "convertedLayerName": "Layer_From_Background"
      }
    ]
  }
}
```

Set the optional `convertedLayerName` property when the converted layer needs an immediate name; later entries in the same `layers` array can target that name. Once the conversion completes, the item stops being the background layer and supports regular-layer actions such as moving, deleting, and additional edits.

The following full request converts the background layer first and then edits the resulting regular layer:

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "name": "Background",
        "operation": {
          "type": "edit"
        },
        "convertToLayer": true,
        "convertedLayerName": "Layer_From_Background"
      },
      {
        "type": "layer",
        "name": "Layer_From_Background",
        "operation": {
          "type": "edit"
        },
        "transformMode": "custom",
        "transform": {
          "offset": {
            "horizontal": 100,
            "vertical": 100
          }
        }
      }
    ]
  }
}
```

## Reading Background Layer in Manifest

For V2 background-layer work, read the real layer ID from the manifest and reuse that value for later operations. If a document has only a background layer and no other layers, the returned ID is `0`.
The same manifest entry also includes background-specific metadata:

### V2 manifest example

```json
{
  "id": 0,
  "index": 0,
  "type": "background_layer",
  "name": "Background",
  "visible": true,
  "protection": ["none"],
  "background": {
    "canConvertToLayer": true
  },
  "blendOptions": {
    "opacity": 100,
    "blendMode": "normal"
  }
}
```

Important fields:

- **`id: 0`** - For a document whose only layer is the background, the background layer reports `id` as `0`.
- **`background.canConvertToLayer`** - Shows whether the background may be promoted to a regular layer.
- **`index: 0`** - The background stays at index 0, the bottom position in the layer stack.

## Deleting a Background Layer

### V1 delete form

```json
{
  "options": {
    "layers": [
      {
        "type": "backgroundLayer",
        "id": -1,
        "delete": {}
      }
    ]
  }
}
```

### V2 delete form

```json
{
  "edits": {
    "layers": [
      {
        "type": "background_layer",
        "id": 1,
        "operation": {
          "type": "delete"
        }
      }
    ]
  }
}
```

## Unsupported Operations

### Move

The background layer always remains at the base of the layer stack, so move requests are not available for it.

## Migration Checklist

When updating background-layer requests from V1 to V2:

- [ ] Replace `type: "backgroundLayer"` with `type: "background_layer"`.
- [ ] Rename `visible` as `isVisible`.
- [ ] Convert `locked` into a `protection` array, using values such as `["all"]` for a fully locked layer and `["none"]` for an unlocked layer.
- [ ] Swap `add: {}` for `operation: { "type": "add" }`.
- [ ] Swap `edit: {}` for `operation: { "type": "edit" }`.
- [ ] Swap `delete: {}` for `operation: { "type": "delete" }`.
- [ ] Use `image.source.url` instead of `input.href` when providing pixel content.
- [ ] Omit `input.storage`, because external storage is the default.
- [ ] For edits or deletes, target the background layer with the `id` returned by the manifest response.
- [ ] Adjust manifest parsing for the `background_layer` type name.
- [ ] Prefer the explicit `convertToLayer: true` field over implicit conversion behavior.
- [ ] Note: move operations are unavailable because the background position is fixed.
- [ ] Confirm that unsupported move-operation errors are handled correctly.

## Common Migration Issues

### Migration issue: layer ID mismatch

**Symptom:** A request tries to edit the background layer by using ID `-1`.

**Correction:** For background-layer operations, take the `id` value from the manifest response.

```json
{
  "type": "background_layer",
  "id": 0,
  "operation": {
    "type": "edit"
  }
}
```

### Migration issue: missing operation block

**Symptom:** An edit request omits an explicit `operation` type.

**Correction:** Include an `operation` block and set its type directly.

```json
{
  "operation": {
    "type": "edit"
  }
}
```

### Migration issue: unsupported move operation

**Symptom:** The request attempts to reposition the background layer.

**Correction:** Background layers cannot be moved. Convert the background to a regular layer first when repositioning is required:

```json
{
  "type": "background_layer",
  "id": 1,
  "operation": {
    "type": "edit"
  },
  "convertToLayer": true,
  "convertedLayerName": "Layer_From_Background"
}
```

### Migration issue: type-name case

**Symptom:** V2 input uses `"backgroundLayer"` in camelCase.

**Correction:** In V2, specify the snake_case form.

```json
{
  "type": "background_layer"
}
```

## Complete Migration Example

### V1 documentOperations sample

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
        "type": "backgroundLayer",
        "name": "Background",
        "add": {},
        "input": {
          "href": "<BACKGROUND_IMAGE_URL>",
          "storage": "external"
        },
        "locked": false,
        "visible": true
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

### V2 create-composite sample

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
        "type": "background_layer",
        "name": "Background",
        "image": {
          "source": {
            "url": "<BACKGROUND_IMAGE_URL>"
          }
        },
        "operation": {
          "type": "add"
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

## Feature Availability

### Currently Available in V2

- ✅ Create a background layer from pixel content
- ✅ Change background-layer properties, including visibility
- ✅ Swap in new pixel content for the background layer
- ✅ Promote a background layer into a regular layer
- ✅ Remove a background layer
- ✅ Return background-layer data through the manifest

### V1 Features Not Yet in V2

- ⏳ No known gap at present; the V2 API covers the V1 background-layer feature set.

## Related Guides

- [Layer Operations Overview](api-v1-to-v2-4.md): general layer concepts plus processing order.
- [Image Layer Operations](api-v1-to-v2-4.md): standard image and pixel-layer behavior.
- [Advanced Layer Operations](api-layer-operations-advanced.md): protection, masks, and blend modes.

## See also

- [Unsupported](uxp-unsupported.md)
