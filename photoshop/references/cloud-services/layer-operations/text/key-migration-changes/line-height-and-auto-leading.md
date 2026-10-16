# 5. Line Height and autoLeading

V1 did not support `lineHeight` in character attributes; line height always used automatic leading, equal to 120% of the font size.

V2 adds line height support and the new `autoLeading` parameter:

| Parameter | Description |
| --- | --- |
| `autoLeading` | `true` sets automatic line height at 120% of `fontSize`; `false` uses the supplied custom `lineHeight`. |
| `lineHeight` | Custom line height in pixels, applied only when `autoLeading` is `false`. |

**Default behavior:** Creating a text layer with the default font size of 30 automatically computes line height as 120% × 30 = 36 pixels.

**V1:** `lineHeight` was unavailable, so auto-leading was always active.

**V2:** To keep V1-style automatic behavior, specify `autoLeading: true`. For custom leading, use `autoLeading: false` together with an explicit `lineHeight`:

```json
{
  "characterStyle": {
    "fontSize": 30,
    "autoLeading": true
  }
}
```

V2 â€” auto-leading (matches V1 behavior)

```json
{
  "characterStyle": {
    "fontSize": 30,
    "autoLeading": false,
    "lineHeight": 48
  }
}
```

V2 â€” custom line height
