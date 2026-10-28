# Deleting a pixel mask

During an edit operation, V2 can remove the layer's pixel mask. Put `pixelMask.delete` on the layer and set it to `true`; that deletes the mask itself. If `delete` is `true`, the service disregards the remaining `pixelMask` settings: `source`, `isEnabled`, `isLinked`, and `offset`.

Pixel mask deletion applies only to **edit** operations (`operation.type: "edit"`). **Add** operations cannot use it.

**V2 Example - Delete pixel mask from a layer:**

```json
{
  "edits": {
    "layers": [
      {
        "type": "layer",
        "name": "Layer with Mask to Remove",
        "operation": { "type": "edit" },
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

**V2 Example - Delete pixel mask using layer ID:**

```json
{
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "id": 42,
        "operation": { "type": "edit" },
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

**Combining with other layer edits:**

The same layer entry may remove a pixel mask and alter additional layer properties:

```json
{
  "edits": {
    "layers": [
      {
        "type": "smart_object_layer",
        "name": "Update Layer",
        "operation": { "type": "edit" },
        "opacity": 80,
        "isVisible": true,
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

**Validation rules:**

- `delete` must be a boolean (`true` or `false`).
- If `delete` is `false` or is omitted during add operations, the normal `pixelMask` fields still apply: `source`, `isEnabled`, `isLinked`, and `offset`.
