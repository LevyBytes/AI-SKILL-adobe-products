# Properties (part 1)

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Application — Properties

### Application.activeDocument

app.activeDocument

### Description

Illustrator document that is currently active and frontmost.

### Type

Document

### Application.browserAvailable

app.browserAvailable

### Description

When true, the system has an available web browser.

### Type

Boolean; read-only.

### Application.buildNumber

app.buildNumber

### Description

Build number reported by the application.

### Type

String; read-only.

### Application.colorSettingsList

app.colorSettingsList

### Description

Color-settings files that are available for current use.

### Type

Object; read-only.

### Application.coordinateSystem

app.coordinateSystem

### Description

Current coordinate system, either document or artboard.

### Type

CoordinateSystem

### Application.defaultColorSettings

app.defaultColorSettings

### Description

Default color-settings file associated with the active application locale.

### Type

File object; read-only.

### Application.documents

app.documents

### Description

Collection of documents held by the application.

### Type

Documents

### Application.flattenerPresetList

app.flattenerPresetList

### Description

Available flattener style names that can currently be used.

### Type

Object; read-only.

### Application.freeMemory

app.freeMemory

### Description

Free bytes inside Illustrator's allocated memory area.

### Type

Number (long); read-only.

### Application.locale

app.locale

### Description

Locale used by the application.

### Type

String; read-only.

### Application.name

app.name

### Description

Application display name, separate from its executable file name.

### Type

String; read-only.

### Application.pasteRememberLayers

app.pasteRememberLayers

### Description

When true, paste preserves the layer structure.

### Type

Boolean; read-only.

### Application.path

app.path

### Description

Location of the application file on disk.

### Type

File object; read-only.

### Application.PDFPresetsList

app.PDFPresetsList

### Description

Preset PDF-options names that are available for use.

### Type

Object; read-only.

### Application.PPDFileList

app.PPDFileList

### Description

PPD files that can be used now.

### Type

Object; read-only.

### Application.preferences

app.preferences

### Description

Preference settings for Illustrator.

### Type

Preferences

### Application.printerList

app.printerList

### Description

Installed printers list.

### Type

Array of Printer

### Application.printPresetsList

app.printPresetsList

### Description

Names of usable printing-option presets.

### Type

Object; read-only.

### Application.scriptingVersion

app.scriptingVersion

### Description

Scripting plug-in version string.

### Type

String; read-only.

### Application.selection

app.selection

### Description

Objects selected right now in the frontmost active document.

### Type

Array of Objects; read-only.

### Application.startupPresetsList

app.startupPresetsList

### Description

Presets that can be used to create a new document.

### Type

Object; read-only.

### Application.textFonts

app.textFonts

### Description

Fonts installed for use.

### Type

TextFonts

### Application.tracingPresetList

app.tracingPresetList

### Description

Names of usable tracing-option presets.

### Type

Array of Strings; read-only.

### Application.typename

app.typename

### Description

Class name for the referenced object.

### Type

String; read-only.

### Application.userInteractionLevel

app.userInteractionLevel

### Description

Interaction level scripts may permit while they handle commands.

### Type

UserInteractionLevel

### Application.version

app.version

### Description

Version reported by the application.

### Type

String; read-only.

### Application.visible

app.visible

### Description

When true, the application is visible.

### Type

Boolean; read-only.

## Artboard — Properties

### Artboard.artboardRect

artboard.artboardRect

### Description

Artboard size and position.

### Type

Rect

### Artboard.name

artboard.name

### Description

Unique name identifying the artboard.

### Type

String

### Artboard.parent

artboard.parent

### Description

Object that owns this object.

### Type

Document; read-only.

### Artboard.rulerOrigin

artboard.rulerOrigin

### Description

Artboard ruler origin measured relative to the artboard's upper-left corner.

### Type

Point

### Artboard.rulerPAR

artboard.rulerPAR

### Description

Pixel aspect ratio used for ruler display when pixel units are active.

Range: 0.1 to 10.

### Type

Number (double)

### Artboard.showCenter

artboard.showCenter

### Description

Displays the center mark.

### Type

Boolean

### Artboard.showCrossHairs

artboard.showCrossHairs

### Description

Displays cross hairs.

### Type

Boolean

### Artboard.showSafeAreas

artboard.showSafeAreas

### Description

Displays title-safe and action-safe video areas.

### Type

Boolean

### Artboard.typename

artboard.typename

### Description

Read-only. Class name for this object.

### Type

String

## Artboards — Properties

### Artboards.length

artboards.length

### Description

Dataset count for the collection.

