# Depth Blur, Product Crop

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Depth Blur Migration; Convenience APIs migration; Product Crop Migration.

## Depth Blur Migration

For Depth Blur, use the v2 API in place of the v1 `/pie/psdService/depthBlur` endpoint.

### Overview

Photoshop's Neural Filters back the Depth Blur convenience API, which produces depth-of-field results through adjustable blur controls. For migrations, compare V1's `/pie/psdService/depthBlur` path with the V2 `/v2/execute-actions` workflow.

**V2 highlights:**

- All 11 customizable parameters are available
- Blur intensity, focal point, and color adjustments can be set directly
- Other actions can be chained into the workflow
- Published ActionJSON can be studied and customized

**Depth Blur is not currently supported in V2.** The depth blur feature depends on Neural Filters, and those filters are still unavailable through the V2 API. At present, the V1 `/pie/psdService/depthBlur` endpoint is still the only supported route for this capability. This reference remains available for planning and will change after V2 adds Neural Filters support.

### V1 API (deprecated)

**Endpoint:** `/pie/psdService/depthBlur`

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/depthBlur \
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
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

### V2 API (current)

**Endpoint:** `/v2/execute-actions`

### Using default settings

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"NF_OUTPUT_TYPE\":1,\"NF_UI_DATA\":{\"_obj\":\"NF_UI_DATA\",\"spl::filterStack\":[{\"_obj\":\"spl::filterStack\",\"spl::cropStates\":[{\"_obj\":\"spl::cropStates\",\"spl::cropId\":\"layer1\",\"spl::values\":{\"_obj\":\"spl::values\",\"spl::focalSelector\":\"auto\",\"spl::generateDepthMap\":false,\"spl::selectSubjectUsage\":1,\"spl::slideAperture\":50,\"spl::slideFocalDist\":50,\"spl::slideFocalRange\":50,\"spl::sliderBrightness\":0,\"spl::sliderHaze\":0,\"spl::sliderNoise\":0,\"spl::sliderSaturation\":0,\"spl::sliderSelectResolutionLevel\":1,\"spl::sliderTint\":0,\"spl::sliderWarmness\":0}}],\"spl::enabled\":true,\"spl::id\":\"internal.Hazy\",\"spl::version\":\"1.0\"}],\"spl::version\":\"1.0.6\"},\"_obj\":\"neuralGalleryFilters\"}]",
          "contentType": "application/json"
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

### ActionJSON definition

Photoshop's Neural Gallery Filters are the mechanism used by the Depth Blur action:

```json
[
  {
    "NF_OUTPUT_TYPE": 1,
    "NF_UI_DATA": {
      "_obj": "NF_UI_DATA",
      "spl::filterStack": [
        {
          "_obj": "spl::filterStack",
          "spl::cropStates": [
            {
              "_obj": "spl::cropStates",
              "spl::cropId": "layer1",
              "spl::values": {
                "_obj": "spl::values",
                "spl::focalSelector": "auto",
                "spl::generateDepthMap": false,
                "spl::selectSubjectUsage": 1,
                "spl::slideAperture": 50,
                "spl::slideFocalDist": 50,
                "spl::slideFocalRange": 50,
                "spl::sliderBrightness": 0,
                "spl::sliderHaze": 0,
                "spl::sliderNoise": 0,
                "spl::sliderSaturation": 0,
                "spl::sliderSelectResolutionLevel": 1,
                "spl::sliderTint": 0,
                "spl::sliderWarmness": 0
              }
            }
          ],
          "spl::enabled": true,
          "spl::id": "internal.Hazy",
          "spl::version": "1.0"
        }
      ],
      "spl::version": "1.0.6"
    },
    "_obj": "neuralGalleryFilters"
  }
]
```

### Customizable parameters

Default settings, valid ranges, and the meaning of each parameter:

| Parameter | Default | Range | Description |
| --- | --- | --- | --- |
| `spl::focalSelector` | `"auto"` | `"auto"`, `"manual"` | Chooses how the focus point is selected |
| `spl::selectSubjectUsage` | `1` | `0`, `1` | Turns subject selection off or on (0=off, 1=on) |
| `spl::slideAperture` | `50` | `0-100` | **Blur strength** - larger values produce heavier blur |
| `spl::slideFocalDist` | `50` | `0-100` | **Focal distance** - location of the focus point |
| `spl::slideFocalRange` | `50` | `0-100` | **Focal range** - width of the area kept in focus |
| `spl::sliderBrightness` | `0` | `-100 to 100` | Adjusts image brightness |
| `spl::sliderHaze` | `0` | `-100 to 100` | Controls haze intensity |
| `spl::sliderNoise` | `0` | `0-100` | Amount of grain/noise applied |
| `spl::sliderSaturation` | `0` | `-100 to 100` | Changes color saturation |
| `spl::sliderTint` | `0` | `-100 to 100` | Changes the color tint |
| `spl::sliderWarmness` | `0` | `-100 to 100` | Adjusts color temperature |

