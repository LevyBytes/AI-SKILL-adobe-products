# AEGP_GetNextRQItem

`AEGP_GetNextRQItem`

Gets the following AEGP_RQItemRefH for iteration.

To obtain the first AEGP_RQItemRefH, supply RQ_ITEM_INDEX_NONE as current_rq_itemH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetNextRQItem(
  AEGP_RQItemRefH  current_rq_itemH,
  AEGP_RQItemRefH  *next_rq_itemPH);
```
