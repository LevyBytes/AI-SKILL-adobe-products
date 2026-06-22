# Llm Migration Reference (part 4)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Step 3 — Output types migration

### Multiple outputs

A V2 request can include as many as 25 output entries:

```json
{
  "outputs": [
    {
      "destination": { "url": "..." },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": { "url": "..." },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 800
    },
    {
      "destination": { "url": "..." },
      "mediaType": "image/png",
      "compression": "high"
    }
  ]
}
```

### Color mode and bit depth validation

If the requested target format cannot accept the source image color mode or bit depth, the API performs the needed conversion automatically. The exact rule set depends on which export path is used.

**Export paths:** _Full document_ means exporting the whole document. _Single layer_ means outputting one layer. _Layers composite_ means creating an export from several selected layers composited together. For _Layers composite_, the API leaves the target format unchanged and performs no format-specific conversion pass.

### Bit depth validation table

| Export Path | Target Format | Supported Depths | Fallback | ICC Profile Specified |
| --- | --- | --- | --- | --- |
| Full document | JPEG | 8-bit only | Convert to 8-bit if needed | No |
| Full document | JPEG | 8-bit only | No conversion | Yes |
| Full document | PNG | 8-bit, 16-bit | Convert to 8-bit if needed | No |
| Full document | PNG | 8-bit, 16-bit | No conversion | Yes |
| Full document | TIFF | 8, 16, 32-bit | No conversion | N/A |
| Full document | PSD | 8, 16, 32-bit | No conversion | N/A |
| Full document | PSDC | 8, 16, 32-bit | No conversion | N/A |
| Single layer | JPEG | 8-bit only | Convert to 8-bit if needed | N/A |
| Single layer | PNG | 8-bit, 16-bit | Convert to 8-bit if needed | N/A |
| Single layer | TIFF | 8, 16, 32-bit | No conversion | N/A |
| Single layer | PSD | 8, 16-bit only | Convert to 8-bit if needed | N/A |
| Layers composite | JPEG | — | No conversion | N/A |
| Layers composite | PNG | — | No conversion | N/A |
| Layers composite | TIFF | — | No conversion | N/A |

For a single-layer PSD export, 8 or 16-bit are accepted; 32-bit is not.

### Color mode validation table

| Export Path | Target Format | Supported Modes | Fallback | ICC Profile Specified |
| --- | --- | --- | --- | --- |
| Full document | JPEG | RGB, Grayscale, CMYK | Convert to RGB if needed | No |
| Full document | JPEG | RGB, Grayscale, CMYK | No conversion | Yes |
| Full document | PNG | RGB, Grayscale | Convert to RGB if needed | No |
| Full document | PNG | RGB, Grayscale | No conversion | Yes |
| Full document | TIFF | All | No conversion | N/A |
| Full document | PSD | All | No conversion | N/A |
| Full document | PSDC | All | No conversion | N/A |
| Single layer | JPEG | RGB, Grayscale, CMYK | Convert to RGB if needed | N/A |
| Single layer | PNG | RGB, Grayscale | Convert to RGB if needed | N/A |
| Single layer | TIFF | All | No conversion | N/A |
| Single layer | PSD | RGB, Grayscale, CMYK | Convert to RGB if needed | N/A |
| Layers composite | JPEG | — | No conversion | N/A |
| Layers composite | PNG | — | No conversion | N/A |
| Layers composite | TIFF | — | No conversion | N/A |

### Output type-specific issues

### Issue: Numeric JPEG quality

**Problem:**

```json
{
  "mediaType": "image/jpeg",
  "quality": 7
}
```

**Error:**

```
Invalid value '7' at path 'outputs[0].quality'.
Accepted values are: very_poor, poor, low, medium, high, maximum, photoshop_max
```

