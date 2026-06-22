# Indesign (part 85)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Gets the EndnoteTextFrames spanning the requested range.
- @param from Starting EndnoteTextFrame, index, or name for the range.
- @param to Ending EndnoteTextFrame, index, or name for the range.
  \*/
  itemByRange(from: EndnoteTextFrame | number | string, to: EndnoteTextFrame | number | string): EndnoteTextFrame[]

/\*\*

- Gets the final EndnoteTextFrame in collection order.
  \*/
  lastItem(): EndnoteTextFrame

/\*\*

- Gets the middle EndnoteTextFrame from the collection.
  \*/
  middleItem(): EndnoteTextFrame

/\*\*

- Gets the EndnoteTextFrame immediately after the supplied EndnoteTextFrame in collection order.
- @param obj EndnoteTextFrame positioned before the requested EndnoteTextFrame.
  \*/
  nextItem(obj: EndnoteTextFrame): EndnoteTextFrame

/\*\*

- Gets the EndnoteTextFrame immediately before the supplied index.
- @param obj Index of the EndnoteTextFrame positioned after the requested EndnoteTextFrame.
  \*/
  previousItem(obj: EndnoteTextFrame): EndnoteTextFrame

/\*\*

- Creates executable source text that resolves back to the EndnoteTextFrame.
  \*/
  toSource(): string
  }

/\*\*

- Language used as the basis for hyphenation rules and spell checking.
  \*/
  declare class Language {
  /\*\*
  - Double-quote pair associated with the language.
    \*/
    doubleQuotes: string

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Source used for hyphenation rules.
  \*/
  hyphenationVendor: string

/\*\*

- Complete ICU locale name for the Language object.
  \*/
  readonly icuLocaleName: string

/\*\*

- Unique ID assigned to the Language.
  \*/
  readonly id: number

/\*\*

- Position of this Language inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String storage field available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to the Language.
  \*/
  readonly name: string

/\*\*

- Document that contains the Language.
  \*/
  readonly parent: Document

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- Single-quote pair associated with the language.
  \*/
  singleQuotes: string

/\*\*

- Source used for spell checking.
  \*/
  spellingVendor: string

/\*\*

- Language name before translation.
  \*/
  readonly untranslatedName: string

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored under a given key.
- @param key Key whose label value should be returned.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): Language[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key used for label storage.
- @param value Value to store for that key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Unregisters a previously attached event listener.
- @param eventType Event category that was registered.
- @param handler Handler that was registered for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the Language.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Language collection.
  \*/
  declare class Languages {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Language at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: Language

/\*\*

- Gets an arbitrary Language from the collection.
  \*/
  anyItem(): Language

/\*\*

- Reports how many elements the Language collection contains.
  \*/
  count(): number

/\*\*

- Gets all Language objects from the collection.
  \*/
  everyItem(): Language[]

/\*\*

- Gets the first Language in collection order.
  \*/
  firstItem(): Language

/\*\*

- Gets a Language by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): Language

/\*\*

- Gets the Language matching the supplied ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): Language

/\*\*

- Gets the Language matching the supplied name.
- @param name Name to look up.
  \*/
  itemByName(name: string): Language

/\*\*

- Gets the Languages spanning the requested range.
- @param from Starting Language, index, or name for the range.
- @param to Ending Language, index, or name for the range.
  \*/
  itemByRange(from: Language | number | string, to: Language | number | string): Language[]

/\*\*

- Gets the final Language in collection order.
  \*/
  lastItem(): Language

/\*\*

- Gets the middle Language from the collection.
  \*/
  middleItem(): Language

/\*\*

- Gets the Language immediately after the supplied Language in collection order.
- @param obj Language positioned before the requested Language.
  \*/
  nextItem(obj: Language): Language

/\*\*

- Gets the Language immediately before the supplied index.
- @param obj Index of the Language positioned after the requested Language.
  \*/
  previousItem(obj: Language): Language

/\*\*

- Creates executable source text that resolves back to the Language.
  \*/
  toSource(): string
  }

/\*\*

