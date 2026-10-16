# Issue: Missing mask digest

**Problem:** A mask is supplied without its digest value.

```json
{
  "masks": [
    {
      "source": { "url": "<MASK_URL>" }
    }
  ]
}
```

**Solution:** Add a digest to every mask so it can be identified.

```json
{
  "masks": [
    {
      "source": { "url": "<MASK_URL>" },
      "digest": "37B3568A954F0C80CA946DA0187FB9E2"
    }
  ]
}
```
