# AEIO_GetDimensions

`AEIO_GetDimensions`

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide video dimensions, and the scaling factor if needed, for the AEIO_InSpecH.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetDimensions(
  AEIO_BasicData            *basic_dataP,
  AEIO_InSpecH              inH,
  const AEIO_RationalScale  *rs0,
  A_long                    *width0,
  A_long                    *height0);
```

Input

No
