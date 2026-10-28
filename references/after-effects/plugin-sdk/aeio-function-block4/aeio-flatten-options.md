# AEIO_FlattenOptions

`AEIO_FlattenOptions`

For the supplied AEIO_InSpecH, return a flattened copy of the data stored in its options handle.

Use AEGP_GetInSpecOptionsHandle to obtain the unflattened options handle.

Suite argument declaration (not a standalone call):

```cpp
AEIO_FlattenOptions(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  AEIO_Handle     *flat_optionsPH);
```

Input

No
