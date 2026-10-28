# Menu/Exec

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Running JavaScript that has been bound to a menu item is what fires this event. A user can introduce a menu item and tie JavaScript actions to it. For instance,

```javascript
app.addMenuItem({ cName: "Hello", cParent: "File",
    cExec: "app.alert('Hello',3);", nPos: 0});
```

During a menu event the script app.alert('Hello',3) runs. Two paths lead there:

The user picks the menu item from the user interface.

Programmatically, by executing app.execMenuItem("Hello") — perhaps inside a button field's mouse-up event.

The target of this event is whatever document is currently active, if one is open. It also defines the targetName property.

For the enable and marked proc of menu items, this event does heed the rc return code. (See app.addMenuItem's cEnabled and cMarked parameters.) Return false and the menu item is disabled or unmarked; return true and it is enabled or marked.
