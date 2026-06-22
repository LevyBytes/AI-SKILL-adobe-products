# Indesign (part 47)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Print-time page width scaling percentage. (Range: 0 to 1000) Applies only if scale mode is scale width height.
  \*/
  scaleWidth: number

/\*\*

- Composite-gray PostScript or PDF output ink screening settings. .
  \*/
  screening: Screeening | string

/\*\*

- PPD-provided ink screening list. Requires color output set to separations or in rip separations.
  \*/
  readonly screeningList: string[]

/\*\*

- Image data delivered to the printer or file.
  \*/
  sendImageData: ImageDataTypes

/\*\*

- Page printing sequence.
  \*/
  sequence: Sequences

/\*\*

- When true, converts spot colors to process colors while printing to simulate overprinting spot inks with different neutral density values. This does not apply if the color output mode leaves color profiles unchanged.
  \*/
  simulateOverprint: boolean

/\*\*

- Color management system source. Requires use color management to be true.
  \*/
  sourceSpace: SourceSpaces

/\*\*

- With true, text outputs as black unless its color is None, Paper, or a value equal to white. With false, colored text such as blue hyperlinks uses halftone patterns. Requires trapping off.
  \*/
  textAsBlack: boolean

/\*\*

- When true, thumbnails print. Requires trapping off and tile false.
  \*/
  thumbnails: boolean

/\*\*

- Count of thumbnails placed on each page.
  \*/
  thumbnailsPerPage: ThumbsPerPage

/\*\*

- When true, pages are tiled.
  \*/
  tile: boolean

/\*\*

- Tiling overlap amount. Requires tiling true and a tiling type other than manual.
  \*/
  tilingOverlap: number

/\*\*

- Tiling type. Requires tiling true.
  \*/
  tilingType: TilingTypes

/\*\*

- Trapping type.
  \*/
  trapping: Trapping

/\*\*

- When true, the document's bleed area is used.
  \*/
  useDocumentBleedToPrint: boolean

/\*\*

- Yellow ink angle override. (Range: 0 to 360)
  \*/
  yellowAngle: number

/\*\*

- Yellow ink frequency override. (Range: 1 to 500)
  \*/
  yellowFrequency: number
  }

/\*\*

- Options controlling booklet printing.
  \*/
  declare class PrintBookletOption extends Preference {
  /\*\*
  - When true, margins are adjusted automatically to fit the specified printer's marks and bleed area.
    \*/
    autoAdjustMargins: boolean

/\*\*

- Bleed amount between pages.
  \*/
  bleedBetweenPages: number | string

/\*\*

- Booklet type.
  \*/
  bookletType: BookletTypeOptions

/\*\*

- Printed booklet bottom margin.
  \*/
  bottomMargin: number | string

/\*\*

- Creep amount, meaning binding adjustment based on paper thickness, to add.
  \*/
  creep: number | string

/\*\*

- Printed booklet left margin.
  \*/
  leftMargin: number | string

/\*\*

- When true, all margins are made equal to the top margin.
  \*/
  marginsUniformSize: boolean

/\*\*

- Pages selected for printing, given as either an enumeration or a string. In the string form, use a hyphen (-) between page numbers for a range, and use a comma (,) between separate pages.
  \*/
  pageRange: PageRange | string

/\*\*

- When true, blank spreads print.
  \*/
  printBlankPrinterSpreads: boolean

/\*\*

- Printed booklet right margin.
  \*/
  rightMargin: number | string

/\*\*

- Booklet signature size for perfect binding.
  \*/
  signatureSize: SignatureSizeOptions

/\*\*

- Space amount between pages.
  \*/
  spaceBetweenPages: number | string

/\*\*

- Printed booklet top margin.
  \*/
  topMargin: number | string
  }

/\*\*

