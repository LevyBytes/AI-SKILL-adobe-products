# PF_CheckoutPath

`PF_CheckoutPath`

Acquires the PF_PathOutlinePtr for the path at the specified time.

Suite argument declaration (not a standalone call):

```cpp
PF_CheckoutPath(
  PF_ProgPtr         effect_ref,
  PF_PathID          unique_id,
  A_long             what_time,
  A_long             time_step,
  A_u_long           time_scale,
  PF_PathOutlinePtr  *pathPP);
```