### Customization examples

### Strong blur effect

For heavier background blur, raise the `slideAperture` value:

```json
{
  "spl::values": {
    "_obj": "spl::values",
    "spl::focalSelector": "auto",
    "spl::selectSubjectUsage": 1,
    "spl::slideAperture": 90,
    "spl::slideFocalDist": 50,
    "spl::slideFocalRange": 50,
    ...
  }
}
```

### Cinematic look with warm tint

```json
{
  "spl::values": {
    "_obj": "spl::values",
    "spl::slideAperture": 70,
    "spl::sliderBrightness": 10,
    "spl::sliderHaze": 15,
    "spl::sliderWarmness": 20,
    "spl::sliderSaturation": 10,
    ...
  }
}
```

### Portrait mode effect

```json
{
  "spl::values": {
    "_obj": "spl::values",
    "spl::slideAperture": 85,
    "spl::slideFocalDist": 30,
    "spl::slideFocalRange": 40,
    "spl::sliderBrightness": 5,
    ...
  }
}
```

### Parameter guide

### Focus control

- **`spl::focalSelector`**: Use `"auto"` when AI should find focus, or `"manual"` when the caller controls it
- **`spl::selectSubjectUsage`**: A value of `1` enables automatic main-subject detection
- **`spl::slideFocalDist`**: Positions the focus plane (0=foreground, 100=background)
- **`spl::slideFocalRange`**: Sets the in-focus area's size (smaller=tighter focus, larger=more in focus)

### Blur intensity

- **`spl::slideAperture`**: Main setting for blur amount
  - `0-30`: Light blur
  - `30-60`: Moderate blur (default: 50)
  - `60-100`: Heavy blur for dramatic effects

### Color and atmosphere

- **`spl::sliderBrightness`**: Make the image brighter (`+`) or darker (`-`)
- **`spl::sliderHaze`**: Introduce atmospheric haze (`+`) or push clarity higher (`-`)
- **`spl::sliderSaturation`**: Increase (`+`) or decrease (`-`) color intensity
- **`spl::sliderTint`**: Move color toward magenta (`+`) or green (`-`)
- **`spl::sliderWarmness`**: Shift color temperature warmer/orange (`+`) or cooler/blue (`-`)
- **`spl::sliderNoise`**: Apply film grain or texture

### Migration checklist

- [ ] Switch the endpoint from `/pie/psdService/depthBlur` to `/v2/execute-actions`
- [ ] Change the request shape from `inputs`/`outputs` to `image`/`outputs`
- [ ] Replace `href` fields with `url` fields
- [ ] Omit `storage` fields
- [ ] Change the `type` field to `mediaType`
- [ ] Place the ActionJSON in `options.actions[].source.content`
- [ ] Set `contentType` to `"application/json"`
- [ ] Validate the call with default parameter values
- [ ] Tune parameters for your specific use case

### Migration examples

### Basic migration

**V1:**

```json
{
  "inputs": [{ "href": "s3://portrait.jpg", "storage": "external" }],
  "outputs": [{ "href": "s3://blurred.jpg", "type": "image/jpeg" }]
}
```

**V2:**

```json
{
  "image": { "source": { "url": "s3://portrait.jpg" } },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{...ActionJSON with default values...}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [{ "destination": { "url": "s3://blurred.jpg" }, "mediaType": "image/jpeg" }]
}
```

### With custom blur strength

```json
{
  "image": { "source": { "url": "https://..." } },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{...modify slideAperture to 80...}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [{ "destination": { "url": "https://..." }, "mediaType": "image/jpeg" }]
}
```

### Use cases

### Portrait photography

- **Blur**: 70-85
- **Focal Distance**: 30-40 (face focus)
- **Focal Range**: 35-45 (face stays sharp)
- **Brightness**: +5 to +10
- **Warmness**: +10 to +20 (skin tones look flattering)

### Product photography

- **Blur**: 60-75
- **Focal Distance**: 50 (product centered)
- **Focal Range**: 30-40 (product isolation)
- **Brightness**: 0 to +5
- **Saturation**: +10 to +15 (stronger colors)