**Solution:**

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```

### Issue: Old PNG compression values

**Problem:**

```json
{
  "mediaType": "image/png",
  "compression": "small"
}
```

**Error:**

```
Invalid value 'small' at path 'outputs[0].compression'.
```

**Solution:**

```json
{
  "mediaType": "image/png",
  "compression": "maximum"
}
```

### Issue: Using quality for PNG

**Problem:**

```json
{
  "mediaType": "image/png",
  "quality": "high"
}
```

**Error:**

```
'quality' parameter is not supported for PNG format
```

**Solution:**

```json
{
  "mediaType": "image/png",
  "compression": "high"
}
```

## Step 3 — ICC profile support (V2 new feature)

ICC profile support is a **new V2 capability**; V1 did not provide output color profile settings.

### Overview

There are two locations where ICC profiles can be supplied:

1. **On `outputs`**: this sets the color space for the exported file. Place `iccProfile` on any output for `/v2/create-composite`, `/v2/create-artboard`, or `/v2/execute-actions`. JPEG, PNG, TIFF, and PSD support it; PSDC (Cloud PSD) does **not**.
2. **On `image` (document creation)**: this embeds the color profile when a new document is created. Put `iccProfile` inside the `image` block for a new document request where no `image.source` is present. Both standard and custom profiles are valid here.

### Standard profiles

For built-in profile choices, pass the profile name directly and no external file is required:

```json
"iccProfile": {
  "type": "standard",
  "name": "sRGB IEC61966-2.1",
  "imageMode": "rgb"
}
```

**RGB profiles:** `"Adobe RGB (1998)"`, `"Apple RGB"`, `"ColorMatch RGB"`, `"sRGB IEC61966-2.1"`

**Grayscale profiles (Dot Gain):** `"Dot Gain 10%"`, `"Dot Gain 15%"`, `"Dot Gain 20%"`, `"Dot Gain 25%"`, `"Dot Gain 30%"`

**Grayscale profiles (Gray Gamma):** `"Gray Gamma 1.8"`, `"Gray Gamma 2.2"`

The profile name comparison is exact, including punctuation and spacing. For standard profiles, `imageMode` may be only `"rgb"` or `"grayscale"`; CMYK is unavailable for this profile type.

### Custom profiles (enables CMYK)

For CMYK output, provide a custom `.icc` file:

```json
"iccProfile": {
  "type": "custom",
  "name": "U.S. Web Coated (SWOP) v2",
  "imageMode": "cmyk",
  "source": {
    "url": "https://example.com/profiles/custom.icc"
  }
}
```

For custom profiles, `imageMode` may be `"rgb"`, `"grayscale"`, or `"cmyk"`.

### Format support table

| Format | mediaType | ICC Profile Supported |
| --- | --- | --- |
| JPEG | `image/jpeg` | Yes |
| PNG | `image/png` | Yes |
| TIFF | `image/tiff` | Yes |
| PSD | `image/vnd.adobe.photoshop` | Yes |
| PSDC | `document/vnd.adobe.cpsd+dcxucf` | **No** |

### Conversion behavior with ICC profile

For full-document exports, specifying an ICC profile causes the format-specific bit-depth and color-mode fallback conversion to be skipped; color management is handled by the ICC transformation. Refer to the earlier Color Mode and Bit Depth Validation tables.

### Output migration checklist

**For LLM-assisted migration work:**

1. **Inspect the output format first** before recommending parameters:

   - For JPEG output, set `quality`; its value must be a string enum.
   - For PNG output, set `compression`; this also uses a string enum.
   - For PSD/TIFF output, do not add a format-specific parameter.

2. **Suggested defaults:**

   - JPEG: `"photoshop_max"` (recommended default for the highest quality setting)
   - PNG: `"default"` (same as library-standard level 6; used if the field is absent)

3. **Typical field mapping:**
   ```javascript
   // V1 to V2 transformation
   v1.outputs[0].href → v2.outputs[0].destination.url
   v1.outputs[0].type → v2.outputs[0].mediaType
   v1.outputs[0].quality (7) → v2.outputs[0].quality ("maximum")
   v1.outputs[0].storage → omit (for S3) or move to destination.storageType
   ```

## Step 3 — Common migration issues and solutions

### Category: Missing/incorrect fields

### Issue: Missing outputs array

**Problem:**

```json
{
  "image": {"source": {"url": "<URL>"}},
  "edits": {...}
  // Missing outputs!
}
```

**Solution:**

```json
{
  "image": {"source": {"url": "<URL>"}},
  "edits": {...},
  "outputs": [
    {
      "destination": {"url": "<OUTPUT_URL>"},
      "mediaType": "image/jpeg"
    }
  ]
}
```

### Issue: Unencoded characters in source/destination URLs

**Problem:** URL encoding that V1 tolerated is rejected in V2, which applies strict URL validation on every endpoint.

```json
{ "image": { "source": { "url": "https://host/My Folder/file.psd" } } }
```

**Solution:** Encode special characters anywhere they occur in `source.url` or `destination.url`.

```json
{ "image": { "source": { "url": "https://host/My%20Folder/file.psd" } } }
```

The most frequent failure is an unencoded space (`%20`). The returned error is `"The url is malformed or blocked"`, and the rule applies to every V2 endpoint.

### Issue: String values for numeric fields (strict type coercion)

**Problem:** Values that V1 accepted as strings must be sent as strict numeric types in V2.

```json
{ "image": { "width": "1920", "height": "1080", "depth": "8" } }
```

**Solution:** Send integers or floats.

```json
{ "image": { "width": 1920, "height": 1080, "depth": 8 } }
```

Fields often affected include `image.width`, `image.height`, `image.depth`, `outputs[].width`, `outputs[].height`, `opacity`, and `resolution.value`.

### Issue: Missing `type` field on layer in `edits.layers[]`

**Problem:** A layer item omits `type`, for example a visibility-only V1 edit where the type was implicit.

```json
{ "edits": { "layers": [{ "name": "My Layer", "isVisible": false }] } }
```

**Solution:** Every object in `edits.layers[]` must carry `type`; V2 will not infer it.

```json
{ "edits": { "layers": [{ "type": "layer", "name": "My Layer", "isVisible": false }] } }
```

Pick the matching type value: `"layer"`, `"text_layer"`, `"adjustment_layer"`, `"smart_object_layer"`, `"group_layer"`, or `"solid_color_layer"`.

### Issue: Wrong media type property

**Problem:** Using `type` instead of `mediaType`

```json
{
  "outputs": [{
    "destination": {...},
    "type": "image/jpeg"  // Wrong!
  }]
}
```

**Solution:**

```json
{
  "outputs": [{
    "destination": {...},
    "mediaType": "image/jpeg"  // Correct!
  }]
}
```

### Issue: Invalid quality values

**Problem:** Using V1 numeric quality (1-7)

```json
{
  "quality": 7 // V1 format
}
```

**Solution:** Use V2 string values

```json
{
  "quality": "maximum" // V2 format
}
```

Valid V2 values: `"very_poor"`, `"poor"`, `"low"`, `"medium"`, `"high"`, `"maximum"`, `"photoshop_max"`

**Note:** V2 accepts string enums only; V1 numeric quality values are invalid.

### Category: Storage issues

### Issue: Using V1 storage parameter

**Problem:**

```json
{
  "storage": "external" // V1 format
}
```

**Solution:** Use destination structure

```json
{
  "destination": {
    "url": "<URL>"
    // storageType only for Azure/Dropbox
  }
}
```

### Issue: storageType confusion

**Problem:** Adding storageType for AWS S3

```json
{
  "destination": {
    "url": "<S3_URL>",
    "storageType": "external" // NOT needed!
  }
}
```

**Solution:** Omit storageType for standard URLs

```json
{
  "destination": {
    "url": "<S3_URL>"
    // No storageType needed
  }
}
```

Only use storageType for:

- Azure: `"storageType": "azure"`
- Dropbox: `"storageType": "dropbox"`

### Issue: Embedded storage for images

**Problem:** Using embedded for image output

```json
{
  "destination": {
    "embedded": "base64"
  },
  "mediaType": "image/jpeg" // Too large!
}
```

**Solution:** Use external or hosted storage for images

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/jpeg"
}
```

