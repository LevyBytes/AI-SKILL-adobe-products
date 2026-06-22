# Properties (part 8)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## PDFSaveOptions — Properties

Optional. Comment added to the PDF file to state the target print condition.

Default: not included

### Type

String

### PDFSaveOptions.outputConditionID

pDFSaveOptions.outputConditionID

### Description

Optional. Registered printing-condition name.

Default: not included

### Type

String

### PDFSaveOptions.pageInformation

pDFSaveOptions.pageInformation

### Description

Optional. When true, includes raw page information.

Default: false

### Type

Boolean

### PDFSaveOptions.pageMarksType

pDFSaveOptions.pageMarksType

### Description

Optional. Style used for page marks.

Default: PageMarksType.Roman

### Type

PageMarksTypes

### PDFSaveOptions.pDFAllowPrinting

pDFSaveOptions.pDFAllowPrinting

### Description

Optional. Printing permission applied by PDF security.

Default: PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION

### Type

PDFPrintAllowedEnum

### PDFSaveOptions.pDFChangesAllowed

pDFSaveOptions.pDFChangesAllowed

### Description

Optional. Changes permitted by the security settings.

Default: PDFChangeAllowedEnum.CHANGE128ANYCHANGES

### Type

PDFChangesAllowedEnum

### PDFSaveOptions.pDFPreset

pDFSaveOptions.pDFPreset

### Description

Optional. PDF preset name to apply.

### Type

String

### PDFSaveOptions.pDFXStandard

pDFSaveOptions.pDFXStandard

### Description

Optional. PDF standard that the document is declared to satisfy.

Default: PDFXStandard.PDFXNONE

### Type

PDFXStandard

### PDFSaveOptions.pDFXStandardDescription

pDFSaveOptions.pDFXStandardDescription

### Description

Optional. Description of the PDF standard supplied by the selected preset.

### Type

String

### PDFSaveOptions.permissionPassword

pDFSaveOptions.permissionPassword

### Description

Optional. Password string used to limit editing of security settings.

Default: no string

### Type

String

### PDFSaveOptions.preserveEditability

pDFSaveOptions.preserveEditability

### Description

Optional. When true, saving keeps Illustrator editing capabilities in the document.

Default: true

### Type

Boolean

### PDFSaveOptions.printerResolution

pDFSaveOptions.printerResolution

### Description

Optional. Printer resolution used for flattening.

Default: 800.0

### Type

Number (double)

### PDFSaveOptions.registrationMarks

pDFSaveOptions.registrationMarks

### Description

Optional. When true, adds registration marks.

Default: false

### Type

Boolean

### PDFSaveOptions.requireDocumentPassword

pDFSaveOptions.requireDocumentPassword

### Description

Optional. Requires a password before the document can be opened.

Default: false

### Type

Boolean

### PDFSaveOptions.requirePermissionPassword

pDFSaveOptions.requirePermissionPassword

### Description

Optional. Uses a password to limit editing of security settings.

Default: false

### Type

Boolean

### PDFSaveOptions.trapped

pDFSaveOptions.trapped

### Description

Optional. When true, the document has manual trapping prepared.

Default: false

### Type

Boolean

### PDFSaveOptions.trimMarks

pDFSaveOptions.trimMarks

### Description

Optional. Adds trim marks.

Default: false

### Type

Boolean

### PDFSaveOptions.trimMarkWeight

pDFSaveOptions.trimMarkWeight

### Description

Optional. Weight used for trim marks.

Default: PDFTrimMarkWeight.TRIMMARKWEIGHT0125

### Type

PDFTrimMarkWeight

### PDFSaveOptions.typename

pDFSaveOptions.typename

### Description

Optional. Read-only. Class name reported for the referenced object.

### Type

String

### PDFSaveOptions.viewAfterSaving

pDFSaveOptions.viewAfterSaving

### Description

Optional. Shows the PDF after it is saved.

Default: false

### Type

Boolean

## PhotoshopFileOptions — Properties

### PhotoshopFileOptions.parent

preferences.photoshopFileOptions.parent

### Description

Parent object for this object.

### Type

Object; read-only.

### PhotoshopFileOptions.pixelAspectRatioCorrection

preferences.photoshopFileOptions.pixelAspectRatioCorrection

### Description

When true, imported images with non-square pixel aspect ratios are adjusted.

### Type

Boolean

