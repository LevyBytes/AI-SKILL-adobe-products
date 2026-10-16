# EditText

EditText lets a user type text, and that text is available to the script after the dialog closes. Content in EditText elements supports selection, copying, and pasting.

- Set text to provide the element's initial visible content; read text to get the current value after user entry or edits.
- Assign textselection to overwrite selected text or add content at the insertion point. Reading textselection returns the current selected text when one exists.

This sample adds EditText elements whose starting values can either be kept or replaced by the user:

```javascript
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel", undefined, "Messages" );
dlg.msgPnl.titleSt = dlg.msgPnl.add( "statictext", undefined, "Alert box title:" );
dlg.msgPnl.titleEt = dlg.msgPnl.add( "edittext", undefined, "Sample Alert" );
dlg.msgPnl.msgSt = dlg.msgPnl.add( "statictext", undefined, "Alert message:" );
dlg.msgPnl.msgEt = dlg.msgPnl.add( "edittext", undefined, "<your message here>", { multiline: true } );
dlg.show();
```

Note

In the second EditText field, the creation property multiline: true marks the field as suitable for longer text. The displayed content wraps across multiple lines.
