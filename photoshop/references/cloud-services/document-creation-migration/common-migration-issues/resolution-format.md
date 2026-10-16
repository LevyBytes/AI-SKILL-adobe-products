# Resolution format

**Problem:** Supplying `resolution` as a bare integer does not match the V2 schema.

```json
{
  "resolution": 72
}
```

**Solution:** Provide `resolution` as an object carrying both `unit` plus `value` fields.

```json
{
  "resolution": { "unit": "density_unit", "value": 72 }
}
```
