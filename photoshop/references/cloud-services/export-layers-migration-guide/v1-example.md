# V1 example

```bash
curl -X POST "https://image.adobe.io/pie/psdService/renditionCreate" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [{"href": "https://my-bucket.s3.amazonaws.com/input.psd", "storage": "external"}],
    "outputs": [{
      "href": "https://my-bucket.s3.amazonaws.com/out.png",
      "storage": "external",
      "type": "image/png",
      "layers": [{"id": 1096}],
      "compression": "medium"
    }]
  }'
```

### V1 example

```bash
curl -X POST "https://image.adobe.io/pie/psdService/renditionCreate" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [{"href": "https://my-bucket.s3.amazonaws.com/input.psd", "storage": "external"}],
    "outputs": [{
      "href": "https://my-bucket.s3.amazonaws.com/out.jpg",
      "storage": "external",
      "type": "image/jpeg",
      "layers": [{"id": 1096}, {"id": 996}],
      "quality": 7
    }]
  }'
```
