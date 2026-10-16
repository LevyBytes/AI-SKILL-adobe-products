# AEGP_HasItemChangedSinceTimestamp

`AEGP_HasItemChangedSinceTimestamp`

Tells you whether an AEGP_ItemH's video has changed since the supplied AEGP_TimeStamp.

Note: audio changes are not tracked by this.

Suite argument declaration (not a standalone call):

```cpp
AEGP_HasItemChangedSinceTimestamp(
  AEGP_ItemH            itemH,
  const A_Time          *start_timeP,
  const A_Time          *durationP,
  const AEGP_TimeStamp  *time_stampP,
  A_Boolean             *changedPB);
```
