# Indesign (part 96)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Finds a BorderPanel by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): BorderPanel

/\*\*

- Provides BorderPanels bounded by the supplied range.
- @param from Opening BorderPanel, index, or name for the range.
- @param to Closing BorderPanel, index, or name for the range.
  \*/
  itemByRange(from: BorderPanel | number | string, to: BorderPanel | number | string): BorderPanel[]

/\*\*

- Provides the collection's final BorderPanel.
  \*/
  lastItem(): BorderPanel

/\*\*

- Provides the collection's central BorderPanel.
  \*/
  middleItem(): BorderPanel

/\*\*

- Provides the BorderPanel positioned after the supplied BorderPanel.
- @param obj BorderPanel positioned immediately before the one being requested.
  \*/
  nextItem(obj: BorderPanel): BorderPanel

/\*\*

- Provides the BorderPanel positioned before the supplied index.
- @param obj Index of the BorderPanel immediately after the one being requested.
  \*/
  previousItem(obj: BorderPanel): BorderPanel

/\*\*

- Builds executable source text that resolves back to the BorderPanel.
  \*/
  toSource(): string
  }

/\*\*

- DialogRow is a borderless dialog row that holds controls.
  \*/
  declare class DialogRow {
  /\*\*
  - AngleComboboxes collection.
    \*/
    readonly angleComboboxes: AngleComboboxes

/\*\*

- AngleEditboxes collection.
  \*/
  readonly angleEditboxes: AngleEditboxes

/\*\*

- BorderPanels collection.
  \*/
  readonly borderPanels: BorderPanels

/\*\*

- CheckboxControls collection.
  \*/
  readonly checkboxControls: CheckboxControls

/\*\*

- DialogColumns collection.
  \*/
  readonly dialogColumns: DialogColumns

/\*\*

- Dropdowns collection.
  \*/
  readonly dropdowns: Dropdowns

/\*\*

- EnablingGroups collection.
  \*/
  readonly enablingGroups: EnablingGroups

/\*\*

- EventListeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the DialogRow.
  \*/
  readonly id: number

/\*\*

- Position of the DialogRow inside its containing object.
  \*/
  readonly index: number

/\*\*

- IntegerComboboxes collection.
  \*/
  readonly integerComboboxes: IntegerComboboxes

/\*\*

- IntegerEditboxes collection.
  \*/
  readonly integerEditboxes: IntegerEditboxes

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- MeasurementComboboxes collection.
  \*/
  readonly measurementComboboxes: MeasurementComboboxes

/\*\*

- MeasurementEditboxes collection.
  \*/
  readonly measurementEditboxes: MeasurementEditboxes

/\*\*

- Parent object for DialogRow, typed as DialogColumn.
  \*/
  readonly parent: DialogColumn

/\*\*

- PercentComboboxes collection.
  \*/
  readonly percentComboboxes: PercentComboboxes

/\*\*

- PercentEditboxes collection.
  \*/
  readonly percentEditboxes: PercentEditboxes

/\*\*

- Several properties can be assigned together through this property.
  \*/
  properties: object

/\*\*

- RadiobuttonGroups collection.
  \*/
  readonly radiobuttonGroups: RadiobuttonGroups

/\*\*

- RealComboboxes collection.
  \*/
  readonly realComboboxes: RealComboboxes

/\*\*

- RealEditboxes collection.
  \*/
  readonly realEditboxes: RealEditboxes

/\*\*

- StaticTexts collection.
  \*/
  readonly staticTexts: StaticTexts

/\*\*

- TextEditboxes collection.
  \*/
  readonly textEditboxes: TextEditboxes

/\*\*

- Widgets collection.
  \*/
  readonly widgets: Widgets

/\*\*

- Registers an event listener.
- @param eventType Event type to register.
- @param handler Event handler to invoke.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Produces object-reference array entries from the object specifier.
  \*/
  getElements(): DialogRow[]

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the DialogRow.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- DialogRows groups dialog row objects.
  \*/
  declare class DialogRows {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the DialogRow addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: DialogRow

/\*\*

- Adds a DialogRow.
- @param withProperties Starting property values for the created DialogRow
  \*/
  add(withProperties: object): DialogRow

/\*\*

- Provides an arbitrary DialogRow from the collection.
  \*/
  anyItem(): DialogRow

/\*\*

- Gives the element total for DialogRow.
  \*/
  count(): number

/\*\*

- Provides all DialogRow members held by the collection.
  \*/
  everyItem(): DialogRow[]

/\*\*

- Gets the collection's initial DialogRow.
  \*/
  firstItem(): DialogRow

/\*\*

- Fetches a DialogRow by supplied index or name.
- @param index Index or name.
  \*/
  item(index: number | string): DialogRow

/\*\*

- Fetches a DialogRow by its provided ID.
- @param id ID value.
  \*/
  itemByID(id: number): DialogRow

/\*\*

- Collects DialogRows from the requested span.
- @param from DialogRow, index, or name that starts the span.
- @param to DialogRow, index, or name that ends the span.
  \*/
  itemByRange(from: DialogRow | number | string, to: DialogRow | number | string): DialogRow[]

/\*\*

- Gets the collection's final DialogRow.
  \*/
  lastItem(): DialogRow

/\*\*

- Gets the DialogRow located at the collection midpoint.
  \*/
  middleItem(): DialogRow

/\*\*

- Gets the DialogRow positioned after the supplied DialogRow.
- @param obj DialogRow immediately before the one wanted.
  \*/
  nextItem(obj: DialogRow): DialogRow

/\*\*

- Gets the DialogRow positioned before the supplied index.
- @param obj Index for the DialogRow immediately after the one wanted.
  \*/
  previousItem(obj: DialogRow): DialogRow

/\*\*

- Builds executable source text that resolves back to the DialogRow.
  \*/
  toSource(): string
  }

/\*\*

- Represents an XML element.
  \*/
  declare class XMLElement extends XMLItem {
  /\*\*
  - Table cells related to this object.
    \*/
    readonly cells: Cells

/\*\*

- Character objects related to this object.
  \*/
  readonly characters: Characters

/\*\*

- Text held by the object.
  \*/
  contents: string | SpecialCharacters

/\*\*

- EPS assets related to this object.
  \*/
  readonly epss: EPSs

/\*\*

- Graphics imported from vector, metafile, bitmap, or other graphic formats.
  \*/
  readonly graphics: Graphics

/\*\*

- Images from bitmap formats, including TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- Insertion points related to this object.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- Line objects related to this object.
  \*/
  readonly lines: Lines

/\*\*

- XML tag assigned to the element.
  \*/
  markupTag: XMLTag | string

/\*\*

- PageItems collection for processing every item in containers like documents, pages, and groups, independent of type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Paragraph objects related to this object.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Story containing this text.
  \*/
  readonly parentStory: Story

/\*\*

- PDF assets related to this object.
  \*/
  readonly pdfs: PDFs

/\*\*

- PICT graphics related to this object.
  \*/
  readonly picts: PICTs

/\*\*

- Story objects related to this object.
  \*/
  readonly stories: Stories

/\*\*

- Insertion point located before the table within the story that owns the table.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- SVG assets related to this object.
  \*/
  readonly svgs: SVGs

/\*\*

- Table objects related to this object.
  \*/
  readonly tables: Tables

/\*\*

- Text columns related to this object.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Text style ranges related to this object.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Text objects related to this object.
  \*/
  readonly texts: Texts

/\*\*

- WMF graphics related to this object.
  \*/
  readonly wmfs: WMFs

/\*\*

- Word objects related to this object.
  \*/
  readonly words: Words

/\*\*

- XML attributes related to this object.
  \*/
  readonly xmlAttributes: XMLAttributes

/\*\*

- XML comments related to this object.
  \*/
  readonly xmlComments: XMLComments

/\*\*

- Text content or page item referenced by this element.
  \*/
  readonly xmlContent: Text | Story | PageItem | Movie | Sound | Graphic | Table | Cell

/\*\*

- XML elements related to this object.
  \*/
  readonly xmlElements: XMLElements

/\*\*

- XML instructions related to this object.
  \*/
  readonly xmlInstructions: XMLInstructions

/\*\*

- XML items related to this object.
  \*/
  readonly xmlItems: XMLItems

/\*\*

- Assigns a cell style to table cells linked with the XMLElement.
- @param using Cell style that should be assigned.
- @param clearingOverrides When true, local formatting is removed before the cell style is assigned.
  \*/
  applyCellStyle(using: string | CellStyle, clearingOverrides?: boolean): void

/\*\*

- Assigns the chosen character style to the XMLElement text content.
- @param using Character style that should be assigned.
  \*/
  applyCharacterStyle(using: string | CharacterStyle): void

/\*\*

- Assigns an object style to the frame linked with the XMLElement.
- @param using Object style that should be assigned.
- @param clearingOverrides When true, local formatting is removed before the object style is assigned.
- @param clearingOverridesThroughRootObjectStyle When true, the root style provides clearing for unchecked category attributes.
  \*/
  applyObjectStyle(using: string | ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void

/\*\*

- Assigns the chosen paragraph style to the XMLElement text content.
- @param using Paragraph style that should be assigned.
- @param clearingOverrides When true, attributes are cleared before the style is assigned.
  \*/
  applyParagraphStyle(using: string | ParagraphStyle, clearingOverrides?: boolean): void

/\*\*

- Assigns a table style to the table linked with the XMLElement.
- @param using Table style that should be assigned.
- @param clearingOverrides When true, local formatting is removed before the table style is assigned.
  \*/
  applyTableStyle(using: string | TableStyle, clearingOverrides?: boolean): void

/\*\*

- Exports the object(s) to a file in the background.
- @param format ExportFormat value or extension listed by the Export dialog under Save as type or Format.
- @param to Export file path.
- @param showingOptions When true, the export options dialog is shown.
- @param using Export style.
- @param versionComments Comment attached to this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  asynchronousExportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask

/\*\*

- Replaces text found from the find what value with the change to value.
- @param reverseOrder When true, results are returned in reverse sequence.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Replaces text found from the find what value with the change to value.
- @param reverseOrder When true, results are returned in reverse sequence.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Replaces text matching the find character type value with the change character type value.
- @param reverseOrder When true, results are returned in reverse sequence.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Turns the XML element content into a table.
- @param rowTag XML tag designating a table row.
- @param cellTag XML tag designating a table cell.
  \*/
  convertElementToTable(rowTag: XMLTag, cellTag: XMLTag): Table

/\*\*

- Turns the XMLElement into an attribute on its parent element.
- @param using Name assigned to the new attribute.
  \*/
  convertToAttribute(using: string): XMLAttribute

/\*\*

- Runs an XPath expression from this XML element inside the structure.
- @param using XPath expression to evaluate.
- @param prefixMappingTable Namespace mapping table; accepted shape: nested arrays containing 2 strings each.
  \*/
  evaluateXPathExpression(using: string, prefixMappingTable: any[]): XMLItem[]

/\*\*

- Exports the object(s) into a file.
- @param format ExportFormat value or extension listed by the Export dialog under Save as type or Format.
- @param to Export file path.
- @param showingOptions When true, the export options dialog is shown.
- @param using Export style.
- @param versionComments Comment attached to this version.
- @param forceSave When true, a version is saved forcibly.
  \*/
  exportFile(format: ExportFormat | string, to: File, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void

/\*\*

- Locates text matching the find what value.
- @param reverseOrder When true, results are returned in reverse sequence.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find what value.
- @param reverseOrder When true, results are returned in reverse sequence.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Locates text matching the find character type value.
- @param reverseOrder When true, results are returned in reverse sequence.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Brings the chosen XML file into an InDesign document.
- @param from XML file to import.
  \*/
  importXML(from: File): void

/\*\*

- Inserts the chosen text content before, inside, or after the XML element.
- @param using Text that will be inserted.
- @param position Location for inserting the text. Text inserted before or after the element becomes content of the element's parent, rather than part of the element content.
  \*/
  insertTextAsContent(using: string | SpecialCharacters, position: XMLElementPosition): Text

/\*\*

- Marks up the object with the chosen XML element while keeping existing content.
- @param using Object being marked.
  \*/
  markup(using: PageItem | Movie | Sound | Graphic | Story | Text | Table): void

/\*\*

- Relocates the element to the requested position.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object; required when to requests before or after placement. .
  \*/
  move(to: LocationOptions, reference: XMLItem | Text): XMLElement

/\*\*

- Links the XML element to a copied page item.
- @param on Page or spread where the new page item is created.
- @param placePoint Page coordinates for the page item's top left corner, in the format [y1, x1]
- @param copyItem Page item to copy.
- @param retainExistingFrame When true, the existing page item is moved into association with the XML element instead of creating a copy.
  \*/
  placeIntoCopy(on: Spread | Page | MasterSpread, placePoint: (number | string)[], copyItem: PageItem, retainExistingFrame?: boolean): PageItem

/\*\*

- Puts the XML element into a new rectangular page item. An already-associated page item is deleted.
- @param on Page or spread where the new page item is created.
- @param geometricBounds Bounds array [y1, x1, y2, x2] for the page item, not including stroke width.
  \*/
  placeIntoFrame(on: Spread | Page | MasterSpread, geometricBounds: (number | string)[]): PageItem

/\*\*

- Links an existing page item to the XML element and inserts it as an inline frame.
- @param copyItem Page item to copy.
- @param retainExistingFrame When true, the existing page item is moved. When false, a copy of the page item is moved.
  \*/
  placeIntoInlineCopy(copyItem: PageItem, retainExistingFrame?: boolean): PageItem

/\*\*

- Inserts an XML element as an inline frame.
- @param dimensions Inline frame dimensions in the format [width, height].
  \*/
  placeIntoInlineFrame(dimensions: (number | string)[]): PageItem

/\*\*

- Inserts XML content into the story and replaces the current content.
- @param using Object to place.
  \*/
  placeXML(using: Story | PageItem | Graphic | Movie | Sound): void

/\*\*

- Replaces XML element content with content loaded from a file.
- @param using Import file path.
- @param relativeBasePath Base path for resolving relative paths.
  \*/
  setContent(using: string, relativeBasePath: string): PageItem

/\*\*

- Saves the object into the chosen library.
- @param using Library that will store the object.
- @param withProperties Property values used at XMLElement creation.
  \*/
  store(using: Library, withProperties: object): Asset

/\*\*

- Removes the element tag.
  \*/
  untag(): void

/\*\*

- Checks the element against a DTD.
- @param maximumErrors Maximum validation errors to produce.
  \*/
  validate(maximumErrors?: number): ValidationError[]
  }

/\*\*

- Collection type for XML elements.
  \*/
  declare class XMLElements {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Fetches an XMLElement by supplied index.
- @param index Index value.
  \*/
  [index: number]: XMLElement

/\*\*

- Builds a new XML element.
- @param markupTag XML tag used to identify the element.
- @param xmlContent Content receiving markup.
- @param withProperties Property values used at XMLElement creation.
  \*/
  add(markupTag: string | XMLTag, xmlContent: Text | Story | PageItem | Movie | Sound | Graphic | Table | Cell, withProperties: object): XMLElement

/\*\*

- Gets an arbitrary XMLElement from the collection.
  \*/
  anyItem(): XMLElement

/\*\*

- Shows the element count for the XMLElement.
  \*/
  count(): number

/\*\*

- Gets all XMLElement objects in the collection.
  \*/
  everyItem(): XMLElement[]

/\*\*

- Gets the collection's initial XMLElement.
  \*/
  firstItem(): XMLElement

/\*\*

- Fetches an XMLElement by supplied index or name.
- @param index Index or name.
  \*/
  item(index: number | string): XMLElement

/\*\*

- Fetches an XMLElement by its provided ID.
- @param id ID value.
  \*/
  itemByID(id: number): XMLElement

/\*\*

- Collects XMLElements from the requested span.
- @param from XMLElement, index, or name that starts the span.
- @param to XMLElement, index, or name that ends the span.
  \*/
  itemByRange(from: XMLElement | number | string, to: XMLElement | number | string): XMLElement[]

/\*\*

- Gets the collection's final XMLElement.
  \*/
  lastItem(): XMLElement

/\*\*

- Gets the XMLElement located at the collection midpoint.
  \*/
  middleItem(): XMLElement

/\*\*

- Gets the XMLElement positioned after the supplied XMLElement.
- @param obj XMLElement immediately before the one wanted.
  \*/
  nextItem(obj: XMLElement): XMLElement

/\*\*

- Gets the XMLElement positioned before the supplied index.
- @param obj Index for the XMLElement immediately after the one wanted.
  \*/
  previousItem(obj: XMLElement): XMLElement

/\*\*

- Builds executable source text that resolves back to the XMLElement.
  \*/
  toSource(): string
  }

/\*\*

- Represents an XML attribute.
  \*/
  declare class XMLAttribute {
  /\*\*
  - Event listeners related to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events related to this object.
  \*/
  readonly events: Events

/\*\*

- Position of the XMLAttribute within its containing object.
  \*/
  readonly index: number

/\*\*

- Indicates whether the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name assigned to the XMLAttribute.
  \*/
  name: string

/\*\*

- Parent object for the XMLAttribute (a XMLElement).
  \*/
  readonly parent: XMLElement

/\*\*

- Property bag used to set several properties together.
  \*/
  properties: object

/\*\*

- Value stored by the XMLAttribute.
  \*/
  value: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Changes the XML attribute into a child element under its parent element.
- @param located Location for the converted child inside the XML attribute's parent XML element.
- @param markupTag XML tag applied to the converted XML element.
  \*/
  convertToElement(located?: XMLElementLocation, markupTag?: XMLTag): XMLElement

/\*\*

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): XMLAttribute[]

/\*\*

- Deletes this XMLAttribute.
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

- Selects this object.
- @param existingSelection Selection status of the XMLAttribute relative to previously selected objects.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Builds executable source text that resolves back to the XMLAttribute.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection type for XML attributes.
  \*/
  declare class XMLAttributes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Fetches an XMLAttribute by supplied index.
- @param index Index value.
  \*/
  [index: number]: XMLAttribute

/\*\*

- Builds a new XML attribute.
- @param name Attribute name.
- @param value Attribute value.
- @param withProperties Property values used at XMLAttribute creation.
  \*/
  add(name: string, value: string, withProperties: object): XMLAttribute

/\*\*

- Gets an arbitrary XMLAttribute from the collection.
  \*/
  anyItem(): XMLAttribute

/\*\*

- Shows the element count for the XMLAttribute.
  \*/
  count(): number

/\*\*

- Gets all XMLAttribute objects in the collection.
  \*/
  everyItem(): XMLAttribute[]

/\*\*

- Gets the collection's initial XMLAttribute.
  \*/
  firstItem(): XMLAttribute

/\*\*

- Fetches an XMLAttribute by supplied index or name.
- @param index Index or name.
  \*/
  item(index: number | string): XMLAttribute

/\*\*

- Fetches an XMLAttribute by supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): XMLAttribute
