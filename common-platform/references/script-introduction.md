# Introduction, Extendscript Overview, Example Code, Development And Debugging Tools ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Introduction; ExtendScript overview; Example code; Development and debugging tools; Cross-platform file-system access; User-interface development tools; Interapplication communication and messaging; External communication; External shared-library integration; Additional utilities and features; Scripting for specific applications; Startup scripts; JavaScript variables; The VS Code Debugger; External Links; Getting Started with the VS Code Debugger; Installing the extension; Opening a project directory.

## Introduction

JavaScript is a platform-independent scripting language for controlling many Adobe applications, automating tasks, and extending applications with extra tools for other users. Compared with many programming approaches, scripting is usually easier to learn and use, and it is well suited to repetitive work.

- New scripters should start with Adobe Creative Suite: Introduction to Scripting. It covers core scripting ideas and the available scripting languages, including JavaScript. Because JavaScript and the other scripting languages use object-oriented concepts, that book also introduces object-oriented programming and document object models.
- Applications that support JavaScript provide their own Scripting Guide, with an introduction to that application's object model plus object reference material. This document focuses on JavaScript features, tools, and objects shared across the JavaScript-enabled Adobe application set.
  - Public standards site for JavaScript: www.ecma-international.org
  - JavaScript: The Definitive Guide, David Flanagan, O'Reily Media Inc, 2002. ISBN 0-596-00048-0
  - JavaScript Bible, Danny Goodman, Hungry Minds Inc, 2001. ISBN 0-7645-4718-6
  - Adobe Scripting, Chandler McWilliams, Wiley Publishing, Inc., 2003. ISBN 0-7645-2455-0

## ExtendScript overview

ExtendScript is Adobe's expanded implementation of JavaScript, used by many Adobe applications that expose scripting interfaces. It follows the ECMA JavaScript specification while adding selected features and utilities.

This document covers JavaScript modules, tools, utilities, and features shared across JavaScript-enabled Adobe applications.

Note

Some modules are optional, and individual features within a module can also be optional. Check each application's product documentation to see which modules and features it implements.

## Example code

### ExtendScript overview — Example code

The Adobe ExtendScript SDK includes this document and a collection of sample code showing ScriptUI, interapplication communication, and external communication features. This book names those samples when it uses them to explain concepts and techniques.

The latest and final SDK can be downloaded from Github. Older versions may still be reachable through direct links.

Sample files live below the ExtendScript SDK root directory:

- SDKroot/Samples/javascript/: example scripts
- SDKroot/Samples/resources/: resource files, including image or flash files

### Messaging framework API reference — Example code

The Adobe ExtendScript SDK sample-code set includes these examples for interapplication messaging:

| Interapplication messaging example | Description |
| --- | --- |
| MessagingBetweenApps.jsx | Shows how to send a message to a Creative Suite application and receive a response. |
| MessageSendingToInDesign.jsx | Sends message to InDesign through BridgeTalk. |
| SendArrayToPhotoshop.jsx | Sends message to Photoshop that creates an array in the target and passes it back to the sender. |
| SendObjectToPhotoshop.jsx | Sends message to Photoshop that creates a JavaScript object in the target and passes it back to the sender. |
| SendDOMObjectToPhotoshop.jsx | Sends message to Photoshop that creates a Photoshop object in the target and passes values from it back to the sender. |
| SaveAsDifferentFileType.jsx | Locates an image file, uses messaging to load it into Photoshop and save it as a different file type. |

### Integrating External Libraries — Example code

The Adobe ExtendScript SDK sample code includes an example showing how to write a C/C++ shared library for JavaScript integration. It is located in this directory:

```
sdkInstall/sdksamples/cpp/
```

The sample demonstrates a C/C++ plug-in for Adobe Bridge that uses the ExternalObject mechanism, allowing C/C++ code to be called from JavaScript. Microsoft Visual Studio 2005 and XCode 2.4 project files are included under sdkInstall/sdksamples/cpp/build subfolders.

## Development and debugging tools

### ExtendScript overview — Development and debugging tools

For script development, debugging, and testing, Adobe supplies the ExtendScript Toolkit, an interactive environment for ExtendScript that is installed with JavaScript-enabled applications.

See The ExtendScript Toolkit for full information.

ExtendScript also includes global objects for development and debugging:

