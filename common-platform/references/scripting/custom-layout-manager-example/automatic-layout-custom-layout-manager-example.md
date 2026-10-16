# Automatic layout — Custom layout-manager example

This script creates a dialog very close to the previous example. The difference is that it defines a layout-manager subclass and assigns an instance of that class to the final Group's layout property. The example also shows how to define a reusable class in JavaScript.

The script's layout manager offsets each element like steps, producing staggered buttons instead of an aligned row.

```javascript
// Define a custom layout manager that arranges the children
// of "container" in a stair-step fashion.
function StairStepButtonLayout( container ) {
    this.initSelf( container );
}

// Define its "method" functions
function SSBL_initSelf( container ) {
    this.container = container;
}

function SSBL_layout() {
    var top = 0,
    left = 0;
    var width;
    var vspacing = 10,
    hspacing = 20;
    for ( i = 0; i < this.container.children.length; i++ ) {
        var child = this.container.children[ i ];

        // If child is a container, call its layout method
        if ( typeof child.layout !== "undefined" ) {
            child.layout.layout();
        }

        child.size = child.preferredSize;
        child.location = [ left, top ];
        width = left + child.size.width;
        top += child.size.height + vspacing;
        left += hspacing;
    }
    this.container.preferredSize = [ width, top - vspacing ];
}

// Attach methods to Object's prototype
StairStepButtonLayout.prototype.initSelf = SSBL_initSelf;
StairStepButtonLayout.prototype.layout = SSBL_layout;

// Define a string containing the resource specification for the controls
var res = "dialog { \
    whichInfo: DropDownList { alignment:'left' }, \
    allGroups: Panel { orientation:'stack', \
        info: Group { orientation: 'column', \
            name: Group { orientation: 'row', \
                s: StaticText { text:'Name:' }, \
                e: EditText { characters: 30 } \
            } \
        }, \
        workInfo: Group { orientation: 'column', \
            name: Group { orientation: 'row', \
                s: StaticText { text:'Company name:' }, \
                e: EditText { characters: 30 } \
            } \
        }, \
    }, \
    buttons: Group { orientation: 'row', alignment: 'right', \
        okBtn: Button { text:'OK', properties:{name:'ok'} }, \
        cancelBtn: Button { text:'Cancel', properties:{name:'cancel'} } \
    } \
}";

// Create window using resource spec
win = new Window( res );

// Create list items, select first one
win.whichInfo.onChange = function() {
    if ( this.selection !== null ) {
        for ( var g = 0; g < this.items.length; g++ ) {
            this.items[ g ].group.visible = false;
        }
        this.selection.group.visible = true;
    }
};
var item = win.whichInfo.add( "item", "Personal Info" );
item.group = win.allGroups.info;
item = win.whichInfo.add( "item", "Work Info" );
item.group = win.allGroups.workInfo;

win.whichInfo.selection = 0;

// Override the default layout manager for the 'buttons' group
// with custom layout manager
win.buttons.layout = new StairStepButtonLayout( win.buttons );
win.center();
win.show();
```
