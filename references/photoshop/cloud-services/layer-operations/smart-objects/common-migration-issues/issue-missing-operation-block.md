# Issue: Missing operation block

**Problem:** V2 needs an explicit operation when a request creates layers.

**Solution:** Include an operation block every time you add a layer.

```json
{
  "type": "smart_object_layer",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "smartObject": {
    "smartObjectFile": {
      "source": {
        "url": "<SMART_OBJECT_URL>"
      }
    }
  }
}
```
