# ScriptUI programming model - Creating a window

ScriptUI provides these window types:

- Modal dialog box: Keeps focus while displayed and blocks activity in other application windows until closed.
- Floating palette: Also called modeless dialog, leaves other application windows available while it is shown. (Adobe Photoshop® cannot create palette windows from scripts.)
- Main window: Appropriate for an application's main window. (Script developers normally do not create main windows for Adobe applications. Photoshop does not support script creation of main windows.)

Create a new window with the Window constructor function. Pass the desired window type to the constructor. Use "dialog" for a modal dialog; use "palette" for a modeless dialog or floating palette. Optional arguments can set the initial window title and bounds, or you can assign location and size separately.

The next example creates an empty dialog named dlg, reused in later examples:

```javascript
// Create an empty dialog window near the upper left of the screen
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.frameLocation = [ 100, 100 ];
```

New windows start hidden. Calling show makes them visible and able to respond to the user; for example:

```javascript
dlg.show();
```
