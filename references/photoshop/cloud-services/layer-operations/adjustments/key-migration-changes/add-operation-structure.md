# 2. Add Operation Structure

**V1:** Standalone `add` block

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "type": "adjustmentLayer",
  "add": {
    "insertTop": true
  },
  "adjustments": {/* additional content omitted */}
}
```

**V2:** Single `operation` block

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "type": "adjustment_layer",
  "operation": {
    "type": "add",
    "placement": {
      "type": "top"
    }
  },
  "adjustments": {/* additional content omitted */}
}
```
