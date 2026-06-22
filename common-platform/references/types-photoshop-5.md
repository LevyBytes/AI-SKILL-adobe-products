# Photoshop (part 5)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Creates a notifier.
- @param event Event class id, either four characters or a unique string.
- @param eventFile Script file run when the event occurs.
- @param eventClass Object class receiving the event, either four characters or a unique string. When the same event can reach several object kinds, eventClass identifies which object this Notifier covers. For example, the Make event ("Mk") may target document objects ("Dcmn"), channel objects ("Chnl"), and additional object categories.
  \*/
  static add(event: string, eventFile: File, eventClass?: string): Notifier

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): Notifier

/\*\*

- Removes every element.
  \*/
  static removeAll(): void
  }

/\*\*

- Count item objects contained by the document.
  \*/
  declare class CountItems {
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
  [index: number]: CountItem

/\*\*

- Creates a count item.
- @param position Origin position.
  \*/
  static add(position: UnitPoint): CountItem

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): CountItem
  }

/\*\*

- Color sampler objects contained by the document.
  \*/
  declare class ColorSamplers {
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
  [index: number]: ColorSampler

/\*\*

- Creates a color sampler.
- @param position Horizontal and vertical (x,y) coordinates for the color sampler.
  \*/
  static add(position: UnitPoint): ColorSampler

/\*\*

- Returns the first collection element matching the supplied name.
- @param name
  \*/
  getByName(name: string): ColorSampler
  }

/\*\*

- Options accepted when a document is opened.
  \*/
  declare class OpenOptions {}

/\*\*

- DEPRECATED.
  \*/
  declare class PhotoCDOpenOptions extends OpenOptions {
  /\*\*
  - Profile used while reading the image.
    \*/
    colorProfileName: string

/\*\*

- Color space assigned to the image.
  \*/
  colorSpace: PhotoCDColorSpace

/\*\*

- Orientation of the image.
  \*/
  orientation: Orientation

/\*\*

- Image dimensions.
  \*/
  pixelSize: PhotoCDSize

/\*\*

- Image resolution, in pixels per inch.
  \*/
  resolution: number
  }

/\*\*

- Options accepted when opening a RAW-format document.
  \*/
  declare class RawFormatOpenOptions extends OpenOptions {
  /\*\*
  - Bits available for each channel. Valid values: 8 or 16.
    \*/
    bitsPerChannel: number

/\*\*

- Byte-reading order. Valid only when 'bits per channel' = 16.
  \*/
  byteOrder: ByteOrder

/\*\*

- Image channel count; allowed only when 'bits per channel' = 16. Range: 1 to 56.
  \*/
  channelNumber: number

/\*\*

- Bytes placed before actual image data begins in the file; these are zero placeholders inserted at the file start. Range: 0 to 1919999.
  \*/
  headerSize: number

/\*\*

- Image height, in pixels.
  \*/
  height: number

/\*\*

- When true, color values are stored in sequence.
  \*/
  interleaveChannels: boolean

/\*\*

- When true, saving keeps the header.
  \*/
  retainHeader: boolean

/\*\*

- Image width, in pixels.
  \*/
  width: number
  }

/\*\*

- Options accepted when opening a generic PDF document.
  \*/
  declare class GenericPDFOpenOptions extends OpenOptions {
  /\*\*
  - When true, anti-aliasing is enabled.
    \*/
    antiAlias: boolean

/\*\*

- Bits used for each channel.
  \*/
  bitsPerChannel: BitsPerChannelType

/\*\*

- DEPRECATED.
  \*/
  constrainProportions: boolean

/\*\*

- Cropping method selection.
  \*/
  cropPage: CropToType

/\*\*

- DEPRECATED.
  \*/
  height: UnitValue | number

/\*\*

- Document mode setting.
  \*/
  mode: OpenDocumentMode

/\*\*

- Document name.
  \*/
  name: string

/\*\*

- Number of the 3d object that will be opened.
  \*/
  object: number

/\*\*

- Page or image number selected for opening.
  \*/
  page: number

/\*\*

- Document resolution, in pixels per inch.
  \*/
  resolution: number

/\*\*

- When true, warnings that occur while opening are suppressed.
  \*/
  suppressWarnings: boolean

/\*\*

- When true, the page property value is treated as a page number. When false, that value identifies an image number.
  \*/
  use3DObjectNumber: boolean

/\*\*

- When true, the page property value is treated as a page number. When false, that value identifies an image number.
  \*/
  usePageNumber: boolean

/\*\*

- DEPRECATED.
  \*/
  width: UnitValue | number
  }

/\*\*

