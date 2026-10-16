# Resolution value too low

**Problem:** A `resolution` value below 1 is not accepted.

```json
{
  "resolution": { "unit": "density_unit", "value": 0 }
}
```

**Solution:** Set `value` to 1 or higher.

```json
{
  "resolution": { "unit": "density_unit", "value": 1 }
}
```
