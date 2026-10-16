# Combined operations

With v1, applying multiple operations required separate requests. For instance, auto tone and auto straighten took three individual API calls.

```shell

### Step 3: Adjust exposure

curl -X POST https://image.adobe.io/lrService/applyEdits ...
```

In v2, one request can combine multiple operations.

```shell
curl -X POST https://photoshop-api.adobe.io/v2/edit \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "autoTone": true,
  "autoStraighten": {
    "enabled": true
  },
  "light": {
    "exposure": 1.2
  },
  "outputs": [...]
}'
```
