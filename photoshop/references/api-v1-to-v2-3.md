# Icc Profile Migration, Key Improvements

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ICC Profile Migration Guide — Overview; Migration to v2 Overview; Key Improvements and Architecture with v2.

## ICC Profile Migration Guide — Overview

Adobe Photoshop API V2 adds ICC (International Color Consortium) profile support as a **new capability**. The V1 API (`image.adobe.io`, `/pie/psdService/*`) offered no output color profile configuration. When moving to V2, specify ICC profiles to control color management for exported JPEG, PNG, TIFF, and PSD outputs.

Topics covered:

- Predefined standard ICC profiles
- User-supplied custom ICC profiles through `.icc` files
- Supported formats and restrictions
- Frequent validation errors and prevention patterns

### ICC Profile Migration Guide — Summary of changes

| Change | V1 | V2 |
| --- | --- | --- |
| **ICC Profile Support** | Not available | Optional `iccProfile` on output exports and document creation |
| **Output Color Management** | N/A | Add `iccProfile` to any output (JPEG, PNG, TIFF, PSD) |
| **Document Creation Color Management** | N/A | Add `iccProfile` to `image` block in `/v2/create-composite` |

- **Conversion Behavior:** Details are in the [format-support section](api-output-types-migration.md).

### ICC Profile Migration Guide — Standard ICC profile

Standard profiles rely on predefined profile names, so no external file is needed.

### Schema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | string | Yes | Must be `"standard"` |
| `name` | string | Yes | One of the predefined profile names (see below) |
| `imageMode` | string | No | `"rgb"` or `"grayscale"`. Defaults to `"rgb"` for RGB profiles |

### Standard profile names

**RGB Profiles:**

- Adobe RGB (1998)
- Apple RGB
- ColorMatch RGB
- sRGB IEC61966-2.1

**Grayscale Profiles (Dot Gain):**

- Dot Gain 10%
- Dot Gain 15%
- Dot Gain 20%
- Dot Gain 25%
- Dot Gain 30%

**Grayscale Profiles (Gray Gamma):**

- Gray Gamma 1.8
- Gray Gamma 2.2

### Standard profile example

```json
"iccProfile": {
  "type": "standard",
  "name": "sRGB IEC61966-2.1",
  "imageMode": "rgb"
}
```

Profile names are exact-match values, including spaces and punctuation. For standard profiles, `imageMode` accepts only `rgb` or `grayscale`; CMYK is unsupported.

### ICC Profile Migration Guide — Custom ICC profile

With custom profiles, callers can supply their own `.icc` profile files. Put the file somewhere the service can retrieve it, such as a presigned URL, Creative Cloud path, or similar location.

### Schema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | string | Yes | Must be `"custom"` |
| `name` | string | Yes | Descriptive name for the profile (max 255 characters) |
| `source` | object | Yes | File reference with `url` (or Creative Cloud path) |
| `imageMode` | string | No | `"rgb"`, `"grayscale"`, or `"cmyk"` |

### Custom profile example

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

For CMYK workflows, custom profiles can set `imageMode: "cmyk"`; standard profiles do not offer that mode.

### ICC Profile Migration Guide — Format support

These output formats can carry ICC profiles:

| Format | mediaType | ICC Profile Supported |
| --- | --- | --- |
| JPEG | `image/jpeg` | Yes |
| PNG | `image/png` | Yes |
| TIFF | `image/tiff` | Yes |
| PSD | `image/vnd.adobe.photoshop` | Yes |
| PSDC | `document/vnd.adobe.cpsd+dcxucf` or `document/vnd.adobe.cpsd+dcx` | **No** |

### PSDC restriction

For PSDC (Photoshop Cloud Document) outputs, ICC profiles are unavailable. Sending `iccProfile` on a PSDC output returns this message:

> ICC profiles are not currently supported for PSDC (Photoshop Cloud Document) output format. Please remove the iccProfile field or use a different output format (JPEG, PNG, TIFF, or PSD) if ICC profile support is required.

**Solution:** Omit `iccProfile` from PSDC outputs, or target JPEG, PNG, TIFF, or PSD.