### PhotoshopFileOptions.preserveImageMaps

preferences.photoshopFileOptions.preserveImageMaps

### Description

When true, conversion keeps image maps intact.

Default: true

### Type

Boolean

### PhotoshopFileOptions.preserveLayers

preferences.photoshopFileOptions.preserveLayers

### Description

When true, conversion keeps layers intact.

Default: true

### Type

Boolean

### PhotoshopFileOptions.preserveSlices

preferences.photoshopFileOptions.preserveSlices

### Description

When true, conversion keeps slices intact.

Default: true

### Type

Boolean

### PhotoshopFileOptions.typename

preferences.photoshopFileOptions.typename

### Description

Class name reported for the referenced object.

### Type

String; read-only.

## PlacedItem — Properties

### PlacedItem.artworkKnockout

app.activeDocument.placedItems[index].artworkKnockout

### Description

Indicates whether this object participates in knockout creation and which knockout type applies.

### Type

KnockoutState

### PlacedItem.blendingMode

app.activeDocument.placedItems[index].blendingMode

### Description

The compositing blend mode assigned to the object.

### Type

BlendModes

### PlacedItem.boundingBox

app.activeDocument.placedItems[index].boundingBox

### Description

Placed art dimensions before transformations are considered.

### Type

Array of 4 numbers

### PlacedItem.contentVariable

app.activeDocument.placedItems[index].contentVariable

### Description

The Variable bound as this item's content variable.

### Type

Variable

### PlacedItem.controlBounds

app.activeDocument.placedItems[index].controlBounds

### Description

Object bounds that account for controls and stroke thickness.

### Type

Array of 4 numbers; read-only.

### PlacedItem.editable

app.activeDocument.placedItems[index].editable

### Description

True means this item can be edited.

### Type

Boolean; read-only.

### PlacedItem.file

app.activeDocument.placedItems[index].file

### Description

The artwork's backing file.

### Type

File object; read-only.

### PlacedItem.geometricBounds

app.activeDocument.placedItems[index].geometricBounds

### Description

Object bounds with stroke width left out.

### Type

Array of 4 numbers; read-only.

### PlacedItem.height

app.activeDocument.placedItems[index].height

### Description

Group-item height value.

### Type

Number (double)

### PlacedItem.hidden

app.activeDocument.placedItems[index].hidden

### Description

A true value hides this item.

### Type

Boolean

### PlacedItem.isIsolated

app.activeDocument.placedItems[index].isIsolated

### Description

A true value marks this object as isolated.

### Type

Boolean

### PlacedItem.layer

app.activeDocument.placedItems[index].layer

### Description

The owning layer for this item.

### Type

Layer; read-only.

### PlacedItem.left

app.activeDocument.placedItems[index].left

### Description

Left-edge position for the item, in points, measured from the page's left side.

### Type

Number (double)

### PlacedItem.locked

app.activeDocument.placedItems[index].locked

### Description

A true value locks this item.

### Type

Boolean

### PlacedItem.matrix

app.activeDocument.placedItems[index].matrix

### Description

Matrix applied to placed artwork.

### Type

Matrix

### PlacedItem.name

app.activeDocument.placedItems[index].name

### Description

This item's name.

### Type

String

### PlacedItem.note

app.activeDocument.placedItems[index].note

### Description

The note stored on this item.

### Type

String

### PlacedItem.opacity

app.activeDocument.placedItems[index].opacity

### Description

Object opacity.

Range: 0.0 to 100.0

### Type

Number (double)

### PlacedItem.parent

app.activeDocument.placedItems[index].parent

### Description

This object's parent.

### Type

Layer or GroupItem

### PlacedItem.position

app.activeDocument.placedItems[index].position

### Description

Top-left corner location for the pluginItem object, in [x, y] point coordinates. Stroke weight is not included.

### Type

Array of 2 numbers; read-only.

### PlacedItem.selected

app.activeDocument.placedItems[index].selected

### Description

A true value selects this item.

### Type

Boolean

### PlacedItem.sliced

app.activeDocument.placedItems[index].sliced

### Description

A true value marks the item as sliced.

Default: false

### Type

Boolean

### PlacedItem.tags

app.activeDocument.placedItems[index].tags

### Description

Tags stored on the item.

### Type

Tags; read-only.

### PlacedItem.top

app.activeDocument.placedItems[index].top

### Description

