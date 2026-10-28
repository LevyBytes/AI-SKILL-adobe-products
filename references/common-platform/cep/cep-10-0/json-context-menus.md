# CEP JSON context menus

To configure a context menu from a JSON string, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - identifies the menu item. Use plain text for the value.
- icon - gives the menu item's icon path, relative to the extension root path. For best rendering, provide a 16 x 16px PNG icon; larger files increase the menu item's size.
- label - provides the text shown for the menu item and can be localized.
- enabled - controls whether the item is available. The default value is true.
- checkable - controls whether the item can toggle between checked and unchecked. The default value is false.
- checked - controls whether the item starts checked. The default value is false.
- At the same menu level, icon items and checkable items cannot appear together; icon items take precedence.

Here is a JSON example.

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

When no context menu is set, CEP displays the default items, such as Back, Forward, and View Source, preserving behavior from earlier releases. If the supplied context menu includes none of the default ids, CEP removes every default item and displays only the customized items. When any id below is present, CEP shows the matching default menu item.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  Matching ignores case.
2.  Quotation marks are not included in an id.
3.  Each id uses its associated default callback, and that callback cannot be customized.

Related: [CEP XML context menus](context-menu-configuration.md).
