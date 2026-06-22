# Photoshop, Preferences

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Photoshop; Preferences; PreferencesCursors; PreferencesFileHandling; PreferencesGeneral — Properties; PreferencesGuidesGridsAndSlices; PreferencesHistory; PreferencesInterface; PreferencesNotifications; PreferencesPerformance; PreferencesTools — Properties; PreferencesTransparencyAndGamut; PreferencesType; PreferencesUnitsAndRulers.

## Photoshop

Photoshop application object at the DOM root level.

```javascript
const { app } = require("photoshop");
```

Use it to reach open documents, tools, UI elements, and to run commands or menu items.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| actionTree | [_ActionSet_](https://raw.githubusercontent.com/ps-reference/classes/actionset.md)[] | R | 23.0 | Array form of the Actions panel tree: ActionSets, each with its Actions. |
| activeDocument | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | R W | 23.0 | Document currently focused by the application. |
| backgroundColor | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | R W | 23.0 | Background color and color style used for documents. [(24.2)](https://raw.githubusercontent.com/ps-reference/changelog/index.md#other-fixes) |
| currentTool | [_Tool_](https://raw.githubusercontent.com/ps-reference/objects/tool.md) | R | 23.0 | Currently selected tool. At present, Tool exposes only an `id` field; future releases are intended to give tools dedicated classes. |
| displayDialogs | [_DialogModes_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#dialogmodes) | R W | 23.0 | Application dialog mode, controlling which dialog types may appear while code interacts with Photoshop. |
| documents | [_Documents_](https://raw.githubusercontent.com/ps-reference/classes/documents.md) | R | 23.0 | Documents that are open right now. |
| fonts | [_TextFonts_](https://raw.githubusercontent.com/ps-reference/classes/textfonts.md) | R | 23.0 | Fonts available on this system. |
| foregroundColor | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | R W | 23.0 | Foreground color used for painting, fills, and stroked selections. [(24.2)](https://raw.githubusercontent.com/ps-reference/changelog/index.md#other-fixes) |
| preferences | [_Preferences_](https://raw.githubusercontent.com/ps-reference/classes/preferences.md) | R | 24.0 | Photoshop preference groups organized into categories resembling the Preferences dialog. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Photoshop"_. |

### Methods

### batchPlay

23.0

_Promise_<ActionDescriptor[]>

batchPlay sits at the center of the API surface. It supersedes executeAction, receives
ActionDescriptors deserialized from JS objects, and can run several descriptors in sequence
without refreshing the UI. Access to this API may change or appear through other routes later.

### Parameters

| Name | Type |
| --- | --- |
| `commands` | _any_ |
| `options` | _any_ |

### bringToFront

23.0

_void_

Moves the application into focus, which helps when a script is ending or needs user input.

### convertUnits

23.4

_number_

Converts one numeric measurement from the source unit into a target unit. Valid unit constants are:
Constants.Units.\{CM, MM, INCHES, PIXELS, POINTS, PICAS}.
When either side of the conversion uses PIXELS, pass [Document.resolution](https://raw.githubusercontent.com/ps-reference/classes/document.md#resolution).
For example, call this routine to express a document width in inches when it is currently measured in pixels.

```javascript
// convert the current document's width to inches
const exportDoc = psApp.activeDocument;
let widthInInches = psApp.convertUnits(
  exportDoc.width,
  Constants.Units.PIXELS,
  Constant.Units.INCHES,
  exportDoc.resolution,
);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fromValue` | _number_ | Numeric value to convert. |
| `fromUnits` | [_Units_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#units) | Unit currently used by fromValue; choose from [Constants.Units](https://raw.githubusercontent.com/ps-reference/modules/constants.md#units). |
| `toUnits` | [_Units_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#units) | Unit assigned to the returned value; choose from [Constants.Units](https://raw.githubusercontent.com/ps-reference/modules/constants.md#units). |
| `resolution?` | _number_ | Pixels-per-inch value used for conversions involving pixel values. |

### createDocument

23.0

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/ps-reference/classes/document.md)>

Creates a new document.

With no options supplied, Photoshop creates a document of 7 x 5 inches at 300 pixels per inch.
That matches the "Default Photoshop Size" preset.

To choose any other preset installed with Photoshop or created by users, pass an object that includes a 'preset' string parameter.

You can also pass an object containing one or more parameters. Any omitted parameter falls back to: width 2100 pixels, height 1500 pixels,
resolution 300 pixels per inch, mode:
[RGB](uxp-constants.md), and a fill of white with
no transparency.

```javascript
// "Default Photoshop Size" 7x5 inches at 300ppi
let defaultDoc = await app.createDocument({
  preset: "Default Photoshop Size",
});

let transparentDoc = await app.createDocument({
  width: 800,
  height: 600,
  resolution: 300,
  mode: "RGBColorMode",
  fill: "transparent",
});

const redColor = new SolidColor();
redColor.rgb.green = 0;
redColor.rgb.blue = 0;
let fillColorDoc = await app.createDocument({
  mode: "RGBColorMode",
  fillColor: redColor,
});
```

Updates: [(26.9)](https://raw.githubusercontent.com/ps-reference/changelog/index.md#photoshop-269-july-2025)

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `options` | [_DocumentCreateOptions_](https://raw.githubusercontent.com/ps-reference/objects/createoptions/documentcreateoptions.md) | \{} | Object literal carrying the option values. |

### getColorProfiles

24.1

_string_[]

Provides the installed color-profile names available to RGB and Gray modes.

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `colorMode` | _string_ | 'RGB' | Chooses which color mode's profiles are listed. (default: "RGB", options: "Gray") |

### open

23.0

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/ps-reference/classes/document.md)>

Opens the requested document and returns its model.

> \*Pass a
> [UXPFileEntry](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md)
> as the argument for this API.

```javascript
// Open a file given entry
let entry = await require("uxp").storage.localFileSystem.getFileForOpening();
const document = await app.open(entry);

// Show open file dialog
const document = await app.open();
```

### Parameters

| Name | Type |
| --- | --- |
| `entry?` | File |

### showAlert

23.0

_Promise_`<void>`

Displays a Photoshop alert containing the supplied message.

### Parameters

| Name | Type |
| --- | --- |
| `message` | _string_ |

### updateUI

26.0

**async** : _Promise_`<void>`

Requests a refresh for these panels: Layers, Channels, and Paths.
This is mainly useful inside the handler function of a slider control.
Ordinarily, the panels wait to update until the handle has been released.
Note: outside a tracking context such as a slider handle, this function appears to do nothing.
To demonstrate why a refresh is needed inside a plain loop (encapsulated in `executeAsModal`),
insert a brief pause.

```javascript
// Inside slider handler function.
await app.activeDocument.createPixelLayer();
await app.updateUI();
```

## Preferences

Holds Photoshop preferences arranged into categories much like the user-interface preferences.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| cursors | [_PreferencesCursors_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencescursors.md) | R | 24.0 | Size and style options for tool cursors. |
| fileHandling | [_PreferencesFileHandling_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesfilehandling.md) | R | 24.0 | File-handling settings, mostly covering save behavior, compatibility choices, and recent-file behavior. |
| general | [_PreferencesGeneral_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesgeneral.md) | R | 24.0 | General preference settings. |
| guidesGridsAndSlices | [_PreferencesGuidesGridsAndSlices_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesguidesgridsandslices.md) | R | 24.0 | On-canvas presentation controls covering guides, grid, slices, paths, and related aids. |
| history | [_PreferencesHistory_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferenceshistory.md) | R | 24.0 | Settings for history logging. |
| interface | [_PreferencesInterface_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesinterface.md) | R | 24.0 | User-interface preference settings. |
| notifications | [_PreferencesNotifications_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesnotifications.md) | R | 26.11 | Notification preference settings. Note: Quiet Mode locks certain notification preferences; writes to those locked settings throw errors while Quiet Mode remains active. |
| performance | [_PreferencesPerformance_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesperformance.md) | R | 24.0 | Settings that can influence Photoshop performance speed, including GPU usage. |
| tools | [_PreferencesTools_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencestools.md) | R | 24.0 | Tool preference settings. |
| transparencyAndGamut | [_PreferencesTransparencyAndGamut_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencestransparencyandgamut.md) | R | 24.0 | Controls for transparency display and the color used for out-of-gamut warnings. |
| type | [_PreferencesType_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencestype.md) | R | 24.0 | Type-related preference settings. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"Preferences"_. |
| unitsAndRulers | [_PreferencesUnitsAndRulers_](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesunitsandrulers.md) | R | 24.0 | Settings for ruler units, type units, and resolution. |

## PreferencesCursors

Controls cursor size and style options for tools.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| otherCursors | [_OtherCursors_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#othercursors) | R W | 24.0 | Pointer type to apply. |
| paintingCursors | [_PaintingCursors_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#paintingcursors) | R W | 24.0 | Cursor style used by painting tools. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesCursors"_. |

## PreferencesFileHandling

Preferences for file handling, including save behavior, compatibility choices, and recent-file handling.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| askBeforeSavingLayeredTIFF | _boolean_ | R W | 24.0 | When true, prompts the user to confirm layer-preservation options while saving TIFF files. |
| imagePreviews | [_SavePreview_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#savepreview) | R W | 24.0 | Mode used for preview behavior during file saves. |
| maximizeCompatibility | [_MaximizeCompatibility_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#maximizecompatibility) | R W | 24.0 | Behavior for deciding whether compatibility should be maximized when Adobe Photoshop (PSD) files are opened. |
| recentFileListMaximum | _number_ | R W | 24.0 | Maximum recent-file list length [0,100]. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesFileHandling"_. |
| useLowerCaseExtension | _boolean_ | R W | 24.0 | When true, file extensions are written in lowercase. |

## PreferencesGeneral — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| autoUpdateOpenDocuments | _boolean_ | R W | 24.0 | Controls automatic re-reading of open file-based documents after external updates; Cloud documents are outside this setting.' |
| beepWhenDone | _boolean_ | R W | 24.0 | When true, plays an alert after a command finishes. |
| colorPicker | [_ColorPickerOption_](https://raw.githubusercontent.com/ps-reference/objects/options/colorpickeroption.md) | R W | 24.0 | Selects which picker Photoshop uses for colors; choices are Photoshop, OS Native, and Plugin. |
| exportClipboard | _boolean_ | R W | 24.0 | When true, keeps Adobe Photoshop contents on the clipboard after the application exits. |
| imageInterpolation | [_InterpolationMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#interpolationmethod) | R W | 24.0 | Interpolation method used while scaling or resizing images. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesGeneral"_. |

## PreferencesGuidesGridsAndSlices

Controls display behavior for guides, grids, and slices.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| gridStyle | [_GridLineStyle_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#gridlinestyle) | R W | 24.0 | Formatting style applied to non-printing grid lines. |
| gridSubDivisions | _number_ | R W | 24.0 | Whole-number subdivision count for the grid [1,100]. |
| guideStyle | [_GuideLineStyle_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#guidelinestyle) | R W | 24.0 | Formatting style applied to non-printing guide lines. |
| showSliceNumber | _boolean_ | R W | 24.0 | When true, slice numbers appear in the document window while using the Slice tool. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesGuidesGridsAndSlices"_. |

## PreferencesHistory

History-logging related preferences.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| createFirstSnapshot | _boolean_ | R W | 24.0 | When true, Photoshop creates the initial snapshot automatically for each new document. |
| editLogItems | [_EditLogItemsType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#editlogitemstype) | R W | 24.0 | Selects which edit log entries to capture; applying a value also flips `history.useHistoryLog = true`. |
| nonLinearHistory | _boolean_ | R W | 24.0 | When true, history can branch non-linearly. |
| numberOfHistoryStates | _number_ | R W | 24.0 | Whole-number count of history states to keep [1,1000]. |
| saveLogItems | [_SaveLogItemsType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#savelogitemstype) | R W | 24.0 | Controls whether history items are saved to metadata, to a file, or to both; setting it also flips `history.useHistoryLog = true`. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesHistory"_. |
| useHistoryLog | _boolean_ | R W | 24.0 | Switches history logging on or off. |

## PreferencesInterface

Settings for the user interface.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| colorChannelsInColor | _boolean_ | R W | 24.0 | When true, the Channels palette presents component channels using their matching colors. |
| dynamicColorSliders | _boolean_ | R W | 24.0 | When true, the Color palette shows dynamic color sliders. |
| textFontSize | [_FontSize_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#fontsize) | R W | 24.0 | Font size used for compact panel/dialog text. _Requires Photoshop restart for changed value to take an effect._ |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesInterface"_. |

## PreferencesNotifications

Notification-related preferences for Quiet Mode and how notifications appear.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| quietMode | _boolean_ | R W | 26.11 | Turns Quiet Mode on or off; that mode reduces in-app messages and notifications. While it is on, some notification preferences are read-only and stay unavailable for editing until Quiet Mode is turned off. |
| showFeatureOnboarding | _boolean_ | R W | 26.11 | When true, feature-introduction notifications appear. Note: Quiet Mode locks this preference while enabled. |
| showToolTips | _boolean_ | R W | 26.11 | When true, mouseover can show pop-up definitions or descriptions. |
| showWhatsNew | _boolean_ | R W | 26.11 | When true, update notices for "What's New" appear. Note: Quiet Mode locks this preference while enabled. |
| typename | _string_ | R | 26.11 | Referenced object class name: _"PreferencesNotifications"_. |
| useRichToolTips | _boolean_ | R W | 26.11 | When true, richer tooltip displays appear. Note: Quiet Mode locks this preference while enabled. |

## PreferencesPerformance

Performance-related settings, including choices that may influence Photoshop speed.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| imageCacheLevels | _number_ | R W | 24.0 | Count of image-data cache levels. Photoshop uses this to improve screen redraw and histogram responsiveness. Use more Cache Levels for larger files with few layers; use fewer Cache Levels for heavily layered small files [1,8]. _Requires Photoshop restart for changed value to take an effect._ |
| maxRAMuse | _number_ | R W | 24.0 | Maximum share of available RAM that Photoshop may use, expressed as a whole-number percentage [2,99]. _Requires Photoshop restart for changed value to take an effect._ |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesPerformance"_. |

## PreferencesTools — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| keyboardZoomResizesWindows | _boolean_ | R W | 24.0 | When true, zooming with keyboard shortcuts automatically resizes the window. |
| showToolTips | _boolean_ | R W | 24.0 | When true, mouseover can show pop-up definitions or descriptions. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesTools"_. |
| useShiftKeyForToolSwitch | _boolean_ | R W | 24.0 | Controls whether the shift key serves as a modifier in keyboard shortcuts for cycling through grouped tools. |

## PreferencesTransparencyAndGamut

Settings for transparency display and the warning color used for out-of-gamut colors.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| gamutWarningOpacity | _number_ | R W | 24.0 | Warning-color opacity for out-of-gamut colors, stored as a float percentage [1,100]. |
| gridSize | [_GridSize_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#gridsize) | R W | 24.0 | Size of grid squares used when building the transparency pattern. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesTransparencyAndGamut"_. |

## PreferencesType

Preferences for text, mainly text-layer behavior.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| showEnglishFontNames | _boolean_ | R W | 24.0 | When true, Photoshop shows English-language font names. |
| showTextFeatures | [_TypeInterfaceFeatures_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#typeinterfacefeatures) | R W | 24.0 | Adjusts the Character and Paragraph panel interfaces and reveals extra text options. |
| smartQuotes | _boolean_ | R W | 24.0 | Controls automatic replacement with left and right quotation marks while typing in the Type Tool. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesType"_. |

## PreferencesUnitsAndRulers

Settings for ruler units, type units, and resolution.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| pointSize | [_PointType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#pointtype) | R W | 24.0 | Point/pica size setting. |
| rulerUnits | [_RulerUnits_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#rulerunits) | R W | 24.0 | Unit used by displayed Rulers and treated as the primary Photoshop unit. |
| typeUnits | [_TypeUnits_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#typeunits) | R W | 24.0 | Unit that numeric type-size inputs are interpreted as representing. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesUnitsAndRulers"_. |
