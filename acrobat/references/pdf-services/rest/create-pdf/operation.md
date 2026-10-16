# REST API

For full details, head to our public API Reference:

- [Create PDF from Office formats](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Create-PDF)

- [Create PDF from HTML](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Html-To-PDF)

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/createpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718"
}'
```

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Create-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/createpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "documentLanguage": "en-US"
}'
```

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Html-To-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/htmltopdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
  "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
  "json": "{}",
  "includeHeaderFooter": true,
  "pageLayout": {
    "pageWidth": 11,
    "pageHeight": 8.5
  },
  "waitTimeToLoad": 100
}'
```

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Html-To-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/htmltopdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
  "inputUrl": "https://developer.adobe.com/document-services/homepage",
  "json": "{}",
  "includeHeaderFooter": true,
  "pageLayout": {
    "pageWidth": 11,
    "pageHeight": 8.5
  },
  "waitTimeToLoad": 100
}'
```
