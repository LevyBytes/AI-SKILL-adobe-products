# Full PSD migration example

**Main field moves:**

1. Shared output field names move to their V2 form
2. `options` → `edits`
3. PSD output needs no quality or compression parameters

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://storage.example.com/document.psd",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "name": "Background",
        "locked": false
      }
    ]
  },
  "outputs": [
    {
      "href": "https://storage.example.com/modified.psd",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://storage.example.com/document.psd"
    }
  },
  "edits": {
    "layers": [
      {
        "name": "Background",
        "protection": ["none"]
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "https://storage.example.com/modified.psd"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```
