# AEGP_InsertMenuCommand

`AEGP_InsertMenuCommand`

Add a new menu command. Using nameZ = "-" will insert a separator.

menu_ID can be:

- AEGP_Menu_NONE

- AEGP_Menu_APPLE

- AEGP_Menu_FILE

- AEGP_Menu_EDIT

- AEGP_Menu_COMPOSITION

- AEGP_Menu_LAYER

- AEGP_Menu_EFFECT

- AEGP_Menu_WINDOW

- AEGP_Menu_FLOATERS

- AEGP_Menu_KF_ASSIST

- AEGP_Menu_IMPORT

- AEGP_Menu_SAVE_FRAME_AS

- AEGP_Menu_PREFS

- AEGP_Menu_EXPORT

- AEGP_Menu_ANIMATION

- AEGP_Menu_PURGE

- AEGP_Menu_NEW - Supported in CC and later

Locations can be set to a specific location in the menu or can be one assigned by After Effects:

- AEGP_MENU_INSERT_SORTED

- AEGP_MENU_INSERT_AT_BOTTOM

- AEGP_MENU_INSERT_AT_TOP

For AEGP_Menu_WINDOW, the BOTTOM and TOP options haven't been supported since CS4 and will return an error. We recommend SORTED.

Suite argument declaration (not a standalone call):

```cpp
AEGP_InsertMenuCommand(
  AEGP_Command  command,
  const A_char  *nameZ,
  AEGP_MenuID   menu_id,
  A_long        after_itemL);
```
