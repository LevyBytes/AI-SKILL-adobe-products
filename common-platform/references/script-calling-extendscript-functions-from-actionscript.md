# Calling Extendscript Functions From Actionscript, Calling Actionscript Functions From A Scriptui Script, Flash Examples, Automatic Layout ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Calling ExtendScript functions from ActionScript; Calling ActionScript functions from a ScriptUI script; Flash Examples; Automatic layout; Default layout behavior; Automatic layout properties; Custom layout-manager example; The AutoLayoutManager algorithm.

## Calling ExtendScript functions from ActionScript

### Communicating with the Flash application — Calling ExtendScript functions from ActionScript

The ActionScript ExternalInterface class can call an ExtendScript function that is defined on the FlashPlayer element in the Adobe application script, then run that call from the ActionScript environment. The FlashPlayer element must define a method with the same function name.

To let SWF code invoke myExtendScriptFunction in ExtendScript, add a method named myExtendScriptFunction to the FlashPlayer control object. Function names have no extra restrictions, but only supported data types may be used for inputs and return values.

No ActionScript-side registration is needed for the ExtendScript function. The ActionScript script can call the external function directly through ExternalInterface.call():

```
var res = ExternalInterface.call( "myJavaScriptFunction" );
```

When Flash Player performs the ExternalInterface call, ScriptUI searches the FlashPlayer element for a method with the requested name and calls it with the supplied arguments. Inside that function, the JavaScript this object points to the FlashPlayer object.

## Calling ActionScript functions from a ScriptUI script

### Communicating with the Flash application — Calling ActionScript functions from a ScriptUI script

From ExtendScript, call ActionScript methods defined in the Flash application by using the FlashPlayer invokePlayerFunction() method:

```
var result = flashElement.invokePlayerFunction( "ActionScript_function_name", [ arg1, ..., argN ] );
```

The optional arguments let the script send supported-type data to the ActionScript method.

Before an Adobe application script can call an ActionScript function, the Flash application must register that function with ExternalInterface as a callback from the Flash container. Register it with ExternalInterface.addCallback():

```
public static addCallback(methodName:String, instance:Object, method:Function);
```

This example registers getActionScriptArray(), a function defined in the Adobe application script:

```
ExternalInterface.addCallback( "getActionScriptArray", this, getActionScriptArray );
```

## Flash Examples

### Communicating with the Flash application — Flash Examples

The Adobe ExtendScript SDK includes these examples for working with Flash Player:

| Example | Description |
| --- | --- |
| UsingFlashPlayer.jsx | Demonstrates creating a Flash® Player, loading an SWF-defined movie, and playing it back. |
| ActionScriptDemo.jsx | Demonstrates communication between the Adobe application scripting environment and the Flash Player ActionScript™ scripting environment. |

## Automatic layout

When a script builds a window and the related user-interface elements, it may either set every element and container size and position explicitly, or rely on ScriptUI automatic layout. Automatic layout combines available information about UI elements with layout rules to produce a suitable dialog arrangement, determining control and container sizes automatically.

Compared with explicit positioning, automatic layout is simpler to code. It also makes scripts easier to change, maintain, and localize into other languages. In addition, the script adjusts automatically to the host application's default font and font size for ScriptUI windows.

The script author still has substantial influence over automatic layout. Every container has a layout manager object assigned through the layout property. That manager controls element sizes and positions inside the container and also sizes the container itself. Scripts can use the default manager or create a replacement:

```
myWin.layout = new AutoLayoutManager( myWin );
```

## Default layout behavior

### Automatic layout — Default layout behavior

By default, autoLayoutManager provides the standard layout behavior. A script may change properties on the default layout manager object, or it may create a custom layout manager when the layout needs specialized handling. See Custom layout-manager example.

A container's children can be arranged in one row, in one column, or in a stack where child elements overlap in the same container area and only the uppermost element is fully shown. The container's orientation property controls this, using row, column, or stack.

Panel and Group containers can be nested for more complex structure. To show two columns of controls, for example, create a row-oriented panel that contains two groups, each group using column orientation.

Containers expose properties for margins and for spacing between elements. If a script leaves those unset, the layout manager supplies defaults.

Child alignment inside a container is set by alignChildren on the container and alignment on individual controls. alignChildren defines the container-wide alignment strategy, while a child element can override it with its own alignment value.

The layout manager can obtain a child element's best size from preferredSize. By default, ScriptUI computes that value from control-type characteristics and variable factors such as displayed text plus the font and text size. If either width or height in preferredSize is -1, the layout manager calculates that dimension and uses the specified value for the other dimension.

For information on setting these property values to influence automatic layout, see Automatic layout properties.

Note

Default font and font size choices vary by platform and can also vary between applications on the same platform. As a result, ScriptUI windows created from the same script can look different in different contexts.

## Automatic layout properties

### Automatic layout — Automatic layout properties

A script sets rules for the layout manager by assigning particular properties on the container object and on child elements. The examples below demonstrate how different combinations of those values affect layout. They use a simple window, built with Resource specifications, that contains StaticText, Button, and EditText elements:

