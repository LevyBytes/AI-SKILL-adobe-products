# Indesign (part 46)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- When true, grids sit behind every other object on the spread.
  \*/
  gridsInBack: boolean

/\*\*

- Number of rows used to subdivide space between horizontal document-grid lines.
  \*/
  horizontalGridSubdivision: number

/\*\*

- Spacing amount between major horizontal lines in the document grid.
  \*/
  horizontalGridlineDivision: number | string

/\*\*

- Number of columns used to subdivide space between vertical document-grid lines.
  \*/
  verticalGridSubdivision: number

/\*\*

- Spacing amount between major vertical lines in the document grid.
  \*/
  verticalGridlineDivision: number | string
  }

/\*\*

- Preferences for guides.
  \*/
  declare class GuidePreference extends Preference {
  /\*\*
  - When true, guides sit behind every other object on the spread.
    \*/
    guidesInBack: boolean

/\*\*

- When true, guides are locked against moving, adding, and deleting.
  \*/
  guidesLocked: boolean

/\*\*

- When true, guides are shown.
  \*/
  guidesShown: boolean

/\*\*

- When true, created, moved, or resized objects inside the specified range snap to the nearest guide. For range details, see guide snapto zone.
  \*/
  guidesSnapto: boolean

/\*\*

- Color for the guide; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
  \*/
  rulerGuidesColor: [number, number, number] | UIColors

/\*\*

- Magnification percentage below which ruler guides are hidden. (Range: 5 to 4000)
  \*/
  rulerGuidesViewThreshold: number
  }

/\*\*

- Preferences for margins.
  \*/
  declare class MarginPreference extends Preference {
  /\*\*
  - MarginPreference bottom edge.
    \*/
    bottom: number | string

/\*\*

- Number of columns placed on the page.
  \*/
  columnCount: number

/\*\*

- Text direction within the column.
  \*/
  columnDirection: HorizontalOrVertical

/\*\*

- Distance between columns.
  \*/
  columnGutter: number | string

/\*\*

- Distance from the left margin for each column guide, formatted as [guide1, guide2, guide3].
  \*/
  columnsPositions: (number | string)[]

/\*\*

- When false, columns use even spacing; when true, custom column widths are allowed.
  \*/
  readonly customColumns: boolean

/\*\*

- MarginPreference left edge.
  \*/
  left: number | string

/\*\*

- MarginPreference right edge.
  \*/
  right: number | string

/\*\*

- MarginPreference top edge.
  \*/
  top: number | string
  }

/\*\*

- Preferences for the pasteboard.
  \*/
  declare class PasteboardPreference extends Preference {
  /\*\*
  - Color for bleed guides; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
    \*/
    bleedGuideColor: [number, number, number] | UIColors

/\*\*

- When true, Preview Background uses Theme Color; otherwise it uses the value selected in the Preview Background color drop down.
  \*/
  matchPreviewBackgroundToThemeColor: boolean

/\*\*

- Pasteboard margin minimums for horizontal and vertical sides. A horizontal margin of -1 represents one document page width.
  \*/
  pasteboardMargins: (number | string)[]

/\*\*

- Color for the preview background; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
  \*/
  previewBackgroundColor: [number, number, number] | UIColors

/\*\*

- Color for slug guides; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
  \*/
  slugGuideColor: [number, number, number] | UIColors
  }

/\*\*

