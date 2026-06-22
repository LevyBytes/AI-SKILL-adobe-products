# Artboard, Artboards, Brush, Brushes ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Artboard; Artboards; Brush; Brushes; CharacterAttributes; Characters; CharacterStyle; CharacterStyles; CMYKColor; Description; CompoundPathItem; CompoundPathItems; Dataset; Datasets; DocumentPreset; Documents; EPSSaveOptions; ExportOptionsFlash.

## Artboard

artboard

### Description

In a document, an Artboard object corresponds to one artboard. A single document can contain 1 to 100 artboards.

## Artboards

artboards

### Description

Collection containing Artboard objects.

## Brush

app.activeDocument.brushes[index]

### Description

Represents a brush in an Illustrator document. A document owns its Brush entries. Users can add more brushes in Illustrator. Scripts can read and use brushes, but cannot create new ones.

## Brushes

app.activeDocument.brushes

### Description

A document-level collection of Brush objects.

## CharacterAttributes

characterAttributes

### Description

Defines character-level properties inside a text frame. Through its characterAttributes property, a CharacterStyle object binds these settings to a particular text range.

Note

Character attributes start without defaults; until a script sets them, they remain undefined.

## Characters

app.activeDocument.textFrames[index].contents

### Description

Collection of one-character TextRange objects.

Because elements have no names, scripts address them by index.

## CharacterStyle

characterStyle

### Description

Binds character attributes to characters. For an example, see CharacterStyles.

## CharacterStyles

app.activeDocument.characterStyles

### Description

Collection object holding CharacterStyle entries.

## CMYKColor

new cmykColor()

### Description

CMYKColor defines CMYK color data for places that accept a Color object.

When an RGB document receives CMYK values for a page item, Illustrator converts those CMYK values into RGB. The reverse conversion also occurs when RGB values are supplied in a CMYK document.

Because conversion can discard color detail, choose the color class that corresponds to the document's actual color space.

## Description

### Color — Description

Color is the abstract base class for Illustrator color classes.

Subclass entries:

- Properties
- Example

- Properties
- Example

- Properties
- Example

- Properties

- Properties
- Example

- Properties
- Example

- Properties
- Example

- Properties

## CompoundPathItem

app.activeDocument.activeLayer.compoundPathItems[index]

### Description

A CompoundPathItem represents a compound path built from multiple crossing paths; where those component paths overlap, interior transparent areas result. Use the pathItems property to reach the paths inside the compound path.

When a script requests document-level paths, Illustrator returns paths that sit inside a compound path or group as separate path objects. A layer-level path query, however, does not include paths nested in a compound path or group contained by that layer.

Every path in a compound path uses shared property values. Changing one component path property therefore updates the same property across the remaining component paths.

## CompoundPathItems

app.activeDocument.activeLayer.compoundPathItems

### Description

Collection object containing CompoundPathItem entries.

## Dataset

app.activeDocument.dataSets[index]

### Description

For dynamic publishing, Dataset groups variable data into a single data object. It lets several variables and their dynamic values be gathered together.

Creating a dataset requires at least one variable already bound to an art item. See the class Variable.

## Datasets

app.activeDocument.dataSets

### Description

Holds the Dataset object collection.

## DocumentPreset

documentPreset

### Description

Use this preset document template when creating a new document. See Documents.addDocument().

## Documents

app.documents

### Description

Holds the Document object collection.

## EPSSaveOptions

epsSaveOptions

### Description

Settings used by Document.saveAs() when saving a document as an Illustrator EPS file.

Every property is optional.

## ExportOptionsFlash

exportOptionsFlash

### Description

Use `ExportOptionsFlash` with `Document.exportFile()` to write a document as a Macromedia Flash (SWF) file. No property is required.

During export, Illustrator adds the suitable extension on its own; leave any extension out of the file specification.

## ExportOptionsGIF

exportOptionsGIF

### Description

Use `ExportOptionsGIF` with `Document.exportFile()` to set up GIF export for a document. All properties are optional.

During export, Illustrator adds the suitable extension on its own; leave any extension out of the file specification.

## ExportOptionsJPEG

exportOptionsJPEG

### Description

Use `ExportOptionsJPEG` with `Document.exportFile()` to set up JPEG export for a document. All properties are optional.

During export, Illustrator adds the suitable extension on its own; leave any extension out of the file specification.

## ExportOptionsPhotoshop

exportOptionsPhotoshop

### Description

Use `ExportOptionsPhotoshop` with `Document.exportFile()` to set up Photoshop-file export for a document. All properties are optional.

