# Issue: String values for numeric fields (strict type coercion)

**Problem:** Values that V1 accepted as strings must be sent as strict numeric types in V2.

```json
{ "image": { "width": "1920", "height": "1080", "depth": "8" } }
```

**Solution:** Send integers or floats.

```json
{ "image": { "width": 1920, "height": 1080, "depth": 8 } }
```

Fields often affected include `image.width`, `image.height`, `image.depth`, `outputs[].width`, `outputs[].height`, `opacity`, and `resolution.value`.
