# Indesign (part 49)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

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

- Lets several property values be assigned together.
  \*/
  properties: object

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

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates another PDFExportPreset from this one.
  \*/
  duplicate(): PDFExportPreset

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): PDFExportPreset[]

/\*\*

- Deletes the PDFExportPreset.
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

- Builds source text that can evaluate back to the PDFExportPreset.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for PDF export presets.
  \*/
  declare class PDFExportPresets {
  /\*\*
  - Object count contained by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the PDFExportPreset at the given index.
- @param index Index value.
  \*/
  [index: number]: PDFExportPreset

/\*\*

- Creates a PDFExportPreset.
- @param withProperties Initial property values for the new PDFExportPreset
  \*/
  add(withProperties: object): PDFExportPreset

/\*\*

- Gets an arbitrary PDFExportPreset from the collection.
  \*/
  anyItem(): PDFExportPreset

/\*\*

- Reports how many elements are in the PDFExportPreset collection.
  \*/
  count(): number

/\*\*

- Gets all PDFExportPreset objects in the collection.
  \*/
  everyItem(): PDFExportPreset[]

/\*\*

- Gets the collection's first PDFExportPreset.
  \*/
  firstItem(): PDFExportPreset

/\*\*

- Gets the PDFExportPreset matching an index or name.
- @param index Index or name.
  \*/
  item(index: number | string): PDFExportPreset

/\*\*

- Gets the PDFExportPreset with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): PDFExportPreset

/\*\*

- Gets PDFExportPresets inside the requested range.
- @param from PDFExportPreset, index, or name where the range starts.
- @param to PDFExportPreset, index, or name where the range ends.
  \*/
  itemByRange(from: PDFExportPreset | number | string, to: PDFExportPreset | number | string): PDFExportPreset[]

/\*\*

- Gets the collection's last PDFExportPreset.
  \*/
  lastItem(): PDFExportPreset

/\*\*

- Gets the PDFExportPreset positioned in the middle of the collection.
  \*/
  middleItem(): PDFExportPreset

/\*\*

- Gets the PDFExportPreset positioned after the supplied PDFExportPreset.
- @param obj PDFExportPreset positioned before the wanted PDFExportPreset.
  \*/
  nextItem(obj: PDFExportPreset): PDFExportPreset

/\*\*

- Gets the PDFExportPreset positioned before the supplied index.
- @param obj Index of the PDFExportPreset positioned after the wanted PDFExportPreset.
  \*/
  previousItem(obj: PDFExportPreset): PDFExportPreset

/\*\*

- Builds source text that can evaluate back to the PDFExportPreset.
  \*/
  toSource(): string
  }

/\*\*

- Preferences for placing PDF content.
  \*/
  declare class PDFPlacePreference extends Preference {
  /\*\*
  - Password required to open the PDF document. Valid only when use security is true. Note: scripts may set this value but cannot read it.
    \*/
    openDocumentPassword: string

/\*\*

- Page number of the PDF document page being placed.
  \*/
  pageNumber: number

/\*\*

- Crop type to apply.
  \*/
  pdfCrop: PDFCrop

/\*\*

- True makes the PDF background transparent.
  \*/
  transparentBackground: boolean
  }

/\*\*