- The Dollar ($) object, a global debugging object.
- The ExtendScript reflection interface, a reporting utility for ExtendScript elements.

See ExtendScript Tools and Features for the complete treatment.

## Cross-platform file-system access

### ExtendScript overview — Cross-platform file-system access

File and Folder classes in Adobe ExtendScript make cross-platform file-system access simpler. All applications that expose a JavaScript interface can use these classes.

See File System Access for full information.

## User-interface development tools

### ExtendScript overview — User-interface development tools

Adobe's ScriptUI module works with the ExtendScript JavaScript interpreter, letting JavaScript scripts create and interact with user interface elements. Its object model covers windows and user-interface controls inside an Adobe application. See User-Interface Tools for full information.

ExtendScript additionally provides:

- Global functions for localizing display strings; see Localizing ExtendScript strings
- Global functions for showing short dialog messages; see User notification dialogs.
- An object type for measurement values paired with units; see Specifying measurement values.

## Interapplication communication and messaging

### ExtendScript overview — Interapplication communication and messaging

Across Adobe applications that enable JavaScript, ExtendScript supplies a shared scripting environment and supports script-based communication between applications.

Communication is available at different levels through cross-DOM functions and the messaging framework.

- Cross-DOM functions form a small basic set shared by message-enabled applications. A script can, for example, call the target application's open or print function to open or print files there. Beyond the shared basic set, some applications export broader groups of JavaScript functions for use by other applications.
- The interapplication messaging framework is an application programming interface (API) for extensive control over communication between applications. Through this API, scripts can send messages to other applications and receive results, or receive messages from other applications and return results. The data passed between applications is usually JavaScript scripts. However, the messaging framework can be extended, allowing you to define different data types for transfer between applications and specify how those types are handled.

See Interapplication Communication with Scripts for full information.

## External communication

### ExtendScript overview — External communication

ExtendScript can communicate with other computers or internet services through standard protocols. The Socket object provides low-level TCP connection support.

See External Communication Tools for full information.

## External shared-library integration

### ExtendScript overview — External shared-library integration

To extend an application's JavaScript DOM, write a C or C++ shared library, compile it for the platform in use, and load it into JavaScript as an ExternalObject instance. The shared-library form is a DLL on Windows, a bundle or framework on Mac OS, or a SharedObject on UNIX.

See Integrating External Libraries for full information.

## Additional utilities and features

### ExtendScript overview — Additional utilities and features

ExtendScript includes these utilities and features:

- Tools for combining scripts, including a #include directive. See Preprocessor directives.
- Class-by-class support for extending or overriding math and logical operator behavior. See Operator overloading.
- See ExtendScript Tools and Features for full information.

- Compiling JavaScript with the ExtendScript Toolkit. See The ExtendScript Toolkit.
- XML integration: the XML object defined by ExtendScript lets JavaScript scripts process XML. See Integrating XML into JavaScript.
- Scripting support for XMP metadata manipulation: XMPScript supplies a JavaScript API for the Adobe

## Scripting for specific applications

At startup, Adobe JavaScript-enabled applications run JSX files found in their startup directories; some are installed by the applications, while scripters can install others. Each application sets its own rules for locations, write access, and loading order.

Separately, individual applications may search specific directories for application-specific scripts, and those locations may be configurable. Some applications expose scripts from menus; all applications let you load and run scripts through the ExtendScript Toolkit.

For instructions on loading and running scripts in a particular application, see that application's JavaScript Scripting Guide.

## Startup scripts

### Scripting for specific applications — Startup scripts

A startup-directory script may run when more than one application starts. If you put a script in such a directory, include code that checks whether the intended application is executing it. The appName static property of the BridgeTalk class can be used for that check. For example:

```
if ( BridgeTalk.appName == "bridge" ) {
    //continue executing script
}
```

Before a script running in one application communicates with another application or adds functionality dependent on another application, check whether that required application/version is installed. This check can call the `BridgeTalk.getSpecifier()` static function, as shown here:

```
if ( BridgeTalk.appName == "bridge-2.0" ) {
    // Check to see that Photoshop is installed.
    if ( BridgeTalk.getSpecifier( "photoshop", 10 ) ){
        // Add the Photoshop automate menu to the Adobe Bridge UI.
    }
}
```