- Preferences for booklet printing.
  \*/
  declare class PrintBookletPrintPreference extends Preference {
  /\*\*
  - Currently selected printer preset type.
    \*/
    activePrinterPreset: PrinterPresetTypes | PrinterPreset

/\*\*

- When true, all printer marks print; when false, only chosen printer marks print.
  \*/
  allPrinterMarks: boolean

/\*\*

- When true, bitmap printing is used.
  \*/
  bitmapPrinting: boolean

/\*\*

- Bitmap-printing resolution. (Range: 72 to 1200) Note: applies when bitmap printing is true.
  \*/
  bitmapResolution: number

/\*\*

- Black ink angle override. (Range: 0 to 360)
  \*/
  blackAngle: number

/\*\*

- Black ink frequency override. (Range: 1 to 500)
  \*/
  blackFrequency: number

/\*\*

- Bottom page bleed height. Applies only if use document bleed to print is true.
  \*/
  bleedBottom: number | string

/\*\*

- When true, all bleed area settings use the same value, based on the latest bleed measurement setting. When false, bleed top, bleed bottom, bleed inside, and bleed outside can each use separate measurements.
  \*/
  bleedChain: boolean

/\*\*

- Inside page bleed width. Applies only if use document bleed to print is true.
  \*/
  bleedInside: number | string

/\*\*

- When true, bleed marks are printed.
  \*/
  bleedMarks: boolean

/\*\*

- Outside page bleed width. Applies only if use document bleed to print is true.
  \*/
  bleedOutside: number | string

/\*\*

- Top page bleed height. Applies only if use document bleed to print is true.
  \*/
  bleedTop: number | string

/\*\*

- When true, printed copies are collated.
  \*/
  collating: boolean

/\*\*

- When true, adds small color squares for CMYK inks and gray tints at 10% increments.
  \*/
  colorBars: boolean

/\*\*

- Composite color output mode. This setting is unavailable when a device-independent PPD is specified.
  \*/
  colorOutput: ColorOutputModes

/\*\*

- Composite-print screen angle. (Range: 0 to 360) Requires custom screening in PostScript or PDF output.
  \*/
  compositeAngle: number

/\*\*

- Composite-print screen frequency. (Range: 1 to 500) Requires custom screening in PostScript or PDF output.
  \*/
  compositeFrequency: number

/\*\*

- Copies to print. Note: unavailable when printer is PostScript File.
  \*/
  copies: number

/\*\*

- Color-rendering dictionary (CRD), supplied either as a CRD name or as an enumeration value. Requires use color management to be true.
  \*/
  crd: ColorRenderingDictionary | string

/\*\*

- Prints crop marks showing the intended page trim locations.
  \*/
  cropMarks: boolean

/\*\*

- Cyan ink angle override. (Range: 0 to 360)
  \*/
  cyanAngle: number

/\*\*

- Cyan ink frequency override. (Range: 1 to 500)
  \*/
  cyanFrequency: number

/\*\*

- Image-data format sent to the printer.
  \*/
  dataFormat: DataFormat

/\*\*

- When true, downloads every font listed in the selected PPD. Applies only when font downloading is complete or subset.
  \*/
  downloadPPDFonts: boolean

/\*\*

- Transparency flattener preset name.
  \*/
  flattenerPresetName: string

/\*\*

- Direction used to flip the printed image.
  \*/
  flip: Flip

/\*\*

- Controls printer font download behavior.
  \*/
  fontDownloading: FontDownloading

/\*\*

- When true, flattener spread overrides are ignored.
  \*/
  ignoreSpreadOverrides: boolean

/\*\*

- Rendering intent. Requires use color management to be true.
  \*/
  intent: RenderingIntent

/\*\*

- Magenta ink angle override. (Range: 0 to 360)
  \*/
  magentaAngle: number

/\*\*

- Magenta ink frequency override. (Range: 1 to 500)
  \*/
  magentaFrequency: number

/\*\*

- Printer-mark stroke weight, measured in points.
  \*/
  markLineWeight: MarkLineWeight

/\*\*

- Offset distance between page marks and the page edge.
  \*/
  markOffset: number | string

/\*\*

- Printer mark type, either an enum value or a custom marks file name.
  \*/
  markType: MarkTypes | string

/\*\*

- When true, prints the document as a negative.
  \*/
  negative: boolean

/\*\*

- When true, bitmap images are replaced with OPI links.
  \*/
  omitBitmaps: boolean

/\*\*

- When true, EPS images are replaced with OPI links.
  \*/
  omitEPS: boolean

/\*\*

- When true, PDF images are replaced with OPI links.
  \*/
  omitPDF: boolean

/\*\*

- When true, prints graphics represented by OPI comments saved in imported EPS files or linked through OPI comments. For details about linking files through OPI comments, see omit EPS, omit PDF, or omit bitmaps.
  \*/
  opiImageReplacement: boolean

/\*\*

- When true, prints file name metadata, page number, current date/time, and color separation name.
  \*/
  pageInformationMarks: boolean

/\*\*

- Where the page sits on the printing medium. Applies only if tile is false.
  \*/
  pagePosition: PagePositions

/\*\*

- Gap between document pages on the printing medium.
  \*/
  paperGap: number | string

/\*\*

- Paper height; applies for custom paper size or when scale mode uses scale width height.
  \*/
  paperHeight: PaperSize | number

/\*\*

- Left-edge offset from the imageable area for the page.
  \*/
  paperOffset: number | string

/\*\*

- Paper size, supplied as either a string or an enumeration. For paper size naming details, see paper size list.
  \*/
  paperSize: PaperSizes | string

/\*\*

- Available paper sizes list.
  \*/
  readonly paperSizeList: string[]

/\*\*

- When true, transverse orientation is used.
  \*/
  paperTransverse: boolean

/\*\*

- Paper width; applies for custom paper size or when scale mode uses scale width height.
  \*/
  paperWidth: PaperSize | number

/\*\*

- When true, PDF passthrough is in effect.
  \*/
  readonly pdfPassthrough: boolean

/\*\*

- Printer PostScript level.
  \*/
  postscriptLevel: PostScriptLevels

/\*\*

- PPD value, supplied as either a PPD name or an enumeration.
  \*/
  ppd: PPDValues | string

/\*\*

- PPDs that are available.
  \*/
  readonly ppdList: string[]

/\*\*

- When true, uncalibrated color numbers are preserved.
  \*/
  preserveColorNumbers: boolean

/\*\*

- When true, black ink prints. Requires trapping to be off.
  \*/
  printBlack: boolean

/\*\*

- When true, blank pages print. Requires trapping to be off.
  \*/
  printBlankPages: boolean

/\*\*

- When true, cyan ink prints. Requires trapping to be off.
  \*/
  printCyan: boolean

/\*\*

- PostScript output file. Applies only if the current printer is defined as postscript file.
  \*/
  printFile: File

/\*\*

- When true, visible guides and baseline grids print. Requires trapping to be off.
  \*/
  printGuidesGrids: boolean

/\*\*

- Layers selected for printing.
  \*/
  printLayers: PrintLayerOptions

/\*\*

- When true, magenta ink prints. Requires trapping to be off.
  \*/
  printMagenta: boolean

/\*\*

- When true, non-printing objects print. Requires trapping to be off.
  \*/
  printNonprinting: boolean

/\*\*

- Orientation used for the printed page.
  \*/
  printPageOrientation: PrintPageOrientation

/\*\*

- When true, yellow ink prints. Requires trapping to be off.
  \*/
  printYellow: boolean

/\*\*

- Current printer.
  \*/
  printer: Printer | string

/\*\*

- Printers that are available.
  \*/
  readonly printerList: string[]

/\*\*

- Color profile.
  \*/
  profile: Profile | string

/\*\*

- When true, small targets print outside the page area for color-separation alignment.
  \*/
  registrationMarks: boolean

/\*\*

- When true, pages print in reverse order.
  \*/
  reverseOrder: boolean

/\*\*

- Print-time page height scaling percentage. (Range: 0 to 1000) Applies only if scale mode is scale width height.
  \*/
  scaleHeight: number

/\*\*

- Page-scaling policy. Applies only when output comes from Layout view.
  \*/
  scaleMode: ScaleModes

/\*\*

- When true, keeps scaling proportional; the most recently set scale width or scale height supplies both values. Applies only if scale mode is scale width height.
  \*/
  scaleProportional: boolean

/\*\*

- Print-time page width scaling percentage. (Range: 0 to 1000) Applies only if scale mode is scale width height.
  \*/
  scaleWidth: number

/\*\*

- Composite-gray PostScript or PDF output ink screening settings. .
  \*/
  screening: Screeening | string

/\*\*

- PPD-provided ink screening list. Requires color output set to separations or in rip separations.
  \*/
  readonly screeningList: string[]

/\*\*

- Image data delivered to the printer or file.
  \*/
  sendImageData: ImageDataTypes

/\*\*

- When true, converts spot colors to process colors while printing to simulate overprinting spot inks with different neutral density values. This does not apply if the color output mode leaves color profiles unchanged.
  \*/
  simulateOverprint: boolean

/\*\*

- Color management system source. Requires use color management to be true.
  \*/
  sourceSpace: SourceSpaces

/\*\*

- With true, text outputs as black unless its color is None, Paper, or a value equal to white. With false, colored text such as blue hyperlinks uses halftone patterns. Requires trapping off.
  \*/
  textAsBlack: boolean

/\*\*

- Trapping type.
  \*/
  trapping: Trapping

/\*\*

- When true, the document's bleed area is used.
  \*/
  useDocumentBleedToPrint: boolean

/\*\*

- Yellow ink angle override. (Range: 0 to 360)
  \*/
  yellowAngle: number

/\*\*

- Yellow ink frequency override. (Range: 1 to 500)
  \*/
  yellowFrequency: number
  }

