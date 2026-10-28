# cURL

```bash
curl --request POST 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'x-model-version: image3_custom' \
...
--data "{
    \"prompt\": \"An almond seed in a warm setting\",
    \"customModelId\": \"${CUSTOM_MODEL_ID}\"
  }"
```
