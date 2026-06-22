# Document Creation Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide to update blank-document creation workflows that currently call v1 `/pie/psdService/documentCreate` so they call v2 `/create-composite`.

## Overview

In v1, `/documentCreate` created blank Photoshop documents from supplied dimensions, resolution, color mode, and related properties.

**V1 Endpoint:**

```shell
POST /pie/psdService/documentCreate
```

**V2 Endpoint:**

```shell
POST /v2/create-composite
```

Note:

For documents based on artboards, call the separate `/v2/create-artboard` endpoint. See [Artboard Migration guide](api-v1-to-v2.md).

## Key differences

- **Request Structure:** Put document parameters in the `image` object.
- **Parameter Names:** Some names differ, including `fill` options.
- **Enhanced Options:** V2 exposes finer document-property controls.
- **Initial Content:** Layers can be added while creating the document (creating a new document with a group layer is not yet supported; this is an upcoming feature. To add layers inside a group, run create-composite on an existing document with placement `type: "into"` and `referenceLayer`).

## When to use document creation

Choose **Document Creation** for:

- Creating fresh blank documents.
- Programmatically building templates.
- Generating documents at specific dimensions.
- Beginning without an existing file.

Choose **[Format Conversion](api-format-conversion-migration.md)** for:

- Converting existing PSDs into other formats.
- Exporting images without edits.
- Creating thumbnails from existing files.

Choose **[Document Operations](api-document-operations-migration.md)** for:

- Changing existing documents with crop, resize, or trim operations.
- Adjusting canvas size.
- Applying document-level transformations.

Choose **[Composite Operations](api-v1-to-v2.md)** for:

- Working with layers in existing documents.
- Adding, removing, or changing layers.
- Building complex multi-layer compositions.

## Creating a basic blank document

**Key points:**

- Document dimensions: `width`, `height` in pixels, plus `resolution` as an object with `unit` and `value`
- `fill`: Background type, such as `"transparent"`, `"white"`, or `"background_color"`, or an object for custom RGB
- `mode`: Color mode, such as `"rgb"`, `"cmyk"`, or `"grayscale"`
- `depth`: Integer bit depth, such as `8`, `16`, or `32`

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": {"unit": "density_unit", "value": 72},
    "fill": "transparent",
    "mode": "rgb",
    "depth": 8
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

## Document parameters

### Required parameters

**`width`**

- Type: Integer
- Range: 1-32000 pixels
- Description: Document width in pixels

**`height`**

- Type: Integer
- Range: 1-32000 pixels
- Description: Document height in pixels

**`resolution`**

- Type: Object made up of `unit` and `value`
- Format: `{"unit": "density_unit", "value": N}` with N at least 1 (value >= 1)
- Description: Pixels-per-inch (PPI) resolution for the document
- Common values: web 72, draft print 150, high-quality print 300
- Example: `{"unit": "density_unit", "value": 72}`

### Optional parameters

**`fill`**

- Type: String or Object
- Default: `"white"`
- String options:
  - `"white"` - Sets a white background
  - `"background_color"` - Uses the configurable background color
  - `"transparent"` - Makes the background transparent
- Custom-color object form: `{"solidColor": {"rgb": {"red": R, "green": G, "blue": B}}}`
- Description: Document background fill

V1 and V2 handle `fill` differently

There are two breaking changes: (1) `"backgroundColor"` became `"background_color"`, so the V1 enum string `"backgroundColor"` fails in V2. Use `"background_color"` with the underscore. (2) Custom solid colors now use object syntax in V2; V1 was limited to the three string shortcuts, while V2 accepts `{"solidColor": {"rgb": {"red": R, "green": G, "blue": B}}}` for arbitrary colors.

**`mode`**

- Type: String
- Default: `"rgb"`
- Options: `"rgb"`, `"bitmap"`, `"grayscale"`, `"indexed"`, `"hsb"`, `"cmyk"`, `"lab"`, `"duotone"`, `"multichannel"`
- Description: Document color mode. Use the table below to choose a valid depth for the selected mode.

**`depth`**

- Type: Integer
- Default: `8` (when omitted)
- Values: `1`, `8`, `16`, or `32` as bit depth per channel. `mode` determines which combinations are valid:
  - **bitmap:** `1` only
  - **grayscale, rgb, hsb:** 8, 16, or 32
  - **cmyk, lab, multichannel:** 8 or 16
  - **indexed, duotone:** 8 only

| mode | Supported depths |
| --- | --- |
| bitmap | 1 |
| grayscale | 8, 16, 32 |
| rgb | 8, 16, 32 |
| hsb | 8, 16, 32 |
| cmyk | 8, 16 |
| lab | 8, 16 |
| multichannel | 8, 16 |
| indexed | 8 only |
| duotone | 8 only |

**`pixelScaleFactor`**

- Type: Number (Double)
- Default: `1` when omitted
- Range: Positive only, with 0.1 as the minimum
- Description: Image pixel scale factor, for example in high-DPI or Retina workflows

**`iccProfile`**

