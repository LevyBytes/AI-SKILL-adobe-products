# Layer Operations Adjustments

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration guide to move adjustment layer workflows from the V1 `/documentCreate` and `/documentOperations` endpoints to the V2 `/create-composite` endpoint.

## Overview

**V1 Endpoints:**

- `/pie/psdService/documentCreate` - Document creation with adjustment layers
- `/pie/psdService/documentOperations` - Adjustment layer additions and edits

**V2 target:** `/v2/create-composite`, using `edits.layers`

### Adjustment Types Supported

For **V2**, put a snake_case `type` parameter in the `adjustments` object together with the adjustment payload. **V1** did not include a `type` field; instead, the key name, such as `brightnessContrast`, served as the implicit type indicator.

In **V2**, `adjustments.type` is mandatory; **V1** had no matching field. A V2 request without it is rejected. For the required shape, see [the V2 adjustment type requirement](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-adjustments.md#3-adjustments-structure--required-type-in-v2).

**V1 key name -> V2 `adjustments.type` mapping:**

| V1 key name (implicit type) | V2 `adjustments.type` | Notes |
| --- | --- | --- |
| `brightnessContrast` | `brightness_contrast` | Breaking: renamed to snake_case |
| `exposure` | `exposure` | Unchanged |
| `hueSaturation` | `hue_saturation` | Breaking: renamed to snake_case |
| `colorBalance` | `color_balance` | Breaking: renamed to snake_case |
| _(not in V1)_ | `curves` | New in V2 |
| _(not in V1)_ | `gradient_map_custom_stops` | New in V2 |
| _(not in V1)_ | `levels` | New in V2 |

**V1-to-V2 payload key and `type` cross-reference:**

| Adjustment | V2 `type` value | Payload key |
| --- | --- | --- |
| Brightness/Contrast | `brightness_contrast` | `brightnessContrast` |
| Exposure | `exposure` | `exposure` |
| Hue/Saturation | `hue_saturation` | `hueSaturation` |
| Color Balance | `color_balance` | `colorBalance` |

## Adding Adjustment Layers

### V1 approach: documentOperations

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentOperations \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [{
    "href": "<SIGNED_GET_URL>",
    "storage": "external"
  }],
  "options": {
    "layers": [
      {
        "type": "adjustmentLayer",
        "name": "Brightness",
        "add": {
          "insertTop": true
        },
        "adjustments": {
          "brightnessContrast": {
            "brightness": 25,
            "contrast": 10
          }
        }
      }
    ]
  },
  "outputs": [{
    "href": "<SIGNED_POST_URL>",
    "storage": "external",
    "type": "image/vnd.adobe.photoshop"
  }]
}'
```

### V2 approach

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
    "layers": [
      {
        "type": "adjustment_layer",
        "name": "Brightness",
        "adjustments": {
          "type": "brightness_contrast",
          "brightnessContrast": {
            "brightness": 25,
            "contrast": 10
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
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

## Key Migration Changes

### 1. Layer Type Name

**V1:** `"type": "adjustmentLayer"`

**V2:** `"type": "adjustment_layer"`

### 2. Add Operation Structure

**V1:** Standalone `add` block

```json
{
  "type": "adjustmentLayer",
  "add": {
    "insertTop": true
  },
  "adjustments": {...}
}
```

**V2:** Single `operation` block

```json
{
  "type": "adjustment_layer",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "adjustments": {...}
}
```

### 3. Adjustments Structure - Required `type` in V2

**V1:** Inside `adjustments`, there is no `type`; only the adjustment payload appears, for example `brightnessContrast`.

**V2:** The `adjustments` object **must** carry a snake_case `type` parameter naming the adjustment, along with the matching payload.

**V1 (no type):**

```json
{
  "adjustments": {
    "brightnessContrast": {
      "brightness": 25,
      "contrast": 10
    }
  }
}
```

**V2 (type required):**

```json
{
  "adjustments": {
    "type": "brightness_contrast",
    "brightnessContrast": {
      "brightness": 25,
      "contrast": 10
    }
  }
}
```

Valid V2 `type` values are `brightness_contrast`, `exposure`, `hue_saturation`, and `color_balance`.

## Brightness/Contrast

For **V2**, include `type` inside `adjustments`:

```json
{
  "type": "adjustment_layer",
  "name": "Brightness/Contrast",
  "adjustments": {
    "type": "brightness_contrast",
    "brightnessContrast": {
      "brightness": 25,
      "contrast": -10
    }
  }
}
```

**Parameters:**

- `brightness`: -150 to 150 (default: 0)
- `contrast`: -150 to 150 (default: 0)

## Exposure

For **V2**, include `type` inside `adjustments`. V2 names the exposure amount parameter **`exposureValue`**; in V1, the corresponding field was `exposure`.

```json
{
  "type": "adjustment_layer",
  "name": "Exposure",
  "adjustments": {
    "type": "exposure",
    "exposure": {
      "exposureValue": 0.5,
      "offset": 0.01,
      "gammaCorrection": 1.2
    }
  }
}
```

**Parameters:**

- **V2:** `exposureValue`: -20 to 20 (default: 0); **V1** used the property name `exposure`.
- `offset`: -0.5 to 0.5 (default: 0)
- `gammaCorrection`: 0.01 to 9.99 (default: 1)

## Hue/Saturation

V1 and V2 share the top-level shape. V2 also lets Hue/Saturation target **local range** entries for individual color channels, in addition to the master channel. For **V2**, put `type` inside `adjustments`.

```json
{
  "type": "adjustment_layer",
  "name": "Hue/Saturation",
  "adjustments": {
    "type": "hue_saturation",
    "hueSaturation": {
      "colorize": false,
      "hueSaturationAdjustments": [
        {
          "hue": 15,
          "saturation": 20,
          "lightness": -5
        },
        {
          "hue": 5,
          "saturation": 15,
          "lightness": 0,
          "localRange": {
            "channelId": "REDS",
            "beginRamp": 20,
            "beginSustain": 10,
            "endSustain": 100,
            "endRamp": 60
          }
        }
      ]
    }
  }
}
```

**Parameters:**

- **`colorize`** (boolean, required):
  - **`false`**: Standard Hue/Saturation behavior. Each adjustment changes hue, saturation, and lightness. Use an entry without `localRange` for overall master edits, or add **`localRange`** for edits limited to REDS, YELLOWS, GREENS, CYANS, BLUES, or MAGENTAS. With `colorize` set to false, `localRange` is allowed only for non-master channels.
  - **`true`**: Colorize mode. The image is converted to a single hue tint, such as sepia, duotone, or a colored overlay. When `colorize` is true, do not use `localRange`. This is useful for toning or stylized color effects.
- **`hueSaturationAdjustments`**: Array containing adjustment entries. Every entry includes `hue`, `saturation`, and `lightness`; add **`localRange`** only for a specific color range, and leave it out for master (entire image).
  - **`hue`**: -180 to 180 (or 0 to 360 when colorize is true)
  - **`saturation`**: -100 to 100 (or 0 to 100 when colorize is true)
  - **`lightness`**: -100 to 100 (or 0 to 100 when colorize is true)
  - **`localRange`** (optional): The master channel does not use this field, and it is invalid when `colorize` is true. Use it only for non-master channels while `colorize` is false. It sets the color interval plus ramp/sustain boundaries (0-360 degrees).
    - **`channelId`** (required): `"REDS"`, `"YELLOWS"`, `"GREENS"`, `"CYANS"`, `"BLUES"`, `"MAGENTAS"`.
    - **`beginRamp`**: Feather begins here (0-360).
    - **`beginSustain`**: Full effect begins here (0-360).
    - **`endSustain`**: Full effect ends here (0-360).
    - **`endRamp`**: Feather ends here (0-360).

### Local range (V2)

In Hue/Saturation, **local range** limits the adjustment to a chosen color range instead of affecting the full image. **`localRange` does not apply to the master channel and cannot be used when `colorize` is true.** V2 accepts multiple items in `hueSaturationAdjustments`. Leave out `localRange` for the master adjustment across the entire image; add **`localRange`** with **`channelId`** for one color range when `colorize` is false. Define the hue-range boundaries with **`beginRamp`**, **`beginSustain`**, **`endSustain`**, and **`endRamp`** (0-360 degrees).

| `channelId` value | Color range affected |
| --- | --- |
| (omit `localRange`) | Entire image (master) |
| `REDS` | Red color range |
| `YELLOWS` | Yellow color range |
| `GREENS` | Green color range |
| `CYANS` | Cyan color range |
| `BLUES` | Blue color range |
| `MAGENTAS` | Magenta color range |

Use local range when only skin tones (REDS/YELLOWS), skies (BLUES/CYANS), foliage (GREENS), etc. should change. **V1** supported only master adjustments; **V2** supports all listed channels, with optional ramp/sustain tuning.

## Color Balance

For **V2**, include `type` inside `adjustments`:

```json
{
  "type": "adjustment_layer",
  "name": "Color Balance",
  "adjustments": {
    "type": "color_balance",
    "colorBalance": {
      "preserveLuminosity": true,
      "shadowLevels": [-10, 5, 15],
      "midtoneLevels": [0, 0, 10],
      "hightoneLevels": [5, -5, 0]
    }
  }
}
```

**Parameters:**

- `preserveLuminosity`: true/false
- `shadowLevels`: Array of 3 integers [-100 to 100]
- `midtoneLevels`: Array of 3 integers [-100 to 100]
- `hightoneLevels`: Array of 3 integers [-100 to 100]

The three array positions correspond to: [Cyan-Red, Magenta-Green, Yellow-Blue]

## Editing Existing Adjustment Layers

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Existing Adjustment",
        "edit": {},
        "adjustments": {
          "brightnessContrast": {
            "brightness": 50
          }
        }
      }
    ]
  }
}
```

