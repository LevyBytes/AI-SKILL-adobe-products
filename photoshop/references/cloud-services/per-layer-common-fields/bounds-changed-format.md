# `bounds` — CHANGED format

In V2, `bounds` no longer reports `height`/`width` directly. Compute size from `right - left` and `bottom - top`.

Earlier shape with explicit dimensions:

```json
{ "height": 200, "left": 10, "top": 20, "width": 300 }
```

V2 rectangle-edge shape:

```json
{ "left": 10, "top": 20, "right": 310, "bottom": 220 }
```
