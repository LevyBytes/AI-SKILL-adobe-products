# Photoshop (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Chooses the color for the antitheft text overlay on gallery images.
  \*/
  declare enum GallerySecurityTextColorType {
  /\*\*
  - Black overlay text.
    \*/
    BLACK = 1,

/\*\*

- Custom text color.
  \*/
  CUSTOM = 3,

/\*\*

- White overlay text.
  \*/
  WHITE = 2,
  }

/\*\*

- Sets the position of antitheft-deterrent text over gallery images.
  \*/
  declare enum GallerySecurityTextPositionType {
  /\*\*
  - Centers text on each image.
    \*/
    CENTERED = 1,

/\*\*

- Places text in the lower-left corner of each image.
  \*/
  LOWERLEFT = 3,

/\*\*

- Places text in the lower-right corner of each image.
  \*/
  LOWERRIGHT = 5,

/\*\*

- Places text in the upper-left corner of each image.
  \*/
  UPPERLEFT = 2,

/\*\*

- Places text in the upper-right corner of each image.
  \*/
  UPPERRIGHT = 4,
  }

/\*\*

- DEPRECATED. Lists web photo gallery security text rotation types.
  \*/
  declare enum GallerySecurityTextRotateType {
  /\*\*
  - Rotates 45 degrees clockwise.
    \*/
    CLOCKWISE45 = 2,

/\*\*

- Rotates 90 degrees clockwise.
  \*/
  CLOCKWISE90 = 3,

/\*\*

- Rotates 45 degrees counterclockwise.
  \*/
  COUNTERCLOCKWISE45 = 4,

/\*\*

- Rotates 90 degrees counterclockwise.
  \*/
  COUNTERCLOCKWISE90 = 5,

/\*\*

- Applies no rotation.
  \*/
  ZERO = 1,
  }

/\*\*

- Represents query permission behavior.
  \*/
  declare enum QueryStateType {
  /\*\*
  - Maximizes compatibility every time.
    \*/
    ALWAYS = 1,

/\*\*

- Prompts before maximizing compatibility.
  \*/
  ASK = 2,

/\*\*

- Does not prompt about maximizing compatibility.
  \*/
  NEVER = 3,
  }

/\*\*

- Chooses where history log data is stored.
  \*/
  declare enum SaveLogItemsType {
  /\*\*
  - Stores the history log in a text file.
    \*/
    LOGFILE = 2,

/\*\*

- Stores the history log in both file metadata and a text file.
  \*/
  LOGFILEANDMETADATA = 3,

/\*\*

- Stores the history log in file metadata.
  \*/
  METADATA = 1,
  }

/\*\*

- Selects history log edit detail.
  \*/
  declare enum EditLogItemsType {
  /\*\*
  - Saves a concise history log.
    \*/
    CONCISE = 2,

/\*\*

- Saves a detailed history log.
  \*/
  DETAILED = 3,

/\*\*

- Saves history only for the session.
  \*/
  SESSIONONLY = 1,
  }

/\*\*

- Identifies the path category.
  \*/
  declare enum PathKind {
  /\*\*
  - Clipping-path kind.
    \*/
    CLIPPINGPATH = 2,

/\*\*

- Normal-path kind.
  \*/
  NORMALPATH = 1,

/\*\*

- Text-mask path kind.
  \*/
  TEXTMASK = 5,

/\*\*

- Vector-mask path kind.
  \*/
  VECTORMASK = 4,

/\*\*

- Work-path kind.
  \*/
  WORKPATH = 3,
  }

/\*\*

- Specifies how shapes combine when the destination image already contains a selection.
  \*/
  declare enum ShapeOperation {
  /\*\*
  - Adds the shapes.
    \*/
    SHAPEADD = 1,

/\*\*

- Creates the overlapping area of the two shapes.
  \*/
  SHAPEINTERSECT = 3,

/\*\*

- Removes the loaded shape from the destination image selection.
  \*/
  SHAPESUBTRACT = 4,

/\*\*

- Uses the loaded selection instead of the destination image shape.
  \*/
  SHAPEXOR = 2,
  }

