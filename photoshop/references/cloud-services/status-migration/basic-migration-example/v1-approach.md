# V1 approach

**Lightroom Status:**

```shell
curl -X GET \
  https://image.adobe.io/lrService/status/550e8400-e29b-41d4-a716-446655440000 \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

**Photoshop Status:**

```shell
curl -X GET \
  https://image.adobe.io/pie/psdService/status/550e8400-e29b-41d4-a716-446655440000 \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```
