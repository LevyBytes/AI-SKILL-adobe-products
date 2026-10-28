# AEGP_SetInSpecOptionsHandle

`AEGP_SetInSpecOptionsHandle`

Sets options data for the supplied AEIO_InSpecH.

Allocation must use the Memory Suite.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetInSpecOptionsHandle(
  AEIO_InSpecH inH,
  void *optionsPV,
  void **old_optionsPPV);
```
