# Specifying strength

The `strength` value lets you tune how much the generated images echo the reference.

1. Start from the mountain reference image in the page-top example. Use the context menu on the "Structure Reference Image" to save it on your desktop.

2. After saving it, send the image to Firefly's storage API. In the command below, adjust the `--data-binary` path for your machine:

```bash
curl --location 'https://firefly-api.adobe.io/v2/storage/image' \
--header 'Content-Type: image/webp' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data-binary '@/Users/<`YOUR_MACHINE_USER_NAME`>/Desktop/structure-image-reference-mountain.webp'
```

Expect a response in this shape:

```json
{
  "images": [
    {
      "id": "0eb8584a-b850-4c4c-a234-185d6378ecb6"
    }
  ]
}
```

Your images.id here will be unique

3. Make the ID available for the following script:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_UPLOAD_ID='<YOUR_images.id>'
```

4. Create a new image from the uploaded image. The next command demonstrates the effect of the `strength` parameter on output similarity.
   Try `100` for the initial `strength`, then test alternate settings.

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data '{
  "numVariations": 4,
  "prompt": "a photo of a volcano",
  "structure": {
    "strength": 100,
    "imageReference": {
      "source": {
        "uploadId": "'$`FIREFLY_UPLOAD_ID`'"
      }
    }
  }
}'
```

For the asynchronous job, the API answers quickly with a payload like this:

```json
{
  "jobId": "<`YOUR_JOB_ID`>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

5. Use the `jobId` to retrieve the result:

NOTE

With `numVariations` set this way, the response creates four generated images for comparison and returns four URLs.

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<`YOUR_JOB_ID`>" \
    -H "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
    -H "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
    -H "Content-Type: application/json"
```