During export, Illustrator adds the suitable extension on its own; leave any extension out of the file specification.

## ExportOptionsPNG24

exportOptionsPNG24

### Description

Use `ExportOptionsPNG24` with `Document.exportFile()` to configure export of a document to a 24-bit PNG file. No property is required.

During export, Illustrator adds the suitable extension on its own; leave any extension out of the file specification.

## ExportOptionsPNG8

exportOptionsPNG8

### Description

Use `ExportOptionsPNG8` with `Document.exportFile()` to configure export of a document to an 8-bit PNG file. No property is required.

During export, Illustrator adds the suitable extension on its own; leave any extension out of the file specification.

## ExportOptionsSVG

exportOptionsSVG

### Description

Use `ExportOptionsSVG` with `Document.exportFile()` to set up export of a document to an SVG file. No property is required.

During export, Illustrator adds the suitable extension on its own; leave any extension out of the file specification.

## ExportOptionsTIFF

exportOptionsTIFF

### Description

Supplies settings for exporting a document to TIFF through the Document.exportFile() method. Every property can be omitted.

During export, Illustrator appends the suitable file extension automatically. Leave the extension out of the file specification.

## FXGSaveOptions

fxgSaveOptions

### Description

Defines optional settings that can be passed when saving a document as an FXG file.

## Gradient

gradient

### Description

Represents a gradient definition stored in a document. Scripts can add new gradients.

## GradientColor

gradientColor

### Description

Describes a gradient color specification within a Gradient object. A script may build a new gradient color from a reference to an existing document gradient. If no existing gradient object is referenced, Illustrator supplies a default gradient.

## Gradients

app.activeDocument.gradients

### Description

A document's collection of Gradient objects.

## GradientStop

app.activeDocument.gradients[index].gradientStops[index]

### Description

Represents a gradient stop at a point on a specific document gradient. Each stop defines one color transition within its containing gradient.

See Changing a gradient stop color for an example.

## GradientStops

app.activeDocument.gradients[index].gradientStops

### Description

This collection holds the GradientStop objects for one gradient. Its members have no names, so scripts address them by index.

## GraphicStyle

app.activeDocument.graphicStyles[index]

### Description

A GraphicStyle stores appearance attributes that can be applied to page items without destructive changes. Graphic styles live inside documents, and scripts cannot create additional graphic styles.

## GraphicStyles

app.activeDocument.graphicStyles

### Description

This document-level collection contains GraphicStyle objects.

## GraphItem

app.activeDocument.graphItems[index]

### Description

Represents graph artwork. For usage context, see the Rotating graph items example.

## GraphItems

app.activeDocument.graphItems

### Description

A GraphItems collection exposes every graph-art item in an Illustrator document.

## GrayColor

new GrayColor()

### Description

Use this grayscale color specification wherever a Color object is expected.

## GroupItem

app.activeDocument.groupItems[index]

### Description

A GroupItem represents art collected into one group. It can include any page item type that a layer can hold, including groups nested inside it.

When a script queries document paths, paths inside a group or compound path are returned as separate path objects. Querying paths from a layer that contains that group or compound path does not return the paths inside it.

## GroupItems

app.activeDocument.groupItems

### Description

The document's GroupItem collection.

## IllustratorSaveOptions

illustratorSaveOptions

### Description

Settings used by Document.saveAs() when saving a document as an Illustrator file. Every property is optional.

## ImageCaptureOptions

imageCaptureOptions

### Description

Settings for Document.imageCapture(); every property is optional.

## Ink

app.activeDocument.inkLisk[index]

### Description

Connects a document ink name to its ink information.

## InkInfo

app.activeDocument.inkList[index].inkInfo

### Description

Ink information used when printing a document.

## InsertionPoint

app.activeDocument.textFrames[index].insertionPoints[index]

### Description

Text insertion position located between characters; it is where new text objects can be placed. An InsertionPoints collection owns each insertion point.

## InsertionPoints

app.activeDocument.textFrames[index].insertionPoints

### Description

Collection containing InsertionPoint objects.

## LabColor

labColor

### Description

CIE Lab color-space specification for places that require a Color object.

## Layers

app.activeDocument.layers

### Description

Document layer collection.

## LegacyTextItem

legacyTextItems[index]

### Description

A text object produced by Illustrator CS (version 10) or an earlier release; it cannot be edited until conversion. To convert legacy text, see LegacyTextItems.convertToNative().

Scripts can view, move, and print legacy text, but editing is unavailable. When selected, legacy text shows an "x" across its bounding box.

## LegacyTextItems

