# Find a custom model

The campaign brief calls for clean, natural, cozy, and comfortable visuals. The generated campaign imagery should reflect those traits.

Check whether an appropriate custom model is available.

1. Call the endpoint below to list the models available to the account.

cURL

```bash
curl --request GET 'https://firefly-api.adobe.io/v3/custom-models' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $CUSTOM_MODELS_CLIENT_ID" \
--header "Authorization: Bearer $CUSTOM_MODELS_ACCESS_TOKEN"
```

Python

[Complete Python helper](../../api-examples/python/list_custom_models.py).

JavaScript

[Complete Node.js helper](../../api-examples/node/list-custom-models.cjs).

Returned body example:

```json
{
  "custom_models": [
    {
      "version": "1",
      "assetName": "Warm Custom Model.ffcustommodel",
      "size": 16513991265,
      "etag": "\"e7ee78220f4d46ceb766758e0e300a51\"",
      "trainingMode": "style",
      "assetId": "urn:aaid:sc:VA6C2:bc1f46cd-be98-4a7b-9ffe-1111111111",
      "mediaType": "application/vnd.adobe.ffmodel+dcx",
      "createdDate": 1733928288871,
      "modifiedDate": 1733928294741,
      "publishedState": "published",
      "baseModel": {
        "name": "clio_v2",
        "version": "2.0.0"
      },
      "samplePrompt": "A bean generated in a warm setting with brown colours",
      "displayName": "Warm Custom Model",
      "conceptId": ""
    }
  ],
  "_links": {
    "page": {
      "href": "/v3/custom-models?start={start}&limit={limit}",
      "rel": "page",
      "templated": true
    }
  },
  "total_count": 1
}
```

The response shows a promising option: Warm Custom Model. Use that model for image generation.

2. Using a custom model requires the custom model ID. In the response object, locate the ID in `assetId`.
3. Export the ID for later requests.

```bash
export CUSTOM_MODEL_ID='YOUR_CUSTOM_MODEL_ASSET_ID'
```

Replace the placeholders with the credentials or response values described above.
