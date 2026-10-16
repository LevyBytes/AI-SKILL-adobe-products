# CEP JSON context menus

To set the context menu with a JSON string instead, call `setContextMenuByJSON`.

For `setContextMenuByJSON`, the "menu" parameter is a JSON string.

- id - Menu item ID; use plain text.
- icon - Menu item icon path; supply a path relative to the extension root path. For best display, provide a 16 x 16px PNG icon because larger dimensions increase the menu item's size.
- label - Menu item label; localized languages are supported.
- enabled - Controls whether the item is enabled or disabled. The default value is true.
- checkable - Controls whether the item can be checked/unchecked. The default value is false.
- checked - Controls whether the item is checked or unchecked. The default value is false.
- Menu items with icons and checkable items cannot appear together on the same menu level. Items with icons take precedence over checkable items.

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

When developers do not set a context menu, CEP displays the default items such as Back, Forward, and View Source. This preserves compatibility with earlier releases. If a custom context menu contains no default id, CEP removes all default items and displays only the custom items. When one of the default ids below is supplied, the matching default menu item is shown.

| id |
| --- |
| "print" |
| "back" |
| "view source" |
| "forward" |

Notes:

1.  Matching ignores case.
2.  Quotation marks are not part of an id.
3.  The default callback associated with each id is used and cannot be customised.

Related: [CEP XML context menus](context-menu-configuration.md).
