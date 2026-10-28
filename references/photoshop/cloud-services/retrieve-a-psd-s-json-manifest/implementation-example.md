# Implementation example

For `Example.psd` kept in external storage, such as Azure, AWS, or Dropbox, a typical cURL request can be structured this way:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentManifest \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href":"<YOUR_PRESIGNED_URL>",
      "storage":"<storage>"
    }
  ]
}'
```

The API starts the work asynchronously and sends back a response that includes a URL. The `href` field points to [the job-status polling guide](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/guides/get-job-status/index.md); that same response also carries the JSON manifest.
