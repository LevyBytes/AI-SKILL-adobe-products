# PF_ABORT

`PF_ABORT`

Returns non-zero if the user has cancelled; return that value to After Effects.

Wrap your render routine in a "while abort has not been requested" while loop.

```cpp
PF_Err PF_ABORT (PF_InData *in_data);
```
