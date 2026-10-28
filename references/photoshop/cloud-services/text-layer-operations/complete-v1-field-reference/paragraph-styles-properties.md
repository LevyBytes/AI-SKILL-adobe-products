# paragraphStyles properties

| V1 `paragraphStyles` Field | V2 ActionJSON Equivalent | Notes |
| --- | --- | --- |
| `alignment` | `set` on `paragraphStyle` with `align: {_enum: "alignmentType", _value: "..."}` | Target `_ref: "property"`, `_property: "paragraphStyle"`. Values: `"alignLeft"`, `"alignCenter"`, `"alignRight"`, `"justifyAll"`, `"justifyLeft"`, `"justifyCenter"`, `"justifyRight"` |

**Example: change text content and alignment**

```json
[
  {
    "_obj": "select",
    "_target": [{ "_name": "your-text-layer-name", "_ref": "layer" }],
    "makeVisible": true
  },
  {
    "_obj": "set",
    "_target": [
      { "_property": "textLayer", "_ref": "property" },
      { "_enum": "ordinal", "_ref": "textLayer", "_value": "targetEnum" }
    ],
    "to": {
      "_obj": "textLayer",
      "textKey": "Updated text content"
    }
  },
  {
    "_obj": "set",
    "_target": [
      { "_property": "paragraphStyle", "_ref": "property" },
      { "_enum": "ordinal", "_ref": "textLayer", "_value": "targetEnum" }
    ],
    "to": {
      "_obj": "paragraphStyle",
      "align": { "_enum": "alignmentType", "_value": "alignCenter" }
    }
  }
]
```
