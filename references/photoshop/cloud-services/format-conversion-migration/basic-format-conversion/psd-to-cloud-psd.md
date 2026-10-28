# PSD to Cloud PSD

Write a PSD out as Cloud PSD for storage optimized around cloud access.

**Cloud PSD Benefits:**

- Optimized for cloud storage and streaming
- Layer information can be reached more quickly
- Web-based editing workflows use it efficiently
- Creative Cloud applications can work with it
- Creative Cloud storage gives the smoothest integration path

**V2 Approach:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/create-composite \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "outputs": [
    {
      "destination": {
        "creativeCloudPath": "my-folder/output.psdc"
      },
      "mediaType": "document/vnd.adobe.cpsd+dcxucf"
    }
  ]
}'
```

For Cloud PSD output, `document/vnd.adobe.cpsd+dcx` and `document/vnd.adobe.cpsd+dcxucf` both work with ACP (Adobe Cloud Platform) storage and external storages.