### ICC Profile Migration Guide — Where ICC profile applies

### On outputs (export color management)

Use `iccProfile` on outputs for this endpoint set:

- `/v2/create-composite`
- `/v2/create-artboard`
- `/v2/execute-actions`

```json
{
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.jpg" },
      "mediaType": "image/jpeg",
      "iccProfile": {
        "type": "standard",
        "name": "Adobe RGB (1998)",
        "imageMode": "rgb"
      }
    }
  ]
}
```

### On the `image` block (document creation color management)

For a new document created with `/v2/create-composite` and no `image.source`, put `iccProfile` inside the `image` block to choose the embedded document color profile during creation. The block accepts either standard or custom profiles:

```json
{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "mode": "rgb",
    "depth": 8,
    "iccProfile": {
      "type": "custom",
      "name": "DCI P3 D65",
      "source": { "url": "https://example.com/profiles/DCI-P3-D65.icc" },
      "imageMode": "rgb"
    }
  },
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.psd" },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

On the `image` block, `iccProfile` defines the embedded profile for the document. On an `output`, `iccProfile` changes the exported file's color space. You can use either location by itself, or use both in the same request.

### ICC Profile Migration Guide — Complete examples

### Standard ICC profile in create-composite

```json
{
  "image": {
    "source": { "url": "https://example.com/input.psd" }
  },
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.psd" },
      "mediaType": "image/vnd.adobe.photoshop",
      "iccProfile": {
        "type": "standard",
        "name": "sRGB IEC61966-2.1",
        "imageMode": "rgb"
      }
    }
  ]
}
```

### Custom ICC profile in create-composite (CMYK)

```json
{
  "image": {
    "source": { "url": "https://example.com/input.psd" }
  },
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.tiff" },
      "mediaType": "image/tiff",
      "iccProfile": {
        "type": "custom",
        "name": "U.S. Web Coated (SWOP) v2",
        "imageMode": "cmyk",
        "source": { "url": "https://example.com/profiles/custom.icc" }
      }
    }
  ]
}
```

### ICC Profile Migration Guide — Common migration errors

### Case 1: PSDC output includes ICC profile data

**Input sample:**

```json
{
  "mediaType": "document/vnd.adobe.cpsd+dcx",
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "rgb"
  }
}
```

**Response message:**

> ICC profiles are not currently supported for PSDC (Photoshop Cloud Document) output format. Please remove the iccProfile field or use a different output format (JPEG, PNG, TIFF, or PSD) if ICC profile support is required.

**Solution:** Drop `iccProfile` from PSDC outputs, or choose JPEG, PNG, TIFF, or PSD.

### Case 2: imageMode uses uppercase text

**Input sample:**

```json
"iccProfile": {
  "type": "standard",
  "name": "sRGB IEC61966-2.1",
  "imageMode": "RGB"
}
```

**Response message:**

> Invalid value 'RGB' at path 'outputs[0].iccProfile.imageMode'. Accepted values are: rgb, grayscale

**Solution:** Use lowercase only. Standard profiles allow `"rgb"` and `"grayscale"`; custom profiles can also use `"cmyk"`.

### Case 3: Standard profile requests imageMode cmyk

**Input sample:**

```json
"iccProfile": {
  "type": "standard",
  "name": "sRGB IEC61966-2.1",
  "imageMode": "cmyk"
}
```

**Response message:**

> Invalid standard ICC profile image mode

**Solution:** Standard profiles accept `rgb` and `grayscale` only. For CMYK work, use a custom profile with `imageMode: "cmyk"`.

### Case 4: Standard profile name is invalid

**Input sample:**

```json
"iccProfile": {
  "type": "standard",
  "name": "SRGB_IEC61966_2_1",
  "imageMode": "rgb"
}
```

**Response message:**

> Unknown standard ICC profile name: `SRGB_IEC61966_2_1`

**Solution:** Provide the precise display name, `"sRGB IEC61966-2.1"`, including the spaces and the hyphen.

### Case 5: Custom profile name is longer than 255 characters

**Input sample:**

```json
"iccProfile": {
  "type": "custom",
  "name": "A very long profile name that exceeds 255 characters...",
  "source": { "url": "https://example.com/profile.icc" }
}
```

**Response message:**

> ICC profile name must not exceed 255 characters

**Solution:** Reduce the profile name so it is 255 characters or fewer.

### Case 6: grayscale is spelled incorrectly

**Input sample:**

```json
"iccProfile": {
  "type": "standard",
  "name": "sRGB IEC61966-2.1",
  "imageMode": "greyscale"
}
```

**Response message:**

> Invalid value 'greyscale' at path 'outputs[0].iccProfile.imageMode'. Accepted values are: rgb, grayscale

**Solution:** This API expects the American spelling, `"grayscale"`, rather than `"greyscale"`.

### ICC Profile Migration Guide — Migration checklist

When adding ICC profile handling in V2, check the following:

### General

- [ ] `iccProfile` is optional; add it only when color management is required
- [ ] For JPEG, PNG, TIFF, or PSD outputs, put `iccProfile` on the output, but do not use it for PSDC

### Standard profiles

- [ ] Match profile names exactly, for example `"sRGB IEC61966-2.1"`
- [ ] Restrict values to `imageMode: "rgb"` or `"grayscale"`; CMYK is not valid
- [ ] Keep `imageMode` lowercase

### Custom profiles

- [ ] Include `name` (max 255 characters) and `source.url`
- [ ] Select `imageMode: "rgb"`, `"grayscale"`, or `"cmyk"` as appropriate
- [ ] Keep `imageMode` lowercase
- [ ] Confirm that the profile URL can be reached, such as a presigned URL

### Validation

- [ ] Exclude `iccProfile` from PSDC outputs
- [ ] Check that every `imageMode` value is lowercase

### ICC Profile Migration Guide — Quick reference

### Standard profile names

| Category | Names |
| --- | --- |
| RGB | Adobe RGB (1998), Apple RGB, ColorMatch RGB, sRGB IEC61966-2.1 |
| Grayscale (Dot Gain) | Dot Gain 10%, 15%, 20%, 25%, 30% |
| Grayscale (Gamma) | Gray Gamma 1.8, Gray Gamma 2.2 |

### imageMode values

| Profile Type | Allowed Values |
| --- | --- |
| Standard | `rgb`, `grayscale` |
| Custom | `rgb`, `grayscale`, `cmyk` |

### Format support

| Format | ICC Supported |
| --- | --- |
| JPEG, PNG, TIFF, PSD | Yes |
| PSDC | No |

### ICC Profile Migration Guide — Related migration guides

- [Output Types Migration](api-output-types-migration.md) - Changes to JPEG, PNG, PSD, and TIFF output formats
- [Composite Migration](api-v1-to-v2.md) - Layer operations used with create-composite
- [Migration Quick Reference](api-v1-to-v2-3.md) - Full V1-to-V2 migration summary

## Migration to v2 Overview

Use this overview to understand the broad changes and plan the move from the legacy v1 Photoshop and Lightroom APIs to the unified v2 API.

### What's different?

Photoshop and Lightroom API v2 is a major upgrade from v1.

For complete information about the redesigned architecture and expanded service capabilities, see [Key Improvements and Architecture with v2](api-v1-to-v2-3.md).

**Unified architecture**

- A single unified API now handles all Photoshop and Lightroom operations
- Requests and responses follow consistent patterns across endpoints
- Authentication and error handling are simpler

**Improved capabilities**

- Run multiple operations within one API call
- Use more flexible output options, including embedded, hosted, and external storage
- Perform deeper layer manipulation and document editing
- Work with custom actions and scripts

**Better performance**

- Processing uses an optimized pipeline
- Common operations complete with lower latency
- Resource use is more efficient

### What are the breaking changes?

Several breaking changes arrive with the v2 API:

**Base URL change**

- Photoshop API v2 requests go to `photoshop-api*.adobe.io`; v1 used `image*.adobe.io`.

**Request payload structure changes**

- Across endpoints, several fields were renamed or reorganized.

**Output format changes**

- JPEG quality is now expressed with string enums; numeric 7 maps to "maximum".
- PNG compression now has 10 levels rather than 3.

**Response format modifications**

- Status and result structures have been updated.

**Different output configuration options** - Output destinations now use a new object structure with optional `storageType`.

- **New required fields in some cases**

- Some requests now require `mediaType` where v1 used `type`, plus `destination` where v1 used `href`.

**Deprecated fields**

- For AWS S3, the `storage` field is deprecated.
- JPEG numeric quality values are no longer accepted.

Check the detailed migration guide for each endpoint category to see the exact impact on your integration and the migration steps to apply.

### What about authentication?

Authentication does not change. Keep using your current OAuth Server-to-Server credentials with the new v2 endpoints. For details, see the [Authentication Guide](api-getting-started.md).

### How should I begin migrating?

1. **[Read the Key Improvements and Architecture with v2](api-v1-to-v2-3.md)** for the architecture changes
2. **Review storage options** through the [guide to enhanced storage solutions](api-getting-started.md)
3. **Pick your migration route** from the endpoints you use today, using the reference table below:
   - **Lightroom Operations:**
     - [Edit Operations](api-edit-operations.md) - Lightroom edit workflows, including autoTone, presets, XMP, and related operations
   - **Document Operations:**
     - [Format Conversion](api-format-conversion-migration.md) - PSD conversion to other formats (renditionCreate) plus PSDC Engine migration
     - [Document Creation](api-document-creation-migration.md) - Creation of new blank documents (documentCreate)
     - [Document Operations](api-document-operations-migration.md) - Document-wide operations such as crop, resize, and trim (documentOperations)
   - **Layer Operations:**
     - [Layer Operations Overview](api-v1-to-v2-4.md) - V2 layer operations introduction
     - [Image Layer Operations](api-v1-to-v2-4.md) - Image layers and solid color layers
     - [Text Layer Operations](api-layer-operations-text.md) - Styled text layers
     - [Adjustment Layer Operations](api-layer-operations-adjustments.md) - Non-destructive adjustment layers
     - [Smart Object Operations](api-layer-operations-smart-objects.md) - Smart object layer workflows
     - [Advanced Layer Operations](api-layer-operations-advanced.md) - Layer masks, groups, transforms, and blend-mode handling
   - **Other Operations:**
     - [Actions Migration](api-actions-migration.md) - Photoshop actions plus convenience API changes
     - [Output Types Migration](api-output-types-migration.md) - Output format updates for JPEG, PNG, PSD, and TIFF
     - [Artboard Migration](api-v1-to-v2.md) - Artboard workflow changes
     - [Manifest Migration](api-manifest-migration.md) - Manifest creation flow
     - [Status Migration](api-status-migration.md) - Job status polling changes
4. **Test your migration** against non-production workloads
5. **Update your production systems** after testing succeeds

### Service migration reference

The table below maps each v1 endpoint to its v2 counterpart:

| V1 Endpoint | V2 Endpoint | Guide |
| --- | --- | --- |
| `/lrService/autoTone` | `/v2/edit` | [Edit Operations](api-edit-operations.md) |
| `/lrService/autoStraighten` | `/v2/edit` | [Edit Operations](api-edit-operations.md) |
| `/lrService/presets` | `/v2/edit` | [Edit Operations](api-edit-operations.md) |
| `/lrService/xmp` | `/v2/edit` | [Edit Operations](api-edit-operations.md) |
| `/lrService/edit` | `/v2/edit` | [Edit Operations](api-edit-operations.md) |
| `/pie/psdService/smartObject` | `/v2/create-composite` | [Smart Object](api-guides-v2.md) |
| `/pie/psdService/renditionCreate` | `/v2/create-composite` | [Format Conversion](api-format-conversion-migration.md) |
| `/pie/psdService/documentCreate` | `/v2/create-composite` | [Document Creation](api-document-creation-migration.md) |
| `/pie/psdService/documentOperations` | `/v2/create-composite` | [Document Operations](api-document-operations-migration.md) |
| `/pie/psdService/photoshopActions` | `/v2/execute-actions` | [Actions Migration](api-actions-migration.md) |
| `/pie/psdService/actionJSON` | `/v2/execute-actions` | [Actions Migration](api-actions-migration.md) |
| `/pie/psdService/productCrop` | `/v2/execute-actions` | [Product Crop](api-convenience-apis.md) |
| `/pie/psdService/text` | `/v2/execute-actions` | [Text Layer Operations](api-text-layer-operations.md) |
| `/pie/psdService/artboardCreate` | `/v2/create-artboard` | [Artboard Migration](api-v1-to-v2.md) |
| `/pie/psdService/documentManifest` | `/v2/generate-manifest` | [Manifest Migration](api-manifest-migration.md) |
| `/pie/psdService/status/{jobId}` | `/v2/status/{jobId}` | [Status Migration](api-status-migration.md) |
| `/lrService/status/{jobId}` | `/v2/status/{jobId}` | [Status Migration](api-status-migration.md) |
| Layer operations | `/v2/create-composite` | [Layer Operations](api-v1-to-v2.md) (see sub-guides) |

## Key Improvements and Architecture with v2

Review the main service improvements in the v2 API.

This page describes the principal architecture and service changes in Photoshop API v2, so the migration benefits are clear. The sections summarize major endpoint-wide improvements in these areas:

- **Combined operations** - Send several edits in one request instead of splitting them across API calls.
- **Flexible storage options** - Choose among embedded, hosted, presigned, and Creative Cloud storage.
- **Published action files** - Inspect and modify the action definitions behind convenience workflows.
- **Enhanced layer operations** - Control layers more fully through the create-composite endpoint.
- **Improved error handling** - Receive clearer codes, multiple validation details, and a consistent error shape.

When you are ready to start migrating, begin with the [V1 to V2 Migration Guide overview](api-v1-to-v2-3.md).

### Combined operations

With v1, applying multiple operations required separate requests. For instance, auto tone and auto straighten took three individual API calls.

```shell