/\*\*

- Identifies the path point kind.
  \*/
  declare enum PointKind {
  /\*\*
  - Requires the point to be a corner.
    \*/
    CORNERPOINT = 2,

/\*\*

- Allows the point to be a curve.
  \*/
  SMOOTHPOINT = 1,
  }

/\*\*

- Tool choices for stroke path execution.
  \*/
  declare enum ToolType {
  /\*\*
  - Art history brush tool.
    \*/
    ARTHISTORYBRUSH = 9,

/\*\*

- Background eraser tool.
  \*/
  BACKGROUNDERASER = 4,

/\*\*

- Blur tool.
  \*/
  BLUR = 11,

/\*\*

- Brush tool.
  \*/
  BRUSH = 2,

/\*\*

- Burn tool.
  \*/
  BURN = 14,

/\*\*

- Clone stamp tool.
  \*/
  CLONESTAMP = 5,

/\*\*

- Color replacement tool.
  \*/
  COLORREPLACEMENTTOOL = 16,

/\*\*

- Dodge tool.
  \*/
  DODGE = 13,

/\*\*

- Eraser tool.
  \*/
  ERASER = 3,

/\*\*

- Healing brush tool.
  \*/
  HEALINGBRUSH = 7,

/\*\*

- History brush tool.
  \*/
  HISTORYBRUSH = 8,

/\*\*

- Pattern stamp tool.
  \*/
  PATTERNSTAMP = 6,

/\*\*

- Pencil tool.
  \*/
  PENCIL = 1,

/\*\*

- Sharpen tool.
  \*/
  SHARPEN = 12,

/\*\*

- Smudge tool.
  \*/
  SMUDGE = 10,

/\*\*

- Sponge tool.
  \*/
  SPONGE = 15,
  }

/\*\*

- Chooses batch-processing output behavior.
  \*/
  declare enum BatchDestinationType {
  /\*\*
  - Writes files into a folder.
    \*/
    FOLDER = 3,

/\*\*

- Keeps all files open.
  \*/
  NODESTINATION = 1,

/\*\*

- Saves changes, then closes every file.
  \*/
  SAVEANDCLOSE = 2,
  }

/\*\*

- Lists naming options for the batch command.
  \*/
  declare enum FileNamingType {
  /\*\*
  - Uses the date format ddmm.
    \*/
    DDMM = 16,

/\*\*

- Uses the date format ddmmyy.
  \*/
  DDMMYY = 15,

/\*\*

- Uses the document name in lowercase.
  \*/
  DOCUMENTNAMELOWER = 2,

/\*\*

- Uses the document name in mixed case.
  \*/
  DOCUMENTNAMEMIXED = 1,

/\*\*

- Uses the document name in UPPER case.
  \*/
  DOCUMENTNAMEUPPER = 3,

/\*\*

- Uses the file extension in lowercase.
  \*/
  EXTENSIONLOWER = 17,

/\*\*

- Uses the file extension in UPPER case.
  \*/
  EXTENSIONUPPER = 18,

/\*\*

- Uses the date format mmdd.
  \*/
  MMDD = 11,

/\*\*

- Uses the date format mmddyy.
  \*/
  MMDDYY = 10,

/\*\*

- Uses a lowercase letter serial number (a, b, c, ...).
  \*/
  SERIALLETTERLOWER = 8,

/\*\*

- Uses an UPPER case letter serial number (A, B, C, ...).
  \*/
  SERIALLETTERUPPER = 9,

/\*\*

- Uses a 1-digit serial number.
  \*/
  SERIALNUMBER1 = 4,

/\*\*

- Uses a 2-digit serial number.
  \*/
  SERIALNUMBER2 = 5,

/\*\*

- Uses a 3-digit serial number.
  \*/
  SERIALNUMBER3 = 6,

/\*\*

- Uses a 4-digit serial number.
  \*/
  SERIALNUMBER4 = 7,

/\*\*

- Uses the date format yyddmm.
  \*/
  YYDDMM = 14,

/\*\*

- Uses the date format yymmdd.
  \*/
  YYMMDD = 13,

/\*\*

- Uses the date format yyyymmdd.
  \*/
  YYYYMMDD = 12,
  }

