# Document Operations Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

For document-level editing operations, use this guide to move workloads off v1 `/pie/psdService/documentOperations` and onto v2 `/create-composite`.

## Overview

In v1, cropping, resizing, trimming, and similar document-wide changes went through the `/documentOperations` endpoint for existing PSD files. These edits apply across the whole document instead of single-layer targets.

**V1 Endpoint:**

```text
POST /pie/psdService/documentOperations
```

**V2 Endpoint:**

```text
POST /v2/create-composite
```

For v2 requests, put document operations inside the `edits.document` object of the `/create-composite` payload.

Important:

Only part of the V1 document-operation surface is available in V2 today. Adobe is adding more capabilities over time, so compare your scenario with the supported operations listed below.

## Key differences

- **Request Structure:** Put operations under the `edits.document` object.
- **Operation Names:** Several operation names and parameter names are different.
- **Enhanced Options:** Operations expose finer-grained settings.
- **Feature Parity:** V2 does not yet include every v1 capability.

## Available document operations

These document operations are available in V2 at present:

- **Resize** - Adjust the document dimensions.
- **Crop** - Cut the document to the provided bounds.
- **Trim** - Clear transparent edge pixels.

## When to use document operations

Use **Document Operations** for these situations:

- Resizing complete documents
- Cropping to defined dimensions
- Removing transparent edge areas
- Preparing images for fixed output sizes

Use **[Format Conversion](api-format-conversion-migration.md)** for these situations:

- Converting PSDs to other formats without edits
- Producing several output formats
- Exporting without changing the image

Use **[Document Creation](api-document-creation-migration.md)** for these situations:

- Creating a new blank canvas
- Building templates without an existing design
- Choosing starting dimensions up front

Use **[Composite Operations](api-v1-to-v2.md)** for these situations:

- Adding, removing, or modifying layers
- Applying layer effects
- Constructing complex multi-layer compositions

## Resize operations

Resize updates the full document size and applies that change across every layer.

**Key Points:**

- `width` and `height` now use Objects containing `unit` (e.g. `pixels_unit`, `percent_unit`) and `value`.
- `constrainProportions` keeps the aspect ratio intact (default `true`).
- `resample` selects the algorithm: `bicubic`, `bicubic_smoother`, `bicubic_sharper`, `bilinear`, `nearest_neighbor`.
- `scaleStyles` changes layer effects in proportion to the resize (default `true`).
- `rasterize` converts layers to raster form during the resize (default `false`).

**V2 Example:**

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
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 1920
        },
        "height": {
          "unit": "pixels_unit",
          "value": 1080
        },
        "constrainProportions": true,
        "resample": "bicubic",
        "scaleStyles": true
      }
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
}'
```

### Resize parameter details

**`width` and `height`**

Each dimension is represented by an object with `unit` and `value`:

```json
{
  "width": {
    "unit": "pixels_unit",
    "value": 1920
  },
  "height": {
    "unit": "pixels_unit",
    "value": 1080
  }
}
```

**Supported unit types:**

- `pixels_unit` - Fixed measurements in pixels
- `percent_unit` - Scaling expressed as a percentage
- `distance_unit` - Physical sizing expressed in points

**`constrainProportions`**

- Type: Boolean
- Default: `true`
- Description: keeps resizing from changing the aspect ratio
- When `true`: Specify only one dimension if the other side should be derived

**`resample`**

- Type: String
- Default: `"bicubic"`
- Options:
  - `"nearest_neighbor"` - Fastest, with the lowest output quality
  - `"bilinear"` - Quick option with moderate quality
  - `"bicubic"` - Balances quality and speed, and is the recommended choice
  - `"bicubic_smoother"` - Works well for enlarging images
  - `"bicubic_sharper"` - Works well for reducing image size
- Description: chooses the resampling algorithm used for the resize

**`scaleStyles`**

- Type: Boolean
- Default: `true`
- Description: adjusts layer styles (effects) in proportion with the resize

**`rasterize`**

- Type: Boolean
- Default: `false`
- Description: rasterizes layers as part of the resize operation

### Resize request examples

**Constrained-proportion resize:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 1920
        },
        "constrainProportions": true,
        "resample": "bicubic"
      }
    }
  }
}
```

