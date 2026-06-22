# Photoshop (part 6)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Dither strength. Applies only when 'dither' = diffusion.
  \*/
  ditherAmount: number

/\*\*

- File format selection. Save For Web outputs include Compuserve GIF and JPEG, plus PNG-8, PNG-24, and BMP.
  \*/
  format: SaveDocumentType

/\*\*

- When true, writes the embedded profile from the document.
  \*/
  includeProfile: boolean

/\*\*

- When true, downloads the image progressively across several passes.
  \*/
  interlaced: boolean

/\*\*

- Permitted lossy compression amount.
  \*/
  lossy: number

/\*\*

- RGBColor blended behind transparent pixels.
  \*/
  matteColor: RGBColor

/\*\*

- When true, favors reduced file size over broad compatibility.
  \*/
  optimized: boolean

/\*\*

- Produced-image quality percentage. Range: 0 to 100.
  \*/
  quality: number

/\*\*

- When true, saved output retains transparent image areas.
  \*/
  transparency: boolean

/\*\*

- Transparency dither strength. Applies only when 'transparency' = true.
  \*/
  transparencyAmount: number

/\*\*

- Algorithm used for transparency dither.
  \*/
  transparencyDither: Dither

/\*\*

- Tolerance for snapping nearby colors onto web palette colors.
  \*/
  webSnap: number
  }

/\*\*

- Conversion settings shared by document mode changes.
  \*/
  declare class DocumentConversionOptions {}

/\*\*

- Settings used when changing document mode to Bitmap.
  \*/
  declare class BitmapConversionOptions extends DocumentConversionOptions {
  /\*\*
  - Dot orientation angle, in degrees. Applies only when 'method' = halftone screen. Range: -180 to 180.
    \*/
    angle: number

/\*\*

- Printer-dot density in dots per inch. Use with 'method' = halftone screen. Range: 1.0 to 999.99.
  \*/
  frequency: number

/\*\*

- Method chosen for conversion.
  \*/
  method: BitmapConversionType

/\*\*

- Pattern name to apply. Applies only when 'method' = custom.
  \*/
  patternName: string

/\*\*

- Output resolution, measured in pixels per inch.
  \*/
  resolution: number

/\*\*

- Dot shape choice. Applies only when 'method' = halftone screen.
  \*/
  shape: BitmapHalfToneType
  }

/\*\*

- Settings for converting an RGB image into indexed color.
  \*/
  declare class IndexedConversionOptions extends DocumentConversionOptions {
  /\*\*
  - Palette color count. Not accepted by every palette type.
    \*/
    colors: number

/\*\*

- Dither type selection.
  \*/
  dither: Dither

/\*\*

- Dither strength. Applies only when 'dither' = diffusion.
  \*/
  ditherAmount: number

/\*\*

- Color-forcing mode used for the color palette.
  \*/
  forced: ForcedColors

/\*\*

- Matte fill used along anti-aliased edges next to transparent image areas. When transparency = false, this matte color fills transparent areas.
  \*/
  matte: MatteType

/\*\*

- Palette type selection.
  \*/
  palette: PaletteType

/\*\*

- When true, protects image colors that have color-table entries from dither changes. Applies only when 'dither' = diffusion.
  \*/
  preserveExactColors: boolean

/\*\*

- When true, keeps image transparency while converting to GIF format.
  \*/
  transparency: boolean
  }

/\*\*

- Represents one color value.
  \*/
  declare class Color {}

/\*\*