- Application-level interactive PDF export settings.
  \*/
  declare class InteractivePDFExportPreference extends Preference {
  /\*\*
  - Assigns the exported PDF default document language. The correct ISO language code is required.
    \*/
    defaultDocumentLanguage: string

/\*\*

- Exports each page or spread to its own PDF file.
  \*/
  exportAsSinglePages: boolean

/\*\*

- True stores each layer as an Acrobat layer in the PDF document.
  \*/
  exportLayers: boolean

/\*\*

- True combines every exported spread into one page using the spread's original width.
  \*/
  exportReaderSpreads: boolean

/\*\*

- Turns on automatic page flipping in the exported PDF.
  \*/
  flipPages: boolean

/\*\*

- Page flipping speed.
  \*/
  flipPagesSpeed: number

/\*\*

- True creates thumbnail images for each page or spread.
  \*/
  generateThumbnails: boolean

/\*\*

- True creates a tagged PDF file. Note: When acrobat compatibility is acrobat 6 or higher, tags appear only after opening the PDF in Acrobat 6 or higher.
  \*/
  includeStructure: boolean

/\*\*

- Method used to draw interactive elements.
  \*/
  interactivePDFInteractiveElementsOption: InteractivePDFInteractiveElementsOptions

/\*\*

- Opens the PDF in full screen mode.
  \*/
  openInFullScreen: boolean

/\*\*

- Pages to print, given as an enumeration or string. In a string, use a hyphen (-) between page numbers for a range, or use a comma (,) between separate pages.
  \*/
  pageRange: PageRange | string

/\*\*

- Page transition name applied to all pages.
  \*/
  pageTransitionOverride: PageTransitionOverrideOptions

/\*\*

- Exported PDF display title setting.
  \*/
  pdfDisplayTitle: PdfDisplayTitleOptions

/\*\*

- PDF JPEG quality setting.
  \*/
  pdfJPEGQuality: PDFJPEGQualityOptions

/\*\*

- Exported PDF magnification setting.
  \*/
  pdfMagnification: PdfMagnificationOptions

/\*\*

- Exported PDF page layout setting.
  \*/
  pdfPageLayout: PageLayoutOptions

/\*\*

- PDF raster compression setting.
  \*/
  pdfRasterCompression: PDFRasterCompressionOptions

/\*\*

- Raster resolution setting.
  \*/
  rasterResolution: RasterResolutionOptions | number

/\*\*

- Suffix appended to each file name when pages export as separate PDF files.
  \*/
  singlePagesPDFSuffix: string

/\*\*

- Uses tagged PDF structure to determine interactive element tab order.
  \*/
  usePDFStructureForTabOrder: boolean

/\*\*

- True opens the PDF file automatically after export.
  \*/
  viewPDF: boolean
  }

/\*\*

- Tagged PDF preference settings.
  \*/
  declare class TaggedPDFPreference extends Preference {
  /\*\*
  - Tagged PDF structure order setting.
    \*/
    structureOrder: TaggedPDFStructureOrderOptions
    }

/\*\*

- Options that define default endnote formatting.
  \*/
  declare class EndnoteOption extends Preference {
  /\*\*
  - Position of endnote reference numbers in main text.
    \*/
    endnoteMarkerPositioning: FootnoteMarkerPositioning | string

/\*\*

- Character style applied to endnote reference numbers in main text.
  \*/
  endnoteMarkerStyle: CharacterStyle

/\*\*

- Endnote numbering style.
  \*/
  endnoteNumberingStyle: FootnoteNumberingStyle | string

/\*\*

- Endnote prefix text. (Limit: 0 to 100 characters)
  \*/
  endnotePrefix: string

/\*\*

- Text inserted between the endnote marker number and endnote text. (Range: 0 to 100 characters)
  \*/
  endnoteSeparatorText: string

/\*\*

- Endnote suffix text. (Limit: 0 to 100 characters)
  \*/
  endnoteSuffix: string

/\*\*

- Paragraph style applied to endnote text.
  \*/
  endnoteTextStyle: ParagraphStyle

/\*\*

- Endnote title. (Limit: 0 to 100 characters)
  \*/
  endnoteTitle: string

/\*\*

- Paragraph style applied to the endnote title.
  \*/
  endnoteTitleStyle: ParagraphStyle

/\*\*

- Endnote frame creation behavior.
  \*/
  frameCreateOption: EndnoteFrameCreate | string

/\*\*

- Point where endnote numbering restarts.
  \*/
  restartEndnoteNumbering: EndnoteRestarting | string

/\*\*

- Scope value for endnotes.
  \*/
  scopeValue: EndnoteScope | string

/\*\*

- Position for the endnote prefix and/or suffix.
  \*/
  showEndnotePrefixSuffix: FootnotePrefixSuffix | string

/\*\*

- Starting number for endnote numbering.
  \*/
  startEndnoteNumberAt: number
  }

/\*\*

- Font sync preference settings.
  \*/
  declare class FontSyncPreference extends Preference {
  /\*\*
  - Preference controlling font auto activation.
    \*/
    autoActivateFont: boolean
    }

/\*\*