Top-edge position for the item, in points, measured upward from the page bottom.

### Type

Number (double)

### PlacedItem.typename

app.activeDocument.placedItems[index].typename

### Description

Referenced-object class name.

### Type

String; read-only.

### PlacedItem.uRL

app.activeDocument.placedItems[index].uRL

### Description

Adobe URL tag value stored on this item.

### Type

String

### PlacedItem.visibilityVariable

app.activeDocument.placedItems[index].visibilityVariable

### Description

Variable bound to item visibility.

### Type

Variable

### PlacedItem.visibleBounds

app.activeDocument.placedItems[index].visibleBounds

### Description

Visible item bounds with strokes included.

### Type

Array of 4 numbers; read-only.

### PlacedItem.width

app.activeDocument.placedItems[index].width

### Description

Item width.

### Type

Number (double)

### PlacedItem.wrapInside

app.activeDocument.placedItems[index].wrapInside

### Description

A true value wraps the text frame object inside the item.

### Type

Boolean

### PlacedItem.wrapOffset

app.activeDocument.placedItems[index].wrapOffset

### Description

Offset used for text wrapping around the item.

### Type

Number (double)

### PlacedItem.wrapped

app.activeDocument.placedItems[index].wrapped

### Description

A true value wraps text frame objects around the item; the text frame must sit higher in the stacking order.

### Type

Boolean

### PlacedItem.zOrderPosition

app.activeDocument.placedItems[index].zOrderPosition

### Description

Stacking-order index of this item within its containing parent group or layer.

### Type

Number; read-only.

## PlacedItems — Properties

### PlacedItems.length

app.activeDocument.placedItems.length

### Description

Collection element count.

### Type

Number; read-only.

### PlacedItems.parent

app.activeDocument.placedItems.parent

### Description

Container object for this collection.

### Type

Object; read-only.

### PlacedItems.typename

app.activeDocument.placedItems.typename

### Description

Class name for the object.

### Type

String; read-only.

## PluginItem — Properties

### PluginItem.artworkKnockout

app.activeDocument.pluginItems[index].artworkKnockout

### Description

Indicates whether this object participates in knockout creation and which knockout type applies.

### Type

KnockoutState

### PluginItem.blendingMode

app.activeDocument.pluginItems[index].blendingMode

### Description

The compositing blend mode assigned to the object.

### Type

BlendModes

### PluginItem.controlBounds

app.activeDocument.pluginItems[index].controlBounds

### Description

Object bounds that account for controls and stroke thickness.

### Type

Array of 4 numbers; read-only.

### PluginItem.editable

app.activeDocument.pluginItems[index].editable

### Description

True means this item can be edited.

### Type

Boolean; read-only.

### PluginItem.geometricBounds

app.activeDocument.pluginItems[index].geometricBounds

### Description

Object bounds with stroke width left out.

### Type

Array of 4 numbers; read-only.

### PluginItem.height

app.activeDocument.pluginItems[index].height

### Description

Group-item height value.

### Type

Number (double)

### PluginItem.hidden

app.activeDocument.pluginItems[index].hidden

### Description

A true value hides this item.

### Type

Boolean

### PluginItem.isIsolated

app.activeDocument.pluginItems[index].isIsolated

### Description

A true value marks this object as isolated.

### Type

Boolean

### PluginItem.isTracing

app.activeDocument.pluginItems[index].isTracing

### Description

True means this plug-in group is a vector art item generated by tracing raster artwork.

The tracing property stores the TracingObject for the options used during creation.

### Type

Boolean

### PluginItem.layer

app.activeDocument.pluginItems[index].layer

### Description

The owning layer for this item.

### Type

Layer; read-only.

### PluginItem.left

app.activeDocument.pluginItems[index].left

### Description

Left-edge position for the item, in points, measured from the page's left side.

### Type

Number (double)

### PluginItem.locked

app.activeDocument.pluginItems[index].locked

### Description

A true value locks this item.

### Type

Boolean

### PluginItem.name

app.activeDocument.pluginItems[index].name

### Description

This item's name.

### Type

String

### PluginItem.note

app.activeDocument.pluginItems[index].note

### Description

The note stored on this item.

### Type

String

### PluginItem.opacity

app.activeDocument.pluginItems[index].opacity

### Description

Object opacity.

Range: 0.0 to 100.0

### Type

Number (double)

### PluginItem.parent

