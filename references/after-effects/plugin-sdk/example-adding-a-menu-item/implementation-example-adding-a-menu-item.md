# Implementation - Example: Adding A Menu Item

Inside your entry point function, call `AEGP_GetUniqueCommand`() from the Command Suite to have After Effects give you a command ID to hand to `AEGP_InsertMenuCommand`. Assign a distinct ID to every menu item you create.

By way of `AEGP_RegisterSuite`'s `AEGP_RegisterCommandHook`(), let After Effects know which function to invoke once your menu item(s) get picked. The function you sign up through `AEGP_RegisterUpdateMenuHook`() is what enables and disables those items. Skip registering a menu-updating function and your menu item(s) stay disabled for good.

However many menu items you tack on, just one CommandHook gets registered. Inside it, work out which item the user picked (from the command ID), lean on the AEGP PICA suite functions to read the project's present state, and respond to fit. Keyframing plug-ins, say, might keep their menu items grayed out until a (keyframe-able) parameter stream shows up in the current selection.
