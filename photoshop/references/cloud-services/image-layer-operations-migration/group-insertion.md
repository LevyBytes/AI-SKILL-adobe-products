# Group insertion

**V1:**

```json
{
  "add": {
    "insertInto": {
      "name": "My Group"
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
      "type": "into",
      "referenceLayer": {
        "name": "My Group"
      }
    }
  }
}
```
