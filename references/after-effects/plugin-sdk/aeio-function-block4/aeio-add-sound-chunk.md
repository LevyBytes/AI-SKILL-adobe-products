# AEIO_AddSoundChunk

`AEIO_AddSoundChunk`

Adds the supplied sound data to the output file.

Suite argument declaration (not a standalone call):

```cpp
AEIO_AddSoundChunk(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  const A_Time    *start,
  AEIO_SndWorldH  swH);
```

Output

Yes, for writing formats with audio
