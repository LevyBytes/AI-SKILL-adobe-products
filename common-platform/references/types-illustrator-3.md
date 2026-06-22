# Illustrator (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Middle-right point on the symbol bounding box.
  \*/
  SYMBOLMIDDLERIGHTPOINT = 6,

/\*\*

- Top-left point on the symbol bounding box.
  \*/
  SYMBOLTOPLEFTPOINT = 1,

/\*\*

- Top-middle point on the symbol bounding box.
  \*/
  SYMBOLTOPMIDDLEPOINT = 2,

/\*\*

- Top-right point on the symbol bounding box.
  \*/
  SYMBOLTOPRIGHTPOINT = 3,
  }

/\*\*

- Perspective-grid plane choices.
  \*/
  declare enum PerspectiveGridPlaneType {
  /\*\*
  - Floor plane type for Perspective Grid.
    \*/
    FLOORPLANE = 3,

/\*\*

- Left plane type for Perspective Grid.
  \*/
  LEFTPLANE = 1,

/\*\*

- Invalid plane type for Perspective Grid.
  \*/
  NOPLANE = 0,

/\*\*

- Right plane type for Perspective Grid.
  \*/
  RIGHTPLANE = 2,
  }

/\*\*

- First-baseline choices for text items.
  \*/
  declare enum FirstBaselineType {
  /\*\*
  - Ascent-based first-baseline type.
    \*/
    BASELINEASCENT = 0,

/\*\*

- Cap-height first-baseline type.
  \*/
  BASELINECAPHEIGHT = 1,

/\*\*

- Em-box-height first-baseline type.
  \*/
  BASELINEEMBOXHEIGHT = 4,

/\*\*

- Fixed first-baseline type.
  \*/
  BASELINEFIXED = 5,

/\*\*

- Leading first-baseline type.
  \*/
  BASELINELEADING = 2,

/\*\*

- Legacy first-baseline type.
  \*/
  BASELINELEGACY = 6,

/\*\*

- x-height first-baseline type.
  \*/
  BASELINEXHEIGHT = 3,
  }

/\*\*

- Document-layout style options.
  \*/
  declare enum DocumentLayoutStyle {
  /\*\*
  - Cascades the document.
    \*/
    CASCADE = 0,

/\*\*

- Consolidates every document.
  \*/
  CONSOLIDATEALL = 4,

/\*\*

- Places every document in floating layout.
  \*/
  FLOATALL = 3,

/\*\*

- Tiles documents horizontally.
  \*/
  HORIZONTALTILE = 1,

/\*\*

- Tiles documents vertically.
  \*/
  VERTICALTILE = 2,
  }

/\*\*

- Collection containing Artboard objects.
  \*/
  declare class Artboards extends Array<Artboard> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Adds an artboard object.
- @param artboardRect Artboard size and position.
  \*/
  add(artboardRect: Rect): Artboard

/\*\*

- Returns the active artboard's index position within the document list.
  \*/
  getActiveArtboardIndex(): number

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Artboard

/\*\*

- Returns the first Artboard that matches a specified name.
- @param artboardName Name assigned to the artboard.
  \*/
  getByName(artboardName: string): Artboard

/\*\*

- Inserts an Artboard at a specified location.
- @param artboardRect Artboard size and position.
- @param index Index position for inserting the artboard.
  \*/
  insert(artboardRect: Rect, index: number): void

/\*\*

- Removes an artboard object.
- @param index Index of the crop area targeted for deletion.
  \*/
  remove(index: number): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void

/\*\*

- Activates one artboard and makes it current for iteration order.
- @param index Position in the document's artboard list, using 0-based indexing.
  \*/
  setActiveArtboardIndex(index: number): void
  }

/\*\*

- Collection containing Document objects.
  \*/
  declare class Documents extends Array<Document> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a document.
- @param documentColorSpace Color model applied to the document.
- @param width Artboard width.
- @param height Artboard height.
- @param numArtboards Artboard count for a new document.Range (1:100).
- @param artboardLayout Artboard layout for the new document.
- @param artboardSpacing Gap between artboards in the new document.
- @param artboardRowsOrCols For rows layout, row count; for column layouts, column count. Valid artboards.Range values run from 1 through (docNumArtboards - 1), with 1 used for single-row or single-column layouts.
  \*/
  add(
  documentColorSpace?: DocumentColorSpace,
  width?: number,
  height?: number,
  numArtboards?: number,
  artboardLayout?: DocumentArtboardLayout,
  artboardSpacing?: number,
  artboardRowsOrCols?: number,
  ): Document