legacyTextItems

### Description

Collection containing LegacyTextItem objects.

## Lines

lines

### Description

Collection of TextRange objects for the lines of text inside a text frame. Because these elements do not have names, access them by index.

## Matrix

matrix

### Description

Specification for a transformation matrix, used when object geometry needs to be transformed. It lets scripts set and read matrix information from an Illustrator document or from page items within one.

Matrices work with the transform method and also appear as properties on several object types. A matrix defines the geometric transformation applied to an object. To create a new matrix, call Application object methods such as Application.getTranslationMatrix(), Application.getScaleMatrix(), or Application.getRotationMatrix().

A Matrix stores matrix values as a record rather than as a reference to a matrix object. Matrix commands act on the values in that record. When a command changes a matrix, the command returns a changed matrix record as its result. The matrix record originally supplied to the command remains unchanged.

## MeshItem

app.activeDocument.meshItems[index]

### Description

Gradient mesh art item.

Scripts cannot create mesh items directly. To produce another mesh item, duplicate an existing one, then place the copy at the required location with one of the move methods.

## MeshItems

app.activeDocument.meshItems

### Description

Collection containing MeshItem objects.

## NoColor

new NoColor()

### Description

Represents the Color object whose value is "none".

Setting an art item's fill or stroke color to a NoColor object has the same effect as setting the filled or stroked property to false.

## NonNativeItem

nonNativeItems[index]

### Description

Represents artwork that Illustrator treats as non-native content.

## NonNativeItems

nonNativeItems

### Description

Represents a collection made up of NonNativeItem objects.

## OpenOptions

openOptions

### Description

Supplies document-opening options for use with the Application.open() method.

## OpenOptionsFreeHand

openOptionsFreeHand

### Description

Defines options used when opening a FreeHand file.

## OpenOptionsPhotoshop

openOptionsPhotoshop

### Description

Supplies Photoshop document-opening options for use with the Application.open() method.

## PageItem

app.activeDocument.pageItems[index]

### Description

Use this reference for any art item. In Illustrator, every art item and every group in a document is treated as a page item, and scripts can reach one through a document, layer, or group item.

PageItem provides full access to the art items stored in an Illustrator document. It is the superclass for artwork objects in a document, so CompoundPathItem, GroupItem, MeshItem, PathItem, PlacedItem, PluginItem, RasterItem, and TextFrameItem inherit properties defined by PageItem.

Create a concrete PageItem subclass, such as PathItem, rather than instantiating PageItem directly.

## PageItems

app.activeDocument.pageItems

### Description

This is a PageItem object collection, giving complete access to art items in an Illustrator document through these documented sections:

- Properties
- Methods
- Example

- Properties
- Methods

- Properties
- Methods
- Example

- Properties
- Methods

- Properties
- Methods
- Example

- Properties
- Methods

- Properties
- Methods
- Example

- Properties
- Methods
- Example

- Properties
- Methods
- Example

- Properties
- Methods

- Properties
- Methods

- Properties
- Methods
- Example

Scripts can reference page items from the PageItems property on a Document, Layer, or GroupItem.

When a single member is accessed from one of these collections, it is a page item of a specific underlying type. For example, using PageItems to refer to a graph item gives that object's typename value as GraphItem.

## Paper

app.class

### Description

A Paper links a paper name to its paper information. Printer objects use Paper objects.

## PaperInfo

printerList[printerIndex].printerInfo.paperSizes[paperSizeIndex].paperInfo

### Description

Printing workflows use this PaperInfo data to describe paper details.

## ParagraphAttributes

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes

### Description

ParagraphAttributes holds the settings and attributes for a paragraph inside a text frame.

Note

These paragraph attributes remain undefined until code explicitly assigns values; they do not start with defaults.

## Paragraphs

app.activeDocument.textFrames[index].paragraphs

### Description

Paragraphs is a collection of TextRange objects; each TextRange corresponds to one paragraph.

Because the elements have no names, index access is required.

## ParagraphStyle

app.activeDocument.paragraphStyles[index]

### Description

ParagraphStyle connects character and paragraph attributes to a style name. Use the style object to assign those attributes to TextFrame text. See Creating and applying a paragraph style example.

## ParagraphStyles

app.activeDocument.paragraphStyles

### Description

Collection containing ParagraphStyle objects.

## PathItem

app.activeDocument.pathItems[index]

### Description

Identifies a path item whose geometry is described by contained PathPoint objects.

Through the PathItem class, scripts can reach the full set of Illustrator path controls.

For paths made from straight-line segments, setEntirePath is the high-efficiency creation method.

