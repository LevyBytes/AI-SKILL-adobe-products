Use this Bash template to request text and tables from an uploaded PDF. Complete the [asset upload](../step-2-uploading-an-asset.md) first, then replace the asset-ID and Adobe credential placeholders.

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Extract-PDF

curl --location --request POST 'https://pdf-services.adobe.io/operation/extractpdf' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
    "elementsToExtract": [
        "text",
        "tables"
    ]
}'
```

Submission starts an asynchronous job. Follow the [status and download instructions](../step-4-fetching-the-status.md) to retrieve the extraction result.
