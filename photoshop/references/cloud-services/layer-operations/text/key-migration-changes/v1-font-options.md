# V1 font options

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