### V2 approach

```json
{
  "edits": {
    "layers": [
      {
        "name": "Existing Adjustment",
        "adjustments": {
          "type": "brightness_contrast",
          "brightnessContrast": {
            "brightness": 50
          }
        },
        "operation": {
          "type": "edit"
        }
      }
    ]
  }
}
```

V2 edits to existing layers need an explicit operation type. Include `operation: { "type": "edit" }`, identify the target layer by name or ID, and provide the new adjustment values. If the `operation` field is missing, the server rejects the request.

## Placement Options

### V1 Placement

```json
{
  "add": {
    "insertTop": true              // or
    "insertBottom": true            // or
    "insertAbove": {"name": "..."}  // or
    "insertBelow": {"id": 123}      // or
    "insertInto": {"name": "Group"}
  }
}
```

### V2 Placement

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

For relative placement, combine `"above"`, `"below"`, or `"into"` with `referenceLayer`: `{"name": "..."}` or `{"id": 123}`.

For detailed placement migration patterns, see [Image Layer Operations](api-v1-to-v2-4.md).

## Creating Documents with Adjustment Layers

### V1 approach: documentCreate

```json
{
  "options": {
    "document": {
      "width": 1000,
      "height": 1000,
      "resolution": 72,
      "fill": "white",
      "mode": "rgb"
    },
    "layers": [
      {
        "type": "adjustmentLayer",
        "name": "Exposure",
        "adjustments": {
          "exposure": {
            "exposure": 0.5
          }
        }
      }
    ]
  }
}
```

