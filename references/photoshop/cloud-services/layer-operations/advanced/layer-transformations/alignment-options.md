# Alignment options

**V1:** `horizontalAlign` and `verticalAlign`

```json
{
  "name": "Centered Layer",
  "horizontalAlign": "center",
  "verticalAlign": "center"
}
```

**V2:** Uses placement alignment (for add/move operations)

```json
{
  "name": "Centered Layer",
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
