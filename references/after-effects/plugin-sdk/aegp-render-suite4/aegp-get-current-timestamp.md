# AEGP_GetCurrentTimestamp

`AEGP_GetCurrentTimestamp`

Reads back the project's current AEGP_TimeStamp.

The AEGP_TimeStamp gets refreshed any time an item is touched in a way that bears on rendering.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetCurrentTimestamp(
  AEGP_TimeStamp  *time_stampP);
```
