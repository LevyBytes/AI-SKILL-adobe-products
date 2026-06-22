# Edit Operations

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration note when moving from separate Lightroom v1 endpoints to the unified `/v2/edit` endpoint.

## Overview

Lightroom v1 spread editing work across several endpoints. In V2, edit behavior is gathered under one `/v2/edit` endpoint so a request can carry multiple adjustments together.

**V1 endpoints covered by `/v2/edit`:**

| V1 Endpoint | V2 Equivalent |
| --- | --- |
| `/lrService/autoTone` | `/v2/edit` with `autoTone: true` |
| `/lrService/autoStraighten` | `/v2/edit` with `autoStraighten` object |
| `/lrService/presets` | `/v2/edit` with `presets` array |
| `/lrService/xmp` | `/v2/edit` with `xmp` object |
| `/lrService/edit` | `/v2/edit` with adjustment parameters |

## Benefits of the unified v2 endpoint

- **Single API Call:** Apply several adjustments in one request rather than sending a chain of calls
- **Better Performance:** Cut network overhead and reduce processing time
- **Atomic Operations:** Treat the adjustment set as one unit, so all changes succeed or all fail
- **Flexible Outputs:** Target multiple formats and destinations from the same request

## Migration examples

### Auto tone

**Important migration changes:**

- Input payloads move from `inputs.href` to `image.source.url`
- Output payloads move from `outputs[].href` to `outputs[].destination.url`
- Media type is now supplied as `outputs[].mediaType` rather than `outputs[].type`
- `storageType` can be omitted for external presigned URLs; Azure and Dropbox still require it

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/autoTone \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "autoTone": true
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

### Auto straighten

**Important migration changes:**

