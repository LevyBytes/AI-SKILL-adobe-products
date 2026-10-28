# AEIO_GetActiveExtent

`AEIO_GetActiveExtent`

AEIO_Err_USE_DFLT_CALLBACK allowed. Fill the supplied A_LRect with the active extent of the file pixels at the specified time.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetActiveExtent(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  const A_Time    *tr,
  A_LRect         *extent);
```

Input

Yes
