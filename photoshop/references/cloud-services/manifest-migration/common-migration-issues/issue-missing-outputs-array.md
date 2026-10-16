# Issue: Missing outputs array

**Problem:** The V2 request omits `outputs`

**Solution:** Always provide an `outputs` array

```json
{
  "outputs": [
    {
      "destination": {
        "url": "<MANIFEST_URL>"
      },
      "mediaType": "application/json"
    }
  ]
}
```
