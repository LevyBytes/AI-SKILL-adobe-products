# Creating a document rendition

This implementation sample shows the API `/renditionCreate` producing more than one output rendition:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/renditionCreate \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs":[
    {
      "href":"<SIGNED_GET_URL>",
      "storage":"<your_storage>"
    }
  ],
  "outputs":[
    {
      "href":"<SIGNED_POST_URL1>",
      "width": 512,
      "storage":"<your_storage>",
      "type":"image/jpeg"
    },
    {
      "href":"<SIGNED_POST_URL2>",
      "storage":"<your_storage>",
      "type":"image/png"
    }
  ]
}'
```

The API returns an href while starting the job asynchronously. Use that href with [the job-status polling guide](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/guides/get-job-status/index.md).
