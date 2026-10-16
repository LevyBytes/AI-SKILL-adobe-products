# Accessing child elements

Each element added to a container is appended to that container's children property. Access children through this array with a 0-based index. For non-container controls, the children collection is empty.

Here, the msgPnl panel was created first inside dlg, so index 0 of the parent's children property lets the script access that panel object and set its title text:

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel" );
dlg.children[ 0 ].text = "Messages";
```

When a creation property assigns a name to a new element, that child can be reached by name either in the parent's children array or as a direct property on the parent. For example, the earlier Button was named ok, so these references are valid:

```javascript
dlg.btnPnl.children[ "ok" ].text = "Build";
dlg.btnPnl.ok.text = "Build";
```

The parent window's findElement() method can also retrieve named elements:

```javascript
var myOkButton = dlg.findElement( "ok" );
```

For list controls of type list and dropdown, the items array provides access to child list-item objects.