```
var w = new Window( "window { \
    orientation: 'row', \
    st: StaticText { }, \
    pb: Button { text: 'OK' }, \

    et: EditText { characters:4, justify:'right' } \
}");

w.show();
```

Each example changes layout properties in a different way. In every window, w. text sets the title to identify the property being varied, and w.st.text displays the specific property value shown in that example.

### Container orientation

The orientation property defines how a container organizes its children. It accepts these values:

| Value | Behavior |
| --- | --- |
| row | Places child elements side by side across the container in one left-to-right row. The container height comes from the tallest child in that row, while the container width comes from adding the widths of all child elements. |
| column | Places child elements one above another down the container in a single top-to-bottom column. The container height comes from the sum of all child heights, while its width comes from the widest child in the column. |
| stack | Places child elements over the same container region so they overlap like stacked sheets. Only the top child is fully visible. The container height comes from the tallest child in the stack, and its width comes from the widest child in the stack. |

The next figure presents the sample window laid out with each orientation:

### Aligning children

Two properties control child alignment in a container: alignChildren on the parent container and alignment on each child. The parent alignChildren value sets the default alignment for all children in that container unless an individual child supplies an overriding alignment value.

Both properties use the same alignment values. The value applies along one axis, based on the container orientation. To control both axes, provide an array containing two of these strings: the first string is horizontal alignment and the second is vertical alignment. Case does not matter for these values, so FILL, Fill, and fill are all accepted.

The same value can also be assigned through the matching constants in the ScriptUI class Alignment property, for example:

```
myGroup.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP]
```

When alignment is assigned with a constant and then queried, the property returns the constant's index number instead of a string.

For elements in a row, vertical-axis alignment can use these values:

| Value | Behavior |
| --- | --- |
| top | Positions the element's top edge at the container's top margin. |
| bottom | Positions the element's bottom edge at the container's bottom margin. |
| center | Centers the element between the container's top and bottom margins. |
| fill | Resizes the element's height to occupy the space between the container's top and bottom margins. |

For elements in a column, horizontal-axis alignment can use these values:

| Value | Behavior |
| --- | --- |
| left | Positions the element's left edge at the container's left margin. |
| right | Positions the element's right edge at the container's right margin. |
| center | Centers the element between the container's right and left margins. |
| fill | Resizes the element's width to occupy the space between the container's right and left margins. |

For elements in a stack, alignment may be applied on the vertical axis or the horizontal axis:

| Value | Behavior |
| --- | --- |
| top | Moves the element's top edge to the container's top margin, with the element centered between the right and left margins. |
| bottom | Moves the element's bottom edge to the container's bottom margin, with the element centered between the right and left margins. |
| left | Moves the element's left edge to the container's left margin, with the element centered between the top and bottom margins. |
| right | Moves the element's right edge to the container's right margin, with the element centered between the top and bottom margins.- |
| center | Centers the element within the container's top, bottom, right, and left margins. |
| fill | Resizes the element's height to fill the area between the top and bottom margins, and resizes its width to fill the area between the right and left margins. |

The next figure shows the sample window with row orientation and the bottom and top settings assigned to the parent's alignChildren property:

Another figure shows the sample window with column orientation and the right, left, and fill settings assigned to the parent's alignChildren property. In the fill case, each element becomes as wide as the widest element in that container:

To override the child alignment inherited from alignChildren, set alignment on a specific child element. The following diagram shows the EditText element with alignment set to right while the parent alignChildren value is left:

### Alignment in two dimensions

Instead of a single string, alignment can be set to a two-string array. The first string gives the horizontal alignment and the second gives the vertical alignment. This enables horizontal placement of children in a row-oriented container and vertical placement of children in a column-oriented container.

The next figures use the sample script SnpAlignElements.jsx to show two-dimensional alignment.

- In the first figure, each control sits vertically centered in its row, while a value such as ["left", "center"] assigns that element's horizontal position:
- The vertical alignment example builds four columns and positions the controls within each column along the vertical axis. It uses values such as ["fill", "top"] to spread controls through the column while preserving their relative vertical positions:

### Setting margins

The margins property sets how many pixels separate the container edges from the outermost edges of its child elements. It can be a single number for equal margins, or a Margins object that specifies separate values for each container edge.

One figure uses row orientation with margins set to 5 and 15 pixels:

Another uses column orientation with 0 pixels at the top, 20 pixels at the bottom, and 15 pixels on both left and right:

### Spacing between children

The spacing property specifies the pixel distance between a child element and its neighboring sibling element.

This figure shows the sample window with row orientation and spacing values of 15 and 5 pixels, respectively:

A second figure uses column orientation with 20 pixels of spacing:

### Determining a preferred size

Every element has a preferredSize property whose initial value gives practical default dimensions for that element. ScriptUI calculates the default from fixed characteristics of the element type and variable details such as the text string displayed in a button or text element.

