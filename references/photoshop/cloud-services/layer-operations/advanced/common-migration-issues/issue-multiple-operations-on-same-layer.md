# Issue: multiple operations on same layer

**Problem:** V1 could combine edit + move in one layer block

**Solution:** In V2, each layer reference selects a single operation type

```json
{
  "name": "Layer",
  "opacity": 80,
  "operation": {
    "type": "move",
    "placement": {
      "type": "top"
    }
  }
}
```

Use move as the operation when movement and property edits must be combined
