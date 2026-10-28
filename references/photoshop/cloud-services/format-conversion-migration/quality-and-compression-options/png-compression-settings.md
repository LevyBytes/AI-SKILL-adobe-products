# PNG compression settings

V2 exposes ten compression levels aligned with zlib/libpng behavior:

```json
{
  "mediaType": "image/png",
  "compression": "medium"
}
```

**Compression Options:**

- `none` - turns compression off (level 0)
- `very_low` - applies only a small amount (level 1)
- `low` - uses a light compression setting (level 2)
- `medium_low` - applies a lower-middle setting (level 3)
- `medium` - uses the middle setting (level 4)
- `medium_high` - applies an upper-middle setting (level 5)
- `default` - uses the library-standard default (level 6)
- `high` - applies strong compression (level 7)
- `very_high` - uses a stronger setting (level 8)
- `maximum` - applies the strongest compression (level 9)

The `compression` parameter is optional. Without it, both Create Composite and Generate Manifest use `default` (level 6).

**V1 to V2 Mapping:**

| V1 Compression | V2 Recommended | V2 Alternatives | Notes |
| --- | --- | --- | --- |
| `small` | `maximum` | `very_high`, `high` | Smallest output, slower processing |
| `medium` | `medium` | `default`, `medium_high`, `medium_low` | Balanced performance |
| `large` | `low` | `very_low`, `none` | Faster output, larger files |
