# Constants (part 2)

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Enumerations

| Name | Description |
| --- | --- |
| BLUE | - |
| GRAY | - |
| GREEN | - |
| NONE | - |
| ORANGE | - |
| RED | - |
| VIOLET | - |
| YELLOW | - |

### Language

24.1

Text language setting. See [CharacterStyle.language](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#language)

| Name | Description |
| --- | --- |
| ARABIC | - |
| BANGLAINDIA | - |
| BRAZILLIANPORTUGUESE | - |
| BULGARIAN | - |
| BURMESE | - |
| CANADIANFRENCH | - |
| CATALAN | - |
| CHINESE | - |
| CROATIAN | - |
| CZECH | - |
| DANISH | - |
| DUTCH | - |
| ENGLISHCANADA | - |
| ENGLISHUK | - |
| ENGLISHUSA | - |
| ESTONIAN | - |
| FINNISH | - |
| FRENCH | - |
| GERMAN | - |
| GERMAN1996 | - |
| GREEK | - |
| GUJARATI | - |
| HEBREW | - |
| HINDI | - |
| HUNGARIAN | - |
| ICELANDIC | - |
| INDONESIAN | - |
| ITALIAN | - |
| JAPANESE | - |
| KANNADA | - |
| KHMER | - |
| LAO | - |
| LATVIAN | - |
| LITHUANIAN | - |
| MALAYALAM | - |
| MARATHI | - |
| NORWEGIAN | - |
| NYNORSKNORWEGIAN | - |
| ODIA | - |
| OLDDUTCH | - |
| OLDGERMAN | - |
| OLDSWISSGERMAN | - |
| POLISH | - |
| PORTUGUESE | - |
| PUNJABI | - |
| ROMANIAN | - |
| RUSSIAN | - |
| SERBIAN | - |
| SINHALESE | - |
| SLOVAK | - |
| SLOVENIAN | - |
| SPANISH | - |
| SWEDISH | - |
| SWISSGERMAN | - |
| TAMIL | - |
| TELUGU | - |
| THAI | - |
| TURKISH | - |
| UKRAINIAN | - |

### LayerKind

22.5

Document layer categories, including adjustment layers. Photoshop 27.4 adds Grain and Clarity.

| Name | Description |
| --- | --- |
| BLACKANDWHITE | Black & White adjustment layer |
| BRIGHTNESSCONTRAST | Brightness/Contrast adjustment layer |
| CHANNELMIXER | Channel Mixer adjustment layer |
| CLARITY | Clarity and dehaze adjustment layer |
| COLORBALANCE | Color Balance adjustment layer |
| COLORLOOKUP | Color Lookup adjustment layer |
| CURVES | Curves adjustment layer |
| EXPOSURE | Exposure adjustment layer |
| GRADIENTFILL | Gradient fill layer |
| GRADIENTMAP | Gradient Map adjustment layer |
| GRAIN | Grain adjustment layer |
| GROUP | Layer group |
| HUESATURATION | Hue/Saturation adjustment layer |
| INVERSION | Invert adjustment layer |
| LAYER3D | 3D layer |
| LEVELS | Levels adjustment layer |
| NORMAL | Raster pixel layer |
| PATTERNFILL | Pattern fill layer |
| PHOTOFILTER | Photo Filter adjustment layer |
| POSTERIZE | Posterize adjustment layer |
| SELECTIVECOLOR | Selective Color adjustment layer |
| SMARTOBJECT | Smart object layer |
| SOLIDFILL | Solid Color fill layer |
| TEXT | Text layer |
| THRESHOLD | Threshold adjustment layer |
| VIBRANCE | Color and vibrance adjustment layer |
| VIDEO | Video layer |

### LensType

23.5

Lens type selection. Use with [Layer.applyLensFlare](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applylensflare)().

| Name | Description |
| --- | --- |
| MOVIEPRIME | - |
| PRIME105 | - |
| PRIME35 | - |
| ZOOMLENS | - |

### MatteColor

22.5

Color used on anti-aliased edges adjacent to transparent image areas.
If image transparency is disabled,
Photoshop fills transparent areas with the matte color.

| Name | Description |
| --- | --- |
| BACKGROUND | - |
| BLACK | - |
| FOREGROUND | - |
| NETSCAPE | - |
| SEMIGRAY | - |
| WHITE | - |

### MaximizeCompatibility

24.0

Query permission state.
Use with [PreferencesFileHandling.maximizeCompatibility](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesfilehandling.md#maximizecompatibility)

| Name | Description |
| --- | --- |
| ALWAYS | Maximize compatibility every time. |
| ASK | Prompt before maximizing compatibility. |
| NEVER | Do not prompt for compatibility maximization. |

### MiddleEasternDigitsType

24.1

Digit form for Middle Eastern text features.
See [CharacterStyle.middleEasternDigitsType](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#middleeasterndigitstype)

| Name | Description |
| --- | --- |
| FARSI | - |
| HINDI | - |
| LTRARABIC | - |
| RTLARABIC | - |

### MiddleEasternTextDirection

24.1

Direction for Middle Eastern text features.
See [CharacterStyle.middleEasternTextDirection](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#middleeasterntextdirection)

| Name | Description |
| --- | --- |
| DEFAULT | - |
| LEFTTORIGHT | - |
| RIGHTTOLEFT | - |

### Mojikumi

24.1

Japanese text spacing among punctuation, symbols, numbers, and other character classes.
See [ParagraphStyle.mojikumi](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#mojikumi)

| Name | Description |
| --- | --- |
| NONE | - |
| SET1 | - |
| SET2 | - |
| SET3 | - |
| SET4 | - |

### NewDocumentMode

22.5

Color modes for new-document creation

| Name | Description |
| --- | --- |
| BITMAP | - |
| CMYK | - |
| GRAYSCALE | - |
| LAB | - |
| RGB | - |

### NoiseDistribution

23.5

Distribution model for the Add Noise filter. Use with [Layer.applyAddNoise](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyaddnoise).

| Name | Description |
| --- | --- |
| GAUSSIAN | - |
| UNIFORM | - |

### OffsetUndefinedAreas

23.5

Fills empty areas after image or selection offset.
Use with [Layer.applyOffset](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyoffset)()

| Name | Description |
| --- | --- |
| REPEATEDGEPIXELS | - |
| SETTOBACKGROUND | - |
| WRAPAROUND | - |

### OperatingSystem

22.5

For [BMPSaveOptions](https://raw.githubusercontent.com/ps-reference/objects/saveoptions/bmpsaveoptions.md), selects the target platform.

| Name | Description |
| --- | --- |
| OS2 | - |
| WINDOWS | - |

### Orientation

24.1

Orientation value shared by several APIs,
including [TextItem.orientation](https://raw.githubusercontent.com/ps-reference/classes/textitem.md#orientation)

| Name | Description |
| --- | --- |
| HORIZONTAL | - |
| VERTICAL | - |

### OtherCursors

24.0

For Marquee, Lasso, Polygonal Lasso, Magic Wand, Crop, Slice,
Patch Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen,
Measure, and Color Sampler, this sets cursor style.
Use with [PreferencesCursors.otherCursors](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencescursors.md#othercursors)

| Name | Description |
| --- | --- |
| PRECISE | Show crosshair cursors for tools. |
| STANDARD | Show compact tool icons as cursors. |

### PNGMethod

22.5

PNG save compression method

| Name | Description |
| --- | --- |
| MODERATE | - |
| QUICK | - |
| THOROUGH | - |

### PaintingCursors

24.0

For Eraser, Pencil, Paintbrush, Healing Brush,
Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge, Burn, Sponge, this sets cursor style.
Use with [PreferencesCursors.paintingCursors](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencescursors.md#paintingcursors)

| Name | Description |
| --- | --- |
| BRUSHSIZE | Shows brush-shaped cursors sized to the current brush, with boundaries marked at 50% brush opacity |
| FULLSIZE | Uses the complete brush size without accounting for brush opacity |
| PRECISE | Shows crosshair cursors while painting. |
| STANDARD | Shows compact icon cursors while painting. |

### Palette

22.5

Palette selection to apply

| Name | Description |
| --- | --- |
| EXACT | - |
| LOCALADAPTIVE | - |
| LOCALPERCEPTUAL | - |
| LOCALSELECTIVE | - |
| MACOSPALETTE | - |
| MASTERADAPTIVE | - |
| MASTERPERCEPTUAL | - |
| MASTERSELECTIVE | - |
| PREVIOUSPALETTE | - |
| UNIFORM | - |
| WEBPALETTE | - |
| WINDOWSPALETTE | - |

### ParagraphFeatures

24.1

Text uses this paragraph feature set.
Referenced by [ParagraphStyle.features](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#features)

| Name | Description |
| --- | --- |
| DEFAULT | - |
| EASTASIAN | - |
| MIDDLEASTERN | - |

### ParagraphLayout

24.1

Text uses this paragraph layout mode.
Referenced by [ParagraphStyle.layoutMode](https://raw.githubusercontent.com/ps-reference/classes/paragraphstyle.md#layoutmode)

| Name | Description |
| --- | --- |
| LATINEASTASIAN | - |
| WORLDREADY | - |

### PathKind

23.5

Category assigned to a [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md)

| Name | Description |
| --- | --- |
| CLIPPINGPATH | - |
| DUPLICATE | - |
| INTERPOLATE | - |
| NORMALPATH | - |
| TEXTMASK | - |
| VECTORMASK | - |
| WORKPATH | - |

### PointKind

23.3

Role assigned to a [PathPoint](https://raw.githubusercontent.com/ps-reference/classes/pathpoint.md) inside a [PathItem](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md)

| Name | Description |
| --- | --- |
| CORNERPOINT | - |
| SMOOTHPOINT | - |

### PointType

24.0

Point/pica sizing mode: either 72 or 72.27 points per inch.
Supply to [PreferencesUnitsAndRulers.pointSize](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesunitsandrulers.md#pointsize)

| Name | Description |
| --- | --- |
| POSTSCRIPT | Uses 72 points per inch. |
| TRADITIONAL | Uses 72.27 points per inch. |

### PolarConversionType

23.5

Polar-coordinate conversion mode.
Supply to [Layer.applyPolarCoordinates](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applypolarcoordinates)().

| Name | Description |
| --- | --- |
| POLARTORECTANGULAR | Treats the input pixel grid as polar coordinates and maps it into rectangular coordinates. |
| RECTANGULARTOPOLAR | Treats the input pixel grid as rectangular coordinates and maps it into polar coordinates. |

### PreserveShape

23.5

Chooses whether corners or curves are promoted.
Supply to [Layer.applyMaximum](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applymaximum)() and [Layer.applyMinimum](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyminimum)().

| Name | Description |
| --- | --- |
| ROUNDNESS | - |
| SQUARENESS | - |

### RasterizeType

22.5

Layer category selected for rasterization.

| Name | Description |
| --- | --- |
| ENTIRELAYER | - |
| FILLCONTENT | - |
| LAYERCLIPPINGPATH | - |
| LAYERSTYLE | - |
| LINKEDLAYERS | - |
| PLACED | - |
| SHAPE | - |
| TEXTCONTENTS | - |
| VECTORMASK | - |
| VIDEO | - |

### ResampleMethod

22.5

Interpolation method for document resizing

Supply to [Document.resizeImage](https://raw.githubusercontent.com/ps-reference/classes/document.md#resizeimage)()

| Name | Description |
| --- | --- |
| AUTOMATIC | Automatically chooses the best bicubic option |
| BICUBIC | Uses bicubic interpolation |
| BICUBICSHARPER | Applies a sharpening mask |
| BICUBICSMOOTHER | Applies a smoothing mask |
| BILINEAR | Interpolates bilinearly |
| DEEPUPSCALE | Uses deep learning to predict how the picture should appear at a larger size. |
| NEARESTNEIGHBOR | Chooses values from the nearest neighbor |
| NONE | Alters the image resolution value without changing document dimensions **Currently unsupported** |
| PRESERVEDETAILS | Uses machine-learning detail preservation |

### RippleSize

23.5

Undulation size.
Supply to [Layer.applyRipple](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyripple)().

| Name | Description |
| --- | --- |
| LARGE | - |
| MEDIUM | - |
| SMALL | - |

### RulerUnits

24.0

Measurement unit used for ruler increments.
Supply to [PreferencesUnitsAndRulers.rulerUnits](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesunitsandrulers.md#rulerunits)

| Name | Description |
| --- | --- |
| CENTIMETERS | - |
| INCHES | - |
| MILLIMETERS | - |
| PERCENT | - |
| PICAS | - |
| PIXELS | - |
| POINTS | - |

### SampleSize

24.0

EyeDropper tool and ColorSampler instances use this sampling area.

| Name | Description |
| --- | --- |
| POINTSAMPLE | - |
| SAMPLE101X101 | - |
| SAMPLE11X11 | - |
| SAMPLE31X31 | - |
| SAMPLE3X3 | - |
| SAMPLE51X51 | - |
| SAMPLE5X5 | - |

### SaveLogItemsType

24.0

Choices for recording history items.
Supply to [PreferencesHistory.saveLogItems](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferenceshistory.md#savelogitems)

| Name | Description |
| --- | --- |
| LOGFILE | Writes the history log to a text file. |
| LOGFILEANDMETADATA | Puts the history log into both a text file and file metadata. |
| METADATA | Puts the history log into file metadata. |

### SaveMethod

22.5

Save-operation type.

| Name | Description |
| --- | --- |
| SAVE | Saves the current document using its current format. |
| SAVEAS | Changes the document format and updates the file. |
| SAVEASCOPY | Writes another document in that format. |

### SaveOptions

22.5

Closing policy for unsaved document changes.

| Name | Description |
| --- | --- |
| DONOTSAVECHANGES | Closes the document without saving and discards changes |
| PROMPTTOSAVECHANGES | Blocks the script while asking the user whether to save changes |
| SAVECHANGES | Saves existing changes before closing and prompts if the document has not yet been saved |

### SavePreview

24.0

Application behavior for image previews.
Supply to [PreferencesFileHandling.imagePreviews](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesfilehandling.md#imagepreviews)

| Name | Description |
| --- | --- |
| ALWAYSSAVE | Always includes the item in file output. |
| ASKWHENSAVING | Asks whether file output should include the item. |
| NEVERSAVE | Never includes the item in file output. |

### SelectionType

23.3

Selection handling when an existing selection is already present.
Used in [PathItem.makeSelection](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md#makeselection)(), [Selection.saveTo](https://raw.githubusercontent.com/ps-reference/classes/selection.md#saveto)() and [Selection.load](https://raw.githubusercontent.com/ps-reference/classes/selection.md#load)()

| Name | Description |
| --- | --- |
| DIMINISH | Removes the new selection area from what is already selected |
| EXTEND | Adds the new selection to the already selected area |
| INTERSECT | Keeps only the overlap between the new selection and the already selected area |
| REPLACE | Substitutes the active selection |

### ShapeOperation

23.3

Shape combination behavior when selection data is already on the destination path.

Assign for [SubPathInfo.operation](https://raw.githubusercontent.com/ps-reference/classes/subpathinfo.md#operation), then store on the resulting [SubPathItem](https://raw.githubusercontent.com/ps-reference/classes/subpathitem.md)

| Name | Description |
| --- | --- |
| SHAPEADD | - |
| SHAPEINTERSECT | - |
| SHAPESUBTRACT | - |
| SHAPEXOR | - |

### SmartBlurMode

23.5

Method selected for smart blur.
Supply to [Layer.applySmartBlur](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applysmartblur)().

| Name | Description |
| --- | --- |
| EDGEONLY | - |
| NORMAL | - |
| OVERLAYEDGE | - |

### SmartBlurQuality

23.5

Quality level for smart blur.
Supply to [Layer.applySmartBlur](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applysmartblur)().

| Name | Description |
| --- | --- |
| HIGH | - |
| LOW | - |
| MEDIUM | - |

### SpherizeMode

23.5

Curve or stretch shape applied by the distortion.
Supply to [Layer.applySpherize](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyspherize)().

| Name | Description |
| --- | --- |
| HORIZONTAL | - |
| NORMAL | - |
| VERTICAL | - |

### StrikeThrough

24.1

Text strikethrough style. Referenced by [CharacterStyle.strikeThrough](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#strikethrough)

| Name | Description |
| --- | --- |
| STRIKEBOX | - |
| STRIKEHEIGHT | - |
| STRIKEOFF | - |

### TextCase

24.1

Capitalization style for text. Referenced by [CharacterStyle.capitalization](https://raw.githubusercontent.com/ps-reference/classes/characterstyle.md#capitalization)

| Name | Description |
| --- | --- |
| ALLCAPS | - |
| NORMAL | - |
| SMALLCAPS | - |

### TextureType

23.5

Texture or glass-surface image type loaded for a texturizer
or glass filter. Supply to [Layer.applyGlassEffect](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyglasseffect)().

| Name | Description |
| --- | --- |
| BLOCKS | - |
| CANVAS | - |
| FROSTED | - |
| TINYLENS | - |

### ToolType

23.3

Tool selected for [PathItem.strokePath](https://raw.githubusercontent.com/ps-reference/classes/pathitem.md#strokepath)()

| Name | Description |
| --- | --- |
| ARTHISTORYBRUSH | - |
| BACKGROUNDERASER | - |
| BLUR | - |
| BRUSH | - |
| BURN | - |
| CLONESTAMP | - |
| COLORREPLACEMENTTOOL | - |
| DODGE | - |
| ERASER | - |
| HEALINGBRUSH | - |
| HISTORYBRUSH | - |
| PATTERNSTAMP | - |
| PENCIL | - |
| SHARPEN | - |
| SMUDGE | - |
| SPONGE | - |

### TrimType

23.0

Pixel type trimmed around an image; pass to [Document.trim](https://raw.githubusercontent.com/ps-reference/classes/document.md#trim).

| Name | Description |
| --- | --- |
| BOTTOMRIGHT | Uses the color of the pixel in the image's bottom right corner. |
| TOPLEFT | Uses the color of the pixel in the image's top left right corner. |
| TRANSPARENT | Uses pixels that are fully transparent. |

### TypeInterfaceFeatures

24.0

Controls Character and Paragraph panel user-interface options.
This option is outside the Preferences dialog; find it at: Main menu > Type > Language Options
Supply to [PreferencesType.showTextFeatures](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencestype.md#showtextfeatures)

| Name | Description |
| --- | --- |
| DEFAULT | - |
| EASTASIAN | - |
| MIDDLEEASTERN | - |

### TypeUnits

24.0

Measurement unit used for type.
Supply to [PreferencesUnitsAndRulers.typeUnits](https://raw.githubusercontent.com/ps-reference/classes/preferences/preferencesunitsandrulers.md#typeunits)

| Name | Description |
| --- | --- |
| MILLIMETERS | - |
| PIXELS | - |
| POINTS | - |

### UndefinedAreas

23.5

Handling for undistorted regions or blank areas left in an image
after applying a Distort-category filter. Supply
to [Layer.applyDisplace](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applydisplace)(), [Layer.applyShear](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applyshear)(), [Layer.applyWave](https://raw.githubusercontent.com/ps-reference/classes/layer.md#applywave)()

| Name | Description |
| --- | --- |
| REPEATEDGEPIXELS | - |
| WRAPAROUND | - |
