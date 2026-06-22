# Indesign (part 48)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- True means print state is enabled.
  \*/
  readonly printState: boolean

/\*\*

- Lets several property values be assigned together.
  \*/
  properties: object

/\*\*

- True identifies the layer as a section divider layer.
  \*/
  readonly sectionDividerLayer: boolean

/\*\*

- True identifies the layer as a separator layer.
  \*/
  readonly separatorLayer: boolean

/\*\*

- True means view state is enabled.
  \*/
  readonly viewState: boolean

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): GraphicLayer[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that can evaluate back to the GraphicLayer.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for graphic layers.
  \*/
  declare class GraphicLayers {
  /\*\*
  - Object count contained by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the GraphicLayer at the given index.
- @param index Index value.
  \*/
  [index: number]: GraphicLayer

/\*\*

- Gets an arbitrary GraphicLayer from the collection.
  \*/
  anyItem(): GraphicLayer

/\*\*

- Reports how many elements are in the GraphicLayer collection.
  \*/
  count(): number

/\*\*

- Gets all GraphicLayer objects in the collection.
  \*/
  everyItem(): GraphicLayer[]

/\*\*

- Gets the collection's first GraphicLayer.
  \*/
  firstItem(): GraphicLayer

/\*\*

- Gets the GraphicLayer matching an index or name.
- @param index Index or name.
  \*/
  item(index: number | string): GraphicLayer

/\*\*

- Gets the GraphicLayer with the given ID.
- @param id ID value.
  \*/
  itemByID(id: number): GraphicLayer

/\*\*

- Gets the GraphicLayer with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): GraphicLayer

/\*\*

- Gets GraphicLayers inside the requested range.
- @param from GraphicLayer, index, or name where the range starts.
- @param to GraphicLayer, index, or name where the range ends.
  \*/
  itemByRange(from: GraphicLayer | number | string, to: GraphicLayer | number | string): GraphicLayer[]

/\*\*

- Gets the collection's last GraphicLayer.
  \*/
  lastItem(): GraphicLayer

/\*\*

- Gets the GraphicLayer positioned in the middle of the collection.
  \*/
  middleItem(): GraphicLayer

/\*\*

- Gets the GraphicLayer positioned after the supplied GraphicLayer.
- @param obj GraphicLayer positioned before the wanted GraphicLayer.
  \*/
  nextItem(obj: GraphicLayer): GraphicLayer

/\*\*

- Gets the GraphicLayer positioned before the supplied index.
- @param obj Index of the GraphicLayer positioned after the wanted GraphicLayer.
  \*/
  previousItem(obj: GraphicLayer): GraphicLayer

/\*\*

- Builds source text that can evaluate back to the GraphicLayer.
  \*/
  toSource(): string
  }

/\*\*

- Preferences for input method editor (IME) behavior.
  \*/
  declare class IMEPreference extends Preference {
  /\*\*
  - True permits inline entry for non-Latin text.
    \*/
    inlineInput: boolean

/\*\*

- True selects native digits for Arabic languages.
  \*/
  useNativeDigits: boolean
  }

/\*\*

