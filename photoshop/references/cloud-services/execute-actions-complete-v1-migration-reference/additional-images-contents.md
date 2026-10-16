# 5. Additional images / contents

**Use `options.additionalContents` in place of `options.additionalImages`.** ActionJSON placeholder text was revised as part of that rename. V2 continues to accept `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_X` for older clients, but new payloads should use `__ADDITIONAL_CONTENTS_PATH_X__`.

|  | V1 | V2 |
| --- | --- | --- |
| Field name | `options.additionalImages[]` | `options.additionalContents[]` |
| Item structure | `{href, storage}` | `{source: {url}}` |
| Placeholder (ActionJSON) | `ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0` | `__ADDITIONAL_CONTENTS_PATH_0__` |
| Max items | 25 | 25 |

**V1:**

```json
{
  "options": {
    "additionalImages": [{ "href": "<OVERLAY_URL>", "storage": "external" }],
    "actionJSON": [
      { "_obj": "placeEvent", "null": { "_path": "ACTION_JSON_OPTIONS_ADDITIONAL_IMAGES_0" } }
    ]
  }
}
```

**V2:**

```json
{
  "options": {
    "additionalContents": [{ "source": { "url": "<OVERLAY_URL>" } }],
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"placeEvent\",\"null\":{\"_path\":\"__ADDITIONAL_CONTENTS_PATH_0__\",\"_kind\":\"local\"}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```
