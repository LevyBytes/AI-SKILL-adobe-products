# REST API

```bash
curl --location --request POST 'https://pdf-services.adobe.io/operation/electronicseal' \
--header 'x-api-key: {{Placeholder for client_id}}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--data-raw '{
  "inputDocumentAssetID": "urn:aaid:AS:UE1:23c30ee0-2c4d-xxxx-xxxx-087832fca718",
  "sealImageAssetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-xxxx-xxxx-087832fca718",
  "sealOptions": {
    "signatureFormat": "PKCS7",
    "documentLevelPermission": "FORM_FILLING",
    "cscCredentialOptions": {
      "credentialId": "<`CREDENTIAL_ID`>",
      "providerName": "<`PROVIDER_NAME`>",
      "authorizationContext": {
        "tokenType": "Bearer",
        "accessToken": "<`ACCESS_TOKEN`>"
      },
      "credentialAuthParameters": {
        "pin": "<PIN>"
      }
    },
    "sealFieldOptions": {
      "location": {
        "left": 150,
        "top": 250,
        "right": 350,
        "bottom": 200
      },
      "fieldName": "Signature1",
      "pageNumber": 1
    }
  }
}'
```
