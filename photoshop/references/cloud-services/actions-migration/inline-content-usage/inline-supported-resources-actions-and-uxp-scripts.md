# Inline-supported resources: Actions and UXP scripts

These resource categories can be sent inline:

- **ActionJSON** - Inline JSON definitions for actions
- **UXP Scripts** - Inline JavaScript source

**Inline ActionJSON example**

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"gaussianBlur\",\"radius\":{\"_unit\":\"pixelsUnit\",\"_value\":5}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```

Note: Place **stringified JSON** in the `content` field; do not pass a JSON object or array directly. Convert the ActionJSON array to a string with `JSON.stringify()`.

**Inline UXP Script example**

```json
{
  "options": {
    "uxp": {
      "source": {
        "content": "const doc = app.activeDocument; doc.flatten();",
        "contentType": "application/javascript"
      }
    }
  }
}
```
