# V1 vs V2 envelope example

**V1 (`documentOperations`):**

```json
{
  "inputs": [{ "href": "<SIGNED_GET_URL>", "storage": "external" }],
  "options": {
    "layers": [
      {
        "type": "textLayer",
        "name": "Title",
        "add": { "insertTop": true },
        "text": { "content": "Hello" }
      }
    ]
  },
  "outputs": [
    { "href": "<SIGNED_POST_URL>", "storage": "external", "type": "image/vnd.adobe.photoshop" }
  ]
}
```

**V2 (`/v2/create-composite`):**

```json
{
  "image": { "source": { "url": "<SIGNED_GET_URL>" } },
  "edits": {
    "layers": [
      {
        "type": "text_layer",
        "name": "Title",
        "operation": { "type": "add", "placement": { "type": "top" } },
        "text": { "content": "Hello" }
      }
    ]
  },
  "outputs": [
    { "destination": { "url": "<SIGNED_POST_URL>" }, "mediaType": "image/vnd.adobe.photoshop" }
  ]
}
```
