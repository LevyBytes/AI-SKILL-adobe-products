# Multi-style text

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
