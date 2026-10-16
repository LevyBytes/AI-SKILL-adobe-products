# REST API with External Storage

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Document-Generation

curl --location --request POST 'https://pdf-services.adobe.io/operation/documentgeneration' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
    "input": {
        "uri": "https://dcplatformstorageservice-dev-us-east-1.s3-accelerate.amazonaws.com/dc-platformService-automation_dc-platformService-automation%40AdobeID/49b1d57e-23bf-4b82-a541-ba56d9b97011?X-Amz-Security-Token=REDACTED-EXAMPLE&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230620T072137Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=REDACTED-EXAMPLE&X-Amz-Signature=REDACTED-EXAMPLE",
        "storage": "S3"
    },
    "output": {
        "uri": "https://dcplatformstorageservice-dev-us-east-1.s3-accelerate.amazonaws.com/dc-platformService-automation_dc-platformService-automation%40AdobeID/304625c6-f467-4c1b-bbd4-2411ad3bef06?X-Amz-Security-Token=REDACTED-EXAMPLE&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230620T072142Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=3600&X-Amz-Credential=REDACTED-EXAMPLE&X-Amz-Signature=REDACTED-EXAMPLE",
        "storage": "S3"
    },
    "params": {
        "jsonDataForMerge": {
            "customerName": "Kane Miller",
            "customerVisits": 100,
            "itemsBought": [
                {
                    "name": "Sprays",
                    "quantity": 50,
                    "amount": 100
                },
                {
                    "name": "Chemicals",
                    "quantity": 100,
                    "amount": 200
                }
            ],
            "totalAmount": 300,
            "previousBalance": 50,
            "lastThreeBillings": [
            100,
            200,
            300
            ],
            "photograph": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88h8AAu0B9XNPCQQAAAAASUVORK5CYII="
        }
    }
}'
```

The Document Generation API swaps out the template tags for the values supplied in the input JSON data.

![Document template with template tags being replaced by actual values](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/images/generate-document.gif)
