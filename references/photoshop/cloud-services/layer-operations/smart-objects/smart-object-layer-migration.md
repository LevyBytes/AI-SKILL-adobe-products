# Smart-object layer migration: V1 payload

**V1 documentOperations:**

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
        "type": "smartObject",
        "name": "Logo",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<LOGO_PSD_URL>",
          "storage": "external"
        },
        "bounds": {
          "left": 50,
          "top": 50,
          "width": 400,
          "height": 400
        },
        "smartObject": {
          "linked": false
        }
      },
      {
        "type": "smartObject",
        "name": "Product Image",
        "add": {
          "insertAbove": {
            "name": "Logo"
          }
        },
        "input": {
          "href": "<PRODUCT_IMAGE_URL>",
          "storage": "external"
        },
        "blendOptions": {
          "opacity": 85
        }
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

Related references:

- [Smart-object layer migration: V2 payload](v2-smart-object-layer-request.md)
