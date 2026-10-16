# Color-mode depth mismatch

**Problem:** The chosen `depth` must be valid for the selected `mode`; for example, CMYK does not allow 32-bit depth.

```json
{
  "mode": "cmyk",
  "depth": 32
}
```

**Solution:** Match `depth` to the mode: bitmap uses `1`; cmyk and lab allow 8 or 16; indexed and duotone allow 8 only; rgb, grayscale, and hsb allow 8, 16, or 32.

```json
{
  "mode": "cmyk",
  "depth": 16
}
```
