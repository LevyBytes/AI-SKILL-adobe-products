# Llm Migration Reference (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

**Purpose:** Use this reference when an AI assistant or LLM needs to guide developers through migration from Adobe Photoshop API v1 to v2. It brings together migration patterns, examples, and troubleshooting notes from the full guide set.

## Table of contents

1. [Quick reference and decision trees](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#quick-reference-and-decision-trees)
2. [Core architectural changes](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#core-architectural-changes)
3. [Migration patterns by operation type](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#migration-patterns-by-operation-type)
4. [Storage solutions reference](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#storage-solutions-reference)
5. [Output types migration](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#output-types-migration)
6. [ICC profile support (V2 new feature)](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#icc-profile-support-v2-new-feature)
7. [Common migration issues and solutions](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#common-migration-issues-and-solutions)
8. [Code transformation examples](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#code-transformation-examples)
9. [Validation checklist](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/llm-migration-reference.md#validation-checklist)

## Quick reference and decision trees

### Complete V1 to V2 endpoint mapping

| V1 Endpoint | V2 Endpoint | Category | Description |
| --- | --- | --- | --- |
| `/lrService/autoTone` | `/v2/edit` | Edit Operations | Runs an automatic tone adjustment |
| `/lrService/autoStraighten` | `/v2/edit` | Edit Operations | Automatically straightens the image |
| `/lrService/presets` | `/v2/edit` | Edit Operations | Applies Lightroom presets |
| `/lrService/xmp` | `/v2/edit` | Edit Operations | Applies XMP metadata |
| `/lrService/edit` | `/v2/edit` | Edit Operations | Performs manual adjustments |
| `/pie/psdService/renditionCreate` | `/v2/create-composite` | Format Conversion | Converts PSD input to other output formats |
| `/pie/psdService/documentCreate` | `/v2/create-composite` | Document Creation | Creates a new blank document |
| `/pie/psdService/documentOperations` | `/v2/create-composite` | Document/Layer Operations | Handles document-level changes and layer manipulation |
| `/pie/psdService/smartObject` | `/v2/create-composite` | Document/Layer Operations | Replaces or places smart objects through the dedicated endpoint |
| `/pie/psdService/photoshopActions` | `/v2/execute-actions` | Actions | Runs .atn action files |
| `/pie/psdService/actionJSON` | `/v2/execute-actions` | Actions | Runs inline ActionJSON |
| `/pie/psdService/text` | `/v2/execute-actions` | Actions | Edits text layers through the dedicated endpoint |
| `/pie/psdService/productCrop` | `/v2/execute-actions` | Actions | Runs the product crop workflow |
| `/pie/psdService/depthBlur` | Not yet supported (Neural Filters unavailable) | Actions | Runs the depth blur workflow |
| `/pie/psdService/splitView` | `/v2/execute-actions` | Actions | Runs the split view workflow |
| `/pie/psdService/sideBySide` | `/v2/execute-actions` | Actions | Runs the side by side workflow |
| `/pie/psdService/artboardCreate` | `/v2/create-artboard` | Artboards | Builds artboards from images |
| `/pie/psdService/documentManifest` | `/v2/generate-manifest` | Manifest | Produces a PSD manifest |
| `/pie/psdService/status/{jobId}` | `/v2/status/{jobId}` | Status | Reads job status for Photoshop |
| `/lrService/status/{jobId}` | `/v2/status/{jobId}` | Status | Reads job status for Lightroom |
| Sensei PSDC Engine | `/v2/create-composite` | Format Conversion | Converts PSD/Cloud PSD assets; the engine is retiring, not the endpoint |

### Decision tree for migration path selection

```
START: Choose the operation you need.
│
├─ Applying image adjustments such as autoTone or exposure?
│  └─> Use /v2/edit endpoint
│     └─> Guide: Edit Operations Migration
│
├─ Converting PSD to JPEG/PNG/TIFF with no edits?
│  └─> Route to /v2/create-composite without an edits block
│     └─> Guide: Format Conversion Migration
│
├─ Is PSD/Cloud PSD conversion using sensei PSDC engine?
│  └─> Use /v2/create-composite
│     └─> URNs map to creativeCloudFileId, paths to creativeCloudPath
│     └─> Guide: Format Conversion Migration (PSDC Engine section)
│
├─ Creating a blank new document?
│  └─> Use /v2/create-composite with document params
│     └─> Guide: Document Creation Migration
│
├─ Resizing, cropping, or trimming an existing document?
│  └─> Route to /v2/create-composite and put changes in edits.document
│     └─> Guide: Document Operations Migration
│
├─ Need to add, change, or remove layers in a PSD?
│  └─> Route to /v2/create-composite and put changes in edits.layers
│     ├─> Image layers? → Layer Operations: Image
│     ├─> Text layers? → Layer Operations: Text
│     ├─> Adjustment layers? → Layer Operations: Adjustments
│     ├─> Smart objects (via V1 documentOperations)? → Layer Operations: Smart Objects
│     ├─> Smart objects (via V1 /psdService/smartObject)? → convenience-apis/smart-object-replace
│     └─> Move/delete/masks? → Layer Operations: Advanced
│
├─ Running Photoshop actions or scripts?
│  └─> Use /v2/execute-actions
│     └─> Guide: Actions Migration
│
├─ Editing text layers from the V1 /psdService/text endpoint?
│  └─> Run ActionJSON or UXP through /v2/execute-actions
│     └─> Guide: Text Endpoint Migration Specific (validation checklist section)
│
├─ Building artboards from multiple images?
│  └─> Use /v2/create-artboard
│     └─> Guide: Artboard Migration
│
├─ Reading PSD structure and layer details?
│  └─> Use /v2/generate-manifest
│     └─> Guide: Manifest Migration
│
└─ Need job status?
   └─> Query /v2/status/{jobId}
      └─> Guide: Status Migration
```

### Migration path by V1 endpoint

**When the V1 call is a Lightroom endpoint:**

- `/lrService/*` → Move all of them to `/v2/edit`
- Combine multiple operations in a single request

**When the V1 call is a PSD layer operation:**

- `/pie/psdService/documentOperations` → Use `/v2/create-composite` with `edits.layers`
- Choose the detailed guide based on layer type

**When the V1 call uses a dedicated smart object or text endpoint:**

- `/pie/psdService/smartObject` → Use `/v2/create-composite` with `type: "smart_object_layer"`
- `/pie/psdService/text` → Use `/v2/execute-actions` (ActionJSON or UXP)

**When the V1 call is an action endpoint:**

- Move every action endpoint to `/v2/execute-actions`
- Action files are now published and can be customized

**When the V1 call performs format conversion:**

- `/renditionCreate` → Use `/v2/create-composite` (no edits)
- One request can produce multiple outputs

**For the full behavior reference:**

- `v2-whats-new.md` — covers new V2 capabilities, including artboard metadata, smart object extraction, UXP scripts, hosted/embedded storage, ICC profiles, granular protection, scriptOutputPattern, and multiple outputs
- `v2-api-catalog.md` — provides endpoint-by-endpoint behavior comparison tables plus a breaking changes checklist for all endpoints

## Core architectural changes

### Breaking changes summary

### 1. Base URL changes

| Environment | V1 Base URL | V2 Base URL |
| --- | --- | --- |
| Production | `https://image.adobe.io` | `https://photoshop-api.adobe.io` |

**Action Required:** Replace base URL constants and request targets throughout the implementation.

### 2. Request payload reshaping

**V1 Pattern:**

```json
{
  "inputs": [
    {
      "href": "<URL>",
      "storage": "external"
    }
  ],
  "options": { ... },
  "outputs": [
    {
      "href": "<URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}
```

**V2 Pattern:**

```json
{
  "image": {
    "source": {
      "url": "<URL>"
    }
  },
  "edits": { ... },
  "outputs": [
    {
      "destination": {
        "url": "<URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

**Key Changes:**

- `inputs[0].href` → `image.source.url`
- `options` → `edits`
- `outputs[].href` → `outputs[].destination.url`
- `outputs[].type` → `outputs[].mediaType`
- `storage` → `storageType` (and it's now optional for external URLs)

**Artboard exception:** Because `/v2/create-artboard` accepts multiple input images, it uses `images` (plural) with a `source` object for each image instead of `image` (singular).

### 3. Storage type rules

**V1:** Required for every storage option

```json
{
  "storage": "external"
}
```

**V2:** For external presigned URLs, omit it; only Azure and Dropbox require it

```json
{
  "destination": {
    "url": "<URL>",
    "storageType": "azure" // Only for Azure/Dropbox
  }
}
```

**When to use `storageType` in V2:**

- **REQUIRED:** Azure Blob Storage → `"storageType": "azure"`
- **REQUIRED:** Dropbox → `"storageType": "dropbox"`
- **NOT REQUIRED:** AWS S3, Frame.io, Google Drive, standard HTTPS URLs

### 4. Authentication (unchanged)

V1 and V2 both use OAuth Server-to-Server authentication:

```shell
curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=client_credentials' \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET" \
  -d 'scope=openid,AdobeID,read_organizations'
```

### New capabilities in V2

### 1. Batch operations

**V1 required several sequential calls:**

```shell

## Call 3

POST /lrService/edit
```

**V2 call in one request:**

```json
{
  "edits": {
    "autoTone": true,
    "autoStraighten": { "enabled": true },
    "light": { "exposure": 0.5 }
  }
}
```

### 2. Four storage options

1. **External Storage** - Uses your presigned URLs, such as AWS S3 or Azure
2. **Creative Cloud Storage** - Connects directly to CC storage
3. **Embedded Storage** - Returns inline response data for text outputs only
4. **Hosted Storage** - Uses temporary storage managed by Adobe

### 3. Published action files

V1 convenience APIs such as productCrop and depthBlur relied on hidden server-side actions. In V2, Adobe publishes these ActionJSON definitions, which lets you:

- Inspect the exact action sequence
- Adapt them for your use case
- Learn from Adobe's implementations
- Build variants

### 4. Enhanced layer operations

V2 provides broad layer manipulation support:

- Layer add/edit/delete/move operations
- Adjustment layers for brightness, hue/saturation, exposure, and color balance
- Smart object transformations
- Linked smart object resizing with `width`/`maxWidth`
- Fully styled text layers
- Pixel mask add/edit/delete support for layer masks and groups
- Blend mode and opacity control

### 5. Richer error responses

```json
{
  "status": "failed",
  "errorDetails": [
    {
      "errorCode": "400401",
      "message": "The value provided is not valid."
    },
    {
      "errorCode": "400420",
      "message": "Required fields missing on the API request."
    }
  ]
}
```

## Call 3 — Migration patterns by operation type

### A. Edit operations (Lightroom)

**V1 endpoints folded together:**

- `/lrService/autoTone`
- `/lrService/autoStraighten`
- `/lrService/presets`
- `/lrService/xmp`
- `/lrService/edit`

**V2 Endpoint:** `/v2/edit`

**Pattern:** Replace multiple sequential V1 calls with one V2 call

**V1 approach (3 separate calls):**

```shell

## Step 1

curl -X POST https://image.adobe.io/lrService/autoTone \
  -d '{"inputs": {"href": "<URL>", "storage": "external"}}'

## Step 2

curl -X POST https://image.adobe.io/lrService/autoStraighten \
  -d '{"inputs": {"href": "<URL>", "storage": "external"}}'

## Step 3

curl -X POST https://image.adobe.io/lrService/edit \
  -d '{"inputs": {"href": "<URL>"}, "options": {"Exposure": 1.2}}'
```

**V2 approach (single call):**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
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
      "enabled": true,
      "constrainCrop": true
    },
    "light": {
      "exposure": 1.2,
      "contrast": 10
    },
    "color": {
      "saturation": 15
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

**Adjustment Categories:**

- `autoTone` (boolean)
- `autoStraighten` (object with enabled, constrainCrop, uprightMode)
- `light` (exposure, contrast, highlights, shadows, whites, blacks)
- `color` (saturation, vibrance, whiteBalance)
- `effects` (clarity, dehaze, texture, vignette)
- `sharpen` (object with detail, radius, edgeMasking)
  - `detail`: integer 0-100 (controls detail sharpening amount)
  - `radius`: number (sets sharpening effect radius)
  - `edgeMasking`: integer 0-100 (limits sharpening to edges)
- `noiseReduction` (luminance, color)
- `presets` (array of preset sources)
- `xmp` (XMP source object with optional orientation and masks)

**Parameter Name Changes:**

- V1: PascalCase (`Exposure`, `Contrast`, `Sharpness`)
- V2: camelCase (`exposure`, `contrast`) within category objects
- V1 `Sharpness` (integer 0-100) → V2 `sharpen.detail` (integer 0-100)

### XMP with masks migration (localized adjustments)

Advanced Camera Raw workflows can pass masks together with XMP metadata for localized adjustments. The masks are binary files that define selected regions for those adjustments; in V1, they were submitted through `/lrService/xmp`.

**V1 Approach (`/lrService/xmp`):**

```json
{
  "inputs": {
    "source": {
      "href": "<IMAGE_URL>",
      "storage": "external"
    }
  },
  "options": {
    "xmp": "<XMP_STRING>",
    "masks": [
      {
        "href": "<MASK_FILE_URL>",
        "storage": "external",
        "digest": "37B3568A954F0C80CA946DA0187FB9E2"
      }
    ]
  },
  "outputs": [...]
}
```

Note: V1 placed masks in `options.masks` beside the XMP string on the `/lrService/xmp` request.

**V2 Approach:**

```json
{
  "image": {
    "source": {
      "url": "<IMAGE_URL>"
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
  "outputs": [...]
}
```

**Key Changes:**

1. **Endpoint Change**: `/lrService/xmp` → `/v2/edit`
2. **Structure Change**: `options.masks` (sibling to xmp) → `edits.xmp.masks` (nested inside xmp)
3. **Mask Source**: `href` + `storage` → `source.url`
4. **XMP Format**: V1 allowed inline XMP strings in `options.xmp`; V2 expects a file reference at `edits.xmp.source`
5. **Digest**: Unchanged; it remains the mask identification fingerprint
6. **Storage Parameter**: Standard URLs do not require it anymore; Azure and Dropbox still do

**Multiple Masks Example:**

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

**Important Notes:**

- Masks are **optional** and are needed only for advanced Camera Raw editing that uses localized adjustments
- Each mask needs both `source` (file reference) and `digest` (fingerprint/identifier)
- Mask files are usually binary `.bin` files created by Adobe Camera Raw
- The `digest` links mask data to XMP adjustments
- Complex workflows can provide multiple masks

**Note on `/lrService/mask` endpoint:** The V1 `/lrService/mask` endpoint is separate from this flow; it covers AI-based mask generation such as selectSubject and selectSky, and follows a different deprecation path. The masks described here are localized Camera Raw adjustment masks passed through `/lrService/xmp`.

### XMP with orientation override

V2 can override embedded image orientation metadata by setting an `orientation` value inside the `xmp` object. Use this when Camera Raw processing needs to include a rotation or flip transformation.

**V2 Structure:**

```json
{
  "edits": {
    "xmp": {
      "source": {
        "url": "<XMP_URL>"
      },
      "orientation": "right_top"
    }
  }
}
```

**Orientation Values (EXIF/TIFF Specification):**

| Value | Description | EXIF Code | Common Use |
| --- | --- | --- | --- |
| `"top_left"` | Column 0 = left, Row 0 = top | 1 | Normal orientation |
| `"top_right"` | Column 0 = right, Row 0 = top | 2 | Horizontal flip |
| `"bottom_right"` | Column 0 = right, Row 0 = bottom | 3 | 180° rotation |
| `"bottom_left"` | Column 0 = left, Row 0 = bottom | 4 | Vertical flip |
| `"left_top"` | Column 0 = top, Row 0 = left | 5 | 90° CCW + H-flip |
| `"right_top"` | Column 0 = top, Row 0 = right | 6 | 90° CW rotation |
| `"right_bottom"` | Column 0 = bottom, Row 0 = right | 7 | 90° CCW rotation |
| `"left_bottom"` | Column 0 = bottom, Row 0 = left | 8 | 90° CW + H-flip |

**Combined with Masks Example:**

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

**Key Points:**

- `orientation` is **optional**; it overrides embedded orientation only when present
- Without `orientation`, V2 uses the embedded EXIF orientation metadata from the image
- V2 uses descriptive string values such as `"right_top"` instead of numeric EXIF codes
- Width and height swaps for 90°/270° rotations (codes 5-8) are handled automatically
- Masks and other XMP adjustments can be combined with orientation
- V1 had no orientation override; this is new in V2

### B. Composite operations (document/layer)

**V1 endpoints folded together:**

- `/pie/psdService/renditionCreate` (format conversion)
- `/pie/psdService/documentCreate` (new documents)
- `/pie/psdService/documentOperations` (document and layer ops)

**V2 Endpoint:** `/v2/create-composite`

**Use Cases:**

1. **Format Conversion** - Convert PSD to JPEG/PNG without an `edits` block
2. **Document Creation** - Provide `image` dimensions without a `source`
3. **Document Operations** - Put resize/crop/trim under `edits.document`
4. **Layer Operations** - Put add/move/delete/edit operations under `edits.layers`

**Document field mapping from V1 to V2 (`options.document.*` → `edits.document.*`):**

| V1 (`options.document`) | V2 (`edits.document`) | Notes |
| --- | --- | --- |
| `imageSize` | `resize` | V2 requires width/height as `{unit, value}` objects |
| `canvasSize` | `crop` | V2 uses `bounds: {top, left, right, bottom}` |
| `trim` | `trim` | Name stays the same; V2 uses `trimUpon: "transparent_pixels"` |

**Request Structure Pattern:**

```json
{
  "image": {
    "source": {"url": "<URL>"}  // For existing documents
    // OR
    "width": 1920,                // For new documents
    "height": 1080,
    "resolution": {"unit": "density_unit", "value": 72},  // Object format required
    "fill": "white",  // Also: "transparent", "background_color" (NOT "backgroundColor" — camelCase is rejected in V2)
                      // Or object: {"solidColor": {"red": 255, "green": 255, "blue": 255}}
    "mode": "rgb",    // Use "grayscale" (not "gray") for grayscale documents
    "depth": 8        // Integer, not string. Valid values depend on mode:
                      // bitmap: 1; grayscale/rgb/hsb: 8, 16, 32; cmyk/lab/multichannel: 8, 16; indexed/duotone: 8
  },
  "edits": {
    "document": {
      "resize": {...},
      "crop": {...},
      "trim": {...}
    },
    "layers": [
      {
        "type": "layer|text_layer|adjustment_layer|smart_object_layer|solid_color_layer",
        "name": "Layer Name",
        "operation": {
          "type": "add|edit|delete",
          "placement": {...}
        },
        // Layer-specific properties
      }
    ]
  },
  "outputs": [...]
}
```

**Layer Operation Types:**

- `"type": "add"` - Creates a new layer
- `"type": "edit"` - Changes existing layer properties (**required** — edit operations must include the `operation` field; V2 will not infer it)
- `"type": "delete"` - Deletes a layer
- `"type": "move"` - Moves a layer to another position

**Layer lock:** Use `"protection": ["all"]` to lock and `"protection": ["none"]` to unlock; this replaces V1 `"locked": true/false`. When `all` or `none` is used, it must be the only array entry. Individual flags are `transparency`, `composite`, `position`, `artboard_autonest`. For clipping masks, set top-level `"isClipped": true` on the layer rather than `mask.clip`.

## See also

- [Edit Operations](api-edit-operations.md)