- Preferences for the view.
  \*/
  declare class ViewPreference extends Preference {
  /\*\*
  - Arrow-key movement distance for a specified object. Ranges by unit: points range 0.001 to 100; picas range 0p0.001 to 8p4; mm range 0 to 35.278; cm range 0 to 3.5278; inches range 0 to 1.3889; ciceros range 0c0.001 to 7c9.839.
    \*/
    cursorKeyIncrement: number | string

/\*\*

- Guide snapping zone in pixels. (Range: 1 to 36) Note: snapping happens only while guides are shown.
  \*/
  guideSnaptoZone: number

/\*\*

- Point distance between major tick marks on the horizontal ruler. (Range: 4 to 256) Applies only when horizontal measurement units is custom.
  \*/
  horizontalCustomPoints: number

/\*\*

- Measurement unit for the horizontal ruler and other horizontal measurements, including grid columns, horizontal offsets, column gutters, or others.
  \*/
  horizontalMeasurementUnits: MeasurementUnits

/\*\*

- Points per inch value, typically 72. (Range: 60 to 80)
  \*/
  pointsPerInch: number

/\*\*

- Measurement unit used by the print dialog.
  \*/
  printDialogMeasurementUnits: MeasurementUnits

/\*\*

- Default zero point where the vertical and horizontal rulers intersect, plus the horizontal ruler scope.
  \*/
  rulerOrigin: RulerOrigin

/\*\*

- When true, unselected frame borders and diagonal lines in empty unselected frames are shown.
  \*/
  showFrameEdges: boolean

/\*\*

- When true, notes are shown.
  \*/
  showNotes: boolean

/\*\*

- When true, the horizontal and vertical rulers are shown.
  \*/
  showRulers: boolean

/\*\*

- Measurement unit used for stroke measurements.
  \*/
  strokeMeasurementUnits: MeasurementUnits

/\*\*

- Measurement unit used for text-size measurements.
  \*/
  textSizeMeasurementUnits: MeasurementUnits

/\*\*

- Measurement units used for typography.
  \*/
  typographicMeasurementUnits: MeasurementUnits

/\*\*

- Point distance between major tick marks on the vertical ruler. (Range: 4 to 256) Applies only when vertical measurement units is custom.
  \*/
  verticalCustomPoints: number

/\*\*

- Measurement unit for the vertical ruler and other vertical measurements, including grid rows, vertical offsets, row heights, or others.
  \*/
  verticalMeasurementUnits: MeasurementUnits
  }

/\*\*

