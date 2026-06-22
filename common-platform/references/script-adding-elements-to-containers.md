# Adding Elements To Containers, Removing Elements, Types Of Controls, Containers ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adding elements to containers; Removing elements; Types of controls; Containers; User-interface controls; Displaying images; Creating multi-column lists; Prompts and alerts.

## Adding elements to containers

### ScriptUI programming model — Adding elements to containers

Use a container's add method to add elements to a window, panel, or group. The method receives the element type to create plus optional parameters that vary by element type, then returns the new object of that type.

In addition to windows, ScriptUI defines these UI elements and controls:

- Panels (frames) and groups for grouping other controls
- Push buttons that use text or icons, plus radio buttons and checkbox buttons
- Static text, images, and edit text
- Progress bars, scrollbars, sliders
- Lists, including list boxes, drop-down (also called popup) lists, and tree views. Each list entry is an item control, and the parent list's items property stores the child-item array. Tree views may also contain collapsible node-type items with their own children. Add list items with the parent's add method.

An optional bounds parameter lets you set the initial size and position of a new element relative to the parent container's working area. Extra parameters differ across element types. For text-display elements, for example, the initial text can be supplied. Details are available in the ScriptUI Classes dictionary in the ExtendScript Toolkit's Object Model Viewer.

Keep optional parameters in their defined order. Pass undefined for any parameter you do not want to set. For example, to let automatic layout set the bounds while still assigning panel and button text, this code creates Panel and Button elements with initial text but without bounds:

```
dlg.btnPnl = dlg.add("panel", undefined, "Build it");
dlg.btnPnl.testBtn = dlg.btnPnl.add("button", undefined, "Test");
```

New elements are visible by default, although they do not appear until their parent object is shown.

### Creation properties

Some element types have attributes that are supplied only at creation time. They are not ordinary element properties, because they cannot be changed during the element's lifetime and are only needed once. For these types, the add method can receive an optional creation-properties argument. This object contains one or more properties that control appearance or special behavior, including edit text editability or Read only behavior. See Control object constructors for details.

The resource specification format can also provide creation properties for new objects; see Resource specifications for details.

Every UI element supports an optional creation property named name, used to identify that element. This example creates a new Button element whose name is ok:

```
dlg.btnPnl.buildBtn = dlg.btnPnl.add("button", undefined, "Build", {name: "ok"});
```

Compatibility note

Photoshop CS measured panel coordinates from outside the frame, including the title bar. Photoshop CS2 measures them from inside the frame, meaning the content area. As a result, using the same vertical-position values for child controls in a panel produces slightly different placement between those versions. When adding a panel to a window, you can set the su1PanelCoordinates creation property so the panel automatically adjusts its children's positions; see the add method for panel. With automatic adjustment enabled, provide the values that were correct for Photoshop CS, and the result matches in Photoshop CS2, CS3, CS4, CS5, or CC. A window can also enable automatic adjustment; then it applies to every child panel in that window unless the child panel explicitly disables it. See Window object constructor.

### Accessing child elements

Each element added to a container is appended to that container's children property. Access children through this array with a 0-based index. For non-container controls, the children collection is empty.

Here, the msgPnl panel was created first inside dlg, so index 0 of the parent's children property lets the script access that panel object and set its title text:

```
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel" );
dlg.children[ 0 ].text = "Messages";
```

When a creation property assigns a name to a new element, that child can be reached by name either in the parent's children array or as a direct property on the parent. For example, the earlier Button was named ok, so these references are valid:

```
dlg.btnPnl.children[ "ok" ].text = "Build";
dlg.btnPnl.ok.text = "Build";
```

The parent window's findElement() method can also retrieve named elements:

```
var myOkButton = dlg.findElement( "ok" );
```

For list controls of type list and dropdown, the items array provides access to child list-item objects.

## Removing elements

### ScriptUI programming model — Removing elements

Use the container's remove method to remove elements from a Window, Panel, or Group. The argument can be the element object, the element name, or the element's index in the container's children collection; see Accessing child elements.

If the target element is visible, it is taken out of view, and it can no longer be accessed from the container or window. Any later script references to that element object have undefined results.

Remove list items from a list by calling the parent list control's remove method in the same manner. The item is removed from the parent's items list, hidden from view, and its item object is deleted.

## Types of controls

The sections below introduce control types that can be added to a Window or to another container element, such as a panel or group. For property, function, and element-creation details, see Control object constructors.

## Containers

### Types of controls — Containers

These Control object types live inside windows and can contain or group other controls.

### Panel

Commonly used to visually organize related controls.

- Set the text property to provide the title shown at the top of the panel.
- An optional borderStyle creation property determines how the panel border is drawn.

Panels can also serve as separators: a width of 0 produces a vertical line, while a height of 0 produces a horizontal line:

```
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel", [ 25, 15, 355, 130 ], "Messages" );
```

### Group

Used for visually organizing related controls.

Unlike Panels, Groups do not have a title or visible border.

Use them to build control hierarchies and to tune layout attributes for selected control groups inside a parent panel. For examples, see Creating more complex arrangements.

### TabbedPanel

A panel container whose immediate children are only Tab objects. Its selection property holds the currently active Tab child.

When selection changes, either because the user chooses another tab or because a script sets the property, the TabbedPanel receives an onChange notification.

The title property supplies an optional label; the titleLayout property positions that label within the panel.

### Tab

General container whose parent is a TabbedPanel, with a selectable tab that displays localizable text.

The parent determines its size and position.

## User-interface controls

### Types of controls — User-interface controls

Control objects in ScriptUI live inside windows, panels, and groups, where each control supplies a particular display form or interaction pattern. To instantiate one, pass the matching type keyword to a Window or container add() method; see Control types and creation parameters.

The samples below leave creation bounds unset. A common pattern is to set preferred size information and let the layout manager calculate the final bounds; see Automatic layout.

### Button

A Button is commonly used when clicking in a window should start an operation, such as accepting the current dialog settings, canceling the dialog, or opening another dialog.

- Assign the Button's visible label through the text property so its purpose is identifiable.
- Supply behavior with the onClick callback method.

```
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.btnPnl = dlg.add( "panel", undefined, "Build it" );
dlg.btnPnl.testBtn = dlg.btnPnl.add( "button", undefined, "Test" );
dlg.btnPnl.buildBtn = dlg.btnPnl.add( "button", undefined, "Build", { name: "ok" } );
dlg.btnPnl.cancelBtn = dlg.btnPnl.add( "button", undefined, "Cancel", { name: "cancel" } );
dlg.show();
```

### IconButton

An IconButton is a button that shows an icon and may also include a text label. As with a text button, clicking it usually triggers an action.

- The image property points to the icon image; see Displaying images.
- Use title or text when an optional label is needed; titleLayout controls where that label sits relative to the image.
- Attach behavior through the onClick callback method.

### Image

An Image control presents an icon-style image.

- The image property points to the icon image; see Displaying images.
- Use the title property when an optional label is needed; titleLayout controls where that label sits relative to the image.

### StaticText

StaticText is intended for text a user is not meant to edit directly, including labels and informational messages.

This sample builds a Panel and places several StaticText elements inside it:

```
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.msgPnl = dlg.add( "panel", undefined, "Messages" );
dlg.msgPnl.titleSt = dlg.msgPnl.add( "statictext", undefined, "Alert box title:" );
dlg.msgPnl.msgSt = dlg.msgPnl.add( "statictext", undefined, "Alert message:" );
dlg.show();
```

### EditText

EditText lets a user type text, and that text is available to the script after the dialog closes. Content in EditText elements supports selection, copying, and pasting.

- Set text to provide the element's initial visible content; read text to get the current value after user entry or edits.
- Assign textselection to overwrite selected text or add content at the insertion point. Reading textselection returns the current selected text when one exists.

This sample adds EditText elements whose starting values can either be kept or replaced by the user:

```
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

### EditNumber

EditNumber accepts a decimal number from the user and returns it to the script once the dialog is dismissed. When the control loses focus, the entered value is checked as a localized number and compared with the lower and upper boundaries. Text in EditNumber elements can be selected, copied, and pasted.

Note

Photoshop 20.0 (CC 2019) added this feature; other hosts might not provide it.

- Set text to provide the element's initial visible number; read text to get the current numeric value after user entry or edits.
- Assign textselection to overwrite selected text or add content at the insertion point. Reading textselection returns the current selected text when one exists.

This sample adds EditNumber elements with default values that the user may keep or change:

```
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

### Checkbox

A Checkbox gives the user a true/false choice.

- Set text to provide the identifying label displayed beside the clickable box.
- Clicking toggles selection on or off; the selected state is shown with a checkmark. Its value is true in the checked state and false otherwise.

During Checkbox creation, the value property can establish the starting checked state and displayed look.

```
// Add a checkbox to control the buttons that dismiss an alert box
dlg.hasBtnsCb = dlg.add( "checkbox", undefined, "Should there be alert buttons?" );
dlg.hasBtnsCb.value = true;
```

### RadioButton

RadioButton controls let the user choose one option from a set.

- Set text to provide the identifying label displayed beside the clickable button.
- When a RadioButton is chosen, value is true. Platforms render the state in their own style, such as an empty or filled dot.

Create related RadioButton elements consecutively to make a group. Setting any one button's value to true changes all other buttons in that group to false. When the group is created, set one member's state to true:

```
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.alertBtnsPnl = dlg.add( "panel", undefined, "Button alignment" );
dlg.alertBtnsPnl.alignLeftRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Left" );
dlg.alertBtnsPnl.alignCenterRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Center" );
dlg.alertBtnsPnl.alignRightRb = dlg.alertBtnsPnl.add( "radiobutton", undefined, "Right" );
dlg.alertBtnsPnl.alignCenterRb.value = true;
dlg.show();
```

### Progressbar

A Progressbar is generally used to show how far a long-running operation has advanced. The colored portion of the bar fills a percentage of the control area, matching the operation's completion percentage.

The value property both reports and sets the colored amount, measured against maxvalue.

With the default [0..100] range, value = 50 represents an operation that is halfway complete.

### Slider

A Slider is used for picking a value within a range. It appears as a horizontal bar with an indicator that can be dragged, and clicking a point on the bar moves the indicator directly to that position.

The value property both reports and sets the indicator position inside the minvalue to maxvalue range.

With the default 0 to 100 range, value = 50 places the indicator at the bar's midpoint.

### Scrollbar

A Scrollbar resembles a Slider because it uses a bar and a draggable indicator. It also includes stepper buttons at both ends; clicking one moves the indicator by stepdelta. Clicking the bar outside the indicator moves it by jumpdelta.

Orientation may be horizontal or vertical. A greater width than height makes it horizontal; otherwise it is vertical. The arguments passed to the scrollbar's add method set the value, minvalue and maxvalue properties.

Scrollbars are commonly paired with an EditText field so the current scrollbar value is visible and the position can be entered as an exact value.

This example creates a scrollbar in a panel and associates it with StaticText and EditText elements:

```
dlg.sizePnl = dlg.add( "panel", undefined, "Dimensions" );
dlg.sizePnl.widthSt = dlg.sizePnl.add( "statictext", undefined, "Width:" );
dlg.sizePnl.widthScrl = dlg.sizePnl.add( "scrollbar", undefined, 300, 300, 800 );
dlg.sizePnl.widthEt = dlg.sizePnl.add( "edittext" );
```

### ListBox, DropDownList and TreeView

ListBox, DropDownList and TreeView controls present item lists. The items property holds those entries as ListItem objects, and scripts can reach them with a 0-based index.

- A ListBox control shows a set of choices. At creation time, you decide whether selection is limited to one item or can include multiple items. When the available display area cannot show every entry, a scrollbar can appear so the user can move through the full list. List boxes can also use multiple columns; see Creating multi-column lists.
- A DropDownList control shows one selected item while closed. Clicking the control opens a list where another item can be selected. Drop-down lists may include nonselectable separator items, like menu separators, to visually divide related groups.
- A TreeView control works much like a ListBox, but its items may contain child items. Items that have children can expand or collapse to reveal or hide those children. A child item may itself have further children.
- Use title when an optional label is needed; titleLayout controls where that label sits relative to the list.

Choices can be supplied while the list object is created, or later through the list object's add() method. Scripts can delete entries with the list object's remove() and removeAll() methods.

### ListItem

Entries added to or inserted into any list-style control are ListItem objects, and scripts can manipulate their properties. These are the possible ListItem element types:

