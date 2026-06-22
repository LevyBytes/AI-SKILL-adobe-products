# Layer Operations Text (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide when moving text layer operations from the V1 `/documentCreate` and `/documentOperations` endpoints to the unified V2 `/create-composite` endpoint.

## Overview

**V1 Endpoints:**

- `/pie/psdService/documentCreate` - creates documents that include text layers
- `/pie/psdService/documentOperations` - adds or edits text layers

**V2 Endpoint:** `/v2/create-composite` with text layer operations supplied under `edits.layers`

## Creating text layers

### V1 approach: documentCreate

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentCreate \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
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
        "type": "textLayer",
        "name": "My Title",
        "text": {
          "content": "Hello World",
          "characterStyles": [
            {
              "fontSize": 48,
              "fontName": "Arial-BoldMT",
              "fontColor": {
                "rgb": {
                  "red": 255,
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
  "document": {
    "width": 1000,
    "height": 1000,
    "resolution": {"unit": "density_unit", "value": 72},
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
        "type": "text_layer",
        "name": "My Title",
        "text": {
          "content": "Hello World",
          "antiAliasing": "smooth",
          "textOrientation": "horizontal",
          "characterStyles": [
            {
              "characterStyle": {
                "fontSize": 48,
                "font": {
                  "postScriptName": "ArialMT"
                },
                "fontColor": {
                  "rgb": {
                    "red": 255,
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

## Key migration changes

### 1. Layer type name

**V1:** `"type": "textLayer"`

**V2:** `"type": "text_layer"`

> **Every object in `edits.layers[]` must include `type`.** V1 could omit `type` for simple visibility edits or changes that only touched properties on existing layers; V2 does not permit that omission. Error when omitted: `Missing required field 'type' for edit operation at path 'edits.layers[N]'`.

### 2. Character styles structure

**Breaking change: V1 and V2 interpret character and paragraph style ranges differently.** V1 treated the `to` field on each range entry as a **length**, so `from: 0, to: 5` selected 5 characters beginning at index 0, meaning indices 0-4. In V2, `apply.to` is a 0-based **inclusive end index**; therefore `apply: {from: 0, to: 4}` selects characters 0, 1, 2, 3, and 4, the first 5 characters. During migration, set V2 `apply.to` to the **last character index** covered by the style, not to the character count.

**Off-by-one example** â€” applying a style to "Hello" within "Hello World":

```json
// V1: to=5 means length 5 â†’ characters 0,1,2,3,4
{"from": 0, "to": 5, "fontName": "Arial-BoldMT"}

// V2: to=4 is the inclusive end index â†’ characters 0,1,2,3,4 (same result)
{"apply": {"from": 0, "to": 4}, "characterStyle": {"font": {"postScriptName": "Arial-BoldMT"}}}
```

**characterStyles with no range (implicit full-string in V1):** When a V1 `characterStyle` entry has **neither** `from` nor `to`, it implicitly affects the full text content. In V2, `apply` may be omitted for that same full-content behavior. If desired, you can also write `apply: {from: 0, to: len(text.content) - 1}` explicitly.

**V1:** The `characterStyles` array stores properties directly. Each item carries its range through `from` and `to`, with no nested `apply` object:

```json
{
  "characterStyles": [
    {
      "fontName": "Arial-BoldMT",
      "fontSize": 60,
      "from": 0,
      "to": 3,
      "fontColor": {
        "rgb": {
          "red": 255,
          "green": 0,
          "blue": 0
        }
      }
    }
  ]
}
```

**V2:**

- Nest style attributes inside `characterStyle`.
- Set the 0-based, **inclusive** character range with `apply.from` and `apply.to`.
- Replace `fontName` with `font.postScriptName`.

```json
{
  "characterStyles": [
    {
      "apply": {
        "from": 0,
        "to": 11
      },
      "characterStyle": {
        "font": {
          "postScriptName": "Arial-BoldMT"
        },
        "fontSize": 48,
        "syntheticBold": false,
        "syntheticItalic": false,
        "underline": false,
        "capsOption": "all_caps",
        "fontColor": {
          "rgb": {
            "red": 255,
            "green": 0,
            "blue": 0
          }
        }
      }
    }
  ]
}
```

In V2, the range endpoints `apply.from` and `apply.to` are both **inclusive** and 0-based, so styling covers the characters from `from` through `to`. For instance, `"from": 0, "to": 4` selects indices 0, 1, 2, 3, and 4, which are the first five characters.

### 3. Paragraph styles structure

**V1:** Each array item is range-based and includes `from`, `to`, plus direct properties such as `alignment`.

```json
{
  "paragraphStyles": [
    {
      "from": 0,
      "to": 20,
      "alignment": "center"
    }
  ]
}
```

**Paragraph range migration note:** V1 incorrectly read `to` as a **length**. Because V2 uses inclusive 0-based values for both `apply.from` and `apply.to`, migration should put the final character index in `apply.to` instead of the length.

**V2:** A paragraph style range item stores its settings inside `paragraphStyle`; optional `apply.from`/`apply.to` fields specify inclusive 0-based character indices.

```json
{
  "paragraphStyles": [
    {
      "paragraphStyle": {
        "alignment": "center"
      }
    }
  ]
}
```

With a range (V2 only): when a paragraph style targets a particular character span, provide `apply.from` and `apply.to`; their indexing matches the inclusive 0-based character-style ranges.

```json
{
  "paragraphStyles": [
    {
      "apply": { "from": 0, "to": 20 },
      "paragraphStyle": {
        "alignment": "left",
        "writingDirection": "left_to_right",
        "firstLineIndent": 0,
        "startIndent": 0,
        "endIndent": 0,
        "spaceBefore": 0,
        "spaceAfter": 6
      }
    }
  ]
}
```

### 4. Font management and font options

Font management includes providing custom fonts such as `.ttf` and `.otf`, selecting a default or fallback font for missing references, and deciding whether missing fonts should fail the job or use the default.

### V1 font options

| Property | Description |
| --- | --- |
| `options.fonts` | List of custom font inputs. Each entry supplies `href` for the URL and `storage`, such as `"external"`. |
| `options.globalFont` | Optional PostScript name used as the fallback font when a text layer asks for a font that is missing. |
| `options.manageMissingFonts` | `"useDefault"` or `"fail"`. With `"useDefault"`, missing fonts use `globalFont` when present, otherwise **ArialMT**. |

**Example (V1):**

```json
{
  "options": {
    "fonts": [{ "href": "<SIGNED_GET_URL>", "storage": "external" }],
    "globalFont": "ArialMT",
    "manageMissingFonts": "useDefault"
  }
}
```

### V2 font options

| Property | Description |
| --- | --- |
| `fontOptions.additionalFonts` | List of custom font sources. Each entry uses `source.url`; downloads happen before the document opens. |
| `fontOptions.defaultFontPostScriptName` | Optional PostScript name used as the fallback when a requested font cannot be found; if omitted, the worker falls back to **ArialMT**. |
| `fontOptions.missingFontStrategy` | Accepts `"use_default"` or `"fail"`; defaults to `"use_default"`. |

**Example (V2):**

```json
{
  "fontOptions": {
    "additionalFonts": [{ "source": { "url": "<SIGNED_GET_URL>" } }],
    "defaultFontPostScriptName": "Arial_BoldMT",
    "missingFontStrategy": "use_default"
  }
}
```

### Property mapping (V1 to V2)

| V1 | V2 |
| --- | --- |
| `options.fonts` | `fontOptions.additionalFonts` (replace `href` + `storage` with `source.url`) |
| `options.globalFont` | `fontOptions.defaultFontPostScriptName` |
| `options.manageMissingFonts` | `fontOptions.missingFontStrategy` |
| `"useDefault"` | `"use_default"` |
| `"fail"` | `"fail"` |

### Font types

V1 and V2 both allow these three font source categories:

| Font type | Description |
| --- | --- |
| **Custom** | Font files supplied by the user, such as `.ttf` or `.otf`, through `fontOptions.additionalFonts`. |
| **System** | Fonts installed for the worker environment. |
| **Typekit** | Adobe Typekit fonts. |

### Default font value

- **V1:** If `globalFont` is unset and `manageMissingFonts` is `"useDefault"`, **ArialMT** is used by the worker as the fallback.
- **V2:** If `defaultFontPostScriptName` is unset while the strategy uses the default, **ArialMT** is the worker fallback.

When neither version is given a global/default font, **ArialMT** is the default fallback font.

### Missing-font strategy

| Strategy | V1 (`manageMissingFonts`) | V2 (`missingFontStrategy`) | Behavior |
| --- | --- | --- | --- |
| Use default | `"useDefault"` | `"use_default"` (default) | Missing fonts are substituted with the default font, or ArialMT. The job completes. |
| Fail | `"fail"` | `"fail"` | The job fails and reports the missing fonts. |

### Improved missing font detection in V2

V2 detects missing fonts correctly during text layer edits in every case, whether the request changes `fontName`, `fontSize`, or another character attribute. V1 did not always find missing fonts for those edits, so the selected strategy was not applied consistently.

**Scenario:** A PSD contains a text layer set in `AdobeClean-Regular`, but the server cannot access that font. The request edits the layer, for example by changing only `fontSize` or by setting `fontName` to another missing font:

```json
{
  "characterStyles": [{ "fontSize": 24 }]
}
```

**V1 behavior:** The missing font goes unnoticed. The job finishes without using `missingFontStrategy`, and the output document still reports `AdobeClean-Regular`.

**V2 behavior:** The missing font is detected correctly, and the configured `missingFontStrategy` is used:

- `"use_default"` - `AdobeClean-Regular` is replaced by `defaultFontPostScriptName`, or by `ArialMT` when unset. The job completes.
- `"fail"` - the job fails with an error that identifies `AdobeClean-Regular` as missing.

### 5. Line Height and autoLeading

V1 did not support `lineHeight` in character attributes; line height always used automatic leading, equal to 120% of the font size.

V2 adds line height support and the new `autoLeading` parameter:

| Parameter | Description |
| --- | --- |
| `autoLeading` | `true` sets automatic line height at 120% of `fontSize`; `false` uses the supplied custom `lineHeight`. |
| `lineHeight` | Custom line height in pixels, applied only when `autoLeading` is `false`. |

**Default behavior:** Creating a text layer with the default font size of 30 automatically computes line height as 120% Ã— 30 = 36 pixels.

**V1:** `lineHeight` was unavailable, so auto-leading was always active.

**V2:** To keep V1-style automatic behavior, specify `autoLeading: true`. For custom leading, use `autoLeading: false` together with an explicit `lineHeight`:

```json
// V2 â€” auto-leading (matches V1 behavior)
{
  "characterStyle": {
    "fontSize": 30,
    "autoLeading": true
  }
}
```

```json
// V2 â€” custom line height
{
  "characterStyle": {
    "fontSize": 30,
    "autoLeading": false,
    "lineHeight": 48
  }
}
```

## Adding text to existing document

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
    "fonts": [
      {
        "href": "<FONT_FILE_URL>",
        "storage": "external"
      }
    ],
    "layers": [
      {
        "add": { "insertTop": true },
        "type": "textLayer",
        "bounds": {
          "left": 25,
          "top": 42,
          "width": 977,
          "height": 267
        },
        "text": {
          "content": "NEW TEXT LAYER",
          "characterStyles": [
            {
              "fontSize": 56,
              "orientation": "horizontal",
              "fontColor": {
                "rgb": {
                  "red": 0,
                  "green": 0,
                  "blue": 0
                }
              },
              "fontName": "AcerFoco-SemiboldItalic"
            }
          ]
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
  "fontOptions": {
    "additionalFonts": [
      { "source": { "url": "<FONT_FILE_URL>" } }
    ],
    "defaultFontPostScriptName": "Arial_BoldMT",
    "missingFontStrategy": "use_default"
  },
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "name": "New Text Layer",
        "operation": {
          "type": "add",
          "placement": {
            "type": "top"
          }
        },
        "text": {
          "content": "NEW TEXT LAYER",
          "antiAliasing": "smooth",
          "textOrientation": "horizontal",
          "frame": {
            "type": "area",
            "bounds": {
              "top": 42,
              "left": 25,
              "right": 1002,
              "bottom": 309
            }
          },
          "characterStyles": [
            {
              "apply": { "from": 0, "to": 13 },
              "characterStyle": {
                "font": { "postScriptName": "AcerFoco-SemiboldItalic" },
                "fontSize": 56,
                "fontColor": {
                  "rgb": {
                    "red": 0,
                    "green": 0,
                    "blue": 0
                  }
                }
              }
            }
          ]
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": { "url": "<SIGNED_POST_URL>" },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

## Editing existing text layers

### V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Existing Text Layer",
        "text": {
          "content": "Updated Text"
        },
        "edit": {}
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
        "name": "Existing Text Layer",
        "operation": {
          "type": "edit"
        },
        "text": {
          "content": "Updated Text",
          "characterStyles": [
            {
              "characterStyle": {
                "fontSize": 48
              }
            }
          ]
        }
      }
    ]
  }
}
```

## Common migration patterns

### Multi-style text

**V1:**

```json
{
  "text": {
    "content": "Bold and Italic",
    "characterStyles": [
      {
        "from": 0,
        "to": 4,
        "fontSize": 48,
        "fontName": "Arial-BoldMT"
      },
      {
        "from": 9,
        "to": 15,
        "fontSize": 48,
        "fontName": "Arial-ItalicMT"
      }
    ]
  }
}
```

V1 interpreted `to` as a length. In V2, `apply.from` and `apply.to` are inclusive 0-based character positions, so `apply.to` should be the final character index rather than a character count. See [Character styles structure](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-text.md#2-character-styles-structure).

**V2:** Set ranges with `apply.from`/`apply.to` (inclusive), and place styling under `characterStyle` with `font.postScriptName`

```json
{
  "text": {
    "content": "Bold and Italic",
    "characterStyles": [
      {
        "apply": { "from": 0, "to": 4 },
        "characterStyle": {
          "fontSize": 48,
          "font": { "postScriptName": "Arial-BoldMT" }
        }
      },
      {
        "apply": { "from": 9, "to": 15 },
        "characterStyle": {
          "fontSize": 48,
          "font": { "postScriptName": "Arial-ItalicMT" }
        }
      }
    ]
  }
}
```

### Multi-line text

Line breaks use `\r` in both V1 and V2:

```json
{
  "text": {
    "content": "Line 1\rLine 2\rLine 3"
  }
}
```

### Custom fonts

**V1:**

```json
{
  "options": {
    "fonts": [
      {
        "href": "<FONT_FILE_URL>",
        "storage": "external"
      }
    ]
  }
}
```

**V2:**

```json
{
  "fontOptions": {
    "additionalFonts": [
      {
        "source": {
          "url": "<FONT_FILE_URL>"
        }
      }
    ]
  }
}
```

## Character style properties

V2 exposes a wider character-style surface than V1:

| Property | V1 Support | V2 Support | Notes |
| --- | --- | --- | --- |
| `fontSize` | ✅ (pixels) | ✅ (pixels) | Same behavior in each version |
| `fontName` | ✅ | — | V1 only; switch to `font.postScriptName` in V2 |
| `font.postScriptName` | — | ✅ | In V2, this sits inside `characterStyle.font` |
| `fontColor` | ✅ rgb, cmyk, lab, gray | ✅ rgb, cmyk, lab, gray | Both versions use the same nested form, such as `fontColor.rgb` and `fontColor.cmyk` |
| `orientation` | ✅ | ✅ | V2 places `textOrientation` on `text` |
| `syntheticBold` | ❌ | ✅ | Available only in V2 |
| `syntheticItalic` | ❌ | ✅ | Available only in V2 |
| `letterSpacing` | ❌ | ✅ | Available only in V2 |
| `lineHeight` | ❌ | ✅ | Available only in V2. Sets custom line height in pixels, used when `autoLeading` is `false`. |
| `autoLeading` | ❌ | ✅ | Available only in V2. Default: `false`. With `true`, line height becomes automatic at 120% of `fontSize`; with `false`, V2 applies the supplied `lineHeight`. |
| `fontAlpha` | ❌ | ✅ | Available only in V2 |
| `capsOption` | ❌ | ✅ | Available only in V2, for example `all_caps` |

Compared with V1, V2 includes more controls for text styling. For exhaustive property coverage, see the [V2 API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/photoshop-v2/index.md).

## Paragraph style properties

When a V2 request leaves out any of the paragraph style fields below, the API applies defaults; every listed property is optional.

| Property | V1 Support | V2 Support | Description (V2) |
| --- | --- | --- | --- |
| `alignment` | ✅ | ✅ | Controls alignment. Values: `left` (default), `center`, `right`, `justify`, `justify_left`, `justify_right`, `justify_center`. |
| `writingDirection` | ❌ | ✅ | Sets writing direction. Values: `left_to_right` (default), `right_to_left`. |
| `firstLineIndent` | ❌ | ✅ | Pixel indent for the first line. Default 0. |
| `startIndent` | ❌ | ✅ | Pixel indent at the start side. Default 0. |
| `endIndent` | ❌ | ✅ | Pixel indent at the end side. Default 0. |
| `spaceBefore` | ❌ | ✅ | Pixel spacing before the paragraph. Default 0. |
| `spaceAfter` | ❌ | ✅ | Pixel spacing after the paragraph. Default 0. |

## Text positioning

### Frame types: point vs area

|  | V1 | V2 |
| --- | --- | --- |
| **Area frame** | ✅ The only V1 frame type. Text layer creation always produced an area frame, and bounds were required unless defaults were used. | ✅ Yes. For area text, set `text.frame` to `type: "area"` and provide `bounds: { top, left, right, bottom }`. |
| **Point frame** | ❌ V1 had no point-frame support. | ✅ Yes. For point text, set `text.frame` to `type: "point"` with `origin: { x, y }`. The text is single-point and does not wrap. |

V1 is limited to **area** frames, while V2 can create either **point** or **area** frames.

### Defaults when no frame is supplied

|  | V1 | V2 |
| --- | --- | --- |
| **When no bounds/frame is supplied** | V1 fell back to default area bounds: `left: 0`, `top: 0`, `width: 4`, `height: 4` (pixels). | Omitting `text.frame` in V2 creates a **point** frame at the **center of the canvas**. |

The default placement moved from a tiny top-left area in V1 to a centered point frame in V2. For deterministic V2 placement, include `text.frame` and choose an area frame plus bounds or a point frame plus origin.

### Using bounds

**V1:** Layer-level `bounds` with `left`, `top`, `width`, `height`. Area frame only; point frames are unavailable.

```json
{
  "type": "textLayer",
  "name": "Positioned Text",
  "bounds": {
    "left": 100,
    "top": 50,
    "width": 800,
    "height": 200
  },
  "text": { "content": "..." }
}
```

**V2:** Define text size and placement through `text.frame`, using `type: "area"` and `bounds` fields `top`, `left`, `right`, `bottom`; `width` and `height` are not used. Convert V1 bounds with `right = left + width` and `bottom = top + height`.

```json
{
  "type": "text_layer",
  "name": "Positioned Text",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "text": {
    "content": "...",
    "frame": {
      "type": "area",
      "bounds": {
        "top": 50,
        "left": 100,
        "right": 900,
        "bottom": 250
      }
    }
  }
}
```

### Font size units

`fontSize` is measured in pixels in both versions. In V2, it belongs under `characterStyle.fontSize`.

### Font color structure

Both V1 and V2 accept rgb, cmyk, lab, and gray. V1 allowed component values from 0–65535; V2 uses smaller ceilings:

| Color Model | V1 Fields | V2 Fields | V1 Range | V2 Range | Handling above the V2 ceiling |
| --- | --- | --- | --- | --- | --- |
| `rgb` | `red`, `green`, `blue` | `red`, `green`, `blue` | 0–65535 | 0–32768 | Use 32768 |
| `cmyk` | `cyan`, `magenta`, `yellowColor`, `black` | `cyan`, `magenta`, `yellow`, `black` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `luminance` | `l` | 0–65535 | 0–32768 | Use 32768 |
| `lab` | `a`, `b` | `a`, `b` | 0–65535 | -16384–16384 | Use 16384 |
| `gray` | `gray` | `gray` | 0–65535 | 0–32768 | Use 32768 |

Each component is mandatory; omitted components resolve to `0`.

V2 rejects any request whose `fontColor` component is above the permitted maximum. Before submitting a migrated V1 payload, clamp values that exceed the V2 range:

- `rgb`, `cmyk`, `gray`, `lab.l` — limit to **32768**. Example: V1 `red: 40000` → V2 `red: 32768`
- `lab.a`, `lab.b` — limit to **16384**. Example: V1 `a: 40000` → V2 `a: 16384`

**V2 field-name layout:** rgb, cmyk, lab, gray:

```json
{
  "fontColor": {
    "rgb": {
      "red": 32768,
      "green": 0,
      "blue": 0
    }
  }
}
```

```json
{
  "fontColor": {
    "cmyk": {
      "cyan": 32768,
      "magenta": 0,
      "yellow": 0,
      "black": 0
    }
  }
}
```

```json
{
  "fontColor": {
    "lab": {
      "l": 5000,
      "a": 10000,
      "b": -5000
    }
  }
}
```

```json
{
  "fontColor": {
    "gray": {
      "gray": 16384
    }
  }
}
```
