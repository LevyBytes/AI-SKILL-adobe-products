# AEGP_SetSolidFootageDimensions

`AEGP_SetSolidFootageDimensions`

Sets the dimensions of a solid. Undo-able.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetSolidFootageDimensions(
  AEGP_ItemH  itemH,
  A_Boolean   proxyB,
  A_long      widthL,
  A_long      heightL);
```

If proxyB is TRUE, the proxy solid's dimensions are modified. Returns an error if the item isn't a solid.
