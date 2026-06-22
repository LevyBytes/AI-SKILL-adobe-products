# Indesign (part 40)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Represents an imported InDesign page.
  \*/
  declare class ImportedPage extends Graphic {
  /\*\*
  - Settings for clipping paths.
    \*/
    readonly clippingPath: ClippingPathSettings

/\*\*

- Settings for graphic layer options.
  \*/
  readonly graphicLayerOptions: GraphicLayerOption

/\*\*

- Controls how an imported InDesign page is cropped; read-only on page items.
  \*/
  readonly importedPageCrop: ImportedPageCropOptions

/\*\*

- Selects the InDesign document page to import; read-only on page items.
  \*/
  readonly pageNumber: number

/\*\*

- Settings for PDF attributes.
  \*/
  readonly pdfAttributes: PDFAttribute
  }

/\*\*

- ImportedPage objects from InDesign.
  \*/
  declare class ImportedPages {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the ImportedPage for the supplied index.
- @param index Index value.
  \*/
  [index: number]: ImportedPage

/\*\*

- Creates another ImportedPage.
- @param withProperties Property seed values for the new ImportedPage.
  \*/
  add(withProperties: object): ImportedPage

/\*\*

- Supplies any ImportedPage from this collection.
  \*/
  anyItem(): ImportedPage

/\*\*

- Reports the element count for the ImportedPage.
  \*/
  count(): number

/\*\*

- Supplies all ImportedPage entries in this collection.
  \*/
  everyItem(): ImportedPage[]

/\*\*

- Supplies the first ImportedPage in this collection.
  \*/
  firstItem(): ImportedPage

/\*\*

- Retrieves the ImportedPage matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ImportedPage

/\*\*

- Retrieves the ImportedPage matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): ImportedPage

/\*\*

- Retrieves the ImportedPage matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): ImportedPage

/\*\*

- Retrieves the ImportedPages inside the requested range.
- @param from Range start: ImportedPage, index, or name.
- @param to Range end: ImportedPage, index, or name.
  \*/
  itemByRange(from: ImportedPage | number | string, to: ImportedPage | number | string): ImportedPage[]

/\*\*

- Supplies the last ImportedPage in this collection.
  \*/
  lastItem(): ImportedPage

/\*\*

- Supplies the middle ImportedPage in this collection.
  \*/
  middleItem(): ImportedPage

/\*\*

- Retrieves the ImportedPage positioned after the specified ImportedPage in this collection.
- @param obj ImportedPage located before the target ImportedPage.
  \*/
  nextItem(obj: ImportedPage): ImportedPage

/\*\*

- Retrieves the ImportedPage positioned before the specified index.
- @param obj Index for the ImportedPage located after the target ImportedPage.
  \*/
  previousItem(obj: ImportedPage): ImportedPage

/\*\*

- Creates executable source text that resolves back to the ImportedPage.
  \*/
  toSource(): string
  }

/\*\*

- SVG graphic used as a placed asset.
  \*/
  declare class SVG extends Graphic {
  /\*\*
  - Use SVG As
    \*/
    useSVGAs: UseSVGAsEnum
    }

/\*\*

- Collection containing SVG files.
  \*/
  declare class SVGs {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the SVG for the supplied index.
- @param index Index value.
  \*/
  [index: number]: SVG

/\*\*

- Creates another SVG.
- @param withProperties Property seed values for the new SVG.
  \*/
  add(withProperties: object): SVG

/\*\*

- Supplies any SVG from this collection.
  \*/
  anyItem(): SVG

/\*\*

- Reports the element count for the SVG.
  \*/
  count(): number

/\*\*

- Supplies all SVG entries in this collection.
  \*/
  everyItem(): SVG[]

/\*\*

- Supplies the first SVG in this collection.
  \*/
  firstItem(): SVG

/\*\*

- Retrieves the SVG matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): SVG

/\*\*

- Retrieves the SVG matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): SVG

/\*\*

- Retrieves the SVG matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): SVG

/\*\*

- Retrieves the SVGs inside the requested range.
- @param from Range start: SVG, index, or name.
- @param to Range end: SVG, index, or name.
  \*/
  itemByRange(from: SVG | number | string, to: SVG | number | string): SVG[]

/\*\*

- Supplies the last SVG in this collection.
  \*/
  lastItem(): SVG

/\*\*