Use embedded output only when returning XMP metadata or JSON manifest content.

### Category: Request structure issues

### Issue: Using V1 input structure

**Problem:**

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

**Solution:** Use V2 image structure

```json
{
  "image": {
    "source": {
      "url": "<URL>"
    }
  }
}
```

### Issue: Wrong parameter names

**Problem:** Using V1 PascalCase

```json
{
  "options": {
    "Exposure": 1.2,
    "Contrast": 10
  }
}
```

**Solution:** Use V2 camelCase with categories

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

### Category: Layer operations

### Issue: Missing operation type

**Problem:** Adding a layer without an operation type.

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "New Layer",
        "image": {
          "source": { "url": "<URL>" }
        }
        // Missing operation!
      }
    ]
  }
}
```

**Solution:** Include the operation type explicitly.

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "New Layer",
        "image": {
          "source": { "url": "<URL>" }
        },
        "operation": {
          "type": "add",
          "placement": { "type": "top" }
        }
      }
    ]
  }
}
```

### Issue: Wrong layer type name

**Problem:** Using V1 layer type names

```json
{
  "type": "textLayer"     // V1
  "type": "adjustmentLayer"  // V1
  "type": "smartObject"   // V1
}
```

**Solution:** Use V2 underscore format

```json
{
  "type": "text_layer"           // V2
  "type": "adjustment_layer"     // V2
  "type": "smart_object_layer"   // V2
  "type": "solid_color_layer"    // V2
}
```

