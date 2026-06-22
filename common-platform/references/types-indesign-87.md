# Indesign (part 87)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Gets Changes spanning the supplied range.
- @param from Change, index, or name at the range start.
- @param to Change, index, or name at the range end.
  \*/
  itemByRange(from: Change | number | string, to: Change | number | string): Change[]

/\*\*

- Gets the final Change in this collection.
  \*/
  lastItem(): Change

/\*\*

- Gets the central Change in this collection.
  \*/
  middleItem(): Change

/\*\*

- Gets the Change positioned after the supplied Change.
- @param obj Change that comes before the wanted Change.
  \*/
  nextItem(obj: Change): Change

/\*\*

- Gets the Change positioned before the supplied index.
- @param obj Index belonging to the Change after the wanted Change.
  \*/
  previousItem(obj: Change): Change

/\*\*

- Builds source text that resolves back to the Change when run.
  \*/
  toSource(): string
  }

/\*\*

- Text object positioned on a path.
  \*/
  declare class TextPath {
  /\*\*
  - Sent after placement of a TextPath. This event bubbles. This event is not cancelable.
    \*/
    static readonly `AFTER_PLACE`: string

/\*\*

- Sent before placement of a TextPath. This event bubbles. This event is cancelable.
  \*/
  static readonly `BEFORE_PLACE`: string

/\*\*

- Midpoint between the start bracket and end bracket.
  \*/
  readonly centerBracket: number

/\*\*

- Characters collection.
  \*/
  readonly characters: Characters

/\*\*

- Text frame contents.
  \*/
  contents: string | TextFrameContents | SpecialCharacters

/\*\*

- Type-on-path endpoint. Note: Additional text becomes overset unless linked to another path or text frame.
  \*/
  endBracket: number

/\*\*

- Final text frame in the thread.
  \*/
  readonly endTextFrame: TextFrame | TextPath

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Flip effect used by the type on a path.
  \*/
  flipPathEffect: FlipValues

/\*\*

- Unique ID for the TextPath.
  \*/
  readonly id: number

/\*\*

- Position of the TextPath inside its parent object.
  \*/
  readonly index: number

/\*\*

- Insertion points collection.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- Lines collection.
  \*/
  readonly lines: Lines

/\*\*

- TextPath name; alias for the TextPath's label property.
  \*/
  name: string

/\*\*

- Next text frame in the thread.
  \*/
  nextTextFrame: TextFrame | TextPath | NothingEnum

/\*\*

- True when the story contains overset text.
  \*/
  readonly overflows: boolean

/\*\*

- Paragraphs collection.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- TextPath parent; accepted classes include SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame or EPSText.
  \*/
  readonly parent: any

/\*\*

- Story containing the text.
  \*/
  readonly parentStory: Story

/\*\*

- Type-on-path alignment.
  \*/
  pathAlignment: PathTypeAlignments

/\*\*

- Type-on-path effect.
  \*/
  pathEffect: TextPathEffects

/\*\*

- Type-on-path spacing.
  \*/
  pathSpacing: number

/\*\*

- Previous text frame in the thread.
  \*/
  previousTextFrame: TextFrame | TextPath | NothingEnum

/\*\*

- Property bundle for setting multiple values in one call.
  \*/
  properties: object

/\*\*

- Starting position for type on the path, measured in points. Note: value 0 refers to the path's first point.
  \*/
  startBracket: number

/\*\*

- First text frame in the thread.
  \*/
  readonly startTextFrame: TextFrame | TextPath

/\*\*

- Alignment assigned to type on a path.
  \*/
  textAlignment: TextTypeAlignments

/\*\*

- Text columns collection.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Text frame index inside the story.
  \*/
  readonly textFrameIndex: number

/\*\*

- Text style ranges collection.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Text objects collection.
  \*/
  readonly texts: Texts

/\*\*

- Words collection.
  \*/
  readonly words: Words

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Replaces glyphs matching the find what value with the change to value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  changeGlyph(reverseOrder: boolean): Text[]

/\*\*

- Replaces text matching the find what value with the change to value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  changeGrep(reverseOrder: boolean): Text[]

/\*\*

- Replaces text matching the find what value with the change to value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  changeText(reverseOrder: boolean): Text[]

/\*\*

- Replaces text matching the find character type value with the change character type value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  changeTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Gets the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Finds glyphs matching the find what value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  findGlyph(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  findGrep(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find what value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  findText(reverseOrder: boolean): Text[]

/\*\*

- Finds text matching the find character type value.
- @param reverseOrder When true, the returned results are in reverse order.
  \*/
  findTransliterate(reverseOrder: boolean): Text[]

/\*\*

- Resolves the object specifier into object-reference results.
  \*/
  getElements(): TextPath[]

/\*\*

- Stores a label value for the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this TextPath object.
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

- Builds source text that resolves back to the TextPath when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for text paths.
  \*/
  declare class TextPaths {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a TextPath by index.
- @param index Index value.
  \*/
  [index: number]: TextPath

/\*\*

- Adds a new TextPath.
- @param withProperties Starting property values for the new TextPath.
  \*/
  add(withProperties: object): TextPath

/\*\*

- Selects an arbitrary TextPath from this collection.
  \*/
  anyItem(): TextPath

/\*\*

- Counts elements on the TextPath collection.
  \*/
  count(): number

/\*\*

- Gets all TextPath objects in this collection.
  \*/
  everyItem(): TextPath[]

/\*\*

- Gets the initial TextPath in this collection.
  \*/
  firstItem(): TextPath

/\*\*

- Finds a TextPath by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TextPath

/\*\*

- Finds a TextPath by ID.
- @param id ID value.
  \*/
  itemByID(id: number): TextPath

/\*\*

- Finds a TextPath by name.
- @param name Name value.
  \*/
  itemByName(name: string): TextPath

/\*\*

- Gets TextPaths spanning the supplied range.
- @param from TextPath, index, or name at the range start.
- @param to TextPath, index, or name at the range end.
  \*/
  itemByRange(from: TextPath | number | string, to: TextPath | number | string): TextPath[]

/\*\*

- Gets the final TextPath in this collection.
  \*/
  lastItem(): TextPath

/\*\*

- Gets the central TextPath in this collection.
  \*/
  middleItem(): TextPath

/\*\*

- Gets the TextPath positioned after the supplied TextPath.
- @param obj TextPath that comes before the wanted TextPath.
  \*/
  nextItem(obj: TextPath): TextPath

/\*\*

- Gets the TextPath positioned before the supplied index.
- @param obj Index belonging to the TextPath after the wanted TextPath.
  \*/
  previousItem(obj: TextPath): TextPath

/\*\*

- Builds source text that resolves back to the TextPath when run.
  \*/
  toSource(): string
  }

/\*\*

- Story note object.
  \*/
  declare class Note {
  /\*\*
  - Characters collection.
    \*/
    readonly characters: Characters

/\*\*

- True when the note is collapsed in galley view.
  \*/
  collapsed: boolean

/\*\*

- Date and time when the note was created.
  \*/
  readonly creationDate: Date

/\*\*

- Event listeners collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Hidden text objects collection.
  \*/
  readonly hiddenTexts: HiddenTexts

/\*\*

- Unique ID for the Note.
  \*/
  readonly id: number

/\*\*

- Position of the Note inside its parent object.
  \*/
  readonly index: number

/\*\*

- Insertion points collection.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- Lines collection.
  \*/
  readonly lines: Lines

/\*\*

- Date and time when the note was last modified.
  \*/
  readonly modificationDate: Date

/\*\*

- Note name; alias for the Note's label property.
  \*/
  name: string

/\*\*

- Paragraphs collection.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Note parent; possible containers are XmlStory, Story, TextFrame, EndnoteTextFrame, InsertionPoint or Cell.
  \*/
  readonly parent: any

/\*\*

- Property bundle for setting multiple values in one call.
  \*/
  properties: object

/\*\*

- Insertion point before the table in the story containing that table.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- Text columns collection.
  \*/
  readonly textColumns: TextColumns

/\*\*

- Text style ranges collection.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- Text variable instances collection.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Text objects collection.
  \*/
  readonly texts: Texts

/\*\*

- User responsible for the note.
  \*/
  readonly userName: string

/\*\*

- Words collection.
  \*/
  readonly words: Words

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the note into story text.
  \*/
  convertToText(): void

/\*\*

- Gets the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier into object-reference results.
  \*/
  getElements(): Note[]

/\*\*

- Stores a label value for the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Moves the note to a supplied location.
- @param to New location relative to the reference object or within the parent object.
- @param reference Reference object. Note: Needed when to requests placement before or after.
  \*/
  move(to: LocationOptions, reference: Text | Story): Note

/\*\*

- Removes this Note object.
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

- Builds source text that resolves back to the Note when run.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for notes.
  \*/
  declare class Notes {
  /\*\*
  - Object count in this collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Note by index.
- @param index Index value.
  \*/
  [index: number]: Note

/\*\*

- Adds a Note.
- @param at Placement relative to the reference object or inside the owning container.
- @param reference Reference object. Required when at is before or after.
- @param withProperties Starting property values for the Note being created.
  \*/
  add(at?: LocationOptions, reference?: Note | InsertionPoint, withProperties?: object): Note

/\*\*

- Chooses an arbitrary Note from this collection.
  \*/
  anyItem(): Note

/\*\*

- Reports how many Note elements are present.
  \*/
  count(): number

/\*\*

- Provides all Note objects from this collection.
  \*/
  everyItem(): Note[]

/\*\*

- Provides the collection's initial Note.
  \*/
  firstItem(): Note

/\*\*

- Finds a Note by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): Note

/\*\*

- Finds a Note by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Note

/\*\*

- Finds a Note by name.
- @param name Name value.
  \*/
  itemByName(name: string): Note

/\*\*

- Provides Notes spanning the requested range.
- @param from Range start, given as a Note, index, or name.
- @param to Range end, given as a Note, index, or name.
  \*/
  itemByRange(from: Note | number | string, to: Note | number | string): Note[]

/\*\*

- Provides the final Note in this collection.
  \*/
  lastItem(): Note

/\*\*

- Provides the center Note from this collection.
  \*/
  middleItem(): Note

/\*\*

- Provides the Note positioned immediately after the supplied Note.
- @param obj Note that precedes the requested one.
  \*/
  nextItem(obj: Note): Note

/\*\*

- Provides the Note positioned immediately before the supplied index.
- @param obj Index belonging to the Note after the requested one.
  \*/
  previousItem(obj: Note): Note

/\*\*

- Builds executable source text that resolves back to this Note.
  \*/
  toSource(): string
  }

/\*\*

- Footnote object.
  \*/
  declare class Footnote {
  /\*\*
  - All Graphic objects contained in this Footnote.
    \*/
    readonly allGraphics: Graphic[]

/\*\*

- All PageItem objects contained in this Footnote.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- Character collection for the Footnote.
  \*/
  readonly characters: Characters

/\*\*

- Text stored in the footnote.
  \*/
  contents: string | SpecialCharacters | string[] | NothingEnum

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- GraphicLine collection for this Footnote.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Group collection for this Footnote.
  \*/
  readonly groups: Groups

/\*\*

- HiddenText collection for this Footnote.
  \*/
  readonly hiddenTexts: HiddenTexts

/\*\*

- Unique Footnote ID.
  \*/
  readonly id: number

/\*\*

- Position of the Footnote inside its parent container.
  \*/
  readonly index: number

/\*\*

- InsertionPoint collection for this Footnote.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- True when the object specifier resolves successfully.
  \*/
  readonly isValid: boolean

/\*\*

- User-settable string metadata.
  \*/
  label: string

/\*\*

- Line collection for this Footnote.
  \*/
  readonly lines: Lines

/\*\*

- Footnote name; aliases the Footnote label property.
  \*/
  name: string

/\*\*

- Oval collection for this Footnote.
  \*/
  readonly ovals: Ovals

/\*\*

- PageItems access for every page item in a container such as a document, page, or group, without filtering by kind.
  \*/
  readonly pageItems: PageItems

/\*\*

- Paragraph collection for this Footnote.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Owning object for the Footnote: XmlStory, Cell, Story, TextFrame, EndnoteTextFrame or InsertionPoint.
  \*/
  readonly parent: any

/\*\*

- Polygon collection for this Footnote.
  \*/
  readonly polygons: Polygons

/\*\*

- Bulk property assignment object.
  \*/
  properties: object

/\*\*

- Rectangle collection for this Footnote.
  \*/
  readonly rectangles: Rectangles

/\*\*

- SplineItems collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Footnote marker position inside the parent story.
  \*/
  readonly storyOffset: InsertionPoint

/\*\*

- TextColumn collection for this Footnote.
  \*/
  readonly textColumns: TextColumns

/\*\*

- TextFrame collection for this Footnote.
  \*/
  readonly textFrames: TextFrames

/\*\*

- TextStyleRange collection for this Footnote.
  \*/
  readonly textStyleRanges: TextStyleRanges

/\*\*

- TextVariableInstance collection for this Footnote.
  \*/
  readonly textVariableInstances: TextVariableInstances

/\*\*

- Text object collection for this Footnote.
  \*/
  readonly texts: Texts

/\*\*

- Word collection for this Footnote.
  \*/
  readonly words: Words

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
  getElements(): Footnote[]

/\*\*

- Stores a keyed label value.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes this Footnote.
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

- Builds executable source text that resolves back to this Footnote.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Footnote collection.
  \*/
  declare class Footnotes {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Gets the Footnote at an index.
- @param index Numeric index.
  \*/
  [index: number]: Footnote

/\*\*

- Adds a footnote.
- @param at Where the main-text footnote reference number is placed, either against reference or inside the story.
- @param reference Reference object. Must be an insertion point or a note. Required when at is before or after.
- @param withProperties Starting property values for the Footnote being created.
  \*/
  add(at?: LocationOptions, reference?: Note | InsertionPoint, withProperties?: object): Footnote

/\*\*

- Chooses an arbitrary Footnote from this collection.
  \*/
  anyItem(): Footnote

/\*\*

- Reports how many Footnote elements are present.
  \*/
  count(): number

/\*\*

- Provides all Footnote objects from this collection.
  \*/
  everyItem(): Footnote[]

/\*\*

- Provides the collection's initial Footnote.
  \*/
  firstItem(): Footnote

/\*\*

- Finds a Footnote by index or by name.
- @param index Index value or name string.
  \*/
  item(index: number | string): Footnote

/\*\*

- Finds a Footnote by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Footnote

/\*\*

- Finds a Footnote by name.
- @param name Name value.
  \*/
  itemByName(name: string): Footnote

/\*\*

- Provides Footnotes spanning the requested range.
- @param from Range start, given as a Footnote, index, or name.
- @param to Range end, given as a Footnote, index, or name.
  \*/
  itemByRange(from: Footnote | number | string, to: Footnote | number | string): Footnote[]

/\*\*

- Provides the final Footnote in this collection.
  \*/
  lastItem(): Footnote

/\*\*

- Provides the center Footnote from this collection.
  \*/
  middleItem(): Footnote

/\*\*

- Provides the Footnote positioned immediately after the supplied Footnote.
- @param obj Footnote that precedes the requested one.
  \*/
  nextItem(obj: Footnote): Footnote

/\*\*

- Provides the Footnote positioned immediately before the supplied index.
- @param obj Index belonging to the Footnote after the requested one.
  \*/
  previousItem(obj: Footnote): Footnote

/\*\*

- Builds executable source text that resolves back to this Footnote.
  \*/
  toSource(): string
  }

/\*\*

- TextVariable definition stored in a document.
  \*/
  declare class TextVariable {
  /\*\*
  - TextVariableInstance objects linked to this text variable.
    \*/
    readonly associatedInstances: TextVariableInstance[]

/\*\*

- EventListener collection for this object.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection for this object.
  \*/
  readonly events: Events

/\*\*

- Position of the TextVariable inside its parent container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully.
  \*/
  readonly isValid: boolean
