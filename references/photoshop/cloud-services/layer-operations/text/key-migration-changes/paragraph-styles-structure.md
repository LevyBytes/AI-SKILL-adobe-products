# 3. Paragraph styles structure

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
