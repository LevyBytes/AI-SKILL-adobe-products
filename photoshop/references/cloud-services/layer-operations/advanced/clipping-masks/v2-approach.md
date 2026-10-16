# V2 approach

In V2, the clipping mask flag sits directly on the layer instead of inside `mask`:

```json
{
  "edits": {
    "layers": [
      {
        "name": "Clipped Layer",
        "isClipped": true
      }
    ]
  }
}
```

**Key Change:**

| V1 Property | V2 Property | Notes |
| --- | --- | --- |
| `mask.clip` | `isClipped` | Moved from mask object to top-level layer property |

V2 restructures clipping masks around `isClipped`. Set that Boolean on the layer itself rather than nesting it under `mask`.