When size is undefined for an element, the layout manager uses preferredSize to determine that element's dimensions during layout. In most cases, avoid explicitly setting preferredSize and allow ScriptUI to calculate the best value from the element's state at layout time. This supports localizable strings for user-interface element text; see Localization in ScriptUI objects. The element's width and height are then computed from the selected language-specific text at layout time instead of from a fixed size written into the script.

A script can still set preferredSize explicitly to give the layout manager a hint for elements whose default size cannot be determined easily, such as an IconButton element without an initial image to measure.

preferredSize can specify only one dimension. A width or height of -1 tells the layout manager to calculate that dimension while using the provided value for the other one.

A control can also have maximum and/or minimum size values that restrict resizing. Automatic layout has a default maximum size that keeps generated elements from exceeding the screen.

To make controls fit current text contents, or to respond after a user resizes the window, explicitly call resize() on the layout object.

### Creating more complex arrangements

More elaborate arrangements can be created by nesting Group containers inside Panel containers and other Group containers.

Many dialogs contain rows of user-supplied information, with each row divided into columns for related controls. For example, an edit field often sits beside a static text label identifying it, and several such rows form a column. The Resource specification example below creates a simple dialog where the user can enter values in two EditText fields, each paired in a row with its StaticText label. The layout uses a column-oriented Panel containing two row-oriented Group elements. Those groups provide the control rows. A third Group outside the panel contains the button row.

```
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

```
info: Panel { orientation: 'column', alignChildren:'right', \
```

The result appears as follows:

Now suppose the dialog needs two panels, with both panels using the same width. Set this on the dialog window object, which is the parent of both panels. Use alignChildren="fill" so each dialog child stretches to the maximum child width.

```
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

### Creating dynamic content

Many dialogs must show different information depending on an option the user chooses inside the dialog. The stack orientation can present multiple views in one dialog region.

With stack orientation, a container centers child elements in an area large enough for the widest child and tall enough for the tallest child. By arranging groups or panels in that stack, a script can show and hide them in different combinations, displaying different controls in the same space according to other dialog choices.

For example, the dialog responds when the user chooses an item in the DropDownList.

This script constructs that dialog. It folds the earlier "Personal Info" and "Work Info" panels into one Panel containing two Groups arranged as a stack. A DropDownList lets the user choose which information set to display. The list's onChange function hides the nonselected group and reveals the selected one.

```
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

win = new Window( res );
win.whichInfo.onChange = function () {
    if ( this.selection !== null ) {
        for ( var g = 0; g < this.items.length; g++ ) {
            this.items[ g ].group.visible = false; //hide all other groups
        }
        this.selection.group.visible = true;//show this group
    }
};

var item = win.whichInfo.add( "item", "Personal Info" );
item.group = win.allGroups.info;
item = win.whichInfo.add( "item", "Work Info" );
item.group = win.allGroups.workInfo;

// TODO: Which of these are correct or best
win.whichInfo.selection = win.whichInfo.items[ 0 ];
win.whichInfo.selection = 0;

win.center();
win.show();
```

## Custom layout-manager example

### Automatic layout — Custom layout-manager example

This script creates a dialog very close to the previous example. The difference is that it defines a layout-manager subclass and assigns an instance of that class to the final Group's layout property. The example also shows how to define a reusable class in JavaScript.

The script's layout manager offsets each element like steps, producing staggered buttons instead of an aligned row.

```
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

## The AutoLayoutManager algorithm

### Automatic layout — The AutoLayoutManager algorithm

When a script creates a Window object with elements and shows it for the first time, the visible platform UI window and controls are created. If the script has not supplied explicit control placement, all controls begin at [0, 0] inside their containers and use default dimensions. Before the window becomes visible, the layout manager's layout method assigns positions and sizes to all elements and containers.

During the first call to a Window object's show method, the default AutoLayoutManager layout method performs these operations:

1. Read the managed container's bounds property. If it is undefined, continue with automatic layout. If it is defined, treat the container as explicitly placed by the script and stop layout for that container. Setting both location and size is equivalent to setting bounds, so layout stops in that case as well.
2. Read margins and spacing from the container's margins and spacing properties. Read child orientation and alignment from the container's orientation and alignChildren properties. When any of those properties are undefined, use default values supplied by the platform and user-interface framework.

- If the child is a container, call its layout manager, meaning this same algorithm runs again for that container.
- Read the child's alignment property. If it is defined, use it to override the parent's alignChildren default.
- Read the child's size property. If size is defined, use it for the child's dimensions. If size is undefined, use preferredSize for the dimensions. Ignore the child's location property.
- Store all collected child information for later calculations.

4. Using the orientation, compute a trial location for every child in the row or column, applying inter-element spacing and container margins.
5. Compute the row, column, or stack dimensions from the children's dimensions.
6. Adjust each child's trial location against the container edges according to that child's desired alignment.
7. Assign the bounds property on every child element.
8. Set the container's preferredSize property from the margins and from the dimensions of the child row or column.
