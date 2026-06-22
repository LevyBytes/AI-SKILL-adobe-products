# Illustrator (part 6)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Position of the tab stop expressed in points.
  \*/
  static position: number
  }

/\*\*

- Represents installed printer.
  \*/
  declare class Printer {
  /\*\*
  - Printer name.
    \*/
    static name: string

/\*\*

- Printer information.
  \*/
  static printerInfo: PrinterInfo
  }

/\*\*

- Reference note: printer information.
  \*/
  declare class PrinterInfo {
  /\*\*
  - Whether the printer support binary printing.
    \*/
    static binaryPrintingSupport: boolean

/\*\*

- Printer color capability.
  \*/
  static colorSupport: PrinterColorMode

/\*\*

- Whether the printer support custom paper size.
  \*/
  static customPaperSupport: boolean

/\*\*

- Whether the printer support custom paper transverse.
  \*/
  static customPaperTransverseSupport: boolean

/\*\*

- Printer default resolution.
  \*/
  static deviceResolution: number

/\*\*

- Whether the printer support InRIP color separation.
  \*/
  static inRIPSeparationSupport: boolean

/\*\*

- Printer maximum device resolution.
  \*/
  static maxDeviceResolution: number

/\*\*

- Reference note: custom paper's maximum height.
  \*/
  static maxPaperHeight: number

/\*\*

- Reference note: custom paper's maximum height offset.
  \*/
  static maxPaperHeightOffset: number

/\*\*

- Reference note: custom paper's maximum width.
  \*/
  static maxPaperWidth: number

/\*\*

- Reference note: custom paper's maximum width offset.
  \*/
  static maxPaperWidthOffset: number

/\*\*

- Reference note: custom paper's minimum height.
  \*/
  static minPaperHeight: number

/\*\*

- Reference note: custom paper's minimum height offset.
  \*/
  static minPaperHeightOffset: number

/\*\*

- Reference note: custom paper's minimum width.
  \*/
  static minPaperWidth: number

/\*\*

- Reference note: custom paper's minimum width offset.
  \*/
  static minPaperWidthOffset: number

/\*\*

- List of supported paper sizes.
  \*/
  static paperSizes: Paper[]

/\*\*

- PostScript level.
  \*/
  static postScriptLevel: PrinterPostScriptLevelEnum

/\*\*

- Printer type.
  \*/
  static printerType: PrinterTypeEnum
  }

/\*\*

- Represents PPD file.
  \*/
  declare class PPDFile {
  /\*\*
  - PPD file information.
    \*/
    static PPDInfo: PPDFileInfo

/\*\*

- PPD model name.
  \*/
  static name: string
  }

/\*\*

- Reference note: pPD file information.
  \*/
  declare class PPDFileInfo {
  /\*\*
  - PPD file path specification.
    \*/
    static PPDFilePath: File

/\*\*

- PostScript language level.
  \*/
  static languageLevel: string

/\*\*

- Reference note: list of color separation screens.
  \*/
  static screenList: Screen[]

/\*\*

- Reference note: list of color separation screen spot functions.
  \*/
  static screenSpotFunctionList: ScreenSpotFunction[]
  }

/\*\*

- Reference note: paper size.
  \*/
  declare class Paper {
  /\*\*
  - Paper name.
    \*/
    static name: string

/\*\*

- Paper information.
  \*/
  static paperInfo: PaperInfo
  }

/\*\*

- Reference note: paper information.
  \*/
  declare class PaperInfo {
  /\*\*
  - Whether it a custom paper.
    \*/
    static customPaper: boolean

/\*\*

- Reference note: the paper's height (in points)
  \*/
  static height: number

/\*\*

- Imageable area.
  \*/
  static imageableArea: Rect

/\*\*

- Reference note: the paper's width (in points)
  \*/
  static width: number
  }

/\*\*

- Reference note: color separation screen.
  \*/
  declare class Screen {
  /\*\*
  - Color separation screen name.
    \*/
    static name: string

/\*\*

- Color separation screen information.
  \*/
  static screenInfo: ScreenInfo
  }

/\*\*

- Reference note: screen information.
  \*/
  declare class ScreenInfo {
  /\*\*
  - Reference note: the screen's angle (in degrees)
    \*/
    static angle: number

/\*\*

- Whether it the default screen.
  \*/
  static defaultScreen: boolean

/\*\*

- Screen's frequency.
  \*/
  static frequency: number
  }

/\*\*

