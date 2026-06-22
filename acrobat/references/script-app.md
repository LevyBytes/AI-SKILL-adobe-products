# App (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## JavaScript APIs — app

A static JavaScript object standing in for the Acrobat application itself. It supplies a range of Acrobat-specific functions alongside assorted utility and convenience routines.

### app properties

### activeDocs

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

Yes

All

array

R

| --- | --- | --- | --- | --- | --- |

Holds an array of one Doc object per active document. With nothing active, activeDocs comes back empty — behaving just as d = new Array(0) would in plain JavaScript.

Run d = app.activeDocs at the console before Acrobat 7.0 and you would see [object Global] printed. Starting at Acrobat 7.0, the console no longer prints any toString() value.

Note

Keep the following version differences in mind:

Under Acrobat 5.0, the property gives an array with a Doc object for every active document.

At Acrobat 5.0.5, it was revised to list Doc objects only for those open documents whose disclosed property on the Doc object is true.

From the Acrobat 5.0.5 Accessibility and Forms Patch onward, and likewise in Acrobat 6.0 and later, the rule splits by event: during a batch, console, or menu event, activeDocs disregards disclosed and returns Doc objects for all active documents; during any other event, it returns only those whose disclosed is set to true.

From Acrobat 7.0 on, running JavaScript via a menu event lost its privileged status. See Privileged context.

Any documents that app.openDoc opened with bHidden set to true also show up in the array that app.activeDocs returns, within the security limits noted above.

Example: Here the code scans the open documents looking for one whose title is myDoc, then drops a button into it through the addField method on the Doc object. Whether disclosure is required turns on which Acrobat version runs the code and where that code lives (console versus a mouse-up action, say).

```
var d = app.activeDocs;
for (var i=0; i < d.length; i++)
if (d[i].info.Title == "myDoc") {
    var f = d[i].addField("myButton", "button", 0, [20, 100, 100, 20]);
    f.setAction("MouseUp","app.beep(0)");
    f.fillColor=color.gray;99849106
}
```

### calculate

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

Boolean

R/W

When true — the default — calculations are allowed to run; when false, they are blocked.

Relying on this property is discouraged; favor the calculate property on the Doc object instead.

### constants

Version (Key)

Save-Prefs

Security

Product

Type

Access

7.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

A container object that stores assorted constant values. For now it exposes just one property, align.

That app.constants.align object carries the possible properties left, center, right, top, and bottom to denote alignment. They come in handy wherever alignment must be specified, such as placing a watermark.

Example: See the Doc object methods addWatermarkFromFile and addWatermarkFromText for examples.

### focusRect

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.05

P

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Switches the focus rectangle on or off. That rectangle is the faint dotted outline shown around buttons, check boxes, radio buttons, and signatures to signal that the form field holds keyboard focus. Setting it true turns the rectangle on.

Example: Turn off the focus rectangle.

```
app.focusRect = false;
```

### formsVersion

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

Gives the version of the viewer’s forms software. Read it when you need to know whether objects, properties, or methods introduced in later releases exist, so your scripts can stay backward compatible.

Example: Toggle fullscreen mode.

```
if (typeof app.formsVersion != "undefined" && app.formsVersion >= 5.0) {
        app.fs.defaultTransition = "";
        app.fs.isFullScreen = !app.fs.isFullScreen;
}
else app.fullscreen = !app.fullscreen;
```

### fromPDFConverters

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

An array holding file-type conversion ID strings. Any one of these strings is valid input to the saveAs method on the Doc object.

Example: List all currently supported conversion ID strings.

```
for ( var i = 0; i < app.fromPDFConverters.length; i++)
    console.println(app.fromPDFConverters[i]);
```

### fs

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

A FullScreen object that gives you a way into the fullscreen properties.

Example:

```
// This code puts the viewer into fullscreen (presentation) mode.
app.fs.isFullScreen = true;
```

See also fullScreenObject. isFullScreen.

### fullscreen

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

Boolean

R/W

Steer clear of this property; the isFullScreen property on the FullScreen object replaces it. Calling the fs method yields a FullScreen object through which the fullscreen properties are reached.

Determines whether the viewer runs in full screen mode or in ordinary viewing mode.

Note

You cannot push a PDF into full screen mode while it is being read inside a web browser. Full screen can be triggered from within the browser, but it takes effect only for a document open in the standalone Acrobat viewer, if one exists — never for the browser itself.

