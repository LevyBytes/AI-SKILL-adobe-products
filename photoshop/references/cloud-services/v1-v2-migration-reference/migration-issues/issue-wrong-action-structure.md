# Issue: Wrong action structure

**Problem:** The action reference still uses the V1 shape.

```json
{
  "options": {
    "actions": [
      {
        "href": "<URL>",
        "storage": "external"
      }
    ]
  }
}
```

**Solution:** Point action references through the V2 `source` object.

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "<URL>"
        }
      }
    ]
  }
}
```
