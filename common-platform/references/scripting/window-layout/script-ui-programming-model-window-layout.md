# ScriptUI programming model - Window layout

After a script creates a Window and adds UI elements, the layout is the arrangement of element locations, sizes, and spacing. Each UI element has location, size, and bounds properties that define position and dimensions. These values begin undefined. When a script uses Automatic layout, it should leave them undefined on both the main window and contained elements so the automatic layout mechanism can assign them.

Your script can read these values and, when it is not using auto-layout, assign them as shown here:

```javascript
win.location = [ 10, 50 ];
win.location = { x: 10, y: 50 };
win.location = "x:10, y:50";
```

```javascript
win.size = [ 200, 100 ];
win.size = { width: 200, height: 100 };
win.size = "width:200, height:100";
```

```javascript
win.size.height = 100;
```

```javascript
var dlg = new Window( "dialog", "Alert Box Builder", [ 100, 100, 480, 490] );
dlg.bounds = [ 100, 100, 480, 490 ];
dlg.bounds = { x: 100, y: 100, width: 380, height: 390 };
dlg.bounds = { left: 100, top: 100, right: 480, bottom: 490 };
dlg.bounds = "left:100, top:100, right:480, bottom:490";
```

Window dimensions describe the content region, the part directly controllable by a script. The real platform window is usually larger because title bars and borders are added by the host window system. For a Window, bounds covers only the content region. Use Window.frameBounds to get the frame bounds around that content region.