- Supplies the middle SVG in this collection.
  \*/
  middleItem(): SVG

/\*\*

- Retrieves the SVG positioned after the specified SVG in this collection.
- @param obj SVG located before the target SVG.
  \*/
  nextItem(obj: SVG): SVG

/\*\*

- Retrieves the SVG positioned before the specified index.
- @param obj Index for the SVG located after the target SVG.
  \*/
  previousItem(obj: SVG): SVG

/\*\*

- Creates executable source text that resolves back to the SVG.
  \*/
  toSource(): string
  }

/\*\*

- Represents a sound or movie page item.
  \*/
  declare class MediaItem extends PageItem {
  /\*\*
  - Fires when a MediaItem property value changes; the event bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_ATTRIBUTE_CHANGED`: string

/\*\*

- Collection containing paths.
  \*/
  readonly paths: Paths
  }

/\*\*

- Collection object for media items.
  \*/
  declare class MediaItems {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the MediaItem for the supplied index.
- @param index Index value.
  \*/
  [index: number]: MediaItem

/\*\*

- Supplies any MediaItem from this collection.
  \*/
  anyItem(): MediaItem

/\*\*

- Reports the element count for the MediaItem.
  \*/
  count(): number

/\*\*

- Supplies all MediaItem entries in this collection.
  \*/
  everyItem(): MediaItem[]

/\*\*

- Supplies the first MediaItem in this collection.
  \*/
  firstItem(): MediaItem

/\*\*

- Retrieves the MediaItem matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): MediaItem

/\*\*

- Retrieves the MediaItem matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): MediaItem

/\*\*

- Retrieves the MediaItem matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): MediaItem

/\*\*

- Retrieves the MediaItems inside the requested range.
- @param from Range start: MediaItem, index, or name.
- @param to Range end: MediaItem, index, or name.
  \*/
  itemByRange(from: MediaItem | number | string, to: MediaItem | number | string): MediaItem[]

/\*\*

- Supplies the last MediaItem in this collection.
  \*/
  lastItem(): MediaItem

/\*\*

- Supplies the middle MediaItem in this collection.
  \*/
  middleItem(): MediaItem

/\*\*

- Retrieves the MediaItem positioned after the specified MediaItem in this collection.
- @param obj MediaItem located before the target MediaItem.
  \*/
  nextItem(obj: MediaItem): MediaItem

/\*\*

- Retrieves the MediaItem positioned before the specified index.
- @param obj Index for the MediaItem located after the target MediaItem.
  \*/
  previousItem(obj: MediaItem): MediaItem

/\*\*

- Creates executable source text that resolves back to the MediaItem.
  \*/
  toSource(): string
  }

/\*\*

- Represents an IDML snippet.
  \*/
  declare class Snippet {
  /\*\*
  - Fires before placement of a Snippet; the event bubbles and can be canceled.
    \*/
    static readonly `BEFORE_PLACE`: string

/\*\*

- Collection containing buttons.
  \*/
  readonly buttons: Buttons

/\*\*

- Collection containing checkboxes.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- Collection containing comboboxes.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Collection containing EPS files.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Collection containing form fields.
  \*/
  readonly formFields: FormFields

/\*\*

- Collection containing graphic lines.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Collection containing imported vector, metafile, or bitmap graphics.
  \*/
  readonly graphics: Graphics

/\*\*

- Collection containing groups.
  \*/
  readonly groups: Groups

/\*\*

- Unique ID assigned to the Snippet.
  \*/
  readonly id: number

/\*\*

- Collection containing bitmap images such as TIFF, JPEG, or GIF files.
  \*/
  readonly images: Images

/\*\*

- Position index for the Snippet inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String property available for arbitrary labels.
  \*/
  label: string

/\*\*

- Collection containing listboxes.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Collection containing multi-state objects.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Name for the Snippet, aliased to the Snippet's label property.
  \*/
  name: string

/\*\*

- Collection containing ellipses.
  \*/
  readonly ovals: Ovals

/\*\*

- PageItems collection for processing every page item in a container, such as a document, page, or group, across all types.
  \*/
  readonly pageItems: PageItems

/\*\*

- Parent object for the Snippet (a PlaceGun).
  \*/
  readonly parent: PlaceGun

/\*\*

- Collection containing PDF files.
  \*/
  readonly pdfs: PDFs

/\*\*

- Collection containing PICT graphics.
  \*/
  readonly picts: PICTs

/\*\*

- Collection containing polygons.
  \*/
  readonly polygons: Polygons

/\*\*

- Object for applying several property values at once.
  \*/
  properties: object

/\*\*

- Collection containing radio buttons.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Collection containing signature fields.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Collection object for spline items.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Collection containing SVG files.
  \*/
  readonly svgs: SVGs

/\*\*

- Collection containing text boxes.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Collection containing text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Collection containing WMF graphics.
  \*/
  readonly wmfs: WMFs

/\*\*

- Registers an event listener.
- @param eventType Event type string.
- @param handler Handler invoked for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): Snippet[]

/\*\*

- Stores the supplied value under the specified label key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the Snippet.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type string.
- @param handler Registered handler for the event.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the Snippet.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing IDML snippets.
  \*/
  declare class Snippets {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Snippet for the supplied index.
- @param index Index value.
  \*/
  [index: number]: Snippet

/\*\*

- Supplies any Snippet from this collection.
  \*/
  anyItem(): Snippet

/\*\*

- Reports the element count for the Snippet.
  \*/
  count(): number

/\*\*

- Supplies all Snippet entries in this collection.
  \*/
  everyItem(): Snippet[]

/\*\*

- Supplies the first Snippet in this collection.
  \*/
  firstItem(): Snippet

/\*\*

- Retrieves the Snippet matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Snippet

/\*\*

- Retrieves the Snippet matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): Snippet

/\*\*

- Retrieves the Snippet matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): Snippet

/\*\*

- Retrieves the Snippets inside the requested range.
- @param from Range start: Snippet, index, or name.
- @param to Range end: Snippet, index, or name.
  \*/
  itemByRange(from: Snippet | number | string, to: Snippet | number | string): Snippet[]

/\*\*

- Supplies the last Snippet in this collection.
  \*/
  lastItem(): Snippet

/\*\*

- Supplies the middle Snippet in this collection.
  \*/
  middleItem(): Snippet

/\*\*

- Retrieves the Snippet positioned after the specified Snippet in this collection.
- @param obj Snippet located before the target Snippet.
  \*/
  nextItem(obj: Snippet): Snippet

/\*\*

- Retrieves the Snippet positioned before the specified index.
- @param obj Index for the Snippet located after the target Snippet.
  \*/
  previousItem(obj: Snippet): Snippet

/\*\*

- Creates executable source text that resolves back to the Snippet.
  \*/
  toSource(): string
  }

/\*\*

- Layout-attribute options for any page item.
  \*/
  declare class TransformAttributeOption extends Preference {
  /\*\*
  - Object-style-defined height value.
    \*/
    transformAttrHeight: number | string

/\*\*

- Reference point used when setting the object style X attribute.
  \*/
  transformAttrLeftReference: TransformPositionReference

/\*\*

- Specifies which anchor point the style uses to anchor the object while applying the position.
  \*/
  transformAttrRefAnchorPoint: AnchorPoint

/\*\*

- Reference point used when setting the object style Y attribute.
  \*/
  transformAttrTopReference: TransformPositionReference

/\*\*

- Object-style-defined width value.
  \*/
  transformAttrWidth: number | string

/\*\*

- Object-style-defined left position.
  \*/
  transformAttrX: number | string

/\*\*

- Object-style-defined top position.
  \*/
  transformAttrY: number | string
  }

/\*\*

- Represents a Motion preset Object.
  \*/
  declare class MotionPreset {
  /\*\*
  - Raw data for the motion preset.
    \*/
    contents: string

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the MotionPreset.
  \*/
  readonly id: number

/\*\*

- Position index for the MotionPreset inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String property available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to the MotionPreset.
  \*/
  name: string

/\*\*

- Parent object for the MotionPreset (a Application or Document).
  \*/
  readonly parent: any

/\*\*

- Object for applying several property values at once.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type string.
- @param handler Handler invoked for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate motion preset.
- @param name Name to assign to the duplicated motion preset.
  \*/
  duplicate(name: string): MotionPreset

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): MotionPreset[]

/\*\*

- Stores the supplied value under the specified label key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the MotionPreset.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type string.
- @param handler Registered handler for the event.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Saves this motion preset into an InDesign motion preset file copy.
- @param to Flash motion preset file used as the export target.
  \*/
  saveACopy(to: File): void

/\*\*

- Creates executable source text that resolves back to the MotionPreset.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing Motion presets.
  \*/
  declare class MotionPresets {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the MotionPreset for the supplied index.
- @param index Index value.
  \*/
  [index: number]: MotionPreset

/\*\*

- Creates another MotionPreset.
- @param withProperties Property seed values for the new MotionPreset.
  \*/
  add(withProperties: object): MotionPreset

/\*\*

- Supplies any MotionPreset from this collection.
  \*/
  anyItem(): MotionPreset

/\*\*

- Reports the element count for the MotionPreset.
  \*/
  count(): number

/\*\*

- Supplies all MotionPreset entries in this collection.
  \*/
  everyItem(): MotionPreset[]

/\*\*

- Supplies the first MotionPreset in this collection.
  \*/
  firstItem(): MotionPreset

/\*\*

- Retrieves the MotionPreset matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): MotionPreset

/\*\*

- Retrieves the MotionPreset matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): MotionPreset

/\*\*

- Retrieves the MotionPreset matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): MotionPreset

/\*\*

- Retrieves the MotionPresets inside the requested range.
- @param from Range start: MotionPreset, index, or name.
- @param to Range end: MotionPreset, index, or name.
  \*/
  itemByRange(from: MotionPreset | number | string, to: MotionPreset | number | string): MotionPreset[]

/\*\*

- Supplies the last MotionPreset in this collection.
  \*/
  lastItem(): MotionPreset

/\*\*

- Supplies the middle MotionPreset in this collection.
  \*/
  middleItem(): MotionPreset

/\*\*

- Retrieves the MotionPreset positioned after the specified MotionPreset in this collection.
- @param obj MotionPreset located before the target MotionPreset.
  \*/
  nextItem(obj: MotionPreset): MotionPreset

/\*\*

- Retrieves the MotionPreset positioned before the specified index.
- @param obj Index for the MotionPreset located after the target MotionPreset.
  \*/
  previousItem(obj: MotionPreset): MotionPreset

/\*\*

- Creates executable source text that resolves back to the MotionPreset.
  \*/
  toSource(): string
  }

/\*\*

- Represents an Article.
  \*/
  declare class Article {
  /\*\*
  - Export status for the Article.
    \*/
    articleExportStatus: boolean

/\*\*

- Collection containing article members.
  \*/
  readonly articleMembers: ArticleMembers

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the Article.
  \*/
  readonly id: number

/\*\*

- Position index for the Article inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String property available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to the Article.
  \*/
  name: string

/\*\*

- Parent object for the Article (a Document).
  \*/
  readonly parent: Document

/\*\*

- Object for applying several property values at once.
  \*/
  properties: object

/\*\*

- Fills the article with every page item in the document.
  \*/
  addDocumentContent(): void

/\*\*

- Registers an event listener.
- @param eventType Event type string.
- @param handler Handler invoked for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the specified key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into an array of object references.
  \*/
  getElements(): Article[]

/\*\*

- Stores the supplied value under the specified label key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates the Article to the requested location.
- @param to Location relative to a reference object or inside the containing object.
- @param reference Reference object; required when to is before or after.
  \*/
  move(to: LocationOptions, reference: Article): Article

/\*\*

- Removes the Article.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type string.
- @param handler Registered handler for the event.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the Article.
  \*/
  toSource(): string

/\*\*

- Retrieves this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing articles.
  \*/
  declare class Articles {
  /\*\*
  - Count of objects held by this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the Article for the supplied index.
- @param index Index value.
  \*/
  [index: number]: Article

/\*\*

- Creates another Article.
- @param name Article name value.
- @param articleExportStatus Article export-state value.
- @param at Location relative to a reference object or inside the containing object.
- @param reference Reference object; required when to is before or after.
- @param withProperties Property values applied during Article creation.
  \*/
  add(name: string, articleExportStatus: boolean, at?: LocationOptions, reference?: Article, withProperties?: object): Article

/\*\*

- Supplies any Article from this collection.
  \*/
  anyItem(): Article

/\*\*

- Reports the element count for the Article.
  \*/
  count(): number

/\*\*

- Supplies all Article entries in this collection.
  \*/
  everyItem(): Article[]

/\*\*

- Supplies the first Article in this collection.
  \*/
  firstItem(): Article

/\*\*

- Retrieves the Article matching the supplied index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Article

/\*\*

- Retrieves the Article matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): Article
