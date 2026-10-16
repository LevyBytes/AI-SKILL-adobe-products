# Issue: Missing required source

**Problem:** An image entry lacks `source`.

**Error:** `Required field 'source' is missing at path 'images[0]'`

**Solution:** Add `source` to each image entry.

```json
{
  "images": [{ "source": { "url": "<URL>" } }]
}
```
