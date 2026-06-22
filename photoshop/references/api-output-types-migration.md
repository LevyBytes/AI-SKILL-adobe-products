# Output Types Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Adobe Photoshop API v2 changes how output formats are described. This guide covers structure changes, field renames, and the JPEG/PNG quality or compression updates for JPEG, PNG, PSD, and TIFF outputs.

## Output Types Migration Guide — Summary of changes

Every output format in v2 follows the same broad structural updates:

| Change | v1 | v2 |
| --- | --- | --- |
| **Location URL** | `outputs[].href` | `outputs[].destination.url` |
| **Format Type** | `outputs[].type` | `outputs[].mediaType` |
| **Storage Type** | `outputs[].storage` (required) | `outputs[].destination.storageType` (optional) |
| **Quality (JPEG)** | Numeric 1-7 (or 1-12) | String enum |
| **Compression (PNG)** | "small", "medium", "large" | Detailed string enum |
| **ICC Profile** | Not available | Optional `iccProfile` for color management (see [ICC Profile Migration](api-v1-to-v2-3.md)) |

## Output Types Migration Guide — Structural changes (all output types)

**Key structural changes:**

1. **Destination Object**: the URL now belongs inside a `destination` object.
2. **Storage Type**:
   - v1: every output required the `storage` field.
   - v2: provide `storageType` only for Azure Blob Storage and Dropbox.
   - AWS S3 presigned URLs do not need `storageType`.
3. **Media Type**: `type` is renamed to `mediaType` to make the field purpose clearer.

### V1 output structure

```json
{
  "outputs": [
    {
      "href": "https://example.com/output.jpg",
      "storage": "external",
      "type": "image/jpeg",
      "width": 1920,
      "quality": 7
    }
  ]
}
```

### V2 output structure

```json
{
  "outputs": [
    {
      "destination": {
        "url": "https://example.com/output.jpg"
      },
      "mediaType": "image/jpeg",
      "width": 1920,
      "quality": "maximum"
    }
  ]
}
```

### Common output fields

These fields are available across output types:

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| `mediaType` | string | Output format (e.g., "image/jpeg") | Yes |
| `destination` | object | Output destination configuration | Yes |
| `width` | integer | Output width in pixels (≥ 0) | No |
| `height` | integer | Output height in pixels (≥ 0) | No |
| `maxWidth` | integer | Maximum width in pixels (≥ 0) | No |
| `resample` | string | Resampling algorithm when resizing to `width`/`maxWidth`. Values: `nearest_neighbor`, `bilinear`, `bicubic`, `bicubic_smoother`, `bicubic_sharper`. Defaults to `bicubic_sharper`. Applies to JPEG, PNG, and TIFF only. | No |
| `shouldTrimToCanvas` | boolean | Trim transparent pixels | No |
| `iccProfile` | object | ICC color profile for color management (JPEG, PNG, TIFF, PSD only; not PSDC) | No |

## Output Types Migration Guide — Format support: color mode and bit depth

During export, the API converts source images automatically when the target format cannot accept the source color mode or bit depth. The tables below list supported combinations and the fallback for each export path.

**Export paths:** _Full document_ means exporting the entire document, such as `/v2/create-composite` with no layer selection. _Single layer_ means one layer is exported. _Layers composite_ means the output is built from multiple selected layers.

**With ICC Profile** means the output's `iccProfile` option is supplied. For full document export with an ICC profile, the ICC transformation handles color management, so format-specific conversion is bypassed.

**Layers composite:** layers composite export does not apply format-specific conversion; the composite is written in its current form.

### Bit depth validation

| Export path | Target format | Supported depths | Fallback | ICC profile specified |
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
| Single layer | PSD | 8, 16-bit | Convert to 8-bit if needed | N/A |
| Layers composite | JPEG | — | No conversion | N/A |
| Layers composite | PNG | — | No conversion | N/A |
| Layers composite | TIFF | — | No conversion | N/A |

### Color mode validation

| Export path | Target format | Supported modes | Fallback | ICC profile specified |
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

## Output Types Migration Guide — JPEG output migration

### Quality parameter changes

For JPEG outputs, the important migration point is that `quality` changes from a number to a descriptive string.

### V1 JPEG quality (numeric)

```json
{
  "type": "image/jpeg",
  "quality": 7
}
```

The v1 API accepts numeric quality settings:

- Range: 1-7 (some versions supported 1-12)
- Larger numbers choose higher quality
- If omitted, v1 resolves to 7, the maximum-quality setting

