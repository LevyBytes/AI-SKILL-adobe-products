# Indesign (part 88)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- TextVariable name.
  \*/
  name: string

/\*\*

- Owning object for the TextVariable: Application or Document.
  \*/
  readonly parent: any

/\*\*

- Preference-object collection.
  \*/
  readonly preferences: Preferences

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Preference data tied to this text variable.
  \*/
  readonly variableOptions: PageNumberVariablePreference | ChapterNumberVariablePreference | DateVariablePreference | FileNameVariablePreference | MatchCharacterStylePreference | MatchParagraphStylePreference | CustomTextVariablePreference | CaptionMetadataVariablePreference

/\*\*

- Variable kind.
  \*/
  variableType: VariableTypes

/\*\*

- Registers an event listener.
- @param eventType Event type name.
- @param handler Listener callback or file handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Changes every instance of this variable into text.
  \*/
  convertToText(): Text[]

/\*\*

- Resolves this specifier into object references.
  \*/
  getElements(): TextVariable[]

/\*\*

- Removes this TextVariable.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to this TextVariable.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- TextVariable collection.
  \*/
  declare class TextVariables {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the TextVariable at an index.
- @param index Numeric index.
  \*/
  [index: number]: TextVariable

/\*\*

- Adds a TextVariable.
- @param withProperties Starting property values for the TextVariable being created.
  \*/
  add(withProperties: object): TextVariable

/\*\*

- Chooses an arbitrary TextVariable from this collection.
  \*/
  anyItem(): TextVariable

/\*\*

- Reports how many TextVariable elements are present.
  \*/
  count(): number

/\*\*

- Provides all TextVariable objects from this collection.
  \*/
  everyItem(): TextVariable[]

/\*\*

- Provides the collection's initial TextVariable.
  \*/
  firstItem(): TextVariable

/\*\*

- Finds a TextVariable by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): TextVariable

/\*\*

- Finds a TextVariable by name.
- @param name Name value.
  \*/
  itemByName(name: string): TextVariable

/\*\*

- Provides TextVariables spanning the requested range.
- @param from Range start, given as a TextVariable, index, or name.
- @param to Range end, given as a TextVariable, index, or name.
  \*/
  itemByRange(from: TextVariable | number | string, to: TextVariable | number | string): TextVariable[]

/\*\*

- Provides the final TextVariable in this collection.
  \*/
  lastItem(): TextVariable

/\*\*

- Provides the center TextVariable from this collection.
  \*/
  middleItem(): TextVariable

/\*\*

- Provides the TextVariable positioned immediately after the supplied TextVariable.
- @param obj TextVariable that precedes the requested one.
  \*/
  nextItem(obj: TextVariable): TextVariable

/\*\*

- Provides the TextVariable positioned immediately before the supplied index.
- @param obj Index belonging to the TextVariable after the requested one.
  \*/
  previousItem(obj: TextVariable): TextVariable

/\*\*

- Builds executable source text that resolves back to this TextVariable.
  \*/
  toSource(): string
  }

/\*\*

