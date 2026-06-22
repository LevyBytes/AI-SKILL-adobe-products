# Objects That Represent Text Content, Text Styles, Dynamic Objects, Symbols ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Objects that represent text content; Text styles; Dynamic Objects; Symbols; Transformations; Launching and quitting Illustrator from a script; Launching and activating Illustrator; Quitting Illustrator; Getting the frontmost document or layer; Creating new objects; Collection objects; Selected objects; Notes on renaming objects stored in the application's panels; Measurement Units; Em space units; Page-item positioning and dimensions; Art item bounds; Paths and shapes.

## Objects that represent text content

### Text Objects — Objects that represent text content

Inside a text frame or story, the real text content is available through any of these objects:

- characters
- words
- paragraphs
- lines

A line object contains all characters that fit onto a single line in a text frame or story object.

Every text-art item includes at least one text line, represented by a line object.

Text art may include more than one text line when the text includes hard line breaks or when characters flow to another line because they exceed the text art width.

Collections within text frame and story objects provide access to and identification for text objects; for example:

```
textFrame("My Text Frame").paragraphs
// or
story("My Story").paragraphs
```

Insertion point and text selection properties are available on both text frame and story objects.

Properties on the text frame object also include the text frame's defining characteristics, such as:

- Frame width, height, and position
- Hidden or locked state for the frame
- Text editability

Note

Scripts cannot create a line object. They can create character, paragraph, and word objects.

### Text ranges

The text range object also represents grouped text objects within a text frame or story.

For example, a character is a text range with length 1, while a word is a text range preceded by a space.

Set a text range object's content by supplying a string through the contents property.

## Text styles

### Text Objects — Text styles

Paragraph attribute objects and character attribute objects represent text-style elements such as font, capitalization, and justification.

These attribute objects belong to paragraph style and character style objects as properties.

The paragraph style and character style objects include apply to and remove methods, allowing scripts to assign or remove attributes from a particular paragraph, character, or text range.

To change how a text range is displayed, either apply an appropriate style or supply local attribute overrides at the text or paragraph level:

- character style objects target one character or a set of characters. They govern character features such as font, alignment, leading, language, and capitalization, all of which are properties of the character attribute object.
- paragraph style objects target paragraphs. They govern paragraph features such as first line indent, left indent, and right indent, all of which are properties of the paragraph attribute object.

## Dynamic Objects

Dynamic objects let Illustrator produce data-driven graphics.

In the Illustrator application, the Variables panel is where users create or edit variables such as graph data, linked file, text string, visibility, and variables with no specified type.

Within scripts, the variable object represents this kind of variable.

The kind property on a variable object reports which category of dynamic data that variable object contains. Variable objects exist at document level, and scripts create them in a document object.

Note

Keep variable objects distinct from variables used by scripts. Illustrator Help covers Illustrator variables, dynamic objects, and data-driven graphics.

In scripting, the dataset object represents a dataset, which groups variables together with the dynamic data assigned to them.

The dataset object includes methods that scripts can use to update dataset objects and delete them.

## Symbols

In Illustrator, symbols are art items stored in the Symbols panel.

Scripts can create, delete, and duplicate symbol objects.

When a script creates symbol objects, Illustrator adds those objects to the Symbols panel for the document being targeted.

A symbol item is a document instance of a symbol object. Every symbol item remains linked to its symbol definition, so edits to the definition update every instance.

Scripts can create, delete, and duplicate symbol items. Since symbol items are Illustrator art items, scripts can handle them the same way they handle other art items or page items.

Symbol items support operations such as rotate, resize, select, lock, hide, and other actions.

app.activeDocument.symbols

### Description

Holds the document's collection of Symbol objects.

## Transformations

The matrix object gives scripts access to geometric-transformation matrix capabilities.

Illustrator transformation matrices hold the values for operations that scale, rotate, or move (translate) an object on a page.

Matrices offer several benefits:

- Stored transformation values in a matrix object can be reused across different objects in a script.
- Concatenating rotation, translation, and/or scaling matrices and then applying the result lets one script statement perform many geometric transformations.
- Matrix values can be inverted.
- Values from two matrices can be compared.

The application object. provides commands or methods to create, get, invert, compare, or concatenate matrices.