/\*\*

- Builds a new document from a preset.
- @param startupPreset Startup document preset name.
- @param presetSettings Custom settings applied to the preset.
- @param showOptionsDialog When false, the Options dialog is not shown.
  \*/
  static addDocument(
  startupPreset: string,
  presetSettings?: DocumentPreset,
  showOptionsDialog?: boolean,
  ): Document

/\*\*

- Builds a document from the preset and can show a dialog for present settings customization.
- @param startupPreset Startup document preset name.
- @param showOptionsDialog Controls whether the options Dialog appears.
  \*/
  static addDocumentWithDialogOption(startupPreset: string, showOptionsDialog?: boolean): Document

/\*\*

- Lays out documents using the requested style.
- @param layoutStyle Document layout style.
  \*/
  arrange(layoutStyle: DocumentLayoutStyle): boolean

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Document
  }

/\*\*

- Collection containing Layer objects.
  \*/
  declare class Layers extends Array<Layer> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a layer.
  \*/
  add(): Layer

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Layer

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing GroupItem objects.
  \*/
  declare class GroupItems extends Array<GroupItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a group item.
  \*/
  add(): GroupItem

/\*\*

- Creates a group item from a vector graphics file.
- @param imageFile Vector graphics file to embed.
  \*/
  static createFromFile(imageFile: File): GroupItem

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): GroupItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing PageItem objects.
  \*/
  declare class PageItems extends Array<PageItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): PageItem
  }

/\*\*

- Collection containing PathItem objects.
  \*/
  declare class PathItems extends Array<PathItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a path.
  \*/
  add(): PathItem

/\*\*

- Creates an elliptical path item.
- @param top Bounds value for the ellipse.
- @param left Bounds value for the ellipse.
- @param width Bounds value for the ellipse.
- @param height Ellipse height.
- @param reversed Reversed state for the ellipse path.
- @param inscribed Inscribed state for the ellipse path.
  \*/
  ellipse(
  top?: number,
  left?: number,
  width?: number,
  height?: number,
  reversed?: boolean,
  inscribed?: boolean,
  ): PathItem

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): PathItem

/\*\*

- Creates a regular polygon path item; this is not for accessing path items.
- @param centerX
- @param centerY
- @param radius Radius of the polygon points.
- @param sides Number of sides on the polygon.
- @param reversed Reversed state for the polygon path.
  \*/
  polygon(
  centerX?: number,
  centerY?: number,
  radius?: number,
  sides?: number,
  reversed?: boolean,
  ): PathItem

/\*\*

- Creates a rectangular path item; this is not for accessing path items.
- @param top Top coordinate for the rectangle bounds.
- @param left Left coordinate for the rectangle bounds.
- @param width Rectangle width.
- @param height Rectangle height.
- @param reversed Reversed state for the rectangle path.
  \*/
  rectangle(top: number, left: number, width: number, height: number, reversed?: boolean): PathItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void

/\*\*

- Creates a rounded-corner rectangular path item; this is not for accessing path items.
- @param top
- @param left
- @param width
- @param height
- @param horizontalRadius Corner radius in the horizontal direction.
- @param verticalRadius Corner radius in the vertical direction.
- @param reversed Reversed state for the rectangle path.
  \*/
  roundedRectangle(
  top: number,
  left: number,
  width: number,
  height: number,
  horizontalRadius?: number,
  verticalRadius?: number,
  reversed?: boolean,
  ): PathItem

/\*\*

- Creates a star-shaped path item; this is not for accessing path items.
- @param centerX
- @param centerY
- @param radius Outside radius of the star points.
- @param innerRadius Inside radius of the star points.
- @param points Number of points on the star.
- @param reversed Reversed state for the star path.
  \*/
  star(
  centerX?: number,
  centerY?: number,
  radius?: number,
  innerRadius?: number,
  points?: number,
  reversed?: boolean,
  ): PathItem
  }

/\*\*

