# With custom blur strength

```json
{
  "image": { "source": { "url": "https://..." } },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{...modify slideAperture to 80...}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [{ "destination": { "url": "https://..." }, "mediaType": "image/jpeg" }]
}
```
