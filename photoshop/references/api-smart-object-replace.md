# Smart Object Replace

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

For migrations, map V1 workflows that call `/pie/psdService/smartObject` onto V2's `/v2/create-composite` endpoint.

V1 workflows could also call `/pie/psdService/documentOperations` for smart object layer changes inside broader document operations. [Smart Object Layer Operations](api-layer-operations-smart-objects.md) covers that route. This page is limited to the dedicated `/psdService/smartObject` endpoint.

## Overview

V1 exposed `/psdService/smartObject` as a convenience endpoint dedicated to two tasks:

- **Place** — insert a new smart object layer into an existing PSD
- **Replace** — exchange the content of an existing smart object layer

In V2, `/v2/create-composite` performs both tasks through `edits.layers` entries whose `type` is `"smart_object_layer"`.

**V1 Endpoint:** `/pie/psdService/smartObject`

**V2 Endpoint:** `/v2/create-composite`

## Place a Smart Object (Add)

### V1 Request

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/smartObject \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "name": "My Smart Object",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<SMART_OBJECT_SOURCE_URL>",
          "storage": "external"
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "vnd.adobe.photoshop"
    }
  ]
}'
```

### V2 Request

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
        "name": "My Smart Object",
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

## Replace Smart Object Content

### V1 Request

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/smartObject \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "name": "Existing Smart Object Layer",
        "input": {
          "href": "<NEW_CONTENT_URL>",
          "storage": "external"
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "vnd.adobe.photoshop"
    }
  ]
}'
```

### V2 Request

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
        "name": "Existing Smart Object Layer",
        "operation": {
          "type": "edit"
        },
        "smartObject": {
          "smartObjectFile": {
            "source": {
              "url": "<NEW_CONTENT_URL>"
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

## Key Field Mapping

| V1 Field | V2 Field | Notes |
| --- | --- | --- |
| `inputs[0].href` | `image.source.url` | PSD input |
| `inputs[0].storage` | _(removed)_ | Not needed for presigned URLs |
| `options.layers[].name` | `edits.layers[].name` | Layer name unchanged |
| `options.layers[].add.insertTop` | `edits.layers[].operation.type: "add"` + `placement.type: "top"` | See [Placement Options](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/convenience-apis/smart-object-replace.md#placement-options) |
| `options.layers[].add.insertBottom` | `placement.type: "bottom"` |  |
| `options.layers[].add.insertAbove` | `placement.type: "above"` + `referenceLayer` |  |
| `options.layers[].add.insertBelow` | `placement.type: "below"` + `referenceLayer` |  |
| `options.layers[].input.href` | `edits.layers[].smartObject.smartObjectFile.source.url` | Smart object source file |
| `options.layers[].input.storage` | _(removed)_ | Not needed for presigned URLs |
| _(no field — replace implied by omitting `add`)_ | `operation.type: "edit"` | V2 requires explicit operation |
| `outputs[0].href` | `outputs[0].destination.url` | Output destination |
| `outputs[0].type: "vnd.adobe.photoshop"` | `outputs[0].mediaType: "image/vnd.adobe.photoshop"` | Format field renamed |

## Placement Options

### V1 Placement

```json
{
  "add": {
    "insertTop": true
  }
}
```

```json
{
  "add": {
    "insertAbove": { "name": "Background" }
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

Supported placement types are `"top"`, `"bottom"`, `"above"`, `"below"`, and `"into"`.

V2 identifies the anchor layer through `referenceLayer` using `name` or `id`, rather than inline object references.

## V1 Limitations Lifted in V2

| V1 Limitation | V2 Behavior |
| --- | --- |
| Linked smart objects not supported | `smartObject.isLinked: true` supported |
| Objects over 2000×2000 px are rasterized | No equivalent rasterization limit |
| Smart object name must be alphanumeric | Any valid layer name accepted |
| Replaced smart object auto-fits original bounding box | Use `transformMode` to control fit behavior |

For transform behavior, see [Smart Object Layer Operations](api-layer-operations-smart-objects.md).

## Migration Checklist

- [ ] Replace endpoint `https://image.adobe.io/pie/psdService/smartObject` with `https://photoshop-api.adobe.io/v2/create-composite`
- [ ] Move `inputs[0].href` into `image.source.url`
- [ ] Drop `storage` fields (presigned URLs do not need them)
- [ ] Add `"type": "smart_object_layer"` to every layer entry
- [ ] For add operations: map `add.insertTop/Bottom/Above/Below` to `operation.type: "add"` plus `placement`
- [ ] For replace operations: include `operation.type: "edit"` (V2 requires it; replacement is not implicit)
- [ ] Move `input.href` into `smartObject.smartObjectFile.source.url`
- [ ] Change `outputs[0].href` into `outputs[0].destination.url`
- [ ] Change `outputs[0].type` into `outputs[0].mediaType: "image/vnd.adobe.photoshop"`

## Additional Resources

- [Smart Object Layer Operations](api-layer-operations-smart-objects.md) — Detailed V2 smart object layer reference for transform settings, linked-object behavior, and migration from V1 `documentOperations`
- [Layer Operations Overview](api-v1-to-v2-4.md) — V2 processing sequence and `referenceLayer`
- [Text Layer Operations Migration](api-text-layer-operations.md) — Related migration guide for the companion convenience API
