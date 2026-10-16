# Multiple outputs

A V2 request can include as many as 25 output entries:

```json
{
  "outputs": [
    {
      "destination": { "url": "..." },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2400
    },
    {
      "destination": { "url": "..." },
      "mediaType": "image/jpeg",
      "quality": "medium",
      "width": 800
    },
    {
      "destination": { "url": "..." },
      "mediaType": "image/png",
      "compression": "high"
    }
  ]
}
```
