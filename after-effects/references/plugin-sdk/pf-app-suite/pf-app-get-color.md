# PF_AppGetColor

`PF_AppGetColor`

Retrieves the color for the specified UI element.

See AE_EffectSuites.h for a complete enumeration of available PF_App_Color values; basically any color in After Effects' UI can be retrieved.

CC adds several new PF_App_ColorType enum values for new elements that can be queried.

Note that in CS6, the color definitions are off from FILL_LIGHT downward.

For CS6 only, adjust the requested enum value by 3 when it is at or above `FILL_LIGHT`, then call the actual `PF_AppGetColor`.

Suite argument declaration (not a standalone call):

```cpp
PF_AppGetColor(
  PF_App_ColorType  color_type,
  PF_App_Color      *app_colorP);
```
