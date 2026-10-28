# AEIO_StartAdding

`AEIO_StartAdding`

Prepares to add frames to the output file.

This is a useful point to create output file or files on disk and write header information into them. It is also the first chance to allocate pixel buffers from valid output spec values.

Suite argument declaration (not a standalone call):

```cpp
AEIO_StartAdding(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  A_long          flags);
```

Output

Yes, for writing formats that support multiple frames