- Document color definition object.
  \*/
  declare class SolidColor {
  /\*\*
  - CMYK color model value.
    \*/
    static cmyk: CMYKColor

/\*\*

- CMYK color model value.
  \*/
  cmyk: CMYKColor

/\*\*

- Grayscale color model value.
  \*/
  static gray: GrayColor

/\*\*

- Grayscale color model value.
  \*/
  gray: GrayColor

/\*\*

- HSB color model value.
  \*/
  static hsb: HSBColor

/\*\*

- HSB color model value.
  \*/
  hsb: HSBColor

/\*\*

- Lab color model value.
  \*/
  static lab: LabColor

/\*\*

- Lab color model value.
  \*/
  lab: LabColor

/\*\*

- Current color model.
  \*/
  model: ColorModel

/\*\*

- Current color model.
  \*/
  static model: ColorModel

/\*\*

- Closest web-safe RGBColor to this color.
  \*/
  static readonly nearestWebColor: RGBColor

/\*\*

- Closest web-safe RGBColor to this color.
  \*/
  readonly nearestWebColor: RGBColor

/\*\*

- RGB color model value.
  \*/
  rgb: RGBColor

/\*\*

- RGB color model value.
  \*/
  static rgb: RGBColor

/\*\*

- Tests two SolidColor values for equality.
- @param color Color to test against this one.
  \*/
  isEqual(color: SolidColor): boolean
  }

/\*\*

- Settings for defining a gray color.
  \*/
  declare class GrayColor extends Color {
  /\*\*
  - Gray component value. Range: 0.0 to 100.0.
    \*/
    static gray: number

/\*\*

- Gray component value. Range: 0.0 to 100.0.
  \*/
  gray: number
  }

/\*\*

- Defines an RGB color mode.
  \*/
  declare class RGBColor extends Color {
  /\*\*
  - Blue component value. Range: 0.0 to 255.0.
    \*/
    static blue: number

/\*\*

- Blue component value. Range: 0.0 to 255.0.
  \*/
  blue: number

/\*\*

- Green component value. Range: 0.0 to 255.0.
  \*/
  static green: number

/\*\*

- Green component value. Range: 0.0 to 255.0.
  \*/
  green: number

/\*\*

- Hex string form for this color.
  \*/
  static hexValue: string

/\*\*

- Hex string form for this color.
  \*/
  hexValue: string

/\*\*

- Red component value. Range: 0.0 to 255.0.
  \*/
  static red: number

/\*\*

- Red component value. Range: 0.0 to 255.0.
  \*/
  red: number
  }

/\*\*

- CMYK color definition.
  \*/
  declare class CMYKColor extends Color {
  /\*\*
  - Black component value. Range: 0.0 to 100.0.
    \*/
    static black: number

/\*\*

- Black component value. Range: 0.0 to 100.0.
  \*/
  black: number

/\*\*

- Cyan component value. Range: 0.0 to 100.0.
  \*/
  static cyan: number

/\*\*

- Cyan component value. Range: 0.0 to 100.0.
  \*/
  cyan: number

/\*\*

- Magenta component value. Range: 0.0 to 100.0.
  \*/
  static magenta: number

/\*\*

- Magenta component value. Range: 0.0 to 100.0.
  \*/
  magenta: number

/\*\*

- Yellow component value. Range: 0.0 to 100.0.
  \*/
  static yellow: number

/\*\*

- Yellow component value. Range: 0.0 to 100.0.
  \*/
  yellow: number
  }

/\*\*

- Lab color definition.
  \*/
  declare class LabColor extends Color {
  /\*\*
  - a component value. Range: -128.0 and 127.0.
    \*/
    static A: number

/\*\*

- a component value. Range: -128.0 and 127.0.
  \*/
  A: number

/\*\*

- b component value. Range: -128.0 and 127.0.
  \*/
  static B: number

/\*\*

- b component value. Range: -128.0 and 127.0.
  \*/
  B: number

/\*\*

- L component value. Range: 0.0 to 100.0.
  \*/
  static L: number

/\*\*

- L component value. Range: 0.0 to 100.0.
  \*/
  L: number
  }

/\*\*

- HSB color definition.
  \*/
  declare class HSBColor extends Color {
  /\*\*
  - Brightness component value. Range: 0.0 to 100.0.
    \*/
    static brightness: number

/\*\*

- Brightness component value. Range: 0.0 to 100.0.
  \*/
  brightness: number

/\*\*

- Hue component value. Range: 0.0 to 360.0.
  \*/
  static hue: number

/\*\*

- Hue component value. Range: 0.0 to 360.0.
  \*/
  hue: number

/\*\*

- Saturation component value. Range: 0.0 to 100.0.
  \*/
  static saturation: number

/\*\*

- Saturation component value. Range: 0.0 to 100.0.
  \*/
  saturation: number
  }

