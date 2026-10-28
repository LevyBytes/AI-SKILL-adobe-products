# Issue: Incorrect placement syntax

**Problem:** Placement still uses the V1 syntax.

```json
{
  "add": {
    "insertTop": true
  }
}
```

**Solution:** Put placement inside the operation object required by V2.

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
