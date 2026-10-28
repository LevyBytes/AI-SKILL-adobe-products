# EditNumber

EditNumber accepts a decimal number from the user and returns it to the script once the dialog is dismissed. When the control loses focus, the entered value is checked as a localized number and compared with the lower and upper boundaries. Text in EditNumber elements can be selected, copied, and pasted.

Note

Photoshop 20.0 (CC 2019) added this feature; other hosts might not provide it.

- Set text to provide the element's initial visible number; read text to get the current numeric value after user entry or edits.
- Assign textselection to overwrite selected text or add content at the insertion point. Reading textselection returns the current selected text when one exists.

This sample adds EditNumber elements with default values that the user may keep or change:

```javascript
var dlg = new Window( "dialog", "Date Box" );
dlg.msgPnl = dlg.add( "panel", undefined, "Enter Date" );
dlg.msgPnl.titleSt = dlg.msgPnl.add( "statictext", undefined, "Month:" );
dlg.msgPnl.titleEt = dlg.msgPnl.add( "editnumber", undefined, 1, 1, 12 );
dlg.msgPnl.msgSt = dlg.msgPnl.add( "statictext", undefined, "Year:" );
dlg.msgPnl.msgEt = dlg.msgPnl.add( "editnumber", undefined, 2025, 2000, 2100 );
dlg.show();
```

Note

Minimum and maximum limits may use decimal values such as 2.5.