### Type

Number; read-only.

### Artboards.parent

artboards.parent

### Description

Dataset container object's name.

### Type

Artboard; read-only.

### Artboards.typename

artboards.typename

### Description

Class name for the referenced object.

### Type

String; read-only.

## Brush — Properties

### Brush.name

app.activeDocument.brushes[index].name

### Description

The brush's name.

### Type

String

### Brush.parent

app.activeDocument.brushes[index].parent

### Description

Owner document.

### Type

Document; read-only.

### Brush.typename

app.activeDocument.brushes[index].typename

### Description

Class name reported for the referenced object.

### Type

String; read-only.

## Brushes — Properties

### Brushes.length

app.activeDocument.brushes.length

### Description

Object count.

### Type

Number; read-only.

### Brushes.parent

app.activeDocument.brushes.parent

### Description

Owner document.

### Type

Object; read-only.

### Brushes.typename

app.activeDocument.brushes.typename

### Description

Class name reported for the referenced object.

### Type

String; read-only.

## CharacterAttributes — Properties

### CharacterAttributes.akiLeft

characterAttributes.akiLeft

### Description

Additional spacing placed on the character's left side, expressed in thousandths of an em; full justification neither compresses nor expands this value.

### Type

Number (double)

### CharacterAttributes.akiRight

characterAttributes.akiRight

### Description

Additional spacing placed on the character's right side, expressed in thousandths of an em; full justification neither compresses nor expands this value.

### Type

Number (double)

### CharacterAttributes.alignment

characterAttributes.alignment

### Description

Character alignment setting.

### Type

StyleRunAlignmentType

### CharacterAttributes.alternateGlyphs

characterAttributes.alternateGlyphs

### Description

Alternate glyph form setting.

### Type

AlternateGlyphsForm

### CharacterAttributes.autoLeading

characterAttributes.autoLeading

### Description

When true, automatic leading is enabled.

### Type

Boolean

### CharacterAttributes.baselineDirection

characterAttributes.baselineDirection

### Description

Japanese text baseline direction setting.

### Type

BaselineDirectionType

### CharacterAttributes.baselinePosition

characterAttributes.baselinePosition

### Description

Text baseline placement.

### Type

FontBaselineOption

### CharacterAttributes.baselineShift

characterAttributes.baselineShift

### Description

Baseline offset for the text, measured in points.

### Type

Number (double)

### CharacterAttributes.capitalization

characterAttributes.capitalization

### Description

Text capitalization option.

### Type

FontCapsOption

### CharacterAttributes.connectionForms

characterAttributes.connectionForms

### Description

When true, OpenType® connection forms are enabled.

### Type

Boolean

### CharacterAttributes.contextualLigature

characterAttributes.contextualLigature

### Description

When true, contextual ligatures are enabled.

### Type

Boolean

### CharacterAttributes.discretionaryLigature

characterAttributes.discretionaryLigature

### Description

When true, discretionary ligatures are enabled.

### Type

Boolean

### CharacterAttributes.figureStyle

characterAttributes.figureStyle

### Description

Number styling option for an OpenType font.

### Type

FigureStyleType

### CharacterAttributes.fillColor

characterAttributes.fillColor

### Description

Color applied to the text fill.

### Type

Color

### CharacterAttributes.fractions

characterAttributes.fractions

### Description

When true, OpenType fractions are enabled.

### Type

Boolean

### CharacterAttributes.horizontalScale

characterAttributes.horizontalScale

### Description

Horizontal scale percentage for characters (100 = 100%).

### Type

Number (double)

### CharacterAttributes.italics

characterAttributes.italics

### Description

When true, the Japanese OpenType font includes italic support.

### Type

Boolean

### CharacterAttributes.kerningMethod

characterAttributes.kerningMethod

### Description

Automatic kerning method selected for use.

### Type

AutoKernType

### CharacterAttributes.language

characterAttributes.language

### Description

Text language setting.

### Type

LanguageType

### CharacterAttributes.leading

characterAttributes.leading

### Description

Space between two text lines, measured in points.

### Type

Number (double)

### CharacterAttributes.ligature

characterAttributes.ligature

### Description

When true, ligature use is enabled.

### Type

Boolean

### CharacterAttributes.noBreak

characterAttributes.noBreak

### Description

When true, line breaks are disallowed.

### Type

Boolean

### CharacterAttributes.openTypePosition

characterAttributes.openTypePosition

### Description

OpenType baseline position setting.

### Type

FontOpenTypePositionOption

### CharacterAttributes.ordinals

characterAttributes.ordinals