/\*\*

- Preferences for EPS export.
  \*/
  declare class EPSExportPreference extends Preference {
  /\*\*
  - Transparency flattener preset used for the export.
    \*/
    appliedFlattenerPreset: FlattenerPreset

/\*\*

- Bottom page bleed height. Applies only if use document bleed to print is true.
  \*/
  bleedBottom: number | string

/\*\*

- Inside page bleed width. Applies only if use document bleed to print is true.
  \*/
  bleedInside: number | string

/\*\*

- Outside page bleed width. Applies only if use document bleed to print is true.
  \*/
  bleedOutside: number | string

/\*\*

- Top page bleed height. Applies only if use document bleed to print is true.
  \*/
  bleedTop: number | string

/\*\*

- Image-data format sent to the printer.
  \*/
  dataFormat: DataFormat

/\*\*

- Color space used to represent color in the exported EPS.
  \*/
  epsColor: EPSColorSpace

/\*\*

- When true, facing pages export as one spread-width page. When false, spread pages export individually.
  \*/
  epsSpreads: boolean

/\*\*

- Controls exported EPS font embedding behavior.
  \*/
  fontEmbedding: FontEmbedding

/\*\*

- When true, flattener spread overrides are ignored.
  \*/
  ignoreSpreadOverrides: boolean

/\*\*

- Image data exported to the EPS document.
  \*/
  imageData: EPSImageData

/\*\*

- When true, bitmap images are replaced with OPI links.
  \*/
  omitBitmaps: boolean

/\*\*

- When true, EPS images are replaced with OPI links.
  \*/
  omitEPS: boolean

/\*\*

- When true, PDF images are replaced with OPI links.
  \*/
  omitPDF: boolean

/\*\*

- When true, prints graphics represented by OPI comments saved in imported EPS files or linked through OPI comments. For details about linking files through OPI comments, see omit EPS, omit PDF, or omit bitmaps.
  \*/
  opiImageReplacement: boolean

/\*\*

- Pages selected for printing, given as either an enumeration or a string. In the string form, use a hyphen (-) between page numbers for a range, and use a comma (,) between separate pages.
  \*/
  pageRange: PageRange | string

/\*\*

- Printer PostScript level.
  \*/
  postscriptLevel: PostScriptLevels

/\*\*

- Format for the EPS-export preview image.
  \*/
  preview: PreviewTypes
  }

