# REST API

Look under [Reorder Pages](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#tag/Combine-PDF) in the public API Reference.

### REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/combinepdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assets": [
        {
            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
            "pageRanges": [
                {
                    "start": 3,
                    "end": 3
                },
                {
                    "start": 1,
                    "end": 1
                },
                {
                    "start": 4,
                    "end": 4
                }
            ]
        }
    ]
}'
```
