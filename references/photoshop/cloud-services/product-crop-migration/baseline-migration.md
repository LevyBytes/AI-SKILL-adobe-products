# Baseline migration

**V1:**

```json
{
  "inputs": [{ "href": "s3://input.jpg", "storage": "external" }],
  "outputs": [{ "href": "s3://output.jpg", "type": "image/jpeg" }]
}
```

**V2:**

```json
{
  "image": { "source": { "url": "s3://input.jpg" } },
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{...ActionJSON...}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [{ "destination": { "url": "s3://output.jpg" }, "mediaType": "image/jpeg" }]
}
```
