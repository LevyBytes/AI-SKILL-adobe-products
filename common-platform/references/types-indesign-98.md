# Indesign (part 98)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Yields the central XMLInstruction in this collection.
  \*/
  middleItem(): XMLInstruction

/\*\*

- Yields the XMLInstruction positioned after the supplied XMLInstruction.
- @param obj XMLInstruction immediately before the requested XMLInstruction.
  \*/
  nextItem(obj: XMLInstruction): XMLInstruction

/\*\*

- Yields the XMLInstruction positioned before the supplied index.
- @param obj Index belonging to the XMLInstruction after the requested XMLInstruction.
  \*/
  previousItem(obj: XMLInstruction): XMLInstruction

/\*\*

- Builds executable source text that resolves back to the XMLInstruction.
  \*/
  toSource(): string
  }

/\*\*

- XML item object.
  \*/
  declare class XMLItem {
  /\*\*
  - EventListener collection attached to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events collection attached to this object.
  \*/
  readonly events: Events

/\*\*

- Unique XMLItem ID.
  \*/
  readonly id: number

/\*\*

- XMLItem position inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for XMLItem, either a Document or XMLElement.
  \*/
  readonly parent: any

/\*\*

- Property bag used to set multiple values together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Makes a duplicate XMLItem.
  \*/
  duplicate(): XMLItem

/\*\*

- Resolves this object specifier into object-reference array form.
  \*/
  getElements(): XMLItem[]

/\*\*

- Removes this XMLItem.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Selects this object.
- @param existingSelection Selection relationship between XMLItem and earlier selections.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Builds executable source text that resolves back to the XMLItem.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for XMLItem objects.
  \*/
  declare class XMLItems {
  /\*\*
  - Object count held by this collection.
    \*/
    readonly length: number

/\*\*

- Yields the XMLItem at the requested index.
- @param index Index to retrieve.
  \*/
  [index: number]: XMLItem

/\*\*

- Yields an arbitrary XMLItem from this collection.
  \*/
  anyItem(): XMLItem

/\*\*

- Reports how many XMLItem elements are present.
  \*/
  count(): number

/\*\*

- Yields all XMLItem entries in this collection.
  \*/
  everyItem(): XMLItem[]

/\*\*

- Yields the leading XMLItem in this collection.
  \*/
  firstItem(): XMLItem

/\*\*

- Yields the XMLItem identified by index or name.
- @param index Index or name to look up.
  \*/
  item(index: number | string): XMLItem

/\*\*

- Yields the XMLItem identified by ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): XMLItem

/\*\*

- Yields XMLItems spanning the requested range.
- @param from XMLItem, index, or name where the range starts.
- @param to XMLItem, index, or name where the range ends.
  \*/
  itemByRange(from: XMLItem | number | string, to: XMLItem | number | string): XMLItem[]

/\*\*

- Yields the final XMLItem in this collection.
  \*/
  lastItem(): XMLItem

/\*\*

- Yields the central XMLItem in this collection.
  \*/
  middleItem(): XMLItem

/\*\*

- Yields the XMLItem positioned after the supplied XMLItem.
- @param obj XMLItem immediately before the requested XMLItem.
  \*/
  nextItem(obj: XMLItem): XMLItem

/\*\*

- Yields the XMLItem positioned before the supplied index.
- @param obj Index belonging to the XMLItem after the requested XMLItem.
  \*/
  previousItem(obj: XMLItem): XMLItem

/\*\*

- Builds executable source text that resolves back to the XMLItem.
  \*/
  toSource(): string
  }

/\*\*

- DTD object for the document.
  \*/
  declare class DTD extends XMLItem {
  /\*\*
  - Text contents value.
    \*/
    readonly contents: string | SpecialCharacters

/\*\*

- Public ID recorded on the DOCTYPE declaration; applies only to an external subset DTD.
  \*/
  readonly publicId: string

/\*\*

- Root-object tag.
  \*/
  rootTag: XMLTag

/\*\*

- System ID recorded on the DOCTYPE declaration; applies only to an external subset DTD.
  \*/
  readonly systemId: string
  }

/\*\*

- Collection wrapper for DTD objects.
  \*/
  declare class DTDs {
  /\*\*
  - Object count held by this collection.
    \*/
    readonly length: number

/\*\*

- Yields the DTD at the requested index.
- @param index Index to retrieve.
  \*/
  [index: number]: DTD

/\*\*

- Yields an arbitrary DTD from this collection.
  \*/
  anyItem(): DTD

/\*\*

- Reports how many DTD elements are present.
  \*/
  count(): number

/\*\*

- Yields all DTD entries in this collection.
  \*/
  everyItem(): DTD[]

/\*\*

- Yields the leading DTD in this collection.
  \*/
  firstItem(): DTD

/\*\*

- Yields the DTD identified by index or name.
- @param index Index or name to look up.
  \*/
  item(index: number | string): DTD

/\*\*

- Yields the DTD identified by ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): DTD