See Interapplication Communication with Scripts for details of interapplication communication.

## JavaScript variables

### Scripting for specific applications — JavaScript variables

All scripts run inside a shared scripting environment. A startup script can place variables or functions there, and other scripts can then access those names. After a script defines them, the definitions stay available to later scripts during the same application session. Quitting the application clears those global variables and functions. Use distinctive variable names in scripts so one script does not accidentally overwrite global values that another script expects to remain available for the session.

## The VS Code Debugger

Adobe deprecated The ExtendScript Toolkit, partly because MacOS no longer supports 32-bit apps, so the supported debugging route for Extendscript is VS Code with the Adobe Extendscript extension.

Expect rough edges: it is somewhat buggy, often unreliable, and appears aimed at self-contained scripts that run immediately rather than ScriptUI panels. In selected cases, though, it can still help.

These docs are still being revised and expanded; contributions are welcome.

- Getting Started with the VS Code Debugger
- VS Code Extension Features

## External Links

### The VS Code Debugger — External Links

For background on the VS Code debugger and official announcements about it, consult these items:

- ExtendScript Debugger for Visual Studio Code Public Release
- The Future of ExtendScript Development: A VSCode Plugin

## Getting Started with the VS Code Debugger

The VS Code debugger requires more setup than the ExtendScript Toolkit. This page is meant to make that setup easier to follow.

Note

Use this guide when you need to install and run the Extendscript for VS Code debugger.

For help with individual extension capabilities, see VS Code Extension Features.

In most cases, work through these tasks:

- Installing the extension
- Opening a project directory
- Creating a debug launch task
- Attaching the debugger
- Running the debugger
- Futher reading

## Installing the extension

### Getting Started with the VS Code Debugger — Installing the extension

Install it from the extension marketplace link, or open VS Code's extension browser, search for "ExtendScript Debugger", and install from there.

If you use the VS Code search route, confirm that the extension is the one from Adobe.

## Opening a project directory

### Getting Started with the VS Code Debugger — Opening a project directory

- File > Open Folder
- Select your project directory

## Creating a debug launch task

### Getting Started with the VS Code Debugger — Creating a debug launch task

Before the extension can debug extendscript, create a VS Code debug task for it to run.

Inside your project directory:

