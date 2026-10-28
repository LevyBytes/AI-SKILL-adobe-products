# Find the seed

1. In a protected terminal session, set environment variables for your **Client ID** and **Access Token** with `export`:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_SERVICES_CLIENT_ID=yourClientIdAsdf123
export FIREFLY_SERVICES_ACCESS_TOKEN=yourAccessTokenAsdf123
```

2. Run this command to request a futuristic city image from Firefly:

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
--header "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
--data '{
    "prompt": "a futuristic future cityscape with flying cars"
}'
```

Firefly returns async job metadata quickly:

```json
{
  "jobId": "<YOUR_JOB_ID>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

3. Check job status by using the `jobId`:

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<YOUR_JOB_ID>" \
    -H "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
    -H "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
    -H "Content-Type: application/json"
```

Once Firefly finishes generating the image, the final-status JSON includes the image seed in `outputs` along with other response details.

The following JSON shows a sample response for the generated image:

```json
{
  "status": "succeeded",
  "jobId": "urn:ff:jobs:epo854211:783e1c22-5a15-4a01-ab2b-32966a06ce6c",
  "result": {
    "size": {
      "width": 2048,
      "height": 2048
    },
    "outputs": [
      {
        "seed": 1842533538,
        "image": {
          "url": "https://pre-signed-firefly-prod.s3-accelerate.amazonaws.com/images/asdf-1234..."
        }
      }
    ],
    "contentClass": "art",
    "altText": "A futuristic city with towering glass buildings and glowing neon signs under a twilight sky."
  }
}
```

Here is the seed for our generated image

[Figure: a picture of a futuristic city 1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/seedless-city-1.jpeg)
