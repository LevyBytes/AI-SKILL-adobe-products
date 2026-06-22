# Indesign (part 6)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Hyperlink page destination collection.
  \*/
  readonly hyperlinkPageDestinations: HyperlinkPageDestinations

/\*\*

- Hyperlink page item source collection.
  \*/
  readonly hyperlinkPageItemSources: HyperlinkPageItemSources

/\*\*

- Hyperlink text destination collection.
  \*/
  readonly hyperlinkTextDestinations: HyperlinkTextDestinations

/\*\*

- Hyperlink text source collection.
  \*/
  readonly hyperlinkTextSources: HyperlinkTextSources

/\*\*

- Hyperlink URL destination collection.
  \*/
  readonly hyperlinkURLDestinations: HyperlinkURLDestinations

/\*\*

- Hyperlinks collection.
  \*/
  readonly hyperlinks: Hyperlinks

/\*\*

- Hyphenation exception list collection.
  \*/
  readonly hyphenationExceptions: HyphenationExceptions

/\*\*

- Document unique ID.
  \*/
  readonly id: number

/\*\*

- Position of this Document inside its container.
  \*/
  readonly index: number

/\*\*

- IndexOptions used to control index formatting.
  \*/
  readonly indexGenerationOptions: IndexOptions

/\*\*

- Index collection.
  \*/
  readonly indexes: Indexes

/\*\*

- Indexing sort option collection.
  \*/
  readonly indexingSortOptions: IndexingSortOptions

/\*\*

- Ink collection.
  \*/
  readonly inks: Inks

/\*\*

- True when this document is stored as a cloud document.
  \*/
  readonly isCloudDocument: boolean

/\*\*

- True when the object specifier can resolve to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Kinsoku table collection.
  \*/
  readonly kinsokuTables: KinsokuTables

/\*\*

- String-valued label slot available for arbitrary text.
  \*/
  label: string

/\*\*

- Language collection.
  \*/
  readonly languages: Languages

/\*\*

- Layer collection.
  \*/
  readonly layers: Layers

/\*\*

- Default settings used by layout grids.
  \*/
  readonly layoutGridData: LayoutGridDataInformation

/\*\*

- Layout window collection.
  \*/
  readonly layoutWindows: LayoutWindows

/\*\*

- Options for linked page items.
  \*/
  readonly linkedPageItemOptions: LinkedPageItemOption

/\*\*

- Options for linked stories.
  \*/
  readonly linkedStoryOptions: LinkedStoryOption

/\*\*

- Link collection.
  \*/
  readonly links: Links

/\*\*

- Listbox collection.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Settings for margins.
  \*/
  readonly marginPreferences: MarginPreference

/\*\*

- Master spread collection.
  \*/
  readonly masterSpreads: MasterSpreads

/\*\*

- Settings for metadata preferences.
  \*/
  readonly metadataPreferences: MetadataPreference

/\*\*

- Mixed ink group collection.
  \*/
  readonly mixedInkGroups: MixedInkGroups

/\*\*

- Mixed ink collection.
  \*/
  readonly mixedInks: MixedInks

/\*\*

- True after this Document changes since the most recent save.
  \*/
  readonly modified: boolean

/\*\*

- Mojikumi table collection.
  \*/
  readonly mojikumiTables: MojikumiTables

/\*\*

- Preference settings for the Mojikumi user interface.
  \*/
  readonly mojikumiUIPreferences: MojikumiUiPreference

/\*\*

- Motion preset collection.
  \*/
  readonly motionPresets: MotionPresets

/\*\*

- Multi-state object collection.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Document name.
  \*/
  name: string

/\*\*

- Named grid collection.
  \*/
  readonly namedGrids: NamedGrids

/\*\*

- Numbered list collection.
  \*/
  readonly numberingLists: NumberingLists

/\*\*

- Object style group collection.
  \*/
  readonly objectStyleGroups: ObjectStyleGroups

/\*\*

- Object style collection.
  \*/
  readonly objectStyles: ObjectStyles

/\*\*

- Ellipse collection.
  \*/
  readonly ovals: Ovals

/\*\*

- Default page item formatting assigned to the Document.
  \*/
  readonly pageItemDefaults: PageItemDefault

/\*\*

- PageItems exposes every page item in a container, such as a document, page, or group, without filtering by item type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Page collection.
  \*/
  readonly pages: Pages

