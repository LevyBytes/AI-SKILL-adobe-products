# Example 6: Status checking

**V1 Code:**

```shell

## Lightroom job

curl -X GET https://image.adobe.io/lrService/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"

## Photoshop job

curl -X GET https://image.adobe.io/pie/psdService/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```
