# Below-layer insertion

**V1:**

```json
{
  "add": {
    "insertBelow": {
      "id": 123
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
      "type": "below",
      "referenceLayer": {
        "id": 123
      }
    }
  }
}
```
