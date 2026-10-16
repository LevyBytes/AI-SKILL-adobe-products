# Delete pixel mask

V2 can remove a pixel mask from a layer during an edit operation. V1 provided no way to delete an existing pixel mask except by replacing the whole layer.

When modifying an existing layer, set `pixelMask.delete` to `true` to remove that layer's pixel mask. The mask data is deleted completely.

```json
{
  "edits": {
    "layers": [
      {
        "name": "Layer with Mask",
        "operation": { "type": "edit" },
        "pixelMask": {
          "delete": true
        }
      }
    ]
  }
}
```

Key constraints:

- Only available on **edit** operations (`operation.type: "edit"`); not valid on add
- `delete` must be a boolean (`true` or `false`);
- Can be combined with other layer edits (opacity, visibility, etc.) in the same layer entry

See [Advanced Layer Operations Migration](../../layer-operations/advanced/reference-index.md) for full examples and validation rules.
