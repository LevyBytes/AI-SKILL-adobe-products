# AEIO_UserOptionsDialog

`AEIO_UserOptionsDialog`

Displays an output settings dialog; select TIFF output in After Effects to see when this dialog appears.

Store the resulting information in an options handle by calling AEGP_SetInSpecOptionsHandle.

Suite argument declaration (not a standalone call):

```cpp
AEIO_UserOptionsDialog(
  AEIO_BasicData  *basic_dataP,
  AEIO_OutSpecH   outH,
  PF_EffectWorld  *sample0,
  A_Boolean       *interacted0);
```

Output

No