- Reference note: color separation screen spot function.
  \*/
  declare class ScreenSpotFunction {
  /\*\*
  - Color separation screen spot function name.
    \*/
    static name: string

/\*\*

- Spot function in terms of the PostScript commands.
  \*/
  static spotFunction: string
  }

/\*\*

- Reference note: printer's ink.
  \*/
  declare class Ink {
  /\*\*
  - Ink information.
    \*/
    static inkInfo: InkInfo

/\*\*

- Ink's name.
  \*/
  static name: string
  }

/\*\*

- Reference note: ink information.
  \*/
  declare class InkInfo {
  /\*\*
  - Reference note: the ink's screen angle (in degrees)
    \*/
    static angle: number

/\*\*

- Color of the custom ink.
  \*/
  static customColor: Color

/\*\*

- Neutral density.
  \*/
  static density: number

/\*\*

- Dot shape name.
  \*/
  static dotShape: string

/\*\*

- Ink's frequency.
  \*/
  static frequency: number

/\*\*

- Ink type.
  \*/
  static kind: InkType

/\*\*

- Ink printing status.
  \*/
  static printingStatus: InkPrintStatus

/\*\*

- Trapping type.
  \*/
  static trapping: TrappingType

/\*\*

- Order of trapping for the ink.
  \*/
  static trappingOrder: number
  }

/\*\*

- New-document preset used when creating a new document.
  \*/
  declare class DocumentPreset {
  /\*\*
  - Reference note: layout for artboards.
    \*/
    static artboardLayout: DocumentArtboardLayout

/\*\*

- For artboards.Range row layouts, this is 1 to (docNumArtboards - 1), or 1 for a single-row or single-column layout; column layouts use the equivalent column count.
  \*/
  static artboardRowsOrCols: number

/\*\*

- Distance between artboards.
  \*/
  static artboardSpacing: number

/\*\*

- Specifies the color mode for the new document.
  \*/
  static colorMode: DocumentColorSpace

/\*\*

- Specifies the height for the new document.
  \*/
  static height: number

/\*\*

- Specifies: Number of artboards for new document.Range (1:100).
  \*/
  static numArtboards: number

/\*\*

- Specifies the preview mode for the new document.
  \*/
  static previewMode: DocumentPreviewMode

/\*\*

- Specifies the raster resolution for the new document.
  \*/
  static rasterResolution: DocumentRasterResolution

/\*\*

- Specifies the title for the new document.
  \*/
  static title: string

/\*\*

- Specifies the transparency grid for the new document.
  \*/
  static transparencyGrid: DocumentTransparencyGrid

/\*\*

- Specifies the units for the new document.
  \*/
  static units: RulerUnits

/\*\*

- Specifies the width for the new document.
  \*/
  static width: number
  }

/\*\*

- Specifies the print options.
  \*/
  declare class PrintOptions {
  /\*\*
  - Specifies the name of the PPD to use.
    \*/
    static PPDName: string

/\*\*

- Specifies the printing color management options.
  \*/
  static colorManagementOptions: PrintColorManagementOptions

/\*\*

- Specifies the printing color separation options.
  \*/
  static colorSeparationOptions: PrintColorSeparationOptions

/\*\*

- Specifies the printing coordinate options.
  \*/
  static coordinateOptions: PrintCoordinateOptions

/\*\*

- Specifies the printing flattener options.
  \*/
  static flattenerOptions: PrintFlattenerOptions

/\*\*

- Specifies the transparency flattener preset name.
  \*/
  static flattenerPreset: string

/\*\*

- Specifies the printing font options.
  \*/
  static fontOptions: PrintFontOptions

/\*\*

- Specifies the printing job options.
  \*/
  static jobOptions: PrintJobOptions

/\*\*

- Specifies the printing page marks options.
  \*/
  static pageMarksOptions: PrintPageMarksOptions

/\*\*

- Specifies the paper options.
  \*/
  static paperOptions: PrintPaperOptions

/\*\*

- Specifies the printing PostScript options.
  \*/
  static postScriptOptions: PrintPostScriptOptions

/\*\*

- Specifies the name of a print preset to use.
  \*/
  static printPreset: string

/\*\*

- Specifies the name of the printer to print to.
  \*/
  static printerName: string
  }

/\*\*

- Specifies the paper options.
  \*/
  declare class PrintPaperOptions {
  /\*\*
  - Custom-paper height, in points.
    \*/
    static height: number

/\*\*

- Specifies the paper's name.
  \*/
  static name: string

/\*\*

- Custom-paper offset, in points.
  \*/
  static offset: number

/\*\*

- Toggles 90 degrees artwork rotation on custom paper.
  \*/
  static transverse: boolean

/\*\*

- Custom-paper width, in points.
  \*/
  static width: number
  }

