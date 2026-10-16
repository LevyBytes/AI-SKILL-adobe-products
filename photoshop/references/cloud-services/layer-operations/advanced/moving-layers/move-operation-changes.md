# Move operation changes

**V1:** Separate `move` block

```json
{
  "name": "Layer to Move",
  "move": {
    "insertTop": true
  }
}
```

**V2:** Unified `operation` block

```json
{
  "name": "Layer to Move",
  "operation": {
    "type": "move",
    "placement": {
      "type": "top"
    }
  }
}
```
