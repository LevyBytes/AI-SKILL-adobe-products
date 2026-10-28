# Opening and saving with menu commands

Example 1: Here the File > Open menu item is run, which pops a dialog box requesting the file to open.

```javascript

app.execMenuItem("Open");
```

Example 2 (Acrobat 5.0)

As flagged earlier, this example shows a form object failing to survive a call to app.execMenuItem("SaveAs").

```javascript

var f = this.getField("myField");
// Assume preferences set to save linearized
app.execMenuItem("SaveAs");
// Exception thrown, field not updated
f.value = 3;
```

Example 3 (Acrobat 5.0)

Field objects have to be fetched anew once app.execMenuItem("SaveAs") has run.

```javascript

var f = this.getField("myField");
// Assume preferences set to save linearized
app.execMenuItem("SaveAs");
// Get the field again after the linear save
var f = getField("myField");
// Field updated to a value of 3
f.value = 3;
```

Related: [app.execMenuItem](exec-menu-item.md).