/\*\*

- Stands in for no color.
  \*/
  declare class NoColor extends Color {}

/\*\*

- Settings for the PDF presentation command.
  \*/
  declare class PresentationOptions {
  /\*\*
  - Creation settings for the PDF file.
    \*/
    static PDFFileOptions: PDFSaveOptions

/\*\*

- When true, the presentation advances automatically.
  \*/
  static autoAdvance: boolean

/\*\*

- When true, writes the image file name into the presentation.
  \*/
  static includeFilename: boolean

/\*\*

- Seconds to wait before advancing automatically. This setting matters when 'auto advance' is true. Range: 1 to 60.
  \*/
  static interval: number

/\*\*

- When true, playback returns to the first page after the final page.
  \*/
  static loop: boolean

/\*\*

- Magnification behavior for image viewing.
  \*/
  static magnification: MagnificationType

/\*\*

- When true, saves as presentation; when false, saves as Multi-Page document.
  \*/
  static presentation: boolean

/\*\*

- Transition used between images.
  \*/
  static transition: TransitionType
  }

/\*\*

- Deprecated; Bridge now owns the make photo gallery method.
  \*/
  declare class GalleryOptions {
  /\*\*
  - Adds width and height attributes to images.
    \*/
    static addSizeAttributes: boolean

/\*\*

- Banner-related settings.
  \*/
  static bannerOptions: GalleryBannerOptions

/\*\*

- Custom-color related settings.
  \*/
  static customColorOptions: GalleryCustomColorOptions

/\*\*

- Email address displayed on the web page.
  \*/
  static emailAddress: string

/\*\*

- Image-related settings.
  \*/
  static imagesOptions: GalleryImagesOptions

/\*\*

- Includes every file found inside subfolders of the input folder.
  \*/
  static includeSubFolders: boolean

/\*\*

- Layout style for arranging the web page.
  \*/
  static layoutStyle: string

/\*\*

- Preserves all metadata in the JPEG files.
  \*/
  static preserveAllMetadata: boolean

/\*\*

- Security-related settings.
  \*/
  static securityOptions: GallerySecurityOptions

/\*\*

- Thumbnail-related settings.
  \*/
  static thumbnailOptions: GalleryThumbnailOptions

/\*\*

- Chooses short .htm or long .html web page extension.
  \*/
  static useShortExtension: boolean

/\*\*

- Enables UTF-8 encoding for the web page.
  \*/
  static useUTF8Encoding: boolean
  }

/\*\*

- Deprecated; Bridge now owns the make photo gallery method.
  \*/
  declare class GalleryBannerOptions {
  /\*\*
  - Contact information for the web photo gallery.
    \*/
    static contactInfo: string

/\*\*

- Date text for the web photo gallery.
  \*/
  static date: string

/\*\*

- Banner-text font setting.
  \*/
  static font: GalleryFontType

/\*\*

- Font size used by banner text.
  \*/
  static fontSize: number

/\*\*

- Photographer text for the web photo gallery.
  \*/
  static photographer: string

/\*\*

- Site-name text for the web photo gallery.
  \*/
  static siteName: string
  }

/\*\*

- Deprecated; Bridge now owns the make photo gallery method.
  \*/
  declare class GalleryImagesOptions {
  /\*\*
  - Border-pixel amount placed between images.
    \*/
    static border: number

/\*\*

- Turns on caption generation for images.
  \*/
  static caption: boolean

/\*\*

- Resized image dimension, in pixels.
  \*/
  static dimension: number

/\*\*

- Font used for gallery image text.
  \*/
  static font: GalleryFontType

/\*\*

- Font size used for gallery image text.
  \*/
  static fontSize: number

/\*\*

- JPEG image quality setting.
  \*/
  static imageQuality: number

/\*\*

- Adds copyright text to gallery image text.
  \*/
  static includeCopyright: boolean

/\*\*

- Adds credits text to gallery image text.
  \*/
  static includeCredits: boolean

/\*\*

- Adds the file name to gallery image text.
  \*/
  static includeFilename: boolean

/\*\*

- Adds the title to gallery image text.
  \*/
  static includeTitle: boolean

/\*\*

- Adds numeric navigation links.
  \*/
  static numericLinks: boolean

/\*\*

- Constraint mode for image resizing.
  \*/
  static resizeConstraint: GalleryConstrainType

/\*\*

- Enables image resizing data.
  \*/
  static resizeImages: boolean
  }

