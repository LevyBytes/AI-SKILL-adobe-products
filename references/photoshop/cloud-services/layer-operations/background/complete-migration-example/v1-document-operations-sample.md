# V1 documentOperations sample

```json
{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "type": "backgroundLayer",
        "name": "Background",
        "add": {},
        "input": {
          "href": "<BACKGROUND_IMAGE_URL>",
          "storage": "external"
        },
        "locked": false,
        "visible": true
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}
```
