# AEGP_SetComment

`AEGP_SetComment`

RQItemSuite4 adds Unicode support for this call; it is available in 14.1.

Sets the comment attached to the referenced AEGP_RQItemRefH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetComment(
  AEGP_RQItemRefH    rq_itemH,
  const A_UTF16Char  *commentZ);
```
