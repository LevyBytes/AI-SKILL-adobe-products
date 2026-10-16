# Inline ActionJSON migration

**Inline ActionJSON pattern:**

V1:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "options": {
    "actionJSON": [
      {"_obj": "convertMode", "to": {/* additional content omitted */}}
    ]
  }
}
```

V2:

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"convertMode\",\"to\":{...}}]",
          "contentType": "application/json"
        }
      }
    ]
  }
}
```

**Important:** In V2, provide ActionJSON as stringified JSON.

Related: [Action-file migration](migrating-actions.md).
