# Full TIFF request migration

**Main field moves:**

1. Standard output fields move to V2 names
2. v2 does not define TIFF compression parameters
3. Common output fields remain supported (`width`, `height`, etc.)

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://storage.example.com/input.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://storage.example.com/output.tiff",
      "storage": "external",
      "type": "image/tiff",
      "width": 3000
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://storage.example.com/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://storage.example.com/output.tiff"
      },
      "mediaType": "image/tiff",
      "width": 3000
    }
  ]
}
```
