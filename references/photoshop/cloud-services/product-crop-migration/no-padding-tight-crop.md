# 1. No padding (tight crop)

Either remove the `canvasSize` action or use 0 for its dimensions:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "_obj": "canvasSize",
  "height": {
    "_unit": "pixelsUnit",
    "_value": 0
  },
  /* additional content omitted */
}
```
