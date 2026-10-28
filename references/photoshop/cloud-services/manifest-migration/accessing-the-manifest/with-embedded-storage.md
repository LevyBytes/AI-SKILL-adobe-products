# With embedded storage

With embedded storage, the job status response carries the manifest inline:

```shell
curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

Response:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "jobId": "...",
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "json",
          "content": {
            "document": {/* additional content omitted */},
            "layers": [/* additional content omitted */]
          }
        },
        "mediaType": "application/json"
      }
    ]
  }
}
```