### Landscape/tilt-shift

- **Blur**: 50-70
- **Focal Distance**: 40-60 (selected area in focus)
- **Focal Range**: 20-30 (miniature effect)
- **Haze**: -10 to -20 (clarity increased)

### Additional resources

- [Actions Migration Overview](api-actions-migration.md)
- [V2 Execute Actions API Reference](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/executeActions)

## Convenience APIs migration

In V1, several convenience API endpoints wrapped predefined Photoshop action files for common tasks. V2 handles those same tasks through `/v2/execute-actions`, paired with published ActionJSON definitions that callers can review and tailor.

### Migration guides

- [Product Crop](api-convenience-apis.md) - Move from `/pie/psdService/productCrop` to `/v2/execute-actions` using published ActionJSON for auto-crop and padding
- [Depth Blur](api-convenience-apis.md) - `/pie/psdService/depthBlur` migration notes; V2 support is still blocked by Neural Filters
- [Text Layer Operations](api-text-layer-operations.md) - Use ActionJSON or UXP scripts when moving `/pie/psdService/text` workflows onto `/v2/execute-actions`

### Key changes

- V1 convenience endpoints relied on server-side action files. In V2, the same ActionJSON definitions are published so you can inspect, fork, and customize them.
- Every convenience operation now targets one endpoint: `/v2/execute-actions`
- Depth Blur remains the sole convenience API that V2 does not yet provide (Neural Filters dependency)

## Product Crop Migration

Migrate Product Crop calls off the v1 API's `/pie/psdService/productCrop` endpoint and onto the v2 API's `/v2/execute-actions` endpoint.

Product Crop's convenience API removes backgrounds automatically and applies adjustable padding, which suits e-commerce product photography workflows.

**Key benefits of the v2 API:**

- Exact server-side ActionJSON is available
- Every parameter can be customized
- The workflow can be modified and extended
- Behavior lines up with other action-based APIs

### V1 API (Deprecated)

