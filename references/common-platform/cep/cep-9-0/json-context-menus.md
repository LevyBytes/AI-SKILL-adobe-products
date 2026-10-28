# CEP JSON context menus

If a JSON string is preferred for setting the context menu, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - Menu item ID. Use plain text.
- icon - Menu item icon path. This path is relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger images increase the menu item size.
- label - Menu item label. Localized languages are supported.
- enabled - Controls whether the item starts enabled or disabled. Default value is true.
- checkable - Controls whether the item can be checked/unchecked. Default value is false.
- checked - Sets whether the item starts checked or unchecked. Default value is false.
- Menu items with icons and checkable menu items cannot be on the same menu level. Icon items take precedence.

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

When developers do not define a context menu, CEP displays default entries such as Back, Forward, and View Source. That behavior matches earlier releases. If a developer supplies a context menu without any default id, CEP removes all default entries and displays only the custom entries. When one of these default ids is included, the default menu item for that id is displayed.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  The ids are case-insensitive.
2.  The quotation marks are not part of an id.
3.  Each id uses its associated default callback, and that callback cannot be customised.

Related: [CEP XML context menus](context-menu-configuration.md).