### Issue: Incorrect placement syntax

**Problem:** Placement still uses the V1 syntax.

```json
{
  "add": {
    "insertTop": true
  }
}
```

**Solution:** Put placement inside the operation object required by V2.

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

### Category: XMP and masks issues

### Issue: V1 mask structure not working

**Problem:** The mask payload still follows the V1 href and storage layout.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" }
    },
    "masks": [
      {
        "href": "<MASK_URL>",
        "storage": "external",
        "digest": "37B3568A954F0C80CA946DA0187FB9E2"
      }
    ]
  }
}
```

**Solution:** Put `masks` under the `xmp` object, and express each mask using the `source` structure.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" },
      "masks": [
        {
          "source": {
            "url": "<MASK_URL>"
          },
          "digest": "37B3568A954F0C80CA946DA0187FB9E2"
        }
      ]
    }
  }
}
```

### Issue: Inline XMP string not supported in V2

**Problem:** Inline XMP text is being carried over from a V1 request.

```json
{
  "edits": {
    "xmp": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>..."
  }
}
```

**Solution:** In V2, provide XMP through a file reference.

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

Creative Cloud storage is also valid:

```json
{
  "edits": {
    "xmp": {
      "source": {
        "creativeCloudPath": "/path/to/metadata.xmp"
      }
    }
  }
}
```

### Issue: Missing mask digest

**Problem:** A mask is supplied without its digest value.

```json
{
  "masks": [
    {
      "source": { "url": "<MASK_URL>" }
    }
  ]
}
```

**Solution:** Add a digest to every mask so it can be identified.

```json
{
  "masks": [
    {
      "source": { "url": "<MASK_URL>" },
      "digest": "37B3568A954F0C80CA946DA0187FB9E2"
    }
  ]
}
```

### Issue: Using numeric orientation values

**Problem:** Orientation is represented with numeric EXIF codes.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" },
      "orientation": 6
    }
  }
}
```

**Solution:** Use the enum's descriptive string values.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" },
      "orientation": "right_top"
    }
  }
}
```

Valid orientation values: `"top_left"`, `"top_right"`, `"bottom_right"`, `"bottom_left"`, `"left_top"`, `"right_top"`, `"right_bottom"`, `"left_bottom"`

### Issue: Orientation at wrong nesting level

**Problem:** `orientation` is placed at the `edits` level instead of inside `xmp`.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" }
    },
    "orientation": "right_top"
  }
}
```

**Solution:** Store `orientation` as a child of the `xmp` object.

```json
{
  "edits": {
    "xmp": {
      "source": { "url": "<XMP_URL>" },
      "orientation": "right_top"
    }
  }
}
```

### Category: Actions issues

### Issue: Wrong ActionJSON format

**Problem:** ActionJSON is supplied as an object or array.

```json
{
  "source": {
    "content": [{ "_obj": "..." }], // Wrong: array
    "contentType": "application/json"
  }
}
```

**Solution:** Convert the ActionJSON payload to a string.

```json
{
  "source": {
    "content": "[{\"_obj\":\"...\"}]", // Correct: string
    "contentType": "application/json"
  }
}
```

### Issue: Missing contentType

**Problem:**

```json
{
  "source": {
    "content": "[...]"
    // Missing contentType!
  }
}
```

**Solution:** Inline content should always declare `contentType`.

```json
{
  "source": {
    "content": "[...]",
    "contentType": "application/json"
  }
}
```

### Issue: Wrong action structure

**Problem:** The action reference still uses the V1 shape.

```json
{
  "options": {
    "actions": [
      {
        "href": "<URL>",
        "storage": "external"
      }
    ]
  }
}
```

**Solution:** Point action references through the V2 `source` object.

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "<URL>"
        }
      }
    ]
  }
}
```

