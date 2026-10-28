# AEIO_CloseSourceFiles

`AEIO_CloseSourceFiles`

Closes or opens, depending on closeB, the source files for an AEIO_InSpecH.

During Collect Files, the AEIO is first asked to close its source files and then to open them again.

Suite argument declaration (not a standalone call):

```cpp
AEIO_CloseSourceFiles(
  AEIO_BasicData  *basic_dataP,
  AEIO_InSpecH    seqH,
  A_Boolean       closeB);
```

- TRUE for close - FALSE for open.

Input

Yes
