# V2 PNG compression values (complete)

- `"none"` (level 0) - leaves PNG data uncompressed
- `"very_low"` (level 1) - applies a very small amount of compression
- `"low"` (level 2) - applies light compression
- `"medium_low"` (level 3) - uses a medium-low setting
- `"medium"` (level 4) - uses a middle compression setting
- `"medium_high"` (level 5) - uses a medium-high setting
- `"default"` (level 6) - **standard library behavior when omitted**
- `"high"` (level 7) - applies strong compression
- `"very_high"` (level 8) - applies very strong compression
- `"maximum"` (level 9) - uses the strongest compression level

**V1 Example:**

```json
{
  "type": "image/png",
  "compression": "medium"
}
```

**V2 Example:**

```json
{
  "mediaType": "image/png",
  "compression": "medium"
}
```

**Important:** PNG uses `compression`, not `quality`.