- Application-level PDF export settings.
  \*/
  declare class PDFExportPreference extends Preference {
  /\*\*
  - Acrobat compatibility for the exported PDF document.
    \*/
    acrobatCompatibility: AcrobatCompatibility

/\*\*

- Transparency flattener preset selected for use.
  \*/
  appliedFlattenerPreset: FlattenerPreset

/\*\*

- Bottom bleed height for the page. Note: Applies only when use document bleed to print is true.
  \*/
  bleedBottom: number | string

/\*\*

- Inside-page bleed width. Note: Applies only when use document bleed to print is true.
  \*/
  bleedInside: number | string

/\*\*

- True outputs bleed marks.
  \*/
  bleedMarks: boolean

/\*\*

- Outside-page bleed width. Note: Applies only when use document bleed to print is true.
  \*/
  bleedOutside: number | string

/\*\*

- Top bleed height for the page. Note: Applies only when use document bleed to print is true.
  \*/
  bleedTop: number | string

/\*\*

- Sets the open-document password to the supplied string. Valid only when use security is true. Note: scripts may set this value but cannot read it.
  \*/
  changeSecurityPassword: string

/\*\*

- True adds small color squares for CMYK inks and gray tints in 10% steps.
  \*/
  colorBars: boolean

/\*\*

- Bitmap compression amount to use.
  \*/
  colorBitmapCompression: BitmapCompression

/\*\*

- Compression quality applied to color images.
  \*/
  colorBitmapQuality: CompressionQuality

/\*\*

- Sampling method applied to color bitmap images in the PDF document.
  \*/
  colorBitmapSampling: Sampling

/\*\*

- PPI used for the resampled image. (Range: 9 to 2400)
  \*/
  colorBitmapSamplingDPI: number

/\*\*

- For color images, sets tile size. Applies only with color bitmap compression JPEG 2000. (Range: 128 to 2048)
  \*/
  colorTileSize: number

/\*\*

- True applies ZIP compression to text and line art.
  \*/
  compressTextAndLineArt: boolean

/\*\*

- PDF document objects selected for compression.
  \*/
  compressionType: PDFCompressionType

/\*\*

- True omits image data outside the visible part of an image frame from PDF export.
  \*/
  cropImagesToFrames: boolean

/\*\*

- Outputs crop marks showing the page trim location.
  \*/
  cropMarks: boolean

/\*\*

- Assigns the exported PDF default document language. The correct ISO language code is required.
  \*/
  defaultDocumentLanguage: string

/\*\*

- True blocks form filling, signing, page extraction, and comment addition in the PDF document. Requires use security true.
  \*/
  disallowChanging: boolean

/\*\*

- True blocks copying and pasting text, images, or other PDF document content. Requires use security true.
  \*/
  disallowCopying: boolean

/\*\*

- True blocks inserting, deleting, or rotating PDF document pages. Requires use security true.
  \*/
  disallowDocumentAssembly: boolean

/\*\*

- True stops accessibility-oriented tools from extracting PDF document content. Requires use security true.
  \*/
  disallowExtractionForAccessibility: boolean

/\*\*

- True blocks form-field changes in the PDF document. Requires use security true.
  \*/
  disallowFormFillIn: boolean

/\*\*

- True blocks high-resolution output for the PDF document. Requires use security true.
  \*/
  disallowHiResPrinting: boolean

/\*\*

- True blocks note changes, text editing, and form-field entry in the PDF document. Requires use security true.
  \*/
  disallowNotes: boolean

/\*\*

- With acrobat compatibility Acrobat 6 or higher, true hides PDF document metadata from storage systems and search engines. With acrobat compatibility acrobat 5 or higher, it also blocks copying and extracting document content. Requires use security true.
  \*/
  disallowPlaintextMetadata: boolean

/\*\*

- True blocks PDF document printing. Requires use security.
  \*/
  disallowPrinting: boolean

/\*\*

- Resolved PDF/X OC Registry.
  \*/
  readonly effectiveOCRegistry: string

/\*\*

- Resolved PDF/X output condition.
  \*/
  readonly effectiveOutputCondition: string

/\*\*

- Resolved destination color profile.
  \*/
  readonly effectivePDFDestinationProfile: PDFProfileSelector | string

/\*\*

- Resolved PDF X color profile.
  \*/
  readonly effectivePDFXProfile: PDFProfileSelector | string

/\*\*

- Exports each page or spread to its own PDF file.
  \*/
  exportAsSinglePages: boolean

/\*\*

- Visible guides and baseline grids go into the PDF document when true.
  \*/
  exportGuidesAndGrids: boolean

/\*\*

- True stores each layer as an Acrobat layer in the PDF document.
  \*/
  exportLayers: boolean

/\*\*

- True shows non-printing objects in the PDF document.
  \*/
  exportNonprintingObjects: boolean

/\*\*

- True combines every exported spread into one page using the spread's original width.
  \*/
  exportReaderSpreads: boolean

/\*\*

- Layer selection for export.
  \*/
  exportWhichLayers: ExportLayerOptions

/\*\*

- True creates thumbnail images for each page or spread.
  \*/
  generateThumbnails: boolean

/\*\*

- For grayscale images, sets tile size. Applies only with grayscale bitmap compression JPEG 2000. (Range: 128 to 2048)
  \*/
  grayTileSize: number

/\*\*

- Bitmap compression setting applied to grayscale bitmap images.
  \*/
  grayscaleBitmapCompression: BitmapCompression

/\*\*

- Compression quality applied to grayscale bitmap images.
  \*/
  grayscaleBitmapQuality: CompressionQuality

/\*\*

- Sampling method applied to grayscale bitmap images.
  \*/
  grayscaleBitmapSampling: Sampling

/\*\*

- PPI used for the resampled image. (Range: 9 to 2400)
  \*/
  grayscaleBitmapSamplingDPI: number

/\*\*

- True disregards flattener spread overrides.
  \*/
  ignoreSpreadOverrides: boolean

/\*\*

- True exports bookmarks and table of contents entries as links in the PDF document bookmarks pane. False exports no bookmarks.
  \*/
  includeBookmarks: boolean

/\*\*

- True includes hyperlinks during document export.
  \*/
  includeHyperlinks: boolean

/\*\*

- ICC Profiles included in the exported PDF document.
  \*/
  includeICCProfiles: ICCProfiles | boolean

/\*\*

- True includes the document slug area in the PDF document.
  \*/
  includeSlugWithPDF: boolean

/\*\*

- True creates a tagged PDF file. Note: When acrobat compatibility is acrobat 6 or higher, tags appear only after opening the PDF in Acrobat 6 or higher.
  \*/
  includeStructure: boolean

/\*\*

- Method used to draw interactive elements.
  \*/
  interactiveElementsOption: InteractiveElementsOptions

/\*\*

- Bitmap compression setting applied to monochrome bitmap images.
  \*/
  monochromeBitmapCompression: MonoBitmapCompression

/\*\*

- Sampling method applied to monochrome bitmap images.
  \*/
  monochromeBitmapSampling: Sampling

/\*\*

- PPI used for the resampled image. (Range: 9 to 2400)
  \*/
  monochromeBitmapSamplingDPI: number

/\*\*

- Output condition registry URL. Inapplicable when PDF/X-3 is selected as the compliance standard or PDF export preset.
  \*/
  ocRegistry: string

/\*\*

- True substitutes OPI links for bitmap images.
  \*/
  omitBitmaps: boolean

/\*\*

- True substitutes OPI links for EPS images.
  \*/
  omitEPS: boolean

/\*\*

- True substitutes OPI links for PDF images.
  \*/
  omitPDF: boolean

/\*\*

- Password required to open the PDF document. Valid only when use security is true. Note: scripts may set this value but cannot read it.
  \*/
  openDocumentPassword: string

/\*\*

- Opens the PDF in full screen mode.
  \*/
  openInFullScreen: boolean

/\*\*

- True optimizes the exported PDF document for faster web browser display. Note: text and line art are compressed regardless of the chosen compression settings.
  \*/
  optimizePDF: boolean

/\*\*

- Intended printing condition name. Requires a document-defined PDF/X compliance standard. Does not apply to PDF/X-3 as the compliance standard or PDF export preset. For compliance details, see standards compliance and PDF X standards.
  \*/
  outputCondition: string

/\*\*

- Output condition name. A PDF/X standard must already be defined for the document.
  \*/
  outputConditionName: string

/\*\*

- True prints page information: filename, page number, current date and time, plus color separation name.
  \*/
  pageInformationMarks: boolean

/\*\*

- Offset from the page edge for page marks.
  \*/
  pageMarksOffset: number | string

/\*\*

- Pages to print, given as an enumeration or string. In a string, use a hyphen (-) between page numbers for a range, or use a comma (,) between separate pages.
  \*/
  pageRange: PageRange | string

/\*\*

- Color space used to represent color information in the exported PDF document.
  \*/
  pdfColorSpace: PDFColorSpace

/\*\*

- Gamut for the final RGB or CMYK device.
  \*/
  pdfDestinationProfile: PDFProfileSelector | string

/\*\*

- Exported PDF display title setting.
  \*/
  pdfDisplayTitle: PdfDisplayTitleOptions

/\*\*

- Exported PDF magnification setting.
  \*/
  pdfMagnification: PdfMagnificationOptions

/\*\*

- Printer mark type, either an enum value or the custom marks file name.
  \*/
  pdfMarkType: MarkTypes | string

/\*\*

- Exported PDF page layout setting.
  \*/
  pdfPageLayout: PageLayoutOptions

/\*\*

- PDF X color profile used for the PDF document. .
  \*/
  pdfXProfile: PDFProfileSelector | string

/\*\*

- Stroke weight used for printer's marks.
  \*/
  printerMarkWeight: PDFMarkWeight

/\*\*

- True prints small targets outside the page area to align color separations.
  \*/
  registrationMarks: boolean

/\*\*

- True converts spot colors to process colors for printing, simulating spot-ink overprint behavior across different neutral density values. Note: invalid when the color output mode leaves color profiles unchanged.
  \*/
  simulateOverprint: boolean

/\*\*

- Suffix appended to each file name when pages export as separate PDF files.
  \*/
  singlePagesPDFSuffix: string

/\*\*

- PDF/X standards compliance target for testing.
  \*/
  standardsCompliance: PDFXStandards

/\*\*

- Threshold for fully embedding fonts, based on how many characters from each font are used in the document. If a font's used-character percentage is above the specified value, the full font is embedded; otherwise, a subset is embedded. (Range: 0 to 100) Notes: Full font embedding increases file size. Use 0 (zero) to embed every font completely.
  \*/
  subsetFontsBelow: number

/\*\*

- Minimum dpi at which color compression begins. (Allowed: 1 through 10 times color bitmap sampling DPI.)
  \*/
  thresholdToCompressColor: number

/\*\*

- Minimum dpi at which grayscale compression begins. (Allowed: 1 through 10 times grayscale bitmap sampling DPI.)
  \*/
  thresholdToCompressGray: number

/\*\*

- Minimum dpi at which monochrome compression begins. (Allowed: 1 through 10 times monochrome bitmap sampling DPI.)
  \*/
  thresholdToCompressMonochrome: number

/\*\*

- True uses document bleed settings in the PDF document.
  \*/
  useDocumentBleedWithPDF: boolean

/\*\*

- True enables security controls for the PDF document.
  \*/
  useSecurity: boolean

/\*\*

- True opens the PDF file automatically after export.
  \*/
  viewPDF: boolean
  }