- Preset containing every setting for a new document.
  \*/
  declare class DocumentPreset {
  /\*\*
  - DocumentPreset bottom edge.
    \*/
    bottom: number | string

/\*\*

- Number of columns placed on the page.
  \*/
  columnCount: number

/\*\*

- Distance between columns.
  \*/
  columnGutter: number | string

/\*\*

- When true, a new document gives the document A-master primary text frames.
  \*/
  createPrimaryTextFrame: boolean

/\*\*

- Offset amount for the bottom document bleed. Note: set the bleed bottom offset only when document bleed uniform size is false.
  \*/
  documentBleedBottomOffset: number | string

/\*\*

- Offset amount for the inside or left document bleed. Note: set the bleed inside or left offset only when document bleed uniform size is false.
  \*/
  documentBleedInsideOrLeftOffset: number | string

/\*\*

- Offset amount for the outside or right document bleed. Note: set the bleed outside or right offset only when document bleed uniform size is false.
  \*/
  documentBleedOutsideOrRightOffset: number | string

/\*\*

- Offset amount for the top document bleed.
  \*/
  documentBleedTopOffset: number | string

/\*\*

- When true, every document-side bleed offset uses the document bleed top offset value. The default setting is true.
  \*/
  documentBleedUniformSize: boolean

/\*\*

- When true, slug measurements on every document side use the slug top offset value. The default value is false.
  \*/
  documentSlugUniformSize: boolean

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- When true, the document uses facing pages.
  \*/
  facingPages: boolean

/\*\*

- Unique ID for the DocumentPreset.
  \*/
  readonly id: number

/\*\*

- Index of the DocumentPreset inside its containing object.
  \*/
  readonly index: number

/\*\*

- Document intent.
  \*/
  intent: DocumentIntentOptions

/\*\*

- Returns true when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Property accepting any string value.
  \*/
  label: string

/\*\*

- DocumentPreset left edge.
  \*/
  left: number | string

/\*\*

- DocumentPreset name.
  \*/
  name: string

/\*\*

- Page height.
  \*/
  pageHeight: number | string

/\*\*

- Page orientation setting.
  \*/
  pageOrientation: PageOrientation

/\*\*

- Page size.
  \*/
  pageSize: string

/\*\*

- Page width.
  \*/
  pageWidth: number | string

/\*\*

- Page count for the document. (Range: 1 to 9999)
  \*/
  pagesPerDocument: number

/\*\*

- DocumentPreset parent (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property used to set several properties in one operation.
  \*/
  properties: object

/\*\*

- DocumentPreset right edge.
  \*/
  right: number | string

/\*\*

- Bottom slug offset amount. Note: changing the slug bottom offset requires document slug uniform size to be false.
  \*/
  slugBottomOffset: number | string

/\*\*

- Inside or left slug offset amount. Note: changing the slug inside or left offset requires document slug uniform size to be false.
  \*/
  slugInsideOrLeftOffset: number | string

/\*\*

- Outside or right slug offset amount. Note: changing the slug right or outside offset requires document slug uniform size to be false.
  \*/
  slugRightOrOutsideOffset: number | string

/\*\*

- Offset applied to the top slug.
  \*/
  slugTopOffset: number | string

/\*\*

- Document start page number; it matches the first section's start page number. Default value is 1.
  \*/
  startPageNumber: number

/\*\*

- Top boundary value for the DocumentPreset.
  \*/
  top: number | string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Makes a copy of the DocumentPreset.
  \*/
  duplicate(): DocumentPreset

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): DocumentPreset[]

/\*\*

- Writes a label value for the specified key.
- @param key Key to update.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the DocumentPreset.
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

- Builds executable source text that returns the DocumentPreset when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for document presets.
  \*/
  declare class DocumentPresets {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the DocumentPreset at the specified index.
- @param index Index to resolve.
  \*/
  [index: number]: DocumentPreset

/\*\*

- Builds a new DocumentPreset.
- @param withProperties Starting property values for the new DocumentPreset
  \*/
  add(withProperties: object): DocumentPreset

/\*\*

- Provides an arbitrary DocumentPreset from the collection.
  \*/
  anyItem(): DocumentPreset

/\*\*

- Reports how many elements the DocumentPreset collection contains.
  \*/
  count(): number

/\*\*

- Provides all DocumentPreset entries from the collection.
  \*/
  everyItem(): DocumentPreset[]

/\*\*

- Provides the first DocumentPreset from the collection.
  \*/
  firstItem(): DocumentPreset

/\*\*

- Resolves a DocumentPreset by the specified index or name.
- @param index Index or name to use.
  \*/
  item(index: number | string): DocumentPreset

/\*\*

- Resolves a DocumentPreset by the specified ID.
- @param id ID to use.
  \*/
  itemByID(id: number): DocumentPreset

/\*\*

- Resolves a DocumentPreset by the specified name.
- @param name Name to use.
  \*/
  itemByName(name: string): DocumentPreset

/\*\*

- Provides DocumentPresets inside the requested range.
- @param from DocumentPreset, index, or name that starts the range.
- @param to DocumentPreset, index, or name that ends the range.
  \*/
  itemByRange(from: DocumentPreset | number | string, to: DocumentPreset | number | string): DocumentPreset[]

/\*\*

- Provides the final DocumentPreset in the collection.
  \*/
  lastItem(): DocumentPreset

/\*\*

- Provides the middle DocumentPreset from the collection.
  \*/
  middleItem(): DocumentPreset

/\*\*

- Provides the DocumentPreset whose index comes after the specified DocumentPreset in the collection.
- @param obj DocumentPreset before the desired DocumentPreset.
  \*/
  nextItem(obj: DocumentPreset): DocumentPreset

/\*\*

- Provides the DocumentPreset at the index immediately before the specified index.
- @param obj Index of the DocumentPreset after the desired DocumentPreset.
  \*/
  previousItem(obj: DocumentPreset): DocumentPreset

/\*\*

- Builds executable source text that returns the DocumentPreset when run.
  \*/
  toSource(): string
  }

/\*\*

- Preferences used for printing.
  \*/
  declare class PrintPreference extends Preference {
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

- When true, the printed document includes the slug area.
  \*/
  includeSlugToPrint: boolean

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

- Pages selected for printing, given as either an enumeration or a string. In the string form, use a hyphen (-) between page numbers for a range, and use a comma (,) between separate pages.
  \*/
  pageRange: PageRange | string

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

- When true, master pages print.
  \*/
  printMasterPages: boolean

/\*\*

- When true, non-printing objects print. Requires trapping to be off.
  \*/
  printNonprinting: boolean

/\*\*

- Orientation used for the printed page.
  \*/
  printPageOrientation: PrintPageOrientation

/\*\*

- When true, each spread prints with all spread pages on one sheet. When false, spread pages print as separate pages.
  \*/
  printSpreads: boolean

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
