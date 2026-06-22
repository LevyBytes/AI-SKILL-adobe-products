# Indesign (part 59)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- PrinterPreset stores the complete group of print settings.
  \*/
  declare class PrinterPreset {
  /\*\*
  - When true, every printer mark is printed. When false, only chosen printer marks are printed.
    \*/
    allPrinterMarks: boolean

/\*\*

- When true, bitmap printing is used.
  \*/
  bitmapPrinting: boolean

/\*\*

- Resolution used for bitmap printing. (Range: 72 to 1200) Note: applies when bitmap printing is true.
  \*/
  bitmapResolution: number

/\*\*

- Black-ink angle override. (Range: 0 to 360)
  \*/
  blackAngle: number

/\*\*

- Black-ink frequency override. (Range: 1 to 500)
  \*/
  blackFrequency: number

/\*\*

- Bottom-page bleed height. Note: applies only when use document bleed to print is true.
  \*/
  bleedBottom: number | string

/\*\*

- When true, all bleed settings are forced to match using the most recent bleed measurement. When false, bleed top, bleed bottom, bleed inside, and bleed outside may use separate measurements.
  \*/
  bleedChain: boolean

/\*\*

- Inside-page bleed width. Note: applies only when use document bleed to print is true.
  \*/
  bleedInside: number | string

/\*\*

- When true, bleed marks are printed.
  \*/
  bleedMarks: boolean

/\*\*

- Outside-page bleed width. Note: applies only when use document bleed to print is true.
  \*/
  bleedOutside: number | string

/\*\*

- Top-page bleed height. Note: applies only when use document bleed to print is true.
  \*/
  bleedTop: number | string

/\*\*

- When true, printed copies are collated.
  \*/
  collating: boolean

/\*\*

- When true, small color squares are added for CMYK inks and gray tints in 10% increments.
  \*/
  colorBars: boolean

/\*\*

- ColorOutputModes setting for composite output. Note: not valid when a device-independent PPD is specified.
  \*/
  colorOutput: ColorOutputModes

/\*\*

- Screen angle used for composite printing. (Range: 0 to 360) Note: applies only to PostScript or PDF files using custom screening.
  \*/
  compositeAngle: number

/\*\*

- Screen frequency used for composite printing. (Range: 1 to 500) Note: applies only to PostScript or PDF files using custom screening.
  \*/
  compositeFrequency: number

/\*\*

- Print-copy count. Note: unavailable when printer is PostScript File.
  \*/
  copies: number

/\*\*

- Color-rendering dictionary (CRD), supplied as a CRD name or enumeration value. Note: available only with color management enabled.
  \*/
  crd: ColorRenderingDictionary | string

/\*\*

- Prints crop marks that show where page trimming should occur.
  \*/
  cropMarks: boolean

/\*\*

- Cyan-ink angle override. (Range: 0 to 360)
  \*/
  cyanAngle: number

/\*\*

- Cyan-ink frequency override. (Range: 1 to 500)
  \*/
  cyanFrequency: number

/\*\*

- DataFormat used when image data is sent to the printer.
  \*/
  dataFormat: DataFormat

/\*\*

- When true, all fonts listed in the selected PPD are downloaded. Valid only when font downloading is complete or subset.
  \*/
  downloadPPDFonts: boolean

/\*\*

- EventListeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Name of the transparency flattener preset.
  \*/
  flattenerPresetName: string

/\*\*

- Flip direction for the printed image.
  \*/
  flip: Flip

/\*\*

- Controls font downloading behavior for the printer.
  \*/
  fontDownloading: FontDownloading

/\*\*

- When true, flattener spread overrides are ignored.
  \*/
  ignoreSpreadOverrides: boolean

/\*\*

- When true, the printed document includes the slug area.
  \*/
  includeSlugToPrint: boolean

/\*\*

- PrinterPreset index inside its containing object.
  \*/
  readonly index: number

/\*\*

- RenderingIntent setting. Note: applies only when use color management is true.
  \*/
  intent: RenderingIntent

/\*\*

- Returns true when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Magenta-ink angle override. (Range: 0 to 360)
  \*/
  magentaAngle: number

/\*\*

- Magenta-ink frequency override. (Range: 1 to 500)
  \*/
  magentaFrequency: number

/\*\*

- Point stroke weight for printer marks.
  \*/
  markLineWeight: MarkLineWeight

/\*\*

- Offset distance used to place page marks away from the page edge.
  \*/
  markOffset: number | string

/\*\*

- Printer mark choice, supplied as a MarkTypes value or a custom marks file name.
  \*/
  markType: MarkTypes | string

/\*\*

- PrinterPreset name.
  \*/
  name: string

/\*\*

- When true, output is printed as a negative.
  \*/
  negative: boolean

/\*\*

- When true, bitmap images are substituted with OPI links.
  \*/
  omitBitmaps: boolean

/\*\*

- When true, EPS images are substituted with OPI links.
  \*/
  omitEPS: boolean

/\*\*

- When true, PDF images are substituted with OPI links.
  \*/
  omitPDF: boolean

/\*\*

- When true, graphics print from OPI comments, either stored inside imported EPS files or linked through OPI comments. For details about file linking with OPI comments, see omit EPS, omit PDF, or omit bitmaps.
  \*/
  opiImageReplacement: boolean

/\*\*

- When true, output includes filename, page number, current date and time, plus color separation name.
  \*/
  pageInformationMarks: boolean

/\*\*

- Page placement on the printing medium. Restriction: use only if tile is false.
  \*/
  pagePosition: PagePositions

/\*\*

- Gap separating document pages on the printing medium.
  \*/
  paperGap: number | string

/\*\*

- Paper height value. Restriction: applies to custom paper size or the scale width height scale mode.
  \*/
  paperHeight: PaperSize | number

/\*\*

- Left-edge imageable-area shift applied to the page.
  \*/
  paperOffset: number | string

/\*\*

- Paper size, provided either as a string or as an enumeration. For paper size names, see paper size list.
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

- Paper width value. Restriction: applies to custom paper size or the scale width height scale mode.
  \*/
  paperWidth: PaperSize | number

/\*\*

- Owning object for this PrinterPreset (a Application).
  \*/
  readonly parent: Application

/\*\*

- Printer PostScript level.
  \*/
  postscriptLevel: PostScriptLevels

/\*\*

- PPD selection, given as a PPD name or an enumeration.
  \*/
  ppd: PPDValues | string

/\*\*

- PPD choices that are available.
  \*/
  readonly ppdList: string[]

/\*\*

- When true, black ink is printed. Note: Valid only when trapping is off.
  \*/
  printBlack: boolean

/\*\*

- When true, blank pages are printed. Note: Valid only when trapping is off.
  \*/
  printBlankPages: boolean

/\*\*

- When true, cyan ink is printed. Note: Valid only when trapping is off.
  \*/
  printCyan: boolean

/\*\*

- PostScript file target for printing. Restriction: current printer must be defined as postscript file.
  \*/
  printFile: File

/\*\*

- When true, visible guides and baseline grids are printed. Note: Valid only when trapping is off.
  \*/
  printGuidesGrids: boolean

/\*\*

- Layer set selected for printing.
  \*/
  printLayers: PrintLayerOptions

/\*\*

- When true, magenta ink is printed. Note: Valid only when trapping is off.
  \*/
  printMagenta: boolean

/\*\*

- When true, master pages are included in output.
  \*/
  printMasterPages: boolean

/\*\*

- When true, non-printing objects are printed. Note: Valid only when trapping is off.
  \*/
  printNonprinting: boolean

/\*\*

- Orientation used for the printed page.
  \*/
  printPageOrientation: PrintPageOrientation

/\*\*

- When true, each spread prints with all spread pages on one sheet. When false, spread pages output as separate pages.
  \*/
  printSpreads: boolean

/\*\*

- When true, yellow ink is printed. Note: Valid only when trapping is off.
  \*/
  printYellow: boolean

/\*\*

- Printer currently selected.
  \*/
  printer: Printer | string

/\*\*

- Printer choices that are available.
  \*/
  readonly printerList: string[]

/\*\*

- Color profile setting.
  \*/
  profile: Profile | string

/\*\*

- Batch property setter for assigning several properties together.
  \*/
  properties: object

/\*\*

- When true, small off-page targets print for aligning color separations.
  \*/
  registrationMarks: boolean

/\*\*

- When true, pages print from last to first.
  \*/
  reverseOrder: boolean

/\*\*

- Percentage used to scale page height while printing. Allowed range: 0 to 1000. Restriction: scale mode must be scale width height.
  \*/
  scaleHeight: number

/\*\*

- Scaling policy applied to the page. Note: Valid only when printing from Layout view.
  \*/
  scaleMode: ScaleModes

/\*\*

- When true, scaling proportions are constrained, and the latest scale width or scale height value supplies both dimensions. Note: Valid only when scale mode is scale width height.
  \*/
  scaleProportional: boolean

/\*\*

- Percentage used to scale page width during printing. Allowed range: 0 to 1000. Restriction: scale mode must be scale width height.
  \*/
  scaleWidth: number

/\*\*

- Ink screening configuration for composite gray output in PostScript or PDF format. .
  \*/
  screening: Screeening | string

/\*\*

- Ink screenings listed by the PPD. Restriction: color output must be separations or in rip separations.
  \*/
  readonly screeningList: string[]

/\*\*

- Image data delivered to the printer or output file.
  \*/
  sendImageData: ImageDataTypes

/\*\*

- Page order selected for printing.
  \*/
  sequence: Sequences

/\*\*

- When true, overprinting spot inks with different neutral density values is approximated by converting spot colors to process colors for print output. Restriction: unavailable if the color output mode leaves color profiles unchanged.
  \*/
  simulateOverprint: boolean

/\*\*

- Color management system source. Note: Valid only when use color management is true.
  \*/
  sourceSpace: SourceSpaces

/\*\*

- When true, text prints black unless it uses None, Paper, or a white-equivalent color value. When false, colored text, such as blue hyperlinks, prints as halftone patterns. Note: Valid only when trapping is off.
  \*/
  textAsBlack: boolean

/\*\*

- When true, thumbnails are printed. Restriction: trapping must be off and tile must be false.
  \*/
  thumbnails: boolean

/\*\*

- Thumbnails count placed on each page.
  \*/
  thumbnailsPerPage: ThumbsPerPage

/\*\*

- When true, pages are tiled.
  \*/
  tile: boolean

/\*\*

- Tiling overlap amount. Restriction: tiling must be true and tiling type must not be manual.
  \*/
  tilingOverlap: number

/\*\*

- Tiling mode. Note: Valid only when tiling is true.
  \*/
  tilingType: TilingTypes

/\*\*

- Trapping type setting.
  \*/
  trapping: Trapping

/\*\*

- When true, the document bleed area is used for printing.
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

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Makes a duplicate of the PrinterPreset.
  \*/
  duplicate(): PrinterPreset

/\*\*

- Resolves the object specifier and produces object references in an array.
  \*/
  getElements(): PrinterPreset[]

/\*\*

- Removes the PrinterPreset.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that, when run, returns the PrinterPreset.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing printer presets.
  \*/
  declare class PrinterPresets {
  /\*\*
  - Count of objects held in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the PrinterPreset at the specified index.
- @param index Index value.
  \*/
  [index: number]: PrinterPreset

/\*\*

- Creates a PrinterPreset.
- @param withProperties Starting property values for the new PrinterPreset
  \*/
  add(withProperties: object): PrinterPreset

/\*\*

- Gets any PrinterPreset from the collection.
  \*/
  anyItem(): PrinterPreset

/\*\*

- Shows how many elements are in the PrinterPreset collection.
  \*/
  count(): number

/\*\*

- Gets all PrinterPreset objects in the collection.
  \*/
  everyItem(): PrinterPreset[]

/\*\*

- Gets the first PrinterPreset in the collection.
  \*/
  firstItem(): PrinterPreset

/\*\*

- Gets the PrinterPreset identified by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): PrinterPreset

/\*\*

- Gets the PrinterPreset identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): PrinterPreset

