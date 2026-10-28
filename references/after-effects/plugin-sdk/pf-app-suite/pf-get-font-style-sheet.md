# PF_GetFontStyleSheet

`PF_GetFontStyleSheet`

Retrieves font style sheet information for the fonts used in After Effects' UI.

Trivia: The font used in After Effects' UI starting in 15.0 is Adobe Clean.

Before that, it was Tahoma on Windows and Lucida Grande on macOS X.

Suite argument declaration (not a standalone call):

```cpp
PF_GetFontStyleSheet(
  PF_FontStyleSheet  sheet,
  PF_FontName        *font_nameP0,
  A_short            *font_numPS0,
  A_short            *sizePS0,
  A_short            *stylePS0);
```
