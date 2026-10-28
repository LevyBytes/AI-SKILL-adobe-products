# With external/hosted storage

For external or hosted storage, retrieve the manifest from the URL returned by the status response:

```shell

## Get job status

curl -X GET \
  https://photoshop-api.adobe.io/v2/status/{jobId} \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"

## Response includes output URL

{
  "jobId": "...",
  "status": "succeeded",
  "result": {
    "outputs": [
      {
        "url": "<MANIFEST_URL>"
      }
    ]
  }
}

## Download manifest

curl -X GET "<MANIFEST_URL>" -o manifest.json
```
