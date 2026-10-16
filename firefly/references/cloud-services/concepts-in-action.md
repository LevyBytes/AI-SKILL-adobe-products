# Concepts in action

This exercise uses style presets to create several generated image variations.

Before you start

For the walkthrough, have a Firefly **Client ID** and **Access Token** ready. The [Authentication Guide](authentication/reference-index.md) explains how to retrieve them. **Keep these credentials secure, and do not place them in client-side or public code.**

1. Open a secure terminal first, then `export` your **Client ID** and **Access Token** as environment variables:

Replace these example values with your own credentials or the returned upload identifier in your private shell session.

```bash
export FIREFLY_SERVICES_CLIENT_ID='<your_Client_ID>'
export FIREFLY_SERVICES_ACCESS_TOKEN='<your_Access_Token>'
```

2. Send a request to the Generate Images API. This example uses a Shakespearean puppy prompt and supplies multiple presets whose effects are combined:

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
--header "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
--data '{
    "prompt": "a puppy dressed as a renaissance artist",
    "numVariations": 4,
    "style": {
        "presets": [
            "bw", "fantasy", "dramatic_light"
        ]
    }
}'
```

For the asynchronous job, the API returns a quick response like this:

```json
{
  "jobId": "<YOUR_JOB_ID>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

3. Use the `jobId` to retrieve the result:

NOTE

With `numVariations` set to four, the result is a four-image set for comparison, returned as four URLs.

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<YOUR_JOB_ID>" \
    -H "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
    -H "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
    -H "Content-Type: application/json"
```

The returned output should resemble the example shown below. The prompt for the renaissance puppy reflects every preset defined in the request.

**Sample output**

![A renaissance artist puppy generated with presets](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/1027f559cdb1509a61b34e2f2da9618ec431f2cb/src/pages/guides/images/puppy-renaissance-artist.jpeg)

