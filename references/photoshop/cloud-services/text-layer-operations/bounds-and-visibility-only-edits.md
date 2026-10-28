# Bounds and visibility-only edits

If a V1 `/pie/psdService/text` payload changes only layer bounds or visibility, without text content or style edits, V2 still needs a non-empty `options` object containing ActionJSON or UXP. V2 rejects `options` when it is empty:

```text
options: At least one of actions or uxp must be provided
```

Build ActionJSON that selects each target layer by `_name`, then runs one of these edits:

**Show or hide visibility:**

```json
[
  {
    "_obj": "select",
    "_target": [{ "_ref": "layer", "_name": "My Text Layer" }],
    "makeVisible": false
  },
  {
    "_obj": "hide",
    "_target": [{ "_ref": "layer", "_enum": "ordinal", "_value": "targetEnum" }]
  }
]
```

To reveal a hidden layer, use `"_obj": "show"` rather than `"hide"`.

**Translate or move bounds:**

```json
[
  {
    "_obj": "select",
    "_target": [{ "_ref": "layer", "_name": "My Text Layer" }],
    "makeVisible": false
  },
  {
    "_obj": "move",
    "_target": [{ "_ref": "layer", "_enum": "ordinal", "_value": "targetEnum" }],
    "to": {
      "_obj": "offset",
      "horizontal": { "_unit": "pixelsUnit", "_value": 50 },
      "vertical": { "_unit": "pixelsUnit", "_value": 30 }
    }
  }
]
```

Place this ActionJSON as a stringified value in `options.actions[].source.content`, and set `contentType: "application/json"`.