/\*\*

- Gets the PrinterPresets contained in the requested range.
- @param from PrinterPreset, index, or name at the range start.
- @param to PrinterPreset, index, or name at the range end.
  \*/
  itemByRange(from: PrinterPreset | number | string, to: PrinterPreset | number | string): PrinterPreset[]

/\*\*

- Gets the final PrinterPreset in the collection.
  \*/
  lastItem(): PrinterPreset

/\*\*

- Gets the central PrinterPreset from the collection.
  \*/
  middleItem(): PrinterPreset

/\*\*

- Gets the PrinterPreset positioned after the supplied PrinterPreset in the collection.
- @param obj PrinterPreset whose index precedes the requested PrinterPreset.
  \*/
  nextItem(obj: PrinterPreset): PrinterPreset

/\*\*

- Gets the PrinterPreset at the index before the specified index.
- @param obj Index of the PrinterPreset positioned after the requested PrinterPreset.
  \*/
  previousItem(obj: PrinterPreset): PrinterPreset

/\*\*

- Builds a string that, when run, returns the PrinterPreset.
  \*/
  toSource(): string
  }

/\*\*

- Preferences controlling XML import.
  \*/
  declare class XMLImportPreference extends Preference {
  /\*\*
  - When true, an XSLT file is used to transform the XML.
    \*/
    allowTransform: boolean

/\*\*

- When true, imported XML is linked to its source file. When false, the file is embedded.
  \*/
  createLinkToXML: boolean

/\*\*

- When true, incoming elements without matches in the existing structure are ignored. Note: Valid only when import style is merge.
  \*/
  ignoreUnmatchedIncoming: boolean

/\*\*

- When true, existing content remains when matching XML content contains only whitespace, such as a carriage return or tab character. Note: Valid only when import style is merge.
  \*/
  ignoreWhitespace: boolean

/\*\*

- When true, CALS tables are imported as InDesign tables.
  \*/
  importCALSTables: boolean

/\*\*

- Method used to incorporate imported XML content into the document.
  \*/
  importStyle: XMLImportStyles

/\*\*

- When true, text is imported into tables whose tags match placeholder tables and cells. Note: Valid only when import style is merge.
  \*/
  importTextIntoTables: boolean

/\*\*

- When true, import targets the selected XML element. When false, import starts at the root element.
  \*/
  importToSelected: boolean

/\*\*

- When true, existing document elements or placeholders lacking XML file matches are deleted. Note: Valid only when import style is merge.
  \*/
  removeUnmatchedExisting: boolean

/\*\*

- When true, repeated text elements take formatting from placeholder text. Note: Valid only when import style is merge.
  \*/
  repeatTextElements: boolean

/\*\*

- XSLT file name. Restriction: allow transform must be true.
  \*/
  transformFilename: File | XMLTransformFile

/\*\*

- Stylesheet parameters are supplied as name/value-pair entries using [[name, value], [name, value], ...]. Return can be: ordered array with name:String and value:String.
  \*/
  transformParameters: any[]
  }

