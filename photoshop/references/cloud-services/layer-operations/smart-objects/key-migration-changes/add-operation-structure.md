# 4. Add Operation Structure

**V1:** `add` appears as its own block

```json
{
  "type": "smartObject",
  "add": {
    "insertTop": true
  }
}
```

**V2:** put the add details in `operation` and include the `smartObject` data

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
        "url": "<SMART_OBJECT_SOURCE_URL>"
      }
    }
  }
}
```