### language

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Which language the running Acrobat viewer uses. The value is one of the strings below.

String

Language

CHS

Chinese Simplified

CHT

Chinese Traditional

DAN

Danish

DEU

German

ENU

English

ESP

Spanish

FRA

French

ITA

Italian

KOR

Korean

JPN

Japanese

NLD

Dutch

NOR

Norwegian

PTB

Brazilian Portuguese

SUO

Finnish

SVE

Swedish

| --- | --- |

### media

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

Supplies a broad set of properties and methods for configuring and steering a multimedia player.

The app.media object lists every property and method it carries, together with plenty of worked examples.

### monitors

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Monitors object

R

| --- | --- | --- | --- | --- | --- |

A Monitors object — an array of one or more Monitor objects, one per display monitor wired to the user’s system. Every read of app.monitors hands back a freshly rebuilt copy of that array.

The Monitors object also offers several methods for choosing a display monitor; alternatively, your JavaScript can walk the array by hand.

Example: Count the number of display monitors connected to the user’s system.

```
var monitors = app.monitors;
console.println("There are " + monitors.length
    + " monitor(s) connected to this system.");
```

### numPlugIns

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

Note

The plugIns property has taken over from this method.

Tells how many plug-ins Acrobat has loaded.

### openInPlace

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

P

No

All

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

Says whether cross-document links open inside the current window or spawn a new one.

Example: Open cross-document links in the same window.

```
app.openInPlace = true;
```

### platform

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Identifies which platform the script runs on now. Three values are valid:

```
WIN
MAC
UNIX
```

### plugIns

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

Array

R

| --- | --- | --- | --- | --- | --- |

An array of PlugIn objects for the plug-ins presently loaded in the viewer.

Example:

```
// Get array of PlugIn objects
var aPlugins = app.plugIns;
// Get number of plug-ins
var nPlugins = aPlugins.length;
// Enumerate names of all plug-ins
for ( var i = 0; i < nPlugins; i++)
    console.println("Plugin #"+i+" is " + aPlugins[i].name);
```

### printColorProfiles

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Acrobat only

Array of Strings

R

| --- | --- | --- | --- | --- | --- |

The set of printer color spaces on hand. Each entry works as the colorProfile property value on a PrintParams object.

Example: Print out a listing of available printer color spaces:

```
var l = app.printColorProfiles.length
for ( var i = 0; i < l; i++)
    console.println("(" + (i+1) + ") " + app.printColorProfiles[i]);
```

### printerNames

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Array of Strings

R

| --- | --- | --- | --- | --- | --- |

The set of printers on hand. Each entry is valid for the printerName property on the PrintParams object, and when the system has no printers installed you get an empty array back.

Example: Print out a listing of available printers:

```
var l = app.printerNames.length
for ( var i = 0; i < l; i++)
    console.println("(" + (i+1) + ") " + app.printerNames[i]);
```

### runtimeHighlight

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Acrobat Pro only

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

When true, form fields display their background color and their hover color.

Example: If run-time highlighting is off (false), do nothing, otherwise change the preferences.

```
if (!app.runtimeHighlight)
{
    app.runtimeHighlight = true;
    app.runtimeHighlightColor = color.red;
}
```

### runtimeHighlightColor

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

Acrobat Pro only

Color array

R/W

| --- | --- | --- | --- | --- | --- |

Assigns the color used when form fields are highlighted at runtime.

This property takes a color array as its value. (See Color arrays for details.)

Example: See the runtimeHighlight property.

### thermometer

Version (Key)

Save-Prefs

Security

Product

Type

Access

6.0

No

No

All

Object

R

| --- | --- | --- | --- | --- | --- |

A Thermometer object — this pairs a status window with a progress bar so the user can tell that a time-consuming operation is still running.

Example: See the Thermometer object.

### toolbar

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

Acrobat Pro only

Boolean

R/W

| --- | --- | --- | --- | --- | --- |

From a script, this controls the visibility of Acrobat's horizontal and vertical toolbars in Acrobat 9 and earlier. Under Acrobat X the same property toggles the Plugin Addon Tools panel docked along the right edge of the display area instead. Whether you are on Acrobat 9 (toolbar) or Acrobat X (tools panel), the property leaves external windows untouched — meaning an Acrobat view embedded inside a web browser keeps its toolbar or panel.

Example: Hide the toolbar.

```
app.toolbar = false;
```

