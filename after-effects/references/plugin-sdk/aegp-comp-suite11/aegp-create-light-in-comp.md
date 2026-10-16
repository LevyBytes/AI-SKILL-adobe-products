# AEGP_CreateLightInComp

`AEGP_CreateLightInComp`

Creates and adds a light to the specified composition. Once created, you can manipulate the light's parameter streams using the AEGP Stream Suite.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CreateLightInComp(
  const A_UTF16Char  *utf_nameZ,
  A_FloatPoint       center_point,
  AEGP_CompH         parent_compH,
  AEGP_LayerH        *new_lightPH);
```
