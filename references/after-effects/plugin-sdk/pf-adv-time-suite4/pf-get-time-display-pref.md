# PF_GetTimeDisplayPref

`PF_GetTimeDisplayPref`

Returns the starting frame number (specified by the user in composition settings), and the composition's time display preferences.

Updated in 14.2 to support higher frame rates.

Suite argument declaration (not a standalone call):

```cpp
PF_GetTimeDisplayPref(
  PF_TimeDisplayPref2  *tdp,
  A_long               *starting_num);
  typedef              struct {
  A_char               display_mode;
  A_long               framemax;
  A_long               frames_per_foot;
  A_char               frames_start;
  A_Boolean            nondrop30B;
  A_Boolean            honor_source_timecodeB;
  A_Boolean            use_feet_framesB;
  } PF_TimeDisplayPrefVersion3;
```
