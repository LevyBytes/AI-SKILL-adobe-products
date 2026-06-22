# Adobe Illustrator Scripting Guide, Navigating The Guide, Contribution, Licensing Ownership ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adobe Illustrator Scripting Guide; Navigating the Guide; Contribution; Licensing & Ownership; What is Scripting?; Why use scripting?; What about actions?; Changelog; Illustrator 24.0 (CC 2020) <>; Illustrator XX.X (CC 2017) <>; Scripting language support in Adobe Illustrator CC; Script file extensions; JavaScript development options; Viewing the object model; Viewing the JavaScript object model; Viewing the AppleScript object model; Viewing the VBScript object model; Executing Scripts.

## Adobe Illustrator Scripting Guide

These community-maintained docs provide the Adobe Illustrator Scripting Guide.

## Navigating the Guide

### Adobe Illustrator Scripting Guide — Navigating the Guide

When choosing a starting point, use What is Scripting for AI scripting concepts, or review Changelog to see how the scripting API has changed.

## Contribution

### Adobe Illustrator Scripting Guide — Contribution

The project is mainly operated and sustained by its community; contributors are invited to send fixes, refinements, notes/warnings, and other improvements that would benefit the project.

For contribution details and recommended practices, consult the Documentation Contribution Guide.

## Licensing & Ownership

### Adobe Illustrator Scripting Guide — Licensing & Ownership

This project is provided solely for educational use.

The material remains under Adobe copyright.

## What is Scripting?

A script is an ordered set of commands that directs Illustrator to carry out one or more operations. Some operations are small and affect a single object in the active document; others are broad and work across objects in every Illustrator document you have open.

Those operations can also reach into other software, including word processors, spreadsheets, and database management programs.

In general, scripting is built from concepts that map to the Illustrator tools, menus, panels, and dialog boxes you already know well. Once the desired Illustrator behavior is clear, a script can be written to perform it.

## Why use scripting?

### What is Scripting? — Why use scripting?

Graphic design depends on creative work, yet many production chores are not creative at all. Time spent placing and replacing images, fixing text errors, and preparing files for output at an image-setting service provider can take time away from the creative side of the job.

After a modest amount of practice, you can create short, simple scripts that handle repeated work on your behalf. As your scripting ability develops, those scripts can grow into more advanced automation.

Scripting can also open creative options by completing tasks too time-consuming to try manually. For instance, a script could build a systematic series of objects while changing each new object's position, stroke, and fill properties. Another script could call built-in transformation matrix functions to stretch, scale, and distort a group of objects. Without scripting, the effort required for these techniques could keep their creative value out of reach.

## What about actions?

### What is Scripting? — What about actions?

Actions and scripts both automate repeated work, but their operating models are different:

- Scripts bypass a program's user interface when performing tasks, so they can run more quickly than actions.

- Actions cannot contain conditional logic; as a result, an action cannot react to the current state, such as changing the stroke type of rectangles while leaving ellipses alone.
- Scripts can read information from Illustrator, make decisions from it, and perform calculations.

- A script is able to run an action, while actions cannot run scripts.

## Changelog

Which scripting capabilities are new or changed?

## Illustrator 24.0 (CC 2020) <>

### Changelog — Illustrator 24.0 (CC 2020) <>

- Added: Document.getPageItemFromUuid()
- Added: PageItem.uuid

## Illustrator XX.X (CC 2017) <>

### Changelog — Illustrator XX.X (CC 2017) <>

- Added: Application.getIsFileOpen()

## Scripting language support in Adobe Illustrator CC

On Windows, Illustrator scripting works with VBScript and JavaScript scripts; on Mac OS, it works with AppleScript and JavaScript scripts.

## Script file extensions

### Scripting language support in Adobe Illustrator CC — Script file extensions

Adobe Illustrator CC 2017 recognizes a script file as valid only when its filename uses the proper extension:

| Script Type | File type (extension) | Platforms |
| --- | --- | --- |
| AppleScript | compiled script ( .scpt ) OSAS file (no extension) | Mac OS |
| JavaScript or ExtendScript | text ( .js or .jsx) | Windows Mac OS |
| VBScript | text ( .vbs ) | Windows |

## JavaScript development options

### Scripting language support in Adobe Illustrator CC — JavaScript development options