- Options accepted when opening a generic EPS document.
  \*/
  declare class GenericEPSOpenOptions extends OpenOptions {
  /\*\*
  - When true, anti-aliasing is enabled.
    \*/
    antiAlias: boolean

/\*\*

- When true, image proportions are constrained.
  \*/
  constrainProportions: boolean

/\*\*

- Image height.
  \*/
  height: UnitValue | number

/\*\*

- Document mode setting.
  \*/
  mode: OpenDocumentMode

/\*\*

- Document resolution, in pixels per inch.
  \*/
  resolution: number

/\*\*

- Width value for the image.
  \*/
  width: UnitValue | number
  }

/\*\*

- DICOM document opening options.
  \*/
  declare class DICOMOpenOptions extends OpenOptions {
  /\*\*
  - When true, patient information is anonymized.
    \*/
    anonymize: boolean

/\*\*

- Column count in an n-up configuration.
  \*/
  columns: number

/\*\*

- When true, the image is inverted.
  \*/
  reverse: boolean

/\*\*

- Row count in an n-up configuration.
  \*/
  rows: number

/\*\*

- When true, overlays are displayed when available.
  \*/
  showOverlays: boolean

/\*\*

- Image contrast in Houndsfield units.
  \*/
  windowLevel: number

/\*\*

- Brightness value measured in Houndsfield units.
  \*/
  windowWidth: number
  }

/\*\*

- Camera RAW document opening options.
  \*/
  declare class CameraRAWOpenOptions extends OpenOptions {
  /\*\*
  - Bits used for each channel.
    \*/
    bitsPerChannel: BitsPerChannelType

/\*\*

- Blue hue adjustment for the shot. Range: -100 to 100.
  \*/
  blueHue: number

/\*\*

- Blue saturation adjustment for the shot. Range: -100 to 100.
  \*/
  blueSaturation: number

/\*\*

- Brightness adjustment for the shot. Range: 0 to 150.
  \*/
  brightness: number

/\*\*

- Chromatic aberration B/Y adjustment for the shot. Range: -100 to 100.
  \*/
  chromaticAberrationBY: number

/\*\*

- Chromatic aberration R/C adjustment for the shot. Range: -100 to 100.
  \*/
  chromaticAberrationRC: number

/\*\*

- Color noise reduction applied to the shot. Range: 0 to 100.
  \*/
  colorNoiseReduction: number

/\*\*

- Color space assigned to the image.
  \*/
  colorSpace: ColorSpaceType

/\*\*

- Contrast adjustment for the shot. Range: -50 to 100.
  \*/
  contrast: number

/\*\*

- Exposure adjustment for the shot. Range: -4.0 to 4.0.
  \*/
  exposure: number

/\*\*

- Green hue adjustment for the shot. Range: -100 to 100.
  \*/
  greenHue: number

/\*\*

- Green saturation adjustment for the shot. Range: -100 to 100.
  \*/
  greenSaturation: number

/\*\*

- Luminance smoothing applied to the shot. Range: 0 to 100.
  \*/
  luminanceSmoothing: number

/\*\*

- Red hue adjustment for the shot. Range: -100 to 100.
  \*/
  redHue: number

/\*\*

- Red saturation adjustment for the shot. Range: -100 to 100.
  \*/
  redSaturation: number

/\*\*

- Document resolution, in pixels per inch.
  \*/
  resolution: number

/\*\*

- Saturation adjustment for the shot. Range: -100 to 100.
  \*/
  saturation: number

/\*\*

- Global settings applied to all Camera RAW options.
  \*/
  settings: CameraRAWSettingsType

/\*\*

- Shadow tint adjustment for the shot. Range: -100 to 100.
  \*/
  shadowTint: number

/\*\*

- Shadow adjustment for the shot. Range: 0 to 100.
  \*/
  shadows: number

/\*\*

- Sharpness adjustment for the shot. Range: 0 to 100.
  \*/
  sharpness: number

/\*\*

- Size for the new document.
  \*/
  size: CameraRAWSize

/\*\*

- Temperature adjustment for the shot. Range: 2000 to 50000.
  \*/
  temperature: number

/\*\*

- Tint adjustment for the shot. Range: -150 to 150.
  \*/
  tint: number

/\*\*

- Vignetting amount adjustment for the shot. Range: -100 to 100.
  \*/
  vignettingAmount: number

/\*\*

- Vignetting midpoint adjustment for the shot. Range: -100 to 100.
  \*/
  vignettingMidpoint: number

/\*\*

- White balance choices for the image.
  \*/
  whiteBalance: WhiteBalanceType
  }

/\*\*

