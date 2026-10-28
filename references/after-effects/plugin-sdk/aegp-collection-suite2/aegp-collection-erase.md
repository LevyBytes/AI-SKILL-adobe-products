# AEGP_CollectionErase

`AEGP_CollectionErase`

Removes an index'd item (or items) from a given collection. NOTE: this range is exclusive, like STL iterators. To erase the first item, you would pass 0 and 1, respectively.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CollectionErase(
  AEGP_Collection2H  collectionH,
  A_u_long           index_firstL,
  A_u_long           index_lastL);
```