For Illustrator-specific JavaScript scripts, the ExtendScript Toolkit is one authoring option; Adobe Extension Builder together with the Creative Cloud SDK can be used to build ActionScript extensions.

These extensions are Flash-based (SWF) and may run across multiple Creative Cloud applications.

### Developing a CC extension using ActionScript

Developers can extend Creative Cloud applications through an extensibility infrastructure built on Flash/Flex technology; each extension is packaged as a compiled Flash (SWF) file.

Creative Cloud supplies the Extension Manager for installing extensions.

Adobe Kuler is an example of an extension included with the point products. Across suite applications, Kuler presents a consistent user interface, while its internal logic varies to suit each host application.

An extension's user interface is authored in ActionScript with the Flex framework. Users usually open an extension from its own entry in the application's Extensions menu.

Adobe Extension Builder supports interactive user-interface design through the Design view of Flash Builder. With the Creative Cloud SDK, the extension's application logic can also be developed in ActionScript, then debugged in the familiar Flash Builder environment.

For application logic, the recommended choice is the ActionScript Wrapper Library ( CSAWLib ), which exposes each host application's scripting DOM as an ActionScript library. Adobe Extension Builder integrates this library closely and includes wizards for creating the extension's basic structure, running code, and debugging against suite applications such as Adobe InDesign, Photoshop and Illustrator.

The scripting DOM's methods, properties, and behavior match the descriptions in the JavaScript Scripting Reference for the relevant host application.

To learn how Adobe Extension Builder and the wrapper libraries are used, refer to the Creative Cloud SDK documentation available inside Adobe Extension Builder.

### Scripting plug-ins

The CC JavaScript scripting interface provides limited scripting access for plug-ins. A plug-in may define a command along with an event, notifier, and handler that carries out an action. A JavaScript script can call app.sendScriptMessage() to pass parameters to that plug-in command and receive the response supplied by the plug-in.

The Adobe Custom Workspace plug-in, for example, exposes "Switch Workspace" as a command. The following code shows a script calling that command:

```
result = app.sendScriptMessage (
    "Adobe Custom Workspace",
    "Switch Workspace",
    '<workspace="Essentials" >'
);
```

Here, the plug-in returns this string value:

```
"<error= errNo>".
```

### ExtendScript features

Illustrator-specific scripts that call the Illustrator JavaScript DOM directly are written as ExtendScript files and are identified by the .jsx extension.

Using .jsx for JavaScript files instead of the ordinary .js JavaScript extension gives access to ExtendScript tools and features.

ExtendScript includes the standard JavaScript feature set and adds a development and debugging environment, the ExtendScript Toolkit (ESTK).

All scriptable Adobe applications install ESTK, and JSX files use ESTK as their default editor. ESTK also includes an Object Model Viewer with full documentation for JavaScript object methods and properties. See Viewing the object model for instructions on opening ESTK and the Object Model Viewer.

ExtendScript also includes several tools and utilities:

- A utility for localization
- Tools for combining scripts and targeting them to specified applications
- File and folder representation that works across platforms
- Tools for creating user interfaces for scripts
- A messaging framework for sending and receiving scripts and data between scripting-enabled Adobe applications

These features are available both when you use the DOM directly from a JSX file and when you work through the ActionScript wrapper library with Adobe Extension Builder. For these features and others, see JavaScript Tools Guide.

## Viewing the object model

Each supported scripting language includes a way to inspect the Illustrator-defined scripting objects and their reference information.

## Viewing the JavaScript object model

### Viewing the object model — Viewing the JavaScript object model

Use this procedure to inspect Illustrator's JavaScript object model:

In a standard Adobe installation, ESTK is installed here:

| OS | Path |
| --- | --- |
| Windows | \system drive\Program Files\Adobe\Adobe Utilities CC\ExtendScript Toolkit CC |
| Mac OS | \system drive\Applications\Utilities\Adobe Utilities CC\ExtendScript Toolkit CC |

1. Launch ESTK.
2. In ESTK, choose Help > Object Model Viewer.
3. Use the Browser drop-down list in the Object Model Viewer window to select Adobe lllustrator CC Type Library.

The /Scripting/Sample Scripts/ folder inside the Illustrator CC installation directory contains several extended sample scripts.

Illustrator Scripting Reference: Javascript also provides script samples and details for individual classes, objects, properties, methods, and parameters.

