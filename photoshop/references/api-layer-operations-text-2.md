# Layer Operations Text (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Migration checklist

For V1-to-V2 text layer migration, work through these changes:

- [ ] Replace `type: "textLayer"` with `type: "text_layer"`
- [ ] For character style ranges in V2, use `apply.from`/`apply.to`; both are inclusive 0-based indices, and style properties move into `characterStyle`
- [ ] Replace top-level `fontName` with `font.postScriptName` inside `characterStyle.font` for V2
- [ ] Put paragraph style properties inside a `paragraphStyle` object
- [ ] Rename font color fields: `fontColor.cmyk.yellowColor` → `fontColor.cmyk.yellow`; `fontColor.lab.luminance` → `fontColor.lab.l`
- [ ] For font color rgb/cmyk/gray/lab-l components, migrate V1's 0–65535 acceptance to the V2 0–32768 clamp, where any value > 32768 becomes 32768
- [ ] For font color lab `a`/`b`, convert from V1's 0–65535 acceptance to V2's -16384–16384 range, where any value > 16384 becomes 16384
- [ ] Update font management fields (`manageMissingFonts` → `missingFontStrategy`, `globalFont` → `defaultFontPostScriptName`)
- [ ] Migrate custom font inputs from `options.fonts` (href, storage) to `fontOptions.additionalFonts` (source.url)
- [ ] Update inputs and outputs: V1 `inputs[].href` becomes V2 `image.source.url`; V1 `outputs[].href` becomes V2 `outputs[].destination.url`; use `mediaType` instead of `type`
- [ ] Translate layer placement from V1 `add.insertTop` (or insertBottom, etc.) into V2 `operation: { type: "add", placement: { type: "top" } }` (or bottom, above, below, into)
- [ ] Change V1 layer `bounds` (left, top, width, height) into V2 `text.frame` with `type: "area"` and `bounds: { top, left, right, bottom }`; compute `right = left + width` and `bottom = top + height`

## Common migration issues

These V1/V2 differences are common sources of migration bugs:

- **Character and paragraph style range (`from`/`to`):** V1 mistakenly interpreted `to` as a **length**. V2 treats both `apply.from` and `apply.to` as **inclusive** 0-based character indices. During migration, make `apply.to` the **last character index** that should receive the style, not the number of characters. Paragraph style ranges follow the same rule.
- **Layer type:** `"textLayer"` in V1 becomes `"text_layer"` in V2.
- **Font name:** Move V1's top-level `fontName` to V2 `characterStyle.font.postScriptName`.
- **Bounds:** V1 stores `left`, `top`, `width`, `height` in layer-level `bounds`. V2 stores an area frame in `text.frame` with `bounds: { top, left, right, bottom }`, where `right = left + width` and `bottom = top + height`.
- **Default when no frame/bounds given:** V1 defaulted to an area frame at (0, 0, 4, 4). V2 defaults to a **point** frame at the **center of the canvas**. Provide `text.frame` to make placement predictable.
- **Font options:** Replace V1 `options.fonts` (href, storage), `options.globalFont`, and `options.manageMissingFonts` with V2 `fontOptions.additionalFonts` (source.url), `fontOptions.defaultFontPostScriptName`, and `fontOptions.missingFontStrategy` (e.g. `"use_default"`).

## Feature availability

### Available in V2 now

- ✅ Create text layers
- ✅ Update text content
- ✅ Character style fields (font, size, color: rgb, cmyk, lab, gray)
- ✅ Paragraph style fields (alignment)
- ✅ Multiple styles in one text value (from/to ranges)
- ✅ Custom fonts
- ✅ Text positioning (bounds)
- ✅ Expanded character properties (tracking, leading, etc.)

### V1 capabilities still absent from V2

- ⏳ `fill_to_canvas` property
- ⏳ Some advanced text effects

## Complete migration example

**V1 documentOperations payload:**

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
        "type": "textLayer",
        "name": "Headline",
        "text": {
          "content": "Welcome",
          "characterStyles": [
            {
              "fontSize": 72,
              "fontName": "Arial-BoldMT",
              "fontColor": {
                "rgb": {
                  "red": 0,
                  "green": 0,
                  "blue": 0
                }
              }
            }
          ],
          "paragraphStyles": [
            {
              "alignment": "center"
            }
          ]
        },
        "bounds": {
          "left": 0,
          "top": 100,
          "width": 1920,
          "height": 150
        }
      }
    ],
    "manageMissingFonts": "useDefault"
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

**V2 create-composite payload:**

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
        "type": "text_layer",
        "name": "Headline",
        "text": {
          "content": "Welcome",
          "frame": {
            "type": "area",
            "bounds": {
              "top": 100,
              "left": 0,
              "right": 1920,
              "bottom": 250
            }
          },
          "characterStyles": [
            {
              "characterStyle": {
                "fontSize": 72,
                "font": {
                  "postScriptName": "Arial-BoldMT"
                },
                "fontColor": {
                  "rgb": {
                    "red": 0,
                    "green": 0,
                    "blue": 0
                  }
                }
              }
            }
          ],
          "paragraphStyles": [
            {
              "paragraphStyle": {
                "alignment": "center"
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
  "fontOptions": {
    "missingFontStrategy": "use_default"
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

## Next steps

- For general concepts, review [Layer Operations Overview](api-v1-to-v2-4.md)
- For creating new documents with text, check [Document Creation](api-document-creation-migration.md)
- For text layer transforms and effects, see [Advanced Operations](api-layer-operations-advanced.md)