/\*\*

- Document-level PDF export settings.
  \*/
  declare class PDFExportPreset {
  /\*\*
  - Acrobat compatibility for the exported PDF document.
    \*/
    acrobatCompatibility: AcrobatCompatibility

/\*\*

- Transparency flattener preset selected for use.
  \*/
  appliedFlattenerPreset: FlattenerPreset

/\*\*

- Bottom bleed height for the page. Note: Applies only when use document bleed to print is true.
  \*/
  bleedBottom: number | string

/\*\*

- Inside-page bleed width. Note: Applies only when use document bleed to print is true.
  \*/
  bleedInside: number | string

/\*\*

- True outputs bleed marks.
  \*/
  bleedMarks: boolean

/\*\*

- Outside-page bleed width. Note: Applies only when use document bleed to print is true.
  \*/
  bleedOutside: number | string

/\*\*

- Top bleed height for the page. Note: Applies only when use document bleed to print is true.
  \*/
  bleedTop: number | string

/\*\*

- True adds small color squares for CMYK inks and gray tints in 10% steps.
  \*/
  colorBars: boolean

/\*\*

- Bitmap compression amount to use.
  \*/
  colorBitmapCompression: BitmapCompression

/\*\*

- Compression quality applied to color images.
  \*/
  colorBitmapQuality: CompressionQuality

/\*\*

- Sampling method applied to color bitmap images in the PDF document.
  \*/
  colorBitmapSampling: Sampling

/\*\*

- PPI used for the resampled image. (Range: 9 to 2400)
  \*/
  colorBitmapSamplingDPI: number

/\*\*

- For color images, sets tile size. Applies only with color bitmap compression JPEG 2000. (Range: 128 to 2048)
  \*/
  colorTileSize: number

/\*\*

- True applies ZIP compression to text and line art.
  \*/
  compressTextAndLineArt: boolean

/\*\*

- PDF document objects selected for compression.
  \*/
  compressionType: PDFCompressionType

/\*\*

- True omits image data outside the visible part of an image frame from PDF export.
  \*/
  cropImagesToFrames: boolean

/\*\*

- Outputs crop marks showing the page trim location.
  \*/
  cropMarks: boolean

/\*\*

- Exported PDF language default; supply the proper ISO language code.
  \*/
  defaultDocumentLanguage: string

/\*\*

- Resolved PDF/X OC Registry.
  \*/
  readonly effectiveOCRegistry: string

/\*\*

- Resolved PDF/X output condition.
  \*/
  readonly effectiveOutputCondition: string

/\*\*

- Resolved destination color profile.
  \*/
  readonly effectivePDFDestinationProfile: PDFProfileSelector | string

/\*\*

- Resolved PDF X color profile.
  \*/
  readonly effectivePDFXProfile: PDFProfileSelector | string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Exports each page or spread to its own PDF file.
  \*/
  exportAsSinglePages: boolean

/\*\*

- Visible guides and baseline grids go into the PDF document when true.
  \*/
  exportGuidesAndGrids: boolean

/\*\*

- True stores each layer as an Acrobat layer in the PDF document.
  \*/
  exportLayers: boolean

/\*\*

- True shows non-printing objects in the PDF document.
  \*/
  exportNonprintingObjects: boolean

/\*\*

- True combines every exported spread into one page using the spread's original width.
  \*/
  exportReaderSpreads: boolean

/\*\*

- Layer selection for export.
  \*/
  exportWhichLayers: ExportLayerOptions

/\*\*

- Complete path to the PDFExportPreset, including the PDFExportPreset name.
  \*/
  readonly fullName: File

/\*\*

- True creates thumbnail images for each page or spread.
  \*/
  generateThumbnails: boolean

/\*\*

- For grayscale images, sets tile size. Applies only with grayscale bitmap compression JPEG 2000. (Range: 128 to 2048)
  \*/
  grayTileSize: number

/\*\*

- Bitmap compression setting applied to grayscale bitmap images.
  \*/
  grayscaleBitmapCompression: BitmapCompression

/\*\*

- Compression quality applied to grayscale bitmap images.
  \*/
  grayscaleBitmapQuality: CompressionQuality

/\*\*

- Sampling method applied to grayscale bitmap images.
  \*/
  grayscaleBitmapSampling: Sampling

/\*\*

- PPI used for the resampled image. (Range: 9 to 2400)
  \*/
  grayscaleBitmapSamplingDPI: number

/\*\*

- True disregards flattener spread overrides.
  \*/
  ignoreSpreadOverrides: boolean

/\*\*

- True exports bookmarks and table of contents entries as links in the PDF document bookmarks pane. False exports no bookmarks.
  \*/
  includeBookmarks: boolean

/\*\*

- True includes hyperlinks during document export.
  \*/
  includeHyperlinks: boolean

/\*\*

- ICC Profiles included in the exported PDF document.
  \*/
  includeICCProfiles: ICCProfiles | boolean

/\*\*

- True includes the document slug area in the PDF document.
  \*/
  includeSlugWithPDF: boolean

/\*\*

- True creates a tagged PDF file. Note: When acrobat compatibility is acrobat 6 or higher, tags appear only after opening the PDF in Acrobat 6 or higher.
  \*/
  includeStructure: boolean

/\*\*

- PDFExportPreset index within its containing object.
  \*/
  readonly index: number

/\*\*

- Method used to draw interactive elements.
  \*/
  interactiveElementsOption: InteractiveElementsOptions

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Bitmap compression setting applied to monochrome bitmap images.
  \*/
  monochromeBitmapCompression: MonoBitmapCompression

/\*\*

- Sampling method applied to monochrome bitmap images.
  \*/
  monochromeBitmapSampling: Sampling

/\*\*

- PPI used for the resampled image. (Range: 9 to 2400)
  \*/
  monochromeBitmapSamplingDPI: number

/\*\*

- PDFExportPreset name.
  \*/
  name: string

/\*\*

- Output condition registry URL. Inapplicable when PDF/X-3 is selected as the compliance standard or PDF export preset.
  \*/
  ocRegistry: string

/\*\*

- True substitutes OPI links for bitmap images.
  \*/
  omitBitmaps: boolean

/\*\*

- True substitutes OPI links for EPS images.
  \*/
  omitEPS: boolean

/\*\*

- True substitutes OPI links for PDF images.
  \*/
  omitPDF: boolean

/\*\*

- Opens the PDF in full screen mode.
  \*/
  openInFullScreen: boolean

/\*\*

- True optimizes the exported PDF document for faster web browser display. Note: text and line art are compressed regardless of the chosen compression settings.
  \*/
  optimizePDF: boolean

/\*\*

- Intended printing condition name. Requires a document-defined PDF/X compliance standard. Does not apply to PDF/X-3 as the compliance standard or PDF export preset. For compliance details, see standards compliance and PDF X standards.
  \*/
  outputCondition: string

/\*\*

- Output condition name. A PDF/X standard must already be defined for the document.
  \*/
  outputConditionName: string

/\*\*

- True prints page information: filename, page number, current date and time, plus color separation name.
  \*/
  pageInformationMarks: boolean

/\*\*

- Offset from the page edge for page marks.
  \*/
  pageMarksOffset: number | string

/\*\*

- Parent of the PDFExportPreset (a Application).
  \*/
  readonly parent: Application

/\*\*

- Color space used to represent color information in the exported PDF document.
  \*/
  pdfColorSpace: PDFColorSpace

/\*\*

- Gamut for the final RGB or CMYK device.
  \*/
  pdfDestinationProfile: PDFProfileSelector | string

/\*\*

- Exported PDF display title setting.
  \*/
  pdfDisplayTitle: PdfDisplayTitleOptions

/\*\*

- Exported PDF magnification setting.
  \*/
  pdfMagnification: PdfMagnificationOptions
