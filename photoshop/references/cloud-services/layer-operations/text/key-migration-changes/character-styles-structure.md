# 2. Character styles structure

**Breaking change: V1 and V2 interpret character and paragraph style ranges differently.** V1 treated the `to` field on each range entry as a **length**, so `from: 0, to: 5` selected 5 characters beginning at index 0, meaning indices 0-4. In V2, `apply.to` is a 0-based **inclusive end index**; therefore `apply: {from: 0, to: 4}` selects characters 0, 1, 2, 3, and 4, the first 5 characters. During migration, set V2 `apply.to` to the **last character index** covered by the style, not to the character count.

**Off-by-one example**: applying a style to "Hello" within "Hello World":

V1: to=5 means length 5 â†’ characters 0,1,2,3,4

```json
{
  "from": 0,
  "to": 5,
  "fontName": "Arial-BoldMT"
}
```

V2: to=4 is the inclusive end index â†’ characters 0,1,2,3,4 (same result)

```json
{
  "apply": {
    "from": 0,
    "to": 4
  },
  "characterStyle": {
    "font": {
      "postScriptName": "Arial-BoldMT"
    }
  }
}
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
