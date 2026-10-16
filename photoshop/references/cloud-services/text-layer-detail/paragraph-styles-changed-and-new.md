# Paragraph styles — CHANGED and NEW

The old paragraph style collection was named `paragraphStyles`:

```json
[{ "alignment": "left" }]
```

The renamed collection in the new model is `paragraphAttributes`:

| Field | Status | Notes |
| --- | --- | --- |
| `alignment` | same | string |
| `writingDirection` | NEW | e.g. `"left_to_right"` |
| `firstLineIndent` | NEW | number |
| `startIndent` | NEW | number |
| `endIndent` | NEW | number |
| `spaceBefore` | NEW | number |
| `spaceAfter` | NEW | number |
| `position` | NEW | `{from, to}` — paragraph range |
