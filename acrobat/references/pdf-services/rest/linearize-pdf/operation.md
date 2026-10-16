# REST API

Our public API Reference covers [Linearize PDF](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Linearize-PDF)

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Linearize-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/linearizepdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```