/\*\*

- Lists depth map source options.
  \*/
  declare enum DepthMapSource {
  /\*\*
  - Uses the image highlight as the depth map.
    \*/
    IMAGEHIGHLIGHT = 4,

/\*\*

- Uses the layer mask as the depth map.
  \*/
  LAYERMASK = 3,

/\*\*

- Uses no depth map.
  \*/
  NONE = 1,

/\*\*

- Uses the transparency channel as the depth map.
  \*/
  TRANSPARENCYCHANNEL = 2,
  }

/\*\*

- Provides geometric shape choices, including the iris shape in the Lens Blur Filter.
  \*/
  declare enum Geometry {
  /\*\*
  - Heptagon shape.
    \*/
    HEPTAGON = 4,

/\*\*

- Hexagon shape.
  \*/
  HEXAGON = 2,

/\*\*

- Octagon shape.
  \*/
  OCTAGON = 5,

/\*\*

- Pentagon shape.
  \*/
  PENTAGON = 1,

/\*\*

- Square shape.
  \*/
  SQUARE = 3,

/\*\*

- Triangle shape.
  \*/
  TRIANGLE = 0,
  }

/\*\*

- Chooses the color reduction algorithm.
  \*/
  declare enum ColorReductionType {
  /\*\*
  - Samples from the color spectrum most common in the image.
    \*/
    ADAPTIVE = 2,

/\*\*

- Uses a fixed palette of colors.
  \*/
  BLACKWHITE = 5,

/\*\*

- Uses a color palette created or changed by the user. Opening an existing GIF or PNG-8 file gives it a custom color palette.
  \*/
  CUSTOM = 4,

/\*\*

- Uses a fixed palette of colors.
  \*/
  GRAYSCALE = 6,

/\*\*

- Uses a fixed palette of colors.
  \*/
  MACINTOSH = 7,

/\*\*

- Prioritizes colors to which human vision is more sensitive.
  \*/
  PERCEPTUAL = 0,

/\*\*

- Uses the standard 216-color table shared by Windows and Mac OS 8-bit output, also called a 256-color or web-safe palette; prevents browser dithering when the image is shown with 8-bit color.
  \*/
  RESTRICTIVE = 3,

/\*\*

- Prioritizes broad color areas and preserving web colors; this usually gives images the strongest color integrity.
  \*/
  SELECTIVE = 1,

/\*\*

- Uses a fixed palette of colors.
  \*/
  WINDOWS = 8,
  }

/\*\*

- Selects the default Camera RAW settings.
  \*/
  declare enum CameraRAWSettingsType {
  /\*\*
  - Uses the camera settings.
    \*/
    CAMERA = 0,

/\*\*

- Uses custom settings.
  \*/
  CUSTOM = 2,

/\*\*

- Uses settings from the selected image.
  \*/
  SELECTEDIMAGE = 1,
  }

/\*\*

- Sets lighting conditions that affect color balance.
  \*/
  declare enum WhiteBalanceType {
  /\*\*
  - Uses the camera-as-shot settings.
    \*/
    ASSHOT = 0,

/\*\*

- Applies automatic white balance settings.
  \*/
  AUTO = 1,

/\*\*

- Uses settings for a cloudy-day shot.
  \*/
  CLOUDY = 3,

/\*\*

- Select custom values for the shot parameters.
  \*/
  CUSTOM = 8,

/\*\*

- Apply the daylight capture preset.
  \*/
  DAYLIGHT = 2,

/\*\*

- Apply settings for flash capture.
  \*/
  FLASH = 7,

/\*\*

- Apply the fluorescent-light capture preset.
  \*/
  FLUORESCENT = 6,

/\*\*

- Apply settings for shaded capture.
  \*/
  SHADE = 4,

/\*\*

- Apply the tungsten-light capture preset.
  \*/
  TUNGSTEN = 5,
  }

