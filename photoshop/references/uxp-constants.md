# Constants (part 1)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Before using constants, import the `constants` object from the photoshop module.

```javascript
const { app, constants } = require("photoshop");

await app.activeDocument.resizeImage(800, 600, 100, constants.InterpolationMethod.AUTOMATIC);
```

## Enumerations

### AnchorPosition

22.5

Transformation uses this point as its anchor.

During rotate or resize operations, this point stays fixed.

| Name | Description |
| --- | --- |
| BOTTOMCENTER | - |
| BOTTOMLEFT | - |
| BOTTOMRIGHT | - |
| MIDDLECENTER | - |
| MIDDLELEFT | - |
| MIDDLERIGHT | - |
| TOPCENTER | - |
| TOPLEFT | - |
| TOPRIGHT | - |

### AntiAlias

24.1

For [CharacterStyle.antiAliasMethod](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#antialiasmethod), choose how edge pixels blend into the background for smoother edges.

| Name | Description |
| --- | --- |
| CRISP | - |
| NONE | - |
| SHARP | - |
| SMOOTH | - |
| STRONG | - |

### ApplyImageBlendMode

24.5

For [Layer.applyImage](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyimage), selects the blend mode for the operation.

| Name | Description |
| --- | --- |
| ADD | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DIVIDE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIX | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PINLIGHT | - |
| SCREEN | - |
| SOFTLIGHT | - |
| SUBTRACT | - |
| VIVIDLIGHT | - |

### ApplyImageChannel

24.5

Channels available for [Layer.applyImage](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyimage).

| Name | Description |
| --- | --- |
| CMYK | - |
| LAB | - |
| RGB | - |
| SELECTION | - |
| TRANSPARENCY | - |

### ApplyImageLayer

24.5

Merged layers can be supplied as the [Layer.applyImage](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyimage) source.

| Name | Description |
| --- | --- |
| MERGED | - |

### AutoKernType

24.1

Character kerning mode. See [CharacterStyle.autoKerning](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#autokerning)

| Name | Description |
| --- | --- |
| MANUAL | - |
| METRICS | - |
| OPTICAL | - |

### BMPDepthType

22.5

Bits per channel, also known as pixel depth or color depth.

The selected number is the exponent of 2; 8 bits per channel allows 256 colors.

| Name | Description |
| --- | --- |
| EIGHT | - |
| FOUR | - |
| ONE | - |
| SIXTEEN | - |
| THIRTYTWO | - |
| TWENTYFOUR | - |

### Baseline

24.1

Text baseline style. See [CharacterStyle.baseline](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#baseline)

| Name | Description |
| --- | --- |
| NORMAL | - |
| SUBSCRIPT | - |
| SUPERSCRIPT | - |

### BitmapConversionType

22.5

Quality setting for converting an image to bitmap mode. See [BitmapConversionOptions](https://raw.githubusercontent.com/ps-reference/objects/conversionoptions/bitmapconversionoptions.md)

| Name | Description |
| --- | --- |
| CUSTOMPATTERN | - |
| DIFFUSIONDITHER | - |
| HALFTHRESHOLD | - |
| HALFTONESCREEN | - |
| PATTERNDITHER | - |

### BitmapHalfToneType

22.5

Dot shape, or ink-deposit shape, for the halftone screen. Used in [BitmapConversionOptions](https://raw.githubusercontent.com/ps-reference/objects/conversionoptions/bitmapconversionoptions.md)

| Name | Description |
| --- | --- |
| CROSS | - |
| DIAMOND | - |
| ELLIPSE | - |
| LINE | - |
| ROUND | - |
| SQUARE | - |

### BitsPerChannelType

23.0

Color channels can use these bit depths.

| Name | Description |
| --- | --- |
| EIGHT | - |
| ONE | - |
| SIXTEEN | - |
| THIRTYTWO | - |

### BlendMode

22.5

Layer blend options

| Name | Description |
| --- | --- |
| COLOR | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DISSOLVE | - |
| DIVIDE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIX | - |
| HUE | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| LUMINOSITY | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PASSTHROUGH | - |
| PINLIGHT | - |
| SATURATION | - |
| SCREEN | - |
| SOFTLIGHT | - |
| SUBTRACT | - |
| VIVIDLIGHT | - |

### CalculationsBlendMode

24.5

For [Document.calculations](https://raw.githubusercontent.com/ps-reference/classes/document.md#calculations), selects the blend mode for the operation.

| Name | Description |
| --- | --- |
| ADD | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DIVIDE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIX | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PINLIGHT | - |
| SCREEN | - |
| SOFTLIGHT | - |
| SUBTRACT | - |
| VIVIDLIGHT | - |

### CalculationsChannel

24.5

Channels for [Document.calculations](https://raw.githubusercontent.com/ps-reference/classes/document.md#calculations).

| Name | Description |
| --- | --- |
| GRAY | - |
| SELECTION | - |
| TRANSPARENCY | - |

### CalculationsLayer

24.5

For [Document.calculations]], MERGED uses the combined layer result as the source.

| Name | Description |
| --- | --- |
| MERGED | - |

### CalculationsResult

24.5

A [Document.calculations](https://raw.githubusercontent.com/ps-reference/classes/document.md#calculations) result can target a new document, a channel added to the active document, or a selection created there.

| Name | Description |
| --- | --- |
| NEWCHANNEL | - |
| NEWDOCUMENT | - |
| SELECTION | - |

### ChangeMode

22.5

For [Document.changeMode](https://raw.githubusercontent.com/ps-reference/classes/document.md#changemode), identifies the document's new color mode or color profile.

NOTE: Convert color images to GRAYSCALE mode before BITMAP conversion.

| Name | Description |
| --- | --- |
| BITMAP | - |
| CMYK | - |
| GRAYSCALE | - |
| INDEXEDCOLOR | - |
| LAB | - |
| MULTICHANNEL | - |
| RGB | - |

### ChannelType

22.5

Kind of color channel.

| Name | Description |
| --- | --- |
| COMPONENT | Depends on the document color mode |
| MASKEDAREA | Alpha channel whose color marks masked area |
| SELECTEDAREA | Alpha channel whose color marks selected area |
| SPOTCOLOR | Spot color storage alpha channel |

### CharacterAlignment

24.1

Text character alignment setting.
See [CharacterStyle.characterAlignment](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#characteralignment)

| Name | Description |
| --- | --- |
| EMBOXBOTTOMLEFT | - |
| EMBOXCENTER | - |
| EMBOXTOPRIGHT | - |
| ICFBOTTOMLEFT | - |
| ICFBOXTOPRIGHT | - |
| ROMAN | - |

### ColorBlendMode

23.3

Blend mode for fill or stroke operations.
Use with [PathItem.fillPath](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md#fillpath)()

| Name | Description |
| --- | --- |
| BEHIND | - |
| CLEAR | - |
| COLOR | - |
| COLORBURN | - |
| COLORDODGE | - |
| DARKEN | - |
| DARKERCOLOR | - |
| DIFFERENCE | - |
| DISSOLVE | - |
| EXCLUSION | - |
| HARDLIGHT | - |
| HARDMIXBLEND | - |
| HUE | - |
| LIGHTEN | - |
| LIGHTERCOLOR | - |
| LINEARBURN | - |
| LINEARDODGE | - |
| LINEARLIGHT | - |
| LUMINOSITY | - |
| MULTIPLY | - |
| NORMAL | - |
| OVERLAY | - |
| PINLIGHT | - |
| SATURATION | - |
| SCREEN | - |
| SOFTLIGHT | - |
| VIVIDLIGHT | - |

### ColorModel

22.5

For a [SolidColor](https://raw.githubusercontent.com/ps-reference/classes/solidcolor.md) object, this is the current color-space model.

| Name | Description |
| --- | --- |
| CMYK | - |
| GRAYSCALE | - |
| HSB | - |
| LAB | - |
| NONE | - |
| RGB | - |

### ColorPicker

24.0

Color picker dialog provider.
Use with [PreferencesGeneral.colorPicker](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesgeneral.md#colorpicker)

| Name | Description |
| --- | --- |
| ADOBE | Adobe Photoshop Color Picker provider. |
| OSNATIVE | Apple or Windows built-in color picker. |
| PLUGIN | Plugin-supplied color picker. For PLUGIN, the argument object passed to [PreferencesGeneral.colorPicker](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesgeneral.md#colorpicker) needs the `pluginID` property; set it to the plugin's internal string ID. |

### ColorProfileType

22.5

For [Document.colorProfileType](https://raw.githubusercontent.com/ps-reference/classes/document.md#colorprofiletype), indicates how a document's color profile is managed.

| Name | Description |
| --- | --- |
| CUSTOM | Used by every custom profile |
| NONE | Used when the document is unmanaged for color |
| WORKING | Used when the document relies on the current working profile |

### CreateFields

23.5

Field creation method. Use with [Layer.applyDeInterlace](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applydeinterlace).

| Name | Description |
| --- | --- |
| DUPLICATION | - |
| INTERPOLATION | - |

### DepthMapSource

23.5

Depth map source. Use with
[Layer.applyLensBlur](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applylensblur)().

| Name | Description |
| --- | --- |
| IMAGEHIGHLIGHT | - |
| LAYERMASK | - |
| NONE | - |
| TRANSPARENCYCHANNEL | - |

### DialogModes

22.5

Selects which dialogs Photoshop displays during API calls.

| Name | Description |
| --- | --- |
| ALL | Show every dialog |
| ERROR | Show dialogs only when Photoshop raises an error |
| NONE | Hide all dialogs; invalid calls fail silently |

### Direction

22.5

Represents orientation in multiple places.

Guide orientation in [Guide.direction](https://raw.githubusercontent.com/ps-reference/classes/guide.md#direction)

| Name | Description |
| --- | --- |
| HORIZONTAL | - |
| VERTICAL | - |

### DisplacementMapType

23.5

For [Layer.applyDisplace](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applydisplace), specifies how to fit a displacement map when it differs in size from the image.

| Name | Description |
| --- | --- |
| STRETCHTOFIT | - |
| TILE | - |

### Dither

22.5

Dithering type

| Name | Description |
| --- | --- |
| DIFFUSION | - |
| NOISE | - |
| NONE | - |
| PATTERN | - |

### DocumentFill

22.5

Available background fill methods for a new document

| Name | Description |
| --- | --- |
| BACKGROUNDCOLOR | - |
| BLACK | - |
| COLOR | - |
| TRANSPARENT | - |
| WHITE | - |

### DocumentMode

22.5

Open-document color mode. Related: [Document.mode](https://raw.githubusercontent.com/ps-reference/classes/document.md#mode) and [Document.changeMode](https://raw.githubusercontent.com/ps-reference/classes/document.md#changemode)

| Name | Description |
| --- | --- |
| BITMAP | - |
| CMYK | - |
| DUOTONE | - |
| GRAYSCALE | - |
| INDEXEDCOLOR | - |
| LAB | - |
| MULTICHANNEL | - |
| RGB | - |

### EditLogItemsType

24.0

History Log edit-item setting.
Use with [PreferencesHistory.editLogItems](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferenceshistory.md#editlogitems)

| Name | Description |
| --- | --- |
| CONCISE | Adds History panel text beyond the Sessions information. |
| DETAILED | Adds Actions panel text on top of Concise information. Choose Detailed when files need a complete record of all edits. |
| SESSIONONLY | Records each Photoshop start or quit and each file open or close, including the image filename; file edits are not logged. |

### ElementPlacement

22.5

Layer.move placement modes

| Name | Description |
| --- | --- |
| PLACEAFTER | Put below a layer, or below the group when the target is a group |
| PLACEATBEGINNING | Put at the top |
| PLACEATEND | Put at the bottom, above a background layer when one exists |
| PLACEBEFORE | Put above a layer, or above the group when the target is a group |
| PLACEINSIDE | Put inside a group; throws an error when the target is not a group |

### EliminateFields

23.5

Field type to remove. Use with [Layer.applyDeInterlace](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applydeinterlace).

| Name | Description |
| --- | --- |
| EVENFIELDS | - |
| ODDFIELDS | - |

### FlipAxis

23.0

Axis, or both axes, used when flipping a layer.
Use with [Layer.flip](https://raw.githubusercontent.com/ps-reference/classes/layer.md#flip)().

| Name | Description |
| --- | --- |
| BOTH | - |
| HORIZONTAL | - |
| VERTICAL | - |

### FontSize

24.0

Panel and dialog text size.
Use with [PreferencesInterface.textFontSize](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesinterface.md#textfontsize)

| Name | Description |
| --- | --- |
| LARGE | Large text. |
| MEDIUM | Medium text. |
| SMALL | Small text. |
| TINY | Tiny text. |

### ForcedColors

22.5

Colors forced into the color table whether or not they are used.

| Name | Description |
| --- | --- |
| BLACKANDWHITE | Only pure black and pure white |
| NONE | No forced colors |
| PRIMARIES | RGB primaries, cyan, magenta, yellow, black, and white. |
| WEB | The 216-color web-safe palette |

### GenerativeUpscaleModel

27.2

AI-powered upscaling model selection.

Use with [Document.generativeUpscale](https://raw.githubusercontent.com/ps-reference/classes/document.md#generativeupscale)()

| Name | Description |
| --- | --- |
| FIREFLY | Adobe Firefly model for generative upscale |

### Geometry

23.5

Shape geometry options, including Lens Blur iris shapes. Use with [Layer.applyLensBlur](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applylensblur)().

| Name | Description |
| --- | --- |
| HEPTAGON | - |
| HEXAGON | - |
| OCTAGON | - |
| PENTAGON | - |
| SQUARE | - |
| TRIANGLE | - |

### GridLineStyle

24.0

Line style for nonprinting image grids.
Use with [PreferencesGuidesGridsAndSlices.gridStyle](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesguidesgridsandslices.md#gridstyle)

| Name | Description |
| --- | --- |
| DASHED | - |
| DOTTED | - |
| SOLID | - |

### GridSize

24.0

Grid square size.
Use with [PreferencesTransparencyAndGamut.gridSize](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencestransparencyandgamut.md#gridsize)

| Name | Description |
| --- | --- |
| LARGE | Large grid squares are shown. |
| MEDIUM | Medium grid squares are shown. |
| NONE | No grid appears. |
| SMALL | Small grid squares are shown. |

### GuideLineStyle

24.0

Line style for nonprinting guides shown over images.
Use with [PreferencesGuidesGridsAndSlices.guideStyle](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesguidesgridsandslices.md#guidestyle)

| Name | Description |
| --- | --- |
| DASHED | - |
| SOLID | - |

### Intent

22.5

Rendering intent used when [Document.convertProfile](https://raw.githubusercontent.com/ps-reference/classes/document.md#convertprofile) converts between color spaces.

| Name | Description |
| --- | --- |
| ABSOLUTECOLORIMETRIC | - |
| PERCEPTUAL | - |
| RELATIVECOLORIMETRIC | - |
| SATURATION | - |

### InterpolationMethod

24.0

Bitmap interpolation method.

Use with

- [PreferencesGeneral.imageInterpolation](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesgeneral.md#imageinterpolation)
- [Layer.scale](https://raw.githubusercontent.com/ps-reference/classes/layer.md#scale)()
- [Layer.skew](https://raw.githubusercontent.com/ps-reference/classes/layer.md#skew)()
- [Layer.rotate](https://raw.githubusercontent.com/ps-reference/classes/layer.md#rotate)()
- [Selection.resizeBoundary](https://raw.githubusercontent.com/ps-reference/classes/selection.md#resizeboundary)()
- [Selection.rotateBoundary](https://raw.githubusercontent.com/ps-reference/classes/selection.md#rotateboundary)()

| Name | Description |
| --- | --- |
| AUTOMATIC | Select the best bicubic option automatically |
| BICUBIC | Use bicubic interpolation |
| BICUBICSHARPER | Apply sharpening through a mask |
| BICUBICSMOOTHER | Apply smoothing through a mask |
| BILINEAR | Use bilinear interpolation |
| NEARESTNEIGHBOR | Choose the value from the closest neighbor |

### JPEGFormatOptions

22.5

JPEG save option.

| Name | Description |
| --- | --- |
| OPTIMIZEDBASELINE | Optimized color with a slightly smaller file size. |
| PROGRESSIVE | Shows increasingly detailed scans while the image downloads. |
| STANDARDBASELINE | Most web browsers can read this format. |

### Justification

24.1

Placement of paragraph text inside its bounding box.
See [ParagraphStyle.justification](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#justification)

| Name | Description |
| --- | --- |
| CENTER | - |
| CENTERJUSTIFIED | - |
| FULLYJUSTIFIED | - |
| LEFT | - |
| LEFTJUSTIFIED | - |
| RIGHT | - |
| RIGHTJUSTIFIED | - |

### KashidaWidthType

24.1

Kashida (tatweel) character width.
See [ParagraphStyle.kashidaWidth](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#kashidawidth)

| Name | Description |
| --- | --- |
| LONG | - |
| MEDIUM | - |
| NONE | - |
| SHORT | - |
| STYLISTIC | - |

### Kinsoku

24.1

Japanese text line-breaking rules.
See [ParagraphStyle.kinsoku](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#kinsoku)

| Name | Description |
| --- | --- |
| JISMAXIMUM | - |
| JISWEAK | - |
| NONE | - |

### LabelColors

22.5

Layer-list label color options
