# Generate your images

Now use the Custom Model ID to generate images with the custom model.

1. Call Firefly's Generate Image API to create product imagery. Because this request should use the custom model, include `x-model-version: image3_custom`; that header routes the request through custom-model generation.

cURL

```bash
curl --request POST 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-accept-mimetype: image/jpeg' \
--header 'x-model-version: image3_custom' \
--header "x-api-key: $CUSTOM_MODELS_CLIENT_ID" \
--header "Authorization: Bearer $CUSTOM_MODELS_ACCESS_TOKEN" \
--data "{
    \"numVariations\": 2,
    \"seeds\": [66080, 82683],
    \"size\": {\"width\": 2048,\"height\": 2048},
    \"prompt\": \"An almond seed in a warm setting\",
    \"contentClass\": \"photo\",
    \"visualIntensity\": 6,
    \"style\": {
        \"presets\": [\"painting\"],
        \"strength\": 50
    },
    \"promptBiasingLocaleCode\": \"en-US\",
    \"customModelId\": \"$CUSTOM_MODEL_ID\"
  }"
```

Python

[Complete Python helper](../../api-examples/python/generate_custom_model_images.py).

JavaScript

[Complete Node.js helper](../../api-examples/node/generate-custom-model-images.cjs).

Example async response:

```json
{
  "jobId": "urn:ff:jobs:EXAMPLE85125:2dc3bd5f-1606-4658-8781-111111111",
  "statusUrl": "https://firefly-epo852211.adobe.io/v3/status/urn:ff:jobs:EXAMPLE85125:2dc3bd5f-1606-4658-8781-111111111",
  "cancelUrl": "https://firefly-epo852211.adobe.io/v3/cancel/urn:ff:jobs:EXAMPLE85125:2dc3bd5f-1606-4658-8781-111111111"
}
```
