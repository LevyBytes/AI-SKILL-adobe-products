# Text Layer Operations

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use the v2 API instead of the v1 API's `/pie/psdService/text` endpoint.

## Overview

Photoshop files (PSD files) can have text layers changed through the Edit Text convenience API. This migration note moves V1 calls from `/pie/psdService/text` to V2 calls against `/v2/execute-actions`.

**Key benefits of V2:**

- Run text edits through ActionJSON or UXP scripts, giving full control over Photoshop operations
- Use **Actions** for declarative, ordered edits; choose **UXP** for conditional logic, layer iteration, or data-driven changes
- Combine text layer changes with other actions within one request
- Reach low-level text style properties such as font, size, and color

## V1 API (deprecated)

**Endpoint:** `/pie/psdService/text`

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/text \
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
  "options": {
    "layers": [
      {
        "name": "your-text-layer-name",
        "text": {
          "orientation": "horizontal",
          "characterStyles": [
            {
              "size": 100,
              "orientation": "horizontal",
              "fontPostScriptName": "BrushScriptMT",
              "fontName": "Brush Script MT",
              "fontStyleName": "Regular",
              "color": {
                "red": 255,
                "green": 207,
                "blue": 104
              }
            }
          ]
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
}'
```

## V2 API (current)

**Endpoint:** `/v2/execute-actions`

In V2, the `execute-actions` endpoint handles text layer work with either **Actions** (ActionJSON) or **UXP scripts**. Rather than calling a dedicated `/text` endpoint that accepts a layers-style payload, send ActionJSON or a UXP script that carries out the matching Photoshop operations: select the target text layer(s), then write the desired style values onto the text.

### Example: update type styling

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
          "content": "[{\"_obj\":\"select\",\"_target\":[{\"_name\":\"your-text-layer-name\",\"_ref\":\"layer\"}],\"makeVisible\":true},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"size\":{\"_unit\":\"pointsUnit\",\"_value\":100},\"textOverrideFeatureName\":808465458,\"typeStyleOperationType\":3}},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"fontPostScriptName\":\"BrushScriptMT\",\"fontName\":\"Brush Script MT\",\"fontStyleName\":\"Regular\"}},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"color\":{\"_obj\":\"RGBColor\",\"red\":255,\"green\":207,\"blue\":104}}}]",
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
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

## ActionJSON definition

The example action contains four operations:

1. **Select** the target text layer and turn visibility on
2. **Set** type size to 100pt
3. **Set** Brush Script MT Regular as the font
4. **Set** the text color to the peach/gold RGB triplet (255, 207, 104)

```json
[
  {
    "_obj": "select",
    "_target": [
      {
        "_name": "your-text-layer-name",
        "_ref": "layer"
      }
    ],
    "makeVisible": true
  },
  {
    "_obj": "set",
    "_target": [
      {
        "_property": "textStyle",
        "_ref": "property"
      },
      {
        "_enum": "ordinal",
        "_ref": "textLayer",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "textStyle",
      "size": {
        "_unit": "pointsUnit",
        "_value": 100
      },
      "textOverrideFeatureName": 808465458,
      "typeStyleOperationType": 3
    }
  },
  {
    "_obj": "set",
    "_target": [
      {
        "_property": "textStyle",
        "_ref": "property"
      },
      {
        "_enum": "ordinal",
        "_ref": "textLayer",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "textStyle",
      "fontPostScriptName": "BrushScriptMT",
      "fontName": "Brush Script MT",
      "fontStyleName": "Regular"
    }
  },
  {
    "_obj": "set",
    "_target": [
      {
        "_property": "textStyle",
        "_ref": "property"
      },
      {
        "_enum": "ordinal",
        "_ref": "textLayer",
        "_value": "targetEnum"
      }
    ],
    "to": {
      "_obj": "textStyle",
      "color": {
        "_obj": "RGBColor",
        "red": 255,
        "green": 207,
        "blue": 104
      }
    }
  }
]
```

### Action structure explained

| Step | Operation | Description |
| --- | --- | --- |
| 1 | `select` | Locates the layer by name. Set `_name` to your text layer. `makeVisible: true` makes the layer visible before the edit. |
| 2 | `set` (textStyle) | Sets font size through `size` (points). |
| 3 | `set` (textStyle) | Sets the font using `fontPostScriptName`, `fontName`, `fontStyleName`. |
| 4 | `set` (textStyle) | Sets `color` with `RGBColor` values for red, green, and blue. |

**Customizing actions:** Set `_name` to your layer name. Change the `to` object in each `set` step to alter size, font (`fontPostScriptName`, `fontName`, `fontStyleName`), or color (`RGBColor`). Add, remove, or reorder steps as required. For multiple layers, repeat the `select` plus `set` pattern.

## Bounds and visibility-only edits

If a V1 `/pie/psdService/text` payload changes only layer bounds or visibility, without text content or style edits, V2 still needs a non-empty `options` object containing ActionJSON or UXP. V2 rejects `options` when it is empty:

```
options: At least one of actions or uxp must be provided
```

Build ActionJSON that selects each target layer by `_name`, then runs one of these edits:

**Show or hide visibility:**

```json
[
  {
    "_obj": "select",
    "_target": [{ "_ref": "layer", "_name": "My Text Layer" }],
    "makeVisible": false
  },
  {
    "_obj": "hide",
    "_target": [{ "_ref": "layer", "_enum": "ordinal", "_value": "targetEnum" }]
  }
]
```

To reveal a hidden layer, use `"_obj": "show"` rather than `"hide"`.

**Translate or move bounds:**

```json
[
  {
    "_obj": "select",
    "_target": [{ "_ref": "layer", "_name": "My Text Layer" }],
    "makeVisible": false
  },
  {
    "_obj": "move",
    "_target": [{ "_ref": "layer", "_enum": "ordinal", "_value": "targetEnum" }],
    "to": {
      "_obj": "offset",
      "horizontal": { "_unit": "pixelsUnit", "_value": 50 },
      "vertical": { "_unit": "pixelsUnit", "_value": 30 }
    }
  }
]
```

Place this ActionJSON as a stringified value in `options.actions[].source.content`, and set `contentType: "application/json"`.

## Using UXP scripts

V2 also allows **UXP scripts** for text layer operations. Use UXP when the workflow needs:

- **Conditional logic** – Change only layers that meet criteria you choose (e.g., text layers, layers by name)
- **Layer iteration** – Traverse every layer, nested groups included, and apply edits selectively
- **State-based changes** – Flip properties from their present state (e.g., bold → regular, italic → regular)

### Example: conditional text edits across layers

The UXP script selects each layer and toggles bold and italic on every text layer: not bold → set bold, bold → set regular, with the same pattern for italic. Document changes run inside `core.executeAsModal()`.

**Script**

```javascript
const { app, core } = require("photoshop");

// Recursively collect all layers including those in groups
function getAllLayers(layers, result = []) {
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    result.push(layer);
    if (layer.layers && layer.layers.length > 0) {
      getAllLayers(layer.layers, result);
    }
  }
  return result;
}

async function main() {
  if (!app.activeDocument) {
    console.error("No active document");
    return;
  }

  await core.executeAsModal(
    async () => {
      const doc = app.activeDocument;
      const allLayers = getAllLayers(doc.layers);
      let editCount = 0;

      for (const layer of allLayers) {
        try {
          // Select the layer
          doc.activeLayers = [layer];

          if (layer.kind === "text" && layer.textItem) {
            const cs = layer.textItem.characterStyle;

            // Toggle bold: if not bold → bold; if bold → regular
            cs.fauxBold = !cs.fauxBold;

            // Toggle italic: if not italic → italic; if italic → regular
            cs.fauxItalic = !cs.fauxItalic;

            editCount++;
          }
        } catch (err) {
          console.warn(`Could not edit layer "${layer.name}":`, err.message);
        }
      }

      console.log(`Toggled bold/italic on ${editCount} text layer(s)`);
    },
    { commandName: "Conditional Text Layer Edits" },
  );
}

main().catch((err) => {
  console.error("Conditional text edit failed:", err);
  throw err;
});
```

**Request:**

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
    "uxp": {
      "source": {
        "content": "const { app, core } = require(\"photoshop\"); function getAllLayers(layers, result) { result = result || []; for (let i = 0; i < layers.length; i++) { const layer = layers[i]; result.push(layer); if (layer.layers && layer.layers.length > 0) getAllLayers(layer.layers, result); } return result; } async function main() { if (!app.activeDocument) return; await core.executeAsModal(async () => { const doc = app.activeDocument; const allLayers = getAllLayers(doc.layers); for (const layer of allLayers) { try { doc.activeLayers = [layer]; if (layer.kind === \"text\" && layer.textItem) { const cs = layer.textItem.characterStyle; cs.fauxBold = !cs.fauxBold; cs.fauxItalic = !cs.fauxItalic; } } catch (err) { console.warn(\"Could not edit layer:\", layer.name, err.message); } } }, { commandName: \"Conditional Text Layer Edits\" }); } main().catch(err => { console.error(\"Conditional text edit failed:\", err); throw err; });",
        "contentType": "application/javascript"
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

## Migration checklist

**Request wrapper updates:**

- [ ] Use `/v2/execute-actions` in place of `/pie/psdService/text`
- [ ] Map `inputs[0].href` into `image.source.url`
- [ ] Map `outputs[0].href` into `outputs[0].destination.url`
- [ ] Omit `storage` fields when using presigned URLs
- [ ] Rename `outputs[0].type` as `outputs[0].mediaType`
- [ ] Choose **Actions** or **UXP**: put declarative edits in `options.actions`; reserve `options.uxp` for branching edit logic

**ActionJSON text edits:**

- [ ] `text.content` -> `set` on `textLayer` with `textKey`
- [ ] `text.orientation` -> `set` on `textLayer` with `orientation` enum
- [ ] `text.antiAlias` -> `set` on `textLayer` with `antiAlias` enum
- [ ] `characterStyles.size` -> `set textStyle` with `size` (pointsUnit) + `textOverrideFeatureName: 808465458` + `typeStyleOperationType: 3`
- [ ] `characterStyles.fontPostScriptName/fontName/fontStyleName` -> `set textStyle`
- [ ] `characterStyles.color` -> `set textStyle` with `color._obj: "RGBColor"`
- [ ] `characterStyles.leading` -> `set textStyle` with `autoLeading: false` + `leading` (pointsUnit)
- [ ] `characterStyles.tracking` -> `set textStyle` with `tracking` (integer, thousandths of em)
- [ ] `characterStyles.syntheticBold/syntheticItalic` -> `set textStyle`
- [ ] `characterStyles.fontCaps` -> `set textStyle` with `fontCaps` enum
- [ ] `characterStyles.baseline` -> `set textStyle` with `baselineDirection` enum
- [ ] `characterStyles.strikethrough` -> `set textStyle` with `strikeThrough` enum
- [ ] `characterStyles.underline` -> `set textStyle` with `underline` enum
- [ ] `characterStyles.verticalScale/horizontalScale` -> `set textStyle` (percentage integers)
- [ ] `characterStyles.ligature` -> `set textStyle`
- [ ] `characterStyles.autoKern` -> `set textStyle` with `autoKern` enum
- [ ] `characterStyles.stylisticAlternates` -> use UXP because no standardized ActionJSON counterpart exists
- [ ] `paragraphStyles.alignment` -> `set paragraphStyle` with `align` enum

**Fonts:**

- [ ] `options.fonts[].href` -> `options.fontOptions.additionalFonts[].source.url`
- [ ] `options.manageMissingFonts: "fail"/"useDefault"` -> `options.fontOptions.missingFontStrategy: "fail"/"use_default"`
- [ ] `options.globalFont` -> `options.fontOptions.defaultFontPostScriptName`

**Actions and UXP selection:**

| Scenario | Preferred path |
| --- | --- |
| Known-layer edits such as font, size, or color | **Actions** |
| Conditional edits such as text-layer checks or names containing "title" | **UXP** |
| Visit every layer and run logic | **UXP** |
| Toggle-driven or state-dependent updates | **UXP** |

## Migration examples

### Basic migration

Each sample changes the text color on one layer.

**V1:**

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
        "name": "your-text-layer-name",
        "text": {
          "characterStyles": [{ "color": { "red": 255, "green": 128, "blue": 64 } }]
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

**V2:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"select\",\"_target\":[{\"_name\":\"your-text-layer-name\",\"_ref\":\"layer\"}],\"makeVisible\":true},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"color\":{\"_obj\":\"RGBColor\",\"red\":255,\"green\":128,\"blue\":64}}}]",
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
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

### Multiple layers

This pair of requests updates two text layers in both the V1 and V2 API shapes.

**V1:**

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
        "name": "first-layer-name",
        "text": {
          "characterStyles": [{ "color": { "red": 255, "green": 0, "blue": 0 } }]
        }
      },
      {
        "name": "second-layer-name",
        "text": {
          "characterStyles": [
            {
              "size": 48,
              "color": { "red": 0, "green": 128, "blue": 255 }
            }
          ]
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

**V2:**

```json
{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"select\",\"_target\":[{\"_name\":\"first-layer-name\",\"_ref\":\"layer\"}],\"makeVisible\":true},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"color\":{\"_obj\":\"RGBColor\",\"red\":255,\"green\":0,\"blue\":0}}},{\"_obj\":\"select\",\"_target\":[{\"_name\":\"second-layer-name\",\"_ref\":\"layer\"}],\"makeVisible\":true},{\"_obj\":\"set\",\"_target\":[{\"_property\":\"textStyle\",\"_ref\":\"property\"},{\"_enum\":\"ordinal\",\"_ref\":\"textLayer\",\"_value\":\"targetEnum\"}],\"to\":{\"_obj\":\"textStyle\",\"size\":{\"_unit\":\"pointsUnit\",\"_value\":48},\"color\":{\"_obj\":\"RGBColor\",\"red\":0,\"green\":128,\"blue\":255}}}]",
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
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

The first layer receives red text, while the second receives 48pt blue text.

## Complete V1 field reference

The V1 `/psdService/text` endpoint included fields beyond the simple font, size, and color cases shown earlier. Use this field map to locate the V2 counterpart for each V1 `characterStyles` or `paragraphStyles` property.

### text properties

| V1 `text` Field | V2 ActionJSON Equivalent | Notes |
| --- | --- | --- |
| `content` | `set` on `textLayer` with `textKey: "new string"` | Target `_ref: "textLayer"`, `_property: "textLayer"`, `to._obj: "textLayer"`, `to.textKey: "..."` |
| `orientation` | `set` on `textLayer` with `orientation: {_enum: "orientation", _value: "horizontal"}` | Values: `"horizontal"`, `"vertical"` |
| `antiAlias` | `set` on `textLayer` with `antiAlias: {_enum: "antiAliasType", _value: "..."}` | Values: `"antiAliasNone"`, `"antiAliasCrisp"`, `"antiAliasStrong"`, `"antiAliasSmooth"`, `"antiAliasLCD"` |

### characterStyles properties

| V1 `characterStyles` Field | V2 ActionJSON `set textStyle` Property | Notes |
| --- | --- | --- |
| `size` | `size: {_unit: "pointsUnit", _value: N}` | Also include `textOverrideFeatureName: 808465458` and `typeStyleOperationType: 3` |
| `fontPostScriptName` | `fontPostScriptName: "..."` | Apply with `fontName` and `fontStyleName` |
| `color` | `color: {_obj: "RGBColor", red: N, green: N, blue: N}` |  |
| `leading` | `autoLeading: false, leading: {_unit: "pointsUnit", _value: N}` | Use `autoLeading: false` when disabling automatic leading |
| `tracking` | `tracking: N` | Integer measured in thousandths of an em (for example, `100` = 10% of em) |
| `syntheticBold` | `syntheticBold: true` | Simulated bold; use a real bold face if possible |
| `syntheticItalic` | `syntheticItalic: true` | Simulated italic; use a real italic face if possible |
| `fontCaps` | `fontCaps: {_enum: "fontCaps", _value: "..."}` | Values: `"allCaps"`, `"smallCaps"`, `"normal"` |
| `baseline` | `baselineDirection: {_enum: "baselineDirection", _value: "..."}` | Values: `"subScript"`, `"superScript"`, `"normal"` |
| `strikethrough` | `strikeThrough: {_enum: "strikeThrough", _value: "..."}` | Values: `"classicStrikeThrough"`, `"xHeightStrikeThrough"`, `"noStrikeThrough"` |
| `underline` | `underline: {_enum: "underline", _value: "..."}` | Values: `"underlineOnLeft"`, `"noUnderline"` |
| `verticalScale` | `verticalScale: N` | Percentage integer (for example, `120` = 120%) |
| `horizontalScale` | `horizontalScale: N` | Percentage integer (for example, `80` = 80%) |
| `ligature` | `ligature: true` | Standard ligatures such as fi and fl |
| `autoKern` | `autoKern: {_enum: "autoKern", _value: "..."}` | Values: `"metricsKern"`, `"opticalKern"`, `"manualKern"` |
| `stylisticAlternates` | UXP recommended | No standardized ActionJSON equivalent; use UXP for dependable coverage |

### paragraphStyles properties

| V1 `paragraphStyles` Field | V2 ActionJSON Equivalent | Notes |
| --- | --- | --- |
| `alignment` | `set` on `paragraphStyle` with `align: {_enum: "alignmentType", _value: "..."}` | Target `_ref: "property"`, `_property: "paragraphStyle"`. Values: `"alignLeft"`, `"alignCenter"`, `"alignRight"`, `"justifyAll"`, `"justifyLeft"`, `"justifyCenter"`, `"justifyRight"` |

**Example: change text content and alignment**

```json
[
  {
    "_obj": "select",
    "_target": [{ "_name": "your-text-layer-name", "_ref": "layer" }],
    "makeVisible": true
  },
  {
    "_obj": "set",
    "_target": [
      { "_property": "textLayer", "_ref": "property" },
      { "_enum": "ordinal", "_ref": "textLayer", "_value": "targetEnum" }
    ],
    "to": {
      "_obj": "textLayer",
      "textKey": "Updated text content"
    }
  },
  {
    "_obj": "set",
    "_target": [
      { "_property": "paragraphStyle", "_ref": "property" },
      { "_enum": "ordinal", "_ref": "textLayer", "_value": "targetEnum" }
    ],
    "to": {
      "_obj": "paragraphStyle",
      "align": { "_enum": "alignmentType", "_value": "alignCenter" }
    }
  }
]
```

## Font management

V1 placed custom font inputs and missing-font behavior on the request through `options.fonts`, `options.manageMissingFonts`, and `options.globalFont`. For V2, the `/v2/execute-actions` payload carries those settings under `options.fontOptions`.

### V1 font options

```json
{
  "options": {
    "fonts": [{ "href": "<SIGNED_GET_URL_FOR_FONT>", "storage": "external" }],
    "manageMissingFonts": "useDefault",
    "globalFont": "ArialMT"
  }
}
```

### V2 font options

```json
{
  "options": {
    "fontOptions": {
      "additionalFonts": [{ "source": { "url": "<SIGNED_GET_URL_FOR_FONT>" } }],
      "missingFontStrategy": "use_default",
      "defaultFontPostScriptName": "ArialMT"
    }
  }
}
```

### Font option field mapping

| V1 Field | V2 Field | Notes |
| --- | --- | --- |
| `options.fonts[].href` | `options.fontOptions.additionalFonts[].source.url` |  |
| `options.fonts[].storage` | _(removed)_ | Presigned URLs do not need this field |
| `options.manageMissingFonts: "fail"` | `options.fontOptions.missingFontStrategy: "fail"` | The job fails when a required font cannot be found |
| `options.manageMissingFonts: "useDefault"` | `options.fontOptions.missingFontStrategy: "use_default"` | The default font is substituted |
| `options.globalFont` | `options.fontOptions.defaultFontPostScriptName` | Fallback font PostScript name |

## Additional resources

- [Edit Text Guide](api-guides-2.md) (V1 reference)
- [Actions Migration Overview](api-actions-migration.md)
- [V2 Execute Actions API Reference](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/executeActions)
