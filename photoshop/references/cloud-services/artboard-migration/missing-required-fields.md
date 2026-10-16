# Missing required fields

**Problem:** Image entry is missing `source`

**Error:**

```text
Required field 'source' is missing at path 'images[0]'
```

**Fix:** Include a `source` field on every image

```json
{
  "images": [
    {
      "source": {
        "url": "<URL>"
      }
    }
  ]
}
```
