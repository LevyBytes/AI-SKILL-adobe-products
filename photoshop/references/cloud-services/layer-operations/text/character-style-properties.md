# Character style properties

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
