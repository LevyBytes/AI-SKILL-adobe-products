# PF_AppColorPickerDialog

`PF_AppColorPickerDialog`

Displays the After Effects color picker dialog (which may be the system color picker, depending on the user's preferences).

Will return PF_Interrupt_CANCEL if user cancels dialog. Returned color is in the project's working color space.

Suite argument declaration (not a standalone call):

```cpp
PF_AppColorPickerDialog(
  const A_char         *dialog_titleZ0,
  const PF_PixelFloat  *sample_colorP,
  PF_PixelFloat        *result_colorP);
```