- LanguageWithVendors supports selecting sources for hyphenation rules, spelling checks, and thesaurus data.
  \*/
  declare class LanguageWithVendors {
  /\*\*
  - User dictionary paths configured for the language.
    \*/
    dictionaryPaths: string[]

/\*\*

- Double-quote pair associated with the language.
  \*/
  doubleQuotes: string

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Source used for hyphenation rules.
  \*/
  hyphenationVendor: string

/\*\*

- Available hyphenation vendor names.
  \*/
  readonly hyphenationVendorList: string[]

/\*\*

- Complete ICU locale name for the Language object.
  \*/
  readonly icuLocaleName: string

/\*\*

- Unique ID assigned to the LanguageWithVendors.
  \*/
  readonly id: number

/\*\*

- Position of this LanguageWithVendors inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String storage field available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to the LanguageWithVendors.
  \*/
  readonly name: string

/\*\*

- Application that contains the LanguageWithVendors.
  \*/
  readonly parent: Application

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- Single-quote pair associated with the language.
  \*/
  singleQuotes: string

/\*\*

- Source used for spell checking.
  \*/
  spellingVendor: string

/\*\*

- Available spelling vendor names.
  \*/
  readonly spellingVendorList: string[]

/\*\*

- Source used for thesaurus lookup.
  \*/
  thesaurusVendor: string

/\*\*

- Language name before translation.
  \*/
  readonly untranslatedName: string

/\*\*

- Registers the specified user dictionary.
- @param filePath Path to the dictionary file.
  \*/
  addDictionaryPath(filePath: string): string

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored under a given key.
- @param key Key whose label value should be returned.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): LanguageWithVendors[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key used for label storage.
- @param value Value to store for that key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Unregisters the specified user dictionary.
- @param filePath Path to the dictionary file.
  \*/
  removeDictionaryPath(filePath: string): string

/\*\*

- Unregisters a previously attached event listener.
- @param eventType Event category that was registered.
- @param handler Handler that was registered for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the LanguageWithVendors.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- LanguageWithVendors collection.
  \*/
  declare class LanguagesWithVendors {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the LanguageWithVendors at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: LanguageWithVendors

/\*\*

- Gets an arbitrary LanguageWithVendors from the collection.
  \*/
  anyItem(): LanguageWithVendors

/\*\*

- Reports how many elements the LanguageWithVendors collection contains.
  \*/
  count(): number

/\*\*

- Gets all LanguageWithVendors objects from the collection.
  \*/
  everyItem(): LanguageWithVendors[]

/\*\*

- Gets the first LanguageWithVendors in collection order.
  \*/
  firstItem(): LanguageWithVendors

/\*\*

- Gets a LanguageWithVendors by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): LanguageWithVendors

/\*\*

- Gets the LanguageWithVendors matching the supplied ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): LanguageWithVendors

/\*\*

- Gets the LanguageWithVendors matching the supplied name.
- @param name Name to look up.
  \*/
  itemByName(name: string): LanguageWithVendors

/\*\*

- Gets the LanguagesWithVendors spanning the requested range.
- @param from Starting LanguageWithVendors, index, or name for the range.
- @param to Ending LanguageWithVendors, index, or name for the range.
  \*/
  itemByRange(from: LanguageWithVendors | number | string, to: LanguageWithVendors | number | string): LanguageWithVendors[]

/\*\*

- Gets the final LanguageWithVendors in collection order.
  \*/
  lastItem(): LanguageWithVendors

/\*\*

- Gets the middle LanguageWithVendors from the collection.
  \*/
  middleItem(): LanguageWithVendors

/\*\*

- Gets the LanguageWithVendors immediately after the supplied LanguageWithVendors in collection order.
- @param obj LanguageWithVendors positioned before the requested LanguageWithVendors.
  \*/
  nextItem(obj: LanguageWithVendors): LanguageWithVendors

/\*\*

- Gets the LanguageWithVendors immediately before the supplied index.
- @param obj Index of the LanguageWithVendors positioned after the requested LanguageWithVendors.
  \*/
  previousItem(obj: LanguageWithVendors): LanguageWithVendors

/\*\*

- Creates executable source text that resolves back to the LanguageWithVendors.
  \*/
  toSource(): string
  }

/\*\*