/\*\*

- Preferences controlling XML export.
  \*/
  declare class XMLExportPreference extends Preference {
  /\*\*
  - When true, an XSLT file is used to transform the XML.
    \*/
    allowTransform: boolean

/\*\*

- When true, special characters are replaced with character references.
  \*/
  characterReferences: boolean

/\*\*

- When true, formatted images are copied into the images subfolder.
  \*/
  copyFormattedImages: boolean

/\*\*

- When true, optimized images are copied into the images subfolder.
  \*/
  copyOptimizedImages: boolean

/\*\*

- When true, original images are copied into the images subfolder.
  \*/
  copyOriginalImages: boolean

/\*\*

- When true, the DTD is omitted from exported XML content.
  \*/
  excludeDtd: boolean

/\*\*

- When true, XML content exports from the selected XML element. When false, the entire document exports.
  \*/
  exportFromSelected: boolean

/\*\*

- Export format used for untagged tables in tagged stories.
  \*/
  exportUntaggedTablesFormat: XMLExportUntaggedTablesFormat

/\*\*

- File encoding used when exporting XML content.
  \*/
  fileEncoding: XMLFileEncoding

/\*\*

- When true, interlaced GIFs are generated. Note: Not validwhen image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean

/\*\*

- GIF conversion color palette. Note: Not valid when image conversion is JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette

/\*\*

- File format selected for converted images. Restriction: copy optimized images and/or copy formatted images must be true.
  \*/
  imageConversion: ImageConversion

/\*\*

- Formatting method for converted JPEG images. Restriction: unavailable when image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat

/\*\*

- Quality setting for converted JPEG images. Restriction: unavailable when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality

/\*\*

- Preferred browser used to view XML.
  \*/
  preferredBrowser: File | NothingEnum

/\*\*

- When true, exported XML content includes Ruby text.
  \*/
  ruby: boolean

/\*\*

- XSLT file name. Note: Valid when allow transform is true.
  \*/
  transformFilename: File | XMLTransformFile

/\*\*

- When true, exported XML content opens in the specified viewer.
  \*/
  viewAfterExport: boolean
  }

