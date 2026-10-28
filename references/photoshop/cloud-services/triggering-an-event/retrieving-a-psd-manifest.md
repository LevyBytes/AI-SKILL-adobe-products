# Retrieving a PSD manifest

The `/documentManifest` API can process one or more input PSDs and return JSON manifest files for them. Each JSON manifest describes the layer objects present in the PSD document.

With `Example.psd` stored externally, a typical cURL call for that case can use this structure:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentManifest \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -H 'x-gw-ims-org-id: <YOUR_IMS_ORG_ID>' \
  -d '{
  "inputs": [
    {
      "href":"<SIGNED_GET_URL>",
      "storage":"<storage>"
    }
  ]
}'
```

This request launches an asynchronous job and responds with the href used by [the job-status and manifest polling guide](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/guides/get-job-status/index.md).

**Response example:**

```json
{
  "_links": {
    "self": {
      "href": "https://image.adobe.io/pie/psdService/status/63c6e812-6cb8-43de-8a60-3681a9ec6feb"
    }
  }
}
```
