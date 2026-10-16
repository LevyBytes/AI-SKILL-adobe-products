# Creating more complex arrangements

More elaborate arrangements can be created by nesting Group containers inside Panel containers and other Group containers.

Many dialogs contain rows of user-supplied information, with each row divided into columns for related controls. For example, an edit field often sits beside a static text label identifying it, and several such rows form a column. The Resource specification example below creates a simple dialog where the user can enter values in two EditText fields, each paired in a row with its StaticText label. The layout uses a column-oriented Panel containing two row-oriented Group elements. Those groups provide the control rows. A third Group outside the panel contains the button row.

```javascript
var res = "dialog { \
    info: Panel { orientation: 'column', \
        text: 'Personal Info', \
        name: Group { orientation: 'row', \
            s: StaticText { text:'Name:' }, \
            e: EditText { characters: 30 } \
        }, \
        addr: Group { orientation: 'row', \
            s: StaticText { text:'Street / City:' }, \
            e: EditText { characters: 30 } \
        } \
    }, \
    buttons: Group { orientation: 'row', \
        okBtn: Button { text:'OK', properties:{name:'ok'} }, \
        cancelBtn: Button { text:'Cancel', properties:{name:'cancel'} } \
    } \
}";
win = new Window( res );
win.center();
win.show();
```

In this basic example, the columns do not line up vertically. With fixed-width controls in the rows, one simple way to align the StaticText labels for the EditText fields neatly is to set the child rows in the Panel to align at the panel's right side. Add this to the Panel specification:

ScriptUI resource-description fragment. Place it inside the enclosing resource string; this is not a standalone JavaScript statement.

```text
info: Panel { orientation: 'column', alignChildren:'right', \
```

The result appears as follows:

Now suppose the dialog needs two panels, with both panels using the same width. Set this on the dialog window object, which is the parent of both panels. Use alignChildren="fill" so each dialog child stretches to the maximum child width.

```javascript
var res = "dialog { alignChildren: 'fill', \
    info: Panel { orientation: 'column', alignChildren:'right', \
        text: 'Personal Info', \
        name: Group { orientation: 'row', \
            s: StaticText { text:'Name:' }, \
            e: EditText { characters: 30 } \
        } \
    }, \
    workInfo: Panel { orientation: 'column', \
        text: 'Work Info', \
        name: Group { orientation: 'row', \
            s: StaticText { text:'Company name:' }, \
            e: EditText { characters: 30 } \
        } \
    }, \
    buttons: Group { orientation: 'row', alignment: 'right', \
        okBtn: Button { text:'OK', properties:{name:'ok'} }, \
        cancelBtn: Button { text:'Cancel', properties:{name:'cancel'} } \
    } \
}";
win = new Window( res );
win.center();
win.show();
```

To place the buttons on the dialog's right side, the buttons group overrides the dialog parent's fill alignment by setting alignment="right".