## Viewing the AppleScript object model

### Viewing the object model — Viewing the AppleScript object model

Every Mac OS system includes Apple's Script Editor. Use Script Editor to inspect the AppleScript dictionary describing Illustrator objects and commands.

For instructions on Script Editor itself, open Script Editor Help.

Note

With a default Mac OS installation, Script Editor is located at Applications/AppleScript/Script Editor

When Script Editor is missing, reinstall it from the Mac OS system CD.

1. Launch Script Editor.
2. Choose File > Open Dictionary; Script Editor opens the Open Dictionary dialog.
3. When the Open Dictionary dialog appears, choose Adobe lllustrator CC, then click Open.

Script Editor then lists Illustrator objects and commands, including the properties and elements for each object and the parameters accepted by each command.

The Illustrator CC installation directory's /Scripting/Sample Scripts/ folder contains several extended sample scripts.

Illustrator Scripting Reference: Applescript also includes script samples and information about individual classes, objects, properties, methods, and parameters.

## Viewing the VBScript object model

### Viewing the object model — Viewing the VBScript object model

VBScript exposes a type library for inspecting Illustrator object properties and methods. The following procedure uses a Microsoft Office program to view that library. Your VBScript editor may also offer library access; consult the editor's Help for details.

1. Open a Microsoft Office application and choose Tools > Macro > Visual Basic Editor.
2. From Visual Basic Editor, choose Tools > References.
3. In the displayed dialog, enable Adobe lllustrator CC Type Library, then click OK.
4. Choose View > Object Browser to open the Object Browser window.
5. In Object Browser's top-left pull-down menu, choose "Illustrator" from the open-library list.

The /Scripting/Sample Scripts/ folder in the lllustrator CC installation directory includes several extended sample scripts.

Illustrator Scripting Reference: VBScript also provides script samples and information for individual classes, objects, properties, methods, and parameters.

## Executing Scripts

Illustrator provides a Scripts menu (File > Scripts) for convenient access to scripts.

Scripts can appear directly as selectable menu entries. See Installing scripts in the Scripts menu.

You can also browse from the menu to a script anywhere in the file system and run it from there. See Executing scripts from the Other Scripts menu item.

JavaScript scripts ending in .jsx can also run automatically at application startup. For details, see Startup scripts (.jsx scripts only).

## Installing scripts in the Scripts menu

### Executing Scripts — Installing scripts in the Scripts menu

To add a script to the Scripts menu (File > Scripts), place the script in the Scripts folder under the /lllustrator CC/Presets folder in the lllustrator CC installation directory.

The Scripts menu shows the script filename without its file extension.

If Illustrator is already open when scripts are added to the Scripts folder, those scripts are not listed in the Scripts menu until Illustrator is launched again.

You can install any number of scripts in the Scripts menu. When the collection grows large, create subfolders inside the Scripts folder to organize how scripts appear in the Scripts menu.

Each subfolder appears as its own submenu and contains the scripts stored inside that subfolder.

## Executing scripts from the Other Scripts menu item

### Executing Scripts — Executing scripts from the Other Scripts menu item

At the bottom of the Scripts menu, the Other Scripts command (File > Scripts > Other Scripts) runs scripts that are not stored in the Scripts folder.

Choosing Other Scripts opens a Browse dialog for locating a script file. Once the file is selected, Illustrator runs the script.

The browse dialog shows only files belonging to one of the supported file types. For more information, see Scripting language support in Adobe Illustrator CC.

## Startup scripts (.jsx scripts only)

### Executing Scripts — Startup scripts (.jsx scripts only)

Place JavaScript files ending in .jsx in either of two startup locations when you want Illustrator to load them during application startup and again whenever another script is run.

The folders are:

- An application-specific startup scripts folder for scripts tied to IllustratorCC
- A general startup scripts folder for scripts that auto-run as any Creative Cloud application starts

### Application-specific startup scripts folder

For scripts that belong only to Illustrator, create a folder named Startup Scripts inside the Illustrator installation directory and put those startup scripts there.

For example, when IllustratorCC uses its default installation path, create the Startup Scripts folder here:

| OS | Path |
| --- | --- |
| Windows | C:\Program Files\Adobe\Adobe lllustratorCC\Startup Scripts\ |
| Mac OS | /Applications/Adobe lllustrator CC/Startup Scripts/ |