To apply a matrix, use the transform command on any object type that supports transformations.

## Launching and quitting Illustrator from a script

Scripts can start, activate, and quit Illustrator.

## Launching and activating Illustrator

### Launching and quitting Illustrator from a script — Launching and activating Illustrator

### AppleScript

In AppleScript, target Illustrator with a tell statement.

If Illustrator is inactive, the activate command brings it forward.

```
tell application "Adobe Illustrator"
activate
end tell
```

### JavaScript

JavaScript scripts are commonly run from the application's Scripts menu (File > Scripts) or from the start-up folder, so they normally do not need to launch Illustrator themselves.

This guide does not cover launching Illustrator from JavaScript.

For more information, look up Interapplication Communication or Javascript Messaging Framework in JavaScript Tools Guide.

### VBScript

VBScript can create an Illustrator instance in several ways:

CreateObject starts Illustrator as an invisible application when Illustrator is not already running. If Illustrator starts invisibly, activate it manually so it becomes visible:

```
Set appRef = CreateObject("Illustrator.Application")
```

When multiple Illustrator versions are installed on one machine and CreateObject is used for the application reference, "Illustrator.Application" resolves to the newest Illustrator version. To point at an older version, append the version identifier to the string:

| Version | Identifier |
| --- | --- |
| Illustrator 10 | "Illustrator.Application.1" |
| Illustrator CS | "Illustrator.Application.2" |
| Illustrator CS2 | "Illustrator.Application.3" |
| Illustrator CS3 | "Illustrator.Application.4" |
| Illustrator CS4 | "Illustrator.Application.CS4" |
| Illustrator CS5 | "Illustrator.Application.CS5" |
| Illustrator CS6 | "Illustrator.Application.CS6" |
| Illustrator CC | "Illustrator.Application.CC" |
| Illustrator CC 2014 | "Illustrator.Application.CC2014" |
| Illustrator CC 2015 | "Illustrator.Application.CC2015" |
| Illustrator CC 2017 | "Illustrator.Application.CC2017" |

If the project includes a reference to the Illustrator type library, use the New operator. The following line creates a new Application object reference:

```
Set appRef = New Illustrator.Application
```

## Quitting Illustrator

### Launching and quitting Illustrator from a script — Quitting Illustrator

### AppleScript

Use the quit command:

```
tell application "Adobe Illustrator"
quit
end tell
```

### JavaScript

Use the app.quit() method:

```
app.quit();
```

### VBScript

Use the Application object's Quit method:

```
Set appRef = CreateObject("Illustrator.Application")
appRef.Quit
```

## Getting the frontmost document or layer

### Working with objects — Getting the frontmost document or layer

Address the selected document through the application object's current document property in AppleScript; in JavaScript or VBScript, use active document. For the selected layer, use the document object's current layer or active layer property.

Properties such as active dataset and active view use the same "active" or "current" idea. Consult the Adobe lllustrator CC 2017 Scripting Reference for the language you are scripting in.

## Creating new objects

### Working with objects — Creating new objects

Some objects, not including the application object itself, are not retrieved through containers or parent objects. Scripts have to instantiate those objects directly.

Create these objects explicitly:

- CMYK color
- document preset
- EPS save options
- export options AutoCAD
- export options Flash
- export options GIF
- export options JPEG
- export options Photoshop
- export options PNG8
- export options PNG24
- export options SVG
- export options TIFF
- file
- folder
- gradient color
- gray color
- Illustrator save options
- ink
- ink info
- lab color
- matrix
- MXG save options
- no color
- open options
- open options AutoCAD
- open options FreeHand
- open options PDF
- open options Photoshop
- paper info
- Pattern color
- PDF save options
- PPD file
- PPD file info
- print color management options
- print color separation options
- print coordinate options
- printer
- printer info
- print flattener options
- print font options
- print job options
- print options
- print page marks options
- print paper options
- print postscript options
- raster effect options
- rasterize options
- screen
- screen spot function
- RGB color
- spot color
- tracing options

Adobe ExtendScript supplies the file and folder objects as devices for platform-neutral file-system access. For guidance on those objects, see JavaScript Tools Guide.

For explicit object-creation details, consult the chapter for the scripting language you are using.