- Default formatting properties for page items.
  \*/
  declare class PageItemDefault extends Preference {
  /\*\*
  - Default graphic object style applied to the PageItemDefault.
    \*/
    appliedGraphicObjectStyle: ObjectStyle | string

/\*\*

- Default frame grid object style applied to the PageItemDefault.
  \*/
  appliedGridObjectStyle: ObjectStyle | string

/\*\*

- Default text object style applied to the PageItemDefault.
  \*/
  appliedTextObjectStyle: ObjectStyle | string

/\*\*

- Arrowhead alignment applied to the PageItemDefault.
  \*/
  arrowHeadAlignment: ArrowHeadAlignmentEnum

/\*\*

- Shape applied to the bottom left corner of rectangular shapes.
  \*/
  bottomLeftCornerOption: CornerOptions

/\*\*

- Bottom-left rectangular corner effect radius, in measurement units
  \*/
  bottomLeftCornerRadius: number | string

/\*\*

- Shape applied to the bottom right corner of rectangular shapes.
  \*/
  bottomRightCornerOption: CornerOptions

/\*\*

- Bottom-right rectangular corner effect radius, in measurement units
  \*/
  bottomRightCornerRadius: number | string

/\*\*

- Transparency settings for PageItemDefault content.
  \*/
  readonly contentTransparencySettings: ContentTransparencySetting

/\*\*

- End shape for an open path.
  \*/
  endCap: EndCap

/\*\*

- Corner join applied to the PageItemDefault.
  \*/
  endJoin: EndJoin

/\*\*

- Swatch (color, gradient, tint, or mixed ink) applied to the PageItemDefault fill. .
  \*/
  fillColor: Swatch | string

/\*\*

- Tint percentage for the PageItemDefault's fill color. (Use 0 to 100 for an explicit tint percent; use -1 for inherited or overridden value.)
  \*/
  fillTint: number

/\*\*

- Transparency settings for the PageItemDefault fill.
  \*/
  readonly fillTransparencySettings: FillTransparencySetting

/\*\*

- Gap swatch for a dashed, dotted, or striped stroke, using color, gradient, tint, or mixed ink. For information, see stroke type.
  \*/
  gapColor: Swatch

/\*\*

- Gap color tint as a percentage. (Use 0 to 100 for an explicit tint percent; use -1 for inherited or overridden value.)
  \*/
  gapTint: number

/\*\*

- Angle for a linear gradient applied to the PageItemDefault fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Angle for a linear gradient applied to the PageItemDefault stroke. (Range: -180 to 180)
  \*/
  gradientStrokeAngle: number

/\*\*

- Start-of-path arrowhead scaling. (Range: 1 to 1000)
  \*/
  leftArrowHeadScale: number

/\*\*

- Arrowhead applied to the start of the path.
  \*/
  leftLineEnd: ArrowHead

/\*\*

- Stroke-width to miter-length ratio limit before a pointed miter join changes to a squared-off bevel join.
  \*/
  miterLimit: number

/\*\*

- True prevents the PageItemDefault from printing.
  \*/
  nonprinting: boolean

/\*\*

- True makes the PageItemDefault's fill color overprint underlying objects. False makes the fill color knock out underlying colors.
  \*/
  overprintFill: boolean

/\*\*

- True makes the gap color overprint underlying colors. False makes the gap color knock out underlying colors.
  \*/
  overprintGap: boolean

/\*\*

- True makes the PageItemDefault's stroke color overprint underlying objects. False makes the stroke color knock out theunderlying colors.
  \*/
  overprintStroke: boolean

/\*\*

- Collection of preferences objects.
  \*/
  readonly preferences: Preferences

/\*\*

- End-of-path arrowhead scaling. (Range: 1 to 1000)
  \*/
  rightArrowHeadScale: number

/\*\*

- Arrowhead applied to the end of the path.
  \*/
  rightLineEnd: ArrowHead

/\*\*

- Stroke alignment assigned to the PageItemDefault.
  \*/
  strokeAlignment: StrokeAlignment

/\*\*

- Swatch (color, gradient, tint, or mixed ink) used on the PageItemDefault stroke.
  \*/
  strokeColor: Swatch | string

/\*\*

- Tint percentage for the object's stroke color. (Use a number from 0 to 100 for an explicit tint percent; use -1 for the inherited or overridden value.)
  \*/
  strokeTint: number

/\*\*

- Stroke-specific transparency configuration.
  \*/
  readonly strokeTransparencySettings: StrokeTransparencySetting

/\*\*

- Stroke style name that should be used.
  \*/
  strokeType: StrokeStyle | string

/\*\*

- PageItemDefault stroke weight, measured in points.
  \*/
  strokeWeight: number | string

/\*\*

- Corner shape used on the top left corner of rectangular shapes and on every corner of non-rectangular shapes. Note: corner option is not the same as end join; a corner option can define its own radius, while an end join's rounded or beveled result is driven by stroke weight.
  \*/
  topLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the corner effect on the top left of rectangular shapes and on all corners of non-rectangular shapes.
  \*/
  topLeftCornerRadius: number | string

/\*\*

- Corner shape assigned to the top right corner of rectangular shapes.
  \*/
  topRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the top right corner effect on rectangular shapes.
  \*/
  topRightCornerRadius: number | string

/\*\*

- General transparency configuration.
  \*/
  readonly transparencySettings: TransparencySetting

/\*\*

- Assigns the requested object style.
- @param using Object style being assigned.
- @param clearingOverrides When true, removes the PageItemDefault's current attributes before the style is applied.
- @param clearingOverridesThroughRootObjectStyle When true, removes attributes and formatting on the PageItemDefault that the object style does not define.
  \*/
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void

/\*\*

- Removes object style overrides.
  \*/
  clearObjectStyleOverrides(): void
  }