/\*\*

- Specifies the print job options.
  \*/
  declare class PrintJobOptions {
  /\*\*
  - Specifies: Artboard Range to be printed if PrintAllArtboards is false.
    \*/
    static artboardRange: string

/\*\*

- Specifies the bitmap resolution.
  \*/
  static bitmapResolution: number

/\*\*

- Controls whether to collate print pages.
  \*/
  static collate: boolean

/\*\*

- Specifies the number of copies to print.
  \*/
  static copies: number

/\*\*

- Specifies the layers/objects to be printed.
  \*/
  static designation: PrintArtworkDesignation

/\*\*

- Specifies the file to be printed to.
  \*/
  static file: File

/\*\*

- Specifies the print job name.
  \*/
  static name: string

/\*\*

- Controls whether to print all artboards.
  \*/
  static printAllArtboards: boolean

/\*\*

- Specifies the printing bounds.
  \*/
  static printArea: PrintingBounds

/\*\*

- Controls whether to print as bitmap.
  \*/
  static printAsBitmap: boolean

/\*\*

- Prints pages in reverse order.
  \*/
  static reversePages: boolean
  }

/\*\*

- Options for print color separation.
  \*/
  declare class PrintColorSeparationOptions {
  /\*\*
  - Specifies the color separation type.
    \*/
    static colorSeparationMode: PrintColorSeparationMode

/\*\*

- Toggles conversion of spot colors to process colors.
  \*/
  static convertSpotColors: boolean

/\*\*

- Specifies the list of inks for color separation.
  \*/
  static inkList: Ink[]

/\*\*

- Controls whether to overprint in black.
  \*/
  static overPrintBlack: boolean
  }

/\*\*

- Specifies the print coordinate options.
  \*/
  declare class PrintCoordinateOptions {
  /\*\*
  - Controls whether to flip artwork horizontally.
    \*/
    static emulsion: boolean

/\*\*

- Toggles proportional scaling so artwork fits the page.
  \*/
  static fitToPage: boolean

/\*\*

- Horizontal scale percentage; 100 = 100%.
  \*/
  static horizontalScale: number

/\*\*

- Specifies the artwork orientation.
  \*/
  static orientation: PrintOrientation

/\*\*

- Specifies the artwork position on media.
  \*/
  static position: PrintPosition

/\*\*

- Specifies the page tiling mode.
  \*/
  static tiling: PrintTiling

/\*\*

- Vertical scale percentage; 100 = 100%.
  \*/
  static verticalScale: number
  }

/\*\*

- Specifies the page marks options.
  \*/
  declare class PrintPageMarksOptions {
  /\*\*
  - Specifies the bleed offset rect.
    \*/
    static bleedOffsetRect: Rect

/\*\*

- Controls whether to enable color bars printing.
  \*/
  static colorBars: boolean

/\*\*

- Specifies the page marks offset rect.
  \*/
  static marksOffsetRect: Rect

/\*\*

- Controls whether to enable page info marks printing.
  \*/
  static pageInfoMarks: boolean

/\*\*

- Specifies the page marks style.
  \*/
  static pageMarksType: PageMarksTypes

/\*\*

- Controls whether to enable registration marks printing.
  \*/
  static registrationMarks: boolean

/\*\*

- Controls whether to enable trim marks printing.
  \*/
  static trimMarks: boolean

/\*\*

- Trim-mark stroke weight.
  \*/
  static trimMarksWeight: number
  }

/\*\*

- Specifies the font options for printing.
  \*/
  declare class PrintFontOptions {
  /\*\*
  - Specifies the font download mode.
    \*/
    static downloadFonts: PrintFontDownloadMode

/\*\*

- Specifies the font substitution policy.
  \*/
  static fontSubstitution: FontSubstitutionPolicy
  }

/\*\*

- Specifies the PostScript options.
  \*/
  declare class PrintPostScriptOptions {
  /\*\*
  - Controls whether to print in binary mode.
    \*/
    static binaryPrinting: boolean

/\*\*

- Uses PostScript level 1-compatible output for gradients and gradient mesh printing.
  \*/
  static compatibleShading: boolean

/\*\*

- Controls whether to force continuous tone.
  \*/
  static forceContinuousTone: boolean

/\*\*

- Specifies the image compression type.
  \*/
  static imageCompression: PostScriptImageCompressionType

/\*\*

- Controls whether to print in negative mode.
  \*/
  static negativePrinting: boolean

/\*\*

- Specifies the PostScript language level.
  \*/
  static postScriptLevel: PrinterPostScriptLevelEnum

/\*\*

- Specifies the shading resolution.
  \*/
  static shadingResolution: number
  }

