# Pixel layer bounds / transform

| V1 | V2 | Notes |
| --- | --- | --- |
| `bounds: {left, top, width, height}` | `transform: {offset: {horizontal, vertical}, dimension: {width, height}}` | Breaking |
| `bounds.left` | `transform.offset.horizontal` |  |
| `bounds.top` | `transform.offset.vertical` |  |
| `bounds.width` | `transform.dimension.width` |  |
| `bounds.height` | `transform.dimension.height` |  |