### Description

When true, OpenType ordinals are enabled.

### Type

Boolean

### CharacterAttributes.ornaments

characterAttributes.ornaments

### Description

When true, OpenType ornaments are enabled.

### Type

Boolean

### CharacterAttributes.overprintFill

characterAttributes.overprintFill

### Description

When true, the text fill is overprinted.

### Type

Boolean

### CharacterAttributes.overprintStroke

characterAttributes.overprintStroke

### Description

When true, the text stroke is overprinted.

### Type

Boolean

### CharacterAttributes.parent

characterAttributes.parent

### Description

Container that owns the object.

### Type

Object; read-only.

### CharacterAttributes.proportionalMetrics

characterAttributes.proportionalMetrics

### Description

When true, proportional glyph support is available in the Japanese OpenType font.

### Type

Boolean

### CharacterAttributes.rotation

characterAttributes.rotation

### Description

Character rotation, in degrees.

### Type

Number (double)

### CharacterAttributes.size

characterAttributes.size

### Description

Point size of the font.

### Type

Number (double)

### CharacterAttributes.strikeThrough

characterAttributes.strikeThrough

### Description

When true, strike-through styling is applied to characters.

### Type

Boolean

### CharacterAttributes.strokeColor

characterAttributes.strokeColor

### Description

Color assigned to the text stroke.

### Type

Color

### CharacterAttributes.strokeWeight

characterAttributes.strokeWeight

### Description

Stroke line width.

### Type

Number (double)

### CharacterAttributes.stylisticAlternates

characterAttributes.stylisticAlternates

### Description

When true, OpenType stylistic alternates are enabled.

### Type

Boolean

### CharacterAttributes.swash

characterAttributes.swash

### Description

When true, OpenType swash is enabled.

### Type

Boolean

### CharacterAttributes.tateChuYokoHorizontal

characterAttributes.tateChuYokoHorizontal

### Description

Horizontal Tate-Chu-Yoko adjustment, in points.

### Type

Number (long)

### CharacterAttributes.tateChuYokoVertical

characterAttributes.tateChuYokoVertical

### Description

Vertical Tate-Chu-Yoko adjustment, in points.

### Type

Number (long)

### CharacterAttributes.textFont

characterAttributes.textFont

### Description

Font used by the text.

### Type

TextFont

### CharacterAttributes.titling

characterAttributes.titling

### Description

When true, OpenType titling alternates are enabled.

### Type

Boolean

### CharacterAttributes.tracking

characterAttributes.tracking

### Description

Tracking or range-kerning value, measured in em/1000 units.

### Type

Number (long)

### CharacterAttributes.Tsume

characterAttributes.Tsume

### Description

Percentage by which spacing around a Japanese character is reduced.

### Type

Number (double)

### CharacterAttributes.typename

characterAttributes.typename

### Description

Class name reported for the object.

### Type

String; read-only.

### CharacterAttributes.underline

characterAttributes.underline

### Description

When true, underline styling is applied to characters.

### Type

Boolean

### CharacterAttributes.verticalScale

characterAttributes.verticalScale

### Description

Vertical scale percentage for characters (= 100%).

### Type

Number (double)

### CharacterAttributes.wariChuCharactersAfterBreak

characterAttributes.wariChuCharactersAfterBreak

### Description

Controls the split point for characters in Wari-Chu text, an inset note within Japanese text, across two or more lines.

### Type

Number (long)

### CharacterAttributes.wariChuCharactersBeforeBreak

characterAttributes.wariChuCharactersBeforeBreak

### Description

Controls where Wari-Chu text characters, used for inset notes in Japanese text, break across two or more lines.

### Type

Number (long)

### CharacterAttributes.waiChuEnabled

characterAttributes.waiChuEnabled

### Description

When true, Wari-Chu is enabled.

### Type

Boolean

### CharacterAttributes.wariChuJustification

characterAttributes.wariChuJustification

### Description

Justification setting for Wari-Chu.

### Type

WariChuJustificationType

### CharacterAttributes.wariChuLineGap

characterAttributes.wariChuLineGap

### Description

Line gap used by Wari-Chu.

### Type

Number (long)

### CharacterAttributes.wariChuLines

characterAttributes.wariChuLines

### Description

Count of Wari-Chu lines, where multiple text lines fit into space intended for one.

### Type

Number (long)

### CharacterAttributes.wariChuScale

characterAttributes.wariChuScale

### Description

Scale setting for Wari-Chu.

### Type

Number (double)

## Characters — Properties

### Characters.length

app.activeDocument.textFrames[index].contents.length

