# File Object Examples, Folder, Folder Object Constructors, Folder Class Attributes ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: File Object Examples; Folder; Folder Object Constructors; Folder Class Attributes; Folder Class Methods; Folder Object Attributes; Folder Object Methods; User-Interface Tools; Code examples for ScriptUI; ScriptUI programming model; Creating a window; Container elements; Window layout.

## File Object Examples

### File Object — File Object Examples

### Read & Write Files

This example writes text into a file, reads that same file back, and shows the result in an alert.

This is only one possible pattern. Some host apps can also require a user-specified permissions check before local file-system access is allowed.

The sample stores and retrieves the file in the user's appdata folder via Folder.userData.

```
/**
 * Reads data from a given file in userdata folder
 *
 * @param {string} filename Filename, with extension
 * @return {string}         File contents, if file exists
 */
function readUserDataFromFile(filename) {
  var userDataFolder = Folder.userData;

  var filepath = userDataFolder.fullName + "/" + filename;
  var file = new File(filepath);

  // Default encoding
  file.encoding = "UTF-8";

  if (!file.exists) {
    throw "Could not find file '" + String(file.fsName);
  }

  file.open();
  var contents = file.read();
  file.close();

  return contents;
}

/**
 * Writes data to a given file in userdata folder
 *
 * @param {string} filename Filename, with extension
 * @param {string} data     Data to write
 */
function writeUserDataToFile(filename, data) {
  var userDataFolder = Folder.userData;

  var filepath = userDataFolder.fullName + "/" + filename;
  var file = new File(filepath);

  // Default encoding
  file.encoding = "UTF-8";

  // Write file contents
  file.open("w");
  var success = file.write(data);
  file.close();

  if (!success) {
    throw "Could not write to file '" + String(file.fsName);
  }
}

try {
  var filename = "myFile.txt";
  var contents = "Hello world!";

  writeUserDataToFile(filename, contents);

  var readData = readUserDataFromFile(filename);

  // "Hello world!"
  alert("File Contents: '" + String(readData) + "'");
} catch (e) {
  alert(e);
}
```

## Folder

### Folder Object

Represents folders or directories in the file system while hiding platform differences. Unless a member states otherwise, properties and methods automatically follow file-system aliases and operate on the original file.

## Folder Object Constructors

### Folder Object — Folder Object Constructors

```
Folder( [path] ); // Can return a File object
new Folder( [path] ); // Always returns a Folder object
```

Create a Folder object with either the Folder function or the new operator. Full and partial path names are accepted, and the constructor returns the created object.

Parameter

Type

Description

path

String

Optional. Absolute or relative path for the Folder associated with this object, written in platform-specific or URI form; see Specifying paths. The object stores the absolute path. The path does not have to name an existing Folder. If omitted, a temporary name is produced. When the path resolves to an existing file: - The Folder function yields a File object instead of a File object. - The new operator yields a Folder object for a nonexisting folder with a matching name.

Warning

In After Effects on MacOS, path.length values greater than 1002 crash After Effects.

Affected reports cite MacOS 10.11.6 together with After Effects 13.8 and 14.0.

| --- | --- | --- |

## Folder Class Attributes

### Folder Object — Folder Class Attributes

The following members are static properties on the Folder class, so they can be read without creating a Folder instance.

### Folder.appData

Folder.appData

### Description

Folder object for the system-wide application data location.

- Windows: %PROGRAMDATA% (by default, C:\ProgramData)
- Mac OS: /Library/Application Support

### Type

Folder. Read only.

### Folder.appPackage

Folder.appPackage

### Description

Folder object for the running application's bundle directory.

- Windows example: C:\Program Files (x86)\Adobe\Adobe ExtendScript Toolkit CC\
- Mac OS example: /Applications/Adobe ExtendScript Toolkit CC/ExtendScript Toolkit.app

### Type

String. Read only.

### Folder.commonFiles

Folder.commonFiles

### Description

Folder object for common files shared by programs.

- Windows: %CommonProgramFiles% (by default, C:\Program Files\Common Files)
- Mac OS: /Library/Application Support

### Type

Folder. Read only.

### Folder.current

Folder.current

### Description

Folder object for the active current folder. Set the current folder by assigning either a Folder object or a string with the new path name.

### Type

Folder

### Folder.desktop

Folder.desktop

### Description

Folder object for the user's desktop folder.

- Windows: C:\Users\[username]\Desktop
- Mac OS: ~/Desktop

### Type

Folder. Read only.

### Folder.fs

Folder.fs

### Description

Identifies the file system.

Values:

- Windows,
- Macintosh, or
- Unix

### Type

String. Read only.

### Folder.myDocuments

Folder.myDocuments

### Description

Folder object for the user's default documents location.

