# AEIO_GetTime

`AEIO_GetTime`

AEIO_Err_USE_DFLT_CALLBACK allowed. Provide the AEIO_InSpecH timebase.

Suite argument declaration (not a standalone call):

```cpp
AEIO_GetTime(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    inH,
  A_Time          *tr);
```

Here are the values we use internally for common timebases: - 29.97 fps: scale = 100; value= 2997; - 59.94 fps: scale = 50; value = 2997; - 23.976 fps: scale = 125; value = 2997; - 30 fps: scale = 1; value = 30; - 25 fps: scale = 1; value = 25;

Input

No