/\*\*

- Yields DTDs spanning the requested range.
- @param from DTD, index, or name where the range starts.
- @param to DTD, index, or name where the range ends.
  \*/
  itemByRange(from: DTD | number | string, to: DTD | number | string): DTD[]

/\*\*

- Yields the final DTD in this collection.
  \*/
  lastItem(): DTD

/\*\*

- Yields the central DTD in this collection.
  \*/
  middleItem(): DTD

/\*\*

- Yields the DTD positioned after the supplied DTD.
- @param obj DTD immediately before the requested DTD.
  \*/
  nextItem(obj: DTD): DTD

/\*\*

- Yields the DTD positioned before the supplied index.
- @param obj Index belonging to the DTD after the requested DTD.
  \*/
  previousItem(obj: DTD): DTD

/\*\*

- Builds executable source text that resolves back to the DTD.
  \*/
  toSource(): string
  }

/\*\*

- XML story text that is not placed in the layout yet.
  \*/
  declare class XmlStory extends Story {}

/\*\*

- Collection wrapper for xml stories.
  \*/
  declare class XmlStories {
  /\*\*
  - Object count held by this collection.
    \*/
    readonly length: number

/\*\*

- Yields the XmlStory at the requested index.
- @param index Index to retrieve.
  \*/
  [index: number]: XmlStory

/\*\*

- Yields an arbitrary XmlStory from this collection.
  \*/
  anyItem(): XmlStory

/\*\*

- Reports how many XmlStory elements are present.
  \*/
  count(): number

/\*\*

- Yields all XmlStory entries in this collection.
  \*/
  everyItem(): XmlStory[]

/\*\*

- Yields the leading XmlStory in this collection.
  \*/
  firstItem(): XmlStory

/\*\*

- Yields the XmlStory identified by index or name.
- @param index Index or name to look up.
  \*/
  item(index: number | string): XmlStory

/\*\*

- Yields the XmlStory identified by ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): XmlStory

/\*\*

- Yields the XmlStory identified by name.
- @param name Name to look up.
  \*/
  itemByName(name: string): XmlStory

/\*\*

- Yields XmlStories spanning the requested range.
- @param from XmlStory, index, or name where the range starts.
- @param to XmlStory, index, or name where the range ends.
  \*/
  itemByRange(from: XmlStory | number | string, to: XmlStory | number | string): XmlStory[]

/\*\*

- Yields the final XmlStory in this collection.
  \*/
  lastItem(): XmlStory

/\*\*

- Yields the central XmlStory in this collection.
  \*/
  middleItem(): XmlStory

/\*\*

- Yields the XmlStory positioned after the supplied XmlStory.
- @param obj XmlStory immediately before the requested XmlStory.
  \*/
  nextItem(obj: XmlStory): XmlStory

/\*\*

- Yields the XmlStory positioned before the supplied index.
- @param obj Index belonging to the XmlStory after the requested XmlStory.
  \*/
  previousItem(obj: XmlStory): XmlStory

/\*\*

- Builds executable source text that resolves back to the XmlStory.
  \*/
  toSource(): string
  }

/\*\*

