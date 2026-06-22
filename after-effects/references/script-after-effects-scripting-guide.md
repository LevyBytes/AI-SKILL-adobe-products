# After Effects Scripting Guide, Navigating The Guide, Contribution, Licensing Ownership ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: After Effects Scripting Guide; Navigating the Guide; Contribution; Licensing & Ownership; Introduction to scripting in After Effects; The ExtendScript language; The ExtendScript Toolkit (ESTK); The .jsx and .jsxbin file-name extensions; Activating full scripting features; Loading and running scripts; Javascript Variables; Javascript Operators; Javascript Classes; Changelog; After Effects 26; After Effects 25.

## After Effects Scripting Guide

Community documentation for the After Effects Scripting Guide is kept in this repo.

Its starting point was the Adobe After Effects CS6 Scripting Guide, since expanded and revised to match where AE scripting stands today.

## Navigating the Guide

### After Effects Scripting Guide — Navigating the Guide

Unsure where to begin? The Overview explains how scripting operates inside After Effects, while the Changelog tracks how the scripting API has shifted across releases.

## Contribution

### After Effects Scripting Guide — Contribution

Running and backing this effort is mostly the community itself; anyone is invited and urged to propose fixes, tweaks, notes or warnings, plus whatever else moves the project forward.

For the specifics on contributing and the recommended practices, consult the Documentation Contribution Guide.

## Licensing & Ownership

### After Effects Scripting Guide — Licensing & Ownership

Educational use is the sole reason this project exists.

All content is copyright Adobe Systems Incorporated.

## Introduction to scripting in After Effects

### Overview — Introduction to scripting in After Effects

Think of a script as an ordered set of commands directing an application through a sequence of operations. Most Adobe applications let you run scripts to take over repetitive chores, work through involved calculations, and even reach functionality the graphical user interface never surfaces. After Effects, for instance, can be told to restack a composition's layers, swap source text inside text layers, or fire off an e-mail once a render finishes.

JavaScript underlies both the After Effects expressions language and the After Effects ExtendScript scripting language, yet After Effects keeps its expression features and its scripting features apart as separate things. Information held by scripts — variables and functions, say — stays out of reach of expressions. The contrast is this: a script directs an application to act, whereas an expression declares what a property is. Still, since JavaScript is the shared root of both the After Effects expression language and ExtendScript, knowing one goes a long way toward grasping the other.

At the core of any scriptable application lies the object model. Working in Adobe After Effects, you build projects, compositions, and render queue items together with everything inside them: footage, images, solids, layers, masks, effects, and properties. In scripting terms each of these counts as an object. The ExtendScript objects defined for After Effects projects are what this guide sets out to describe.

A project, items, compositions, layers, and render queue items together make up the After Effects object model. Every object carries its own particular attributes, and each one in an After Effects project holds its own identity, even though scripting cannot reach all of them. To write scripts, you will want a working familiarity with the After Effects object model.

Note

To keep them distinct from After Effects' own notion of a property (an animatable value belonging to an effect, mask, or transform inside a single layer), the things JavaScript usually labels "properties" are referred to throughout this guide as "attributes."

Just about everything scripting pulls off mirrors what the After Effects graphical user interface can already do. That makes deep knowledge of the application and its graphical user interface a prerequisite for understanding how scripting fits into After Effects.

## The ExtendScript language

### Overview — The ExtendScript language

The language behind After Effects scripts is Adobe ExtendScript, a JavaScript variant extended for use across several Adobe applications — Photoshop, Illustrator, and InDesign among them. ExtendScript builds out the JavaScript language to match the ECMA-262 specification. Its 3rd Edition is what the After Effects scripting engine supports, covering that standard's notational and lexical conventions, types, objects, expressions, and statements. ExtendScript additionally carries the E4X ECMA-357 specification, the part that spells out how XML-format data is accessed.

A global debugging object — the dollar ($) object — comes built into ExtendScript, as does a reporting tool for ExtendScript elements, the ExtendScript Reflection interface.

### File and Folder Objects

Pathname syntax differs sharply from one operating system to the next, so Adobe ExtendScript supplies Extendscript File and Extendscript Folder objects that reach the underlying file system in a platform-independent way.

