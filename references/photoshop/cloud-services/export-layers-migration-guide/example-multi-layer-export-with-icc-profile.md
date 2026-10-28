# Example: multi-layer export with ICC profile

```json
{
  "outputs": [
    {
      "destination": { "url": "https://example.com/out.jpg" },
      "mediaType": "image/jpeg",
      "layers": [{ "id": 1096 }, { "id": 996 }],
      "quality": "high",
      "iccProfile": {
        "type": "standard",
        "name": "Adobe RGB (1998)"
      }
    }
  ]
}
```
