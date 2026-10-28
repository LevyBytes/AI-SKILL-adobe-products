# AEIO_AddFrame

`AEIO_AddFrame`

Adds one or more frames to the output file. You may provide a function pointer that is called if rendering is interrupted by the user.

Suite argument declaration (not a standalone call):

```cpp
AEIO_AddFrame(
  AEIO_BasicData       *basic_dataP,
  AEIO_OutSpecH        outH,
  A_long               frame_index,
  A_long               frames,
  PF_EffectWorld       *wP,
  const A_LPoint       *origin0,
  A_Boolean            was_compressedB,
  AEIO_InterruptFuncs  *inter0);
```

Output

Yes, for writing formats that support multiple frames
