# Panel

Commonly used to visually organize related controls.

- Set the text property to provide the title shown at the top of the panel.
- An optional borderStyle creation property determines how the panel border is drawn.

Panels can also serve as separators: a width of 0 produces a vertical line, while a height of 0 produces a horizontal line:

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel", [ 25, 15, 355, 130 ], "Messages" );
```
