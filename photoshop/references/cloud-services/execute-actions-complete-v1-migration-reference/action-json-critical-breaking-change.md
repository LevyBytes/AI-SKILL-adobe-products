# 4. ActionJSON (critical breaking change)

**ActionJSON now uses an entirely different representation.** V1 kept `options.actionJSON` as inline JSON objects inside an array. V2 expects ActionJSON to arrive as a **stringified JSON string** in `options.actions[].source.content`, with `contentType: "application/json"` included.

|  | V1 | V2 |
| --- | --- | --- |
| Field | `options.actionJSON[]` | `options.actions[].source.content` |
| Format | Inline JSON array of objects | **Stringified** JSON string |
| contentType | Not required | `"application/json"` required |

**V1:**

```json
{
  "options": {
    "actionJSON": [
      { "_obj": "convertMode", "to": { "_enum": "colorSpaceMode", "_value": "grayscale" } }
    ]
  }
}
```

**V2:**

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"convertMode\",\"to\":{\"_enum\":\"colorSpaceMode\",\"_value\":\"grayscale\"}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```
