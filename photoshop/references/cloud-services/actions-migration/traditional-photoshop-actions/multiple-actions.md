# Multiple actions

With the v2 API, one request can run several actions one after another. Each request permits up to 10 actions, and ordering follows the submitted list.

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
          "url": "<ACTION_1_URL>"
        }
      },
      {
        "source": {
          "url": "<ACTION_2_URL>"
        }
      },
      {
        "source": {
          "url": "<ACTION_3_URL>"
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
