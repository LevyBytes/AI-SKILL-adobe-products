# Above-layer insertion

**V1:**

```json
{
  "add": {
    "insertAbove": {
      "name": "Background"
    }
  }
}
```

**V2:**

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "above",
      "referenceLayer": {
        "name": "Background"
      }
    }
  }
}
```
