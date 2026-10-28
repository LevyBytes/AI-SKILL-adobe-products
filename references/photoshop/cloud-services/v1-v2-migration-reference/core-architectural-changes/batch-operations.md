# 1. Batch operations

**V1 required several sequential calls:**

```shell

## Call 3

POST /lrService/edit
```

**V2 call in one request:**

```json
{
  "edits": {
    "autoTone": true,
    "autoStraighten": { "enabled": true },
    "light": { "exposure": 0.5 }
  }
}
```
