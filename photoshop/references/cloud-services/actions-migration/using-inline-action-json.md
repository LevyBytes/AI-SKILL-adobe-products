# Using inline ActionJSON

**Key Differences:**

- ActionJSON now appears as inline `content` within the action source
- Include `contentType: "application/json"` with the inline source
- Provide ActionJSON as stringified JSON
- Aside from the inline content, the remaining structure matches the `.atn` pattern

**V1 request example:**

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/actionJSON \
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
    "actionJSON": [
      {
        "_obj": "convertMode",
        "to": {
          "_enum": "colorSpaceMode",
          "_value": "grayscale"
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "storage": "external",
      "type": "image/jpeg"
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
          "content": "[{\"_obj\":\"convertMode\",\"to\":{\"_enum\":\"colorSpaceMode\",\"_value\":\"grayscale\"}}]",
          "contentType": "application/json"
        }
      }
    ]
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/jpeg"
    }
  ]
}'
```
