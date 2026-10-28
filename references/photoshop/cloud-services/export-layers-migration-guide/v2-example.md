# V2 example

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/create-composite" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "image": {"source": {"url": "https://my-bucket.s3.amazonaws.com/input.psd"}},
    "outputs": [{
      "destination": {"url": "https://my-bucket.s3.amazonaws.com/out.png"},
      "mediaType": "image/png",
      "layers": [{"id": 1096}],
      "cropMode": "trim_to_transparency",
      "compression": "medium"
    }]
  }'
```

### V2 example

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/create-composite" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "image": {"source": {"url": "https://my-bucket.s3.amazonaws.com/input.psd"}},
    "outputs": [{
      "destination": {"url": "https://my-bucket.s3.amazonaws.com/out.jpg"},
      "mediaType": "image/jpeg",
      "layers": [{"id": 1096}, {"id": 996}],
      "quality": "maximum",
      "cropMode": "trim_to_transparency"
    }]
  }'
```