### Category: Artboard issues

### Issue: Incorrect input structure

**Problem:** The request uses v1 input format.

```json
{
  "inputs": [{ "href": "<URL>", "storage": "external" }]
}
```

**Solution:** Express the inputs through the v2 `images` array.

```json
{
  "images": [{ "source": { "url": "<URL>" } }]
}
```

### Issue: Too many images

**Problem:** The request supplies more than 25 images.

**Error:** `Array size must be between 1 and 25 at path 'images'`

**Solution:** Keep the request image count from 1 through 25.

### Issue: Too many outputs

**Problem:** The request includes more than 25 outputs.

**Error:** `Array size must be between 1 and 25 at path 'outputs'`

**Solution:** Keep the output count from 1 through 25.

### Issue: Missing required source

**Problem:** An image entry lacks `source`.

**Error:** `Required field 'source' is missing at path 'images[0]'`

**Solution:** Add `source` to each image entry.

```json
{
  "images": [{ "source": { "url": "<URL>" } }]
}
```

### Issue: Invalid hosted storage period

**Problem:** Hosted storage `validityPeriod` is outside 60-86400 seconds.

**Error:** `validityPeriod must be between 60 and 86400 seconds`

**Solution:** Choose a value no lower than 60 (1 minute) and no higher than 86400 (24 hours).

```json
{
  "destination": { "validityPeriod": 3600 }
}
```

### Issue: Missing storage type for Azure/Dropbox

**Problem:** An Azure or Dropbox destination is used without `storageType`.

**Error:** `Azure Blob Storage URL requires 'storageType': 'azure'`

**Solution:** Supply `storageType` for Azure and Dropbox destinations.

```json
{
  "destination": {
    "url": "<AZURE_URL>",
    "storageType": "azure"
  }
}
```

### Issue: Invalid JPEG quality value (artboard outputs)

**Problem:** Quality is numeric instead of a string enum.

**Error:** `Invalid value '7' at path 'outputs[0].quality'. Accepted values are: very_poor, poor, low, medium, high, maximum, photoshop_max`

**Solution:** Use a string enum value for `quality`.

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```

### Category: Response handling

### Issue: Looking for manifest in initial response

**Problem:** The client expects manifest data in the immediate response.

**Solution:** Query the status endpoint after submitting the job.

```shell

## Step 1: Submit job

curl -X POST https://photoshop-api.adobe.io/v2/generate-manifest ...

## Step 2: Poll status

curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} ...

## }

```

### Issue: Not handling all status values

**Problem:** The code only distinguishes succeeded from failed.

```javascript
if (status === 'succeeded') { ... }
else { /* assume failed */ }
```

**Solution:** Cover every status value explicitly.

```javascript
switch (status) {
  case "succeeded":
    // Process result
    break;
  case "failed":
    // Handle error
    break;
  case "pending":
  case "running":
    // Continue polling
    break;
  default:
  // Unknown status
}
```

### Issue: Not handling error details array

**Problem:** The code expects one error message.

```javascript
console.error(status.error); // Wrong
```

**Solution:** Iterate through the error details array.

```javascript
status.errorDetails.forEach((error) => {
  console.error(`${error.errorCode}: ${error.message}`);
});
```

## } — Code transformation examples

### Example 1: Simple edit (auto tone)

**V1 Code:**

```shell
curl -X POST https://image.adobe.io/lrService/autoTone \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": {
    "href": "https://my-storage.com/input.jpg",
    "storage": "external"
  },
  "outputs": [
    {
      "href": "https://my-storage.com/output.jpg",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

**V2 Code:**

```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://my-storage.com/input.jpg"
    }
  },
  "edits": {
    "autoTone": true
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-storage.com/output.jpg"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```

**Key Transformations:**

1. Base URL: `image.adobe.io` → `photoshop-api.adobe.io`
2. Endpoint: `/lrService/autoTone` → `/v2/edit`
3. Input: `inputs.href` → `image.source.url`
4. Operation: Implicit → `edits.autoTone: true`
5. Output: `outputs[].href` → `outputs[].destination.url`
6. Type: `type` → `mediaType`
7. Storage: Removed (not needed for standard URLs)

### Example 2: Complex edit (multiple adjustments)

**V1 Code (3 separate calls):**

```shell

```
