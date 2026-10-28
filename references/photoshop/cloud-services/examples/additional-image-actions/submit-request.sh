# Set token and apiKey; fill the signed URLs/storage values in request-settings.json.
node build-request.cjs > request.json
curl -X POST https://image.adobe.io/pie/psdService/actionJSON \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  --data-binary @request.json
