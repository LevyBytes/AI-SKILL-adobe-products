# text properties

| V1 `text` Field | V2 ActionJSON Equivalent | Notes |
| --- | --- | --- |
| `content` | `set` on `textLayer` with `textKey: "new string"` | Target `_ref: "textLayer"`, `_property: "textLayer"`, `to._obj: "textLayer"`, `to.textKey: "..."` |
| `orientation` | `set` on `textLayer` with `orientation: {_enum: "orientation", _value: "horizontal"}` | Values: `"horizontal"`, `"vertical"` |
| `antiAlias` | `set` on `textLayer` with `antiAlias: {_enum: "antiAliasType", _value: "..."}` | Values: `"antiAliasNone"`, `"antiAliasCrisp"`, `"antiAliasStrong"`, `"antiAliasSmooth"`, `"antiAliasLCD"` |