- Type: Object (`standard` or `custom`)
- Default: None (optional)
- Description: Color-management ICC profile applied while the document is created. Standard named profiles and custom `.icc` files are both supported.

  **Standard profile:** Use `{"type": "standard", "name": "<profile_name>"}` with one of these `name` values: Adobe RGB (1998), Apple RGB, ColorMatch RGB, sRGB IEC61966-2.1, Dot Gain 10%/15%/20%/25%/30%, Gray Gamma 1.8, Gray Gamma 2.2

  **Custom profile:** `{"type": "custom", "name": "<descriptive_name>", "source": {"url": "<icc_file_url>"}}` — set `source.url` to the `.icc` or `.icm` file location. Valid `imageMode` values are `"rgb"`, `"grayscale"`, and `"cmyk"`.

**`name`**

- Type: String
- Max length: 255 characters
- Description: Optional title/name for the document

## Examples by use case

### Web graphics document

Create a web-optimized graphics document:

```json
{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": "transparent",
    "mode": "rgb",
    "depth": 8
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

### Print document

Set up a high-resolution print document:

```json
{
  "image": {
    "width": 2550,
    "height": 3300,
    "resolution": { "unit": "density_unit", "value": 300 },
    "fill": "white",
    "mode": "cmyk",
    "depth": 8
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

### Social media template

Use a square canvas for social media work:

```json
{
  "image": {
    "width": 1080,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": "white",
    "mode": "rgb",
    "depth": 8
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

### Banner document

Create a wide banner canvas:

```json
{
  "image": {
    "width": 3000,
    "height": 600,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": "transparent",
    "mode": "rgb",
    "depth": 8
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

### Document with custom ICC profile

Color-managed custom-profile document:

Use this payload shape:

```json
{
  "image": {
    "width": 2550,
    "height": 3300,
    "resolution": { "unit": "density_unit", "value": 300 },
    "fill": "white",
    "mode": "rgb",
    "depth": 8,
    "iccProfile": {
      "type": "custom",
      "name": "DCI P3 D65",
      "source": {
        "url": "<PRESIGNED_URL_TO_ICC_FILE>"
      },
      "imageMode": "rgb"
    }
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

## Creating with initial layers

One request can both create a document and add its starting content layers:

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": {"unit": "density_unit", "value": 72},
    "fill": "white",
    "mode": "rgb",
    "depth": 8
  },
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "Background Image",
        "image": {
          "source": {
            "url": "<IMAGE_URL>"
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "bottom"
          }
        }
      },
      {
        "type": "text_layer",
        "name": "Title",
        "text": {
          "content": "Hello World",
          "characterStyles": [
            {
              "characterStyle": {
                "fontSize": 72,
                "fontColor": {
                  "type": "rgb",
                  "red": 0,
                  "green": 0,
                  "blue": 0
                }
              }
            }
          ]
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

## Background fill options

### White background

```json
{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": "white"
  }
}
```

### Transparent background

```json
{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": "transparent"
  }
}
```

### Custom background color

```json
{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": "background_color"
  }
}
```

With `"background_color"`, Photoshop uses the default background color. To choose a specific color, add a solid color layer as part of document creation.

## Color modes explained

### RGB (Red, Green, Blue)

- **Good fit:** Browser graphics, display delivery, and photographic assets
- **Channels:** 3 channels: Red, Green, and Blue
- **Use case:** A common default for digital production
- **Depth support:** 8, 16, or 32

```json
{
  "mode": "rgb"
}
```

### CMYK (Cyan, Magenta, Yellow, Black)

- **Good fit:** Press-ready output and commercial print workflows
- **Channels:** 4 channels: Cyan, Magenta, Yellow, and Black
- **Use case:** Choose this mode for assets destined for physical printing
- **Depth support:** 8 or 16

```json
{
  "mode": "cmyk"
}
```

### Grayscale

- **Good fit:** Monochrome imagery and print-size optimization
- **Channels:** Single channel
- **Use case:** Fits one-color artwork and black-and-white photographic material
- **Depth support:** 8, 16, or 32

```json
{
  "mode": "grayscale"
}
```

### Lab color

- **Good fit:** Advanced color work and correction-heavy editing
- **Channels:** 3 channels: Lightness, a, and b
- **Use case:** Fits professional workflows that require color grading
- **Depth support:** 8 or 16

```json
{
  "mode": "lab"
}
```

## Bit depth explained

`depth` takes an integer value, and the permitted choices are determined by `mode`; use the earlier mode/depth table as the reference.

### 1-bit

- **Storage:** Smallest footprint available
- **Precision:** Binary output, limited to black or white
- **Best for:** Line art and black-and-white scans that use bitmap mode
- **Mode support:** bitmap only

```json
{
  "mode": "bitmap",
  "depth": 1
}
```

### 8-bit

- **Storage:** Smallest option among non-bitmap modes
- **Precision:** 256 levels per channel
- **Best for:** Web assets, general editing, and final export files
- **Mode support:** All except bitmap

```json
{
  "depth": 8
}
```

### 16-bit

- **Storage:** Medium
- **Precision:** 65,536 levels per channel
- **Best for:** Photography and editing pipelines that need extra tonal headroom
- **Mode support:** grayscale, rgb, hsb, cmyk, lab, multichannel

```json
{
  "depth": 16
}
```

### 32-bit

- **Storage:** Largest
- **Precision:** High Dynamic Range (HDR)
- **Best for:** HDR imagery, rendered 3D assets, and scientific image data
- **Mode support:** grayscale, rgb, hsb only (not cmyk, lab, indexed, duotone, multichannel)

```json
{
  "depth": 32
}
```

## Multiple outputs

To build a document and send it out as more than one file type in the same call:

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "width": 1920,
    "height": 1080,
    "resolution": {"unit": "density_unit", "value": 72},
    "fill": "white",
    "mode": "rgb",
    "depth": 8
  },
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
      "quality": "high"
    }
  ]
}'
```

## Common dimension templates

### Social media sizes

**Instagram Post (Square)**

```json
{ "width": 1080, "height": 1080 }
```

**Instagram Story**

```json
{ "width": 1080, "height": 1920 }
```

**Facebook Cover**

```json
{ "width": 820, "height": 312 }
```

**Twitter Header**

```json
{ "width": 1500, "height": 500 }
```

**LinkedIn Banner**

```json
{ "width": 1584, "height": 396 }
```

### Standard print sizes (at 300 DPI)

**4x6 inches**

```json
{ "width": 1200, "height": 1800, "resolution": { "unit": "density_unit", "value": 300 } }
```

**5x7 inches**

```json
{ "width": 1500, "height": 2100, "resolution": { "unit": "density_unit", "value": 300 } }
```

**8x10 inches**

```json
{ "width": 2400, "height": 3000, "resolution": { "unit": "density_unit", "value": 300 } }
```

**8.5x11 inches (Letter)**

```json
{ "width": 2550, "height": 3300, "resolution": { "unit": "density_unit", "value": 300 } }
```

### Web sizes

**Full HD**

```json
{ "width": 1920, "height": 1080, "resolution": { "unit": "density_unit", "value": 72 } }
```

**4K/UHD**

```json
{ "width": 3840, "height": 2160, "resolution": { "unit": "density_unit", "value": 72 } }
```

**Desktop Wallpaper (Wide)**

```json
{ "width": 2560, "height": 1440, "resolution": { "unit": "density_unit", "value": 72 } }
```

## Common migration issues

### Resolution format

**Problem:** Supplying `resolution` as a bare integer does not match the V2 schema.

```json
{
  "resolution": 72
}
```

**Solution:** Provide `resolution` as an object carrying both `unit` plus `value` fields.

```json
{
  "resolution": { "unit": "density_unit", "value": 72 }
}
```

### Resolution value too low

**Problem:** A `resolution` value below 1 is not accepted.

```json
{
  "resolution": { "unit": "density_unit", "value": 0 }
}
```

**Solution:** Set `value` to 1 or higher.

```json
{
  "resolution": { "unit": "density_unit", "value": 1 }
}
```

### Invalid pixelScaleFactor

**Problem:** `pixelScaleFactor` cannot be zero or a negative number.

```json
{
  "pixelScaleFactor": 0
}
```

**Solution:** Send a positive value; the minimum is 0.1.

```json
{
  "pixelScaleFactor": 1.0
}
```

### Invalid color mode: gray instead of grayscale

**Problem:** A deprecated or unsupported `mode` value will fail validation.

```json
{
  "mode": "gray"
}
```

**Solution:** Use `"grayscale"` instead of `"gray"`. The allowed values are `rgb`, `bitmap`, `grayscale`, `indexed`, `hsb`, `cmyk`, `lab`, `duotone`, `multichannel`.

```json
{
  "mode": "grayscale"
}
```

### Color-mode depth mismatch

**Problem:** The chosen `depth` must be valid for the selected `mode`; for example, CMYK does not allow 32-bit depth.

```json
{
  "mode": "cmyk",
  "depth": 32
}
```

**Solution:** Match `depth` to the mode: bitmap uses `1`; cmyk and lab allow 8 or 16; indexed and duotone allow 8 only; rgb, grayscale, and hsb allow 8, 16, or 32.

```json
{
  "mode": "cmyk",
  "depth": 16
}
```

### Unsupported fill option

**Problem:** An unsupported value for `fill` is invalid.

```json
{
  "fill": "black"
}
```

**Solution:** Accepted `fill` choices are `"white"`, `"transparent"`, `"background_color"`, or the object form `{"solidColor": {"rgb": {"red": R, "green": G, "blue": B}}}`.

```json
{
  "fill": "white"
}
```

### Oversized dimensions

**Problem:** The requested dimensions are above the maximum limits.

```json
{
  "width": 35000,
  "height": 35000
}
```

**Solution:** Keep width and height between 1 and 32000 pixels.

```json
{
  "width": 32000,
  "height": 32000
}
```

## Next steps

- Read the [composite operations guide](api-v1-to-v2.md) when adding layers to the created document
- Use the [storage solutions guide](api-getting-started.md) to review output choices
- Validate document creation against the development endpoints

## See also

- [Unsupported](uxp-unsupported.md)