### ScriptUI User Interface Module

Creating and working with user interface elements is what the ExtendScript ScriptUI module makes possible. For windows and UI control elements, ScriptUI hands you an object model you can draw on to build a user interface for your scripts.

### Tools and Utilities

ExtendScript also throws in tools and features — a localization utility that supplies user-interface string values across languages, plus global functions (alert, confirm, and prompt) for popping short messages into dialog boxes.

### External Communication

A Socket object ships with ExtendScript, letting your After Effects scripts talk to remote systems.

### Interapplication Communication

By giving every Adobe application one shared scripting environment, ExtendScript opens up inter-application communication through scripts.

## The ExtendScript Toolkit (ESTK)

### Overview — The ExtendScript Toolkit (ESTK)

Bundled with After Effects is a script editor and debugger — the ExtendScript Toolkit (ESTK) — that gives you a handy place to author and try out your own scripts.

Launch the ESTK by choosing File > Scripts > Open Script Editor.

Should you prefer a different text editor for writing, editing, and saving scripts, pick one that won't tack on header information at save time and that writes in Unicode (UTF-8) encoding. Saving with UTF-8 encoding is a preference you can set in plenty of text editors. A few applications — Microsoft Word, for one — add header information to files by default, which can throw "line 0" errors and break your scripts.

The JavaScript Tools Guide covers the ExtendScript Toolkit in depth.

## The .jsx and .jsxbin file-name extensions

### Overview — The .jsx and .jsxbin file-name extensions

What sets ExtendScript script files apart is the .jsx file-name extension, a twist on the ordinary .js extension that goes with JavaScript files. For the application to pick them up correctly, After Effects scripts have to carry the .jsx file extension. Any UTF-8-encoded text file ending in .jsx gets treated as an ExtendScript file.

Through the ExtendScript Toolkit you can write out a binary form of an ExtendScript file, which takes the .jsxbin extension. A binary file like that might not play nicely with every scripting integration feature in After Effects.

## Activating full scripting features

### Overview — Activating full scripting features

By default, scripts may neither write files nor send or receive traffic across a network. Turn that on by choosing Edit > Preferences > General (Windows) or After Effects > Preferences > General (Mac OS) and ticking the Allow Scripts To Write Files And Access Network option.

Whenever an After Effects script holds an error that keeps it from finishing, the application throws an error message. That message spells out what kind of error occurred and which line of the script triggered it. When the application runs into a script error, the ExtendScript Toolkit (ESTK) debugger can pop open on its own. To spare casual users from seeing it, the feature ships turned off. Switch it on by choosing Preferences > General and selecting Enable JavaScript Debugger.

## Loading and running scripts

### Overview — Loading and running scripts

### Running scripts directly from the File > Scripts menu

On launch, After Effects scans the Scripts folder for scripts to bring in. Whatever loads becomes reachable from the File > Scripts menu.

Run a loaded script by choosing File > Scripts > [script name].

Editing a script while After Effects is open means you have to save those edits before they take hold. Drop a script into the Scripts folder while After Effects is running and the Scripts menu won't list it until you restart After Effects — though the Run Script File command lets you fire the new script right away.

### Running scripts using File > Scripts > Run Script File

For a script that hasn't been loaded, choose File > Scripts > Run Script File, find and pick the script, and click Open.

### Running scripts from the command line, a batch file, or an AppleScript script

If running a script from the Windows command line or by way of AppleScript is familiar territory, you can hand a script straight to the open After Effects application so it runs the script for you automatically.

Run a script from the command line by calling afterfx.exe there. Pass the -r switch plus the script's full path as arguments. Rather than spinning up a fresh copy of After Effects, this command runs the script inside the instance already open.

Example (for Windows):

```
afterfx -r c:\script_path\example_script.jsx
```

Paired with the software bundled with a programmable keyboard, this command-line trick lets you tie a script's launch to a keyboard shortcut.

Below are sample Windows command-line entries that push an After Effects script to the application without going through the After Effects user interface to run it.

The first one has you copy and paste your After Effects script straight onto the command line and then run it. Following the afterfx.exe -s command, the script text shows up inside quotation marks:

