# V1 documentCreate request

```json
{
  "options": {
    "document": {
      "width": 1000,
      "height": 1000,
      "resolution": 72,
      "fill": "white",
      "mode": "rgb"
    },
    "layers": [
      {
        "type": "layer",
        "name": "Logo",
        "input": {
          "href": "<IMAGE_URL>",
          "storage": "external"
        }
      }
    ]
  }
}
```