### toolbarHorizontal

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

P

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Note

As of Acrobat 5.0 this property is deprecated; reading or writing it simply behaves the same as toolbar.

A script may use this to display or conceal the horizontal Acrobat toolbar. Toolbars in external windows — such as an Acrobat view inside a web browser — are not affected.

### toolbarVertical

Version (Key)

Save-Prefs

Security

Product

Type

Access

deprecated

No

No

P

boolean

R/W

| --- | --- | --- | --- | --- | --- |

Note

As of Acrobat 5.0 this property is deprecated; reading or writing it simply behaves the same as toolbar.

A script may use this to display or conceal the vertical Acrobat toolbar. Toolbars in external windows — such as an Acrobat view inside a web browser — are not affected.

### viewerType

Version (Key)

Save-Prefs

Security

Product

Type

Access

3.01

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Reports which viewer application is currently running, as one of the strings below.

Value

Description

Reader

Acrobat Reader version 5.0 or earlier / Adobe Reader version 5.1 or later

Exchange

Adobe Acrobat earlier than version 6.0 / Acrobat Standard version 6.0 or later

Exchange-Pro

Acrobat Pro version 6.0 or later

| --- | --- |

### viewerVariation

Version (Key)

Save-Prefs

Security

Product

Type

Access

5.0

No

No

All

String

R

| --- | --- | --- | --- | --- | --- |

Reports how the running viewer application is packaged, returning one of these strings:

```
Reader
Fill-In
Business Tools
Full
```

### viewerVersion

Version (Key)

Save-Prefs

Security

Product

Type

Access

4.0

No

No

All

Number

R

| --- | --- | --- | --- | --- | --- |

Reports the version number that the running viewer application carries.

### app methods

### addMenuItem

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Inserts a new item into a menu.

Note

From Acrobat X onward the set of top-level menus was trimmed down. Only File, Edit, View, Window, and Help remain at the top level in Acrobat X and later, so any earlier script that pointed at a top-level menu no longer present will fail to resolve that reference.

Note

Calling this method is only valid during application startup or a console event. The event object topic covers how JavaScript events work.

Companion methods include addSubMenu, execMenuItem, hideMenuItem, and listMenuItems.

Parameters

Parameter

Description

cName

This is the menu item's language-independent name, which other methods (hideMenuItem among them) rely on to reach the item.

cUser

(optional) A language-dependent user string shown as the displayed menu item name. When cUser is omitted, cName serves as the displayed name instead.

cParent

The name identifying the parent menu item whose submenu receives the new entry. An exception is raised if cParent owns no submenu. Use listMenuItems to look up menu item names.

nPos

(optional) Where inside the submenu the new item lands. By default the item is appended at the submenu's end. Pass 0 to drop it at the very top of the submenu. From Acrobat 6.0 on, nPos may also hold a menu item's language-independent name. (Acrobat 6.0) Supplied as a string, nPos is read as a named menu item — a language-independent name — and that named item fixes where the new menu item is inserted. Further detail appears under bPrepend. A handful of alphabetized menus pay no attention to nPos. Those menus are these: the opening section under View > Navigation Panels; the opening section under View > Toolbars; and the Tools menu, where a numeric nPos goes unheeded. Drop an item into the Tools menu and it surfaces at that menu's top regardless. Pass nPos as a string pointing to another user-defined menu item, though, and it is respected.

cExec

A string expression evaluated the moment the user picks the menu item. - From Acrobat 7.0 onward, running JavaScript by way of a menu event is no longer privileged. Refer to Privileged context.

cEnable

(optional) A string expression evaluated to decide whether the menu item should be enabled. By default the item is always enabled. Have this expression set event.rc to false when the item should be disabled.

cMarked

(optional) A string expression that decides whether a check mark sits beside the menu item. Set event.rc to false in the expression to clear the check and true to apply it. By default the item carries no mark.

bPrepend

(optional, Acrobat 6.0) Fixes where the new menu item sits relative to the spot named by nPos. It defaults to false. When bPrepend is true, insertion follows these rules: - With nPos a string, the new item lands ahead of the named item. - With nPos a number, the new item lands ahead of the numbered item. - Should the named item be missing, or nPos fall outside the range from zero through the count of items inclusive, the new item becomes the menu's first entry rather than its last. bPrepend comes in handy when the named item heads up a group.

| --- | --- |