/\*\*

- Paragraph style mapping collection.
  \*/
  readonly paraStyleMappings: ParaStyleMappings

/\*\*

- Paragraph destination collection.
  \*/
  readonly paragraphDestinations: ParagraphDestinations

/\*\*

- Paragraph style group collection.
  \*/
  readonly paragraphStyleGroups: ParagraphStyleGroups

/\*\*

- Paragraph style collection.
  \*/
  readonly paragraphStyles: ParagraphStyles

/\*\*

- Application parent for the Document.
  \*/
  readonly parent: Application

/\*\*

- Settings for pasteboard preferences.
  \*/
  readonly pasteboardPreferences: PasteboardPreference

/\*\*

- PDF comment object collection.
  \*/
  readonly pdfComments: PDFComments

/\*\*

- Place gun access.
  \*/
  readonly placeGuns: PlaceGun

/\*\*

- Polygon collection.
  \*/
  readonly polygons: Polygons

/\*\*

- Preferences object collection.
  \*/
  readonly preferences: Preferences

/\*\*

- Settings for preflight options.
  \*/
  readonly preflightOptions: PreflightOption

/\*\*

- Preflight profile collection.
  \*/
  readonly preflightProfiles: PreflightProfiles

/\*\*

- Options used for booklet printing.
  \*/
  readonly printBookletOptions: PrintBookletOption

/\*\*

- Preferences used when printing booklets.
  \*/
  readonly printBookletPrintPreferences: PrintBookletPrintPreference

/\*\*

- Settings for print preferences.
  \*/
  readonly printPreferences: PrintPreference

/\*\*

- Object for assigning multiple properties in a single operation.
  \*/
  properties: object

/\*\*

- Settings for publish export preferences.
  \*/
  readonly publishExportPreferences: PublishExportPreference

/\*\*

- Radio button collection.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- True when the Document cannot be edited.
  \*/
  readonly readOnly: boolean

/\*\*

- True when the Document came from recovery.
  \*/
  readonly recovered: boolean

/\*\*

- Rectangle collection.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Item names currently listed in the redo stack.
  \*/
  readonly redoHistory: string[]

/\*\*

- Action name at the top of the redo stack.
  \*/
  readonly redoName: string

/\*\*

- Controls RGB color handling, including profile reads and embedding, mismatches between embedded color profiles and the working space, and color transfers between documents.
  \*/
  rgbPolicy: ColorSettingsPolicy

/\*\*

- Active RGB profile.
  \*/
  rgbProfile: string

/\*\*

- Valid RGB profile list.
  \*/
  readonly rgbProfileList: string[]

/\*\*

- True once the Document has been saved after creation.
  \*/
  readonly saved: boolean

/\*\*

- Section collection.
  \*/
  readonly sections: Sections

/\*\*

- Selected page item or items.
  \*/
  readonly selectedPageItems: object[] | object | NothingEnum

/\*\*

- Current selected object or objects.
  \*/
  selection: object[] | object | NothingEnum

/\*\*

- Key object for the current selection.
  \*/
  selectionKeyObject: PageItem | NothingEnum

/\*\*

- Signature field collection.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Rendering intent used by native solid-color vector art.
  \*/
  solidColorIntent: RenderingIntent

/\*\*

- Spline item collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Spread collection.
  \*/
  readonly spreads: Spreads

/\*\*

- Story collection.
  \*/
  readonly stories: Stories

/\*\*

- Default settings for frame grids.
  \*/
  readonly storyGridData: StoryGridDataInformation

/\*\*

- Settings for story preferences.
  \*/
  readonly storyPreferences: StoryPreference

/\*\*

- Story window collection.
  \*/
  readonly storyWindows: StoryWindows

/\*\*

- Striped stroke style collection.
  \*/
  readonly stripedStrokeStyles: StripedStrokeStyles

/\*\*

- Stroke style collection.
  \*/
  readonly strokeStyles: StrokeStyles

/\*\*

- Swatch collection.
  \*/
  readonly swatches: Swatches

/\*\*

- Table style group collection.
  \*/
  readonly tableStyleGroups: TableStyleGroups

/\*\*

- Table style mapping collection.
  \*/
  readonly tableStyleMappings: TableStyleMappings

/\*\*

- Table style collection.
  \*/
  readonly tableStyles: TableStyles

/\*\*