```
afterfx.exe -s "alert("You just sent an alert to After Effects")"
```

Or you can point to where the JSX file lives so it gets executed. For example:

```
afterfx.exe -r c:\myDocuments\Scripts\yourAEScriptHere.jsx
afterfx.exe -r "c:\myDocuments\Scripts\Script Name with Spaces.jsx"
```

Should the program shut immediately once the command runs, try stripping the quotes off the script path in this command line:

```
afterfx.exe -r c:\myDocuments\Scripts\Script Name with Spaces.jsx
```

### How to include After Effects scripting in an AppleScript (Mac OS)

What follow are three sample AppleScript scripts that deliver an existing JSX file holding an After Effects script to the application, skipping the After Effects user interface as the way to run it.

In the first, you drop your After Effects script straight into the Script Editor and run it. Since the script text sits inside quotation marks after the DoScript command, any quotes within the script itself need the backslash escape character, like so:

```
tell application "Adobe After Effects CS6"
    DoScript "alert(\"You just sent an alert to After Effects\")"
end tell
```

A second option is to throw up a dialog box that asks where the JSX file to run is located, like this:

```
set theFile to choose file
tell application "Adobe After Effects CS6"
    DoScriptFile theFile
end tell
```

This last one earns its keep most when you're actively editing a JSX script and want to ship it to After Effects to test or run. Using it well means switching into the application holding the open JSX file (here it's TextEdit); if the application's exact name escapes you, type your best guess in place of "TextEdit" and AppleScript will ask you to find it.

Just select the script text you mean to run, then trigger this AppleScript:

```
(*
This script sends the current selection to After Effects as a script.
*)

tell application "TextEdit"
    set the_script to text of front document
end tell

tell application "Adobe After Effects CS6" activate
    DoScript the_script
end tell
```

### Running scripts automatically during application startup or shutdown

The Scripts folder holds two subfolders named Startup and Shutdown. On launch and on quit respectively, After Effects runs the scripts inside them on its own, working through each folder in alphabetical order.

Scripts you want to run when the application starts up go in the Startup folder. They run once the application has initialized and every plug-in has loaded.

Because scripting runs in a shared global environment, any script that fires at startup can declare variables and functions that every other script can then see. In every case, once a script defines variables and functions by running, they stick around for later scripts throughout a given After Effects session. Quitting the application wipes all of those globally defined variables and functions. Give your script variables distinctive names so one script doesn't accidentally overwrite global variables meant to last the whole session.

You can also bolt attributes onto existing objects — the Application object, for instance — to extend the application for the benefit of other scripts.

Scripts in the Shutdown folder run while the application is quitting, after the project has closed but ahead of the rest of the application's shutdown.

### Running scripts from the Window menu

The bottom of the Window menu lists whatever scripts live in the ScriptUI Panels folder. A script written to present its user interface in a dockable panel belongs in the ScriptUI folder. These ScriptUI panels behave much like the stock panels of the After Effects user interface.

Rather than building a Window object and hanging controls off it, a ScriptUI Panels script works through the this object standing in for the panel. The code below, for example, drops a button onto a panel:

```
var myPanel = this;
myPanel.add("button", [10, 10, 100, 30], "Tool #1");
```

Build your user interface inside a function and this no longer works — it points at the function itself instead of the panel. The fix is to hand the this object to your function as an argument. For example:

```
function createUI(thisObj) {
    var myPanel = thisObj;
    myPanel.add("button", [10, 10, 100, 30], "Tool #1");
    return myPanel;
}
var myToolsPanel = createUI(this);
```

A script that refers to this can't be launched with the File > Scripts > Run Script File menu command. So that your script runs both as a Window object (reached from the File > Scripts menu) and as a native panel (reached from the Window menu), test whether this is a Panel object. For example:

```
function createUI(thisObj) {
    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "My Tools",
    [100, 100, 300, 300]);
    myPanel.add("button", [10, 10, 100, 30], "Tool #1");
    return myPanel;
}
var myToolsPanel = createUI(this);
```

### Stopping a running script

Press Esc or, in Mac OS, Cmd+period while focus sits on After Effects or on the script's own user interface to halt a script. That said, a script grinding through a large pile of data may not respond very quickly.

