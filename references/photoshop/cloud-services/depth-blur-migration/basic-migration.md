# Basic migration

**V1:**

```json
{
  "inputs": [{ "href": "s3://portrait.jpg", "storage": "external" }],
  "outputs": [{ "href": "s3://blurred.jpg", "type": "image/jpeg" }]
}
```

**V2:**

```json
{
  "image": { "source": { "url": "s3://portrait.jpg" } },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{...ActionJSON with default values...}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [{ "destination": { "url": "s3://blurred.jpg" }, "mediaType": "image/jpeg" }]
}
```