### Description

Collection character count.

### Type

Number; read-only.

### Characters.parent

app.activeDocument.textFrames[index].contents.parent

### Description

Containing text art item.

### Type

Object; read-only.

### Characters.typename

app.activeDocument.textFrames[index].contents.typename

### Description

Referenced object class name.

### Type

String; read-only.

## CharacterStyle — Properties

### CharacterStyle.characterAttributes

characterStyle.characterAttributes

### Description

Character property set exposed by the style.

### Type

CharacterAttributes; read-only.

### CharacterStyle.name

characterStyle.name

### Description

Name assigned to the character style.

### Type

String

### CharacterStyle.parent

characterStyle.parent

### Description

Container that owns the object.

### Type

Object; read-only.

### CharacterStyle.typename

characterStyle.typename

### Description

Class name reported for the object.

### Type

String; read-only.

## CharacterStyles — Properties

### CharacterStyles.length

app.activeDocument.characterStyles.length

### Description

Character entry count.

### Type

Number; read-only.

### CharacterStyles.parent

app.activeDocument.characterStyles.parent

### Description

Container object that owns this object.

### Type

Object; read-only.

### CharacterStyles.typename

app.activeDocument.characterStyles.typename

### Description

Object class name reported for this instance.

### Type

String; read-only.

## CMYKColor — Properties

### CMYKColor.black

cmykColor.black

### Description

Black component channel. Range 0.0-100.0.

Default: 0.0

### Type

Number (double)

### CMYKColor.cyan

cmykColor.cyan

### Description

Cyan component channel. Range 0.0-100.0.

Default: 0.0

### Type

Number (double)

### CMYKColor.magenta

cmykColor.magenta

### Description

Magenta component channel. Range 0.0-100.0.

Default: 0.0

### Type

Number (double)

### CMYKColor.typename

cmykColor.typename

### Description

Class name associated with the referenced object.

### Type

String; read-only.

### CMYKColor.yellow

cmykColor.yellow

### Description

Yellow component channel. Range 0.0-100.0.

Default: 0.0

### Type

Number (double)

## CompoundPathItem — Properties

### CompoundPathItem.artworkKnockout

app.activeDocument.activeLayer.compoundPathItems[index].artworkKnockout

### Description

Indicates whether this object creates a knockout and, when it does, which knockout type applies.

### Type

KnockoutState

### CompoundPathItem.blendingMode

app.activeDocument.activeLayer.compoundPathItems[index].blendingMode

### Description

Compositing mode applied to the object.

### Type

BlendModes

### CompoundPathItem.controlBounds

app.activeDocument.activeLayer.compoundPathItems[index].controlBounds

### Description

Control bounds include handles plus stroke width.

### Type

Array of 4 numbers; read-only.

### CompoundPathItem.editable

app.activeDocument.activeLayer.compoundPathItems[index].editable

### Description

True means this item can be edited.

### Type

Boolean; read-only.

### CompoundPathItem.geometricBounds

app.activeDocument.activeLayer.compoundPathItems[index].geometricBounds

### Description

Bounds omit stroke width.

### Type

Array of 4 numbers; read-only.

### CompoundPathItem.height

app.activeDocument.activeLayer.compoundPathItems[index].height

### Description

Height measurement omits stroke width.

### Type

Number (double).

### CompoundPathItem.hidden

app.activeDocument.activeLayer.compoundPathItems[index].hidden

### Description

True marks this compound path item as hidden.

### Type

Boolean.

### CompoundPathItem.isIsolated

app.activeDocument.activeLayer.compoundPathItems[index].isIsolated

### Description

True sets isolation on this object.

### Type

Boolean.

### CompoundPathItem.layer

app.activeDocument.activeLayer.compoundPathItems[index].layer

### Description

Containing layer for this item.

### Type

Layer; read-only.

### CompoundPathItem.left

app.activeDocument.activeLayer.compoundPathItems[index].left

### Description

Left-edge position for the item, in points, measured from the page's left edge.

### Type

Number (double).

### CompoundPathItem.locked

app.activeDocument.activeLayer.compoundPathItems[index].locked

### Description

True locks this compound path item.

### Type

Boolean.

### CompoundPathItem.name

app.activeDocument.activeLayer.compoundPathItems[index].name

### Description

Name string for the item.

### Type

String.

### CompoundPathItem.note

app.activeDocument.activeLayer.compoundPathItems[index].note

### Description

Note text stored on the item.

### Type

String.

### CompoundPathItem.opacity

app.activeDocument.activeLayer.compoundPathItems[index].opacity