Any JavaScript script with a .jsx extension inside the Startup Scripts folder runs without manual selection when:

- Illustrator starts.
- A JavaScript file is chosen from the Scripts menu (File > Scripts).

### Startup scripts shared through Creative Cloud

This shared startup location participates in Creative Cloud startup behavior, so scripts stored there run as Creative Cloud applications open.

Create the folder at this location:

| OS | Path |
| --- | --- |
| Windows | /Program Files/Common Files/Adobe/Startup Scripts CC/Illustrator |
| Mac OS | /Library/Application Support/Adobe/Startup Scripts CC/Illustrator |

When a script in the general startup folder should run for Illustrator only, include the ExtendScript #target directive ( #target illustrator ) or guard execution with code such as:

```
if (BridgeTalk.appName == "illustrator") {
    // continue executing script
}
```

## The Illustrator Scripting Object Model

Scripting is easier when you understand how Illustrator structures its object model. The figure for this section presents the containment tree beginning at the application object.

Layer and group item classes can hold objects of their own class, and those child objects may themselves contain further nested entries.

Alongside the Illustrator-specific model, JavaScript also includes utility objects such as File and Folder, which provide file-system access that is independent of the operating system.

For details, see JavaScript Tools Guide.

## Object Naming Conventions

Illustrator exposes a single scripting object model, but each scripting language spells object names a little differently:

- AppleScript uses lower case names with spaces between words; for example: graphic style
- VBScript capitalizes names and marks later words with uppercase initial letters; for example: GraphicStyle
- JavaScript starts names with lowercase letters and gives later words uppercase initial letters; for example: graphicStyle

This chapter presents generic names for objects and properties; use the conventions above to map each one to the naming style required by the language you are writing.

In this document, property, method, and object names appear in a monospaced font.

## Top-Level (containing) Objects

These objects provide entry points to Illustrator-wide data and to information held by a specific document.

## Application

### Top-Level (containing) Objects — Application

Through properties on the application object, scripts can reach global values, including:

- User preferences, which the Illustrator user configures interactively in the Preferences dialog (Edit > Preferences).
- System-level details such as installed fonts (the text fonts property) and printers (the printer list property).

Other properties expose Illustrator-specific state and broader details about documents that are open:

- Application information, including installation path, version, and Illustrator visibility.
- The active document currently shown as the art canvas and receiving user input.
- The full set of open documents.

Methods or commands on the application object let a script perform actions that affect the application as a whole, for example:

- Open files
- Undo and redo transactions
- Quit Illustrator

app

### Description

Referenced through the predefined global `app` object, this Adobe Illustrator application object contains every other Illustrator object.

## Document

### Top-Level (containing) Objects — Document

A document object represents an Illustrator art canvas or an opened Illustrator file; scripts can create one or obtain it through the application object.

Properties on the document object expose the contents of that document, such as:

- The current selection, meaning art objects selected by the user in the document
- All page items, the contained art objects that form the artwork tree
- Specific categories of art objects, such as symbols and text frames
- Every layer, plus the layer that is currently active

Document properties also describe the document's own state, for example:

- Document-level user settings, including ruler units
- Whether content has changed since the document was last saved
- The path of the linked file

Methods on the document object let scripts operate on the document, including:

- Saving as an Illustrator file or into another supported file format
- Activating a document or closing it
- Printing the document. A script can select a printer through a print options object, or it can inspect available printers through the application object's printer list property.

app.activeDocument

### Description

Represents an Illustrator document, with Document instances stored under the Application object.

Properties whose names begin with "default" act as document-wide default settings for the current document. Change those default values only while a document is open. Setting defaults before creating new artwork can make scripts shorter because properties such as fillColor and stroked do not need to be passed repeatedly when their default values already apply.

Color space, height, and width are fixed at document creation time. Existing documents do not allow later changes to those properties. For handling of document color spaces, see Application.open().

## Layer

### Top-Level (containing) Objects — Layer

The layer object opens access to the artwork tree and other contents belonging to one layer.

Reach a layer object from the document object.

Layer object properties expose or describe the layer, including:

- Visibility and lock state for the layer.
- Opacity (overall transparency) and z order position (position in the stacking order).
- Layer-level art-creation settings, including artwork knockout and blending mode.

