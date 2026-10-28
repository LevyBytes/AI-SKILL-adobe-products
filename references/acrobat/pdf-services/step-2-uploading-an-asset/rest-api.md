# Upload request examples

Run these templates in Bash. Replace the Adobe client ID, access token and input media-type placeholders. For a PDF use `application/pdf`.

## Request upload authorization

```bash
curl --location --request POST 'https://pdf-services.adobe.io/assets' \
--header 'X-API-Key: {{Placeholder for client_id}}' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mediaType": "{{Placeholder for mediaType}}"
}'
```

A successful `200` response supplies `uploadUri` and `assetID`. Retain `assetID` for job submission. Set `UPLOAD_URI` to that exact returned URI, `INPUT_MEDIA_TYPE` to the same media type used above, and `INPUT_FILE` to the local input path.

## Upload the bytes

```bash
curl --fail --request PUT "$UPLOAD_URI" \
  --header "Content-Type: $INPUT_MEDIA_TYPE" \
  --data-binary "@$INPUT_FILE"
```

Wait for the storage upload to succeed before submitting a job. Quote the complete signed URI so its query remains intact.