- TextVariableInstance object in text.
  \*/
  declare class TextVariableInstance {
  /\*\*
  - TextVariable associated with this instance.
    \*/
    associatedTextVariable: TextVariable

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Unique TextVariableInstance ID.
  \*/
  readonly id: number

/\*\*

- Position of the TextVariableInstance inside its parent container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully.
  \*/
  readonly isValid: boolean

/\*\*

- User-settable string metadata.
  \*/
  label: string

/\*\*

- TextVariableInstance name.
  \*/
  readonly name: string

/\*\*

- Owning object for the TextVariableInstance: XmlStory, TextFrame, EndnoteTextFrame, Story, Note, Cell, Footnote or Change.
  \*/
  readonly parent: any

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Replacement text for the variable marker. This property is read-only and is only usable for updating variables.
  \*/
  readonly resultText: string

/\*\*

- Insertion point before the table inside the story that contains it.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- Registers an event listener.
- @param eventType Event type name.
- @param handler Listener callback or file handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Turns the footnote into story text, placing the resulting text where the marker previously sat.
  \*/
  convertToText(): Text

/\*\*

- Reads the label value stored for a key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into object references.
  \*/
  getElements(): TextVariableInstance[]

/\*\*

- Stores a keyed label value.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this TextVariableInstance.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to this TextVariableInstance.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- TextVariableInstance collection.
  \*/
  declare class TextVariableInstances {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the TextVariableInstance at an index.
- @param index Numeric index.
  \*/
  [index: number]: TextVariableInstance

/\*\*

- Adds a text variable instance at a location.
- @param to Placement relative to the reference object or inside the owning container.
- @param reference Reference object. Needed only for before/after placement.
- @param withProperties Starting property values for the TextVariableInstance being created.
  \*/
  add(to?: LocationOptions, reference?: TextVariableInstance | XmlStory | TextFrame | EndnoteTextFrame | Story | Note | Cell | Footnote | Table | TextColumn | TextStyleRange | Text | InsertionPoint | Paragraph | Line | Word | Character | Change, withProperties?: object): TextVariableInstance

/\*\*

- Chooses an arbitrary TextVariableInstance from this collection.
  \*/
  anyItem(): TextVariableInstance

/\*\*

- Reports how many TextVariableInstance elements are present.
  \*/
  count(): number

/\*\*

- Provides all TextVariableInstance objects from this collection.
  \*/
  everyItem(): TextVariableInstance[]

/\*\*

- Provides the collection's initial TextVariableInstance.
  \*/
  firstItem(): TextVariableInstance

/\*\*

- Finds a TextVariableInstance by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): TextVariableInstance

/\*\*

- Finds a TextVariableInstance by ID.
- @param id ID value.
  \*/
  itemByID(id: number): TextVariableInstance

/\*\*

- Finds a TextVariableInstance by name.
- @param name Name value.
  \*/
  itemByName(name: string): TextVariableInstance

/\*\*

- Provides TextVariableInstances spanning the requested range.
- @param from Range start, given as a TextVariableInstance, index, or name.
- @param to Range end, given as a TextVariableInstance, index, or name.
  \*/
  itemByRange(from: TextVariableInstance | number | string, to: TextVariableInstance | number | string): TextVariableInstance[]

/\*\*

- Provides the final TextVariableInstance in this collection.
  \*/
  lastItem(): TextVariableInstance

/\*\*

- Provides the center TextVariableInstance from this collection.
  \*/
  middleItem(): TextVariableInstance

/\*\*

- Provides the TextVariableInstance positioned immediately after the supplied TextVariableInstance.
- @param obj TextVariableInstance that precedes the requested one.
  \*/
  nextItem(obj: TextVariableInstance): TextVariableInstance

/\*\*

- Provides the TextVariableInstance positioned immediately before the supplied index.
- @param obj Index belonging to the TextVariableInstance after the requested one.
  \*/
  previousItem(obj: TextVariableInstance): TextVariableInstance

/\*\*

- Builds executable source text that resolves back to this TextVariableInstance.
  \*/
  toSource(): string
  }

/\*\*