Example 1: Place at the File menu's top an item whose alert dialog box shows the title of the active document, keeping that item enabled only while a document is open.

```
app.addMenuItem({ cName: "Hello", cParent: "File",
    cExec: "app.alert(event.target.info.title, 3);",
    cEnable: "event.rc = (event.target != null);",
    nPos: 0
});
```

Example 2 (Acrobat 6.0)

Place two menu items in the File menu, one before the Close item and the other after the Close item.

```
// Insert after the "Close" item (the default behavior)
app.addMenuItem( { cName: "myItem1", cUser: "My Item 1", cParent:
    "File", cExec: "_myProc1()", nPos: "Close"});
// Insert before the "Close" item, set bPrepend to true.
app.addMenuItem( { cName: "myItem2", cUser: "My Item 2", cParent:
    "File", cExec: "_myProc2()", nPos: "Close", bPrepend: true });
```

### addSubMenu

Version (Key)

Save-Prefs

Security

Product

5.0

No

Yes

All

| --- | --- | --- | --- |

Attaches a menu item that carries its own submenu to the application.

Companion methods include addMenuItem, execMenuItem, hideMenuItem, and listMenuItems.

Note

From Acrobat X onward the set of top-level menus was trimmed down. Only File, Edit, View, Window, and Help remain at the top level in Acrobat X and later, so any earlier script that pointed at a top-level menu no longer present will fail to resolve that reference.

Note

Calling this method is only valid during application startup or a console event. The event object topic covers how JavaScript events work.

Companion methods include addSubMenu, execMenuItem, hideMenuItem, and listMenuItems.

Parameter

Description

cName

The menu item's language-independent name. That language-independent name is what gives access to the item — for instance, via hideMenuItem.

cUser

(optional) A language-dependent user string shown as the displayed menu item name. When cUser is omitted, cName serves as the displayed name instead.

cParent

The name of the parent menu item that is to receive the new submenu. Menu item names can be looked up with listMenuItems.

nPos

(optional) Where inside the parent's submenu the new submenu is placed. The default appends it to the end of the parent's submenu. Pass 0 to set the submenu at the top of the parent's submenu. A handful of alphabetized menus pay no attention to nPos. Those menus are these: the opening section under View > Navigational Panels; the opening section under View > Toolbars; and the Tools menu, where a numeric nPos goes unheeded. Drop an item into the Tools menu and it surfaces at that menu's top regardless. When nPos arrives as a string pointing to another user-defined menu item, however, it is respected.

| --- | --- |

Example: See the newDoc method.

### addToolButton

Version (Key)

Save-Prefs

Security

Product

6.0

No

No

All

| --- | --- | --- | --- |

Puts a button on the "Add-on" toolbar under Acrobat 9 or earlier. Under Acrobat X, the button is placed instead on the Plugin Addon Tools panel along the right edge of the display area.

Suppose a document — say docA.pdf — is the active one in Acrobat at the moment this method runs to add a button. Acrobat then drops that button once docA.pdf stops being active or gets closed. In the first of those cases, should docA.pdf become active once more, the button returns to the toolbar on its own.

Icons are capped at 20 by 20 pixels. Supply one any larger and an exception is raised.

Note

(Acrobat 7.0) Several changes govern using this method securely. Invoking addToolButton from the console or during application initialization counts as privileged, trusted execution.

Call this method from a script that lacks privilege, however, and the "JavaScript Window" warning shows up on the "Add-on" toolbar, which then cannot be docked. (See Privileged context.)

Companion method: removeToolButton.

Parameters

Parameter

Description

cName

A language-independent identifier, unique to the button. That language-independent name is how other methods (removeToolButton, for one) reach the button. - cName has to be unique. Guard against a name clash by consulting listToolbarButtons, which reports every toolbar button name in place at the moment.

oIcon

An Icon Stream object. From Acrobat 7.0 onward this parameter becomes optional whenever a cLabel is supplied.

cExec

The string expression evaluated when the button is chosen.

cEnable

(optional) A string expression that settles whether the toolbutton is enabled. By default the button stays enabled. Have the expression set event.rc to false to disable it.

cMarked

(optional) A string expression that settles whether the toolbutton is marked. By default the button carries no mark. Have the expression set event.rc to true to mark it.

cTooltext

(optional) The help text shown for the button while the pointer rests over the toolbutton. By default there is no tool tip. - Steer clear of extended characters inside cTooltext, since the string can end up truncated.

nPos
