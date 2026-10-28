# AEGP_SetInSpecDuration

`AEGP_SetInSpecDuration`

Sets the `AEIO_InSpecH` duration.

Note

As of 5.5, call this even for frame-based file formats.

If `A_Time`.scale is not set to a nonzero value, the file or files will not import.

A future version will fix this.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetInSpecDuration(
  AEIO_InSpecH  inH,
  const A_Time  *durationP);
```
