# Change to percentage-based padding

Percentage-based padding is also available by changing `_unit`:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "_obj": "canvasSize",
  "height": {
    "_unit": "percentUnit",
    "_value": 10
  },
  /* additional content omitted */
  "width": {
    "_unit": "percentUnit",
    "_value": 10
  }
}
```

The result adds 10% padding along each side.
