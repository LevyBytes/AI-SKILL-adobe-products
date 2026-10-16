# AEGP_ClearInSpecNativeStartTime

`AEGP_ClearInSpecNativeStartTime`

New in CC. Clears the footage native start time.

Setting native start time to 0 with AEGP_SetInSpecNativeStartTime does not clear it.

That still indicates that a special native start time is supplied.

Suite argument declaration (not a standalone call):

```cpp
AEGP_ClearInSpecNativeStartTime(
  AEIO_InSpecH  inH);
```