### V2 approach

```json
{
  "document": {
    "width": 1000,
    "height": 1000,
    "resolution": { "unit": "density_unit", "value": 72 },
    "fill": {
      "solidColor": {
        "red": 255,
        "green": 255,
        "blue": 255
      }
    },
    "mode": "rgb"
  },
  "edits": {
    "layers": [
      {
        "type": "adjustment_layer",
        "name": "Exposure",
        "adjustments": {
          "type": "exposure",
          "exposure": {
            "exposureValue": 0.5
          }
        },
        "operation": {
          "type": "add"
        }
      }
    ]
  }
}
```

## Multiple Adjustment Layers

A single request can include multiple adjustment layers in both V1 and V2:

**V2 Example:**

```json
{
  "edits": {
    "layers": [
      {
        "type": "adjustment_layer",
        "name": "Brightness/Contrast",
        "adjustments": {
          "type": "brightness_contrast",
          "brightnessContrast": {
            "brightness": 20,
            "contrast": 15
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      },
      {
        "type": "adjustment_layer",
        "name": "Hue/Saturation",
        "adjustments": {
          "type": "hue_saturation",
          "hueSaturation": {
            "colorize": false,
            "channels": [
              {
                "channel": "master",
                "saturation": 25
              }
            ]
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      }
    ]
  }
}
```

## Layer Properties

Standard layer properties also apply to adjustment layers:

