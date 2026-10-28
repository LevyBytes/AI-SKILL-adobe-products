# Delete operation changes

**V1:** `delete: {}` block (can include `includeChildren`)

```json
{
  "name": "Group Layer",
  "delete": {
    "includeChildren": true
  }
}
```

**V2:** `operation: {type: "delete"}` (verify child-layer behavior in the V2 documentation)

```json
{
  "name": "Group Layer",
  "operation": {
    "type": "delete"
  }
}
```