## Javascript Variables

### Elements of basic JavaScript relevant to After Effects scripting — Javascript Variables

Scripting runs in a shared global environment, which means a script that runs at startup can set up variables and functions reachable by all scripts. Across the board, the variables and functions a script defines when it runs carry over into later scripts for the duration of an After Effects session. When the application quits, every one of those globally defined variables and functions is discarded. Take care to name script variables uniquely, so that one script doesn't unintentionally clobber global variables meant to survive across a session.

### Keywords and Statement Syntax

| Keyword/Statement | Description |
| --- | --- |
| break | Standard JavaScript; exit the currently executing loop. |
| continue | JavaScript; cease execution of the current loop iteration. |
| case | Label used in a switch statement. |
| default | Label used in a switch statement when a case label is not found. |
| do...while | Standard JavaScript construct. Similar to the while loop, except loop condition evaluation occurs at the end of the loop. |
| false | Literal representing the Boolean false value. |
| for | Standard JavaScript loop construct. |
| for...in | Standard JavaScript construct. Provides a way to easily loop through the properties of an object. |
| function | Used to define a function. |
| if/if...else | Standard JavaScript conditional constructs. |
| new | Standard JavaScript constructor statement. |
| null | Assigned to a variable, array element, or object property to indicate that it does not contain a legalvalue. |
| return | Standard JavaScript way of returning a value from a function or exiting a function. |
| switch | Standard JavaScript way of evaluating a JavaScript expression and attempting to match the expression's value to a case label. |
| this | Standard JavaScript method of indicating the current object. |
| true | Literal representing the Boolean true value. |
| undefined | Indicates that the variable, array element, or object property has not yet been assigned a value. |
| var | Standard JavaScript syntax used to declare a local variable. |
| while | Standard JavaScript construct. Similar to the do...while loop, except loop condition evaluation occurs at the beginning of the loop. |
| with | Standard JavaScript construct used to specify an object to use in subsequent statements. |

## Javascript Operators

### Elements of basic JavaScript relevant to After Effects scripting — Javascript Operators

Every operator the After Effects scripting engine recognizes is listed and described in the tables that follow, which also lay out the precedence and associativity of them all.

### Description of Operators

| Operators | Description |
| --- | --- |
| new | Create new object instance. |
| delete | Delete property from an object. |
| typeof | Returns data type. |
| void | Returns undefined value. |
| . | Object member. |
| [] | Array element. |
| () | Function call. |
| ++ | Pre- or post-increment. |
| -- | Pre- or post-decrement. |
| - | Unary negation or subtraction. |
| ~ | Bitwise NOT. |
| ! | Logical NOT. |
| \* | Multiply. |
| / | Divide. |
| % | Modulo division. |
| + | Add. |
| << | Bitwise left shift. |
| >> | Bitwise right shift. |
| >>> | Unsigned bitwise right shift. |
| < | Less than. |
| <= | Less than or equal. |
| > | Greater than. |
| >= | Greater than or equal. |
| == | Equal. |
| != | Not equal. |
| & | Bitwise AND. |
| ^ | Bitwise XOR. |
| \| | Bitwise OR. |
| && | Logical AND. |
| \|\| | Logical OR. |
| ?: | Conditional (ternary). |
| = | Assignment. |
| += | Assignment with add operation. |
| -= | Assignment with subtract operation. |
| \*= | Assignment with multiply operation. |
| /= | Assignment with divide operation. |
| %= | Assignment with modulo division operation. |
| <<= | Assignment with bitwise left shift operation. |
| >>= | Assignment with bitwise right shift operation. |
| >>>= | Assignment with unsigned bitwise right shift operation. |
| &= | Assignment with bitwise AND operation. |
| ^= | Assignment with bitwise XOR operation. |
| \|= | Assignment with bitwise OR operation. |
| , | Multiple evaluation. |

### Operator Precedence

