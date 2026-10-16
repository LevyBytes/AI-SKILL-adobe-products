# Status checking

Check the manifest generation job status:

```shell
curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

For response-shape details, see the [status migration guide](../status-migration/status-migration.md).