With `constrainProportions` set to `true`, supply width OR height; Photoshop calculates the remaining dimension.

**Percentage-based resize:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "percent_unit",
          "value": 50
        },
        "height": {
          "unit": "percent_unit",
          "value": 50
        },
        "resample": "bicubic_sharper"
      }
    }
  }
}
```

**Exact-dimension resize:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 800
        },
        "height": {
          "unit": "pixels_unit",
          "value": 600
        },
        "constrainProportions": false,
        "resample": "bicubic"
      }
    }
  }
}
```

**Smooth interpolation for upscaling:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 4000
        },
        "constrainProportions": true,
        "resample": "bicubic_smoother",
        "scaleStyles": true
      }
    }
  }
}
```

**Sharp interpolation for downscaling:**

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 800
        },
        "constrainProportions": true,
        "resample": "bicubic_sharper",
        "scaleStyles": true
      }
    }
  }
}
```

## Crop operations

Crop cuts away document areas according to the boundaries supplied in the request.

**Key Points:**

- `bounds`: Rectangle in pixels, using (`left`, `top`, `right`, `bottom`) coordinates from the document origin.
- `hide`: Set `false` for a destructive crop that removes pixels; set `true` to hide pixels while retaining their data.

**V2 request:**

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
    "document": {
      "crop": {
        "bounds": {
          "left": 100,
          "top": 100,
          "right": 1820,
          "bottom": 980
        },
        "hide": false
      }
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
}'
```

### Crop parameter details

**`bounds`**

This object specifies the pixel rectangle used for cropping:

```json
{
  "bounds": {
    "left": 100, // Left edge X coordinate
    "top": 100, // Top edge Y coordinate
    "right": 1820, // Right edge X coordinate
    "bottom": 980 // Bottom edge Y coordinate
  }
}
```

- Every coordinate value uses pixels
- The document origin is the reference point, with (0,0 at top-left)

**`hide`**

- Type: Boolean
- Default: `false`
- Description:
  - `false` - Deletes pixels outside the bounds for a destructive crop
  - `true` - Hides out-of-bounds pixels while retaining the data

### Crop request examples

**Delete pixels outside the bounds:**

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 0,
          "top": 0,
          "right": 1920,
          "bottom": 1080
        },
        "hide": false
      }
    }
  }
}
```

**Hide pixels without deleting them:**

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 100,
          "top": 100,
          "right": 1820,
          "bottom": 980
        },
        "hide": true
      }
    }
  }
}
```

**Centered crop example:**

For 1920x1080 source art, use a centered 1200x800 crop:

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 360, // (1920 - 1200) / 2
          "top": 140, // (1080 - 800) / 2
          "right": 1560, // 360 + 1200
          "bottom": 940 // 140 + 800
        },
        "hide": false
      }
    }
  }
}
```

**Square format example:**

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 420, // Center 1080x1080 in 1920 width
          "top": 0,
          "right": 1500, // 420 + 1080
          "bottom": 1080
        },
        "hide": false
      }
    }
  }
}
```

## Trim operations

Trim detects transparent pixels at document edges and removes those edge areas automatically.

**Key Points:**

- `trimUpon` provides the v2 trim basis, replacing the v1 `"transparent_pixels"` field usage.

**V2 request:**

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
    "document": {
      "trim": {
        "trimUpon": "transparent_pixels"
      }
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
}'
```

### Trim parameter details

**`trimUpon`**

- Type: String
- Current options: `"transparent_pixels"`
- Description: defines what the trim operation uses as its basis

Future releases are expected to add more trim modes, including options based on pixel color.

## Combining multiple document operations

Several document operations can be placed in one request. Processing follows this order: resize, crop, then trim.

**Key Points:**

