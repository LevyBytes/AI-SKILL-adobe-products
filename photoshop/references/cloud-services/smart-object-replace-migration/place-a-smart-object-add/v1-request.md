# V1 Request

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/smartObject \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "layers": [
      {
        "name": "My Smart Object",
        "add": {
          "insertTop": true
        },
        "input": {
          "href": "<SMART_OBJECT_SOURCE_URL>",
          "storage": "external"
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "vnd.adobe.photoshop"
    }
  ]
}'
```
