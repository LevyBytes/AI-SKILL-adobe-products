# Action file not found

❌ **Problem:** v1-style action reference is being used

```json
{
  "actions": [
    {
      "href": "<ACTION_URL>",
      "storage": "external"
    }
  ]
}
```

✅ **Solution:** Switch to the v2 `source` shape

```json
{
  "actions": [
    {
      "source": {
        "url": "<ACTION_URL>"
      }
    }
  ]
}
```