- Windows: C:\Users\[username]\Documents
- Mac OS: ~/Documents

### Type

Folder. Read only.

### Folder.startup

Folder.startup

### Description

Folder object for the directory containing the application's executable image.

### Type

Folder. Read only.

### Folder.system

Folder.system

### Description

Folder object for the operating-system file directory.

- Windows: %windir% (by default, C:\Windows)
- Mac OS: /System

### Type

Folder. Read only.

### Folder.temp

Folder.temp

### Description

Folder object for the default temporary-file location.

### Type

Folder. Read only.

### Folder.trash

Folder.trash

### Description

- Mac OS: Folder object for the deleted-items location.
- Windows: because the Recycle Bin is a database rather than a folder, this value is null.

### Type

Folder or null. Read only.

### Folder.userData

Folder.userData

### Description

Folder object for the current user's application data.

- Windows: %APPDATA% (by default, C:\Users\[username]\Appdata\Roaming)
- Mac OS: ~/Library/Application Support

### Type

Folder. Read only.

## Folder Class Methods

### Folder Object — Folder Class Methods

These functions are static methods on the Folder class, so calling them does not require a Folder instance.

### Folder.decode()

Folder.decode(uri)

### Description

Decodes the supplied string according to RFC 2396.

Special characters are UTF-8 encoded and stored as percent escapes followed by two hexadecimal digits. For example, "my%20file" becomes "my file". Characters with numeric values above 127 are special, except for this set:

```
``/ - _ . ! ~ * ' ( )``
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| uri | String | String containing encoded text. |

### Returns

String

### Folder.encode()

Folder.encode(name)

### Description

Encodes the supplied string according to RFC 2396.

Special characters are UTF-8 encoded and stored as percent escapes followed by two hexadecimal digits. The documentation illustrates the escaped form with "my%20file" and the plain form "my file". Characters with numeric values above 127 are special, except for this set:

```
``/ - _ . ! ~ * ' ( )``
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | String to encode. |

### Returns

String

### Folder.isEncodingAvailable()

Folder.isEncodingAvailable(name)

### Description

Tests whether the named encoding is available.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Encoding name. Examples include "ASCII", "binary", or "UTF-8"; reference File- and Folder-supported encoding names. |

### Returns

Boolean. true when the system supports the requested encoding; otherwise false.

### Folder.selectDialog()

Folder.selectDialog([prompt])

### Description

Opens the native file picker for the platform and creates a new File or Folder object for the chosen file or folder. Unlike the object method selectDlg(), it starts without a preselected folder.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| prompt | String | Optional. Prompt copy used when the dialog supports one. |

### Returns

After OK, the result is a File or Folder object for the selected file or folder.

Canceling the dialog returns null.

## Folder Object Attributes

### Folder Object — Folder Object Attributes

These members apply to Folder objects.

### Folder.absoluteURI

folderObj.absoluteURI

### Description

Full path name of the referenced folder, expressed in URI notation.

### Type

String. Read only.

### Folder.alias

folderObj.alias

### Description

true if the target is an alias or shortcut in the file system.

### Type

Boolean. Read only.

### Folder.created

folderObj.created

### Description

Creation date for the referenced folder, or null when the object does not point to an on-disk folder.

### Type

Date. Read only.

### Folder.displayName

folderObj.displayName

### Description

Localized folder name only, with no path included.

### Type

String. Read only.

### Folder.error

folderObj.error

### Description

Message for the latest file-system error; see File access error messages.

The file system usually sets this value, but scripts may assign it too. Assigning a value clears any stored error message and resets the error bit for opened files. When no error exists, the value is an empty string.

### Type

String

### Folder.exists

folderObj.exists

### Description

true if this object targets a folder that exists in the file system now.

### Type

Boolean. Read only.

### Folder.fsName

folderObj.fsName

### Description

Platform-specific full path name for the referenced folder.

### Type

String. Read only.

### Folder.fullName

folderObj.fullName

### Description

Full path name of the referenced folder, expressed in URI notation.

### Type

String. Read only.

### Folder.localizedName

folderObj.localizedName

### Description

Localized version of the folder-name portion of the referenced file's absolute URI, excluding the path specification.

### Type

String. Read only.

### Folder.modified

folderObj.modified

### Description

Date when the referenced folder was last modified, or null when the object does not point to an on-disk folder.

### Type

Date. Read only.

### Folder.name

folderObj.name

### Description

Folder-name portion of the referenced file's absolute URI, excluding the path specification.

### Type

String. Read only.

### Folder.parent

folderObj.parent

### Description

Folder object for the container folder of this folder, or null when this object refers to a volume root.

### Type

Folder. Read only.

### Folder.path

folderObj.path

### Description

Path portion of the referenced folder's absolute URI, with the folder name omitted.