- File-saving behavior options.
  \*/
  declare enum SaveOptions {
  /\*\*
  - Leave changes unsaved.
    \*/
    DONOTSAVECHANGES = 2,

/\*\*

- Prompt the user about saving.
  \*/
  PROMPTTOSAVECHANGES = 3,

/\*\*

- Write changes to storage.
  \*/
  SAVECHANGES = 1,
  }

/\*\*

- Save settings for a Photoshop document.
  \*/
  declare class PhotoshopSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean

/\*\*

- When true, annotations are saved.
  \*/
  annotations: boolean

/\*\*

- When true, the document embeds the color profile.
  \*/
  embedColorProfile: boolean

/\*\*

- When true, layers are saved.
  \*/
  layers: boolean

/\*\*

- When true, spot colors are saved.
  \*/
  spotColors: boolean
  }

/\*\*

- Save settings for a BMP-format document.
  \*/
  declare class BMPSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean

/\*\*

- Bits used for each sample.
  \*/
  depth: BMPDepthType

/\*\*

- When true, the image is written bottom-to-top.
  \*/
  flipRowOrder: boolean

/\*\*

- Target operating system.
  \*/
  osType: OperatingSystem

/\*\*

- When true, RLE compression is enabled.
  \*/
  rleCompression: boolean
  }

/\*\*

- Save settings for a GIF-format document.
  \*/
  declare class GIFSaveOptions {
  /\*\*
  - Palette color count. Not valid for every palette type.
    \*/
    colors: number

/\*\*

- Dither type.
  \*/
  dither: Dither

/\*\*

- Dither amount. Applies only when 'dither type' is diffusion. Range: 1 to 100.
  \*/
  ditherAmount: number

/\*\*

- Color type forced into the palette.
  \*/
  forced: ForcedColors

/\*\*

- When true, rows are interlaced.
  \*/
  interlaced: boolean

/\*\*

- Color filling anti-aliased edges next to transparent image areas. Default: white.
  \*/
  matte: MatteType

/\*\*

- Palette type selection.
  \*/
  palette: PaletteType

/\*\*

- When true, image colors with color-table entries are protected from dithering. Valid only when 'dither' = diffusion.
  \*/
  preserveExactColors: boolean

/\*\*

- When true, transparent areas are preserved during GIF conversion.
  \*/
  transparency: boolean
  }

/\*\*

- Save settings for an EPS-format document.
  \*/
  declare class EPSSaveOptions {
  /\*\*
  - When true, the document embeds the color profile.
    \*/
    embedColorProfile: boolean

/\*\*

- Encoding type used for the document.
  \*/
  encoding: SaveEncoding

/\*\*

- When true, the halftone screen is included.
  \*/
  halftoneScreen: boolean

/\*\*

- When true, image interpolation is used.
  \*/
  interpolation: boolean

/\*\*

- Preview type.
  \*/
  preview: Preview

/\*\*

- When true, PostScript color management is used.
  \*/
  psColorManagement: boolean

/\*\*

- When true, transfer functions are included to compensate for dot gain between the image and film.
  \*/
  transferFunction: boolean

/\*\*

- When true, white areas display as transparent. Valid only for documents in BitMap mode.
  \*/
  transparentWhites: boolean

/\*\*

- When true, vector data is included. Applies only if the document contains vector data (un-rasterized text).
  \*/
  vectorData: boolean
  }

/\*\*

- Save settings for a JPEG-format document.
  \*/
  declare class JPEGSaveOptions {
  /\*\*
  - When true, the document embeds the color profile.
    \*/
    embedColorProfile: boolean

/\*\*

- Download format selection.
  \*/
  formatOptions: FormatOptions

/\*\*

- Color filling anti-aliased edges next to transparent image areas. Default: white.
  \*/
  matte: MatteType

/\*\*

- Produced image quality.
  \*/
  quality: number

/\*\*

- Scan count. Valid only for progressive type JPEG files.
  \*/
  scans: number
  }

/\*\*