### Object references — Creating new objects

In AppleScript, create a new object with the make command.

### Accessing and referencing objects — Creating new objects

Scripts can generate new objects. When the target object is exposed through a collection object or container, invoke add() on that container object.

```
var myDoc = app.documents.add()
var myLayer = myDoc.layers.add()
```

Other object kinds are not supplied by containers. For those cases, declare a variable and assign it with the new operator plus the appropriate object constructor. For instance, this creates a CMYKColor object in a variable named myColor:

```
var myColor = new CMYKColor()
```

Scripts can create new objects. For objects exposed from collection objects, call Add on that collection object:

```
Set myDoc = appRef.Documents.Add()

Set myLayer = myDoc.Layers.Add()
```

Certain collections lack an Add method. For those object types, declare a variable and call CreateObject. This code creates a CMYKColor object in a variable named newColor:

```
Set newColor = CreateObject ("Illustrator.CMYKColor")
```

## Collection objects

### Working with objects — Collection objects

Most collection objects come from a containing object. For instance, a path items collection object may belong to either a document object or a layer object; to get an item from the collection, point your reference through the appropriate container. See the language-specific examples that follow.

### AppleScript

Reference a path items object inside a document

```
path item 1 in document 1
```

Reference a path items object inside a layer

```
path item 1 in layer 1 in document 1
```

### JavaScript

Reference a path items object inside a document

```
documents[0].pathItems[1]
```

Reference a path items object inside a layer

```
documents[0].layers[0].pathItems[0]
```

### VBScript

Reference a path items object inside a document

```
Documents(1).PathItems(1)
```

Reference a path items object inside a layer

```
Documents(1).Layers(1).PathItems(1)
```

More collection-container examples are listed in the document object Elements table in Adobe lllustrator CC 2017 Scripting Reference: AppleScript and in the Properties table in Adobe lllustrator CC 2017 Scripting Reference: JavaScript or Adobe lllustrator CC 2017 Scripting Reference: VBScript. The Illustrator Scripting Object Model includes a diagram of the lllustrator CC 2017 object model.

## Selected objects

### Working with objects — Selected objects

Scripts often need to operate on whichever object or group of objects is selected at the moment. Typical uses include applying formatting to selected text or reshaping a selected path.

### Selecting Text

Select text by calling the select command or method on the text range object.

### Selecting art items

For an art object, such as graph items, mesh items, raster items, and symbol items, selection is controlled by setting its selected property to true. In AppleScript, selected belongs to the page items object.

### Referring to selected art items

Use the document object's selection property when you need every currently selected object in a document. Before working through the selection array, identify each object's type so the usable properties and methods or commands are clear. JavaScript and VBScript expose a read-only typename property on every artwork object type for type checks. AppleScript uses the class property for the same purpose.

## Notes on renaming objects stored in the application's panels

### Working with objects — Notes on renaming objects stored in the application's panels

Some objects support renaming because their name property can be written. The object types below may be alphabetized in their matching Illustrator panel. When a script changes one of these names, any index-based reference to the object can stop pointing to the intended item.

- Brush
- Gradient
- Graphic Style
- Pattern
- Swatch
- Symbol
- Variable

## Measurement Units

Illustrator records nearly all distance values in points. One inch equals 72 points. Properties such as kerning, tracking, and the aki properties, which support Japanese text composition, are exceptions because they use em units. See Em space units.

Script communication with Illustrator uses points no matter which ruler units are currently shown. When script logic adds, subtracts, multiplies, or divides measurements expressed in non-point units, convert those values to points before passing them along. For coordinates or measurements in inches, for example, multiply each inch value by 72 in the script.

Conversion formulas for common measurement units:

| Unit | Conversion formula |
| --- | --- |
| centimeters | 28.346 points = 1 centimeter |
| inches | 72 points = 1 inch |
| millimeters | 2.834645 points = 1 millimeter |
| picas | 12 points = 1 pica |
| Qs | 0.709 point = 1 Q (1 Q equals 0.23 millimeter) |

The JavaScript UnitValue object type provides utilities for converting units. For details, see JavaScript Tools Guide

## Em space units

### Measurement Units — Em space units

Measurements expressed in em units rather than points are stored as thousandths of an em.

