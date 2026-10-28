# createChild

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Makes a fresh child bookmark at the place you point to.

See also the children property and the insertChild and remove methods.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The bookmark label the user reads over in the navigation panel. |
| cExpr | (optional) An expression that gets evaluated each time the user clicks the bookmark. This amounts to making a bookmark with a JavaScript action, of the sort the PDF Reference lays out. By default there is no expression. |
| nIndex | (optional) The 0-based slot in the bookmark's children array where the new child gets created. It defaults to 0. |

Example: Place a bookmark at the top of the bookmark panel that jumps you to the document's next page.

```javascript
this.bookmarkRoot.createChild("Next Page", "this.pageNum++");
```
