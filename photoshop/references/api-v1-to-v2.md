# Artboard Migration, Composite Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Artboard Migration; Layer Operations Migration.

## Artboard Migration

Use this guide when moving from the v1 artboardCreate endpoint to `/v2/create-artboard`.

### Overview

Artboard functionality creates artboards from multiple input images. In v2, the endpoint uses a revised request/response shape, adds broader output-format support, and offers an optional parameter for artboard spacing.

**V1 Endpoint:**

- `/pie/psdService/artboardCreate`

**V2 Endpoint:**

- `/v2/create-artboard`

### Migration example

### V1 request example

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/artboardCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<IMAGE_1_URL>",
      "storage": "external"
    },
    {
      "href": "<IMAGE_2_URL>",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

### V2 request example

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-artboard \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "images": [
    {
      "source": {
        "url": "<IMAGE_1_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_2_URL>"
      }
    }
  ],
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

### Key differences

**Input structure:**

- V1: `inputs[].href` -> V2: `images[].source.url`
- V1: `inputs[].storage` -> V2: `outputs[].destination.storageType` (only for Azure/Dropbox)
- V2 includes optional `artboardSpacing` for horizontal spacing control

**Output structure:**

- V1: `outputs[].href` -> V2: `outputs[].destination.url`
- V1: `outputs[].type` -> V2: `outputs[].mediaType`
- V1: `outputs[].storage` -> V2: `outputs[].destination.storageType` (optional in V2)
- V2 can produce 6 output formats: JPEG, PNG, TIFF, PSD, PSDC

### Input images

Every image needs a source specification. The API lays out the images horizontally, with spacing configurable between them.

```json
{
  "images": [
    {
      "source": {
        "url": "<IMAGE_URL>"
      }
    }
  ]
}
```

**Source options:**

Several storage types can be used to specify the source:

**External URL:**

```json
{
  "source": {
    "url": "<PRESIGNED_URL>"
  }
}
```

**Creative Cloud Path:**

```json
{
  "source": {
    "creativeCloudPath": "/path/to/image.jpg"
  }
}
```

**Creative Cloud File ID:**

```json
{
  "source": {
    "creativeCloudFileId": "urn:aaid:..."
  }
}
```

**Lightroom Path:**

```json
{
  "source": {
    "lightroomPath": "/path/to/image.jpg"
  }
}
```

### Artboard spacing

Use `artboardSpacing` when a nondefault left-to-right gap is needed between generated artboards.

```json
{
  "artboardSpacing": 100,
  "images": [
    {
      "source": {
        "url": "<IMAGE_1_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_2_URL>"
      }
    }
  ]
}
```

**Spacing parameter:**

- **Type:** Integer
- **Unit:** Pixels
- **Default:** 50 pixels
- **Optional:** Yes
- **Description:** Pixel distance applied horizontally from one artboard to the next

### Spacing examples

**No custom value (50px default):**

```json
{
  "images": [
    {
      "source": { "url": "<IMAGE_1_URL>" }
    },
    {
      "source": { "url": "<IMAGE_2_URL>" }
    }
  ]
}
```

**Custom value (200px):**

```json
{
  "artboardSpacing": 200,
  "images": [
    {
      "source": { "url": "<IMAGE_1_URL>" }
    },
    {
      "source": { "url": "<IMAGE_2_URL>" }
    }
  ]
}
```

**Compact value (10px):**

```json
{
  "artboardSpacing": 10,
  "images": [
    {
      "source": { "url": "<IMAGE_1_URL>" }
    },
    {
      "source": { "url": "<IMAGE_2_URL>" }
    }
  ]
}
```

### Validation rules

### Input image requirements

- **Minimum:** required count is 1 image
- **Maximum:** allowed count is 25 images
- **Required field:** `source`; it must identify a valid file reference

### Output requirements

- **Minimum:** required count is 1 output
- **Maximum:** allowed count is 25 outputs
- **Required fields:** `destination` and `mediaType`

### Output options

V2 lets one request choose from several return formats:

### Output formats

**JPEG result:**

```json
{
  "destination": {
    "url": "<JPEG_URL>"
  },
  "mediaType": "image/jpeg",
  "quality": "maximum",
  "width": 2000
}
```

**PNG result:**

```json
{
  "destination": {
    "url": "<PNG_URL>"
  },
  "mediaType": "image/png",
  "compression": "medium",
  "width": 1920
}
```

**TIFF result:**

```json
{
  "destination": {
    "url": "<TIFF_URL>"
  },
  "mediaType": "image/tiff",
  "width": 3000
}
```

**PSD result:**

```json
{
  "destination": {
    "url": "<PSD_URL>"
  },
  "mediaType": "image/vnd.adobe.photoshop"
}
```

**PSDC (Cloud Document) result:**

```json
{
  "destination": {
    "url": "<PSDC_URL>"
  },
  "mediaType": "document/vnd.adobe.cpsd+dcxucf"
}
```

**JSON Manifest result:**

```json
{
  "destination": {
    "url": "<JSON_URL>"
  },
  "mediaType": "application/json"
}
```

### Multiple output formats

A single request can ask for more than one returned format:

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<PSD_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2000
    },
    {
      "destination": {
        "url": "<PNG_URL>"
      },
      "mediaType": "image/png",
      "compression": "medium"
    }
  ]
}
```

### Output storage options

**External Storage:**

```json
{
  "destination": {
    "url": "<PRESIGNED_URL>"
  },
  "mediaType": "image/jpeg"
}
```

**Hosted Storage:**

```json
{
  "destination": {
    "validityPeriod": 3600
  },
  "mediaType": "image/jpeg"
}
```

`validityPeriod` controls the lifetime of the hosted URL:

- **Minimum:** 60 seconds (1 minute)
- **Maximum:** 86400 seconds (1 day / 24 hours)
- **Unit:** Seconds
- **Required:** Yes, for hosted storage

**Embedded Storage:**

```json
{
  "destination": {
    "embedded": "base64"
  },
  "mediaType": "image/jpeg"
}
```

Supported embedded formats:

- `"base64"` - image data encoded as Base64
- `"string"` - value represented as a string
- `"json"` - JSON-formatted data

**Creative Cloud destination:**

```json
{
  "destination": {
    "creativeCloudPath": "/path/to/output.psd"
  },
  "mediaType": "image/vnd.adobe.photoshop"
}
```

Optional Creative Cloud project ID:

```json
{
  "destination": {
    "creativeCloudPath": "/path/to/output.psd",
    "creativeCloudProjectId": "urn:aaid:sc:US:..."
  },
  "mediaType": "image/vnd.adobe.photoshop"
}
```

**Azure Blob Storage:**

```json
{
  "destination": {
    "url": "<AZURE_PRESIGNED_URL>",
    "storageType": "azure"
  },
  "mediaType": "image/jpeg"
}
```

**Dropbox Storage:**

```json
{
  "destination": {
    "url": "<DROPBOX_URL>",
    "storageType": "dropbox"
  },
  "mediaType": "image/jpeg"
}
```

Only Azure Blob Storage and Dropbox need the `storageType` field. AWS S3 presigned URLs omit it.

### Output parameters

Additional parameters control how the output is rendered:

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<JPEG_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 1920,
      "height": 1080,
      "maxWidth": 2400
    }
  ]
}
```

