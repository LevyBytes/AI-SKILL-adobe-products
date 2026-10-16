# Example with multiple outputs

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
        "url": "https://storage.example.com/output-hq.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": {
        "url": "https://storage.example.com/output-preview.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 800
    },
    {
      "destination": {
        "url": "https://storage.example.com/output.png"
      },
      "mediaType": "image/png",
      "compression": "maximum",
      "width": 1920
    },
    {
      "destination": {
        "url": "https://storage.example.com/output.psd"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}
```

The single call above creates these four outputs:

1. JPEG at 2400px width using high-quality settings
2. Preview JPEG at 800px width using `medium`
3. PNG at 1920px width using maximum compression
4. PSD output with edits applied