/\*\*

- Object export configuration.
  \*/
  declare class ObjectExportOption extends Preference {
  /\*\*
  - Metadata property used as the actual text source. Return form can be an ordered array with namespacePrefix:String and propertyPath:String.
    \*/
    actualMetadataProperty: any

/\*\*

- Source type selected for actual text.
  \*/
  actualTextSourceType: SourceType

/\*\*

- Metadata property used as the alternate text source. Return form can be an ordered array with namespacePrefix:String and propertyPath:String.
  \*/
  altMetadataProperty: any

/\*\*

- Source type selected for alternate text.
  \*/
  altTextSourceType: SourceType

/\*\*

- Page item tag type.
  \*/
  applyTagType: TagType

/\*\*

- User-entered custom actual text.
  \*/
  customActualText: string

/\*\*

- User-entered custom alternate text.
  \*/
  customAltText: string

/\*\*

- When true, object custom layout is active.
  \*/
  customLayout: boolean

/\*\*

- Custom Layout configuration used for the object.
  \*/
  customLayoutType: CustomLayoutTypeEnum

/\*\*

- Object custom size.
  \*/
  customSize: string

/\*\*

- IDPF-recommended epub type.
  \*/
  epubType: string

/\*\*

- When true, interlaced GIFs are generated. Note: Not valid when image conversion is JPEG.
  \*/
  gifOptionsInterlaced: boolean

/\*\*

- GIF conversion palette. Note: Applies only outside JPEG image conversion.
  \*/
  gifOptionsPalette: GIFOptionsPalette

/\*\*

- Image alignment setting.
  \*/
  imageAlignment: ImageAlignmentType

/\*\*

- Lets the user choose the conversion image format.
  \*/
  imageConversionType: ImageFormat

/\*\*

- Resolution used for export.
  \*/
  imageExportResolution: ImageResolution

/\*\*

- Page break configuration for images used with objects.
  \*/
  imagePageBreak: ImagePageBreakType

/\*\*

- Space After value applied to images.
  \*/
  imageSpaceAfter: number

/\*\*

- Space Before value applied to images.
  \*/
  imageSpaceBefore: number

/\*\*

- Formatting method for JPEG images after conversion. Note: Not valid when image conversion is GIF.
  \*/
  jpegOptionsFormat: JPEGOptionsFormat

/\*\*

- Converted JPEG quality setting. Note: Applies only outside GIF image conversion.
  \*/
  jpegOptionsQuality: JPEGOptionsQuality

/\*\*

- Preserve Appearance from Layout.
  \*/
  preserveAppearanceFromLayout: PreserveAppearanceFromLayoutEnum

/\*\*

- Size configuration used for the object.
  \*/
  sizeType: SizeTypeEnum

/\*\*

- When true, object export uses image page break settings.
  \*/
  useImagePageBreak: boolean

/\*\*

- Supplies actual text for the object.
  \*/
  actualText(): string

/\*\*

- Supplies alternate text for the object.
  \*/
  altText(): string
  }

/\*\*

- Preferences for text editing.
  \*/
  declare class TextEditingPreference extends Preference {
  /\*\*
  - When true, text can be dragged and dropped in story editor or galley view.
    \*/
    allowDragAndDropTextInStory: boolean

/\*\*

- When true, text drag-and-drop is allowed on a layout page.
  \*/
  dragAndDropTextInLayout: boolean

/\*\*

- When true, a single Type tool click changes non-text frames into text frames.
  \*/
  singleClickConvertsFramesToTextFrames: boolean

/\*\*

- When true, cutting and pasting text automatically adjusts spacing among words and between words and punctuation marks.
  \*/
  smartCutAndPaste: boolean

/\*\*

- When true, a triple click selects a text line. When false, the same gesture selects a paragraph.
  \*/
  tripleClickSelectsLine: boolean
  }

