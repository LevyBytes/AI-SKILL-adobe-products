# Creating a Smart Object

This example uses the `/smartObject` endpoint to create an embedded smart object.

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/smartObject \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
  {
    "href": "<SIGNED_GET_URL>",
    "storage": "<storage>"
  }],
  "options": {
    "layers": [{
      "name": "New",
      "add": {
        "insertTop": true
      },
      "input": {
        "href": "<SIGNED_GET_URL>",
        "storage": "<storage>"
       }
      }
    ]
  },
  "outputs": [
  {
    "storage": "<storage>",
    "href": "<SIGNED_POST_URL>",
    "type": "vnd.adobe.photoshop"
  }
]}'
```

Submitting this API request launches the job asynchronously and returns an href in the payload. Use that href with [the job-status polling guide](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/guides/get-job-status/index.md).
