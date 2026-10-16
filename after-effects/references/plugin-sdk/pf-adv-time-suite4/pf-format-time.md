# PF_FormatTime

`PF_FormatTime`

Contextualizes the formatted time string for the given PF_InData and PF_EffectWorld (i.e., layer time).

Suite argument declaration (not a standalone call):

```cpp
PF_FormatTime(
  PF_InData       *in_data,
  PF_EffectWorld  *world,
  A_long          time_valueUL,
  A_u_long        time_scaleL,
  PF_Boolean      durationB,
  A_char          *time_buf);
```