### V2 JPEG quality enum

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```

The v2 API expects a descriptive string value:

- `"very_poor"` - produces the lowest quality and smallest file
- `"poor"` - selects poor quality
- `"low"` - selects low quality
- `"medium"` - balances image quality with file size
- `"high"` - selects high quality
- `"maximum"` - selects maximum quality
- `"photoshop_max"` - uses Photoshop maximum quality and is the recommended default

### JPEG quality mapping table

| v2 Quality | v1 Quality | Use Case |
| --- | --- | --- |
| `"very_poor"` | N/A | Smallest files (v2 only) |
| `"poor"` | N/A | Very small files (v2 only) |
| `"low"` | 1-2 | Thumbnails, small previews |
| `"medium"` | 3-4 | Standard web images |
| `"high"` | 5-6 | High-quality web images |
| `"maximum"` | 7 | Print, production |
| `"photoshop_max"` | N/A | Professional print, highest quality (recommended) |

`quality` can be omitted. Defaults vary by operation:

- **Create Composite** (`/v2/create-composite`): omitted `quality` resolves to `photoshop_max`
- **Generate Manifest** (`/v2/generate-manifest`): layer thumbnails use `medium` when no quality is supplied
- **Execute Actions** (`/v2/execute-actions`): no default is guaranteed. If a V1 request left out `quality`, V1 used the highest-quality JPEG encoder. Set `quality: "photoshop_max"` explicitly when migrating those V1 execute-actions requests so pixel output stays aligned with V1 reference files.

### Full JPEG request migration

**Main field moves:**

1. `inputs[].href` → `image.source.url`
2. `outputs[].href` → `outputs[].destination.url`
3. `outputs[].type` → `outputs[].mediaType`
4. `quality: 7` → `quality: "maximum"`
5. `storage: "external"` removed (implicit for S3 URLs)

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://my-bucket.s3.amazonaws.com/input.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://my-bucket.s3.amazonaws.com/output.jpg",
      "storage": "external",
      "type": "image/jpeg",
      "quality": 7,
      "width": 2000
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://my-bucket.s3.amazonaws.com/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-bucket.s3.amazonaws.com/output.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2000
    }
  ]
}
```

## Output Types Migration Guide — PNG output migration

### Compression parameter changes

PNG output in V2 has more compression choices, giving finer control over compression speed and final file size.

### V1 PNG compression

```json
{
  "type": "image/png",
  "compression": "medium"
}
```

The v1 API offers three compression levels:

- `"small"` - favors high compression and smaller files
- `"medium"` - balances compression settings
- `"large"` - uses lower compression and produces larger files

### V2 PNG compression

```json
{
  "mediaType": "image/png",
  "compression": "medium"
}
```

V2 exposes ten compression levels based on zlib/libpng conventions:

- `"none"` - disables compression (level 0)
- `"very_low"` - applies minimal compression (level 1)
- `"low"` - applies low compression (level 2)
- `"medium_low"` - applies medium-low compression (level 3)
- `"medium"` - applies medium compression (level 4)
- `"medium_high"` - applies medium-high compression (level 5)
- `"default"` - uses the standard library default (level 6)
- `"high"` - applies high compression (level 7)
- `"very_high"` - applies very high compression (level 8)
- `"maximum"` - uses level 9, the highest compression setting

### PNG compression mapping table

| v1 Compression | v2 Recommended | v2 Alternatives | Notes |
| --- | --- | --- | --- |
| `"small"` | `"maximum"` | `"very_high"`, `"high"` | Smallest file size, slower |
| `"medium"` | `"medium"` | `"default"`, `"medium_high"`, `"medium_low"` | Balanced performance |
| `"large"` | `"low"` | `"very_low"`, `"none"` | Fastest, larger files |

`compression` is optional. When it is absent, Create Composite and Generate Manifest both use `default` (level 6), a middle setting for size and runtime.

### Full PNG migration example

**Main field moves:**

