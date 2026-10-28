# Additional contents in actions

ActionJSON may point at additional contents through placeholders. This pattern helps when an action must composite several assets or refer to more than one content item.

**How It Works:**

1. Put the extra items in the `options.additionalContents` array. Each request supports a maximum of 25 additional contents.
2. In ActionJSON, refer to those entries with `__ADDITIONAL_CONTENTS_PATH_0__`, `__ADDITIONAL_CONTENTS_PATH_1__`, etc.
3. Each placeholder's number maps to the same 0-based position in the array.

**Example:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<BASE_IMAGE_URL>"
    }
  },
  "options": {
    "additionalContents": [
      {
        "source": {
          "url": "<OVERLAY_IMAGE_URL>"
        }
      },
      {
        "source": {
          "url": "<BACKGROUND_IMAGE_URL>"
        }
      }
    ],
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"placeEvent\",\"null\":{\"_path\":\"__ADDITIONAL_CONTENTS_PATH_0__\",\"_kind\":\"local\"}}]",
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