- add a folder named .vscode (with the period)
- inside that folder, add launch.json
- insert this code:

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "extendscript-debug",
            "request": "attach",
            "name": "extendScript-Debug attach",
        }
    ]
}
```

This configuration makes VSCode's debugger attach to the host app you select.

## Attaching the debugger

### Getting Started with the VS Code Debugger — Attaching the debugger

After the extension is installed:

- Open a JS workspace
- Start your chosen Adobe app
- In the sidebar, open the run and Debug tab, or press Ctrl+Shift+D; from the drop-down menu choose "extendScript-Debug attach"
- In the drop-down that appears, select the host app

When attachment succeeds, the bottom Status bar changes to orange. The debug console can evaluate commands and inspect variables even when no script is currently running.

## Running the debugger

### Getting Started with the VS Code Debugger — Running the debugger

After your environment is prepared and your script is built:

- To launch the current script, press the status bar button labelled "▷ Eval in host app name"; alternatively, choose ExtendScript - Evaluate Script In Attached Host from the command pallette.
- When errors occur, variables and a call stack are available for inspection

Note

When a final jsx file is compiled from several source files, debugger errors appear in the compiled script rather than the original sources. Unless you generate source maps or use a similar approach, you must trace the failing source file yourself.

This may not apply to compiled files using #include

## Futher reading

### Getting Started with the VS Code Debugger — Futher reading

- Debugging in VS Code

## VS Code Extension Features

After the Extendscript VS Code Extension is installed and running, additional features become available, including export to jsxbin, breakpoints in code, and more.

Note

This guide explains how to use specific Extendscript for VS Code features.

For setup instructions for the extension itself, see Getting Started with the VS Code Debugger.

## Using Breakpoints

### VS Code Extension Features — Using Breakpoints

Breakpoints pause code execution on a chosen line so you can inspect the call stack, variable state, and function arguments at that moment.

There are two ways to create breakpoints: use VS Code's native Breakpoints system, or use Extendscript's inline breakpoint method.

### VS Code Breakpoints

With VS Code, you can set VS Code breakpoints and have the debugger honor them. See the official Visual Studio article on breakpoints.

### Extendscript Breakpoints

Place $.bp() anywhere in your source file, and the debugger stops there so you can inspect the call stack / data browser at that point.

This behaves the same way as the debugger; method in browser-based Javascript.

See bp() for more info.

## Exporting as Binary

### VS Code Extension Features — Exporting as Binary

The older Extendscript ToolKit made it easy to save projects as obfuscated binary files. That capability is still present in the VS Code debugger.

Exports can be started from the vscode interface or from a shell.

### JSXBIN from VS Code

For binary export from VS Code, choose one of these methods:

- Keep the file open, right-click the document, and press 'Export as Binary'
- Use the command palette (Ctrl + Shift + P), then type 'Export as Binary'
- Press the matching shortcut (Ctrl + Shift + J)

### JSXBIN from the Command Line

The VS Code extension can export a single file or a whole directory from the command line, but the process requires some setup.

Warning

A built-in method exists, but it can be fairly awkward to use. As another option, consider the gulp-accessible npm package jsxbin. It performs the same task as the steps below with much less manual work.

Reports indicate that this package can have problems on Windows. For a different gulp task, you can try this script from Justin Taylor.

Both approaches above require the VS Code extension to be installed.

Saved output uses the same directory and filename, with .jsxbin as the suffix. Directories supplied as input are traversed recursively.

- Substitute the current version # for X.X.X
- MacOS: $HOME/.vscode/extensions/adobe.extendscript-debug-X.X.X/public-scripts/exportToJSX.js
- Windows: %USERPROFILE%\.vscode\extensions\adobe.extendscript-debug-X.X.X\public-scripts\exportToJSX.js

- -f, --force: replace any existing '.jsxbin' file/files.
- -n, --name: provide a '.js/.jsx' script path, or a directory path that contains those files.
- h, --help: print the help text, then exit

- Invoke it from your command line with node path/to/exportToJSX.js [options] [file/directory]

### Command examples

Single-script export

```
sh node "C:/Users/Dev/.vscode/extensions/adobe.extendscript-debug-1.1.2/public-scripts/exportToJSX.js" "d:/projects/scripting/coolTool.jsx"
```

Folder export with overwrite

```
sh node "C:/Users/Dev/.vscode/extensions/adobe.extendscript-debug-1.1.2/public-scripts/exportToJSX.js" --force "d:/projects/scripting/"
```

## The ExtendScript Toolkit

Warning

The Extendscript Toolkit is deprecated; use The VS Code Debugger instead.

This material remains available for legacy reference, but the Extendscript Toolkit is no longer actively maintained or supported. It also does not run on MacOS versions that are 64-bit only.

The ExtendScript Toolkit gives JavaScript-enabled Adobe applications an interactive place to develop and test ExtendScript.

Its editor is full featured, supports syntax highlighting, handles Unicode, and offers multiple undo/redo. For ExtendScript files that use the .jsx extension, the Toolkit is the default editor.

The Toolkit includes a JavaScript debugger that allows you to:

- Step through JavaScript scripts (JS or JSX files) one statement at a time inside an application.
- Inspect every data item for a script that is running.
- Define breakpoints and execute them.

When a JSX file is double-clicked in the operating system's windowing environment, it opens and runs in the Toolkit unless a #target directive names a specific target application.

For more information, see Selecting a debugging target and Preprocessor directives.

## Configuring the Toolkit window

On first launch, the ExtendScript Toolkit shows a default workspace layout with tabbed panels and Script Editor document windows inside a parent frame. You can reshape that layout through the Window menu, context menus on panels and panel groups, or direct drag and drop.

For instance, drag separators up, down, left, or right to change panel proportions, or rearrange panel groupings. To relocate a tabbed panel, drag its tab into another pane.

Dragging a tab until the whole destination group is highlighted adds it as another stacked panel in that group. Dragging the tab to the top or bottom of a group, where only that bar is highlighted, splits the group and tiles the panels.

- Dock the entire panel group to different edges of the Toolkit window.
- Collapse the entire panel group, then reveal individual panels.
- Open and close individual panels, or collapse and expand them, regardless of dock state.
- Undock individual tabs or the entire control panel to make them floating panels. Floating panels can dock to each other or remain independent.

The Toolkit also provides predefined configurations, called workspaces, for different uses, and you can save preferred layouts as workspaces. See Workspaces.

## Panel menus

### Configuring the Toolkit window — Panel menus

Panel groups include a context menu, opened by right-clicking a tab or the title bar background. These menus contain panel-control commands such as Close Panel and Close Group, which hide one panel or the whole group.

- Toggle individual panels in the Window menu to show or hide them. The Window menu can also reveal a hidden panel or bring a floating panel forward.
- Use Window > Hide panels to close all of the panels.

Some panels have their own flyout menu, reached from the menu icon at the upper right. The JavaScript Console also provides a right-click menu for copying and pasting text.

Later sections cover the individual panels in more detail.

## Document windows

### Configuring the Toolkit window — Document windows

Opening a script or text file creates a separate Script Editor document window for that file. By default, those document windows are docked as tabbed panes in the main window. Like panels, any document window can be dragged out of the frame and used as an independent floating window.

When multiple documents are displayed and at least one is undocked, the document windows can be shown tiled or cascaded: side by side in the main window, or overlapping there. Choose Window > Tile Documents or Window > Cascade to switch to those layouts.

Scripts can be edited or run in several document windows at the same time. The active document window is highlighted and receives input focus. Click another document window to select it, or use Window > Next document and Window > Previous document to move between windows. Their default shortcuts are F6 and SHIFT-F6; change them on the Keyboard Shortcuts page in the Preferences dialog (Edit > Preferences).

Note

Because scripts can run in the same application simultaneously, avoid interrupting one script's processing with another script.

For example, if a script opens a modal dialog in Photoshop and another script targeting Photoshop runs while that dialog remains open, the second script is likely to generate an error.

The button in the upper-right corner of a document window splits that window.

After splitting, the second window shows another view of the exact same source. Text edits, added breakpoints, and similar changes appear in both windows at once. By default, this copy is placed to the right of the original docked window. If you split the window with CTRL-click, the second view appears below the original instead.

For details on document windows and the Script Editor, see The Script Editor.

## Workspaces

### Configuring the Toolkit window — Workspaces

When you exit, the Toolkit records the current layout and brings it back at the next startup. It also saves and restores open documents, document positions, breakpoints, and other settings from the Preferences dialog.

- The Startup page in the Preferences dialog (Edit > Preferences) lets you choose whether startup opens a blank document window, opens no document window, or displays a previously opened document.

  - After you select a workspace, its name appears here. This menu also lets you add and remove workspaces.

- Save a layout as a named workspace by choosing Create new Workspace, or by opening Workspaces in Preferences (Edit > Preferences) and clicking Add.
- Remove user-defined workspaces one at a time from the menu or from Workspaces in the Preferences dialog. To clear all of them, use Default at the bottom of the Workspace page.
- Use Keyboard Shortcuts in Preferences (Edit > Preferences) to set or change shortcuts for every menu command. If a key combination is already assigned, a warning appears; assigning it to a new command clears the earlier assignment.
- Restore all preferences to their defaults by holding SHIFT while the Toolkit loads.

## Dialogs

### Configuring the Toolkit window — Dialogs

Some dialogs include the option "Don't show again". Selecting it makes the Toolkit remember the choices from that dialog and reuse them the next time, without displaying the dialog.

To show those dialogs again, open User Interface in Preferences (Edit > Preferences) and click Reset Dialogs.

## Selecting Scripts

You can open several scripts, or text files such as programs written in other languages. Scripts can be found and opened in these ways:

- Use File > Open to open the platform-specific file browser.
- Select recently opened files from File > Recent files.
- Start a new script with File > New JavaScript.
- Drop Explorer or Finder files onto the Toolkit; they open in a document window.
- For JavaScript scripts stored in trusted locations, meaning the user-script folders of installed Adobe applications, double-clicking the file runs it in the target application or in the Toolkit. Script files elsewhere require confirmation before they run.
- Use Edit > Find and Replace to search for scripts that contain specific text. Searches can target one document window, all open scripts in document windows, scripts tied to an application, or scripts in favorite locations. See Searching in text.
- The Scripts panel displays and opens scripts supplied by loaded Adobe applications, along with scripts stored in favorite locations.
