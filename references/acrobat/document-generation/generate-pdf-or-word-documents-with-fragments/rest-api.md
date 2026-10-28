# REST API

```bash
# Please refer our REST API docs for more information
# https://developer.adobe.com/document-services/docs/apis/#tag/Document-Generation

curl --location --request POST 'https://pdf-services.adobe.io/operation/documentgeneration' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
  "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",
  "outputFormat": "docx",
  "jsonDataForMerge": {
    "customerName": "Kane Miller",
    "customerVisits": 100,
    "itemsBought": [
      {
        "quantity": 50,
        "amount": 100,
        "description": "Sprays"
      },
      {
        "quantity": 100,
        "amount": 200,
        "description": "Chemicals"
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
  },
  "fragments": [
    {
      "orderDetails": "<b>Quantity</b>:{{quantity}}, <b>Description</b>:{{description}}, <b>Amount</b>:{{amount}}"
    },
    {
      "customerDetails": "{{customerName}}, Visits: {{customerVisits}}"
    }
  ]
}'
```