/\*\*

- Tool box tools
  \*/
  declare class ToolBox extends Preference {
  /\*\*
  - Emitted for ToolBox property-value changes; it bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_ATTRIBUTE_CHANGED`: string

/\*\*

- Active tool at the moment.
  \*/
  currentTool: UITools

/\*\*

- Hint for the active tool.
  \*/
  readonly currentToolHint: string

/\*\*

- Icon resource file for the active tool.
  \*/
  readonly currentToolIconFile: File

/\*\*

- Name of the active tool.
  \*/
  readonly currentToolName: string
  }

/\*\*

- Image-related preferences.
  \*/
  declare class ImagePreference extends Preference {
  /\*\*
  - When true, image bounds are preserved during relinking.
    \*/
    preserveBounds: boolean
    }

/\*\*

- Preferences for Image I/O.
  \*/
  declare class ImageIOPreference extends Preference {
  /\*\*
  - When true, auto embedding is allowed.
    \*/
    allowAutoEmbedding: boolean

/\*\*

- Alpha channel name.
  \*/
  alphaChannelName: string

/\*\*

- When true, clipping paths defined in Photoshop are applied to placed images.
  \*/
  applyPhotoshopClippingPath: boolean

/\*\*

- Image resolution in ppi, assigned when the graphic is imported.
  \*/
  readonly previewResolution: number
  }

/\*\*

- Settings for clipping paths.
  \*/
  declare class ClippingPathSettings extends Preference {
  /\*\*
  - Alpha channels stored in the graphic.
    \*/
    readonly alphaChannelPathNames: string[]

/\*\*

- Photoshop path or alpha channel name used as the clipping path.
  \*/
  appliedPathName: string

/\*\*

- Clipping path type.
  \*/
  clippingType: ClippingPathType

/\*\*

- When true, creates interior clipping paths inside the enclosing clipping path. Applies only if clipping type is alpha channel or detect edges.
  \*/
  includeInsideEdges: boolean

/\*\*

- Moves the clipping boundary inward by the given amount. Unit controls accepted values: points: -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 352.7778; ciceros: -781c11.889 to 781c11.889)
  \*/
  insetFrame: number | string

/\*\*

- When true, the clipping path is inverted.
  \*/
  invertPath: boolean

/\*\*

- Paths collection.
  \*/
  readonly paths: Paths

/\*\*

- Clipping paths stored in the graphic.
  \*/
  readonly photoshopPathNames: string[]

/\*\*

- When true, clips the path at the edge of the graphic frame. Applies only if clipping type is alpha channel or detect edges.
  \*/
  restrictToFrame: boolean

/\*\*

- Minimum allowed dark pixel value. Pixels lighter than this threshold are clipped and hidden. (Range: 0 to 255) Applies only if clipping type is detect edges or alpha channel.
  \*/
  threshold: number

/\*\*

- Controls how close pixel intensity may be to the threshold before the clipping path hides that pixel. (Range: 0 to 10) Applies only if clipping type is detect edges or alpha channel.
  \*/
  tolerance: number

/\*\*

- With true, high-resolution graphic data creates the clipping path. With false, the clipping-path calculation uses screen-display resolution. Applies only if clipping type is detect edges.
  \*/
  useHighResolutionImage: boolean

/\*\*

- Changes the clipping path into a frame.
  \*/
  convertToFrame(): PageItem
  }

/\*\*

- Graphic layer option.
  \*/
  declare class GraphicLayerOption extends Preference {
  /\*\*
  - Graphic layers collection.
    \*/
    readonly graphicLayers: GraphicLayers

/\*\*

- Options for updating a graphic link after another application changes the graphic layer visibility settings.
  \*/
  updateLinkOption: UpdateLinkOptions
  }

/\*\*

- Layer in a PSD image or PDF file.
  \*/
  declare class GraphicLayer {
  /\*\*
  - When true, the layer is an adjustment layer. Note: this must appear in the script before overriding layer visibility with a current visibility statement.
    \*/
    readonly adjustmentLayer: boolean

/\*\*

- When true, the layer is visible in the document.
  \*/
  currentVisibility: boolean

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- When true, export state is on.
  \*/
  readonly exportState: boolean

/\*\*

- When true, the layer has layer effects applied. Note: this must appear in the script before overriding layer visibility with a current visibility statement.
  \*/
  readonly fxLayer: boolean

/\*\*

- Graphic layers collection.
  \*/
  readonly graphicLayers: GraphicLayers

/\*\*

- When true, the layer includes an export state.
  \*/
  readonly hasExportState: boolean

/\*\*

- When true, the layer includes a print state.
  \*/
  readonly hasPrintState: boolean

/\*\*

- When true, the layer includes a view state.
  \*/
  readonly hasViewState: boolean

/\*\*

- Unique ID for the GraphicLayer.
  \*/
  readonly id: number

/\*\*

- Position of the GraphicLayer inside its containing object.
  \*/
  readonly index: number

/\*\*

- Returns true when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- When true, the GraphicLayer is locked.
  \*/
  readonly locked: boolean

/\*\*

- GraphicLayer name.
  \*/
  readonly name: string

/\*\*

- Returns the layer visibility setting recorded before the graphic file was imported. Note: this must appear in the script before overriding visibility with a current visibility statement.
  \*/
  readonly originalVisibility: boolean

/\*\*

- Parent of the GraphicLayer, either a GraphicLayerOption or GraphicLayer.
  \*/
  readonly parent: any