app.activeDocument.pluginItems[index].parent

### Description

This object's parent.

### Type

Layer or GroupItem

### PluginItem.position

app.activeDocument.pluginItems[index].position

### Description

Top-left corner location for the pluginItem object, in [x, y] point coordinates. Stroke weight is not included.

### Type

Array of 2 numbers; read-only.

### PluginItem.selected

app.activeDocument.pluginItems[index].selected

### Description

A true value selects this item.

### Type

Boolean

### PluginItem.sliced

app.activeDocument.pluginItems[index].sliced

### Description

A true value marks the item as sliced.

Default: false

### Type

Boolean

### PluginItem.tags

app.activeDocument.pluginItems[index].tags

### Description

Tags stored on the item.

### Type

Tags; read-only.

### PluginItem.top

app.activeDocument.pluginItems[index].top

### Description

Top-edge position for the item, in points, measured upward from the page bottom.

### Type

Number (double)

### PluginItem.tracing

app.activeDocument.pluginItems[index].tracing

### Description

If tracing created this plug-in group and isTracing is true, this property references the TracingObject tied to the creation options.

### Type

TracingObject

### PluginItem.typename

app.activeDocument.pluginItems[index].typename

### Description

Referenced-object class name.

### Type

String; read-only.

### PluginItem.uRL

app.activeDocument.pluginItems[index].uRL

### Description

Adobe URL tag value stored on this item.

### Type

String

### PluginItem.visibilityVariable

app.activeDocument.pluginItems[index].visibilityVariable

### Description

Variable bound to item visibility.

### Type

Variable

### PluginItem.visibleBounds

app.activeDocument.pluginItems[index].visibleBounds

### Description

Visible item bounds with strokes included.

### Type

Array of 4 numbers; read-only.

### PluginItem.width

app.activeDocument.pluginItems[index].width

### Description

Item width.

### Type

Number (double)

### PluginItem.wrapInside

app.activeDocument.pluginItems[index].wrapInside

### Description

A true value wraps the text frame object inside the item.

### Type

Boolean

### PluginItem.wrapOffset

app.activeDocument.pluginItems[index].wrapOffset

### Description

Offset used for text wrapping around the item.

### Type

Number (double)

### PluginItem.wrapped

app.activeDocument.pluginItems[index].wrapped

### Description

A true value wraps text frame objects around the item; the text frame must sit higher in the stacking order.

### Type

Boolean

### PluginItem.zOrderPosition

app.activeDocument.pluginItems[index].zOrderPosition

### Description

Stacking-order index of this item within its containing parent group or layer.

### Type

Number; read-only.

## PluginItems — Properties

### PluginItems.length

app.activeDocument.pluginItems.length

### Description

Collection element count.

### Type

Number; read-only.

### PluginItems.parent

app.activeDocument.pluginItems.parent

### Description

Container object for this collection.

### Type

Object; read-only.

### PluginItems.typename

app.activeDocument.pluginItems.typename

### Description

Class name for the object.

### Type

String; read-only.

## PPDFile — Properties

### PPDFile.name

app.PPDFileList[index].name

### Description

PPD model name.

### Type

String

### PPDFile.PPDInfo

app.PPDFileList[index].PPDInfo

### Description

Information stored for the PPD file.

### Type

PPDFileInfo

### PPDFile.typename

app.PPDFileList[index].typename

### Description

Class name for the object.

### Type

String; read-only.

## PPDFileInfo — Properties

### PPDFileInfo.languageLevel

app.PPDFileList[index].PPDInfo.languageLevel

### Description

Language level for PostScript.

### Type

String

### PPDFileInfo.PPDFilePath

app.PPDFileList[index].PPDInfo.PPDFilePath

### Description

Path specification for the PPD file.

### Type

File object

### PPDFileInfo.screenList

app.PPDFileList[index].PPDInfo.screenList

### Description

Color separation screen list.

### Type

Array of Screen

### PPDFileInfo.screenSpotFunctionList

app.PPDFileList[index].PPDInfo.screenSpotFunctionList

### Description

Color separation screen spot-function list.

### Type

Array of ScreenSpotFunction

## Preferences — Properties

app.preferences.AutoCADFileOptions

### Description

Settings used for AutoCAD content during open or place operations.

### Type

OpenOptionsAutoCAD; read-only.

### Preferences.FreeHandFileOptions

app.preferences.FreeHandFileOptions

