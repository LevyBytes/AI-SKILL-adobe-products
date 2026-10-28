# CEP JSON context menus

If you want to define the context menu with JSON instead, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - Menu item ID; use plain text.
- icon - Menu item icon path; resolve it relative to the extension root path. For best rendering, supply a 16 x 16px PNG icon because larger images enlarge the menu item.
- label - Menu item label; localized languages are supported.
- enabled - Controls whether the item is enabled or disabled. The default is true.
- checkable - Controls whether the item can be checked/unchecked. The default is false.
- checked - Indicates whether the item starts checked or unchecked. The default is false.
- Icon-bearing items and checkable items cannot appear together on the same menu level. Icon items take precedence.

JSON example:

```json
{
       "menu": [
           {
		   	   "id": "menuItemId1",
			   "label": "testExample1",
			   "enabled": true,
			   "checkable": true,
			   "checked": false,
               "icon": "./img/small_16X16.png"
		   },
		   {
			   "id": "menuItemId2",
               "label": "testExample2",
               "menu": [
                   {
                       "id": "menuItemId2-1",
                       "label": "testExample2-1",
                       "menu": [
                           {
                               "id": "menuItemId2-1-1",
                               "label": "testExample2-1-1",
                               "enabled": false,
                               "checkable": true,
                               "checked": true
                           }
                       ]
                   },
                   {
                       "id": "menuItemId2-2",
                       "label": "testExample2-2",
                       "enabled": true,
                       "checkable": true,
                       "checked": true
                   }
               ]
           },
           {
               "label": "---"
           },
           {
               "id": "menuItemId3",
               "label": "testExample3",
               "enabled": false,
               "checkable": true,
               "checked": false
           }
       ]
   }
```

When developers leave the context menu unset, CEP displays its default items, such as Back, Forward, and View Source, preserving prior-release behavior. If a custom context menu includes no default id, CEP removes every default item and displays only the custom ones. When one of the following default ids appears, CEP displays the default menu item associated with that id.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  Matching ignores case.
2.  Quotation marks are not part of any id.
3.  Each id uses its built-in default callback, and that callback cannot be customised.

Related: [CEP XML context menus](context-menu-configuration.md).