## PathItems

app.activeDocument.pathItems

### Description

Collection containing PathItem objects.

Use ellipse, polygon, rectangle, roundedRectangle, and star to create complex path items from simple parameter sets.

When these methods are called without parameters, Illustrator falls back to default values.

## PathPoint

app.activeDocument.pathItems[index].pathPoints[index]

### Description

Point belonging to a specific path.

A path point consists of an anchor point, anchor, plus two handles named leftDirection and rightDirection.

## PathPoints

app.activeDocument.pathItems[index].pathPoints

### Description

Collection of PathPoint objects for a specific path.

Because the elements have no names, access them by index.

## Pattern

app.activeDocument.patterns[index]

### Description

An Illustrator document can contain this pattern definition.

The Swatches palette displays these patterns.

A PatternColor object points to each pattern and supplies the appearance used for that pattern.

## Patterns

app.activeDocument.patterns

### Description

Collection containing the document's Pattern objects.

## PatternColor

patternColor

### Description

A PatternColor value specifies a pattern-based color. To make a new pattern color, modify a pattern that already exists in the document. Edits applied to a pattern also change that pattern in the Palette.

Any property accepting a color object, including fillColor or strokeColor, can use a PatternColor object.

## PDFFileOptions

app.preferences.PDFFileOptions

### Description

Application.open() uses these settings when it opens a PDF file.

Every property is optional.

## PDFSaveOptions

new PDFSaveOptions()

### Description

Document.saveAs() uses these options when saving a document as an Adobe PDF file.

Every property is optional.

## PhotoshopFileOptions

preferences.photoshopFileOptions

### Description

Application.open() uses these optional settings when opening a Photoshop file.

## PlacedItem

app.activeDocument.placedItems[index]

### Description

A document artwork item whose content is stored as a linked file.

For instance, Illustrator creates a placed item when File > Place brings artwork into a document, or when the add() method of the placedItems collection object creates that artwork.

For details, see PlacedItems.

## PlacedItems

app.activeDocument.placedItems

### Description

A document collection containing PlacedItem objects.

## PluginItem

app.activeDocument.pluginItems[index]

### Description

An art item produced by an Illustrator plug-in.

A script may obtain a plug-in item through PlacedItem.trace or RasterItem.trace(), or by copying an existing plug-in item with duplicate; it cannot instantiate PluginItem objects directly.

## PluginItems

app.activeDocument.pluginItems

### Description

A document collection containing PluginItem objects.

See Copying a plug-in item.

## PPDFile

app.PPDFileList[index]

### Description

Links file information to a PostScript Printer Description (PPD) file.

## PPDFileInfo

app.PPDFileList[index].PPDInfo

### Description

Information describing a PostScript Printer Description (PPD) file.

## Preferences

app.Preferences

### Description

Defines preferred handling options for AutoCAD, FreeHand, PDF, and Photoshop files.

## PrintColorManagementOptions

new PrintColorManagementOptions()

### Description

Holds document color-management data used during printing.

## PrintColorSeparationOptions

new PrintColorSeparationOptions()

### Description

Provides color-separation details used when printing a document.

## PrintCoordinateOptions

new PrintCoordinateOptions()

### Description

Stores media-related settings and other print-coordinate parameters.

## Printer

app.PrinterList[index]

### Description

Links an available printer entry with its printer information.

A document must already be open before requesting the printer list; otherwise Illustrator returns an error.

## PrinterInfo

printerInfo

### Description

Printer configuration details.

## PrintFlattenerOptions

new PrintFlattenerOptions()

### Description

Contains flattener settings used when Illustrator writes transparent artwork to a non-native format.

## PrintFontOptions

new PrintFontOptions()

### Description

Stores the font download and substitution settings applied when a document is printed.

## PrintJobOptions

new PrintJobOptions()

### Description

Defines how Illustrator should handle the print job.

## PrintOptions

new PrintOptions()

### Description

Collects print settings for flattening, color management, coordinates, fonts, paper, and related output choices.

## PrintPageMarksOptions

new PrintPageMarksOptions()

### Description

Provides the settings used when page marks are printed.

## PrintPaperOptions

new PrintPaperOptions()

### Description

Describes the paper selected for a print job.

## PrintPostScriptOptions

new PrintPostScriptOptions()

### Description

Supplies settings for output sent to a PostScript printer.

## RasterEffectOptions

RasterEffectOptions

### Description

Configures document raster effect settings. Every property is optional.

## RasterItem

app.activeDocument.rasterItems[index]

### Description

