# Operation specification

**V1:** The layer entry keeps operation data in separate sibling objects:

```json
{
  "type": "textLayer",
  "name": "My Layer",
  "add": { "insertTop": true },
  "text": { "content": "Hello" }
}
```

**V2:** Unified `operation` object:

```json
{
  "type": "text_layer",
  "name": "My Layer",
  "operation": { "type": "add", "placement": { "type": "top" } },
  "text": { "content": "Hello" }
}
```
