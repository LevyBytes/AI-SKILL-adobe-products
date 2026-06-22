# Manifest Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide to migrate the v1 document manifest endpoint to `/v2/generate-manifest`.

## Overview

The manifest generation endpoint extracts detailed PSD document data such as:

- Dimensions and properties for the document
- Hierarchy and structure for layers
- Layer properties together with bounds
- Optional thumbnails for layers
- Metadata in XMP

**V1 Endpoint:**

- `/pie/psdService/documentManifest`

**V2 Endpoint:**

- `/v2/generate-manifest`

## Basic migration example

Both V1 and V2 require explicit opt-in before generating layer thumbnails:

- **V1**: Include `options.thumbnails` with its `type` property
- **V2**: Enable `includeLayerThumbnails: true`; when needed, choose the format through `exportOptions`

**Key differences**

**Input changes:**

- V1 source URL field `inputs[].href` → V2 source URL field `image.source.url`
- V1 input storage field `inputs[].storage` → V2 storage declaration in outputs

**Option changes:**

- V1: `options.thumbnails` object with `type` → V2: `includeLayerThumbnails` boolean plus `exportOptions.mediaType`
- V1: Thumbnail format stored in `options.thumbnails.type` → V2: Thumbnail format moves to `exportOptions.mediaType`
- V1: Layer information is always included → V2: Layer information is always included
- V1: Layer `locked` boolean → V2: Layer `protection` array using flags none, all, transparency, composite, position, artboard_autonest
- V2 adds `includeXmp`, `maximumThumbnailDepth`, and `trimToTransparency`
- Thumbnail generation still requires explicit opt-in in both versions

**Output Structure:**

- V1: Manifest is returned in the response → V2: Manifest is written to the destination supplied in `outputs`

### V1 approach

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentManifest \
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
    "thumbnails": {
      "type": "image/jpeg"
    }
  }
}'
```

### V2 approach

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/generate-manifest \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "includeLayerThumbnails": true,
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_OUTPUT_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}'
```

## Configuration options

### Thumbnail format migration

**V1 Thumbnail Formats:**

V1 accepted three thumbnail formats through `options.thumbnails.type`:

- `image/jpeg`
- `image/png`
- `image/tiff`

**V2 Equivalent:**

For V2, put the format under `exportOptions.mediaType`:

```json
{
  "includeLayerThumbnails": true,
  "exportOptions": {
    "mediaType": "image/jpeg",
    "quality": "high"
  }
}
```

For PNG, use:

```json
{
  "includeLayerThumbnails": true,
  "exportOptions": {
    "mediaType": "image/png",
    "compression": "medium"
  }
}
```

### Include layer thumbnails

Request thumbnail images for every layer:

```json
{
  "includeLayerThumbnails": true
}
```

Default: `false`

**Note:** Thumbnail generation is opt-in in both V1 and V2. V1 used an `options.thumbnails` object with a `type` property; V2 uses `includeLayerThumbnails: true`.

### Maximum thumbnail depth

Set how far into the layer hierarchy thumbnail creation should go:

```json
{
  "includeLayerThumbnails": true,
  "maximumThumbnailDepth": 3
}
```

- `0`: No maximum depth; create thumbnails for every layer
- `> 0`: Create thumbnails only through the specified depth
- Default: All layers

### Include XMP metadata

Add XMP metadata to the manifest:

```json
{
  "includeXmp": true
}
```

Default: `false`

### Trim to transparency

Crop each layer thumbnail tightly around its visible content by removing transparent pixels:

```json
{
  "includeLayerThumbnails": true,
  "trimToTransparency": true
}
```

Default: `false`

**Important:** `trimToTransparency` is honored only when `includeLayerThumbnails` is `true`. With `includeLayerThumbnails` set to `false`, the setting does nothing.

**Adjustment layers and layers with no pixel data:** For these layers, `trimToTransparency` does not change the result. Their thumbnails always come back as a blank white canvas, independent of this setting.

**Note:** The `trimToTransparency` flag belongs to the `/v2/generate-manifest` endpoint. To trim exported images from `/v2/create-composite` or `/v2/execute-actions`, place `cropMode: "trim_to_transparency"` in the output options instead.

### Export options

Set thumbnail export quality or compression:

```json
{
  "exportOptions": {
    "mediaType": "image/jpeg",
    "quality": "high"
  }
}
```

or

```json
{
  "exportOptions": {
    "mediaType": "image/png",
    "compression": "medium"
  }
}
```

## Output options