**Available parameters:**

- `width`: sets the output width in pixels (>= 0)
- `height`: sets the output height in pixels (>= 0)
- `maxWidth`: caps width in pixels (>= 0)
- `quality`: selects JPEG quality (`very_poor`, `poor`, `low`, `medium`, `high`, `maximum`, `photoshop_max`)
- `compression`: selects PNG compression (`none`, `very_low`, `low`, `medium_low`, `medium`, `medium_high`, `default`, `high`, `very_high`, `maximum`)
- `shouldOverwrite`: controls whether existing files are replaced (boolean)
- `iccProfile`: supplies the ICC color profile for color management (standard or custom)
- `layers`: chooses particular layers for the output (array of layer references)
- `cropMode`: chooses the layer-export crop behavior (`trim_to_transparency`, `document_bounds`, `layer_bounds`)

### Additional output capabilities

**Specific-layer export:**

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/png",
  "layers": [
    {
      "id": 123
    },
    {
      "name": "Background"
    }
  ]
}
```

**ICC color profile:**

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/jpeg",
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "rgb"
  }
}
```

For expanded color-management choices, see the [ICC Profile Migration guide](api-v1-to-v2-3.md).

**Crop mode:**

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/png",
  "cropMode": "trim_to_transparency"
}
```

### Complete example with multiple images

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-artboard \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "artboardSpacing": 100,
  "images": [
    {
      "source": {
        "url": "<IMAGE_1_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_2_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_3_URL>"
      }
    },
    {
      "source": {
        "url": "<IMAGE_4_URL>"
      }
    }
  ],
  "outputs": [
    {
      "destination": {
        "url": "<PSD_OUTPUT_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    },
    {
      "destination": {
        "url": "<JPEG_OUTPUT_URL>"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": {
        "validityPeriod": 7200
      },
      "mediaType": "image/png",
      "compression": "high"
    }
  ]
}'
```

