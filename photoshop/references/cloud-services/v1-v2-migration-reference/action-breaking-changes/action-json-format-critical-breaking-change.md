# ActionJSON format (critical breaking change)

V1 stored `options.actionJSON` as an **array of inline JSON objects**. V2 instead expects a **stringified JSON string** under `options.actions[].source.content` with `contentType: "application/json"`.

> **Array order controls execution.** Photoshop runs actions sequentially, so migration must keep the V1 `options.actionJSON` order exactly when building the V2 stringified content.

V1

```json
{
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
  }
}
```

V2

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
