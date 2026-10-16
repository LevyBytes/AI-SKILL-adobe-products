# Rest API

```bash
curl --location --request POST 'https://pdf-services.adobe.io/assets' \
--header 'X-API-Key: {{Placeholder for client_id}}' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mediaType": "{{Placeholder for mediaType}}"
}'
```

2. When that call returns a `200` status, take the `uploadUri` value from its response body and PUT the asset straight to the cloud provider with it. The same response hands back an `assetID`, which you will need when you create the job.

### Rest API

```bash
curl --location -g --request PUT 'https://dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com/b37fd583-1ab6-4f49-99ef-d716180b5de4?X-Amz-Security-Token=REDACTED-EXAMPLE for X-Amz-Security-Token}}&X-Amz-Algorithm={{Placeholder for X-Amz-Algorithm}}&X-Amz-Date={{Placeholder for X-Amz-Date}}&X-Amz-SignedHeaders={{Placeholder for X-Amz-SignedHeaders}}&X-Amz-Expires={{Placeholder for X-Amz-Expires}}&X-Amz-Credential=REDACTED-EXAMPLE for X-Amz-Credential}}&X-Amz-Signature=REDACTED-EXAMPLE for X-Amz-Signature}}' \
--header 'Content-Type: application/pdf' \
--data-binary '@{{Placeholder for file path}}'
```

The PDF Electronic Seal API also lets you attach an optional seal image i.e. a logo, watermark, or background graphic that becomes part of how the seal looks. To upload that seal image, simply repeat Step 4.