1. `inputs[].href` → `image.source.url`
2. `outputs[].href` → `outputs[].destination.url`
3. `outputs[].type` → `outputs[].mediaType`
4. `compression: "medium"` stays the same (but more options available)
5. `storage` field removed

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://my-storage.com/input.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://my-storage.com/output.png",
      "storage": "external",
      "type": "image/png",
      "compression": "medium",
      "width": 1920
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://my-storage.com/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-storage.com/output.png"
      },
      "mediaType": "image/png",
      "compression": "medium",
      "width": 1920
    }
  ]
}
```

## Output Types Migration Guide — PSD output migration

### PSD format changes

PSD outputs do not use format-specific controls such as `quality` or `compression`. Migration for this format is limited to the common structural renames.

### V1 PSD output

```json
{
  "type": "image/vnd.adobe.photoshop",
  "href": "https://example.com/output.psd",
  "storage": "external"
}
```

### V2 PSD output

```json
{
  "mediaType": "image/vnd.adobe.photoshop",
  "destination": {
    "url": "https://example.com/output.psd"
  }
}
```

### Supported media types for PSD

V2 accepts either PSD media type spelling:

- `"image/vnd.adobe.photoshop"` (preferred spelling)
- `"vnd.adobe.photoshop"` (accepted for legacy payloads)

### Full PSD migration example

**Main field moves:**

1. Shared output field names move to their V2 form
2. `options` → `edits`
3. PSD output needs no quality or compression parameters

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://storage.example.com/document.psd",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "name": "Background",
        "locked": false
      }
    ]
  },
  "outputs": [
    {
      "href": "https://storage.example.com/modified.psd",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://storage.example.com/document.psd"
    }
  },
  "edits": {
    "layers": [
      {
        "name": "Background",
        "protection": ["none"]
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "https://storage.example.com/modified.psd"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

## Output Types Migration Guide — TIFF output migration

### TIFF format changes

The v2 API has no TIFF compression options. As with PSD, TIFF migration consists only of structural updates.

### V1 TIFF output

```json
{
  "type": "image/tiff",
  "href": "https://example.com/output.tiff",
  "storage": "external"
}
```

### V2 TIFF output

```json
{
  "mediaType": "image/tiff",
  "destination": {
    "url": "https://example.com/output.tiff"
  }
}
```

### Full TIFF request migration

**Main field moves:**

1. Standard output fields move to V2 names
2. v2 does not define TIFF compression parameters
3. Common output fields remain supported (`width`, `height`, etc.)

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://storage.example.com/input.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://storage.example.com/output.tiff",
      "storage": "external",
      "type": "image/tiff",
      "width": 3000
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://storage.example.com/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://storage.example.com/output.tiff"
      },
      "mediaType": "image/tiff",
      "width": 3000
    }
  ]
}
```

## Output Types Migration Guide — Multiple outputs

One V2 request can ask for several output formats, up to 25 outputs.

