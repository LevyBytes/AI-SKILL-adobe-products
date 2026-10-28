# Editing group layers

For an existing group layer edit (`operation.type: "edit"`), these fields may be changed:

- `name` - sets the group layer name
- `isVisible` - controls whether the group is visible
- `protection` - applies protection flags and passes them to descendant layers
- `blendOptions` - carries opacity and blend mode values
- `pixelMask` - supplies mask settings

**Not supported for edit operations on group layers:** `isClipped`, because clipping belongs to content layers rather than group layers, and `children`, because edit operations do not accept a `children` array. Add layers to an existing group with `into` placement and `referenceLayer`.

**Example: Editing a group layer**

```json
{
  "edits": {
    "layers": [
      {
        "name": "My Group",
        "type": "group_layer",
        "operation": { "type": "edit" },
        "isVisible": true,
        "protection": ["all"]
      }
    ]
  }
}
```
