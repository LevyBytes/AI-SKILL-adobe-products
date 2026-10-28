# AEIO_GetFlatOutputOptions

`AEIO_GetFlatOutputOptions`

Describe the output options for an AEIO_OutSpecH in an AEIO_Handle, using a disk-safe flat data structure that does not reference external memory.

Because output options must work across platforms, pay attention to byte ordering.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetFlatOutputOptions(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  AEIO_Handle     *optionsH);
```

Output

Yes
