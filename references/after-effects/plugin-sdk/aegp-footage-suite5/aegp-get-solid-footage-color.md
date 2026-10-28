# AEGP_GetSolidFootageColor

`AEGP_GetSolidFootageColor`

Returns the color of a given solid. Returns an error if the AEGP_ItemH is not a solid.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetSolidFootageColor(
  AEGP_ItemH     itemH,
  A_Boolean      proxyB,
  AEGP_ColorVal  *colorP);
```

If proxyB is TRUE, the proxy solid's color is retrieved.