**Endpoint:** `/pie/psdService/productCrop`

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/productCrop \
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
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
    }
  ]
}'
```

### V2 API (Current)

**Endpoint:** `/v2/execute-actions`

### Using inline ActionJSON

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"autoCutout\",\"sampleAllLayers\":false},{\"_obj\":\"make\",\"at\":{\"_enum\":\"channel\",\"_ref\":\"channel\",\"_value\":\"mask\"},\"new\":{\"_class\":\"channel\"},\"using\":{\"_enum\":\"userMaskEnabled\",\"_value\":\"revealSelection\"}},{\"_obj\":\"newPlacedLayer\"},{\"_obj\":\"trim\",\"bottom\":true,\"left\":true,\"right\":true,\"top\":true,\"trimBasedOn\":{\"_enum\":\"trimBasedOn\",\"_value\":\"transparency\"}},{\"_obj\":\"canvasSize\",\"height\":{\"_unit\":\"pixelsUnit\",\"_value\":10},\"horizontal\":{\"_enum\":\"horizontalLocation\",\"_value\":\"center\"},\"relative\":true,\"vertical\":{\"_enum\":\"verticalLocation\",\"_value\":\"center\"},\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":10}},{\"_obj\":\"placedLayerConvertToLayers\"},{\"_obj\":\"delete\",\"_target\":[{\"_enum\":\"channel\",\"_ref\":\"channel\",\"_value\":\"mask\"}]},{\"_obj\":\"trim\",\"bottom\":true,\"left\":true,\"right\":true,\"top\":true,\"trimBasedOn\":{\"_enum\":\"trimBasedOn\",\"_value\":\"transparency\"}}]",
          "contentType": "application/json"
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

### ActionJSON Definition

Product Crop runs the action as 8 separate operations:

```json
[
  {
    "_obj": "autoCutout",
    "sampleAllLayers": false
  },
  {
    "_obj": "make",
    "at": {
      "_enum": "channel",
      "_ref": "channel",
      "_value": "mask"
    },
    "new": {
      "_class": "channel"
    },
    "using": {
      "_enum": "userMaskEnabled",
      "_value": "revealSelection"
    }
  },
  {
    "_obj": "newPlacedLayer"
  },
  {
    "_obj": "trim",
    "bottom": true,
    "left": true,
    "right": true,
    "top": true,
    "trimBasedOn": {
      "_enum": "trimBasedOn",
      "_value": "transparency"
    }
  },
  {
    "_obj": "canvasSize",
    "height": {
      "_unit": "pixelsUnit",
      "_value": 10
    },
    "horizontal": {
      "_enum": "horizontalLocation",
      "_value": "center"
    },
    "relative": true,
    "vertical": {
      "_enum": "verticalLocation",
      "_value": "center"
    },
    "width": {
      "_unit": "pixelsUnit",
      "_value": 10
    }
  },
  {
    "_obj": "placedLayerConvertToLayers"
  },
  {
    "_obj": "delete",
    "_target": [
      {
        "_enum": "channel",
        "_ref": "channel",
        "_value": "mask"
      }
    ]
  },
  {
    "_obj": "trim",
    "bottom": true,
    "left": true,
    "right": true,
    "top": true,
    "trimBasedOn": {
      "_enum": "trimBasedOn",
      "_value": "transparency"
    }
  }
]
```

### What this action does

1. **Auto Cutout** - AI detects the main subject and isolates it automatically
2. **Create Mask** - Builds a layer mask from the generated selection
3. **Convert to Smart Object** - Changes the layer into a smart object for non-destructive editing
4. **First Trim** - Minimizes canvas size by removing transparent pixels around the subject
5. **Add Canvas Padding** - Applies the customizable default of 10 pixels to each side
6. **Convert to Layers** - Turns the smart object back into a regular layer
7. **Delete Mask** - Deletes the layer mask after it is no longer needed
8. **Final Trim** - Performs a final trim so edges are clean and output stays consistent

### Customizing the padding

By default, the action applies 10-pixel padding on every side. Adjust it this way:

### Modify padding values

In the 5th action, edit `canvasSize` and replace the `_value` entries:

**100-pixel padding example:**

```json
{
  "_obj": "canvasSize",
  "height": {
    "_unit": "pixelsUnit",
    "_value": 100
  },
  "horizontal": {
    "_enum": "horizontalLocation",
    "_value": "center"
  },
  "relative": true,
  "vertical": {
    "_enum": "verticalLocation",
    "_value": "center"
  },
  "width": {
    "_unit": "pixelsUnit",
    "_value": 100
  }
}
```

### Change to percentage-based padding

Percentage-based padding is also available by changing `_unit`:

```json
{
  "_obj": "canvasSize",
  "height": {
    "_unit": "percentUnit",
    "_value": 10
  },
  ...
  "width": {
    "_unit": "percentUnit",
    "_value": 10
  }
}
```

The result adds 10% padding along each side.

### Common customizations

### 1. No padding (tight crop)

Either remove the `canvasSize` action or use 0 for its dimensions:

```json
{
  "_obj": "canvasSize",
  "height": {
    "_unit": "pixelsUnit",
    "_value": 0
  },
  ...
}
```

### 2. Asymmetric padding

When each side needs a different amount of padding, use several `canvasSize` operations or move the workflow to absolute positioning.

### 3. Add post-processing

Append extra actions once the product crop steps finish:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[...product crop actions...{\"_obj\":\"brightnessEvent\",\"brightness\":20}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```

### Migration checklist

- [ ] Use `/v2/execute-actions` in place of `/pie/psdService/productCrop`
- [ ] Change the request body shape from `inputs`/`outputs` to `image`/`outputs`
- [ ] Rewrite `href` fields as `url` fields
- [ ] Omit `storage` fields (V2 determines the storage type automatically)
- [ ] Rename the `type` field to `mediaType`
- [ ] Put the ActionJSON in `options.actions[].source.content`
- [ ] Assign `contentType` the value `"application/json"`
- [ ] Verify the workflow with default padding values
- [ ] Adjust padding when your use case requires it

### Migration examples

### Baseline migration

**V1:**

```json
{
  "inputs": [{ "href": "s3://input.jpg", "storage": "external" }],
  "outputs": [{ "href": "s3://output.jpg", "type": "image/jpeg" }]
}
```

**V2:**

```json
{
  "image": { "source": { "url": "s3://input.jpg" } },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{...ActionJSON...}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [{ "destination": { "url": "s3://output.jpg" }, "mediaType": "image/jpeg" }]
}
```

### With custom padding

```json
{
  "image": { "source": { "url": "https://..." } },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{...modify canvasSize _value to 100...}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [{ "destination": { "url": "https://..." }, "mediaType": "image/png" }]
}
```

### Support

For help or problem reports:

- [Adobe Developer Forum](https://community.adobe.com/t5/photoshop-api/ct-p/ct-photoshop-api)
- [GitHub Issues](https://github.com/AdobeDocs/photoshop-api-docs/issues)