/\*\*

- Preferences for XML behavior.
  \*/
  declare class XMLPreference extends Preference {
  /\*\*
  - Default cell tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only when default cell tag name value creates a new tag. Existing tag colors are not updated. .
    \*/
    defaultCellTagColor: [number, number, number] | UIColors

/\*\*

- Default tag name used for new table cell elements. It can identify an existing tag or create a new one.
  \*/
  defaultCellTagName: string

/\*\*

- New image tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only while creating the tag.
  \*/
  defaultImageTagColor: [number, number, number] | UIColors

/\*\*

- Default name assigned to newly generated image elements.
  \*/
  defaultImageTagName: string

/\*\*

- Default story tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only when default story tag name value creates a new tag. Existing tag colors are not updated.
  \*/
  defaultStoryTagColor: [number, number, number] | UIColors

/\*\*

- Default tag name used for new story elements. It can identify an existing tag or create a new one.
  \*/
  defaultStoryTagName: string

/\*\*

- Default table tag color, supplied as either a three-double array with 0 to 255 values for R, G, and B, or as a UI color. Restriction: applies only when default table tag name value creates a new tag. Existing tag colors are not updated. .
  \*/
  defaultTableTagColor: [number, number, number] | UIColors

/\*\*

- Default tag name used for new table elements. It can identify an existing tag or create a new one.
  \*/
  defaultTableTagName: string

/\*\*

- Preference controlling whether deleting related content, such as a page item or text fragment, also deletes the element.
  \*/
  deleteElementOnContentDeletion: boolean
  }