```json
{
  "type": "adjustment_layer",
  "name": "My Adjustment",
  "isVisible": true,
  "protection": ["none"],
  "opacity": 80,
  "blendMode": "normal",
  "adjustments": {...}
}
```

Do not use **transformMode** with adjustment layers. Reserve it for layer types that support transforms, such as image layers.

For blend modes and other properties, see [Advanced Layer Operations](api-layer-operations-advanced.md).

## Migration Checklist

During migration of adjustment layer operations from V1 to V2, verify these changes:

- [ ] Use `type: "adjustment_layer"` instead of `type: "adjustmentLayer"`
- [ ] Replace the `add` block with `operation.type: "add"`
- [ ] Translate placement directives, such as `insertTop` to `placement.type: "top"`
- [ ] Drop explicit `edit: {}` blocks for modifications
- [ ] If visibility is used, map `visible` to `isVisible`
- [ ] For locks, replace `locked` with the `protection` array (see [Advanced Layer Operations](api-layer-operations-advanced.md))
- [ ] Change storage syntax from `href`/`storage` to `url`/`storageType`
- [ ] Add the required `type` within `adjustments`, such as `"type": "brightness_contrast"`; see [the V2 adjustment type structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-adjustments.md#3-adjustments-structure--required-type-in-v2)
- [ ] In the V2 Exposure payload, use `exposureValue` where V1 used `exposure`

## Common Migration Issues

### Issue: Forgetting operation block

**Problem:** New layers in V2 need an explicit operation

**Solution:** Include an operation block whenever you add a layer

```json
{
  "type": "adjustment_layer",
  "adjustments": {
    "type": "brightness_contrast",
    "brightnessContrast": { "brightness": 30, "contrast": 20 }
  },
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```

### Issue: Adjustment values out of range

**Problem:** V1 and V2 enforce the same validation ranges

**Solution:** Keep values inside the allowed limits

- Brightness/Contrast: -150 to 150
- Exposure (V2: `exposureValue`): -20 to 20
- Hue: -180 to 180
- Saturation/Lightness: -100 to 100

## Complete Migration Example

**V1 documentOperations:**

```json
{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "type": "adjustmentLayer",
        "name": "Brightness/Contrast",
        "add": {
          "insertTop": true
        },
        "adjustments": {
          "brightnessContrast": {
            "brightness": 25,
            "contrast": 10
          }
        }
      },
      {
        "type": "adjustmentLayer",
        "name": "Color Balance",
        "add": {
          "insertTop": true
        },
        "adjustments": {
          "colorBalance": {
            "preserveLuminosity": true,
            "shadowLevels": [10, 0, -10],
            "midtoneLevels": [0, 5, 0],
            "hightoneLevels": [-5, 0, 5]
          }
        },
        "blendOptions": {
          "opacity": 80
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}
```

**V2 create-composite:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "edits": {
    "layers": [
      {
        "type": "adjustment_layer",
        "name": "Brightness/Contrast",
        "adjustments": {
          "type": "brightness_contrast",
          "brightnessContrast": {
            "brightness": 25,
            "contrast": 10
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        }
      },
      {
        "type": "adjustment_layer",
        "name": "Color Balance",
        "adjustments": {
          "type": "color_balance",
          "colorBalance": {
            "preserveLuminosity": true,
            "shadowLevels": [10, 0, -10],
            "midtoneLevels": [0, 5, 0],
            "hightoneLevels": [-5, 0, 5]
          }
        },
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
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
}
```

## Feature Availability

### Currently Available in V2

- Adjustments for Brightness/Contrast
- Adjustments for Exposure
- Hue/Saturation adjustments, with **local range** support for channel-specific edits: reds, yellows, greens, cyans, blues, magentas
- Adjustments for Color Balance
- Adding adjustment layers
- Editing adjustment layers that already exist
- Visibility and opacity for layers

### Not Applicable to Adjustment Layers

- **transformMode** - Use this only with layer types that support transforms, such as image layers. Adjustment layers do not support transformMode.

### Coming Soon

- More adjustment layer types

## Next steps

- Open [Layer Operations Overview](api-v1-to-v2-4.md) for general concepts
- Use [Image Layers](api-v1-to-v2-4.md) when combining with image layers
- Consult [Advanced Operations](api-layer-operations-advanced.md) for masks and blend modes
