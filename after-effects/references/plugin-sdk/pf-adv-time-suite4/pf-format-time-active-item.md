# PF_FormatTimeActiveItem

`PF_FormatTimeActiveItem`

Given a time value and scale, returns a formatted string representing that time.

If durationB is TRUE, appropriate units will be appended.

Suite argument declaration (not a standalone call):

```cpp
PF_FormatTimeActiveItem(
  A_long      time_valueUL,
  A_u_long    time_scaleL,
  PF_Boolean  durationB,
  A_char      *time_buf);
```