The current font size determines the size of an em.

A 6-point font makes 1 em equal 6 points; a 10-point font makes 1 em equal 10 points.

With a 10-point font, a kerning value of 20 em units works out to

```
(20 units x 10 points) / 1000 units/em = 0.2 points
```

## Page-item positioning and dimensions

Illustrator stores page item object positions in documents with simple two-dimensional point geometry. Each page item object in a document includes a position property, expressed as page coordinates in the form [x, y], that marks a fixed point. The object's bounding box supplies that point at its top-left corner.

For details about which object types belong to the page items collection, see "The artwork tree" on

A point uses two coordinates:

- horizontal position, x
- vertical position, y

When you select or create an object in Illustrator, the Info panel displays these coordinate values.

For an artboard, the default coordinate origin is (0,0), located at the top-left corner and reflected by the artboard object's ruler origin property. X coordinate values rise from left to right; Y coordinate values rise from top to bottom. CS5 changed this behavior. To keep older scripts compatible, a document made by a script still follows the earlier coordinate system: the origin sits at the bottom-left of the artboard and Y increases upward. The document object's page origin property sets a fixed point at the bottom-left corner of the document's printable region.

Every page item object includes width and height properties. For a page item, the largest allowed width or height value is 16348 points.

## Art item bounds

### Page-item positioning and dimensions — Art item bounds

Three fixed-rectangle properties describe the total extent of every page item object:

- geometric bounds: rectangular bounding-box dimensions for the page item, with stroke width left out.
- visible bounds: the object's dimensions after stroke widths are included.
- control bounds: the object's rectangle when in and out control points are counted.

The figure below shows these properties with JavaScript naming conventions.

## Paths and shapes

In the Illustrator DOM, a path item object represents a path. Path items cover artwork that contains paths, including rectangles, ellipses, polygons, and freeform paths.

A freeform path is built from a sequence of path points. You can specify a path point in either of these forms:

- an array containing x and y page coordinates.
- a path point object that defines an anchor point plus two direction points or handles, which establish the curve for the path segment:

Consult the chapter for your scripting language for shape-creation details, samples, and related guidance.

## User-interaction levels

Applications usually show a dialog when they need input or other feedback from the user; that behavior is user interaction. During direct use of an application, this is normal and useful. During scripted automation, however, a dialog pauses script execution until someone dismisses it. In unattended automation, where no person is available to respond to dialogs, that pause can become a major failure point.

The application object includes a user interaction level property for setting how much interaction may occur while scripts run. Automation scripts can disable interaction, while workflows that expect a person nearby can permit limited interaction.

## AppleScript

### User-interaction levels — AppleScript

AppleScript can send commands between machines, which means it has additional interaction cases. In AppleScript:, the user interaction level property has four possible values:

| Property Value | Result |
| --- | --- |
| never interact | No interaction is allowed. |
| interact with self | Interact only with scripts executed from the Scripts menu (File > Scripts). |
| interact with local | Interact with scripts executed on the local machine (including self ). |
| interact with all | Interact with all scripts. |

These four settings let scripts control interaction according to where the command originated. For example, suppose the application serves remote users. A dialog would be hard for a remote user to dismiss, while a person at the local machine could handle it easily. In that situation, interact with local blocks dialogs from stopping remote scripts but still permits dialogs for local scripts.

## JavaScript

### User-interaction levels — JavaScript

JavaScript defines two values for the app.userInteractionLevel property:

| Property Value | Result |
| --- | --- |
| DISPLAYALERTS | Interaction is allowed. |
| DONTDISPLAYALERTS | No interaction is allowed. |

## VBScript

### User-interaction levels — VBScript

VBScript provides two values for the UserInteractionLevel property of the Application object:

| Property Value | Result |
| --- | --- |
| aiDisplayAlerts | Interaction is allowed. |
| aiDontDisplayAlerts | No interaction is allowed. |

## Printing Illustrator documents

The print options scripting feature lets scripts record and automate portions of an Illustrator print workflow. Through scripting, Illustrator exposes printing capabilities that may not appear in the application UI.

Because of limitations in the current printing architecture, Illustrator supports no more than one active print session.

The document object's print command or method accepts one optional parameter, used to supply a print options object.

