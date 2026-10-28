# V1 approach

```json
{
  "options": {
    "layers": [
      {
        "name": "Masked Layer",
        "edit": {},
        "mask": {
          "input": {
            "href": "<MASK_IMAGE_URL>",
            "storage": "external"
          },
          "linked": true,
          "enabled": true,
          "offset": {
            "x": 0,
            "y": 0
          }
        }
      }
    ]
  }
}
```
