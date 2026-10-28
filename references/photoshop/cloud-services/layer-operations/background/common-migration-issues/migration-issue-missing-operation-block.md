# Migration issue: missing operation block

**Symptom:** An edit request omits an explicit `operation` type.

**Correction:** Include an `operation` block and set its type directly.

```json
{
  "operation": {
    "type": "edit"
  }
}
```