| Operators (highest precedence to lowest) | Associativity |
| --- | --- |
| [], (), . | left to right |
| new, delete, - (unary negation), !, typeof, void, ++, -- | right to left |
| \*, /, % | left to right |
| +, - (subtraction) | left to right |
| <<, >>, >>> | left to right |
| <, <=, >, >= | left to right |
| ==, != | left to right |
| & | left to right |
| ^ | left to right |
| \ | left to right |
| && | left to right |
| \|\| | left to right |
| ?: | right to left |
| ==, /=, %=, <<=, >>=, >>>=, &=, ^=, \=, +=, -=, \*= | right to left |
| , | left to right |

## Javascript Classes

### Elements of basic JavaScript relevant to After Effects scripting — Javascript Classes

### Class Inheritance

Here's a quick tour of object-oriented programming and inheritance. Already comfortable with it? Feel free to skip ahead.

In Javascript/Extendscript, Class Inheritance is the notion that you can spell out certain properties or methods on an object, then spin up a subclass (a "child class") that picks up all of them and tacks on more, narrowing the object further.

Take "automobile" as one base class: "cars" would be a subclass of "automobile," and "sedan" and "convertible" two subclasses of the "car" base class. Because inheritance runs straight down the chain "automobile" -> "car" -> "convertible," any property or method on "automobile" is reachable from "convertible" too.

### Class Inheritance in After Effects

This matters to a script developer because so much of the After Effects scripting environment is built this way.

You can spot it as a user in After Effects layers: every layer lives in the timeline and carries a Name, Index, and Label Color, yet certain layer types own properties others lack — Audio layers, for example, can't be enabled or disabled, and Camera and Light layers can't take effects. All of them share the base "Layer" traits while each is a subclass with properties of its own.

After Effects scripting carries the same idea. A great many API-accessible elements sit inside class hierarchies that inherit and sharpen properties and methods. That lets the After Effects developers reuse existing structures when building new API-accessible components, and it lets script developers lean on that same hierarchy to drive the After Effects DOM.

Reusing the earlier example, the Layer object (itself a subclass of the PropertyGroup object) is the base class for the AVLayer object, the CameraLayer object, and the LightLayer object. So CameraLayer takes on everything from Layer, which takes on everything from PropertyGroup, which in turn takes on everything from PropertyBase.

That's the reason the name property never appears on the Layer page even though layer.name still works in your script — name comes down from PropertyBase.name.

Warning

A handful of specific cases strip properties and methods out during inheritance rather than adding them. Those are flagged on the object page they apply to.

### Checking Classes

In Javascript you would normally reach for instanceof to test whether some element is the object type you expect.

Bear in mind you have to test against the narrowest class there is; an AE Text Layer returns true only for layer instanceof TextLayer, and false for every parent class (layer instanceof AVLayer, layer instanceof Layer, and so on).

All that said, some API elements serve purely as base classes for others; they hold inherited properties and methods, but no DOM element is precisely that type.

Run object instanceof {class} against one of these and AE will either throw an error saying {class} is undefined or hand back false, depending on the way the class was implemented. Which base-only classes show which behaviour is documented in the list below.

## Changelog

Recent additions and changes to scripting.

## After Effects 26

### Changelog — After Effects 26

### After Effects 26.3 Beta Build 58 (April 2026)

- Added: LayerCollection.addParametricMesh()
- Added: ParametricMeshLayer object
- Added: ParametricMeshLayer.ParametricMeshType
- Added: ParametricMeshLayer.ParametricMeshOptions
- Added: ParametricMeshLayer.ParametricBevelOptions

### After Effects 26.0 (January 2026)

- Added: PropertyGroup.addVariableFontAxis()
- Added: Property.propertyParameters
- Added: Property.valueText

## After Effects 25

### Changelog — After Effects 25

### After Effects 25.4 (August 2025)

- Scripting method added: app.restart()

### After Effects 25.2 (April 2025)

- Updated: LightLayer.lightSource

### After Effects 25.1 (December 2024)

- Added: CharacterRange.pasteFrom()
- Added: FontObject.hasGlyphsFor()
- Added: FontObject.otherFontsWithSameDict
- Added: FontsObject.getCTScriptForString()
- Added: FontsObject.getDefaultFontForCTScript()
- Added: FontsObject.setDefaultFontForCTScript()

## See also

- [Application](script-application.md)
