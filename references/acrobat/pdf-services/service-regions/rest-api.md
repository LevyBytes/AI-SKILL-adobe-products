# REST API

```bash
curl --location --request POST 'https://pdf-services-ew1.adobe.io/assets' \
--header 'X-API-Key: {{Placeholder for client_id}}' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mediaType": "{{Placeholder for mediaType}}"
}'
```

### REST API

```bash

curl --location --request POST 'https://pdf-services-ew1.adobe.io/operation/{Placeholder for operation name}' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "{{Placeholder for asset ID}}"
}'
```

### REST API

```bash

curl --location --request GET 'https://pdf-services-ew1.adobe.io/operation/{Placeholder for operation name}' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}'
```

A worked, step-by-step walkthrough of the Adobe PDF services APIs lives over [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/howtos/api-usage.md).