- Put `resize`, `crop`, and `trim` together inside a single `edits.document` object.
- Execution order is resize -> crop -> trim.

**V2 request:**

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
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 2000
        },
        "constrainProportions": true,
        "resample": "bicubic"
      },
      "crop": {
        "bounds": {
          "left": 100,
          "top": 100,
          "right": 1900,
          "bottom": 1000
        },
        "hide": false
      },
      "trim": {
        "trimUpon": "transparent_pixels"
      }
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
}'
```

## Combining with output conversion

One request can both apply document operations and convert the result to other formats:

**Key Points:**

- Use `edits.document` for the operations, and add multiple `outputs[]` entries when you need more than one format, such as PSD and JPEG from one API request.

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
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 1920
        },
        "constrainProportions": true,
        "resample": "bicubic"
      }
    }
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

## Common use cases

### Thumbnail generation

Create thumbnails by resizing first, with crop added when the thumbnail shape requires it:

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 400
        },
        "constrainProportions": true,
        "resample": "bicubic_sharper"
      }
    }
  }
}
```

### Web image optimization

Prepare images for web delivery by resizing:

```json
{
  "edits": {
    "document": {
      "resize": {
        "width": {
          "unit": "pixels_unit",
          "value": 1920
        },
        "constrainProportions": true,
        "resample": "bicubic"
      }
    }
  }
}
```

### Correcting aspect ratio

Use crop bounds to reach the target aspect ratio, such as 16:9:

```json
{
  "edits": {
    "document": {
      "crop": {
        "bounds": {
          "left": 0,
          "top": 120,
          "right": 1920,
          "bottom": 1200
        },
        "hide": false
      }
    }
  }
}
```

### Trim transparent edges

Remove excess transparent area with trim:

```json
{
  "edits": {
    "document": {
      "trim": {
        "trimUpon": "transparent_pixels"
      }
    }
  }
}
```

## Common migration issues

### Invalid unit type

❌ **Problem:** The request uses an unsupported unit type.

```json
{
  "width": {
    "unit": "px",
    "value": 1920
  }
}
```

✅ **Solution:** Use one of the accepted unit types.

```json
{
  "width": {
    "unit": "pixels_unit",
    "value": 1920
  }
}
```

### Missing unit object

❌ **Problem:** `width` and `height` are supplied as plain numbers.

```json
{
  "resize": {
    "width": 1920,
    "height": 1080
  }
}
```

✅ **Solution:** Use the required object shape for unit-based dimensions.

```json
{
  "resize": {
    "width": {
      "unit": "pixels_unit",
      "value": 1920
    },
    "height": {
      "unit": "pixels_unit",
      "value": 1080
    }
  }
}
```

### Crop bounds outside canvas

❌ **Problem:** Crop coordinates go past the canvas.

```json
{
  "bounds": {
    "left": 0,
    "top": 0,
    "right": 5000, // Exceeds document width
    "bottom": 3000 // Exceeds document height
  }
}
```

✅ **Fix:** Keep bounds within the document canvas.

```json
{
  "bounds": {
    "left": 0,
    "top": 0,
    "right": 1920, // Within document width
    "bottom": 1080 // Within document height
  }
}
```

## Feature availability

### Currently available

- ✅ Multiple resampling methods for resize
- ✅ Pixel-based or percentage-based resizing
- ✅ Option to constrain proportions
- ✅ Option to scale layer styles
- ✅ Cropping with provided bounds
- ✅ Destructive crop and non-destructive crop modes
- ✅ Transparent-pixel trimming

### Coming soon

- ⏳ Adjustments for canvas size
- ⏳ Pixel-color-based trim behavior
- ⏳ More trim options
- ⏳ Operations for image rotation
- ⏳ Additional advanced resampling algorithms

## Next steps

- Read the [composite operations guide](api-v1-to-v2.md) for layer manipulation patterns
- Use the [format conversion guide](api-format-conversion-migration.md) when planning output choices
- Validate document operations against the development endpoints