This example:

1. Builds artboards from 4 images, separating them by 100px
2. Produces PSD output at its original resolution
3. Produces a high-quality JPEG with width set to 2400px
4. Produces PNG output in hosted storage with 2-hour validity

### Status checking

Poll job status with this request:

```shell
curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

For response-format details, see the [status migration guide](api-status-migration.md).

### Common migration issues

### Incorrect input structure

**Problem:** v1 input format is being used

```json
{
  "inputs": [
    {
      "href": "<URL>",
      "storage": "external"
    }
  ]
}
```

**Fix:** Switch to the v2 images structure

```json
{
  "images": [
    {
      "source": {
        "url": "<URL>"
      }
    }
  ]
}
```

### Too many images

**Problem:** Too many image entries are present

**Error:**

```
Array size must be between 1 and 25 at path 'images'
```

**Fix:** Keep the request within 1 to 25 images

### Too many outputs

**Problem:** Too many output entries are present

**Error:**

```
Array size must be between 1 and 25 at path 'outputs'
```

**Fix:** Keep the request within 1 to 25 outputs

### Missing required fields

**Problem:** Image entry is missing `source`

**Error:**

```
Required field 'source' is missing at path 'images[0]'
```

**Fix:** Include a `source` field on every image

```json
{
  "images": [
    {
      "source": {
        "url": "<URL>"
      }
    }
  ]
}
```

### Hosted storage period is invalid

**Problem:** Hosted-storage `validityPeriod` is outside the permitted limits

**Error:**

```
validityPeriod must be between 60 and 86400 seconds
```

**Fix:** Pick any allowed duration: at least 60 seconds (1 minute) and no more than 86400 seconds (24 hours)

```json
{
  "destination": {
    "validityPeriod": 3600
  }
}
```

### Azure/Dropbox storage type is missing

**Problem:** Azure or Dropbox is used without `storageType`

**Error:**

```
Azure Blob Storage URL requires 'storageType': 'azure'
```

**Fix:** Supply `storageType` when using Azure or Dropbox

```json
{
  "destination": {
    "url": "<AZURE_URL>",
    "storageType": "azure"
  }
}
```

### Invalid JPEG quality value

**Problem:** Quality is numeric rather than one of the named enum values

**Error:**

```
Invalid value '7' at path 'outputs[0].quality'. Accepted values are: very_poor, poor, low, medium, high, maximum, photoshop_max
```

**Fix:** Provide one of the string enum values for `quality`

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```

### Best practices

**Planning artboard layout:**

1. Choose `artboardSpacing` for the design requirements (default is 50px)
2. Account for the image array order, since layout proceeds from left to right
3. Compute total output width as: (image widths) + (spacing x (number of images - 1))
4. Factor in the required resolution for the final output

