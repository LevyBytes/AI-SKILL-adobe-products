# toolbar

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | Acrobat Pro only | Boolean | R/W |

From a script, this controls the visibility of Acrobat's horizontal and vertical toolbars in Acrobat 9 and earlier. Under Acrobat X the same property toggles the Plugin Addon Tools panel docked along the right edge of the display area instead. Whether you are on Acrobat 9 (toolbar) or Acrobat X (tools panel), the property leaves external windows untouched — meaning an Acrobat view embedded inside a web browser keeps its toolbar or panel.

Example: Hide the toolbar.

```javascript
app.toolbar = false;
```