/\*\*

- Deprecated; Bridge now owns the make photo gallery method.
  \*/
  declare class GalleryThumbnailOptions {
  /\*\*
  - Border-pixel amount around thumbnail images.
    \*/
    static border: number

/\*\*

- Enables captions.
  \*/
  static caption: boolean

/\*\*

- Thumbnail column count for the web photo gallery.
  \*/
  static columnCount: number

/\*\*

- Thumbnail dimension, in pixels, for the web photo gallery.
  \*/
  static dimension: number

/\*\*

- Font used by the web photo gallery.
  \*/
  static font: GalleryFontType

/\*\*

- Font size used by thumbnail image text.
  \*/
  static fontSize: number

/\*\*

- Includes copyright text for thumbnails.
  \*/
  static includeCopyright: boolean

/\*\*

- Includes credits text for thumbnails.
  \*/
  static includeCredits: boolean

/\*\*

- Includes file names for thumbnails.
  \*/
  static includeFilename: boolean

/\*\*

- Includes titles for thumbnails.
  \*/
  static includeTitle: boolean

/\*\*

- Thumbnail row count for the web photo gallery.
  \*/
  static rowCount: number

/\*\*

- Thumbnail image size selection.
  \*/
  static size: GalleryThumbSizeType
  }

/\*\*

- Deprecated; Bridge now owns the make photo gallery method.
  \*/
  declare class GalleryCustomColorOptions {
  /\*\*
  - Color for active links.
    \*/
    static activeLinkColor: RGBColor

/\*\*

- Color for the background.
  \*/
  static backgroundColor: RGBColor

/\*\*

- Color for the banner.
  \*/
  static bannerColor: RGBColor

/\*\*

- Color for links.
  \*/
  static linkColor: RGBColor

/\*\*

- Color for text.
  \*/
  static textColor: RGBColor

/\*\*

- Color for visited links.
  \*/
  static visitedLinkColor: RGBColor
  }

/\*\*

- Deprecated; Bridge now owns the make photo gallery method.
  \*/
  declare class GallerySecurityOptions {
  /\*\*
  - Security content for the web photo gallery.
    \*/
    static content: GallerySecurityType

/\*\*

- Security font for the web photo gallery.
  \*/
  static font: GalleryFontType

/\*\*

- Security font size for the web photo gallery.
  \*/
  static fontSize: number

/\*\*

- Security opacity percentage for the web page.
  \*/
  static opacity: number

/\*\*

- Custom security text for the web photo gallery.
  \*/
  static text: string

/\*\*

- Security text color for the web page.
  \*/
  static textColor: RGBColor

/\*\*

- Security text position for the web photo gallery.
  \*/
  static textPosition: GallerySecurityTextPositionType

/\*\*

- Security text rotation for the web photo gallery.
  \*/
  static textRotate: GallerySecurityTextRotateType
  }

/\*\*