### External storage

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}
```

### Hosted storage

```json
{
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "application/json"
    }
  ]
}
```

### Embedded storage

```json
{
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```

### Creative Cloud storage

```json
{
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "/path/to/manifest.json"
      },
      "mediaType": "application/json"
    }
  ]
}
```

## Complete example with all options

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/generate-manifest \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "includeLayerThumbnails": true,
  "maximumThumbnailDepth": 5,
  "includeXmp": true,
  "trimToTransparency": true,
  "exportOptions": {
    "mediaType": "image/jpeg",
    "quality": "high"
  },
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_OUTPUT_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}'
```

## Manifest structure

A generated manifest can include the full document description:

```json
{
  "document": {
    "name": "example.psd",
    "width": 1920,
    "height": 1080,
    "depth": 8,
    "mode": "rgb",
    "photoshopBuild": "...",
    "imageInfo": {
      "format": "image/vnd.adobe.photoshop"
    }
  },
  "layers": [
    {
      "id": 1,
      "name": "Background",
      "type": "pixel_layer",
      "visible": true,
      "protection": ["none"],
      "bounds": {
        "top": 0,
        "left": 0,
        "right": 1920,
        "bottom": 1080
      },
      "thumbnail": {
        "mediaType": "image/jpeg",
        "url": "<THUMBNAIL_URL>"
      }
    },
    {
      "id": 2,
      "name": "Text Layer",
      "type": "text_layer",
      "visible": true,
      "text": {
        "content": "Hello World",
        "characterStyles": [...]
      }
    },
    {
      "id": 3,
      "name": "Group",
      "type": "group_layer",
      "visible": true,
      "children": [...]
    }
  ],
  "xmp": "...",
  "artboards": [...]
}
```

## Pixel mask details in manifest response

If a layer includes a pixel mask, the manifest reports mask data in several places, with each location serving a different purpose. Migration code needs to distinguish those fields to handle mask data correctly.

### V1 vs V2 Pixel Mask Structure Changes

**Important:** V2 uses a new consolidated model for pixel mask data, and it differs substantially from V1.

**V1 Behavior:**

- Manifest responses placed a `mask` property directly on each layer
- Mask fields were `enabled`, `linked`, and `offset`, with `x`/`y` coordinates
- The response did not include separate metadata for mask presence or bounds
- Edit-operation storage used `layerSettings.imageMask` when setting mask properties

**V2 Behavior:**

- Pixel mask fields now live in a layer-level `pixelMask` object
- Added metadata fields include `hasMask`, `extendOpaque`, and `bounds`
- Editable fields remain `enabled`, `linked`, and `offset`; edit operations can modify them
- Offset coordinates use `horizontal`/`vertical` rather than `x`/`y`
- Common mask settings such as density and feather move into `userMask`
- The same structure is used for manifest responses and edit operations

**Migration Note:** Clients moving from V1 should update their code to:

1. Read `pixelMask` rather than `mask` for pixel mask fields
2. Replace `offset.x`/`offset.y` reads with `offset.horizontal`/`offset.vertical`
3. Test `pixelMask.hasMask` before assuming mask pixel data exists
4. Test `layerSettings.clippingMask` when checking whether a layer is clipped
5. Get density and feather values from the separate `userMask` property

### Mask-related fields overview

The manifest has two structures related to masks:

1. **`userMask`** - Shared mask settings for pixel and vector masks, including density and feather
2. **`pixelMask`** - Unified pixel mask structure that holds metadata and editable fields

### Complete layer with pixel mask example

```json
{
  "id": 5,
  "name": "Layer with Mask",
  "type": "layer",
  "visible": true,
  "protection": ["none"],
  "bounds": {
    "top": 100,
    "left": 100,
    "width": 500,
    "height": 400
  },
  "layerSettings": {
    "clippingMask": true
  },
  "userMask": {
    "density": 100,
    "feather": 0
  },
  "pixelMask": {
    "hasMask": true,
    "extendOpaque": false,
    "bounds": {
      "top": 100,
      "left": 100,
      "width": 500,
      "height": 400
    },
    "enabled": true,
    "linked": true,
    "offset": {
      "horizontal": 0,
      "vertical": 0
    }
  }
}
```

### Field descriptions and client migration guide

### Common Layer Properties

| Property | Type | Location | Description |
| --- | --- | --- | --- |
| `clippingMask` | Boolean | `layerSettings.clippingMask` | Indicates whether the layer is clipped to the layer below it. |
| `protection` | Array of strings | Layer level | V2: Protection flags (none, all, transparency, composite, position, artboard_autonest). Replaces V1 `locked` boolean. When using `none` or `all`, array must contain only that element. |

**Note:** In edit operations, set this through the `isClipped` field at layer config level, such as `layers[].isClipped: true`.

**Migration note:** V2 returns `protection` as an array in the manifest, replacing the V1 `locked` boolean. Map `locked: true` to `protection: ["all"]`; map `locked: false` to `protection: ["none"]` or an empty value.

### 1. userMask - Common Mask Properties

Holds fields shared by vector and pixel masks:

