# Using V1 field names

❌ **Problem:**

```json
{
  "outputs": [
    {
      "href": "https://...",
      "type": "image/jpeg"
    }
  ]
}
```

❌ **Error:**

```text
Required field 'destination' is missing
Required field 'mediaType' is missing
```

✅ **Solution:**

```json
{
  "outputs": [
    {
      "destination": {
        "url": "https://..."
      },
      "mediaType": "image/jpeg"
    }
  ]
}
```