/\*\*

- Specifies the color management options.
  \*/
  declare class PrintColorManagementOptions {
  /\*\*
  - Specifies the color management profile mode.
    \*/
    static colorProfileMode: PrintColorProfile

/\*\*

- Specifies the color management intent type.
  \*/
  static intent: PrintColorIntent

/\*\*

- Specifies the color management profile name.
  \*/
  static name: string
  }

/\*\*

- Specifies the transparency flattening options.
  \*/
  declare class PrintFlattenerOptions {
  /\*\*
  - Controls whether to clip complex regions.
    \*/
    static clipComplexRegions: boolean

/\*\*

- Controls whether to convert all strokes to outlines.
  \*/
  static convertStrokesToOutlines: boolean

/\*\*

- Controls whether to convert all text to outlines.
  \*/
  static convertTextToOutlines: boolean

/\*\*

- Specifies the flattening balance.
  \*/
  static flatteningBalance: number

/\*\*

- Specifies the gradient resolution.
  \*/
  static gradientResolution: number

/\*\*

- Overprint setting.
  \*/
  static overprint: PDFOverprint

/\*\*

- Specifies the rasterization resolution.
  \*/
  static rasterizationResolution: number
  }

/\*\*

- Options accepted when a portion of the artwork is captured as a 24 bit PNG file.
  \*/
  declare class ImageCaptureOptions {
  /\*\*
  - Controls whether the resulting image is antialiased.
    \*/
    static antiAliasing: boolean

/\*\*

- Controls whether the artboard is matted with a color.
  \*/
  static matte: boolean

/\*\*

- Artboard matte color; default: white.
  \*/
  static matteColor: RGBColor

/\*\*

- Specifies the resolution of the captured image file.
  \*/
  static resolution: number

/\*\*

- Controls whether the resulting image uses transparency.
  \*/
  static transparency: boolean
  }

/\*\*

- Specifies the document raster effects settings.
  \*/
  declare class RasterEffectOptions {
  /\*\*
  - Controls whether the resulting image is antialiased.
    \*/
    static antiAliasing: boolean

/\*\*

- Controls whether the resulting image receives a clipping mask.
  \*/
  static clippingMask: boolean

/\*\*

- Specifies the color model for the rasterization.
  \*/
  static colorModel: RasterizationColorModel

/\*\*

- Toggles conversion of spot colors to process colors for the resulting image.
  \*/
  static convertSpotColors: boolean

/\*\*

- White-space amount, in points, added around the object while rasterizing.
  \*/
  static padding: number

/\*\*

- Specifies: The rasterization resolution in dots-per-inch (dpi)
  \*/
  static resolution: number

/\*\*

- Controls whether the resulting image uses transparency.
  \*/
  static transparency: boolean
  }

/\*\*

- Specifies: Options which may be supplied when rasterizing the artwork.
  \*/
  declare class RasterizeOptions {
  /\*\*
  - Specifies the type of antialiasing method.
    \*/
    static antiAliasingMethod: AntiAliasingMethod

/\*\*

- Controls whether rasterization uses a black background instead of white.
  \*/
  static backgroundBlack: boolean

/\*\*

- Controls whether the resulting image receives a clipping mask.
  \*/
  static clippingMask: boolean

/\*\*

- Specifies the color model for the rasterization.
  \*/
  static colorModel: RasterizationColorModel

/\*\*

- Toggles conversion of spot colors to process colors for the resulting image.
  \*/
  static convertSpotColors: boolean

/\*\*

- Controls whether all text is converted to outlines before rasterization.
  \*/
  static convertTextToOutlines: boolean

/\*\*

- Indicates whether the resulting image should include layer attributes, such as opacity and blend mode.
  \*/
  static includeLayers: boolean

/\*\*

- White-space amount, in points, added around the object while rasterizing.
  \*/
  static padding: number

/\*\*

- Specifies: The rasterization resolution in dots-per-inch (dpi)
  \*/
  static resolution: number

/\*\*

- Controls whether the resulting image uses transparency.
  \*/
  static transparency: boolean
  }

/\*\*

