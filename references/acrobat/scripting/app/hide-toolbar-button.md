# hideToolbarButton

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | Yes | All |

Takes the named toolbar button off the "Add-on" toolbar in Acrobat 9 and earlier. Under Acrobat X, it instead conceals the named button on the Plugin Addon Tools panel along the right edge of the display area.

Note

Execution is confined to a console event or to application initialization. See the event object for a discussion of JavaScript events.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name of the toolbar button to remove. Toolbar item names can be discovered with listToolbarButtons. |

Example: A script like the one below sits in a file called myConfig.js, dropped into one of the folder-level JavaScript folders.

```javascript
app.hideToolbarButton("Hand");
```

The "Hand" icon will then be absent the next time the viewer launches.
