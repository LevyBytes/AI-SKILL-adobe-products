# AEGP_GetStreamIsModified

`AEGP_GetStreamIsModified`

Reports whether the named AEGP_StreamRefH has been modified.

Note: you can get the identical result straight from the After Effect user interface, by selecting the composition and pressing "UU".

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetStreamIsModified(
  AEGP_StreamRefH  streamH,
  A_Boolean        *modifiedPB);
```
