# Mask property changes

**V1:**

```json
{
  "mask": {
    "input": {
      "href": "<URL>",
      "storage": "external"
    },
    "linked": true,
    "enabled": true,
    "clip": false
  }
}
```

**V2:**

```json
{
  "pixelMask": {
    "source": {
      "url": "<URL>"
    },
    "isLinked": true,
    "isEnabled": true,
    "offset": {
      "horizontal": 0,
      "vertical": 0
    }
  }
}
```

**Key Changes:**

| V1 Property | V2 Property | Notes |
| --- | --- | --- |
| `mask` | `pixelMask` | Layer-level property name changed |
| `input.href` + `input.storage` | `source.url` | A single URL field replaces the prior pair |
| `linked` | `isLinked` | Boolean field now follows the V2 naming pattern |
| `enabled` | `isEnabled` | Boolean field now follows the V2 naming pattern |
| `offset.x` / `offset.y` | `offset.horizontal` / `offset.vertical` | Coordinate field names changed |
| `clip` | Moved to layer level | V2 uses top-level `isClipped`; see [Clipping Masks](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/photoshop-v2/v1-to-v2/layer-operations-advanced.md#clipping-masks) below |

V2 moves the former `clip` behavior out of `mask.clip`. Control clipping masks with the layer-level `isClipped` property instead.
