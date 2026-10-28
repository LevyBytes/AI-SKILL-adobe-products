# Executing a specific action by name

For an `.atn` file that bundles several named actions, set the optional `actionName` field when only one action should run. Without that field, the file's actions run sequentially from start to finish.

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
        },
        "actionName": "<ACTION_NAME>"
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

A single request may combine named actions with files that should run in full. The action array determines execution order:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "url": "<ACTION_FILE_URL>"
        },
        "actionName": "Resize to Web"
      },
      {
        "source": {
          "url": "<SECOND_ACTION_FILE_URL>"
        }
      }
    ]
  }
}
```

Here, the first file contributes only `"Resize to Web"`, and the second file contributes every action it contains.

Use `actionName` mainly with `.atn` files that contain multiple named actions. Inline actionJSON already states the exact operation set to execute.
