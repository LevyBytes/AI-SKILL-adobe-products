# Missing placement for an add operation

For `add` operations, v2 expects placement to be declared directly; include the placement type every time.

```json
{
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  }
}
```
