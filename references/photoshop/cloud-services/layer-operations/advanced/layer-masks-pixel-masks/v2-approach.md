# V2 approach

```json
{
  "edits": {
    "layers": [
      {
        "name": "Masked Layer",
        "operation": { "type": "edit" },
        "pixelMask": {
          "source": {
            "url": "<MASK_IMAGE_URL>"
          },
          "isLinked": true,
          "isEnabled": true,
          "offset": {
            "horizontal": 0,
            "vertical": 0
          }
        }
      }
    ]
  }
}
```
