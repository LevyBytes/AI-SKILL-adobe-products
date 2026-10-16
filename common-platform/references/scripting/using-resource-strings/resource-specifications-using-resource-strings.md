# Resource specifications — Using resource strings

These Adobe ExtendScript SDK examples show resource specification strings in use:

| AlertBoxBuilder1.jsx | Demonstrates one way to use resource strings, creating a dialog that allows the user to enter some values, and then using those values to construct the resource string for a customizable alert dialog. |
| --- | --- |
| AlertBoxBuilder2.jsx | Constructs the same dialog, using a resource string (rather than the add() method) to specify all of the dialog contents for the user-input dialog. |

Both Alert Box Builder examples build the same dialog for gathering user-entered values.

After values are collected, the Build button event handler assembles a resource string and the dialog invocation function returns it. The script then writes that resource string to a file. Later, the saved resource string can create and display the user-configured alert box.

The resource specification format is also valid for creating one element or container together with its child elements. For example, if alertBuilderResource did not already include the btnPnlResource panel, you could define that resource separately and then add it to the dialog like this:

```javascript
var btnPnlResource = "btnPnl: Panel { orientation:'row', \
    text: 'Build it', \
    testBtn: Button { text:'Test' }, \
    buildBtn: Button { text:'Build', properties:{name:'ok'} }, \
    cancelBtn: Button { text:'Cancel', properties:{name:'cancel'} } \
}";

dlg = new Window( alertBuilderResource );
dlg.btnPnl = dlg.add( btnPnlResource );
dlg.show();
```