- Save settings for a PDF-format document.
  \*/
  declare class PDFSaveOptions {
  /\*\*
  - PDF version targeted for document compatibility.
    \*/
    PDFCompatibility: PDFCompatibility

/\*\*

- PDF standard targeted for document compatibility.
  \*/
  PDFStandard: PDFStandard

/\*\*

- When true, alpha channels are saved.
  \*/
  alphaChannels: boolean

/\*\*

- When true, annotations are saved.
  \*/
  annotations: boolean

/\*\*

- When true, the color profile is converted to the destination profile.
  \*/
  colorConversion: boolean

/\*\*

- When true, a 16-bit image is converted to 8-bit for broader compatibility with other applications.
  \*/
  convertToEightBit: boolean

/\*\*

- Description text for the active save options.
  \*/
  description: string

/\*\*

- Output device target for final RGB or CMYK, for example a monitor or press standard.
  \*/
  destinationProfile: string

/\*\*

- Downsampling method selection.
  \*/
  downSample: PDFResample

/\*\*

- Target size, in pixels per inch, used when downsampling images that exceed the 'down sample size limit' value.
  \*/
  downSampleSize: number

/\*\*

- Images must be above this pixels-per-inch value before downsampling or subsampling applies.
  \*/
  downSampleSizeLimit: number

/\*\*

- Deprecated; controls whether the embedded color profile should be downgraded to version 2.
  \*/
  downgradeColorProfile: boolean

/\*\*

- When true, the document embeds the color profile.
  \*/
  embedColorProfile: boolean

/\*\*

- Deprecated; controls font embedding and applies only when a text layer is included.
  \*/
  embedFonts: boolean

/\*\*

- When true, a small preview image is embedded in Acrobat.
  \*/
  embedThumbnail: boolean

/\*\*

- Encoding method selection.
  \*/
  encoding: PDFEncoding

/\*\*

- DEPRECATED. ( use image interpolation? )
  \*/
  interpolation: boolean

/\*\*

- Produced image quality. Applies only to JPEG-encoded PDF documents. Range: 0 to 12.
  \*/
  jpegQuality: number

/\*\*

- When true, layers are saved.
  \*/
  layers: boolean

/\*\*

- When true, PDF performance on Web servers is improved.
  \*/
  optimizeForWeb: boolean

/\*\*

- Optional comment field for output-condition descriptions. The PDF/X file stores this text.
  \*/
  outputCondition: string

/\*\*

- Output-condition identifier.
  \*/
  outputConditionID: string

/\*\*

- When true, the PDF can be reopened in Photoshop with native Photoshop data intact.
  \*/
  preserveEditing: boolean

/\*\*

- Preset file used for settings; it overrides other settings.
  \*/
  presetFile: string

/\*\*

- When true, profile inclusion choices are shown.
  \*/
  profileInclusionPolicy: boolean

/\*\*

- Registration URL for the output condition.
  \*/
  registryName: string

/\*\*

- When true, spot colors are saved.
  \*/
  spotColors: boolean

/\*\*

- Compression option used with JPEG2000 encoding.
  \*/
  tileSize: number

/\*\*

- DEPRECATED.
  \*/
  transparency: boolean

/\*\*

- Deprecated; text outline handling applies only with included vector data.
  \*/
  useOutlines: boolean

/\*\*

- DEPRECATED. ( include vector data )
  \*/
  vectorData: boolean

/\*\*

- When true, the saved PDF opens in Acrobat.
  \*/
  view: boolean
  }

/\*\*

- Save settings for a PICT-format document.
  \*/
  declare class PICTFileSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    static alphaChannels: boolean

/\*\*

- Compression method.
  \*/
  static compression: PICTCompression

/\*\*

- When true, the document embeds the color profile.
  \*/
  static embedColorProfile: boolean

/\*\*

- Bits per pixel.
  \*/
  static resolution: PICTBitsPerPixels
  }

/\*\*

- Save settings for a document as a PICT resource file.
  \*/
  declare class PICTResourceSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean

/\*\*

- Compression type.
  \*/
  compression: PICTCompression

/\*\*

- When true, the document embeds the color profile.
  \*/
  embedColorProfile: boolean

/\*\*

- PICT resource name.
  \*/
  name: string

/\*\*

- Bits per pixel.
  \*/
  resolution: PICTBitsPerPixels

/\*\*

- PICT resource ID.
  \*/
  resourceID: number
  }

/\*\*

- Save settings for a Pixar-format document.
  \*/
  declare class PixarSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean
    }

/\*\*

- Save settings for a PNG-format document.
  \*/
  declare class PNGSaveOptions {
  /\*\*
  - Compression applied to the image.
    \*/
    compression: number

/\*\*

- When true, rows are interlaced.
  \*/
  interlaced: boolean
  }

/\*\*

- Save settings for a RAW-format document.
  \*/
  declare class RawSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean

/\*\*

- When true, spot colors are saved.
  \*/
  spotColors: boolean
  }

/\*\*

- Save settings for an SGI RGB-format document.
  \*/
  declare class SGIRGBSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean

/\*\*

- When true, spot colors are saved.
  \*/
  spotColors: boolean
  }

/\*\*

- Save settings for a TGA (Targa)-format document.
  \*/
  declare class TargaSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean

/\*\*