- Settings available for a contact sheet.
  \*/
  declare class ContactSheetOptions {
  /\*\*
  - When true, lays out images horizontally first.
    \*/
    static acrossFirst: boolean

/\*\*

- When true, rotates images to fit optimally.
  \*/
  static bestFit: boolean

/\*\*

- When true, uses each image filename as its caption.
  \*/
  static caption: boolean

/\*\*

- Contact sheet column count.
  \*/
  static columnCount: number

/\*\*

- When true, merges all layers in the resulting document.
  \*/
  static flatten: boolean

/\*\*

- Font used by captions.
  \*/
  static font: GalleryFontType

/\*\*

- Caption font size.
  \*/
  static fontSize: number

/\*\*

- Resulting document height, in pixels. Range: 100 to 2900.
  \*/
  static height: number

/\*\*

- Horizontal spacing between images, in pixels. Range: 0 to 29000.
  \*/
  static horizontal: number

/\*\*

- Document color mode setting.
  \*/
  static mode: NewDocumentMode

/\*\*

- Document resolution, measured in pixels per inch. Range: 35 to 1200.
  \*/
  static resolution: number

/\*\*

- Contact sheet row count.
  \*/
  static rowCount: number

/\*\*

- When true, spacing between contact sheet images is automatic.
  \*/
  static useAutoSpacing: boolean

/\*\*

- Vertical spacing between images, in pixels. Range: 0 to 29000.
  \*/
  static vertical: number

/\*\*

- Resulting document width, in pixels. Range: 100 to 2900.
  \*/
  static width: number
  }

/\*\*

- Settings available for a Picture Package.
  \*/
  declare class PicturePackageOptions {
  /\*\*
  - Content information value.
    \*/
    static content: PicturePackageTextType

/\*\*

- When true, merges all layers in the resulting document.
  \*/
  static flatten: boolean

/\*\*

- Font used by security text.
  \*/
  static font: GalleryFontType

/\*\*

- Font size value.
  \*/
  static fontSize: number

/\*\*

- Layout used to build the picture package.
  \*/
  static layout: string

/\*\*

- Document color mode setting.
  \*/
  static mode: NewDocumentMode

/\*\*

- Web page security text opacity percentage. Range: 0 to 100.
  \*/
  static opacity: number

/\*\*

- Document resolution, measured in pixels per inch.
  \*/
  static resolution: number

/\*\*

- Custom text for the picture package.
  \*/
  static text: string

/\*\*

- Security text color.
  \*/
  static textColor: RGBColor

/\*\*

- Security text position.
  \*/
  static textPosition: GallerySecurityTextPositionType

/\*\*

- Security text orientation.
  \*/
  static textRotate: GallerySecurityTextRotateType
  }

/\*\*

- Settings for running a Batch command.
  \*/
  declare class BatchOptions {
  /\*\*
  - Destination type for processed files.
    \*/
    static destination: BatchDestinationType

/\*\*

- Folder location for processed files. Applies only when 'destination' = folder.
  \*/
  static destinationFolder: File

/\*\*

- File used to log errors. Leave blank to display errors onscreen and stop batch processing when errors occur.
  \*/
  static errorFile: File

/\*\*

- File naming option list. Maximum: 6.
  \*/
  static fileNaming: FileNamingType[]

/\*\*

- When true, final file names are Macintosh compatible.
  \*/
  static macintoshCompatible: boolean

/\*\*

- When true, action open commands are overridden.
  \*/
  static overrideOpen: boolean

/\*\*

- When true, specified-destination save action steps are overridden.
  \*/
  static overrideSave: boolean

/\*\*

- Initial serial number used when naming files.
  \*/
  static startingSerial: number

/\*\*

- When true, file open options dialogs are suppressed.
  \*/
  static suppressOpen: boolean

/\*\*

- When true, color profile warnings are suppressed.
  \*/
  static suppressProfile: boolean

/\*\*

- When true, final file names are Unix compatible.
  \*/
  static unixCompatible: boolean

/\*\*

- When true, final file names are Windows compatible.
  \*/
  static windowsCompatible: boolean
  }

/\*\*

- Array-style container of path point info objects describing a straight or curved path segment.
  \*/
  declare class SubPathInfo {
  /\*\*
  - When true, closes the path.
    \*/
    static closed: boolean

/\*\*

- Complete path point collection for the sub path item.
  \*/
  static entireSubPath: PathPointInfo[]

/\*\*

- Sub path operation applied against other sub paths.
  \*/
  static operation: ShapeOperation
  }

/\*\*

