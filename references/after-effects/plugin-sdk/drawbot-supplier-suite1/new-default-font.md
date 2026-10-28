# NewDefaultFont

NewDefaultFont

Create a new font with default settings.

You can pass the default font size from GetDefaultFontSize.

Release this using ReleaseObject from Drawbot_SupplierSuite.

Suite argument declaration (not a standalone call):

```cpp
NewDefaultFont(
  DRAWBOT_SupplierRef  in_supplier_ref,
  float                in_font_sizeF,
  DRAWBOT_FontRef      *out_fontP);
```