**Performance tips:**

1. Provide source images at suitable dimensions
2. Combine multiple outputs in one request (up to 25)
3. Choose hosted storage for short-lived outputs
4. Use embedded storage when creating small previews

**Output optimization:**

1. Request several formats together (PSD + JPEG + PNG)
2. Pick quality settings that fit the use case
3. Set dimensions when optimized outputs are needed
4. Apply ICC profiles for color-critical work

**Storage strategy:**

1. Prefer AWS S3 presigned URLs where possible (no storageType needed)
2. Set `validityPeriod` for hosted URLs according to the download timeline
3. Keep persistent assets in Creative Cloud storage
4. Include `storageType` only for Azure Blob Storage and Dropbox

### Complete V1 parity reference

Use **[Create Artboard — Complete V1 Migration Reference](api-create-artboard-v1-reference.md)** when you need the single-page V1/V2 parity table. It covers every V1 field, its V2 mapping, the V1 input structure, mappings from storage settings to `destination`, crop mode migration, quality/compression enum mappings, and status response changes.

### Next steps

- For detailed format choices, consult the [output types migration guide](api-output-types-migration.md)
- For color-management details, use the [ICC profile migration guide](api-v1-to-v2-3.md)
- For additional storage choices, see the [storage solutions guide](api-getting-started.md)
- For advanced layer operations, open the [composite migration guide](api-v1-to-v2.md)
- Try artboard creation against development endpoints

### Related migration guides

- [Output Types Migration](api-output-types-migration.md) - JPEG, PNG, PSD, TIFF changes for output formats
- [ICC Profile Migration](api-v1-to-v2-3.md) - color management during output export
- [Status Migration](api-status-migration.md) - checking job status in V2
- [Migration Overview](api-v1-to-v2-3.md) - full overview for moving from V1 to V2

## Layer Operations Migration

Use this page as the entry point for the layer operation migration guides. The layer-operation material is divided into focused guides so navigation is easier and later additions have room to grow.

### Overview

The v2 `/create-composite` endpoint now covers broad layer-manipulation workflows. For the most detailed view of the migration, use the specialized layer guides, which separate operations by layer type and complexity and show how the v2 service can produce the same results.

### Quick reference

### By operation type

| What You Want to Do | Guide to Use |
| --- | --- |
| Add an image to a document | [Image Layer Operations](api-v1-to-v2-4.md) |
| Add text to a document | [Text Layer Operations](api-layer-operations-text.md) |
| Apply color/tonal adjustments | [Adjustment Layer Operations](api-layer-operations-adjustments.md) |
| Add scalable graphics | [Smart Object Operations](api-layer-operations-smart-objects.md) |
| Move layers in the stack | [Advanced Layer Operations](api-layer-operations-advanced.md) |
| Delete layers | [Advanced Layer Operations](api-layer-operations-advanced.md) |
| Apply layer masks | [Advanced Layer Operations](api-layer-operations-advanced.md) |
| Organize into groups | [Advanced Layer Operations](api-layer-operations-advanced.md) |
| Change blend modes | [Advanced Layer Operations](api-layer-operations-advanced.md) |
| Transform layers | [Advanced Layer Operations](api-layer-operations-advanced.md) |
| Export specific layers (JPEG/PNG/TIFF/PSD) | [Export Layers Migration](api-v1-to-v2-2.md) |

### By layer type

| Layer Type | Guide |
| --- | --- |
| Standard image/pixel layers | [Image Layer Operations](api-v1-to-v2-4.md) |
| Solid color layers | [Image Layer Operations](api-v1-to-v2-4.md) |
| Text layers | [Text Layer Operations](api-layer-operations-text.md) |
| Adjustment layers | [Adjustment Layer Operations](api-layer-operations-adjustments.md) |
| Smart object layers | [Smart Object Operations](api-layer-operations-smart-objects.md) |
| Group layers | [Advanced Layer Operations](api-layer-operations-advanced.md) |

