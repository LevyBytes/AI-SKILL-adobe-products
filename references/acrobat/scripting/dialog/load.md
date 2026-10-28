# load

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Assigns values to dialog box elements from the object literal handed in. A unique 4-character string called an ItemID identifies each dialog box item.

Most often you invoke load from within the initialize method (refer to Dialog box handlers) on the object literal that app.execDialog receives, letting you seed the values of various dialog box elements beforehand.

Parameters

| Parameter | Description |
| --- | --- |
| object literal | Give every dialog box item you mean to change an entry in the object literal, keyed by its ItemID, whose contents are that element's setting. Where an element accepts several values (a list_box or popup, say), make the value an object literal that pairs the shown entry as label with a numeric value as contents. Likewise, for a hierarchical element (such as a hier_list_box), supply a set of nested object literals. Any numeric value above 0 selects the item; otherwise it stays unselected. |

Example: Look at the examples that follow app. execDialog.
