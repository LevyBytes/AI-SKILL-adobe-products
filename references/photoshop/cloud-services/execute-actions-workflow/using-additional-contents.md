# Using additional contents

Use placeholders when compositing several images. Put `__ADDITIONAL_CONTENTS_PATH_{index}__` in action JSON or UXP code; `{index}` maps to the zero-based position inside `additionalContents`.

```json
{
  "image": {
    "source": {
      "url": "https://your-storage.com/background.jpg"
    }
  },
  "options": {
    "additionalContents": [
      {
        "source": {
          "url": "https://your-storage.com/logo.png"
        }
      },
      {
        "source": {
          "url": "https://your-storage.com/overlay.png"
        }
      }
    ],
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"placeEvent\",\"null\":{\"_kind\":\"local\",\"_path\":\"__ADDITIONAL_CONTENTS_PATH_0__\"}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```
