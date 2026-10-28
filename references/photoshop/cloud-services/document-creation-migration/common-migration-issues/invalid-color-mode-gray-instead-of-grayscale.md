# Invalid color mode: gray instead of grayscale

**Problem:** A deprecated or unsupported `mode` value will fail validation.

```json
{
  "mode": "gray"
}
```

**Solution:** Use `"grayscale"` instead of `"gray"`. The allowed values are `rgb`, `bitmap`, `grayscale`, `indexed`, `hsb`, `cmyk`, `lab`, `duotone`, `multichannel`.

```json
{
  "mode": "grayscale"
}
```
