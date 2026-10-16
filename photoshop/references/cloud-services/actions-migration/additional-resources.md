# Additional resources

Action workflows may use extra resources such as brushes, patterns, and fonts. For every resource category, a request can include up to 10 items.

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "options": {
    "actions": [/* additional content omitted */],
    "brushes": [
      {
        "source": {
          "url": "<BRUSH_FILE_URL>"
        }
      }
    ],
    "patterns": [
      {
        "source": {
          "url": "<PATTERN_FILE_URL>"
        }
      }
    ],
    "fontOptions": {
      "additionalFonts": [
        {
          "source": {
            "url": "<FONT_FILE_URL>"
          }
        }
      ],
      "missingFontStrategy": "use_default"
    }
  }
}
```
