# Issue: Invalid quality values

**Problem:** Using V1 numeric quality (1-7)

```json
{
  "quality": 7
}
```

V1 format

**Solution:** Use V2 string values

```json
{
  "quality": "maximum"
}
```

V2 format

Valid V2 values: `"very_poor"`, `"poor"`, `"low"`, `"medium"`, `"high"`, `"maximum"`, `"photoshop_max"`

**Note:** V2 accepts string enums only; V1 numeric quality values are invalid.