- V2 exposes `constrainCrop` and `uprightMode`, giving the request finer control
- `uprightMode` accepts `auto`, `full`, `level`, or `vertical`
- `constrainCrop` defaults to `true` so blank edge regions are removed

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/autoStraighten \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "autoStraighten": {
      "enabled": true,
      "constrainCrop": true,
      "uprightMode": "auto"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

### Apply presets

**Important migration changes:**

- Presets now live under the `edits` object
- A request can include up to 10 presets
- Preset entries now use `source.url` instead of `href`

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/presets \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  },
  "options": {
    "presets": [
      {
        "href": "<PRESET_URL>",
        "storage": "external"
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "presets": [
      {
        "source": {
          "url": "<PRESET_URL>"
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

### Apply XMP

**Important migration changes:**

- XMP now lives under the `edits` object
- Replace `options.xmp.href` with `edits.xmp.source.url`

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/xmp \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  },
  "options": {
    "xmp": {
      "href": "<XMP_URL>",
      "storage": "external"
    }
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      }
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

### Apply XMP with masks (advanced)

Advanced Camera Raw edit flows can send mask data together with the XMP metadata. In Camera Raw, masks are binary assets that mark selection regions for localized adjustments.

**Key Points:**

- Mask files are **optional**; include them only for advanced Camera Raw editing
- Each mask entry includes `source` for the mask-file URL plus `digest` as its identification fingerprint
- `digest` acts as the unique ID that links mask data with the XMP adjustments
- Adobe Camera Raw typically generates mask files as binary `.bin` files
- Workflows with several localized adjustments can pass multiple masks

**V2 Approach with Masks:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "masks": [
        {
          "source": {
            "url": "<MASK_FILE_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        }
      ]
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

**Multiple Masks:**

Complex edit flows can attach more than one mask file:

```json
{
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "masks": [
        {
          "source": {
            "url": "<MASK_FILE_1_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        },
        {
          "source": {
            "url": "<MASK_FILE_2_URL>"
          },
          "digest": "D15158972C7044869B171697AEBAFB0F"
        }
      ]
    }
  }
}
```

### Apply XMP with orientation override

Set `orientation` inside the `xmp` object when you need to replace the image's embedded orientation metadata. That lets Camera Raw workflows include rotation or flip behavior with the edit request.

**Key Points:**

- `orientation` is **optional**; it changes the embedded image orientation only when the request includes it
- Without this value, processing falls back to the embedded EXIF orientation metadata
- Orientation values use descriptive string names such as `"right_top"` instead of numeric codes
- When a transform rotates by 90° or 270°, processing updates width and height automatically

**V2 Approach with Orientation:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "orientation": "right_top"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

**Orientation Values:**

For `orientation`, use the string values defined by the EXIF/TIFF orientation model:

| Value | Description |
| --- | --- |
| `"top_left"` | Column 0 = left, Row 0 = top (normal orientation) |
| `"top_right"` | Column 0 = right, Row 0 = top (horizontal flip) |
| `"bottom_right"` | Column 0 = right, Row 0 = bottom (180° rotation) |
| `"bottom_left"` | Column 0 = left, Row 0 = bottom (vertical flip) |
| `"left_top"` | Column 0 = top, Row 0 = left (90° CCW rotation + horizontal flip) |
| `"right_top"` | Column 0 = top, Row 0 = right (90° CW rotation) |
| `"right_bottom"` | Column 0 = bottom, Row 0 = right (90° CCW rotation) |
| `"left_bottom"` | Column 0 = bottom, Row 0 = left (90° CW rotation + horizontal flip) |

**Combined with Masks:**

Masks and `orientation` can be used together when the Camera Raw edit needs both targeting data and orientation control:

```json
{
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "orientation": "right_top",
      "masks": [
        {
          "source": {
            "url": "<MASK_FILE_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        }
      ]
    }
  }
}
```

### Manual adjustments

**Important migration changes:**

- Adjustments now live inside `edits` and are grouped by purpose: `light`, `color`, `effects`, `sharpen`
- Parameter naming changes from PascalCase to camelCase
- V2 exposes a broader set of adjustment controls

**V1 Approach:**

```shell
curl -X POST \
  https://image.adobe.io/lrService/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  },
  "options": {
    "Exposure": 1.2,
    "Contrast": 10,
    "Saturation": 20
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "light": {
      "exposure": 1.2,
      "contrast": 10
    },
    "color": {
      "saturation": 20
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

### Adjustment categories in v2

In v2, `/edit` groups adjustment fields by category:

**Light Adjustments (`light`):**

- `exposure` (-5.0 to 5.0)
- `contrast` (-100 to 100)
- `highlights` (-100 to 100)
- `shadows` (-100 to 100)
- `whites` (-100 to 100)
- `blacks` (-100 to 100)

**Color Adjustments (`color`):**

- `saturation` (-100 to 100)
- `vibrance` (-100 to 100)
- `whiteBalance` (one of: `"As Shot"`, `"Auto"`, `"Cloudy"`, `"Custom"`, `"Daylight"`, `"Flash"`, `"Fluorescent"`, `"Shade"`, `"Tungsten"`)

**Effects Adjustments (`effects`):**

- `clarity` (-100 to 100)
- `dehaze` (-100 to 100)
- `texture` (-100 to 100)
- `vignette` (-100 to 100)

**Sharpen Adjustments (`sharpen`):**

- `detail` (0 to 100)
- `radius` (0.5 to 3.0)
- `edgeMasking` (0 to 100)

**Noise Reduction (`noiseReduction`):**

- `luminance` (0 to 100)
- `color` (0 to 100)

## Combining multiple operations

A central v2 benefit is that several operations can travel in one request.

**V1 Approach (Multiple Calls):**

```shell

## Step 1: Auto tone

curl -X POST https://image.adobe.io/lrService/autoTone ...

## Step 2: Auto straighten

curl -X POST https://image.adobe.io/lrService/autoStraighten ...

## Step 3: Apply adjustments

curl -X POST https://image.adobe.io/lrService/applyEdits ...
```

**V2 Approach (Single Call):**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "autoTone": true,
    "autoStraighten": {
      "enabled": true
    },
    "light": {
      "exposure": 0.5,
      "contrast": 15
    },
    "color": {
      "saturation": 10
    },
    "sharpen": {
      "detail": 50
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

## Step 3: Apply adjustments — Output options

V2 gives `outputs` more configuration flexibility. Supported pattern examples include:

**Multiple Outputs:**

```json
"outputs": [
  {
    "destination": {
      "url": "<JPEG_URL>"
    },
    "mediaType": "image/jpeg"
  },
  {
    "destination": {
      "url": "<PNG_URL>"
    },
    "mediaType": "image/png"
  },
  {
    "destination": {
      "url": "<DNG_URL>"
    },
    "mediaType": "image/x-adobe-dng"
  },
  {
    "destination": {
      "url": "<XMP_URL>"
    },
    "mediaType": "application/rdf+xml"
  }
]
```

**A request can include a maximum of 25 outputs.**

## Step 3: Apply adjustments — Returning XMP metadata

The edit request can also return XMP metadata recording the adjustments applied to the image. Common reasons to do that include:

- Building edit presets
- Reviewing which adjustments were applied
- Applying the same edit recipe to other images
- Connecting the workflow with other tools that consume XMP metadata

### XMP with Auto Tone

**Example: Auto Tone with XMP Output**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "autoTone": true
  },
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_OUTPUT_URL>"
      },
      "mediaType": "image/jpeg"
    },
    {
      "destination": {
        "url": "<XMP_OUTPUT_URL>"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}'
```

That request produces two outputs:

1. A JPEG image with auto tone applied
2. An XMP file with the applied adjustment values

### Inline XMP (Embedded)

Use embedded output when the job status response should carry the XMP metadata directly rather than pointing to external storage:

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "autoTone": true,
    "light": {
      "exposure": 0.5,
      "contrast": 10
    },
    "color": {
      "saturation": 15
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_OUTPUT_URL>"
      },
      "mediaType": "image/jpeg"
    },
    {
      "destination": {
        "embedded": "string"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}'
```

**Job Status Response with Embedded XMP:**

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "succeeded",
  "createdTime": "2025-01-15T10:30:00.000Z",
  "modifiedTime": "2025-01-15T10:30:45.000Z",
  "result": {
    "outputs": [
      {
        "destination": {
          "url": "https://storage.example.com/output.jpg"
        },
        "mediaType": "image/jpeg"
      },
      {
        "destination": {
          "embedded": "string",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.0-c000\">\n  <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n    <rdf:Description rdf:about=\"\"\n        xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n      <crs:Exposure2012>+0.50</crs:Exposure2012>\n      <crs:Contrast2012>+10</crs:Contrast2012>\n      <crs:Saturation>+15</crs:Saturation>\n      <crs:AutoTone>True</crs:AutoTone>\n    </rdf:Description>\n  </rdf:RDF>\n</x:xmpmeta>"
        },
        "mediaType": "application/rdf+xml"
      }
    ]
  }
}
```

### XMP Output Options

**External Storage:**

```json
{
  "destination": {
    "url": "<XMP_URL>"
  },
  "mediaType": "application/rdf+xml"
}
```

**Hosted Storage:**

```json
{
  "destination": {
    "validityPeriod": 3600
  },
  "mediaType": "application/rdf+xml"
}
```

**Embedded (Inline):**

```json
{
  "destination": {
    "embedded": "string"
  },
  "mediaType": "application/rdf+xml"
}
```

**Creative Cloud Storage:**

```json
{
  "destination": {
    "creativeCloudPath": "/path/to/adjustments.xmp"
  },
  "mediaType": "application/rdf+xml"
}
```

### Using XMP Output

Generated XMP can then be used in these ways:

1. **Reapplied to other images** through the `xmp` parameter under `edits`:

   ```json
   {
     "edits": {
       "xmp": {
         "source": {
           "url": "<XMP_FILE_URL>"
         }
       }
     }
   }
   ```

2. **Saved as a preset** to keep editing consistent across multiple images.

3. **Imported into Lightroom** or into another XMP-compatible application.

4. **Inspected to see** which adjustments `autoTone` selected automatically.

### Complete Example: Auto Tone with Inline XMP

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/edit \
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
    "autoTone": true,
    "autoStraighten": {
      "enabled": true
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum"
    },
    {
      "destination": {
        "embedded": "string"
      },
      "mediaType": "application/rdf+xml"
    }
  ]
}'
```

**Why Use Embedded XMP:**

- **Immediate Access** - Receive XMP in the status response without fetching another file
- **No Storage Needed** - Avoid managing separate XMP file storage
- **Simplified Workflow** - One status check returns both the image URL and the XMP data
- **Perfect for Automation** - Easy to parse and persist in your database

Use embedded storage only for text outputs such as XMP metadata. For image results, choose external, hosted, or Creative Cloud storage.

**Use Cases:**

- **Preset Creation** - Generate presets automatically from successful edits
- **Batch Processing** - Reuse the same adjustments across many images
- **Audit Trail** - Capture the adjustments that were applied
- **Learning Tool** - Inspect the values that `autoTone` chose automatically

## Step 3: Apply adjustments — Status checking

Status polling has moved to a unified endpoint:

For response-format differences, see the [status migration guide](api-status-migration.md).

## Step 3: Apply adjustments — Common migration issues

**Payload Size Limits:**

For inline content such as embedded XMP or other text data, stay at or below 50 KB, and keep the full request payload under 1 MB. Larger assets should be referenced from external storage through presigned URLs.

### Storage parameter not recognized

**Problem:** A v1 `storage` parameter is still in the payload

```json
"outputs": [
  {
    "url": "<SIGNED_POST_URL>",
    "storage": "external"
  }
]
```

**Solution:** Use the destination object structure. For external presigned URLs, `storageType` is not required.

```json
"outputs": [
  {
    "destination": {
      "url": "<SIGNED_POST_URL>"
    }
  }
]
```

Add `storageType` when the destination is Azure or Dropbox:

```json
"outputs": [
  {
    "destination": {
      "url": "<SIGNED_POST_URL>",
      "storageType": "azure"
    }
  }
]
```

### Invalid parameter names

**Problem:** V1-style PascalCase parameter names are still being sent

```json
{
  "Exposure": 1.2,
  "Contrast": 10
}
```

**Solution:** Switch to camelCase and place the fields in categories under `edits`

```json
{
  "edits": {
    "light": {
      "exposure": 1.2,
      "contrast": 10
    }
  }
}
```

### Missing media type

**Problem:** The request uses `type` where V2 expects `mediaType`

```json
"outputs": [
  {
    "destination": {...},
    "type": "image/jpeg"
  }
]
```

**Solution:** Send `mediaType`

```json
"outputs": [
  {
    "destination": {...},
    "mediaType": "image/jpeg"
  }
]
```

## Step 3: Apply adjustments — Next steps

- Read the [storage solutions guide](api-getting-started.md) to plan the newer storage choices
- Use the [status migration guide](api-status-migration.md) to update status-check handling
- Validate the migration against development endpoints before deploying to production

## Step 3: Apply adjustments — Deprecated and removed endpoints

The Lightroom v1 endpoints below are deprecated or removed and do not map directly to v2:

### Deprecated endpoints

**`/lrService/mask`**

- Status: Deprecated; standalone endpoint removed
- V2 Migration: Use the XMP feature in `/v2/edit` for mask functionality
- Usage details are in the [Apply XMP with Masks](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/edit-operations.md#apply-xmp-with-masks-advanced) section above
- Supply masks in the `edits.xmp.masks` array together with XMP metadata

**`/lrService/predict`**

- Status: Deprecated; removed
- Reason: See the deprecation notice for details

**`/lrService/depthRefinement`**

- Status: Deprecated
- Reason: Feature is no longer supported

### Removed endpoints

**`/lrService/index`**

- Status: Removed
- V2 equivalent: None available

### Coming soon

**`/lrService/xmpToPreset`**

- Status: To be implemented
- Expected: A future release is planned to provide a V2 equivalent

Applications that rely on these deprecated or removed endpoints should contact Adobe support to discuss alternatives.
