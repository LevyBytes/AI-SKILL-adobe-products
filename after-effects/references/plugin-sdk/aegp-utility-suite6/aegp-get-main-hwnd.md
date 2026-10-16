# AEGP_GetMainHWND

`AEGP_GetMainHWND`

Hands back After Effects' HWND; handy when you show your own dialog on Windows.

Skip After Effects' HWND and your modal dialog won't block the windows behind it, and pain will ensue.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetMainHWND(
  void  *main_hwnd);
```