- Font object.
  \*/
  declare class Font {
  /\*\*
  - True indicates the font permits editable embedding.
    \*/
    readonly allowEditableEmbedding: boolean

/\*\*

- True indicates the font permits conversion to outlines.
  \*/
  readonly allowOutlines: boolean

/\*\*

- True indicates the font permits embedding in a PDF document.
  \*/
  readonly allowPDFEmbedding: boolean

/\*\*

- True indicates the font permits printing.
  \*/
  readonly allowPrinting: boolean

/\*\*

- Names of design axes in a variable font.
  \*/
  readonly designAxesName: string[]

/\*\*

- Variable-font design-axis ranges; return form may be: Array of Arrays of 2 Reals.
  \*/
  readonly designAxesRange: any[]

/\*\*

- Design-axis values for a variable font.
  \*/
  readonly designAxesValues: number[]

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Font family name.
  \*/
  readonly fontFamily: string

/\*\*

- Font style name.
  \*/
  readonly fontStyleName: string

/\*\*

- Native-language font style name.
  \*/
  readonly fontStyleNameNative: string

/\*\*

- Font type classification.
  \*/
  readonly fontType: FontTypes

/\*\*

- Complete font name.
  \*/
  readonly fullName: string

/\*\*

- Complete native-language name of the font.
  \*/
  readonly fullNameNative: string

/\*\*

- Position of this Font inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Full path that points to the Font.
  \*/
  readonly location: string

/\*\*

- Name assigned to the Font.
  \*/
  readonly name: string

/\*\*

- Count of design axes in a variable font.
  \*/
  readonly numDesignAxes: number

/\*\*

- CID font ordering value.
  \*/
  readonly ordering: string

/\*\*

- Containing object for Font: Document or Application.
  \*/
  readonly parent: any

/\*\*

- Platform-specific font name.
  \*/
  readonly platformName: string

/\*\*

- PostScript name for the font.
  \*/
  readonly postscriptName: string

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- CID font registry value.
  \*/
  readonly registry: string

/\*\*

- True indicates the font restricts printing to limited use.
  \*/
  readonly restrictedPrinting: boolean

/\*\*

- Current font status.
  \*/
  readonly status: FontStatus

/\*\*

- Font version string.
  \*/
  readonly version: string

/\*\*

- Writing script value.
  \*/
  readonly writingScript: number

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Tests whether this font supports the specified OpenType feature.
- @param using OpenType feature, supplied as an OpenType feature or string, to test.
  \*/
  checkOpenTypeFeature(using: OpenTypeFeature | string): boolean

/\*\*

- Copies enough font data to render the supplied character list.
- @param charactersForSubset String containing every character used in the resulting font.
- @param fontDestination File destination for the new font.
  \*/
  createSubsetFont(charactersForSubset: string, fontDestination: File): void

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): Font[]

/\*\*

- Unregisters a previously attached event listener.
- @param eventType Event category that was registered.
- @param handler Handler that was registered for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Creates executable source text that resolves back to the Font.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Font collection.
  \*/
  declare class Fonts {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Font at the requested index.
- @param index Index value to retrieve.
  \*/
  [index: number]: Font

/\*\*

- Gets an arbitrary Font from the collection.
  \*/
  anyItem(): Font

/\*\*

- Reports how many elements the Font collection contains.
  \*/
  count(): number

/\*\*

- Gets all Font objects from the collection.
  \*/
  everyItem(): Font[]

/\*\*

- Gets the first Font in collection order.
  \*/
  firstItem(): Font

/\*\*

- Gets a Font by index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): Font

/\*\*

- Gets the Font matching the supplied name.
- @param name Name to look up.
  \*/
  itemByName(name: string): Font

/\*\*

- Gets the Fonts spanning the requested range.
- @param from Starting Font, index, or name for the range.
- @param to Ending Font, index, or name for the range.
  \*/
  itemByRange(from: Font | number | string, to: Font | number | string): Font[]

/\*\*

- Gets the final Font in collection order.
  \*/
  lastItem(): Font

/\*\*

- Gets the middle Font from the collection.
  \*/
  middleItem(): Font

/\*\*

- Gets the Font immediately after the supplied Font in collection order.
- @param obj Font positioned before the requested Font.
  \*/
  nextItem(obj: Font): Font

/\*\*

- Gets the Font immediately before the supplied index.
- @param obj Index of the Font positioned after the requested Font.
  \*/
  previousItem(obj: Font): Font

/\*\*

- Creates executable source text that resolves back to the Font.
  \*/
  toSource(): string
  }

/\*\*

- KinsokuTable object.
  \*/
  declare class KinsokuTable {
  /\*\*
  - Kinsoku-set characters that must remain together.
    \*/
    cantBeSeparatedChars: string

/\*\*

- Kinsoku-set characters disallowed at the start of a line.
  \*/
  cantBeginLineChars: string

/\*\*

- Kinsoku-set characters disallowed at the end of a line.
  \*/
  cantEndLineChars: string

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Hanging punctuation characters in the kinsoku set.
  \*/
  hangingPunctuationChars: string

/\*\*

- Unique ID assigned to the KinsokuTable.
  \*/
  readonly id: number

/\*\*

- Position of this KinsokuTable inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String storage field available for arbitrary labels.
  \*/
  label: string

/\*\*

- Name assigned to the KinsokuTable.
  \*/
  name: string

/\*\*

- Containing object for KinsokuTable: Document or Application.
  \*/
  readonly parent: any

/\*\*

- Bulk-assignment bag for applying multiple property values together.
  \*/
  properties: object

/\*\*

- Registers a listener for an event.
- @param eventType Event category to listen for.
- @param handler Callback or File handler used for the event.
- @param captures Obsolete parameter retained for compatibility.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored under a given key.
- @param key Key whose label value should be returned.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of resolved object references.
  \*/
  getElements(): KinsokuTable[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key used for label storage.
- @param value Value to store for that key.
  \*/
  insertLabel(key: string, value: string): void
