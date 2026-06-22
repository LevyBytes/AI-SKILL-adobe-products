# Indesign (part 43)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Object-style collection type.
  \*/
  declare class ObjectStyles {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Looks up an ObjectStyle by index.
- @param index Index value.
  \*/
  [index: number]: ObjectStyle

/\*\*

- Adds an ObjectStyle.
- @param withProperties Starting property values for the created ObjectStyle
  \*/
  add(withProperties: object): ObjectStyle

/\*\*

- Supplies any ObjectStyle from this collection.
  \*/
  anyItem(): ObjectStyle

/\*\*

- Reports how many elements the ObjectStyle contains.
  \*/
  count(): number

/\*\*

- Supplies all ObjectStyle entries from the collection.
  \*/
  everyItem(): ObjectStyle[]

/\*\*

- Supplies the collection's initial ObjectStyle.
  \*/
  firstItem(): ObjectStyle

/\*\*

- Locates an ObjectStyle by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): ObjectStyle

/\*\*

- Locates an ObjectStyle by ID.
- @param id ID value.
  \*/
  itemByID(id: number): ObjectStyle

/\*\*

- Locates an ObjectStyle by name.
- @param name Name value.
  \*/
  itemByName(name: string): ObjectStyle

/\*\*

- Supplies ObjectStyles from the requested range.
- @param from ObjectStyle, index, or name that starts the range.
- @param to ObjectStyle, index, or name that ends the range.
  \*/
  itemByRange(from: ObjectStyle | number | string, to: ObjectStyle | number | string): ObjectStyle[]

/\*\*

- Supplies the final ObjectStyle in the collection.
  \*/
  lastItem(): ObjectStyle

/\*\*

- Supplies the central ObjectStyle in the collection.
  \*/
  middleItem(): ObjectStyle

/\*\*

- Gets the ObjectStyle positioned after the given ObjectStyle.
- @param obj ObjectStyle immediately before the desired one.
  \*/
  nextItem(obj: ObjectStyle): ObjectStyle

/\*\*

- Gets the ObjectStyle positioned before the given index.
- @param obj Index of the ObjectStyle that comes after the desired one.
  \*/
  previousItem(obj: ObjectStyle): ObjectStyle

/\*\*

- Builds source text that evaluates back to this ObjectStyle.
  \*/
  toSource(): string
  }

/\*\*

