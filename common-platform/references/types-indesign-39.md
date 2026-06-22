# Indesign (part 39)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- Count of pages in the section.
  \*/
  readonly length: number

/\*\*

- Section marker text.
  \*/
  marker: string

/\*\*

- Section name.
  \*/
  name: string

/\*\*

- First page number assigned to the section. Note: Valid only when continue numbering is false.
  \*/
  pageNumberStart: number

/\*\*

- Page number style.
  \*/
  pageNumberStyle: PageNumberStyle | string

/\*\*

- Page where the section starts.
  \*/
  pageStart: Page

/\*\*

- Section parent, a Document.
  \*/
  readonly parent: Document

/\*\*

- Object used to assign multiple properties at once.
  \*/
  properties: object

/\*\*

- Prefix inserted before page numbers on section pages. Allows as many as 8 characters. Note: Applies only when include section prefix is true.
  \*/
  sectionPrefix: string

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): Section[]

/\*\*

- Stores the specified value as the label for the given key.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this Section.
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

- Creates source text that can be executed to obtain this Section.
  \*/
  toSource(): string

/\*\*

- Provides the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Section collection.
  \*/
  declare class Sections {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Provides the Section at the specified index.
- @param index Index to read.
  \*/
  [index: number]: Section

/\*\*

- Creates a section.
- @param reference Page where the section begins.
- @param withProperties Initial property values for the new Section
  \*/
  add(reference: Page, withProperties: object): Section

/\*\*

- Provides any Section from the collection.
  \*/
  anyItem(): Section

/\*\*

- Shows how many elements are in the Section.
  \*/
  count(): number

/\*\*

- Provides all Section entries in the collection.
  \*/
  everyItem(): Section[]

/\*\*

- Provides the collection's first Section.
  \*/
  firstItem(): Section

/\*\*

- Finds a Section by the supplied index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): Section

/\*\*

- Finds the Section with the supplied ID.
- @param id ID to locate.
  \*/
  itemByID(id: number): Section

/\*\*

- Finds the Section identified by name.
- @param name Name used to locate the item.
  \*/
  itemByName(name: string): Section

/\*\*

- Provides the Sections covered by the requested range.
- @param from Section, index, or name that starts the range.
- @param to Section, index, or name that ends the range.
  \*/
  itemByRange(from: Section | number | string, to: Section | number | string): Section[]

/\*\*

- Provides the collection's final Section.
  \*/
  lastItem(): Section

/\*\*

- Provides the Section positioned in the middle of the collection.
  \*/
  middleItem(): Section

/\*\*

- Provides the Section immediately after the specified Section in collection order.
- @param obj Section that precedes the requested Section.
  \*/
  nextItem(obj: Section): Section

/\*\*

- Provides the Section positioned before the specified index.
- @param obj Index for the Section that follows the requested Section.
  \*/
  previousItem(obj: Section): Section

/\*\*

- Creates source text that can be executed to obtain this Section.
  \*/
  toSource(): string
  }

/\*\*

