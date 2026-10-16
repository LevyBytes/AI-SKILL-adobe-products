# listMenuItems

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

From Acrobat 6.0 onward, hands back an array of TreeItem objects that maps out a menu hierarchy.

In releases before Acrobat 6.0, this method would instead dump the menu item names into the console as a list.

See also addMenuItem, addSubMenu, execMenuItem, and hideMenuItem.

Returns

Array of TreeItem objects.

TreeItem Object

A generic JavaScript object standing for a menu or toolbar item hierarchy. Both app.listMenuItems and app.listToolbarButtons return an array of these (as of Acrobat 6.0). Its properties are as follows.

| Property | Description |
| --- | --- |
| cName | Holds the name of the toolbar button or menu item. |
| oChildren | (optional) An array of treeItem objects that hold the flyout buttons or submenus. |

Example 1: Send every menu item name to the console.

```javascript
var menuItems = app.listMenuItems()
for( var i in menuItems)
    console.println(menuItems[i] + "n")
```

Example 2: Print all menu items to the console in a dressed-up layout.

```javascript
function FancyMenuList(m, nLevel)
{
    var s = "";
    for (var i = 0; i < nLevel; i++) s += " ";
    console.println(s + "+-" + m.cName);
    if ( m.oChildren != null )
        for ( var i = 0; i < m.oChildren.length; i++ )
            FancyMenuList(m.oChildren[i], nLevel + 1);
}
var m = app.listMenuItems();
for ( var i=0; i < m.length; i++ ) FancyMenuList(m[i], 0);
```
