# Status checking

Poll job status with this request:

```shell
curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

For response-format details, see the [status migration guide](../status-migration/status-migration.md).