### Type

String. Read only.

### Folder.relativeURI

folderObj.relativeURI

### Description

URI-notation path name for the referenced folder, relative to the current folder.

### Type

String. Read only.

## Folder Object Methods

### Folder Object — Folder Object Methods

Folder objects provide the following methods.

### Folder.changePath()

folderObj.changePath(path)

### Description

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | New path, either absolute or relative to the current parent folder. |

Updates this object's path specification for the referenced folder.

### Returns

Boolean. true if the change succeeds.

### Folder.create()

folderObj.create()

### Description

Creates a folder at the location identified by this object's path property.

### Returns

Boolean. true when folder creation succeeds.

### Folder.execute()

folderObj.execute()

### Description

Opens this folder in the platform's file browser, matching the result of double-clicking it there.

### Returns

Boolean. true immediately when the folder opened successfully.

### Folder.getFiles()

folderObj.getFiles([mask])

### Description

Gets this folder's contents, applying the supplied mask as a filter.

### Parameters

Parameter

Type

Description

mask

String or Function

Optional. Search mask for file names. A string may include question mark (?) and asterisk (_) wild cards. The default is "_", matching all file names. The value may also be the name of a function that accepts a File or Folder object. The function is called for each file or folder found during the search; returning true adds that object to the returned array.

Note

On Windows, aliases always use the .lnk extension; ExtendScript removes that extension from the file name when it is found to preserve compatibility with other operating systems. Supplying the search mask "\*.lnk" finds all aliases, but code that depends on that mask is not portable.

| --- | --- | --- |

### Returns

Returns an array containing File and Folder objects, or null when this object's referenced folder is absent.

### Folder.getRelativeURI()

folderObj.getRelativeURI([basePath])

### Description

Gets this folder's URI-notation path relative to the specified base path, or relative to the current folder when none is supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| basePath | String | Optional. Base path used for the relative URI. The default is the current folder. |

### Returns

String

### Folder.remove()

folderObj.remove()

### Description

Immediately deletes from disk the empty folder represented by this object, without sending it to the system trash.

Folders have to be empty before deletion. Aliases are not resolved; the alias or shortcut file itself is deleted.

Note

This cannot be reversed. Ask the user before performing the deletion.

### Returns

Boolean. true when deletion succeeds.

### Folder.rename()

folderObj.rename(newName)

### Description

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newName | String | New folder name only; omit any path. |

Changes the name of the associated folder. Aliases are not resolved; the referenced alias or shortcut file itself is renamed.

### Returns

Boolean. true on success.

### Folder.resolve()

folderObj.resolve()

### Description

When this object points at an alias or shortcut, the method resolves that reference.

### Returns

Returns a new Folder object for the file-system element reached by the alias; returns null if this is not an alias reference or resolution fails.

### Folder.selectDlg()

folderObj.selectDlg(prompt)

### Description

Opens the native file picker for the platform and creates a new File or Folder object for the chosen file or folder.

Unlike the class method selectDialog(), it starts with this folder preselected.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| prompt | String | Prompt copy used when the dialog supports one. |

### Returns

After OK, the result is a File or Folder object for the selected file or folder.

Canceling the dialog returns null.

## User-Interface Tools

Adobe supplies ScriptUI, a component that works with the ExtendScript JavaScript interpreter so JavaScript scripts can create and interact with user-interface elements. Its object model covers windows and UI controls inside an Adobe application.

- The chapter first covers ScriptUI features and programming model, including how JavaScript can build a user interface from ScriptUI objects.
- ScriptUI object reference documents the objects, properties, methods, and creation parameters. You can also open the ScriptUI Classes dictionary from the Help menu in the ExtendScript Toolkit and inspect those objects in the Object Model Viewer.

## Code examples for ScriptUI

The Adobe ExtendScript SDK sample-code set includes examples focused on different approaches to creating and filling a ScriptUI dialog.