/\*\*

- Identifies the color space category.
  \*/
  declare enum ColorSpaceType {
  /\*\*
  - Select the Adobe RGB color space.
    \*/
    ADOBERGB = 0,

/\*\*

- Select the ColorMatch RGB color space.
  \*/
  COLORMATCHRGB = 1,

/\*\*

- Select the ProPhoto RGB color space.
  \*/
  PROPHOTORGB = 2,

/\*\*

- Select the sRGB color space.
  \*/
  SRGB = 3,
  }

/\*\*

- Size choices for a camera RAW image.
  \*/
  declare enum CameraRAWSize {
  /\*\*
  - Image dimensions are 5120 x 3413.
    \*/
    EXTRALARGE = 4,

/\*\*

- Image dimensions are 4096 x 2731.
  \*/
  LARGE = 3,

/\*\*

- Image dimensions are 6144 x 4096.
  \*/
  MAXIMUM = 5,

/\*\*

- Image dimensions are 3072 x 2048.
  \*/
  MEDIUM = 2,

/\*\*

- Image dimensions are 1536 x 1024.
  \*/
  MINIMUM = 0,

/\*\*

- Image dimensions are 2048 x 1365.
  \*/
  SMALL = 1,
  }

/\*\*

- Magnification choices used for PDF display.
  \*/
  declare enum MagnificationType {
  /\*\*
  - Shows the image at actual size.
    \*/
    ACTUALSIZE = 0,

/\*\*

- Scales the image to fit the page.
  \*/
  FITPAGE = 1,
  }

/\*\*

- Page-cropping target style.
  \*/
  declare enum CropToType {
  /\*\*
  - Crop against the art box.
    \*/
    ARTBOX = 5,

/\*\*

- Crop against the bleed box.
  \*/
  BLEEDBOX = 3,

/\*\*

- Crop against the bounding box.
  \*/
  BOUNDINGBOX = 0,

/\*\*

- Crop against the crop box.
  \*/
  CROPBOX = 2,

/\*\*

- Crop against the media box.
  \*/
  MEDIABOX = 1,

/\*\*

- Crop against the trim box.
  \*/
  TRIMBOX = 4,
  }

/\*\*

- Preview type size for font menus in the Type tool.
  \*/
  declare enum FontPreviewType {
  /\*\*
  - Preview appears extra large.
    \*/
    EXTRALARGE = 4,

/\*\*

- Preview appears huge.
  \*/
  HUGE = 5,

/\*\*

- Type appears large.
  \*/
  LARGE = 3,

/\*\*

- Type appears medium.
  \*/
  MEDIUM = 2,

/\*\*

- Preview is disabled.
  \*/
  NONE = 0,

/\*\*

- Type appears small.
  \*/
  SMALL = 1,
  }

/\*\*

- Font sizing used in panels and dialogs.
  \*/
  declare enum FontSize {
  /\*\*
  - Large size setting.
    \*/
    LARGE = 3,

/\*\*

- Medium size setting.
  \*/
  MEDIUM = 2,

/\*\*

- Small size setting.
  \*/
  SMALL = 1,
  }

/\*\*

- Source used while logging measurements.
  \*/
  declare enum MeasurementSource {
  /\*\*
  - Measure count tool source.
    \*/
    MEASURECOUNTTOOL = 2,

/\*\*

- Measure ruler tool source.
  \*/
  MEASURERULERTOOL = 3,

/\*\*

- Measurement comes from the selection.
  \*/
  MEASURESELECTION = 1,
  }

/\*\*

