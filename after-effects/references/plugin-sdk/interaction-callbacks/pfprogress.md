# PF_PROGRESS

`PF_PROGRESS`

Displays a progress bar during processing; current and total describe the percentage complete.

Returns non-zero if you should suspend or abort your current processing; return that value to After Effects.

Call once per scanline, unless your effect is very slow.

If total is 0, PF_ABORT is used instead (presenting the user with different choices).

```cpp
PF_Err PF_PROGRESS (
  PF_InData  *in_data,
  A_long     current,
  A_long     total );
```
