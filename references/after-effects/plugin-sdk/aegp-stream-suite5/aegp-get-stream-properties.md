# AEGP_GetStreamProperties

`AEGP_GetStreamProperties`

Fetch the stream's flags, plus its minimum and maximum values (as floats) when the stream has mins and maxes.

StreamFlags values:

- AEGP_StreamFlag_NONE

- AEGP_StreamFlag_HAS_MIN

- AEGP_StreamFlag_HAS_MAX

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamProperties(
  AEGP_StreamRefH   streamH,
  AEGP_StreamFlags  *flagsP,
  A_FpLong          *minP0,
  A_FpLong          *maxP0);
```