| Property | Type | Description |
| --- | --- | --- |
| `density` | Integer | Mask opacity (0-100). Controls overall mask strength |
| `feather` | Number | Edge softness in pixels (0-250). Blurs the mask edges |

### 2. pixelMask - Unified Pixel Mask Structure

Collects pixel mask data in one structure, combining read-only metadata with editable fields:

**Metadata Properties (read-only):**

| Property | Type | Description |
| --- | --- | --- |
| `hasMask` | Boolean | Whether mask pixel data exists |
| `extendOpaque` | Boolean | How out-of-bounds areas are treated (`true` = opaque outside bounds, `false` = transparent) |
| `bounds` | Object | Spatial extent of the mask data (top, left, right, bottom) |

**Editable Properties:**

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| `enabled` | Boolean | Toggle mask visibility without deleting data | `true` |
| `linked` | Boolean | Whether mask transforms with the layer | `true` |
| `offset` | Object | Independent position relative to layer origin | `{horizontal: 0, vertical: 0}` |

**Note:** The editable fields (`enabled`, `linked`, `offset`) work in `create-composite` edit operations and also appear in manifest responses, giving every API operation the same shape.

## Accessing the manifest

### With embedded storage

With embedded storage, the job status response carries the manifest inline:

```shell
curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

Response:

```json
{
  "jobId": "...",
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "json",
          "content": {
            "document": {...},
            "layers": [...]
          }
        },
        "mediaType": "application/json"
      }
    ]
  }
}
```

### With external/hosted storage

For external or hosted storage, retrieve the manifest from the URL returned by the status response:

```shell

## Get job status

curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"

## Response includes output URL

{
  "jobId": "...",
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "url": "<MANIFEST_URL>"
      }
    ]
  }
}

## Download manifest

curl -X GET "<MANIFEST_URL>" -o manifest.json
```

## Download manifest — Use cases

### Document analysis

Use this shape when the goal is document-structure analysis:

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "includeLayerThumbnails": false,
  "includeXmp": false,
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```

### Layer preview generation

Create thumbnails for every layer:

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "includeLayerThumbnails": true,
  "maximumThumbnailDepth": 0,
  "trimToTransparency": true,
  "exportOptions": {
    "mediaType": "image/png",
    "compression": "medium"
  },
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}
```

### Metadata extraction

Pull metadata from XMP:

```json
{
  "image": {
    "source": {
      "url": "<PSD_URL>"
    }
  },
  "includeLayerThumbnails": false,
  "includeXmp": true,
  "outputs": [
    {
      "destination": {
        "embedded": "json"
      },
      "mediaType": "application/json"
    }
  ]
}
```

## Download manifest — Status checking

Check the manifest generation job status:

```shell
curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

For response-shape details, see the [status migration guide](api-status-migration.md).

## Download manifest — Common migration issues

### Issue: Thumbnail syntax change

**Problem:** V1 thumbnail-generation syntax must be changed for V2

**Solution:** Both versions make thumbnail creation explicit, but the request shape changed:

```json
{
  "includeLayerThumbnails": true
}
```

**V1 Behavior:**

```json
{
  "options": {
    "thumbnails": {
      "type": "image/jpeg"
    }
  }
}
```

**V2 Equivalent:**

```json
{
  "includeLayerThumbnails": true,
  "exportOptions": {
    "mediaType": "image/jpeg"
  }
}
```

### Issue: Missing outputs array

**Problem:** The V2 request omits `outputs`

**Solution:** Always provide an `outputs` array

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}
```

### Issue: Incorrect media type

**Problem:** The output uses an unsuitable media type

**Solution:** Set manifest output to `application/json`

```json
{
  "mediaType": "application/json"
}
```

### Issue: Expecting manifest in response

**Problem:** The client expects the manifest in the initial response

**Solution:** Poll status to find the manifest URL or embedded payload

```shell

## Step 2: Poll status

curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} ...
```

## Step 2: Poll status — Performance considerations

**Thumbnail Generation:**

- Creating thumbnails for every layer can take substantial time on complex documents
- Use `maximumThumbnailDepth` to restrict how far generation descends
- Disable thumbnails when only the document structure is required
- Turning on `trimToTransparency` adds processing for each layer; enable it only when tightly cropped thumbnails are needed

**XMP Metadata:**

- XMP extraction has low overhead
- Request it only when metadata is required

**Output Storage:**

- Choose embedded storage for immediate access to small manifests
- Choose hosted storage when you do not want to manage storage
- Choose external storage when integrating with existing workflows

## Step 2: Poll status — Next steps

- For output-storage choices, read the [storage solutions guide](api-getting-started.md)
- Use the [status migration guide](api-status-migration.md) for polling patterns
- Try manifest generation against development endpoints