- Preferences for tagged PDF output.
  \*/
  readonly taggedPDFPreferences: TaggedPDFPreference

/\*\*

- Text box collection.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Default settings for text.
  \*/
  readonly textDefaults: TextDefault

/\*\*

- Settings for text frame preferences.
  \*/
  readonly textFramePreferences: TextFramePreference

/\*\*

- Text frame collection.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Settings for text preferences.
  \*/
  readonly textPreferences: TextPreference

/\*\*

- Text variable collection.
  \*/
  readonly textVariables: TextVariables

/\*\*

- Default text wrapping behavior around objects is defined by these preference properties.
  \*/
  readonly textWrapPreferences: TextWrapPreference

/\*\*

- Tint collection.
  \*/
  readonly tints: Tints

/\*\*

- TOC style collection.
  \*/
  readonly tocStyles: TOCStyles

/\*\*

- Settings for transparency preferences.
  \*/
  readonly transparencyPreferences: TransparencyPreference

/\*\*

- Trap preset collection.
  \*/
  readonly trapPresets: TrapPresets

/\*\*

- Item names currently listed in the undo stack.
  \*/
  readonly undoHistory: string[]

/\*\*

- Action name at the top of the undo stack.
  \*/
  readonly undoName: string

/\*\*

- Swatches currently unused.
  \*/
  readonly unusedSwatches: Swatch[]

/\*\*

- XML validation error collection.
  \*/
  readonly validationErrors: ValidationErrors

/\*\*

- Version Cue state for the file.
  \*/
  readonly versionState: VersionState

/\*\*

- Settings for view preferences.
  \*/
  readonly viewPreferences: ViewPreference

/\*\*

- True when the Document is visible.
  \*/
  readonly visible: boolean

/\*\*

- Preferences for watermarks.
  \*/
  readonly watermarkPreferences: WatermarkPreference

/\*\*

- Window collection.
  \*/
  readonly windows: Windows

/\*\*

- XML comment collection.
  \*/
  readonly xmlComments: XMLComments

/\*\*

- XML element collection.
  \*/
  readonly xmlElements: XMLElements

/\*\*

- XML export map collection.
  \*/
  readonly xmlExportMaps: XMLExportMaps

/\*\*

- Settings for XML export preferences.
  \*/
  readonly xmlExportPreferences: XMLExportPreference

/\*\*

- XML import map collection.
  \*/
  readonly xmlImportMaps: XMLImportMaps

/\*\*

- Settings for XML import preferences.
  \*/
  readonly xmlImportPreferences: XMLImportPreference

/\*\*

- XML instruction collection.
  \*/
  readonly xmlInstructions: XMLInstructions

/\*\*

- XML item collection.
  \*/
  readonly xmlItems: XMLItems

/\*\*

- Settings for XML preferences.
  \*/
  readonly xmlPreferences: XMLPreference

/\*\*

- XML story collection.
  \*/
  readonly xmlStories: XmlStories

/\*\*

- XML tag collection.
  \*/
  readonly xmlTags: XMLTags

/\*\*

- Settings for XML view preferences.
  \*/
  readonly xmlViewPreferences: XMLViewPreference

/\*\*