A print options object defines settings such as PPD, PostScript options, paper options, and color-management options. It also includes a print preset property for selecting a preset that describes the print job.

When setting properties on a print options object, use the application object's read-only "list" properties to discover available printers, PPDs, print presets, and similar items. Examples include printer list, PPD file list, and print presets list.

## For more information

Find several extended sample scripts under the /Scripting/Sample Scripts/ folder inside your Illustrator installation directory.

For details on individual classes, objects, properties, commands, and parameters, plus script samples that show many of them in use, see asobjref/applescript-object-reference.

You can also inspect the lllustrator CC 2017 dictionary from Script Editor; see Viewing the AppleScript object model

If the concepts and terminology in this chapter are unfamiliar, read Adobe Introduction to Scripting.

You can find several extended sample scripts in the /Scripting/Sample Scripts/ folder within your lllustrator installation directory.

For class, object, property, method, and parameter details, along with script samples showing many of those items in use, consult Adobe lllustrator Scripting Reference: JavaScript in the /Scripting/Documentation/ folder within your lllustrator installation directory. The Illustrator dictionary is also available through the Object Model Viewer in the ESTK. See Viewing the JavaScript object model for help with the ExtendScript Toolkit and the Object Model Viewer.

If this chapter's concepts and terminology are unfamiliar, read Adobe Introduction to Scripting.

The Scripting/Sample Scripts folder inside the Illustrator installation directory contains several larger sample scripts.

For details on specific classes, objects, properties, commands, and parameters, plus script samples showing many of them in use, refer to Adobe lllustrator Scripting Reference: VBScript in the /Scripting/Documentation/ folder within the lllustrator installation directory. The lllustrator CC 2017 dictionary is also available from the Script Editor application; see Viewing the VBScript object model.

When the concepts and terminology in this chapter are unfamiliar, consult Adobe Introduction to Scripting.

## Your first Illustrator script

Many programming introductions begin by showing "Hello World!" This example creates a new Illustrator document and places that message in a text frame. Use the steps below:

A default Mac OS installation places Script Editor at /Applications/AppleScript/Script Editor/.

If Script Editor is missing, reinstall it from your Mac OS system CD.

1. Launch Script Editor.

```
--Send the following commands to Illustrator
tell application "Adobe Illustrator"

--Create a new document
set docRef to make new document

--Create a new text frame with the string "Hello World"
set textRef to make new text frame in docRef
with properties { contents: "Hello World!", position:{200, 200} }

end tell
```

3. Click Run in the Script Editor toolbar.

Many programming languages begin with a "Hello World!" first project. In this example, the script creates a new Illustrator document and adds a text frame containing that message. Use these steps:

Viewing the JavaScript object model explains where the ExtendScript Toolkit is located.

```
//Hello World!
var myDocument = app.documents.add();
//Create a new text frame and assign it to the variable "myTextFrame"
var myTextFrame = myDocument.textFrames.add();
// Set the contents and position of the text frame
myTextFrame.position = [200,200];
myTextFrame.contents = "Hello World!"
```

- In the ESTK workflow, open the upper-left drop-down list and choose Adobe lllustrator CC 2017; choose Yes to launch Illustrator, then run the script with Debug > Run in the ESTK.
- With a text editor other than the ESTK, save the file as text-only in a folder you choose, using the .jsx file extension, then start Illustrator. In Illustrator, choose File > Scripts > Other Scripts, then browse to and run the script file.

The standard first exercise for a programming language is to show the message "Hello World!" This example creates a new Illustrator document and adds a text frame that contains that message. Use these steps:

1. Use Notepad or another text editor, then enter this code:

```
Rem Hello World
Set appRef = CreateObject("Illustrator.Application")
Rem Create a new document and assign it to a variable
Set documentRef = appRef.Documents.Add
Rem Create a new text frame item and assign it to a variable
Set sampleText = documentRef.TextFrames.Add
Rem Set the contents and position of the TextFrame
sampleText.Position = Array(200, 200)
sampleText.Contents = "Hello World!"
```

3. Save the file as text-only in any folder you choose, using the .vbs file extension.

- Double-click the file.
- Start Illustrator, choose File > Scripts > Other Scripts, then browse to and run the script file.
