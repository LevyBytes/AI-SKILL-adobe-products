# addSubMenu

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Attaches a menu item that carries its own submenu to the application.

Companion methods include addMenuItem, execMenuItem, hideMenuItem, and listMenuItems.

Note

From Acrobat X onward the set of top-level menus was trimmed down. Only File, Edit, View, Window, and Help remain at the top level in Acrobat X and later, so any earlier script that pointed at a top-level menu no longer present will fail to resolve that reference.

Note

Calling this method is only valid during application startup or a console event. The event object topic covers how JavaScript events work.

Companion methods include addSubMenu, execMenuItem, hideMenuItem, and listMenuItems.

| Parameter | Description |
| --- | --- |
| cName | The menu item's language-independent name. That language-independent name is what gives access to the item — for instance, via hideMenuItem. |
| cUser | (optional) A language-dependent user string shown as the displayed menu item name. When cUser is omitted, cName serves as the displayed name instead. |
| cParent | The name of the parent menu item that is to receive the new submenu. Menu item names can be looked up with listMenuItems. |
| nPos | (optional) Where inside the parent's submenu the new submenu is placed. The default appends it to the end of the parent's submenu. Pass 0 to set the submenu at the top of the parent's submenu. A handful of alphabetized menus pay no attention to nPos. Those menus are these: the opening section under View > Navigational Panels; the opening section under View > Toolbars; and the Tools menu, where a numeric nPos goes unheeded. Drop an item into the Tools menu and it surfaces at that menu's top regardless. When nPos arrives as a string pointing to another user-defined menu item, however, it is respected. |

Example: See the newDoc method.
