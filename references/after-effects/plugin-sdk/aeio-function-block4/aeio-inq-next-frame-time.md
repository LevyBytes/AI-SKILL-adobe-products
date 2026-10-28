# AEIO_InqNextFrameTime

`AEIO_InqNextFrameTime`

AEIO_Err_USE_DFLT_CALLBACK allowed.

Provide the next-frame time, in the source footage timebase, inside the AEIO_InSpecH.

Suite argument declaration (not a standalone call):

```cpp
AEIO_InqNextFrameTime(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  const A_Time    *base_time_tr,
  AEIO_TimeDir    time_dir,
  A_Boolean       *found0,
  A_Time          *key_time_tr0);
```

Input

Yes
