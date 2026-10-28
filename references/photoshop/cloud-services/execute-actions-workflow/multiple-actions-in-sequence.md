# Multiple actions in sequence

Chain as many as 10 actions in order:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"imageSize\",\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":800}}]",
          "contentType": "application/json"
        }
      },
      {
        "source": {
          "url": "https://your-storage.com/color-correction.json"
        }
      },
      {
        "source": {
          "url": "https://your-storage.com/add-watermark.atn"
        }
      }
    ]
  }
}
```