### Example with multiple outputs

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://storage.example.com/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://storage.example.com/output-hq.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": {
        "url": "https://storage.example.com/output-preview.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 800
    },
    {
      "destination": {
        "url": "https://storage.example.com/output.png"
      },
      "mediaType": "image/png",
      "compression": "maximum",
      "width": 1920
    },
    {
      "destination": {
        "url": "https://storage.example.com/output.psd"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

The single call above creates these four outputs:

1. JPEG at 2400px width using high-quality settings
2. Preview JPEG at 800px width using `medium`
3. PNG at 1920px width using maximum compression
4. PSD output with edits applied

## Output Types Migration Guide — Storage type considerations

### When to use `storageType`

In v2, `storageType` is optional except when the destination uses one of the storage providers that require it:

| Storage Provider | storageType Required | Value |
| --- | --- | --- |
| AWS S3 (presigned URLs) | ❌ No | Not needed |
| Azure Blob Storage | ✅ Yes | `"azure"` |
| Dropbox | ✅ Yes | `"dropbox"` |
| Frame.io | ❌ No | Not needed |
| Google Drive | ❌ No | Not needed |

### Azure Blob Storage example

```json
{
  "destination": {
    "url": "https://myaccount.blob.core.windows.net/container/output.jpg",
    "storageType": "azure"
  },
  "mediaType": "image/jpeg",
  "quality": "high"
}
```

### Dropbox example

```json
{
  "destination": {
    "url": "https://dropbox.com/path/to/output.jpg",
    "storageType": "dropbox"
  },
  "mediaType": "image/jpeg",
  "quality": "high"
}
```

## Output Types Migration Guide — Common migration errors

### Using V1 field names

❌ **Problem:**

```json
{
  "outputs": [
    {
      "href": "https://...",
      "type": "image/jpeg"
    }
  ]
}
```

❌ **Error:**

```text
Required field 'destination' is missing
Required field 'mediaType' is missing
```

✅ **Solution:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "https://..."
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```

### Numeric JPEG quality

❌ **Problem:**

```json
{
  "mediaType": "image/jpeg",
  "quality": 7
}
```

❌ **Error:**

```text
Invalid value '7' at path 'outputs[0].quality'.
Accepted values are: very_poor, poor, low, medium, high, maximum, photoshop_max
```

✅ **Solution:**

```json
{
  "mediaType": "image/jpeg",
  "quality": "maximum"
}
```

### Invalid PNG compression

❌ **Problem:**

```json
{
  "mediaType": "image/png",
  "compression": "small"
}
```

❌ **Error:**

```txt
Invalid value 'small' at path 'outputs[0].compression'.
```

✅ **Solution:**

Use one of the V2 `compression` enum values:

```json
{
  "mediaType": "image/png",
  "compression": "maximum"
}
```

### Using JPEG quality for PNG

❌ **Problem:**

```json
{
  "mediaType": "image/png",
  "quality": "high"
}
```

❌ **Error:**

```txt
'quality' parameter is not supported for PNG format
```

✅ **Solution:**

Set PNG compression through `compression`:

```json
{
  "mediaType": "image/png",
  "compression": "high"
}
```

### Missing storage type for Azure

❌ **Problem:**

```json
{
  "destination": {
    "url": "https://myaccount.blob.core.windows.net/..."
  }
}
```

❌ **Error:**

```txt
Azure Blob Storage URL requires 'storageType': 'azure'
```

✅ **Solution:**

```json
{
  "destination": {
    "url": "https://myaccount.blob.core.windows.net/...",
    "storageType": "azure"
  }
}
```

## Output Types Migration Guide — Migration checklist

Use this checklist while converting output configurations:

### All Output Types

- [ ] Change `outputs[].href` to `outputs[].destination.url`
- [ ] Change `outputs[].type` to `outputs[].mediaType`
- [ ] Omit `storage: "external"` for AWS S3 presigned URLs
- [ ] Include `storageType` for Azure Blob Storage or Dropbox when required
- [ ] Recheck shared fields such as `width`, `height`, and `maxWidth`
- [ ] Add `resample` when you need interpolation control with `width`/`maxWidth` (JPEG, PNG, TIFF; defaults to `bicubic_sharper`)

### JPEG specific

- [ ] Change numeric `quality` settings to string enums
- [ ] Use the mapping table for V1 quality values
- [ ] Remember that `quality` is optional; create-composite defaults to `photoshop_max`, and manifest thumbnails default to `medium`

### PNG specific

- [ ] Move `compression` settings to the V2 enum values
- [ ] Use the mapping table for V1 compression values
- [ ] Remember that omitted `compression` defaults to `default` (level 6)
- [ ] Use `compression` rather than `quality`

### PSD specific

- [ ] Set `mediaType` to `"image/vnd.adobe.photoshop"`
- [ ] Do not add quality or compression parameters

### TIFF specific

- [ ] Set `mediaType` to `"image/tiff"`
- [ ] Do not include compression parameters in V2

## Output Types Migration Guide — Quick reference

### Field name changes (all formats)

| v1 Field | v2 Field | Notes |
| --- | --- | --- |
| `outputs[].href` | `outputs[].destination.url` | Placed under the destination object |
| `outputs[].type` | `outputs[].mediaType` | Name updated to make the media meaning explicit |
| `outputs[].storage` | `outputs[].destination.storageType` | May be omitted in V2 |

### JPEG quality quick reference

| v1 | v2 | When to Use |
| --- | --- | --- |
| 7 | `"maximum"` | Production default |
| 5-6 | `"high"` | High-quality web output |
| 3-4 | `"medium"` | Standard web delivery |
| 1-2 | `"low"` | Thumbnail output |

### PNG compression quick reference

| v1 | v2 | When to Use |
| --- | --- | --- |
| `"small"` | `"maximum"` | Smallest file size |
| `"medium"` | `"medium"` | Balanced result |
| `"large"` | `"low"` | Fastest processing |

## Output Types Migration Guide — Additional resources

- [Execute Actions Endpoint](api-actions-migration.md)
- [Status Endpoint](api-status-migration.md)

**Related migration guides:**

- [Migration Overview](api-v1-to-v2-3.md) - Full V1-to-V2 migration map
- [Format Conversion Migration](api-format-conversion-migration.md) - Format-to-format conversion changes
- [ICC Profile Migration](api-v1-to-v2-3.md) - Output export color management
- [Actions Migration](api-actions-migration.md) - Running Photoshop actions
- [Storage Solutions](api-getting-started.md) - In-depth storage setup