### Choose your guide

### [Layer Operations Overview](api-v1-to-v2-4.md)

**Start here when you are learning layer operations in v2.**

- Core concepts for layer operations
- Basic structure for requests
- Add, edit, and delete operation categories
- Reusable patterns plus best practices
- Choosing layer operations instead of other endpoints

### [Image Layer Operations](api-v1-to-v2-4.md)

**Use this guide for image-layer and solid-color-layer work.**

- Creating image layers
- Working with solid color fill layers
- Choosing layer placement approaches
- Positioning through bounds
- Setting layer properties such as visibility, opacity, and blend modes

### [Text Layer Operations](api-layer-operations-text.md)

**Use this guide when the workflow centers on text layers.**

- Creating and changing text layers
- Character styles covering font, size, color, and styling
- Paragraph styles covering alignment, spacing, and indentation
- Text that uses multiple styles
- Font handling, including custom fonts

### [Adjustment Layer Operations](api-layer-operations-adjustments.md)

**Use this guide for adjustment workflows that keep image edits non-destructive.**

- Adjustments for Brightness/Contrast
- Adjustments for Hue/Saturation
- Adjustments for Exposure
- Adjustments for Color Balance
- Placement and targeting for adjustment layers

### [Smart Object Operations](api-layer-operations-smart-objects.md)

**Use this guide when smart object layers are involved.**

- Creating smart objects
- Transformations that remain non-destructive
- Rotation, scaling, and positioning controls
- Available transform modes
- Sources for smart objects, including external, Creative Cloud, and Adobe Assets

### [Advanced Layer Operations](api-layer-operations-advanced.md)

**Use this guide for deeper layer-manipulation tasks.**

- Moving layers and deleting layers
- Pixel-mask layer masks
- Masks used for clipping
- Organizing content with layer groups
- Working with blend modes
- Applying layer transformations
- Building complex layer compositions

### Common workflows to migrate

### Building a composition

1. Begin with [Image Layers](api-v1-to-v2-4.md) for the background
2. Add [Text Layers](api-layer-operations-text.md) for titles
3. Use [Adjustment Layers](api-layer-operations-adjustments.md) for color correction
4. Place logos/graphics through [Smart Objects](api-layer-operations-smart-objects.md)
5. Use [Groups](api-layer-operations-advanced.md) for structure, then apply [Blend Modes](api-layer-operations-advanced.md)

### Editing existing documents

1. Read [Layer Operations Overview](api-v1-to-v2-4.md) for editing patterns
2. Use the relevant guide to change existing layers
3. Use [Advanced Operations](api-layer-operations-advanced.md) when reorganizing the layer stack
4. Before finalizing, test changes to visibility and opacity

### Related guides

Layer operations are often used together with these v2 endpoints:

- **[Export Layers Migration](api-v1-to-v2-2.md)** - export layers in single-layer or multi-layer form, with PSD support and quality defaults covered
- **[Format Conversion](api-format-conversion-migration.md)** - turn PSDs into other formats without making edits
- **[ICC Profile Migration](api-v1-to-v2-3.md)** - manage color for exported output
- **[Document Creation](api-document-creation-migration.md)** - start new blank documents
- **[Document Operations](api-document-operations-migration.md)** - handle resize, crop, trim, and other document-level operations

### Need help?

- See the [Layer Operations Overview](api-v1-to-v2-4.md) for general concepts
- Use the [storage solutions guide](api-getting-started.md) for output choices

### What's next?

1. **Start with basics**: Open [Layer Operations Overview](api-v1-to-v2-4.md)
2. **Pick your layer type**: Move to the guide for the layer type you need
3. **Test simple operations**: Try adding a single layer first
4. **Combine operations**: Build richer compositions after the basics are comfortable
5. **Add advanced features**: Work through masks, groups, and advanced operations

## See also

- [Text Layer Operations](api-text-layer-operations.md)
