# addMenuItem

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Inserts a new item into a menu.

Note

From Acrobat X onward the set of top-level menus was trimmed down. Only File, Edit, View, Window, and Help remain at the top level in Acrobat X and later, so any earlier script that pointed at a top-level menu no longer present will fail to resolve that reference.

Note

Calling this method is only valid during application startup or a console event. The event object topic covers how JavaScript events work.

Companion methods include addSubMenu, execMenuItem, hideMenuItem, and listMenuItems.

Parameters

| Parameter | Description |
| --- | --- |
| cName | This is the menu item's language-independent name, which other methods (hideMenuItem among them) rely on to reach the item. |
| cUser | (optional) A language-dependent user string shown as the displayed menu item name. When cUser is omitted, cName serves as the displayed name instead. |
| cParent | The name identifying the parent menu item whose submenu receives the new entry. An exception is raised if cParent owns no submenu. Use listMenuItems to look up menu item names. |
| nPos | (optional) Where inside the submenu the new item lands. By default the item is appended at the submenu's end. Pass 0 to drop it at the very top of the submenu. From Acrobat 6.0 on, nPos may also hold a menu item's language-independent name. (Acrobat 6.0) Supplied as a string, nPos is read as a named menu item — a language-independent name — and that named item fixes where the new menu item is inserted. Further detail appears under bPrepend. A handful of alphabetized menus pay no attention to nPos. Those menus are these: the opening section under View > Navigation Panels; the opening section under View > Toolbars; and the Tools menu, where a numeric nPos goes unheeded. Drop an item into the Tools menu and it surfaces at that menu's top regardless. Pass nPos as a string pointing to another user-defined menu item, though, and it is respected. |
| cExec | A string expression evaluated the moment the user picks the menu item. - From Acrobat 7.0 onward, running JavaScript by way of a menu event is no longer privileged. Refer to Privileged context. |
| cEnable | (optional) A string expression evaluated to decide whether the menu item should be enabled. By default the item is always enabled. Have this expression set event.rc to false when the item should be disabled. |
| cMarked | (optional) A string expression that decides whether a check mark sits beside the menu item. Set event.rc to false in the expression to clear the check and true to apply it. By default the item carries no mark. |
| bPrepend | (optional, Acrobat 6.0) Fixes where the new menu item sits relative to the spot named by nPos. It defaults to false. When bPrepend is true, insertion follows these rules: - With nPos a string, the new item lands ahead of the named item. - With nPos a number, the new item lands ahead of the numbered item. - Should the named item be missing, or nPos fall outside the range from zero through the count of items inclusive, the new item becomes the menu's first entry rather than its last. bPrepend comes in handy when the named item heads up a group. |

Example 1: Place at the File menu's top an item whose alert dialog box shows the title of the active document, keeping that item enabled only while a document is open.

```javascript
app.addMenuItem({ cName: "Hello", cParent: "File",
    cExec: "app.alert(event.target.info.title, 3);",
    cEnable: "event.rc = (event.target != null);",
    nPos: 0
});
```

Example 2 (Acrobat 6.0)

Place two menu items in the File menu, one before the Close item and the other after the Close item.

```javascript
// Insert after the "Close" item (the default behavior)
app.addMenuItem( { cName: "myItem1", cUser: "My Item 1", cParent:
    "File", cExec: "_myProc1()", nPos: "Close"});
// Insert before the "Close" item, set bPrepend to true.
app.addMenuItem( { cName: "myItem2", cUser: "My Item 2", cParent:
    "File", cExec: "_myProc2()", nPos: "Close", bPrepend: true });
```
