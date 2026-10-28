# listToolbarButtons

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

From Acrobat 6.0 onward, hands back an array of treeItem objects mapping a toolbar hierarchy (flyout toolbars included).

In releases before Acrobat 6.0, this method instead showed a list of toolbar button names in the console.

(Acrobat 8.0) When the Documents category of the Preferences dialog box has "Show each document in its own window (requires restart)" checked, the document window has to be empty for listToolbarButtons to return its array of TreeItem objects.

Returns

Array of TreeItem objects

Example: Send every toolbar name to the console.

```javascript
var toolbarItems = app.listToolbarButtons()
for( var i in toolbarItems)
    console.println(toolbarItems[i] + "n")
```

See also the hideToolbarButton method.
