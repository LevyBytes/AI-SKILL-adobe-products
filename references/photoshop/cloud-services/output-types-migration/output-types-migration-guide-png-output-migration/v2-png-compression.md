# V2 PNG compression

```json
{
  "mediaType": "image/png",
  "compression": "medium"
}
```

V2 exposes ten compression levels based on zlib/libpng conventions:

- `"none"` - disables compression (level 0)
- `"very_low"` - applies minimal compression (level 1)
- `"low"` - applies low compression (level 2)
- `"medium_low"` - applies medium-low compression (level 3)
- `"medium"` - applies medium compression (level 4)
- `"medium_high"` - applies medium-high compression (level 5)
- `"default"` - uses the standard library default (level 6)
- `"high"` - applies high compression (level 7)
- `"very_high"` - applies very high compression (level 8)
- `"maximum"` - uses level 9, the highest compression setting