- StyleExportTagMap maps an export type to an export tag.
  \*/
  declare class StyleExportTagMap {
  /\*\*
  - EventListener collection for this object.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Attributes used for the mapping.
  \*/
  exportAttributes: string

/\*\*

- Class used for the mapping.
  \*/
  exportClass: string

/\*\*

- Tag used for the mapping.
  \*/
  exportTag: string

/\*\*

- Export kind.
  \*/
  readonly exportType: string

/\*\*

- Position of the StyleExportTagMap inside its parent container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully.
  \*/
  readonly isValid: boolean

/\*\*

- Owning object for the StyleExportTagMap: CharacterStyle or ParagraphStyle.
  \*/
  readonly parent: any

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type name.
- @param handler Listener callback or file handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this specifier into object references.
  \*/
  getElements(): StyleExportTagMap[]

/\*\*

- Removes this StyleExportTagMap.
  \*/
  remove(): void

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to this StyleExportTagMap.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- StyleExportTagMap collection.
  \*/
  declare class StyleExportTagMaps {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the StyleExportTagMap at an index.
- @param index Numeric index.
  \*/
  [index: number]: StyleExportTagMap

/\*\*

- Adds a mapping.
- @param exportType Export kind.
- @param exportTag Tag used for the mapping.
- @param exportClass Class used for the mapping.
- @param exportAttributes Attributes used for the mapping.
- @param withProperties Starting property values for the StyleExportTagMap being created.
  \*/
  add(exportType: string, exportTag: string, exportClass: string, exportAttributes: string, withProperties: object): StyleExportTagMap

/\*\*

- Chooses an arbitrary StyleExportTagMap from this collection.
  \*/
  anyItem(): StyleExportTagMap

/\*\*

- Reports how many StyleExportTagMap elements are present.
  \*/
  count(): number

/\*\*

- Provides all StyleExportTagMap objects from this collection.
  \*/
  everyItem(): StyleExportTagMap[]

/\*\*

- Provides the collection's initial StyleExportTagMap.
  \*/
  firstItem(): StyleExportTagMap

/\*\*

- Finds a StyleExportTagMap by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): StyleExportTagMap

/\*\*

- Provides StyleExportTagMaps spanning the requested range.
- @param from Range start, given as a StyleExportTagMap, index, or name.
- @param to Range end, given as a StyleExportTagMap, index, or name.
  \*/
  itemByRange(from: StyleExportTagMap | number | string, to: StyleExportTagMap | number | string): StyleExportTagMap[]

/\*\*

- Provides the final StyleExportTagMap in this collection.
  \*/
  lastItem(): StyleExportTagMap

/\*\*

- Provides the center StyleExportTagMap from this collection.
  \*/
  middleItem(): StyleExportTagMap

/\*\*

- Provides the StyleExportTagMap positioned immediately after the supplied StyleExportTagMap.
- @param obj StyleExportTagMap that precedes the requested one.
  \*/
  nextItem(obj: StyleExportTagMap): StyleExportTagMap

/\*\*

- Provides the StyleExportTagMap positioned immediately before the supplied index.
- @param obj Index belonging to the StyleExportTagMap after the requested one.
  \*/
  previousItem(obj: StyleExportTagMap): StyleExportTagMap

/\*\*

- Builds executable source text that resolves back to this StyleExportTagMap.
  \*/
  toSource(): string
  }

/\*\*

