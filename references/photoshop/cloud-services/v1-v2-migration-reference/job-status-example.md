# Job status migration example

**V2 Code:**

```shell
curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

**Key Transformations:**

1. Service-specific endpoints → Unified endpoint
2. Same jobId works for all operation types