### Description

Settings used for FreeHand content during open or place operations.

### Type

OpenOptionsFreeHand; read-only.

### Preferences.parent

app.preferences.parent

### Description

Object that owns this preference object.

### Type

object; read-only.

### Preferences.PDFFileOptions

app.preferences.PDFFileOptions

### Description

Settings used for PDF content during open or place operations.

### Type

PDFFileOptions; read-only.

### Preferences.PhotoshopFileOptions

app.preferences.PhotoshopFileOptions

### Description

Settings used for Photoshop content during open or place operations.

### Type

PhotoshopFileOptions; read-only.

### Preferences.typename

app.preferences.typename

### Description

Class name for the referenced object.

### Type

string; read-only.

## PrintColorManagementOptions — Properties

### PrintColorManagementOptions.colorProfileMode

printColorManagementOptions.colorProfileMode

### Description

Mode selected for color management profiles.

Default: PrintColorProfile.SOURCEPROFILE

### Type

PrintColorProfile

### PrintColorManagementOptions.intent

printColorManagementOptions.intent

### Description

Intent setting used by color management.

Default: PrintColorIntent.RELATIVECOLORIMETRIC

### Type

PrintColorIntent

### PrintColorManagementOptions.name

printColorManagementOptions.name

### Description

Profile name used for color management.

### Type

String

### PrintColorManagementOptions.typename

printColorManagementOptions.typename

### Description

Class name for this object.

### Type

String; read-only.

## PrintColorSeparationOptions — Properties

### PrintColorSeparationOptions.colorSeparationMode

printColorSeparationOptions.colorSeparationMode

### Description

Selected mode for color separations.

Default: PrintColorSeparationMode.COMPOSITE

### Type

PrintColorSeparationMode

### PrintColorSeparationOptions.convertSpotColors

printColorSeparationOptions.convertSpotColors

### Description

When true, spot colors become process-color equivalents.

Default: false

### Type

Boolean

### PrintColorSeparationOptions.inkList

printColorSeparationOptions.inkList

### Description

Inks included for color separation.

### Type

Array of Ink

### PrintColorSeparationOptions.overPrintBlack

printColorSeparationOptions.overPrintBlack

### Description

When true, black is overprinted.

Default: false

### Type

Boolean

### PrintColorSeparationOptions.typename

printColorSeparationOptions.typename

### Description

Read-only class name for this object.

### Type

String

## PrintCoordinateOptions — Properties

### PrintCoordinateOptions.emulsion

printCoordinateOptions.emulsion

### Description

When true, artwork is mirrored horizontally.

Default: false

### Type

Boolean

### PrintCoordinateOptions.fitToPage

printCoordinateOptions.fitToPage

### Description

When true, artwork scales proportionally to fit the media.

Default: false

### Type

Boolean

### PrintCoordinateOptions.horizontalScale

printCoordinateOptions.horizontalScale

### Description

Horizontal scaling percentage, with 100 representing 100%.

Range: 1.0 to 10000.0.

Default: 100.0

### Type

Number (double)

### PrintCoordinateOptions.orientation

printCoordinateOptions.orientation

### Description

Orientation used for the artwork.

Default: PrintOrientation.PORTRAIT

### Type

PrintOrientation

### PrintCoordinateOptions.position

printCoordinateOptions.position

### Description

Placement of artwork on the media.

Default: PrintPosition.TRANSLATECENTER

### Type

PrintPosition

### PrintCoordinateOptions.tiling

printCoordinateOptions.tiling

### Description

Tiling mode applied to pages.

Default: PrintTiling.TILESINGLEFULLPAGE

### Type

PrintTiling

### PrintCoordinateOptions.typename

printCoordinateOptions.typename

### Description

Class name for this object.

### Type

String; read-only.

### PrintCoordinateOptions.verticalScale

printCoordinateOptions.verticalScale

### Description

Vertical scaling percentage, with 100 representing 100%.

Range: 1.0 to 10000.0.

Default: 100.0

### Type

Number (double)

## Printer — Properties

### Printer.name

app.printerList[index].name

### Description

Name assigned to the printer.

### Type

String

### Printer.printerInfo

app.printerList[index].printerInfo

### Description

Information object for the printer.

### Type

PrinterInfo

### Printer.typename

app.printerList[index].typename

### Description

Class name for this object.

### Type

String; read-only.