### Step 3: Adjust exposure

curl -X POST https://image.adobe.io/lrService/applyEdits ...
```

In v2, one request can combine multiple operations.

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
  "autoTone": true,
  "autoStraighten": {
    "enabled": true
  },
  "light": {
    "exposure": 1.2
  },
  "outputs": [...]
}'
```

### Step 3: Adjust exposure — Flexible storage options

V2 adds storage choices beyond presigned URLs:

- **Embedded Storage** - Return results inline as base64, a string, or JSON
- **Hosted Storage** - Use temporary Adobe-managed storage with configurable validity
- **Presigned URLs** - Broader support for Azure, Dropbox, and external storage
- **Creative Cloud Storage** - Use Creative Cloud paths directly

For more detail, see the [storage solutions guide](api-getting-started.md).

### Step 3: Adjust exposure — Published action files

In v1, convenience APIs for focused workflows, such as `productCrop` and `depthBlur`, relied on hidden server-side action files.

With v2, those action files are published for your use:

**Benefits:**

- Inspect the exact action definitions Adobe uses
- Adjust actions for your own requirements
- Study Adobe's implementations
- Build similar functionality yourself

**Workflow-specific migration guides:**

- [Product Crop Migration](api-convenience-apis.md) - Auto-crop product images and tune the padding.

For broader action usage in v2, see the [Actions Migration Guide](api-actions-migration.md).

### Step 3: Adjust exposure — Enhanced layer operations

The v2 `/create-composite` endpoint gives layer manipulation a broader surface:

- Create, remove, and reposition layers with fine control
- Use adjustment layers
- Transform smart objects
- Edit text layers
- Apply layer masks and blending options

### Step 3: Adjust exposure — Improved error handling

V2 returns richer validation and error information:

- Distinct error codes for each validation failure
- Multiple error details within one response
- More troubleshooting context
- A consistent error structure across all endpoints

### Step 3: Adjust exposure — Next steps

Before starting the migration, consult the [migration quick-reference table](api-v1-to-v2-3.md).
