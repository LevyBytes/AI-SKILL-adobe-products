# Options, Otherobjects, Returnobjects, Saveoptions ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ApplyImageOptions; ApplyImageSource; BatchPlayCommandOptions; CalculationsOptions; CalculationsSource; ColorPickerOption; DisplayConfigurationOptions; ExecutionContext; HistoryStateInfo; HyphenationProperties; JustificationProperties; LayerCompRecaptureOptions; Position; ResumeHistorySuspensionOptions; Other Objects; CPUInfo; Dimensions; DisplayConfiguration.

## ApplyImageOptions

Apply Image receives an object literal with the following properties through [Layer.applyImage](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyimage).
For Typescript development, `ApplyImageOptions` is available as a type.

```javascript
const options = {
  source: {
    document: require("photoshop").app.documents[0],
    layer: require("photoshop").app.documents[0].layers[1],
    channel: require("photoshop").app.documents[0].channels[2],
  },
  blending: require("photoshop").constants.ApplyImageBlendMode.SCREEN,
};
await require("photoshop").app.activeDocument.layers[0].applyImage(options);
```

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| blending | [_ApplyImageBlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#applyimageblendmode) | MULTIPLY | - | 24.5 | Blend mode for compositing the source onto the current layer. |
| mask | [_ApplyImageSource_](https://raw.githubusercontent.com/ps-reference/objects/options/applyimagesource.md) | - | - | 24.5 | Mask reference for Apply Image. |
| opacity | _number_ | 100 | 0..100 | 24.5 | Opacity applied during source compositing. |
| preserveTransparency | _boolean_ | false | - | 24.5 | Whether original transparency on the active layer is preserved. |
| source | [_ApplyImageSource_](https://raw.githubusercontent.com/ps-reference/objects/options/applyimagesource.md) | - | - | 24.5 | Input reference for Apply Image. |

## ApplyImageSource

Source references used by Apply Image operations.

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| channel | [_ApplyImageChannelType_](https://raw.githubusercontent.com/ps-reference/modules/types/applyimagetypes.md#applyimagechanneltype) | - | 24.5 | Channel used as the source. |
| document | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | - | 24.5 | Document used as the source. |
| invert | _boolean_ | false | 24.5 | Whether the source is inverted. |
| layer | [_ApplyImageLayerType_](https://raw.githubusercontent.com/ps-reference/modules/types/applyimagetypes.md#applyimagelayertype) | - | 24.5 | Layer used as the source. |

## BatchPlayCommandOptions

| Name | Type | Min Version |
| --- | --- | --- |
| commandEnablement | _string_ \| _string_ \| _string_ | 23.0 |
| dialogOptions | _string_ \| _string_ \| _string_ | 23.0 |
| modalBehavior | _string_ \| _string_ \| _string_ | 23.0 |
| propagateErrorToDefaultHandler | _boolean_ | 23.0 |
| suppressPlayLevelIncrease | _boolean_ | 23.0 |
| synchronousExecution | _boolean_ | 23.0 |
| useMultiGet | _boolean_ | 23.0 |

## CalculationsOptions

Run [Document.calculations](https://raw.githubusercontent.com/ps-reference/classes/document.md#calculations) with an object literal containing the following properties.
For Typescript development, `CalculationsOptions` is available as a type.

```javascript
const options = {
    source1: {
        document: doc,
        layer: doc.layers[0],
        channel: CalculationsChannel.GRAY
        invert: true
    },
    source2: {
        document: doc,
        layer: CalculationsLayer.MERGED,
        channel: doc.channels[2]
    },
    blending: CalculationsBlendMode.DARKEN,
    opacity: 50,
    result: CalculationsResult.NEWCHANNEL
};
await require('photoshop').app.activeDocument.calculations(options);

```

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| blending | [_CalculationsBlendMode_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#calculationsblendmode) | MULTIPLY | - | 24.5 | Combines "Source 1" and "Source 2" with this blend mode; "Source 1" is drawn on top. |
| mask | [_CalculationsSource_](https://raw.githubusercontent.com/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | Calculations mask reference. |
| opacity | _number_ | 100 | 0..100 | 24.5 | Merge opacity for "Source 1". |
| result | [_CalculationsResult_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#calculationsresult) | - | - | 24.5 | Output destination for Calculations. |
| source1 | [_CalculationsSource_](https://raw.githubusercontent.com/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | Input reference for "Source 1"; that source is placed on top. |
| source2 | [_CalculationsSource_](https://raw.githubusercontent.com/ps-reference/objects/options/calculationssource.md) | - | - | 24.5 | Input reference for "Source 2". |

## CalculationsSource

Sources (`source1`, `source2`, `mask`) used by [CalculationsOptions](https://raw.githubusercontent.com/ps-reference/objects/options/calculationsoptions.md).

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| channel | [_CalculationsChannelType_](https://raw.githubusercontent.com/ps-reference/modules/types/calculationstypes.md#calculationschanneltype) | - | 24.5 | Channel source, supplied as a Channel instance or a Constants.CalculationsChannel value. |
| document | [_Document_](https://raw.githubusercontent.com/ps-reference/classes/document.md) | - | 24.5 | Source document. |
| invert | _boolean_ | false | 24.5 | Whether the source is inverted. |
| layer | CalculationsLayerType | - | 24.5 | Layer input, or the Constants.CalculationsLayer.MERGED pseudo-layer representing all layers merged together. |

## ColorPickerOption

Preferences use this option object when a color picker is specified.

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| pluginID | _string_ | 24.0 |  |
| type | [_ColorPicker_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#colorpicker) | 24.0 | Color picker selection. |

## DisplayConfigurationOptions

| Name | Type | Min Version |
| --- | --- | --- |
| physicalResolution | _boolean_ | 23.0 |

## ExecutionContext

Callbacks passed to `core.executeAsModal` receive this object for modality-related APIs.

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| hostControl | _object_ | 23.0 | Photoshop state controls live under this object. |
| hostControl.resumeHistory | (`params`: [_ResumeHistorySuspensionOptions_](https://raw.githubusercontent.com/ps-reference/objects/options/resumehistorysuspensionoptions.md), `commit?`: _boolean_) => _Promise_`<void>` | 23.0 | Resumes history on a target document. commit (optional): when false, Photoshop discards the current modified document state and restores the document to its `suspendHistory`-time state. |
| hostControl.suspendHistory | (`params`: [_HistoryStateInfo_](https://raw.githubusercontent.com/ps-reference/objects/options/historystateinfo.md)) => _Promise_<[*HistorySuspension*](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/historysuspension.md)> | 23.0 | Suspends history on a target document and returns the suspension ID that resumeHistory can use. |
| isCancelled | _boolean_ | 23.0 | True after the user cancels the modal interaction. |
| onCancel | _void_ | 23.0 | When assigned a method, it is called when the user cancels the modal interaction. |
| reportProgress | _void_ | 23.0 | Call it to customize the progress bar. |

## HistoryStateInfo

Options for the history state created by [Document.suspendHistory](https://raw.githubusercontent.com/ps-reference/classes/document.md#suspendhistory).

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| documentID | _number_ | 23.0 | ID of the target document whose history is suspended with suspendHistory. |
| name | _string_ | 23.0 | History state name displayed in the History panel. |

## HyphenationProperties

Paragraph-text hyphenation is configured with these property values.

You can inspect these hyphenation features from the Paragraph panel flyout dialog labeled "Hyphenation...".
Provide them as an object literal with the properties below; values are in pixels:

```javascript
{
     // The minimum number of letters a word must have in order for hyphenation
     // in word wrap to be allowed. In the range [2, 25], default 5.
     wordsLongerThan: number,
     // The minimum number of letters after which hyphenation
     // in word wrap is allowed. In the range [1, 15], default 2.
     afterFirst: number,
     // The minimum number of letters before which hyphenation
     // in word wrap is allowed. In the range [1, 15], default 2.
     beforeLast: number,
     // The maximum number of consecutive lines that can end with a hyphenated word.
     // In the range [2, 25], default 2.
     limit: number,
     // The distance in pixels at the end of a line that will cause a word
     // to break in unjustified type. In the range of [0, 8640] pixels for a 72PPI document.
     // If the document resolution is different, the max. value is scaled accordingly.
     // Default: 36px (72PPI)
     zone: number,
    // True to allow hyphenation in word wrap of capitalized words. Default true.
     capitalWords: boolean
}
```

The hyphenationFeatures getter returns an object containing every feature:

```javascript
const textItem = app.activeDocument.activeLayers[0].textItem;
textItem.paragraphStyle.hyphenationFeatures;
// {
//       wordsLongerThan: 5,
//       afterFirst: 2,
//       beforeLast: 2,
//       limit: 2,
//       zone: 36,
//       capitalWords: true
// }
```

Setter input may include any subset of these properties; omitted properties receive their default values.

```javascript
textItem.paragraphStyle.hyphenationFeatures = { wordsLongerThan: 10, afterFirst: 3 };
// {
//       wordsLongerThan: 10,
//       afterFirst: 3,
//       beforeLast: 2,
//       limit: 2,
//       zone: 36,
//       capitalWords: true
// }
```

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| afterFirst | _number_ | 2 | 1..15 | 24.1 | Minimum number of letters after which word-wrap hyphenation may occur. |
| beforeLast | _number_ | 2 | 1..15 | 24.1 | Minimum number of letters before which word-wrap hyphenation may occur. |
| capitalWords | _boolean_ | true | - | 24.1 | True when word-wrap hyphenation is allowed for capitalized words. |
| limit | _number_ | 2 | 2..25 | 24.1 | Maximum count of consecutive lines that may end with a hyphenated word. |
| wordsLongerThan | _number_ | 5 | 2..25 | 24.1 | Minimum word length required before word-wrap hyphenation is allowed. |
| zone | _number_ | 36 | 0..8640 for a 72PPI document | 24.1 | Pixel distance at a line end that triggers a break in unjustified type. |

## JustificationProperties

Paragraph text justification is controlled through these property values.

Photoshop exposes the same controls in the Paragraph panel flyout item labeled "Justification...".
Represent the settings as an object literal; each value is a percentage:

```javascript
{
     // Minimum, Desired and Maximum percentage of normal word spacing
     wordSpacingMinimum:   number,
     wordSpacingDesired:   number,
     wordSpacingMaximum:   number,
     // Minimum, Desired and Maximum percentage of normal letter spacing
     letterSpacingMinimum: number,
     letterSpacingDesired: number,
     letterSpacingMaximum: number,
     // Minimum, Desired and Maximum percentage of normal glyph scaling
     glyphScalingMinimum:  number,
     glyphScalingDesired:  number,
     glyphScalingMaximum:  number
     // Percentage of type size to use for auto leading
     autoLeadingAmount:    number
}
```

Before assignment, `justificationFeatures` reports `null`.
When setting it, you may provide selected properties only; omitted entries are either populated from defaults or kept as they were.

| Name | Type | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| autoLeadingAmount | _number_ | 120 | 0..500 | 24.1 | Auto leading percentage |
| glyphScalingDesired | _number_ | 100 | 50..200 | 24.1 | Desired glyph scaling - value must equal or fall between Minimum and Maximum. |
| glyphScalingMaximum | _number_ | 100 | 50..200 | 24.1 | Maximum glyph scaling - value cannot be lower than Minimum. |
| glyphScalingMinimum | _number_ | 100 | 50..200 | 24.1 | Minimum glyph scaling - value cannot exceed Maximum. |
| letterSpacingDesired | _number_ | 0 | 0..500 | 24.1 | Desired letter spacing - value must equal or fall between Minimum and Maximum. |
| letterSpacingMaximum | _number_ | 0 | 0..500 | 24.1 | Maximum letter spacing - value cannot be lower than Minimum. |
| letterSpacingMinimum | _number_ | 0 | 0..500 | 24.1 | Minimum letter spacing - value cannot exceed Maximum. |
| wordSpacingDesired | _number_ | 100 | 0..1000 | 24.1 | Desired word spacing - value must equal or fall between Minimum and Maximum. |
| wordSpacingMaximum | _number_ | 133 | 0..1000 | 24.1 | Maximum word spacing - value cannot be lower than Minimum. |
| wordSpacingMinimum | _number_ | 80 | 0..1000 | 24.1 | Minimum word spacing - value cannot exceed Maximum. |

## LayerCompRecaptureOptions

Build an object literal from any supported property and pass it to [LayerComp.recapture](https://raw.githubusercontent.com/ps-reference/classes/layercomp.md#recapture).
For Typescript work, `LayerCompRecaptureOptions` is available as the type.

```javascript
const options = { visibility: true, position: true };
await require("photoshop").app.activeDocument.layerComps.add(options);
```

| Name | Type | Default | Min Version | Description |
| --- | --- | --- | --- | --- |
| appearance | _boolean_ | false | 24.0 | Refresh the saved layer effects state. |
| childComp | _boolean_ | false | 24.0 | Refresh saved states for Layer Comps inside Smart Objects recorded in the layers. |
| position | _boolean_ | false | 24.0 | Refresh the saved layer position state. |
| visibility | _boolean_ | false | 24.0 | Refresh the saved layer visibility state. |

## Position

A small 2D `(X,Y)` coordinate value is usually interpreted against document bounds. With the origin at the upper-left corner, positive Y moves downward.

Used by [TextLayerCreateOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/options/textlayercreateoptions/index.md)

| Name | Type | Min Version |
| --- | --- | --- |
| x | _number_ | NA |
| y | _number_ | NA |

## ResumeHistorySuspensionOptions

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| finalName | _string_ | 23.0 | Name assigned to the resulting history state after a successful resume and commit. |
| historySuspensionID | _number_ | 23.0 | Photoshop-generated identifier for the history suspension. |

## Other Objects

Argument and return object references for:

- [LayerComp.recapture](https://raw.githubusercontent.com/ps-reference/classes/layercomp.md#recapture)
- [ParagraphStyle.hyphenationFeatures](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#properties)
- [ParagraphStyle.justificationFeatures](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#properties)
- [Preferences.PreferencesGeneral](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesgeneral.md)

## CPUInfo

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| emulationMode | _string_ | 23.0 |  |
| frequencyMhz | _number_ | 23.0 |  |
| logicalCores | _number_ | 23.0 |  |
| physicalCores | _number_ | 23.0 |  |
| vendor | _string_ | 23.0 | Possible vendor values: 'Intel', 'AMD', 'ARM', or 'Unknown' |

## Dimensions

Simple two-axis area definition.

Used by [DisplayConfiguration](uxp-objects-2.md)

| Name | Type | Min Version |
| --- | --- | --- |
| horizontal | _number_ | NA |
| vertical | _number_ | NA |

## DisplayConfiguration

Connected display metadata is represented by this object literal.

For unit details, see [Display Units](uxp-media-2.md)

| Name | Type | Min Version |
| --- | --- | --- |
| globalBounds | [_SimpleBounds_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/simplebounds.md) | 23.0 |
| globalWorkingBounds | [_SimpleBounds_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/simplebounds.md) | 23.0 |
| isPrimary | _boolean_ | 23.0 |
| maximumExtendedDynamicRangeColorComponent | _number_ | 26.5 |
| physicalResolution | [_Dimensions_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/dimensions.md) | 23.0 |
| scaleFactor | _number_ | 23.0 |
| screensHaveSeparateSpaces | _boolean_ | 26.3 |

## ExecuteAsModalOptions

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| commandName | _string_ | 22.5 | Command label; if the operation lasts long enough, the progress bar displays it. |
| descriptor | _object_ | 22.5 | Object literal supplied as the second parameter of `targetFunction` after an [executeAsModal](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/objects/executeasmodal.md) call. Functions cannot be included. |
| interactive | _boolean_ | 23.3 | Optional mode that permits UI interaction during executeAsModal. Use it when invoked dialogs or workspaces need user input. See [Modal Execution](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/objects/executeasmodal.md). |
| timeOut | _number_ | 25.10 | When execution finds an existing modal state, the request keeps retrying until this many seconds elapse. |

## GPUInfo

| Name | Type | Min Version |
| --- | --- | --- |
| clgpuInfoList | [_OpenCLDeviceInfo_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/opencldeviceinfo.md)[] | 23.0 |
| gpuInfoList | [_OpenGLDeviceInfo_](https://raw.githubusercontent.com/ps-reference/objects/returnobjects/opengldeviceinfo.md)[] | 23.0 |

## HistorySuspension

`suspendHistory` returns this object when a document history state is suspended; pass it when calling `resumeHistory`.

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| historySuspensionID | _number_ | 23.0 | Photoshop-generated identifier for the history suspension. |

## Return Objects

Methods such as [core](https://raw.githubusercontent.com/ps-reference/media/photoshopcore.md) may return object literals.

## OpenCLDeviceInfo

| Name | Type | Min Version |
| --- | --- | --- |
| clDeviceVersion | _string_ | 23.0 |
| clPlatformVersion | _string_ | 23.0 |
| driverVersion | _string_ | 23.0 |
| isIntegrated | _string_ | 23.0 |
| memoryMB | _number_ | 23.0 |
| name | _string_ | 23.0 |
| oclBandwidth | _number_ | 23.0 |
| oclCompute | _number_ | 23.0 |
| vendor | _string_ | 23.0 |
| version | _string_ | 23.0 |

## OpenGLDeviceInfo

| Name | Type | Min Version |
| --- | --- | --- |
| driverVersion | _string_ | 23.0 |
| glDriver | _string_ | 23.0 |
| isIntegrated | _string_ | 23.0 |
| memoryMB | _number_ | 23.0 |
| name | _string_ | 23.0 |
| vendor | _string_ | 23.0 |
| version | _string_ | 23.0 |

## SimpleBounds

Four values define this basic rectangular area.

Together, (`left`, `top`) and (`right`, `bottom`) indicate the top-left and bottom-right corners.

Used by [DisplayConfiguration](uxp-objects-2.md)

| Name | Type | Min Version |
| --- | --- | --- |
| bottom | _number_ | NA |
| left | _number_ | NA |
| right | _number_ | NA |
| top | _number_ | NA |

## BMP Save Options

Save-option object for BMP output through [Document.saveAs](https://raw.githubusercontent.com/ps-reference/classes/document.md#saveas).

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| alphaChannels | _boolean_ | R W | 22.5 | Set to true to include alpha channels. |
| depth | [_BMPDepthType_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#bmpdepthtype) | R W | 22.5 | Bits per channel. |
| flipRowOrder | _boolean_ | R W | 22.5 | Set to true for top-to-bottom row order; requires osType as OperatingSystem.WINDOWS |
| osType | [_OperatingSystem_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#operatingsystem) | R W | 22.5 | Destination OS. |
| rleCompression | _boolean_ | R W | 22.5 | Set to true for RLE compression |
| typename | _string_ | R | 22.5 | Referenced object's class name: _"BMPSaveOptions"_. |

## GIF Save Options — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| colors | _number_ | R W | 22.5 | Palette color count. Applies only with palette values: Palette.LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE; or WINDOWSPALETTE |
| dither | [_Dither_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#dither) | R W | 22.5 | Dither method. |
| ditherAmount | _number_ | R W | 22.5 | Dither amount. Requires dither = Dither.DIFFUSION. |
| forced | [_ForcedColors_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#forcedcolors) | R W | 22.5 | Colors category forced into the color palette. |
| interlaced | _boolean_ | R W | 22.5 | True when rows are written interlaced. |
| matte | [_MatteColor_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#mattecolor) | R W | 22.5 | Matte fill for anti-aliased edges beside transparent pixels. If image transparency is disabled, those transparent pixels receive the matte color. |
| palette | [_Palette_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#palette) | R W | 22.5 | Palette type to use. |
| preserveExactColors | _boolean_ | R W | 22.5 | True to keep color-table entries in the image out of dithering. Requires dither = DITHER.DIFFUSION |
| transparency | _boolean_ | R W | 22.5 | True to retain transparent image areas during conversion to GIF format. |
| typename | _string_ | R | 22.5 | Referenced object's class name: _"GIFSaveOptions"_. |

## Save Options

Save-option objects for multiple file formats when calling [Document.saveAs](https://raw.githubusercontent.com/ps-reference/classes/document.md#saveas).

## JPEG Save Options — Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| color | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | R W | - | - | 22.5 | Custom fill color for anti-aliased edges bordering transparent pixels. Not allowed alongside 'matteColor'. |
| customMatte | [_SolidColor_](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) | R W | - | - | 22.5 | Custom matting color; takes precedence over matteColor |
| embedColorProfile | _boolean_ | R W | - | - | 22.5 | False omits the document color profile from embedding |
| formatOptions | [_JPEGFormatOptions_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#jpegformatoptions) | R W | STANDARDBASELINE | - | 22.5 | JPEG format option selection. |
| matteColor | [_MatteColor_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#mattecolor) | R W | - | - | 22.5 | Fill color for anti-aliased edges bordering transparent pixels. Not allowed alongside 'color'. |
| quality | _number_ | R W | 8 | 0...12 | 22.5 | Image quality setting; changes compression and file size. |
| scans | _number_ | R W | 3 | 3...5 | 22.5 | Count of scans used for progressive page display. Requires JPEGFormatOptions.PROGRESSIVE in formatOptions. |
| typename | _string_ | R | - | - | 22.5 | Referenced object's class name: _"JPEGSaveOptions"_. |

## Photoshop Save Options — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| alphaChannels | _boolean_ | R W | 22.5 | Set to true to include alpha channels in the saved file. |
| annotations | _boolean_ | R W | 22.5 | Set to true when annotations should be written out. |
| embedColorProfile | _boolean_ | R W | 22.5 | Set to true to include document color profiles. |
| layers | _boolean_ | R W | 22.5 | Set to true so layer data remains preserved. |
| maximizeCompatibility | _boolean_ | R W | 22.5 | Enables broader compatibility with earlier Photoshop versions. |
| spotColor | _boolean_ | R W | 22.5 | Set to true to include spot colors while saving. |
| typename | _string_ | R | 22.5 | Referenced object class name: _"PhotoshopSaveOptions"_. |

## PNG Save Options — Properties

| Name | Type | Access | Default | Range | Min Version | Description |
| --- | --- | --- | --- | --- | --- | --- |
| compression | _number_ | R W | 6 | 0...9 | 22.5 | Compression setting applied when method = PNGMethod.QUICK |
| interlaced | _boolean_ | R W | false | - | 22.5 | When method = PNGMethod.QUICK, true writes the image with interlaced rows. |
| method | [_PNGMethod_](https://raw.githubusercontent.com/ps-reference/modules/constants.md#pngmethod) | R W | - | - | 22.5 | Chooses the PNG file-size optimization strategy. |
| typename | _string_ | R | - | - | 22.5 | Referenced object class name: _"PNGSaveOptions"_. |

## Tool

At this stage, this entry is still WIP and exposes only an id field. Later revisions may promote it into a class.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| id | _string_ | R W | 23.0 | Tool name value. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Tool"_. |
