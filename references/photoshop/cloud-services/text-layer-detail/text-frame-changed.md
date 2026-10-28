# Text frame - CHANGED

Old text frame fields:

```json
{
  "type": "area",
  "frameType": "inPath"
}
```

New `frame` object:

```json
{
  "type": "area",
  "bounds": { "top": 0, "left": 0, "bottom": 100, "right": 300 },
  "boundsRaw": { "left": 0, "top": 0, "right": 300, "bottom": 100 },
  "matrix": { "f_xx": 1, "f_xy": 0, "f_yx": 0, "f_yy": 1, "f_tx": 0, "f_ty": 0 },
  "baselineAlignment": { "flag": 0, "minimum": 0 }
}
```

| Sub-field | Status | Notes |
| --- | --- | --- |
| `type` | same | e.g. `"area"` |
| `frameType` | REMOVED | Subsumed by richer `frame` object |
| `bounds` | NEW | Absolute canvas bounds of the text box |
| `boundsRaw` | NEW | Unscaled text box dimensions |
| `matrix` | NEW | 2D affine transform matrix |
| `baselineAlignment` | NEW | `{flag, minimum}` baseline alignment parameters |