- Represents the Adobe Illustrator application.
  \*/
  declare class Application {
  /\*\*
  - Available PDF preset names.
    \*/
    readonly PDFPresetsList: string[]

/\*\*

- Lists PPD files that can be used; to keep lookups fast, each PPDFile entry carries only the PPD file model name and file spec.
  \*/
  readonly PPDFileList: PPDFile[]

/\*\*

- Specifies the active document.
  \*/
  activeDocument: Document

/\*\*

- Indicates whether a web browser is available.
  \*/
  readonly browserAvailable: boolean

/\*\*

- Specifies the build number of the Adobe Illustrator application.
  \*/
  readonly buildNumber: string

/\*\*

- Available color settings files.
  \*/
  readonly colorSettingsList: File[]

/\*\*

- Coordinate System used by the script.
  \*/
  coordinateSystem: CoordinateSystem

/\*\*

- Default color settings file for the current application locale.
  \*/
  readonly defaultColorSettings: File

/\*\*

- Specifies the open documents.
  \*/
  readonly documents: Documents

/\*\*

- Available flattener style names.
  \*/
  readonly flattenerPresetsList: string[]

/\*\*

- Unused memory in the Adobe Illustrator partition.
  \*/
  readonly freeMemory: number

/\*\*

- Specifies the Locale of the Adobe Illustrator application.
  \*/
  readonly locale: string

/\*\*

- Specifies the application's name.
  \*/
  readonly name: string

/\*\*

- Specifies the object's container.
  \*/
  readonly parent: object

/\*\*

- Indicates whether paste operation remember layers structure.
  \*/
  pasteRemembersLayers: boolean

/\*\*

- Application path specification.
  \*/
  readonly path: File

/\*\*

- Illustrator preferences.
  \*/
  readonly preferences: Preferences

/\*\*

- Available print preset names.
  \*/
  readonly printPresetsList: string[]

/\*\*

- Specifies the list of installed printers.
  \*/
  readonly printerList: Printer[]

/\*\*

- Specifies the version of the Scripting plugin.
  \*/
  readonly scriptingVersion: string

/\*\*

- Specifies the selection visible to the user.
  \*/
  selection: any

/\*\*

- New-document preset list.
  \*/
  readonly startupPresetsList: string[]

/\*\*

- Fonts installed for use.
  \*/
  readonly textFonts: TextFonts

/\*\*

- Available tracing preset names.
  \*/
  readonly tracingPresetsList: string[]

/\*\*

- Specifies the class name of the object.
  \*/
  readonly typename: string

/\*\*

- Specifies the current users adobe id.
  \*/
  readonly userAdobeID: string

/\*\*

- Specifies the current user's GUID.
  \*/
  readonly userGUID: string

/\*\*

- Allowed user-interaction level while script commands are being handled.
  \*/
  userInteractionLevel: UserInteractionLevel

/\*\*

- Specifies the version of the Adobe Illustrator application.
  \*/
  readonly version: string

/\*\*

- Indicates whether the application is visible.
  \*/
  readonly visible: boolean

/\*\*

- Adds the specified to the sequencer.
- @param sessionIndex Session index for the top-most sequence that owns the item being added.
- @param destinationSequenceID UID of the owning sequence.
- @param destinationIndex Item UID insertion point.
- @param srcItemIDData Item ID used to construct the item.
- @param type Source used to construct the item.
  \*/
  aATAddItem(
  sessionIndex: number,
  destinationSequenceID: number,
  destinationIndex: number,
  srcItemIDData: string,
  type: string,
  ): string

/\*\*

- Clears the sequencer.
  \*/
  aATClear(): string

/\*\*

- Copies the specified sequencer item(s).
- @param sessionIndex Session index for the top-most sequence that owns the item being added.
- @param item Specifies: The item UID(s)
  \*/
  aATDuplicateItem(sessionIndex: number, item: string): string

/\*\*

- Loads the specified item from the sequencer in the item editor.
- @param sessionIndex Session index for the top-most sequence that owns the item being added.
- @param item Specifies the item UID.
  \*/
  aATEditItem(sessionIndex: number, item: string): string

/\*\*

- Reports whether the last executed script produced errors.
  \*/
  aATErrorsExist(): boolean

/\*\*

- Runs the active session in the sequencer.
  \*/
  aATExecuteSession(): void

/\*\*

- Runs the active session in the sequencer.
- @param file Specifies: Execute a session file.
  \*/
  aATExecuteSessionFromFile(file: File): void
