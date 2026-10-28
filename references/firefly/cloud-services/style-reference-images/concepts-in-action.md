# Concepts in action

This exercise uses a style reference image to create several generated variations.

Before you start

For the walkthrough, you need a Firefly **Client ID** and **Access Token**. The [Authentication Guide](../authentication/reference-index.md) shows how to obtain them. **Keep these credentials secure, and do not place them in client-side or public code.**

1. In a secure terminal, use `export` to place the **Client ID** and **Access Token** into environment variables:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_SERVICES_CLIENT_ID='<your_client_id>'
export FIREFLY_SERVICES_ACCESS_TOKEN='<your_access_token>'
```

2. Save the mountain image from the top of this page on your desktop as _style-image-reference-mountain.webp_. The later request uses that style to generate several image variations.

3. Call the endpoint below to upload the saved image to Firefly's storage API. Update `--data-binary` so it references the file you saved:

```bash
curl --location 'https://firefly-api.adobe.io/v2/storage/image' \
--header 'Content-Type: image/webp' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data-binary '@/Users/<`YOUR_MACHINE_USERNAME`>/Desktop/style-image-reference-mountain.webp'
```

The upload response returns an identifier in this format:

```json
{ "images": [{ "id": "0eb8584a-b850-4c4c-a234-185d6378ecb6" }] }
```

4. Store the `id` for use by the following script:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_UPLOAD_ID='<your_upload_id>'
```

5. Start generation from the uploaded image with this request:

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data '{
  "numVariations": 4,
  "prompt": "a friendly dog",
  "style": {
    "imageReference": {
      "source": {
        "uploadId": "'$`FIREFLY_UPLOAD_ID`'"
      }
    }
  }
}'
```

For the asynchronous job, the request immediately returns a response in this form:

```json
{
  "jobId": "<`YOUR_JOB_ID`>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

6. Use the `jobId` to retrieve the result:

NOTE

Because `numVariations` is set to four, the result includes four generated images that are straightforward to compare, with four returned URLs.

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<`YOUR_JOB_ID`>" \
    -H "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
    -H "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
    -H "Content-Type: application/json"
```

