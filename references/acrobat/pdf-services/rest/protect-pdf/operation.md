# REST API

Consult our public API Reference covering [Protect PDF](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Protect-PDF)

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/protectpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "passwordProtection": {
        "userPassword": "user_password"
    },
    "encryptionAlgorithm": "AES_128",
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Protect-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/protectpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
  "passwordProtection": {
    "ownerPassword": "owner_password"
  },
  "encryptionAlgorithm": "AES_256",
  "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```