app.activeDocument.layers[index]

### Description

Represents a layer in an Illustrator document. Nested layers can also live inside layers; in the user interface, those nested layers are called sublayers.

The layer object exposes the page items assigned to that particular layer as its elements.

Scripts may address page items through either the Layer object or the Document object. When a script uses a layer as the container, it reaches only objects on that layer. To work across all page items in the full document, reference them from the document instead.

## The Artwork Tree

Illustrator document contents are organized as the artwork tree. These object types represent artwork:

- compound path item
- graph item
- group item
- legacy text item
- mesh item
- non native item
- path item
- placed item
- plugin item
- raster item
- symbol item (see Dynamic Objects)
- text frame

Scripts access and change art objects by using collections on the document object and layer object.

Art-object collections come in two forms:

- Type-specific collection objects, such as the graph items object or the mesh items object, for each individual artwork object type.
- The page items object, a combined collection for art objects of every type.

For a grouped collection of art items, reference the group item object.

To create art objects, call the make command (AppleScript) or the add method on the appropriate artwork item collection object. A new path item object can be created like this:

| Language | Command |
| --- | --- |
| AppleScript | set myPathItem to make new path item in current document |
| JavaScript | var myPathItem = activeDocument.pathItems.add(); |
| VBScript | Set myPathItem = appRef.ActiveDocument.PathItems.Add() |

The make command and add method are not available for creating new objects in these artwork collections:

- graph items object
- mesh items object
- plugin items object
- legacy text items object

For details on creating objects of these types, see the Adobe lllustrator CC Scripting Reference for your language.

## Art styles

### The Artwork Tree — Art styles

To assign a graphic style to artwork, a script works with the graphic style object. Access the target graphic style object's apply to method through the graphic styles property on the document object.

The brush object serves the same role for choosing a brush to apply to artwork. Brushes are reached through the brushes collection object, another property of the document object.

## Color objects

### The Artwork Tree — Color objects

Scripts can set a color, pattern, or gradient on a path item object through the fill color or stroke color properties:

- New color swatches can be defined by scripts with the make command or add method on the swatches object. A script can also produce a new spot color through the make command or add property of the spots object.
- Ink object attributes are defined with the ink info object, which is stored as a property of an ink object. Ink objects are reached through the ink list property on the document object.

Use these objects to create colors in defined color spaces:

- The RGB color object, where each of the three color values uses the range 0.0 to 255.0.
- The CMYK color object, where each of the four color values is expressed as 0.0 through 100.0 percent.
- The grayscale color or LAB color objects, following the same value range and value count used in the Illustrator application.

## Text Objects

Typing into an Illustrator document automatically creates both a text frame object and, at the same time, a story object for that text.

You can see this by opening a new Illustrator document, entering text with the horizontal text tool, and then adding more text with the vertical text tool.

Next, draw a rectangle and enter text inside that shape.

Then run this JavaScript script:

```
var myDoc = app.activeDocument;
alert("There are " + myDoc.textFrames.length + " text frames.");
alert("There are " + myDoc.stories.length + " stories.");
```

## Text Frames

### Text Objects — Text Frames

Text frames are available in three forms:

- point
- area
- path

In AppleScript, choose the desired text-frame form with the kind property of the text frames object.

For JavaScript and VBScript, the text frames objects provide dedicated methods for creating area text frames and path text frames.

Area and path text frames can be threaded, matching the behavior in the Illustrator application.

When connecting existing text frames, set the next frame or previous frame property on the text frame object.

A connected set of threaded frames forms one story object.

For details about creating or threading text frames, see the chapter for your scripting language in this manual.

### Text Geometry

All three text-frame kinds share traits such as orientation, but each kind also has its own properties on the text frame object. For example:

- Area text frames support rows and columns, available through the row count and column count properties.
- For path text, the start T value and end T value properties mark the points on the path where the text starts and stops.
- Area and path text frames reference a text path object through the text path property of the text frame object. The text path controls the text frame's artboard position and orientation (horizontal or vertical), while the text frame object's orientation property controls text orientation inside the frame. Point text does not use the text path property, because its position and orientation are fully described by the text frame object's own properties.

Note

A text path differs from a path art item. Text paths connect to path art items, and those path art items can be accessed and edited to change how the related text frame appears.