- ParagraphStyleGroup object.
  \*/
  declare class ParagraphStyleGroup {
  /\*\*
  - Every ParagraphStyle, regardless of group membership.
    \*/
    readonly allParagraphStyles: ParagraphStyle[]

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Unique ParagraphStyleGroup ID.
  \*/
  readonly id: number

/\*\*

- Position of the ParagraphStyleGroup inside its parent container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully.
  \*/
  readonly isValid: boolean

/\*\*

- User-settable string metadata.
  \*/
  label: string

/\*\*

- ParagraphStyleGroup name.
  \*/
  name: string

/\*\*

- Nested ParagraphStyleGroup collection.
  \*/
  readonly paragraphStyleGroups: ParagraphStyleGroups

/\*\*

- ParagraphStyle collection.
  \*/
  readonly paragraphStyles: ParagraphStyles

/\*\*

- Owning object for the ParagraphStyleGroup: Document, Application or ParagraphStyleGroup.
  \*/
  readonly parent: any

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type name.
- @param handler Listener callback or file handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Copies the ParagraphStyleGroup.
  \*/
  duplicate(): ParagraphStyleGroup

/\*\*

- Reads the label value stored for a key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this specifier into object references.
  \*/
  getElements(): ParagraphStyleGroup[]

/\*\*

- Stores a keyed label value.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Repositions the style.
- @param to Placement relative to the reference object or inside the owning container.
- @param reference Reference object. Needed for before/after placement.
  \*/
  move(to: LocationOptions, reference: ParagraphStyle | ParagraphStyleGroup | CharacterStyle | CharacterStyleGroup | CellStyle | CellStyleGroup | TableStyle | TableStyleGroup | Document | Application): ParagraphStyleGroup

/\*\*

- Removes the style.
- @param replacingWith Style applied in place of the removed style.
  \*/
  remove(replacingWith: ParagraphStyle | CharacterStyle): void

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to this ParagraphStyleGroup.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- ParagraphStyleGroup collection.
  \*/
  declare class ParagraphStyleGroups {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the ParagraphStyleGroup at an index.
- @param index Numeric index.
  \*/
  [index: number]: ParagraphStyleGroup

/\*\*

- Adds a ParagraphStyleGroup.
- @param withProperties Starting property values for the ParagraphStyleGroup being created.
  \*/
  add(withProperties: object): ParagraphStyleGroup

/\*\*

- Chooses an arbitrary ParagraphStyleGroup from this collection.
  \*/
  anyItem(): ParagraphStyleGroup

/\*\*

- Reports how many ParagraphStyleGroup elements are present.
  \*/
  count(): number

/\*\*

- Provides all ParagraphStyleGroup objects from this collection.
  \*/
  everyItem(): ParagraphStyleGroup[]

/\*\*

- Provides the collection's initial ParagraphStyleGroup.
  \*/
  firstItem(): ParagraphStyleGroup

/\*\*

- Finds a ParagraphStyleGroup by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): ParagraphStyleGroup

/\*\*

- Finds a ParagraphStyleGroup by ID.
- @param id ID value.
  \*/
  itemByID(id: number): ParagraphStyleGroup

/\*\*

- Finds a ParagraphStyleGroup by name.
- @param name Name value.
  \*/
  itemByName(name: string): ParagraphStyleGroup

/\*\*

- Provides ParagraphStyleGroups spanning the requested range.
- @param from Range start, given as a ParagraphStyleGroup, index, or name.
- @param to Range end, given as a ParagraphStyleGroup, index, or name.
  \*/
  itemByRange(from: ParagraphStyleGroup | number | string, to: ParagraphStyleGroup | number | string): ParagraphStyleGroup[]

/\*\*

- Provides the final ParagraphStyleGroup in this collection.
  \*/
  lastItem(): ParagraphStyleGroup

/\*\*

- Provides the center ParagraphStyleGroup from this collection.
  \*/
  middleItem(): ParagraphStyleGroup

/\*\*

- Provides the ParagraphStyleGroup positioned immediately after the supplied ParagraphStyleGroup.
- @param obj ParagraphStyleGroup that precedes the requested one.
  \*/
  nextItem(obj: ParagraphStyleGroup): ParagraphStyleGroup

/\*\*

- Provides the ParagraphStyleGroup positioned immediately before the supplied index.
- @param obj Index belonging to the ParagraphStyleGroup after the requested one.
  \*/
  previousItem(obj: ParagraphStyleGroup): ParagraphStyleGroup

/\*\*

- Builds executable source text that resolves back to this ParagraphStyleGroup.
  \*/
  toSource(): string
  }

/\*\*

- CharacterStyleGroup object.
  \*/
  declare class CharacterStyleGroup {
  /\*\*
  - Every CharacterStyle, regardless of group membership.
    \*/
    readonly allCharacterStyles: CharacterStyle[]

/\*\*

- Nested CharacterStyleGroup collection.
  \*/
  readonly characterStyleGroups: CharacterStyleGroups

/\*\*

- CharacterStyle collection.
  \*/
  readonly characterStyles: CharacterStyles

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Unique CharacterStyleGroup ID.
  \*/
  readonly id: number

/\*\*

- Position of the CharacterStyleGroup inside its parent container.
  \*/
  readonly index: number
