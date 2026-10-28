# Alignment fields

**V1:** `horizontalAlign` and `verticalAlign`

```json
{
  "type": "layer",
  "horizontalAlign": "center",
  "verticalAlign": "center"
}
```

**V2:** Placement alignment

```json
{
  "type": "layer",
  "operation": {
    "type": "add",
    "placement": {
      "type": "custom",
      "horizontalAlignment": "center",
      "verticalAlignment": "center"
    }
  }
}
```