- Mapping object connecting an object export type with an export tag.
  \*/
  declare class ObjectStyleExportTagMap {
  /\*\*
  - Event-listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Events collection.
  \*/
  readonly events: Events

/\*\*

- Attributes used for mapping.
  \*/
  exportAttributes: string

/\*\*

- Class used for mapping.
  \*/
  exportClass: string

/\*\*

- Tag used for mapping.
  \*/
  exportTag: string

/\*\*

- Export type.
  \*/
  readonly exportType: string

/\*\*

- Position of this ObjectStyleExportTagMap inside its container.
  \*/
  readonly index: number

/\*\*

- True when the object specifier maps to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent of this ObjectStyleExportTagMap, an ObjectStyle.
  \*/
  readonly parent: ObjectStyle

/\*\*

- Batch assignment property for multiple settings.
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

- Resolves the specifier into object-reference array form.
  \*/
  getElements(): ObjectStyleExportTagMap[]

/\*\*

- Removes this ObjectStyleExportTagMap.
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

- Builds source text that evaluates back to this ObjectStyleExportTagMap.
  \*/
  toSource(): string

/\*\*

- Provides this object's specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Object-style export tag-map collection type.
  \*/
  declare class ObjectStyleExportTagMaps {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Looks up an ObjectStyleExportTagMap by index.
- @param index Index value.
  \*/
  [index: number]: ObjectStyleExportTagMap

/\*\*

- Adds a mapping
- @param exportType Export type.
- @param exportTag Tag used for mapping.
- @param exportClass Class used for mapping.
- @param exportAttributes Attributes used for mapping.
- @param withProperties Starting property values for the created ObjectStyleExportTagMap
  \*/
  add(exportType: string, exportTag: string, exportClass: string, exportAttributes: string, withProperties: object): ObjectStyleExportTagMap

/\*\*

- Supplies any ObjectStyleExportTagMap from this collection.
  \*/
  anyItem(): ObjectStyleExportTagMap

/\*\*

- Provides the element count for ObjectStyleExportTagMap.
  \*/
  count(): number

/\*\*

- Gets all ObjectStyleExportTagMap entries in this collection.
  \*/
  everyItem(): ObjectStyleExportTagMap[]

/\*\*

- Gets the first ObjectStyleExportTagMap from this collection.
  \*/
  firstItem(): ObjectStyleExportTagMap

/\*\*

- Gets an ObjectStyleExportTagMap by index or name.
- @param index Index or name to locate.
  \*/
  item(index: number | string): ObjectStyleExportTagMap

/\*\*

- Gets ObjectStyleExportTagMap entries covered by the requested range.
- @param from ObjectStyleExportTagMap, index, or name that starts the range.
- @param to ObjectStyleExportTagMap, index, or name that ends the range.
  \*/
  itemByRange(from: ObjectStyleExportTagMap | number | string, to: ObjectStyleExportTagMap | number | string): ObjectStyleExportTagMap[]

/\*\*

- Gets the final ObjectStyleExportTagMap in this collection.
  \*/
  lastItem(): ObjectStyleExportTagMap

/\*\*

- Gets the central ObjectStyleExportTagMap in this collection.
  \*/
  middleItem(): ObjectStyleExportTagMap

/\*\*

- Gets the ObjectStyleExportTagMap positioned after the supplied ObjectStyleExportTagMap in this collection.
- @param obj ObjectStyleExportTagMap positioned before the one being requested.
  \*/
  nextItem(obj: ObjectStyleExportTagMap): ObjectStyleExportTagMap

/\*\*

- Gets the ObjectStyleExportTagMap positioned before the supplied index.
- @param obj Index of the ObjectStyleExportTagMap positioned after the requested ObjectStyleExportTagMap.
  \*/
  previousItem(obj: ObjectStyleExportTagMap): ObjectStyleExportTagMap

/\*\*

- Builds executable source text that resolves back to the ObjectStyleExportTagMap.
  \*/
  toSource(): string
  }

/\*\*

- Object representing a PDF comment.
  \*/
  declare class PDFComment {
  /\*\*
  - Comment body text.
    \*/
    readonly commentContent: string

/\*\*

- Comment date value.
  \*/
  readonly commentDate: Date

/\*\*

- File path recorded for the comment.
  \*/
  readonly commentFilePath: string

/\*\*

- Indicates whether the comment is applied.
  \*/
  readonly commentIsApplied: boolean

/\*\*

- Indicates whether the comment is orphaned.
  \*/
  readonly commentIsOrphan: boolean

/\*\*

- Comment path geometry. Return data can include pathPointArray:Array with ordered entries for anchor:Array with 2 Reals, leftDirection:Array with 2 Reals, rightDirection:Array with 2 Reals, and pathOpen:Boolean.
  \*/
  readonly commentPathGeometry: any[]

/\*\*

- Reviewer name attached to the comment.
  \*/
  readonly commentReviewer: string

/\*\*

- Comment status value.
  \*/
  readonly commentStatus: CommentStatusEnum

/\*\*

- Comment type value.
  \*/
  readonly commentType: CommentTypeEnum

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the PDFComment.
  \*/
  readonly id: number

/\*\*

- Position of the PDFComment inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued property available for arbitrary data.
  \*/
  label: string

/\*\*

- PDFComment name; aliases the PDFComment label property.
  \*/
  name: string

/\*\*

- Parent object for the PDFComment (a Document).
  \*/
  readonly parent: Document

/\*\*

- Property bag for applying several settings together.
  \*/
  properties: object

/\*\*

- Reply object collection.
  \*/
  readonly replies: Replies

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Updates the status assigned to a comment.
- @param commentStatus New comment status.
- @param withProperties Starting property values for the new PDFComment.
  \*/
  changeStatus(commentStatus: CommentStatusEnum, withProperties: object): void

/\*\*

- Reads the label value stored for the supplied key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier into an array of object references.
  \*/
  getElements(): PDFComment[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to update.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this PDFComment.
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

- Builds executable source text that resolves back to the PDFComment.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing PDF comment objects.
  \*/
  declare class PDFComments {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the PDFComment at the supplied index.
- @param index Index to read.
  \*/
  [index: number]: PDFComment

/\*\*

- Gets any PDFComment from this collection.
  \*/
  anyItem(): PDFComment

/\*\*

- Provides the element count for PDFComment.
  \*/
  count(): number

/\*\*

- Gets all PDFComment entries in this collection.
  \*/
  everyItem(): PDFComment[]

/\*\*

- Gets the first PDFComment from this collection.
  \*/
  firstItem(): PDFComment

/\*\*

- Gets a PDFComment by index or name.
- @param index Index or name to locate.
  \*/
  item(index: number | string): PDFComment

/\*\*

- Gets a PDFComment by ID.
- @param id ID to locate.
  \*/
  itemByID(id: number): PDFComment

/\*\*

- Gets a PDFComment by name.
- @param name Name to locate.
  \*/
  itemByName(name: string): PDFComment

/\*\*

- Gets PDFComment entries covered by the requested range.
- @param from PDFComment, index, or name that starts the range.
- @param to PDFComment, index, or name that ends the range.
  \*/
  itemByRange(from: PDFComment | number | string, to: PDFComment | number | string): PDFComment[]

/\*\*

- Gets the final PDFComment in this collection.
  \*/
  lastItem(): PDFComment

/\*\*

- Gets the central PDFComment in this collection.
  \*/
  middleItem(): PDFComment

/\*\*

- Gets the PDFComment positioned after the supplied PDFComment in this collection.
- @param obj PDFComment positioned before the one being requested.
  \*/
  nextItem(obj: PDFComment): PDFComment

/\*\*

- Gets the PDFComment positioned before the supplied index.
- @param obj Index of the PDFComment positioned after the requested PDFComment.
  \*/
  previousItem(obj: PDFComment): PDFComment

/\*\*

- Builds executable source text that resolves back to the PDFComment.
  \*/
  toSource(): string
  }

/\*\*

- Reply object.
  \*/
  declare class Reply {
  /\*\*
  - Event listener collection.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the Reply.
  \*/
  readonly id: number

/\*\*

- Position of the Reply inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued property available for arbitrary data.
  \*/
  label: string

/\*\*

- Reply name; aliases the Reply label property.
  \*/
  name: string

/\*\*

- Parent object for the Reply (a PDFComment).
  \*/
  readonly parent: PDFComment

/\*\*

- Property bag for applying several settings together.
  \*/
  properties: object

/\*\*

- Reply body text.
  \*/
  readonly replyContent: string

/\*\*

- Reply date value.
  \*/
  readonly replyDate: Date

/\*\*

- Reviewer name attached to the reply.
  \*/
  readonly replyReviewer: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the supplied key.
- @param key Key to read.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier into an array of object references.
  \*/
  getElements(): Reply[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key to update.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Unregisters an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the Reply.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing reply objects.
  \*/
  declare class Replies {
  /\*\*
  - Object count in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Reply at the supplied index.
- @param index Index to read.
  \*/
  [index: number]: Reply

/\*\*

- Gets any Reply from this collection.
  \*/
  anyItem(): Reply

/\*\*

- Provides the element count for Reply.
  \*/
  count(): number

/\*\*

- Gets all Reply entries in this collection.
  \*/
  everyItem(): Reply[]

/\*\*

- Gets the first Reply from this collection.
  \*/
  firstItem(): Reply

/\*\*

- Gets a Reply by index or name.
- @param index Index or name to locate.
  \*/
  item(index: number | string): Reply

/\*\*

- Gets a Reply by ID.
- @param id ID to locate.
  \*/
  itemByID(id: number): Reply

/\*\*

- Gets a Reply by name.
- @param name Name to locate.
  \*/
  itemByName(name: string): Reply

/\*\*

- Gets Reply entries covered by the requested range.
- @param from Reply, index, or name that starts the range.
- @param to Reply, index, or name that ends the range.
  \*/
  itemByRange(from: Reply | number | string, to: Reply | number | string): Reply[]

/\*\*

- Gets the final Reply in this collection.
  \*/
  lastItem(): Reply

/\*\*

- Gets the central Reply in this collection.
  \*/
  middleItem(): Reply

/\*\*

- Gets the Reply positioned after the supplied Reply in this collection.
- @param obj Reply positioned before the one being requested.
  \*/
  nextItem(obj: Reply): Reply

/\*\*

- Gets the Reply positioned before the supplied index.
- @param obj Index of the Reply positioned after the requested Reply.
  \*/
  previousItem(obj: Reply): Reply

/\*\*

- Builds executable source text that resolves back to the Reply.
  \*/
  toSource(): string
  }

/\*\*

- StoryPreference settings.
  \*/
  declare class StoryPreference extends Preference {
  /\*\*
  - When true, character positions at frame edges are adjusted for improved appearance.
    \*/
    opticalMarginAlignment: boolean

/\*\*

- Point size used when optical margin alignment is calculated. (Range: 0.1 to 1296)
  \*/
  opticalMarginSize: number | string

/\*\*

- Story direction setting.
  \*/
  storyDirection: StoryDirectionOptions
  }

/\*\*

- TextFramePreference settings.
  \*/
  declare class TextFramePreference extends Preference {
  /\*\*
  - Reference point used for text frame auto sizing. The auto-sizing type value can automatically move this point to a suitable value; for height only dimension, top left shifts to top center.
    \*/
    autoSizingReferencePoint: AutoSizingReferenceEnum

/\*\*

- Auto-sizing type used by the text frame. The reference value is automatically adjusted from this type; for example, height only type changes top-left reference point to top-center. Change auto-sizing type after setting other auto-sizing attributes is recommended.
  \*/
  autoSizingType: AutoSizingTypeEnum

/\*\*

- Bottom inset for Text Frame Column Rule.
  \*/
  columnRuleBottomInset: number

/\*\*

- When true, inset chain override is enabled.
  \*/
  columnRuleInsetChainOverride: boolean

/\*\*

- Offset for Text Frame Column Rule.
  \*/
  columnRuleOffset: number

/\*\*

- When true, overprint override is enabled.
  \*/
  columnRuleOverprintOverride: boolean

/\*\*

- When true, text frame vertical column rule options can be overridden.
  \*/
  columnRuleOverride: boolean

/\*\*

- Stroke color for Text Frame Column Rule.
  \*/
  columnRuleStrokeColor: Swatch

/\*\*

- Stroke tint for Text Frame Column Rule.
  \*/
  columnRuleStrokeTint: number

/\*\*

- Stroke type for Text Frame Column Rule.
  \*/
  columnRuleStrokeType: StrokeStyle

/\*\*

- Stroke width for Text Frame Column Rule.
  \*/
  columnRuleStrokeWidth: number

/\*\*

- Top inset for Text Frame Column Rule.
  \*/
  columnRuleTopInset: number

/\*\*

- Distance from the text baseline to the text frame or cell top inset.
  \*/
  firstBaselineOffset: FirstBaseline

/\*\*

- When true, document footnote options may be overridden.
  \*/
  footnotesEnableOverrides: boolean

/\*\*

- Minimum spacing before the first footnote.
  \*/
  footnotesMinimumSpacing: number | string

/\*\*

- Spacing placed between footnotes.
  \*/
  footnotesSpaceBetween: number | string

/\*\*

- When true, footnotes can straddle columns.
  \*/
  footnotesSpanAcrossColumns: boolean

/\*\*

- When true, text wrap settings from drawn or placed objects are ignored in the text frame.
  \*/
  ignoreWrap: boolean

/\*\*

- Offset from text to text frame edges, supplied as one value for every side or as [top inset, left inset, bottom inset, right inset], in that order.
  \*/
  insetSpacing: number | [number, number, number, number]

/\*\*

- Smallest allowed distance from the text baseline to the text frame or cell top inset.
  \*/
  minimumFirstBaselineOffset: number | string

/\*\*

- Smallest height allowed for text frame auto-sizing.
  \*/
  minimumHeightForAutoSizing: number | string

/\*\*

- Smallest width allowed for text frame auto-sizing.
  \*/
  minimumWidthForAutoSizing: number | string

/\*\*

- Column count for the text frame. Note: the value of use fixed column width can make the column count update automatically as the text frame size changes.
  \*/
  textColumnCount: number

/\*\*

- Column width used by the text frame.
  \*/
  textColumnFixedWidth: number | string

/\*\*

- Gap between text frame columns.
  \*/
  textColumnGutter: number | string

/\*\*

- Maximum column width used by the text frame. Use 0 for no upper limit.
  \*/
  textColumnMaxWidth: number | string

/\*\*

- When true, resizing the text frame preserves column width. When false, columns resize with the frame. Note: with true, resizing the frame can alter its column count.
  \*/
  useFixedColumnWidth: boolean

/\*\*

- When true, column width is preserved within a min and max range as the text frame is resized. When false, columns resize with the frame. Note: with true, resizing the frame can alter its column count.
  \*/
  useFlexibleColumnWidth: boolean

/\*\*

- When true, the minimum height value participates in text frame auto-sizing.
  \*/
  useMinimumHeightForAutoSizing: boolean

/\*\*

- When true, the minimum width value participates in text frame auto-sizing.
  \*/
  useMinimumWidthForAutoSizing: boolean

/\*\*

- When true, auto sizing does not add line-breaks afterward.
  \*/
  useNoLineBreaksForAutoSizing: boolean

/\*\*

- Balances vertical justification across every column.
  \*/
  verticalBalanceColumns: boolean

/\*\*

- Vertical alignment used for text content.
  \*/
  verticalJustification: VerticalJustification

/\*\*

- Maximum vertical space allowed between two paragraphs. Note: only valid with justified vertical justification; this amount is added to paragraph space before or space after values.
  \*/
  verticalThreshold: number | string
  }

/\*\*

- TextPreference settings.
  \*/
  declare class TextPreference extends Preference {
  /\*\*
  - When true, wrapped text moves to the next available leading increment beneath text wrap objects (skip by leading).
    \*/
    abutTextToTextWrap: boolean

/\*\*

- Defines where new pages are inserted for overset text.
  \*/
  addPages: AddPageOptions

/\*\*

- Baseline shift step for option/alt-shift-up arrow key increases and option/alt-shift-down arrow key decreases. (Range: .001 to 100)
  \*/
  baselineShiftKeyIncrement: number | string

/\*\*

- Enables automatic removal of pages that contain empty threaded text frames.
  \*/
  deleteEmptyPages: boolean

/\*\*

- When true, character and paragraph styles are previewed with colored background highlights.
  \*/
  enableStylePreviewMode: boolean

/\*\*

- When true, custom kerned or tracked characters are highlighted.
  \*/
  highlightCustomSpacing: boolean

/\*\*

- When true, text highlights show hyphenation and justification rule violations.
  \*/
  highlightHjViolations: boolean

/\*\*

- When true, paragraphs that break keep options are highlighted.
  \*/
  highlightKeeps: boolean

/\*\*

- When true, on-screen highlighting identifies kinsoku.
  \*/
  highlightKinsoku: boolean

/\*\*

- When true, missing fonts are highlighted.
  \*/
  highlightSubstitutedFonts: boolean

/\*\*

- When true, substituted glyphs are highlighted.
  \*/
  highlightSubstitutedGlyphs: boolean

/\*\*

- When true, Bulleted Paragraph and Bullets indentation is adjusted around a Text Wrap object.
  \*/
  honourTextIndentsWithTextWrap: boolean

/\*\*

- When true, text is justified around text wrap objects.
  \*/
  justifyTextWraps: boolean

/\*\*

- Amount that kerning per 1000 ems increases with option/alt-right arrow keys and decreases with option/alt-left arrow keys. (Range: 1 to 100)
  \*/
  kerningKeyIncrement: number

/\*\*

- Amount that leading increases with option/alt-up arrow keys and decreases with option/alt-down arrow keys. (Range: .001 to 100)
  \*/
  leadingKeyIncrement: number | string

/\*\*

- Limits smart text reflow page additions to overridden master text frames.
  \*/
  limitToMasterTextFrames: boolean

/\*\*

- When true, imported text files and spreadsheet files remain linked; when false, they are embedded.
  \*/
  linkTextFilesWhenImporting: boolean

/\*\*

- Keeps left-hand and right-and pages during smart text reflow when facing pages are enabled.
  \*/
  preserveFacingPageSpreads: boolean