### Description

Object opacity value.

Range: 0.0 to 100.0

### Type

Number (double).

### CompoundPathItem.parent

app.activeDocument.activeLayer.compoundPathItems[index].parent

### Description

Owning object reference.

### Type

Layer or GroupItem; read-only.

### CompoundPathItem.pathItems

app.activeDocument.activeLayer.compoundPathItems[index].pathItems

### Description

Component PathItems collection.

### Type

PathItems; read-only.

### CompoundPathItem.position

app.activeDocument.activeLayer.compoundPathItems[index].position

### Description

Coordinates [x, y] for the compoundPathItem object's top-left corner, in points; stroke weight is omitted.

### Type

Array of 2 numbers.

### CompoundPathItem.selected

app.activeDocument.activeLayer.compoundPathItems[index].selected

### Description

True marks this compound path item as selected.

### Type

Boolean.

### CompoundPathItem.sliced

app.activeDocument.activeLayer.compoundPathItems[index].sliced

### Description

True marks a sliced item.

Default: false

### Type

Boolean.

### CompoundPathItem.tags

app.activeDocument.activeLayer.compoundPathItems[index].tags

### Description

Object tag collection.

### Type

Tags; read-only.

### CompoundPathItem.top

app.activeDocument.activeLayer.compoundPathItems[index].top

### Description

Distance to the item's top edge, in points, using the page bottom as the measurement origin.

### Type

Number (double).

### CompoundPathItem.typename

app.activeDocument.activeLayer.compoundPathItems[index].typename

### Description

Referenced object's class-name string.

### Type

String; read-only.

### CompoundPathItem.uRL

app.activeDocument.activeLayer.compoundPathItems[index].uRL

### Description

Adobe URL tag stored for this item.

### Type

String.

### CompoundPathItem.visibilityVariable

app.activeDocument.activeLayer.compoundPathItems[index].visibilityVariable

### Description

Associated visibility variable.

### Type

Variant.

### CompoundPathItem.visibleBounds

app.activeDocument.activeLayer.compoundPathItems[index].visibleBounds

### Description

Visible bounds include the item's stroke width.

### Type

Array of 4 numbers; read-only.

### CompoundPathItem.width

app.activeDocument.activeLayer.compoundPathItems[index].width

### Description

Width measurement omits stroke width.

### Type

Number (double).

### CompoundPathItem.wrapInside

app.activeDocument.activeLayer.compoundPathItems[index].wrapInside

### Description

True enables internal text-frame wrapping.

### Type

Boolean.

### CompoundPathItem.wrapOffset

app.activeDocument.activeLayer.compoundPathItems[index].wrapOffset

### Description

Offset for wrap-around text.

### Type

Number (double).

### CompoundPathItem.wrapped

app.activeDocument.activeLayer.compoundPathItems[index].wrapped

### Description

True makes text frame objects wrap around this object; the text frame has to sit above it.

### Type

Boolean.

### CompoundPathItem.zOrderPosition

app.activeDocument.activeLayer.compoundPathItems[index].zOrderPosition

### Description

Index-like stacking placement for this art item inside its containing group or layer (Parent).

### Type

Number (long); read-only.

## CompoundPathItems — Properties

### CompoundPathItems.length

app.activeDocument.activeLayer.compoundPathItems.length

### Description

Collection object count.

### Type

Number; read-only.

### CompoundPathItems.parent

app.activeDocument.activeLayer.compoundPathItems.parent

### Description

Owning container for this collection; valid containers are Layer or GroupItem.

### Type

Object; read-only.

### CompoundPathItems.typename

app.activeDocument.activeLayer.compoundPathItems.typename

### Description

Referenced object's class-name string.

### Type

String; read-only.

## Dataset — Properties

### Dataset.name

app.activeDocument.dataSets[index].name

### Description

Dataset name value.

### Type

String.

### Dataset.parent

app.activeDocument.dataSets[index].parent

### Description

Name of this dataset's containing object.

### Type

Document; read-only.

### Dataset.typename

app.activeDocument.dataSets[index].typename

### Description

Referenced object's class-name string.

### Type

String.

## Datasets — Properties

### Datasets.length

app.activeDocument.dataSets.length

### Description

Reports how many datasets the collection holds.

### Type

Number; read-only.

### Datasets.parent

app.activeDocument.dataSets.parent

### Description

Identifies the object name that owns the dataset instance.

### Type

Document; read-only.

### Datasets.typename

app.activeDocument.dataSets.typename

### Description

Gives the referenced object's class name.

### Type

String; read-only.