- Ruler origin in page coordinates, formatted as [x, y].
  \*/
  zeroPoint: (number | string)[]

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Changes the current layout to match new page size, bleed, and margin values. The first argument is a plain object whose key-value pairs name the affected properties. Allowed keys: width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal Pt numbers or measurement strings such as '1 in'. You only need to provide entries for values being updated. When the target is individual pages instead of the entire document, bleed changes do not apply. E.g. - app.activeDocument.adjustLayout({width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout({rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout({width:'400px', leftMargin: '10px'})
- @param adoptTo Changed values; see the function description for details.
- @param affectedPages Page object collection affected by this call. Ignored when invoked from Page. (Optional)
  \*/
  adjustLayout(adoptTo: object, affectedPages: Page[]): void

/\*\*

- Aligns page items.
- @param alignDistributeItems Page items used for alignment or distribution.
- @param alignOption Alignment type to apply.
- @param alignDistributeBounds Bounds used for aligning or distributing page items.
- @param reference Reference or key object for the relative target; needed only when 'align distribute bounds' is set to 'key object'.
  \*/
  align(alignDistributeItems: PageItem[], alignOption: AlignOptions, alignDistributeBounds: AlignDistributeBounds, reference: PageItem): void

/\*\*

- Exports object or objects to a file asynchronously.
- @param format Export format, either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu.
- @param to Export file path.
- @param showingOptions True displays the export options dialog.
- @param using Export style.
- @param versionComments Comment saved with this version.
- @param forceSave True forces a version save.
  \*/
  asynchronousExportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask

/\*\*

- Replaces colors that match the find what value with the change to value.
  \*/
  changeColor(): number

/\*\*

- Switches comoser to optyca.
  \*/
  changeComposer(): void

/\*\*

- Replaces glyphs matching the find what value with the change to value.
- @param reverseOrder True returns results in reverse order.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Replaces GREP text matches from the find what value with the change to value.
- @param reverseOrder True returns results in reverse order.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Replaces objects matching the find what value with the change to value.
- @param reverseOrder True returns results in reverse order.
  \*/
  changeObject(reverseOrder: boolean): PageItem[]

/\*\*

- Replaces text matching the find what value with the change to value.
- @param reverseOrder True returns results in reverse order.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Replaces text matching the find character type value with the change character type value.
- @param reverseOrder True returns results in reverse order.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Checks in to Version Cue.
- @param versionComments Comment saved with this version.
- @param forceSave Force a version save.
  \*/
  checkIn(versionComments: string, forceSave?: boolean): void

/\*\*

- Clears frame fitting options and restores the initial state.
  \*/
  clearFrameFittingOptions(): void

/\*\*

- Closes the Document.
- @param saving Save option to use before closing the Document.
- @param savingIn File destination for saving the Document.
- @param versionComments Comment saved with this version.
- @param forceSave Force a version save.
  \*/
  close(saving?: SaveOptions, savingIn?: File, versionComments?: string, forceSave?: boolean): void

/\*\*

- Converts color component arrays.
- @param colorValue Input color components.
- @param sourceColorSpace Input color space.
- @param destinationColorSpace Target color space.
  \*/
  colorTransform(colorValue: number[], sourceColorSpace: ColorSpace, destinationColorSpace: ColorSpace): number[]

/\*\*

- Builds an alternate layout from the supplied spreads.
- @param spreadItems Spreads used to create the alternate layout.
- @param name Alternate layout name. Note: this names the new section for duplicated spreads.
- @param width Width for pages that are created.
- @param height Height for pages that are created.
- @param createTextStyles Whether new text styles should be created.
- @param linkTextStories Whether duplicated text stories should use linked text.
- @param layoutRule Rule for the created pages.
  \*/
  createAlternateLayout(spreadItems: Spread[], name: string, width: number | string, height: number | string, createTextStyles: boolean, linkTextStories: boolean, layoutRule: LayoutRuleOptions): void

/\*\*

- Creates an email QR Code on the page item or document.
- @param emailAddress Email address encoded in the QR Code.
- @param subject Email subject encoded in the QR Code.
- @param body Email body message encoded in the QR Code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial Document property values; it may also carry values supplied by the earlier parameters.
  \*/
  createEmailQRCode(emailAddress: string, subject: string, body: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a hyperlink QR Code on the page item or document.
- @param urlLink Hyperlink URL encoded in the QR Code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial Document property values; the earlier arguments may be represented here too.
  \*/
  createHyperlinkQRCode(urlLink: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a missing-font object.
- @param fontFamily Font family name.
- @param fontStyleName Font style name.
- @param postscriptName PostScript font name.
  \*/
  createMissingFontObject(fontFamily: string, fontStyleName: string, postscriptName: string): Font

/\*\*

- Creates a plain text QR Code on the page item.
- @param plainText Plain text encoded in the QR Code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial Document property values; this object may also include the preceding argument values.
  \*/
  createPlainTextQRCode(plainText: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a table of contents.
- @param using TOC style defining the table of contents content, title, and format.
- @param replacing True replaces the existing TOC.
- @param fromBook Book whose documents are included in the TOC.
- @param placePoint Page-coordinate point for placing the TOC story, formatted as [x, y].
- @param includeOverset True includes overset text TOC entries in the TOC.
- @param destinationLayer Destination layer for the TOC story.
  \*/
  createTOC(using: TOCStyle, replacing?: boolean, fromBook?: Book, placePoint?: (number | string)[], includeOverset?: boolean, destinationLayer?: Layer): Story[]

/\*\*

- Creates a text message QR Code on the page item or document.
- @param cellNumber Text phone number encoded in the QR Code.
- @param textMessage Text message encoded in the QR Code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial Document property values; it can also contain the values from the prior arguments.
  \*/
  createTextMsgQRCode(cellNumber: string, textMessage: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Creates a business-card QR Code on the page item or loads it into the document's placegun.
- @param firstName Business Card first name for the QR Code.
- @param lastName Business Card last name for the QR Code.
- @param jobTitle Business Card title for the QR Code.
- @param cellPhone Business Card cell phone number for the QR Code.
- @param phone Business Card phone number for the QR Code.
- @param email Business Card email address for the QR Code.
- @param organisation Business Card organisation for the QR Code.
- @param streetAddress Business Card street address for the QR Code.
- @param city Business Card city for the QR Code.
- @param adrState Business Card state for the QR Code.
- @param country Business Card country for the QR Code.
- @param postalCode Business Card postal code for the QR Code.
- @param website Business Card URL for the QR Code.
- @param qrCodeSwatch Swatch applied to the generated QR Code Graphic.
- @param withProperties Initial Document property values; it may also carry the preceding argument values.
  \*/
  createVCardQRCode(firstName: string, lastName: string, jobTitle: string, cellPhone: string, phone: string, email: string, organisation: string, streetAddress: string, city: string, adrState: string, country: string, postalCode: string, website: string, qrCodeSwatch: Swatch | string, withProperties: string[]): void

/\*\*

- Removes an alternate layout.
- @param name Name of the alternate layout to remove.
  \*/
  deleteAlternateLayout(name: string): void

/\*\*

- Removes unused XML markup tags.
  \*/
  deleteUnusedTags(): void

/\*\*

- Distributes page items.
- @param alignDistributeItems Page items used for alignment or distribution.
- @param distributeOption Distribution type to apply.
- @param alignDistributeBounds Bounds used for aligning or distributing page items.
- @param useDistributeMeasurement True distributes the space between page items. When true, the bounds setting is ignored.
- @param absoluteDistributeMeasurement Distance applied during page-item distribution; needed only when 'align distribute bounds' is set to 'key object'.
- @param reference Reference or key object for the relative target; needed only when 'align distribute bounds' is set to 'key object'.
  \*/
  distribute(alignDistributeItems: PageItem[], distributeOption: DistributeOptions, alignDistributeBounds: AlignDistributeBounds, useDistributeMeasurement: boolean, absoluteDistributeMeasurement: number | string, reference: PageItem): void

/\*\*

- Embeds this profile in the document.
- @param using Preflight profile to embed.
  \*/
  embed(using: string | PreflightProfile): PreflightProfile

/\*\*

- Exports object or objects to a file.
- @param format Export format, either an enumeration value or an extension shown in the Export dialog's Save as type or Format menu.
- @param to Export file path.
- @param showingOptions True displays the export options dialog.
- @param using Export style.
- @param versionComments Comment saved with this version.
- @param forceSave True forces a version save.
  \*/
  exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void

/\*\*

- Exports assets needed for a cloud library.
- @param jsondata JSON-encoded export information.
  \*/
  exportForCloudLibrary(jsondata: string): boolean

/\*\*

- Exports selected page items as a snippet at the destination file path.
- @param to Export file path.
  \*/
  exportPageItemsSelectionToSnippet(to: File): void

/\*\*

- Creates a snippet at the destination path from the supplied page item ids.
- @param to Export file path.
- @param pageItemIds Page item id array.
  \*/
  exportPageItemsToSnippet(to: File, pageItemIds: number[]): void

/\*\*

- Writes stroke styles or presets to a file.
- @param to File destination for saving.
- @param strokeStyleList Stroke styles to save.
- @param versionComments Comment saved with this version.
- @param forceSave Force a version save.
  \*/
  exportStrokeStyles(to: File, strokeStyleList: StrokeStyle[], versionComments: string, forceSave?: boolean): void

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to query.
  \*/
  extractLabel(key: string): string

/\*\*

- Finds colors matching the find what value.
  \*/
  findColor(): number

/\*\*

- Finds glyphs matching the find what value.
- @param reverseOrder True returns results in reverse order.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder True returns results in reverse order.
  \*/
  findGrep(reverseOrder: boolean): Text[]
