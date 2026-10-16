# AEGP_CanAddStream

`AEGP_CanAddStream`

Reports whether, right now, the API will let you add a stream.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CanAddStream(
  AEGP_StreamRefH  group_streamH,
  const A_char     *match_nameZ,
  A_Boolean        *can_addPB);
```