/\*\*

- Mojikumi UI configuration.
  \*/
  declare class MojikumiUiPreference extends Preference {
  /\*\*
  - When true, every character uses full-width spacing.
    \*/
    lineEndAllOneEm: boolean

/\*\*

- When true, every character uses half-width spacing.
  \*/
  lineEndAllOneHalfEm: boolean

/\*\*

- When true, punctuation and the final character on the line use full-width spacing.
  \*/
  lineEndPeriodOneEm: boolean

/\*\*

- When true, line end uke no float is used.
  \*/
  lineEndUkeNoFloat: boolean

/\*\*

- When true, lines indent by one full space and no float is used for all characters.
  \*/
  oneEmIndentLineEndAllNoFloat: boolean

/\*\*

- When true, lines indent one full space and all characters use full-width spacing.
  \*/
  oneEmIndentLineEndAllOneEm: boolean

/\*\*

- When true, lines indent one full space and all characters use half-width spacing.
  \*/
  oneEmIndentLineEndAllOneHalfEm: boolean

/\*\*

- When true, lines indent one space while punctuation and the line's final character use full-width spacing.
  \*/
  oneEmIndentLineEndPeriodOneEm: boolean

/\*\*

- When true, lines indent by one full space and line end uke no float is used.
  \*/
  oneEmIndentLineEndUkeNoFloat: boolean

/\*\*

- When true, lines indent one space and line end uke one half space is used.
  \*/
  oneEmIndentLineEndUkeOneHalfEm: boolean

/\*\*

- When true, all characters except the line's last character use full-width spacing; the last character may use full- or half-width spacing.
  \*/
  oneOrOneHalfEmIndentLineEndAllOneEm: boolean

/\*\*

- When true, lines indent by one or one-half space, and punctuation plus the line's final character use full-width spacing.
  \*/
  oneOrOneHalfEmIndentLineEndPeriodOneEm: boolean

/\*\*

- When true, lines indent one half space or one full space and line end uke no float is used.
  \*/
  oneOrOneHalfEmIndentLineEndUkeNoFloat: boolean

/\*\*

- When true, lines indent one full or half space and line end uke one half space is used.
  \*/
  oneOrOneHalfEmIndentLineEndUkeOneHalfEm: boolean
  }

/\*\*

- Preferences governing font locking.
  \*/
  declare class FontLockingPreference extends Preference {
  /\*\*
  - When true, missing glyph protection is enabled while changing fonts.
    \*/
    fontChangeLocking: boolean

/\*\*

- When true, missing glyph protection is enabled during typing.
  \*/
  fontInputLocking: boolean
  }

/\*\*

- User dictionary configuration.
  \*/
  declare class DictionaryPreference extends Preference {
  /\*\*
  - Hyphenation exception list used during text composition.
    \*/
    composition: ComposeUsing

/\*\*

- When true, spelling and hyphenation exception lists from the external user dictionary are merged with the document's stored lists.
  \*/
  mergeUserDictionary: boolean

/\*\*

- When true, all stories recompose after compose using settings change or after words are added to or removed from the user dictionary.
  \*/
  recomposeWhenChanged: boolean
  }

/\*\*

- Defaults used when a polygon is created.
  \*/
  declare class PolygonPreference extends Preference {
  /\*\*
  - Star inset percentage for polygon sides. (Range: 0 to 100)
    \*/
    insetPercentage: number

/\*\*

- Polygon side count. (Range: 3 to 100)
  \*/
  numberOfSides: number
  }

/\*\*

- Spell-check configuration.
  \*/
  declare class SpellPreference extends Preference {
  /\*\*
  - When true, first words in sentences are checked for missing capitalization.
    \*/
    checkCapitalizedSentences: boolean

/\*\*

- When true, proper nouns are checked for missing capitalization.
  \*/
  checkCapitalizedWords: boolean

/\*\*

- When true, words are checked for misspellings.
  \*/
  checkMisspelledWords: boolean

/\*\*

- When true, repeated words are checked.
  \*/
  checkRepeatedWords: boolean

/\*\*

- When true, misspellings, repeated words, uncapitalized proper nouns, and uncapitalized sentence starters are underlined. Note: Valid only when the matching properties are true. Related controls include checkMisspelledWords, checkRepeatedWords, checkCapitalizedWords, and checkCapitalizedSentences.
  \*/
  dynamicSpellCheck: boolean
