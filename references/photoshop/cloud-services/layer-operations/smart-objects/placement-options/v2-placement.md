# V2 Placement

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```

For placement relative to another layer, set `"above"`, `"below"`, or `"into"` and provide `referenceLayer` as `{"name": "..."}` or `{"id": 123}`.

Placement patterns are covered in [Image Layer Operations](../../../layer-operations-migration/image-layer-operations.md).