- XML rule processor object.
  \*/
  declare class XMLRuleProcessor {
  /\*\*
  - EventListener collection attached to this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events collection attached to this object.
  \*/
  readonly events: Events

/\*\*

- True once XML rule processing has stopped.
  \*/
  readonly halted: boolean

/\*\*

- Unique XMLRuleProcessor ID.
  \*/
  readonly id: number

/\*\*

- XMLRuleProcessor position inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued property with unrestricted content.
  \*/
  label: string

/\*\*

- XMLRuleProcessor name, provided as an alias of the XMLRuleProcessor label property.
  \*/
  name: string

/\*\*

- Parent object for XMLRuleProcessor (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property bag used to set multiple values together.
  \*/
  properties: object

/\*\*

- XPath condition paths belonging to rules in the rule set.
  \*/
  readonly rulePaths: string[]

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Ends processing for the XML rule set.
  \*/
  endProcessingRuleSet(): void

/\*\*

- Reads the label value stored under the supplied key.
- @param key Key to query.
  \*/
  extractLabel(key: string): string

/\*\*

- Finds the following XML element that matches.
  \*/
  findNextMatch(): XMLRuleMatchData

/\*\*

- Resolves this object specifier into object-reference array form.
  \*/
  getElements(): XMLRuleProcessor[]

/\*\*

- Halts the XML rule processor.
  \*/
  halt(): void

/\*\*

- Stores a label value under the supplied key.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this XMLRuleProcessor.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Skips child XML elements of the current XML element.
  \*/
  skipChildren(): void

/\*\*

- Begins processing an XML rule set.
- @param initialElement XML element where rule-set processing begins.
  \*/
  startProcessingRuleSet(initialElement: XMLElement): XMLRuleMatchData

/\*\*

- Processes XML elements belonging to the current XML element.
  \*/
  startProcessingSubtree(): XMLRuleMatchData

/\*\*

- Builds executable source text that resolves back to the XMLRuleProcessor.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for XML rule processors.
  \*/
  declare class XMLRuleProcessors {
  /\*\*
  - Object count held by this collection.
    \*/
    readonly length: number

/\*\*

- Yields the XMLRuleProcessor at the requested index.
- @param index Index to retrieve.
  \*/
  [index: number]: XMLRuleProcessor

/\*\*

- Adds an XMLRuleProcessor.
- @param rulePaths XPath condition paths belonging to rules in the rule set.
- @param prefixMappingTable Namespace mapping table; accepted shape: Array of Arrays of 2 Strings.
- @param withProperties Starting property values for the new XMLRuleProcessor
  \*/
  add(rulePaths: string[], prefixMappingTable: any[], withProperties: object): XMLRuleProcessor

/\*\*

- Yields an arbitrary XMLRuleProcessor from this collection.
  \*/
  anyItem(): XMLRuleProcessor

/\*\*

- Reports how many XMLRuleProcessor elements are present.
  \*/
  count(): number

/\*\*

- Yields all XMLRuleProcessor entries in this collection.
  \*/
  everyItem(): XMLRuleProcessor[]

/\*\*

- Yields the leading XMLRuleProcessor in this collection.
  \*/
  firstItem(): XMLRuleProcessor

/\*\*

- Yields the XMLRuleProcessor identified by index or name.
- @param index Index or name to look up.
  \*/
  item(index: number | string): XMLRuleProcessor

/\*\*

- Yields the XMLRuleProcessor identified by ID.
- @param id ID to look up.
  \*/
  itemByID(id: number): XMLRuleProcessor

/\*\*

- Yields the XMLRuleProcessor identified by name.
- @param name Name to look up.
  \*/
  itemByName(name: string): XMLRuleProcessor

/\*\*

- Yields XMLRuleProcessors spanning the requested range.
- @param from XMLRuleProcessor, index, or name where the range starts.
- @param to XMLRuleProcessor, index, or name where the range ends.
  \*/
  itemByRange(from: XMLRuleProcessor | number | string, to: XMLRuleProcessor | number | string): XMLRuleProcessor[]

/\*\*

- Yields the final XMLRuleProcessor in this collection.
  \*/
  lastItem(): XMLRuleProcessor

/\*\*

- Yields the central XMLRuleProcessor in this collection.
  \*/
  middleItem(): XMLRuleProcessor

/\*\*

- Yields the XMLRuleProcessor positioned after the supplied XMLRuleProcessor.
- @param obj XMLRuleProcessor immediately before the requested XMLRuleProcessor.
  \*/
  nextItem(obj: XMLRuleProcessor): XMLRuleProcessor

/\*\*

- Yields the XMLRuleProcessor positioned before the supplied index.
- @param obj Index belonging to the XMLRuleProcessor after the requested XMLRuleProcessor.
  \*/
  previousItem(obj: XMLRuleProcessor): XMLRuleProcessor

/\*\*

- Builds executable source text that resolves back to the XMLRuleProcessor.
  \*/
  toSource(): string
  }

/\*\*

- Match data for an XML element found by one or more rules in the active XML rule set.
  \*/
  declare class XMLRuleMatchData {
  /\*\*
  - XML element found by one or more rules in the active XML rule set.
    \*/
    readonly element: XMLItem

/\*\*

- EventListener collection attached to this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection attached to this object.
  \*/
  readonly events: Events

/\*\*

- XMLRuleMatchData position inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Indices for rules that matched within the rule set.
  \*/
  readonly matchRules: number[]

/\*\*

- Parent object for XMLRuleMatchData (a XMLRuleProcessor).
  \*/
  readonly parent: XMLRuleProcessor

/\*\*

- Property bag used to set multiple values together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into object-reference array form.
  \*/
  getElements(): XMLRuleMatchData[]

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the XMLRuleMatchData.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }
