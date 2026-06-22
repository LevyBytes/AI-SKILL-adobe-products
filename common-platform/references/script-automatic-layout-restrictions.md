# Automatic Layout Restrictions, Managing Control Titles, Title Alignment And Orientation, Title Character Width And Justification ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Automatic layout restrictions; Managing control titles; Title alignment and orientation; Title character width and justification; Title truncation; Margins around the title and graphic; Localization in ScriptUI objects; Variable values in localized strings; Enabling automatic localization; ScriptUI object reference; ScriptUI class; ScriptUI Classs Attributes; ScriptUI Class Methods; Environment; Environment object properties; Keyboard state; Common properties; Window class.

## Automatic layout restrictions

### Automatic layout — Automatic layout restrictions

These restrictions apply to automatic layout:

- The default layout manager skips any container with a defined bounds property. A script author can change that behavior by assigning a custom layout manager to the container.
- After the initial layout is complete, the layout mechanism does not monitor later size changes on elements. A script can start another layout pass by calling the layout manager's layout method, and it can force child-container sizes to be recalculated by passing true as the optional argument.

## Managing control titles

Controls commonly need a nearby title or label so users can tell what the element is for. Examples in Automatic layout show one approach: add a statictext element for the label, then let automatic layout place that text in relation to the control it names.

For many routine arrangements, the title-layout feature is the shorter route. It lets you set an element's title and describe how that title sits relative to the object's graphic representation, without adding extra statictext or container elements. Title layout uses an element's optional title and titleLayout properties.

Internally, ScriptUI treats the title and the element's graphic representation as two separate items. Layout rules then position those items inside a virtual container that surrounds both of them. This resembles automatic layout, but the mechanism is intentionally narrower.

Title layout applies to these UI element types:

- DropDownList
- FlashPlayer
- IconButton
- Image
- TabbedPanel

In this group, most element types show the title outside the element, and the virtual container is an imagined outline around both the title and the separate element. With IconButton, the title appears within the button bounds, so the element's outer bounds define the virtual container. In either form, the same layout ideas apply.

- The title property is a String value that supplies a text label for a UI element. The titleLayout property controls whether that title is placed left, right, above, below, or centered over the graphic element.
  - The character width assigned to the title;
  - The justification used inside that character width;
  - The truncation behavior to use when text does not fit;
  - The title's orientation, alignment, and spacing relative to the object it names;
  - The margins inside the virtual container around the title and its associated object.

Every titleLayout property is optional; element types that support this feature provide defaults for all of them. The reference section gives the full property details; see titleLayout.

The next sections use examples to show title layout producing several different arrangements.

## Title alignment and orientation

### Managing control titles — Title alignment and orientation

Title layout handles alignment differently than automatic layout. In this context, the alignment property sets both the title/graphic orientation and the way the title lines up with the graphic element. Its value is a 2-element array: the first item controls horizontal alignment, and the second item controls vertical alignment. The accepted values match those from automatic layout (see Aligning children), except that fill is not permitted.

```
button.titleLayout = { alignment: ["right", "center"] };
```

```
image.titleLayout = { alignment: ["center", "bottom"] };
```

```
button.title = "Get information";
button.titleLayout = { alignment: ["center", "center"] };
```

```
image.titleLayout = { alignment: ["left", "top"] };
```

```
panel.title = "Image format";
panel.titleLayout = { alignment: ["center", "top"], spacing: 15 };
```

## Title character width and justification

### Managing control titles — Title character width and justification

```
droplist.titleLayout = { alignment: ["left", "center"], characters: 20 };
```

```
droplist.titleLayout = { alignment: ["left", "center"],
                         characters: 20,
                         justify: "right" };
```

```
w.ddl1 = w.add("dropdownlist { title: "Image format:" }");
w.ddl2 = w.add("dropdownlist { title: "Background color:" }");
w.ddl3 = w.add("dropdownlist { title: "Text color:" }");
w.ddl1.titleLayout = { alignment: ["left", "center"], spacing: 3,
                       characters: 16, justify: "right" };
w.ddl2.titleLayout = { alignment: ["left", "center"], spacing: 3,
                       characters: 16, justify: "right" };
w.ddl3.titleLayout = { alignment: ["left", "center"], spacing: 3,
                       characters: 16, justify: "right" };
```

## Title truncation

### Managing control titles — Title truncation

When the reserved title area cannot show the full string, set truncate to choose how ScriptUI draws the shortened text. With truncate set to middle, ScriptUI removes characters from the center of the string and inserts an ellipsis (...). With the value end, it cuts characters from the end and inserts an ellipsis. If truncate is none or is omitted, ScriptUI cuts from the end without adding an ellipsis character.

This example applies all three settings to one title string:

```
w.btn1 = w.add("iconbutton { title: 'Start 123456 End', image: 'SystemWarningIcon' }");
w.btn2 = w.add("iconbutton { title: 'Start 123456 End', image: 'SystemWarningIcon' }");
w.btn3 = w.add("iconbutton { title: 'Start 123456 End', image: 'SystemWarningIcon' }");
w.btn1.titleLayout = { characters: 8, truncate: 'middle' };
w.btn2.titleLayout = { characters: 8, truncate: 'end' };
w.btn3.titleLayout = { characters: 8, truncate: 'none' };
```

## Margins around the title and graphic

### Managing control titles — Margins around the title and graphic object

The margins property sets, in pixels, the distance from each edge of an element to the visible content inside that element. This replaces the default margin values: most element types have no margins, while iconbutton uses 6 pixels at each edge.

- For iconbutton, margins sets the padding between the button frame and the title plus icon image.
- For other element types, margins sets the padding between the imaginary border around the combined bounding boxes of the title and graphic object. This increases the space the element occupies beyond its default measurements.

The example below overrides the default margins for iconbutton and dropdownlist elements.

Panels surround the lists so artificial borders are visible around them:

```
w.btn1 = w.add("iconbutton { title: 'Default margins', image: 'SystemWarningIcon' }");

w.btn2 = w.add("iconbutton { title: 'Extra T/B margins', image: 'SystemWarningIcon' }");
var defaultBtnMargins = w.btn2.titleLayout.margins;
w.btn2.titleLayout = { margins: [defaultBtnMargins[0], 15, defaultBtnMargins[2], 15] };

w.panel1 = w.add("panel { margins: 0, ddl1: DropDownList { title: 'Default margins' } }");
w.panel2 = w.add("panel { margins: 0, ddl2: DropDownList { title: 'Extra L/R margins' } }");
w.panel2.ddl2.titleLayout = { margins: [15, 0, 15, 0] };
```

## Localization in ScriptUI objects

Screen-visible text in a ScriptUI interface can be localized. Any ScriptUI object can use the global localize function to supply localized display strings in a compact way. The function receives a localization object that contains the localized variants of a string.

For full information about this ExtendScript capability, see Localizing ExtendScript strings.

A localization object is a JavaScript object literal. Its property names are locale names, and each property value is the text for that locale. Locale names are identifiers defined by the ISO 31 standard. In this example, btnText holds text for several locales and supplies the Button text for a control added to the window win:

```
btnText = { en: "Yes", de: "Ja", fr: "Oui" };
b1 = win.add ( "button", undefined, localize( btnText ) );
```

localize selects the string that matches the current locale. It compares the active locale and platform with the object's properties, then returns the matching property value. On a German system, for instance, the de property supplies "Ja".

When a script localizes strings for user-interface elements, it should also use Automatic layout. The layout manager can size each user-interface element from its localized text, letting script-defined dialogs adjust automatically for the different string widths used by different languages.

## Variable values in localized strings

### Localization in ScriptUI objects — Variable values in localized strings

localize can substitute variable values into localized strings. Each variable placeholder receives the evaluated value of an extra argument.

Example:

```
var today = {
    en: "Today is %1/%2.",
    de: "Heute ist der %2.%1."
};
var date = new Date();
Window.alert( localize( today, date.getMonth() + 1, date.getDate() ) );
```

### Localizing ExtendScript strings — Variable values in localized strings

Certain localized strings must carry extra values whose placement can differ from one language to another.

Variables can be embedded in localization-object string values by using the %n form. The returned string replaces those placeholders with the results of JavaScript expressions that are passed as extra localize arguments. The %1 placeholder maps to the first extra argument, %2 maps to the second, and the sequence continues.

Because substitution happens after the localized string has been selected, each value lands in the position required by that language. For example:

```
today = {
    en: "Today is %1/%2.",
    de: "Heute ist der %2.%1."
};
d = new Date();
alert (localize (today, d.getMonth()+1, d.getDate()));
```

## Enabling automatic localization

### Localization in ScriptUI objects — Enabling automatic localization

When variable replacement is unnecessary, automatic localization is available. Enable it by setting the global value:

```
$.localization = true
```

After automatic localization is enabled, any property that accepts a localizable string can receive a localization object directly; no localize call is required. Example:

```
var btnText = { en: "Yes", de: "Ja", fr: "Oui" };
b1 = win.add( "button", undefined, btnText );
```

The localize function translates whenever it is called, independent of the $.localize setting.

Example:

```
// Only works if the $.localize = true
var b1 = win.add ( "button", undefined, btnText );
// Always works, regardless of $.localize value
var b1 = win.add ( "button", undefined, localize( btnText ) );
```

Use the localize function when localized strings must include variables.

### Localizing ExtendScript strings — Enabling automatic localization

ExtendScript also supports automatic localization. Once that mode is active, a localization object can be assigned directly to any property whose value is a localizable string, without calling localize. For example:

```
msg = { en: "Yes", de: "Ja", fr: "Oui" };
alert (msg);
```

Enable this automatic translation behavior in the script with this statement:

```
$.localize = true;
```

The localize function itself always translates, no matter how $.localize is set; for example:

```
msg = { en: "Yes", de: "Ja", fr: "Oui" };
//Only works if the $.localize=true
alert (msg);
//Always works, regardless of $.localize value
alert ( localize (msg));
```

When localized strings need variables, call the localize function.

## ScriptUI object reference

ScriptUI works with the ExtendScript JavaScript interpreter, giving JavaScript programs a way to create user-interface elements and interact with them. It supplies an object model for application windows and user-interface controls.

This section documents ScriptUI classes and objects, covering creation parameters, methods, and properties.

- ScriptUI class
- Common properties
- Window class
- Window object
- Control objects
- UIEvent base class
- Graphic customization objects
- LayoutManager object

## ScriptUI class

The global ScriptUI class stores module-level information for ScriptUI. This object cannot be instantiated.

## ScriptUI Classs Attributes

### ScriptUI class — ScriptUI Classs Attributes

### ScriptUI.Alignment

ScriptUI.Alignment

Groups the enum values available for alignment and alignChildren on controls and containers, and also for the alignment setting within a control's titleLayout property.

Set alignment by using these constants.

When alignment is queried, the returned index values map to the constants shown here. Constant values are:

- ScriptUI.Alignment.TOP (1)
- ScriptUI.Alignment.BOTTOM (2)
- ScriptUI.Alignment.LEFT (3)
- ScriptUI.Alignment.RIGHT (4)
- ScriptUI.Alignment.FILL (5)
- ScriptUI.Alignment.CENTER (6)

### Type

Object. Read only.

### Example

```
myGroup.alignment = [ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP]
```

### ScriptUI.applicationFonts

ScriptUI.applicationFonts

### Description

Groups the enum values that identify default application fonts.

Which fonts are available depends on the application and the system configuration.

### Type

Object

### ScriptUI.compatability

ScriptUI.compatability

### Description

An object whose property names identify compatibility modes supported by the host application. For example, if ScriptUI.compatability.su1PanelCoordinates is present, the application supports backward compatibility with the Panel coordinate system from ScriptUI version 1.

### Type

Object

### ScriptUI.coreVersion

ScriptUI.coreVersion

### Description

Internal core version number for the ScriptUI components.

### Type

String. Read only.

### ScriptUI.environment

ScriptUI.environment

### Description

A JavaScript object exposing attributes of the ScriptUI environment; it includes a Keyboard state object for reading current keyboard activity at any moment, separate from the event-handling framework.

### Type

Environment object

### ScriptUI.events

ScriptUI.events

### Description

A JavaScript object containing the ScriptUI.events.createEvent() function, which creates event objects used to simulate user-interaction events.

### Type

Object

### ScriptUI.FontStyle

ScriptUI.FontStyle

### Description

Groups the enum values accepted as the style argument to ScriptUI.newFont(). For instance:

```
var font = ScriptUI.newFont( "Helvetica", ScriptUI.FontStyle.BOLD )
```

Values are:

- REGULAR
- BOLD
- ITALIC
- BOLDITALIC

### Type

String. Read only.

### ScriptUI.frameworkName

ScriptUI.frameworkName

### Description

Name of the user-interface framework compatible with this ScriptUI component.

### Type

String. Read only.

### ScriptUI.version

ScriptUI.version

### Description

Main version number for the ScriptUI component framework.

### Type

String. Read only.

## ScriptUI Class Methods

### ScriptUI class — ScriptUI Class Methods

### ScriptUI.events.createEvent()

ScriptUI.events.createEvent(eventType)

### Description

The events property contains this JavaScript function.

The event object created here is passed to a handler function registered for a particular event type on a window or control. Register that handler with windowObj.addEventListener() or controlObj.addEventListener().

For related information, see Registering event listeners for windows or controls.

### Parameters

Parameter

Type

Description

eventType

String

Event category. One of: - UIEvent - KeyboardEvent - MouseEvent

| --- | --- | --- |

### Returns

Returns an event object with the corresponding type:

- A UIEvent base class stores input event information for an event as it moves through a container and control hierarchy. It is the base class for the specialized keyboard and mouse event types.
- A KeyboardEvent object stores information about keyboard input events.
- A MouseEvent object stores information about mouse events.

### ScriptUI.getResourceText()

ScriptUI.getResourceText(text)

### Description

Looks in the host application's resource data for a resource matching the supplied text string. If no string resource matches the text, the original text is returned.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | Text string to look up. |

### Returns

String

### ScriptUI.newFont()

ScriptUI.newFont(name, style, size);

### Description

Creates a font object for text controls and titles.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Font or font family name string. |
| style | String | Font style string, or an enum value from ScriptUI.FontStyle. |
| size | Number | Font size in points, expressed as a number. |

### Returns

ScriptUIFont object

### ScriptUI.newImage()

ScriptUI.newImage( normal, disabled, pressed, rollover );

### Description

Creates an image object for controls that display images, loading the related image resources or image files.

### Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| normal | String | Resource name or file path for the normal/default-state image. |
| disabled | String | Resource name or file path for the disabled-state image, shown when the image's control is disabled (enabled=false). |
| pressed | String | Resource name or file path for the pressed-state image, displayed while the user clicks the image. |
| rollover | String | Resource name or file path for the rollover-state image, displayed when the cursor moves over the image. |

### Returns

ScriptUIImage object

## Environment

### Environment object

Access this global object through the ScriptUI.environment property.

It exposes ScriptUI environment attributes and has only one property.

Because that single property is itself an object, this page contains all relevant documentation for the object.

## Environment object properties

### Environment object — Environment object properties

These element properties are specific to Environment elements:

## Keyboard state

### Environment object — Keyboard state object

This JavaScript object reports the keyboard state at the moment it is read: the current key that is down, plus any modifier keys that are pressed.

Because it does not depend on the event-handling system, a script can read this object at any time to test for specific keys, such as keyboard modifiers, and branch to alternate actions.

Access it through the ScriptUI.environment object:

```
var myKeyState = ScriptUI.environment.keyboardState;
```

The Keyboard State object contains the following properties:

### keyName

ScriptUI.environment.keyboardState.keyName

Name of the key currently pressed. This is the JavaScript key name, returned as a string such as "A" or "a".

Note

Only one pressed key is supported; holding several keys reports undefined.

Modifier keys also report undefined; for those states, see shiftKey, ctrlKey, altKey, metaKey

### Type

String

### Example

With 'a' pressed, for example:

```
var currentPressedKey = ScriptUI.environment.keyboardState.keyName;

alert(currentPressedKey); // "A"
```

### shiftKey, ctrlKey, altKey, metaKey

ScriptUI.environment.keyboardState.shiftKey

ScriptUI.environment.keyboardState.ctrlKey

ScriptUI.environment.keyboardState.altKey

ScriptUI.environment.keyboardState.metaKey

### Description

true when the named modifier key is active at that moment.

Note

metaKey captures both the META and COMMAND keys.

### Type

Boolean

### Example

Example of checking whether a modifier key is held while a script runs:

```
var shiftHeld = ScriptUI.environment.keyboardState.shiftKey;

if (shiftHeld) {
    alert("User is holding shift!");
}
```

Or test keyboard modifier combinations:

```
var keyboardState = ScriptUI.environment.keyboardState;

if (keyboardState.shiftKey && keyboardState.altKey) {
    alert("Shift and alt held!");
}
```

Interface buttons can also use this as an alternative to reading modifiers through keyboard events, which can be harder to reason about and less intuitive for users unless event state handling is already solid.

Example:

```
button.onClick = function () {
    if (ScriptUI.environment.keyboardState.shiftKey) {
        // Special functionality for 'shift' key here
        return;
    }

    // normal button behaviour here
}
```

## Common properties

Most user-interface element types, including windows, containers, and controls, share many properties. Some properties have slightly different meanings depending on the object type. The table below summarizes which object types use each property.

| Property | Window | Panel | TabbedPanel | Tab | Group | Button | Checkbox | DropDownList | EditText | FlashPlayer | IconButton | Image | ListBox | ListItem | ProgressBar | RadioButton | Scrollbar | Slider | StaticText | TreeView |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| active |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| alignChildren |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| alignment |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| bounds |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| cancelElement |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| characters |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| checked |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| children |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| columns |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| defaultElement |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| enabled |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| expanded |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| frameBounds |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| frameLocation |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| frameSize |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| graphics |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| helpTip |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| icon |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| image |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| index |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| items |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| itemSize |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| jumpdelta |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| justify |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| layout |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| location |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| margins |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| maximumSize |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| maxvalue |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| minimumSize |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| minvalue |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| orientation |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| parent |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| preferredSize |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| properties |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| resizeable |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| selected |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| selection |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| shortcutKey |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| size |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| spacing |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| stepdelta |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| subitems |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| text |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| textselection |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| title |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| titleLayout |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| type |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| value |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| visible |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| window |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| windowBounds |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Window class

The Window class exposes these static properties and functions. Instances created with new Window() do not define them.

## Window Class Attributes

### Window class — Window Class Attributes

### Window.frameworkName

Window.frameworkName

### Description

Danger

Deprecated; use ScriptUI.frameworkName instead.

### Type

String

### Window.version

Window.version

### Description

Danger

Deprecated; use ScriptUI.version instead.

### Type

String