- Measurement set targeted for an action.
  \*/
  declare enum MeasurementRange {
  /\*\*
  - Limit the action to active measurements.
    \*/
    ACTIVEMEASUREMENTS = 2,

/\*\*

- Include every measurement.
  \*/
  ALLMEASUREMENTS = 1,
  }

/\*\*

- Document collection object.
  \*/
  declare class Documents {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: Document

/\*\*

- Creates a document.
- @param width Document width.
- @param height Document height.
- @param resolution Document resolution, in pixels per inch.
- @param name Document name.
- @param mode Document mode.
- @param initialFill Starting fill for the document.
- @param pixelAspectRatio Starting pixel aspect ratio for the document.
- @param bitsPerChannel Bits used for each channel.
- @param colorProfileName Color profile name assigned to the document.
  \*/
  add(
  width?: UnitValue | number,
  height?: UnitValue | number,
  resolution?: number,
  name?: string,
  mode?: NewDocumentMode,
  initialFill?: DocumentFill,
  pixelAspectRatio?: number,
  bitsPerChannel?: BitsPerChannelType,
  colorProfileName?: string,
  ): Document

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): Document
  }

/\*\*

- Layer objects held by the document, including art layer and layer set entries.
  \*/
  declare class Layers {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: Layer

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): Layer

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Layer set objects contained by the document.
  \*/
  declare class LayerSets {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: LayerSet

/\*\*

- Inserts an element.
  \*/
  add(): LayerSet

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): LayerSet

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Art layer objects contained by the document.
  \*/
  declare class ArtLayers {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: ArtLayer

/\*\*

- Inserts an element.
  \*/
  add(): ArtLayer

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): ArtLayer

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Channel objects contained by the document.
  \*/
  declare class Channels {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: Channel

/\*\*

- Inserts an element.
  \*/
  add(): Channel

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): Channel

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Guide objects tied to the document.
  \*/
  declare class Guides {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Creates a guide.
- @param direction Whether the guide runs vertical or horizontal.
- @param coordinate Guide location measured from the image origin.
  \*/
  static add(direction: Direction, coordinate: UnitValue | number): Guide

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): Guide
  }

/\*\*

- History state objects tied to the document.
  \*/
  declare class HistoryStates {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: HistoryState

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): HistoryState
  }

/\*\*

- Layer comp objects tied to the document.
  \*/
  declare class LayerComps {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: LayerComp

/\*\*

- Adds a layer comp.
- @param name Name assigned to the layer comp.
- @param comment Description text for the layer comp.
- @param appearance When true, the layer comp uses the layer appearance or style.
- @param position When true, the layer comp uses the layer position.
- @param visibility When true, the layer comp uses the layer visibility.
  \*/
  static add(
  name: string,
  comment?: string,
  appearance?: boolean,
  position?: boolean,
  visibility?: boolean,
  ): LayerComp

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): LayerComp
  }

/\*\*

- Fonts available from the computer as a collection.
  \*/
  declare class TextFonts {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: TextFont

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): TextFont
  }

/\*\*

- Path item objects contained by the document.
  \*/
  declare class PathItems {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: PathItem

/\*\*

- Creates a path item.
- @param name Name assigned to the new path.
- @param entirePath Sub paths that make up the item.
  \*/
  static add(name: string, entirePath: SubPathInfo[]): PathItem

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): PathItem
  }

/\*\*

- Path point info objects describing straight or curved path segments are exposed through this array. Do not create sub paths through the sub path item object; use it to read details about an existing sub path. For creation, use sub path info instead.
  \*/
  declare class SubPathItems {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: SubPathItem

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): SubPathItem
  }

/\*\*

- Collection containing the path points that make up the path points property on a sub path item object.
  \*/
  declare class PathPoints {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: PathPoint

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): PathPoint
  }

/\*\*

- Notifier objects contained by the document.
  \*/
  declare class Notifiers {
  /\*\*
  - Element count for this collection.
    \*/
    readonly length: number

/\*\*

- Container that owns this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Returns the collection element at the supplied index.
- @param index
  \*/
  [index: number]: Notifier