- Path point represented by three coordinate arrays: anchor point, left direction point, and right direction point. Straight path segments use identical coordinates for all three points. Curved segements use different coordinates. The arc of the curve comes from the distance between the anchor point and the left or right direction points. The left direction point bends the curve "outward" or makes it convex; the right direction point bends it "inward" or makes it concave.
  \*/
  declare class PathPointInfo {
  /\*\*
  - x and y coordinates for one endpoint of the path segment.
    \*/
    static anchor: (Point | [number, number])[]

/\*\*

- x and y coordinates for one endpoint of the path segment.
  \*/
  anchor: (Point | [number, number])[]

/\*\*

- Point type value.
  \*/
  static kind: PointKind

/\*\*

- Point type value.
  \*/
  kind: PointKind

/\*\*

- Location for the left direction point ("in" position).
  \*/
  static leftDirection: (Point | [number, number])[]

/\*\*

- Location for the left direction point ("in" position).
  \*/
  leftDirection: (Point | [number, number])[]

/\*\*

- Location for the right direction point ("out" position).
  \*/
  static rightDirection: (Point | [number, number])[]

/\*\*

- Location for the right direction point ("out" position).
  \*/
  rightDirection: (Point | [number, number])[]
  }

/\*\*

- Key-value record used for actions, including entries from the Adobe Photoshop Actions menu. ActionDescriptor belongs to Action Manager functionality. For more information on Action Manager, see the Photoshop Scripting Guide.
  \*/
  declare class ActionDescriptor {
  /\*\*
  - Count of keys stored in the descriptor.
    \*/
    static readonly count: number

/\*\*

- Class name for the referenced ActionDescriptor object.
  \*/
  static readonly typename: string

/\*\*

- Removes all entries from the descriptor.
  \*/
  clear(): void

/\*\*

- Removes a key from the descriptor.
  \*/
  erase(key: number): void

/\*\*

- Builds a descriptor from a byte stream when reading from disk.
  \*/
  fromStream(value: string): void

/\*\*

- Reads a boolean value for key.
  \*/
  getBoolean(key: number): boolean

/\*\*

- Reads a class value for key.
  \*/
  getClass(key: number): number

/\*\*

- Reads raw byte data as a string value.
  \*/
  getData(key: number): string

/\*\*

- Reads a double value for key.
  \*/
  getDouble(key: number): number

/\*\*

- Reads the enumeration type for key.
  \*/
  getEnumerationType(key: number): number

/\*\*

- Reads the enumeration value for key.
  \*/
  getEnumerationValue(key: number): number

/\*\*

- Reads an integer value for key.
  \*/
  getInteger(key: number): number

/\*\*

- Reads the ID for the Nth key, identified by index.
  \*/
  getKey(index: number): number

/\*\*

- Reads a large integer value for key.
  \*/
  getLargeInteger(key: number): number

/\*\*

- Reads an ActionList value for key.
  \*/
  getList(key: number): ActionList

/\*\*

- Reads the class ID of an object stored under key.
  \*/
  getObjectType(key: number): number

/\*\*

- Reads an ActionDescriptor object value for key.
  \*/
  getObjectValue(key: number): ActionDescriptor

/\*\*

- Reads a File value for key.
  \*/
  getPath(key: number): File

/\*\*

- Reads an ActionReference value for key.
  \*/
  getReference(key: number): ActionReference

/\*\*

- Reads a string value for key.
  \*/
  getString(key: number): string

/\*\*

- Reads the type assigned to key.
  \*/
  getType(key: number): DescValueType

/\*\*

- Reads the unit type of a UnitDouble key.
  \*/
  getUnitDoubleType(key: number): number

/\*\*

- Reads the UnitDouble value for key.
  \*/
  getUnitDoubleValue(key: number): number

/\*\*

- Tests whether the descriptor includes the supplied key.
  \*/
  hasKey(key: number): boolean

/\*\*

- Tests whether this descriptor matches another descriptor.
  \*/
  isEqual(otherDesc: ActionDescriptor): boolean

/\*\*

- Writes a boolean value under key.
  \*/
  putBoolean(key: number, value: boolean): void

/\*\*

- Writes a class value under key.
  \*/
  putClass(key: number, value: number): void

/\*\*

- Writes raw byte data as a string value.
  \*/
  putData(key: number, value: string): void

/\*\*

- Writes a double value under key.
  \*/
  putDouble(key: number, value: number): void