/\*\*

- Preferences for export for web.
  \*/
  declare class ExportForWebPreference extends Preference {
  /\*\*
  - When true, formatted images are copied into the images subfolder.
    \*/
    copyFormattedImages: boolean

/\*\*

- When true, optimized images are copied into the images subfolder.
  \*/
  copyOptimizedImages: boolean

/\*\*

- When true, original images are copied into the images subfolder.
  \*/
  copyOriginalImages: boolean

/\*\*

- When true, interlaced GIFs are generated. Note: Not validwhen image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean

/\*\*

- GIF conversion color palette. Note: Not valid when image conversion is JPEG.
  \*/
  gifOptionsPalette: GIFOptionsPalette

/\*\*

- File format selected for converted images. Restriction: copy optimized images and/or copy formatted images must be true.
  \*/
  imageConversion: ImageConversion

/\*\*

- Formatting method for converted JPEG images. Restriction: unavailable when image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat

/\*\*

- Quality setting for converted JPEG images. Restriction: unavailable when image conversion is GIF.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality
  }

/\*\*

- Default settings for anchored objects.
  \*/
  declare class AnchoredObjectDefault extends Preference {
  /\*\*
  - Starting frame type assigned to a new anchored object.
    \*/
    anchorContent: ContentType

/\*\*

- Starting object style assigned to a new anchored object.
  \*/
  anchoredObjectStyle: ObjectStyle

/\*\*

- Starting paragraph style assigned to a new anchored object. Restriction: anchor content must be text.
  \*/
  anchoredParagraphStyle: ParagraphStyle

/\*\*

- Starting height assigned to a new anchored object.
  \*/
  initialAnchorHeight: number | string

/\*\*

- Starting width assigned to a new anchored object.
  \*/
  initialAnchorWidth: number | string
  }