A document-level bitmap artwork entry. Scripts may build one from an external file, or obtain another by calling duplicate on an existing raster item.

## RasterItems

app.activeDocument.rasterItems

### Description

Collection containing RasterItem objects.

## RasterizeOptions

rasterizeOptions

### Description

Configuration object accepted by rasterization operations.

Every property is optional.

## RGBColor

new RGBColor()

### Description

An RGB Color specification for assigning RGB color to a layer or art item.

When a document uses RGB and a page item receives a CMYK color value, Illustrator converts that CMYK specification into an RGB specification. The inverse conversion occurs for a CMYK document when RGB values are assigned. Because conversion can discard information, choose the color class that corresponds to the document's real color space.

## Screen

PPDFileList[index].PPDInfo.screenList[index]

### Description

Links a color separation screen to the information used during printing.

## ScreenInfo

PPDFileList[index].PPDInfo.screenList[index].screenInfo

### Description

Stores the angle and frequency details for the color separation screen used during printing.

## ScreenSpotFunction

PPDFileList[index].PPDInfo.screenSpotFunctionList[index]

### Description

Stores details for a color separation screen spot function, including the PostScript language code definition.

## Spot

app.activeDocument.spots[index]

### Description

A SpotColor object can hold a user-defined color definition.

When a spot is created without explicit properties, Illustrator supplies default values.

When you provide the color, match the document color space, using either CMYK or RGB. A mismatch causes an error.

Illustrator appends the new spot to the Swatches palette list.

## SpotColor

new SpotColor()

### Description

Class for applying a spot's color value at a chosen tint. Any property expecting a Color object can use it.

## Spots

app.activeDocument.spots

### Description

Document-level collection containing SpotColor objects.

## Story

story

### Description

A story is one continuous text block defined by a text range. It may include a single text frame or several linked text frames that together behave as one story.

## Stories

stories

### Description

Document collection made up of Story objects.

## Swatch

app.activeDocument.swatches[index]

### Description

A document can contain a color swatch definition, and Illustrator shows those swatches in its Swatches palette.

Scripts can add new swatches.

A swatch may store pattern, gradient, CMYK, RGB, gray, spot, and other color data.

## Swatches

app.activeDocument.swatches

### Description

This document-level collection contains Swatch objects.

## SwatchGroup

swatchGroup

### Description

A Swatch object set grouped together.

## SwatchGroups

swatchGroups

### Description

A collection made up of SwatchGroup objects.

## SymbolItem

app.activeDocument.symbolItems[index]

### Description

Artwork becomes reusable once it has been added to the Symbols palette.

A SymbolItem remains associated with the Symbol used to create it, so edits to the linked Symbol object are reflected in that instance.

## SymbolItems

app.activeDocument.symbolItems

### Description

This document-level collection contains SymbolItem objects.

## Symbol

app.activeDocument.symbols[index]

### Description

An art item can be stored in the Symbols palette and reused in the document one or more times without duplicating the art data. Symbols belong to documents.

Document Symbol instances connect to SymbolItem objects, which hold the art object's properties.

## TabStopInfo

app.activeDocument.textFrames[index].paragraphs[index].paragraphAttributes.tabStops

### Description

Describes a ParagraphAttributes tab stop, including its alignment, position, and related details.

## Tag

app.activeDocument.selection[index].tags[index]

### Description

Represents a label attached to a particular artwork item.

Tags lets any page item in a document carry any number of key-value pairs.

## Tags

app.activeDocument.selection[index].tags

### Description

Provides a collection containing Tag objects.

## TextFont

app.textFonts[index]

### Description

Describes a document font as referenced from a CharacterAttributes object.

## TextFonts

app.textFonts

### Description

TextFont objects are exposed together through this collection.

## TextFrameItem

app.activeDocument.textFrames[index]

### Description

Use this art item when text needs to be shown. In the Illustrator UI, it corresponds to content made with the Text tool. Illustrator distinguishes point text, path text, and area text; the frame's kind property identifies which form is in use.

Creating a text frame also creates a Story object. If text frames are threaded together, those frames share one story object instead. Link frames through nextFrame or previousFrame.

## TextFrameItems

app.activeDocument.textFrames

### Description

This collection contains the document's TextFrameItem objects.

## TextPath

textPath

### Description

Area text and path text use this path, or path list, whose geometry is defined by its path points.

## TextRange

app.activeDocument.textFrames[index].textRange

### Description

This represents text within one specific text art item. TextRange provides access to the text held by text art items.

## TextRanges

textRanges

### Description

Collection object containing TextRange entries.
