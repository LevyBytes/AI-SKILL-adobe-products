# Checkbox and radio dialog example

Example 2: Below, a check box teams up with a radio button field. Such code might sit at the document level as JavaScript.

Load the layout script before the dialog script as document-level JavaScript. Invoke `app.execDialog(dialog2)` for the checkbox/radio example.

- [checkbox-radio-layout.js](../examples/checkbox-radio-layout.js)
- [checkbox-radio-dialog.js](../examples/checkbox-radio-dialog.js)

You can fire the following line from places like a button's mouse-up action or a menu action.

```javascript

var retn = app.execDialog(dialog2);
```

Whatever retn comes back as tells you which button was pressed: "ok" for the Ok button, "cancel" for the Cancel button, and "other" for the button labeled "Press Me".

Related: [app.execDialog](exec-dialog.md).
