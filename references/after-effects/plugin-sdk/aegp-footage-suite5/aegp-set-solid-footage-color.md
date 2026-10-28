# AEGP_SetSolidFootageColor

`AEGP_SetSolidFootageColor`

Sets the color of a solid. Undo-able.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetSolidFootageColor(
  AEGP_ItemH itemH,
  A_Boolean proxyB,
  const AEGP_ColorVal *colorP);
```

If proxyB is TRUE, the proxy solid's color is set.