| Type | Description |
| --- | --- |
| item | The typical item in any type of list. It displays text or an image, and can be selected. To display an image, set the item object's image property; Displaying images. |
| separator | A separator is a nonselectable visual element in a drop-down list. Although it has a text property, the value is ignored, and the item is displayed as a horizontal line. |
| node | A displayable and selectable item in a TreeView control which can contain other ListItem objects, including other items of type node. |

### FlashPlayer

FlashPlayer plays a Flash movie inside a ScriptUI window. Methods on the control can load a movie from an SWF file and control playback. See FlashPlayer control functions.

The same control object can communicate with the Flash application: it can call ActionScript methods, and it can expose JavaScript methods from the Adobe application script for use by ActionScript. See Calling ActionScript functions from a ScriptUI script.

Use title when an optional label is needed; titleLayout controls where that label sits relative to the player.

## Displaying images

### Types of controls — Displaying images

Image and IconButton controls can show icon images. Listbox or DropdownList controls can also use images as selectable items, either instead of text strings or alongside them. Each of these uses the element's image property. The property value may be a named icon resource, a ScriptUIImage object, a File object, a path string pointing to the image file, or a path string for an alias or shortcut to that file; see Specifying paths.

Icon data can be stored as PNG (Portable Network Graphics) or JPEG (Joint Photographic Experts Group). Format details are available at http://www.libpng.org and http://www.jpeg.org/.

Changing the image property later replaces the image currently shown by the element.

Some scripting environments provide named icon resources for scripts. To use one, assign the resource's JavaScript name to a control's image property, or use that resource name when creating the control. This example creates an application-defined-icon button:

```
myWin.upBtn = myWin.add ( "iconbutton", undefined, "SourceFolderIcon" );
```

Example Photoshop CC icon resources include:

- Step1Icon
- Step2Icon
- Step3Icon
- Step4Icon
- SourceFolderIcon
- DestinationFolderIcon

When an element that shows an icon image has no explicit preferredSize or size value, preferredSize comes from the image's own dimensions. Explicit size values smaller than the graphic crop the display. Values larger than the graphic center the image in the extra area. Images are not scaled to fill the available space.

## Creating multi-column lists

### Types of controls — Creating multi-column lists

For list controls such as ListBox, DropDownList and TreeView, the available choices are represented by ListItem objects. A choice can use a localizable text string, an image, or both, as determined by the ListItem text and image properties; see Displaying images.

To make a ListBox multi-column, set the numberOfColumns creation parameter. The default column count is 1. When more than one column is requested, creation parameters can also control whether headers appear and what header text each column uses.

With multiple columns, each ListItem object added to the box represents a selectable row. The ListItem object's text and image provide the first-column label, while subitems supplies the labels for the remaining columns in that row.

subitems is an array whose length is one less than the column count. The first entry, ListItem.subitems[0], therefore provides the second-column label. Each entry is a JavaScript object containing two properties:

```
{ text : displayString , image : imageFileReference }
```

For example, this fragment defines a two-column list box and assigns labels in both columns for both entries:

```
...
// create list box with two titled columns
var list = dlg.add ("ListBox", [0, 0, 150, 75], "asd",
{numberOfColumns: 2, showHeaders: true,
columnTitles: ["First Name", "Last Name"]});
// add an item for the first row, with the label value for the first column
var item1 = list.add ("item", "John");
// add the label value for the second column in that row.
item1.subItems[0].text = "Doe";
// add an item for the second row, with the text for the first column label
var item2 = list.add ("item", "Jane");
// add the label text and image for the second column in the second row
item2.subItems[0].text = "Doe";
item2.subItems[0].image = File ("~/Desktop/Step1.png");
...
```

The resulting control appears as follows:

In that control, headers are visible, and the second column in the second row combines text with an image.

## Prompts and alerts

### Types of controls — Prompts and alerts

Window class static functions are available globally for showing brief messages in standard dialogs.

Because the host application supplies these simple dialogs, their look matches the application's other alerts and message boxes. For straightforward user interactions, these standard dialogs often avoid the need to build a custom dialog.

Call the Window class static functions alert, confirm, and prompt to display these dialogs with messages you provide. Calling them does not require creating a Window object.