- Bits per pixel.
  \*/
  resolution: TargaBitsPerPixels

/\*\*

- When true, RLE compression is enabled.
  \*/
  rleCompression: boolean
  }

/\*\*

- Save settings for a TIFF-format document.
  \*/
  declare class TiffSaveOptions {
  /\*\*
  - When true, alpha channels are saved.
    \*/
    alphaChannels: boolean

/\*\*

- When true, annotations are saved.
  \*/
  annotations: boolean

/\*\*

- Byte-reading order. Defaults are Mac OS on Mac OS and IBM PC on Windows.
  \*/
  byteOrder: ByteOrder

/\*\*

- When true, the document embeds the color profile.
  \*/
  embedColorProfile: boolean

/\*\*

- Compression type.
  \*/
  imageCompression: TIFFEncoding

/\*\*

- When true, image channels are interleaved.
  \*/
  interleaveChannels: boolean

/\*\*

- Produced image quality; higher JPEG compression lowers this value. Applies only to JPEG-compressed TIFF documents. Range: 0 to 12.
  \*/
  jpegQuality: number

/\*\*

- Compression method used when saving layers instead of composite data. Valid only when 'layers' = true.
  \*/
  layerCompression: LayerCompression

/\*\*

- When true, layers are saved.
  \*/
  layers: boolean

/\*\*

- When true, multi-resolution information is preserved.
  \*/
  saveImagePyramid: boolean

/\*\*

- When true, spot colors are saved.
  \*/
  spotColors: boolean

/\*\*

- When true, transparency is saved as an additional alpha channel for use when another application opens the file.
  \*/
  transparency: boolean
  }

/\*\*

- Save settings for a Photoshop DCS 1.0-format document.
  \*/
  declare class `DCS1_S`aveOptions {
  /\*\*
  - DCS type.
    \*/
    DCS: DCSType

/\*\*

- When true, the document embeds the color profile.
  \*/
  embedColorProfile: boolean

/\*\*

- Encoding type used for the document.
  \*/
  encoding: SaveEncoding

/\*\*

- When true, halftone screen data is included.
  \*/
  halftoneScreen: boolean

/\*\*

- When true, image interpolation is used.
  \*/
  interpolation: boolean

/\*\*

- Preview type.
  \*/
  preview: Preview

/\*\*

- When true, transfer functions are included to compensate for dot gain between the image and film.
  \*/
  transferFunction: boolean

/\*\*

- When true, vector data is included. Applies only if the document contains vector data (un-rasterized text).
  \*/
  vectorData: boolean
  }

/\*\*

- Save settings for a Photoshop DCS 2.0-format document.
  \*/
  declare class `DCS2_S`aveOptions {
  /\*\*
  - DCS type.
    \*/
    DCS: DCSType

/\*\*

- When true, the document embeds the color profile.
  \*/
  embedColorProfile: boolean

/\*\*

- Encoding type used for the document.
  \*/
  encoding: SaveEncoding

/\*\*

- When true, halftone screen data is included.
  \*/
  halftoneScreen: boolean

/\*\*

- When true, image interpolation is used.
  \*/
  interpolation: boolean

/\*\*

- When true, color channels are saved as multiple files.
  \*/
  multiFileDCS: boolean

/\*\*

- Preview type.
  \*/
  preview: Preview

/\*\*

- When true, spot colors are saved.
  \*/
  spotColors: boolean

/\*\*

- When true, transfer functions are included to compensate for dot gain between the image and film.
  \*/
  transferFunction: boolean

/\*\*

- When true, vector data is included. Applies only if the document contains vector data (un-rasterized text).
  \*/
  vectorData: boolean
  }

/\*\*

- Export option base object.
  \*/
  declare class ExportOptions {}

/\*\*

- Export settings for Illustrator paths.
  \*/
  declare class ExportOptionsIllustrator extends ExportOptions {
  /\*\*
  - Path selected for export.
    \*/
    path: IllustratorPathType

/\*\*

- Path name selected for export. Valid only for named paths.
  \*/
  pathName: string
  }

/\*\*

- Export settings for Save For Web files.
  \*/
  declare class ExportOptionsSaveForWeb extends ExportOptions {
  /\*\*
  - When true, uses 8 bits. When false, uses 24 bits. Valid only when 'format' = PNG.
    \*/
    PNG8: boolean

/\*\*

- Blur amount applied to the image to reduce artifacts.
  \*/
  blur: number

/\*\*

- Color reduction algorithm.
  \*/
  colorReduction: ColorReductionType

/\*\*

- Palette color count.
  \*/
  colors: number

/\*\*

- Dither type.
  \*/
  dither: Dither
