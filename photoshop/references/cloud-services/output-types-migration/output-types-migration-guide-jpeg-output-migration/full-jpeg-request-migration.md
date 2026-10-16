# Full JPEG request migration

**Main field moves:**

1. `inputs[].href` → `image.source.url`
2. `outputs[].href` → `outputs[].destination.url`
3. `outputs[].type` → `outputs[].mediaType`
4. `quality: 7` → `quality: "maximum"`
5. `storage: "external"` removed (implicit for S3 URLs)

**V1 Request:**

```json
{
  "inputs": [
    {
      "href": "https://my-bucket.s3.amazonaws.com/input.psd",
      "storage": "external"
    }
  ],
  "outputs": [
    {
      "href": "https://my-bucket.s3.amazonaws.com/output.jpg",
      "storage": "external",
      "type": "image/jpeg",
      "quality": 7,
      "width": 2000
    }
  ]
}
```

**V2 Request:**

```json
{
  "image": {
    "source": {
      "url": "https://my-bucket.s3.amazonaws.com/input.psd"
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "https://my-bucket.s3.amazonaws.com/output.jpg"
      },
      "mediaType": "image/jpeg",
      "quality": "maximum",
      "width": 2000
    }
  ]
}
```
