# AEGP_SetCompWorkAreaStartAndDuration

`AEGP_SetCompWorkAreaStartAndDuration`

Set the work area start and duration, in seconds. Undo-able.

One call to this function is sufficient to set the layer's in point and duration; it's not necessary to call it twice, once for each timespace.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetCompWorkAreaStartAndDuration(
  AEGP_CompH    compH,
  const A_Time  *startPT,
  const A_Time  *durationPT);
```
