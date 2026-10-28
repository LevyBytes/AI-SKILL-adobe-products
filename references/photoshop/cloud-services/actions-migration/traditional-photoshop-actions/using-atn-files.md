# Using .atn files

**Key Differences:**

- Inputs now use `image.source.url` instead of the older `inputs[].href`
- Action references now live at `options.actions[].source.url` rather than `options.actions[].href`
- Outputs write the target URL inside a `destination` object
- The media field is now named `mediaType`, replacing `type`
- For external presigned URLs, `storageType` can be omitted; Azure or Dropbox sources still require it

**V1 request example:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/photoshopActions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "external"
    }
  ],
  "options": {
    "actions": [
      {
        "href": "<ACTION_FILE_URL>",
        "storage": "external"
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/vnd.adobe.photoshop"
    }
  ]
}'
```

**V2 request example:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "actions": [
      {
        "source": {
          "url": "<ACTION_FILE_URL>"
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```
