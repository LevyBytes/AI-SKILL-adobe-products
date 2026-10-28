# On outputs (export color management)

Use `iccProfile` on outputs for this endpoint set:

- `/v2/create-composite`
- `/v2/create-artboard`
- `/v2/execute-actions`

```json
{
  "outputs": [
    {
      "destination": { "url": "https://example.com/output.jpg" },
      "mediaType": "image/jpeg",
      "iccProfile": {
        "type": "standard",
        "name": "Adobe RGB (1998)",
        "imageMode": "rgb"
      }
    }
  ]
}
```
