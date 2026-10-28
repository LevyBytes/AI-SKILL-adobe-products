# Unsupported fill option

**Problem:** An unsupported value for `fill` is invalid.

```json
{
  "fill": "black"
}
```

**Solution:** Accepted `fill` choices are `"white"`, `"transparent"`, `"background_color"`, or the object form `{"solidColor": {"rgb": {"red": R, "green": G, "blue": B}}}`.

```json
{
  "fill": "white"
}
```
