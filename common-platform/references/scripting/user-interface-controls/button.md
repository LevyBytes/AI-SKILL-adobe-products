# Button

A Button is commonly used when clicking in a window should start an operation, such as accepting the current dialog settings, canceling the dialog, or opening another dialog.

- Assign the Button's visible label through the text property so its purpose is identifiable.
- Supply behavior with the onClick callback method.

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.btnPnl = dlg.add( "panel", undefined, "Build it" );
dlg.btnPnl.testBtn = dlg.btnPnl.add( "button", undefined, "Test" );
dlg.btnPnl.buildBtn = dlg.btnPnl.add( "button", undefined, "Build", { name: "ok" } );
dlg.btnPnl.cancelBtn = dlg.btnPnl.add( "button", undefined, "Cancel", { name: "cancel" } );
dlg.show();
```