| Building ScriptUI dialogs | Description |
| --- | --- |
| SnpCreateDialog.jsx | Builds a minimal modeless dialog, or palette, with OK and Cancel button behavior. |
| SnpCreateUIAddMethod.jsx | Demonstrates adding dialog controls through the add method. |
| SnpCreateUIResourceSpec.jsx | Demonstrates a resource string that defines the control hierarchy for a dialog. |
| SnpCreateTreeView.jsx | Demonstrates building a hierarchical list with subitems. |
| SnpCreateProgressBar.jsx | Demonstrates creating, initializing, and updating a progress bar. |
| SnpCreateSlider.jsx | Demonstrates creating a slider control and handling its input. |
| UsingFlashPlayer.jsx | Demonstrates creating a Flash® Player and loading it to play back a movie from an SWF file. |
| ActionScriptDemo.jsx | Demonstrates messaging between Adobe application scripting and the ActionScript™ environment in the Flash Player. |
| ColorSelector.jsx | Demonstrates using graphics objects to change colors in a window. |
| ColorPicker.jsx | Presents a more involved color-selection dialog that uses additional graphics objects, including fonts and paths. |
| SnpAlignElements.jsx | Demonstrates aligning elements across two dimensions to control relative control positions within rows and columns. |
| SnpCreateDynamicScriptUI.jsx | Demonstrates automatic layout and switches component layout between "row" and "stack" orientation. |
| AlertBoxBuilder1.jsx | Demonstrates one resource-specification workflow. It uses add() to build a dialog that gathers user values, turns them into a resource string, writes that string to a file, and builds another dialog from it. See Using resource strings. |
| AlertBoxBuilder2.jsx | Demonstrates another resource-specification workflow by building the same user-input dialog directly from a resource string. See Using resource strings. |
| SnpCustomLayoutManager.jsx | Demonstrates creating a custom layout manager. See Custom layout-manager example. |

## ScriptUI programming model

ScriptUI defines Window objects for platform-specific windows and control elements, such as Button and StaticText, for user-interface controls. The objects share common properties and methods for checking type, moving elements, setting a title, caption, or content, and similar tasks. Many element classes add properties specific to that class.

## Creating a window

### ScriptUI programming model — Creating a window

ScriptUI provides these window types:

- Modal dialog box: Keeps focus while displayed and blocks activity in other application windows until closed.
- Floating palette: Also called modeless dialog, leaves other application windows available while it is shown. (Adobe Photoshop® cannot create palette windows from scripts.)
- Main window: Appropriate for an application's main window. (Script developers normally do not create main windows for Adobe applications. Photoshop does not support script creation of main windows.)

Create a new window with the Window constructor function. Pass the desired window type to the constructor. Use "dialog" for a modal dialog; use "palette" for a modeless dialog or floating palette. Optional arguments can set the initial window title and bounds, or you can assign location and size separately.

The next example creates an empty dialog named dlg, reused in later examples:

```
// Create an empty dialog window near the upper left of the screen
var dlg = new Window( "dialog", "Alert Box Builder" );
dlg.frameLocation = [ 100, 100 ];
```

New windows start hidden. Calling show makes them visible and able to respond to the user; for example:

```
dlg.show();
```

## Container elements

### ScriptUI programming model — Container elements

Every Window is a container, meaning it holds other elements inside its bounds. A Window can contain Panels and Groups, which are additional container types. Those containers can hold controls and can also nest other Panel and Group containers. A Window itself cannot be placed inside another container.

- A Group is the simplest container for visually organizing related controls. A common pattern is to define a group and fill it with related elements, for example an edittext field paired with a descriptive statictext label.
- A Panel is a frame object, also commonly used to visually organize related controls. It provides a text property for a title and may include a border that separates its contents from other dialog elements.
- A TabbedPanel is a frame whose only children are Tab elements. Each Tab is a frame with a localizable title on the selection tab and contains its own set of controls. While a tab is active, the TabbedPanel.selection property contains that Tab object.

One approach is to create a Panel, then place several Groups inside it, each with its own elements. Nested containers with different layout properties let you build relatively complex layouts without explicit placement.

Use the add method to add elements to any container; see Adding elements to containers. An element added this way becomes a child of that container. Some container operations affect children as well: hiding a container also hides its children.

## Window layout

### ScriptUI programming model — Window layout

After a script creates a Window and adds UI elements, the layout is the arrangement of element locations, sizes, and spacing. Each UI element has location, size, and bounds properties that define position and dimensions. These values begin undefined. When a script uses Automatic layout, it should leave them undefined on both the main window and contained elements so the automatic layout mechanism can assign them.

Your script can read these values and, when it is not using auto-layout, assign them as shown here:

```
win.location = [ 10, 50 ];
win.location = { x: 10, y: 50 };
win.location = "x:10, y:50";
```

```
win.size = [ 200, 100 ];
win.size = { width: 200, height: 100 };
win.size = "width:200, height:100";
```

```
win.size.height = 100;
```

```
var dlg = new Window( "dialog", "Alert Box Builder", [ 100, 100, 480, 490] );
dlg.bounds = [ 100, 100, 480, 490 ];
dlg.bounds = { x: 100, y: 100, width: 380, height: 390 };
dlg.bounds = { left: 100, top: 100, right: 480, bottom: 490 };
dlg.bounds = "left:100, top:100, right:480, bottom:490";
```

Window dimensions describe the content region, the part directly controllable by a script. The real platform window is usually larger because title bars and borders are added by the host window system. For a Window, bounds covers only the content region. Use Window.frameBounds to get the frame bounds around that content region.
