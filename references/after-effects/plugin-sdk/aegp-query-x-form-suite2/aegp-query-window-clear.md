# AEGP_QueryWindowClear

`AEGP_QueryWindowClear`

Returns the AEGP_PlatformWindowRef and A_Rect that should be cleared for the supplied PR_QueryContextH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_QueryWindowClear(
  PR_QueryContextH        q_contextH,
  AEGP_PlatformWindowRef  *window_refP,
  A_LegacyRect            *boundsPR);
```