- Collection containing PathPoint objects.
  \*/
  declare class PathPoints extends Array<PathPoint> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a path point.
  \*/
  add(): PathPoint

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): PathPoint

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing CompoundPathItem objects.
  \*/
  declare class CompoundPathItems extends Array<CompoundPathItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a compound path item.
  \*/
  add(): CompoundPathItem

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): CompoundPathItem

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing Story objects.
  \*/
  declare class Stories extends Array<Story> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): Story
  }

/\*\*

- Collection containing TextFrame objects.
  \*/
  declare class TextFrameItems extends Array<TextFrame> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a point text frame item.
  \*/
  add(): TextFrame

/\*\*

- Creates an area text frame item.
- @param textPath Path item associated with the text frame.
- @param orientation Text orientation.
- @param baseFrame Base text frame, when one exists.
- @param postFix Whether postfix/prefix placement is used with baseFrame.
  \*/
  static areaText(
  textPath: PathItem,
  orientation?: TextOrientation,
  baseFrame?: TextFrame,
  postFix?: boolean,
  ): TextFrame

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): TextFrame

/\*\*

- Creates an on-path text frame item.
- @param textPath Path item associated with the text frame.
- @param startTValue Start position of text along a path, expressed relative to the path's segments (path text only).
- @param endTValue End position of text along a path, expressed relative to the path's segments (path text only).
- @param orientation Text orientation.
- @param baseFrame Base text frame, when one exists.
- @param postFix Whether postfix/prefix placement is used with baseFrame.
  \*/
  static pathText(
  textPath: PathItem,
  startTValue?: number,
  endTValue?: number,
  orientation?: TextOrientation,
  baseFrame?: TextFrame,
  postFix?: boolean,
  ): TextFrame

/\*\*

- Creates a point text frame item.
- @param anchor Position coordinates for the anchor point.
- @param orientation Text orientation.
  \*/
  static pointText(anchor: Point | [number, number], orientation?: TextOrientation): TextFrame

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing LegacyTextItem objects.
  \*/
  declare class LegacyTextItems extends Array<LegacyTextItem> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Converts all legacy text items into text frames, deleting the original legacy text items.
  \*/
  convertToNative(): boolean

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): LegacyTextItem
  }

/\*\*

- Collection containing TextRange items.
  \*/
  declare class TextRanges extends Array<TextRange> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): TextRange
  }

/\*\*

- Collection containing InsertionPoint objects.
  \*/
  declare class InsertionPoints extends Array<InsertionPoint> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): InsertionPoint
  }

/\*\*

- Collection containing character TextRange objects.
  \*/
  declare class Characters extends Array<TextRange> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a character.
- @param contents Text string value.
  \*/
  add(contents: string): TextRange

/\*\*

-
- @param contents Text string value.
  \*/
  static addBefore(contents: string): TextRange

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): TextRange

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing word TextRange objects.
  \*/
  declare class Words extends Array<TextRange> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a word.
- @param contents Text string value.
  \*/
  add(contents: string): TextRange

/\*\*

-
- @param contents Text string value.
  \*/
  static addBefore(contents: string): TextRange

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): TextRange

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing line TextRange objects.
  \*/
  declare class Lines extends Array<TextRange> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): TextRange
  }

/\*\*

- Collection containing paragraph TextRange objects.
  \*/
  declare class Paragraphs extends Array<TextRange> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a text art item.
- @param contents Text string value.
  \*/
  add(contents: string): TextRange

/\*\*

-
- @param contents Text string value.
  \*/
  static addBefore(contents: string): TextRange

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): TextRange

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing CharacterStyle objects.
  \*/
  declare class CharacterStyles extends Array<CharacterStyle> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a named character style.
- @param name Character style name.
  \*/
  add(name: string): CharacterStyle

/\*\*

- Returns the first collection item that has the supplied name.
- @param name
  \*/
  getByName(name: string): CharacterStyle

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Collection containing ParagraphStyle objects.
  \*/
  declare class ParagraphStyles extends Array<ParagraphStyle> {
  /\*\*
  - Count of items held by this collection.
    \*/
    readonly length: number

/\*\*

- Container object for this object.
  \*/
  readonly parent: object

/\*\*

- Class-name string for this object.
  \*/
  readonly typename: string

/\*\*

- Creates a named paragraph style.
- @param name Paragraph style name.
  \*/
  add(name: string): ParagraphStyle
