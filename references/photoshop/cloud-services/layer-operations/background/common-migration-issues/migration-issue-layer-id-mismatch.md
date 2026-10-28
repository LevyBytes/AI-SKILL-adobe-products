# Migration issue: layer ID mismatch

**Symptom:** A request tries to edit the background layer by using ID `-1`.

**Correction:** For background-layer operations, take the `id` value from the manifest response.

```json
{
  "type": "background_layer",
  "id": 0,
  "operation": {
    "type": "edit"
  }
}
```