- Path object.
  \*/
  declare class Path {
  /\*\*
  - Coordinates for every path point on the path, including anchor points and left- and right-direction points. To create a path with this property, provide either anchor coordinate pairs ([[x1, y1], [x2, y2], ...]) or anchor, left-direction, and right-direction coordinate triples ([[[x1, y1], [x2, y2], [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Detail: Anchor-only input creates straight segments between path points; supplying left- and right-direction point positions defines curved segments. Can return: Array of Arrays of 2 Units.
    \*/
    entirePath: any[]

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Path position within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Path parent, one of SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame, MediaItem, Sound, Movie, Button, MultiStateObject, ClippingPathSettings, or TextWrapPreference.
  \*/
  readonly parent: any

/\*\*

- Path point collection.
  \*/
  readonly pathPoints: PathPoints

/\*\*

- Path type.
  \*/
  pathType: PathType

/\*\*

- Object used to assign multiple properties at once.
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

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): Path[]

/\*\*

- Deletes this Path.
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

- Reverses this path.
  \*/
  reverse(): void

/\*\*

- Creates source text that can be executed to obtain this Path.
  \*/
  toSource(): string

/\*\*

- Provides the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Path collection.
  \*/
  declare class Paths {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Provides the Path at the specified index.
- @param index Index to read.
  \*/
  [index: number]: Path

/\*\*

- Creates a Path.
- @param withProperties Initial property values for the new Path
  \*/
  add(withProperties: object): Path

/\*\*

- Provides any Path from the collection.
  \*/
  anyItem(): Path

/\*\*

- Shows how many elements are in the Path.
  \*/
  count(): number

/\*\*

- Provides all Path entries in the collection.
  \*/
  everyItem(): Path[]

/\*\*

- Provides the collection's first Path.
  \*/
  firstItem(): Path

/\*\*

- Finds a Path by the supplied index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): Path

/\*\*

- Provides the Paths covered by the requested range.
- @param from Path, index, or name that starts the range.
- @param to Path, index, or name that ends the range.
  \*/
  itemByRange(from: Path | number | string, to: Path | number | string): Path[]

/\*\*

- Provides the collection's final Path.
  \*/
  lastItem(): Path

/\*\*

- Provides the Path positioned in the middle of the collection.
  \*/
  middleItem(): Path

/\*\*

- Provides the Path immediately after the specified Path in collection order.
- @param obj Path that precedes the requested Path.
  \*/
  nextItem(obj: Path): Path

/\*\*

- Provides the Path positioned before the specified index.
- @param obj Index for the Path that follows the requested Path.
  \*/
  previousItem(obj: Path): Path

/\*\*

- Creates source text that can be executed to obtain this Path.
  \*/
  toSource(): string
  }

/\*\*

- Path point belonging to a path.
  \*/
  declare class PathPoint {
  /\*\*
  - Page location of the path point, in the format [x, y].
    \*/
    anchor: (number | string)[]

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- PathPoint position within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Left-direction point that shapes the curve of the line segment before this path point, in the format [x, y].
  \*/
  leftDirection: (number | string)[]

/\*\*

- PathPoint parent, a Path.
  \*/
  readonly parent: Path

/\*\*

- Path point type.
  \*/
  pointType: PointType

/\*\*

- Object used to assign multiple properties at once.
  \*/
  properties: object

/\*\*

- Right-direction point that shapes the curve of the line segment after this path point, in the format [x, y].
  \*/
  rightDirection: (number | string)[]

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): PathPoint[]

/\*\*

- Connects this path point to another path point. Both points must be end points, with their paths combined into one path on one page item.
- @param reference Reference object; the path point to join to
- @param given Join option to use.
  \*/
  join(reference: PathPoint, given: JoinOptions): void

/\*\*

- Deletes this PathPoint.
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

- Creates source text that can be executed to obtain this PathPoint.
  \*/
  toSource(): string

/\*\*

- Provides the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Path point collection.
  \*/
  declare class PathPoints {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Provides the PathPoint at the specified index.
- @param index Index to read.
  \*/
  [index: number]: PathPoint

/\*\*

- Creates a PathPoint.
- @param withProperties Initial property values for the new PathPoint
  \*/
  add(withProperties: object): PathPoint

/\*\*

- Provides any PathPoint from the collection.
  \*/
  anyItem(): PathPoint

/\*\*

- Shows how many elements are in the PathPoint.
  \*/
  count(): number

/\*\*

- Provides all PathPoint entries in the collection.
  \*/
  everyItem(): PathPoint[]

/\*\*

- Provides the collection's first PathPoint.
  \*/
  firstItem(): PathPoint

/\*\*

- Finds a PathPoint by the supplied index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): PathPoint

/\*\*

- Provides the PathPoints covered by the requested range.
- @param from PathPoint, index, or name that starts the range.
- @param to PathPoint, index, or name that ends the range.
  \*/
  itemByRange(from: PathPoint | number | string, to: PathPoint | number | string): PathPoint[]

/\*\*

- Provides the collection's final PathPoint.
  \*/
  lastItem(): PathPoint

/\*\*

- Provides the PathPoint positioned in the middle of the collection.
  \*/
  middleItem(): PathPoint

/\*\*

- Provides the PathPoint immediately after the specified PathPoint in collection order.
- @param obj PathPoint that precedes the requested PathPoint.
  \*/
  nextItem(obj: PathPoint): PathPoint

/\*\*

- Provides the PathPoint positioned before the specified index.
- @param obj Index for the PathPoint that follows the requested PathPoint.
  \*/
  previousItem(obj: PathPoint): PathPoint

/\*\*

- Creates source text that can be executed to obtain this PathPoint.
  \*/
  toSource(): string
  }

/\*\*

- Path-based page item, for example a graphic line, polygon, oval, or rectangle.
  \*/
  declare class SplineItem extends PageItem {
  /\*\*
  - Anchored object settings.
    \*/
    readonly anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Button collection.
  \*/
  readonly buttons: Buttons

/\*\*

- Checkbox collection.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- Combobox collection.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Content type that a frame may contain.
  \*/
  contentType: ContentType

/\*\*

- Endnote text frame collection.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPS file collection.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Form field collection.
  \*/
  readonly formFields: FormFields

/\*\*

- Graphic line collection.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Group collection.
  \*/
  readonly groups: Groups

/\*\*

- Embedded HTML page item collection.
  \*/
  readonly htmlItems: HtmlItems

/\*\*

- Bitmap image collection for formats such as TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- InDesign pages that were imported.
  \*/
  readonly importedPages: ImportedPages

/\*\*

- Listbox collection.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- Current lock state.
  \*/
  readonly lockState: LockStateValues

/\*\*

- Media item collection.
  \*/
  readonly mediaItems: MediaItems

/\*\*

- Movie collection.
  \*/
  readonly movies: Movies

/\*\*

- Multi-state object collection.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Object export settings
  \*/
  readonly objectExportOptions: ObjectExportOption

/\*\*

- Ellipse collection.
  \*/
  readonly ovals: Ovals

/\*\*

- Path collection.
  \*/
  readonly paths: Paths

/\*\*

- PDF file collection.
  \*/
  readonly pdfs: PDFs

/\*\*

- PICT graphic collection.
  \*/
  readonly picts: PICTs

/\*\*

- Polygon collection.
  \*/
  readonly polygons: Polygons

/\*\*

- Radio button collection.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangle collection.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Signature field collection.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- Sound clip collection.
  \*/
  readonly sounds: Sounds

/\*\*

- Spline item collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Text box collection.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- Text frame collection.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Text path collection.
  \*/
  readonly textPaths: TextPaths

/\*\*

- WMF graphic collection.
  \*/
  readonly wmfs: WMFs

/\*\*

- Combines the SplineItem with other objects into a new page item. Objects that do not intersect are deleted.
- @param with* Object or objects to add.
  \*/
  addPath(with*: PageItem[]): PageItem

/\*\*

- Moves the SplineItem one level forward in its layer.
  \*/
  bringForward(): void

/\*\*

- Moves the SplineItem to the layer front or before a specified item.
- @param reference Reference object to place this object in front of; it must share the same parent
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Checks one or more stories in.
- @param versionComments Comment for this version.
- @param forceSave When true, forces a version save.
  \*/
  checkIn(versionComments: string, forceSave?: boolean): boolean

/\*\*

- Checks the story out.
  \*/
  checkOut(): boolean

/\*\*

- Creates a page item by excluding overlapping areas between the SplineItem and other objects.
- @param with* Object or objects to exclude.
  \*/
  excludeOverlapPath(with*: PageItem[]): PageItem

/\*\*

- Creates a page item from the intersection of the SplineItem and other objects. An error is returned if the objects do not intersect.
- @param with* Object or objects to intersect with.
  \*/
  intersectPath(with*: PageItem[]): PageItem

/\*\*

- Builds a compound path by combining the SplineItem path or paths with paths from other objects.
- @param with* Other objects whose paths should be included in the compound path.
  \*/
  makeCompoundPath(with*: PageItem[]): PageItem

/\*\*

- Creates a page item by reverse-subtracting overlapping areas between the SplineItem and other objects.
- @param with* Object or objects to reverse subtract.
  \*/
  minusBack(with*: PageItem[]): PageItem

/\*\*

- Breaks apart a compound path.
  \*/
  releaseCompoundPath(): PageItem[]

/\*\*

- Restores the document to the state from the most recent save.
  \*/
  revert(): boolean

/\*\*

- Moves the SplineItem one level backward in its layer.
  \*/
  sendBackward(): void

/\*\*

- Moves the SplineItem to the layer back or behind a specified item that has the same parent.
- @param reference Reference object to place this object behind
  \*/
  sendToBack(reference: PageItem): void

/\*\*

- Creates a page item by subtracting overlapping areas between the SplineItem and other objects.
- @param with* Object or objects to subtract.
  \*/
  subtractPath(with*: PageItem[]): PageItem
  }

/\*\*

- Spline item collection.
  \*/
  declare class SplineItems {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Provides the SplineItem at the specified index.
- @param index Index to read.
  \*/
  [index: number]: SplineItem

/\*\*

- Provides any SplineItem from the collection.
  \*/
  anyItem(): SplineItem

/\*\*

- Shows how many elements are in the SplineItem.
  \*/
  count(): number

/\*\*

- Provides all SplineItem entries in the collection.
  \*/
  everyItem(): SplineItem[]

/\*\*

- Provides the collection's first SplineItem.
  \*/
  firstItem(): SplineItem

/\*\*

- Finds a SplineItem by the supplied index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): SplineItem

/\*\*

- Finds the SplineItem with the supplied ID.
- @param id ID to locate.
  \*/
  itemByID(id: number): SplineItem

/\*\*

- Finds the SplineItem identified by name.
- @param name Name used to locate the item.
  \*/
  itemByName(name: string): SplineItem

/\*\*

- Provides the SplineItems covered by the requested range.
- @param from SplineItem, index, or name that starts the range.
- @param to SplineItem, index, or name that ends the range.
  \*/
  itemByRange(from: SplineItem | number | string, to: SplineItem | number | string): SplineItem[]

/\*\*

- Provides the collection's final SplineItem.
  \*/
  lastItem(): SplineItem

/\*\*

- Provides the SplineItem positioned in the middle of the collection.
  \*/
  middleItem(): SplineItem

/\*\*

- Provides the SplineItem immediately after the specified SplineItem in collection order.
- @param obj SplineItem that precedes the requested SplineItem.
  \*/
  nextItem(obj: SplineItem): SplineItem

/\*\*

- Provides the SplineItem positioned before the specified index.
- @param obj Index for the SplineItem that follows the requested SplineItem.
  \*/
  previousItem(obj: SplineItem): SplineItem

/\*\*

- Creates source text that can be executed to obtain this SplineItem.
  \*/
  toSource(): string
  }

/\*\*

- EPSText object.
  \*/
  declare class EPSText extends PageItem {
  /\*\*
  - Anchored object settings.
    \*/
    readonly anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Text path collection.
  \*/
  readonly textPaths: TextPaths

/\*\*

- Moves the EPSText one level forward in its layer.
  \*/
  bringForward(): void

/\*\*

- Moves the EPSText to the layer front or before a specified item.
- @param reference Reference object to place this object in front of; it must share the same parent
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Moves the EPSText one level backward in its layer.
  \*/
  sendBackward(): void

/\*\*

- Moves the EPSText to the layer back or behind a specified item that has the same parent.
- @param reference Reference object to place this object behind
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- EPSTexts
  \*/
  declare class EPSTexts {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Provides the EPSText at the specified index.
- @param index Index to read.
  \*/
  [index: number]: EPSText

/\*\*

- Provides any EPSText from the collection.
  \*/
  anyItem(): EPSText

/\*\*

- Shows how many elements are in the EPSText.
  \*/
  count(): number

/\*\*

- Provides all EPSText entries in the collection.
  \*/
  everyItem(): EPSText[]

/\*\*

- Provides the collection's first EPSText.
  \*/
  firstItem(): EPSText

/\*\*

- Finds a EPSText by the supplied index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): EPSText

/\*\*

- Finds the EPSText with the supplied ID.
- @param id ID to locate.
  \*/
  itemByID(id: number): EPSText

/\*\*

- Finds the EPSText identified by name.
- @param name Name used to locate the item.
  \*/
  itemByName(name: string): EPSText

/\*\*

- Provides the EPSTexts covered by the requested range.
- @param from EPSText, index, or name that starts the range.
- @param to EPSText, index, or name that ends the range.
  \*/
  itemByRange(from: EPSText | number | string, to: EPSText | number | string): EPSText[]

/\*\*

- Provides the collection's final EPSText.
  \*/
  lastItem(): EPSText

/\*\*

- Provides the EPSText positioned in the middle of the collection.
  \*/
  middleItem(): EPSText

/\*\*

- Provides the EPSText immediately after the specified EPSText in collection order.
- @param obj EPSText that precedes the requested EPSText.
  \*/
  nextItem(obj: EPSText): EPSText

/\*\*

- Provides the EPSText positioned before the specified index.
- @param obj Index for the EPSText that follows the requested EPSText.
  \*/
  previousItem(obj: EPSText): EPSText

/\*\*

- Creates source text that can be executed to obtain this EPSText.
  \*/
  toSource(): string
  }
