# Illustrator (part 9)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Create a duplicate of this object.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject?: object, insertionLocation?: any): PageItem

/\*\*

- Relocate the object.
- @param relativeObject
- @param insertionLocation
  \*/
  move(relativeObject: object, insertionLocation: any): PageItem

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void

/\*\*

- Resize art object(s).
- @param scaleX Horizontal scale percentage (100 = 100%).
- @param scaleY Vertical scale percentage (100 = 100%).
- @param changePositions Whether art-object positions and orientations should change.
- @param changeFillPatterns Whether path fill patterns are transformed.
- @param changeFillGradients Whether path fill gradients are transformed.
- @param changeStrokePattern Whether path stroke patterns are transformed.
- @param changeLineWidths Amount to scale line widths, expressed as a percentage.
- @param scaleAbout Point on the art item's bounding box used for the scaling operation.
  \*/
  resize(
  scaleX: number,
  scaleY: number,
  changePositions?: boolean,
  changeFillPatterns?: boolean,
  changeFillGradients?: boolean,
  changeStrokePattern?: boolean,
  changeLineWidths?: number,
  scaleAbout?: Transformation,
  ): void

/\*\*

- Rotate art object(s).
- @param angle Rotation angle in degrees; rotation runs counter-clock wise.
- @param changePositions Whether art-object positions and orientations should change.
- @param changeFillPatterns Whether path fill patterns are transformed.
- @param changeFillGradients Whether path fill gradients are transformed.
- @param changeStrokePattern Whether path stroke patterns are transformed.
- @param rotateAbout Bounding-box point used as the rotation origin.
  \*/
  rotate(
  angle: number,
  changePositions?: boolean,
  changeFillPatterns?: boolean,
  changeFillGradients?: boolean,
  changeStrokePattern?: boolean,
  rotateAbout?: Transformation,
  ): void

/\*\*

- Send a script message to the requested plugin.
- @param pluginName Plugin that receives the message.
- @param messageSelector Functionality selected for execution.
- @param inputString Data passed as an encoded string.
  \*/
  sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string

/\*\*

- Transform art object(s) with a transformation matrix.
- @param transformationMatrix Transformation matrix applied to the objects.
- @param changePositions Whether art-object positions and orientations should change.
- @param changeFillPatterns Whether path fill patterns are transformed.
- @param changeFillGradients Whether path fill gradients are transformed.
- @param changeStrokePattern Whether path stroke patterns are transformed.
- @param changeLineWidths Amount to scale line widths, expressed as a percentage.
- @param transformAbout Point on the art item's bounding box used for scale and rotation operations.
  \*/
  transform(
  transformationMatrix: Matrix,
  changePositions?: boolean,
  changeFillPatterns?: boolean,
  changeFillGradients?: boolean,
  changeStrokePattern?: boolean,
  changeLineWidths?: number,
  transformAbout?: Transformation,
  ): void

/\*\*

- Move art object(s) by an offset.
- @param deltaX Horizontal transformation.
- @param deltaY Vertical transformation.
- @param transformObjects Whether art-object positions and orientations are affected.
- @param transformFillPatterns Whether path fill patterns are transformed.
- @param transformFillGradients Whether path fill gradients are transformed.
- @param transformStrokePattern Whether path stroke patterns change.
  \*/
  translate(
  deltaX?: number,
  deltaY?: number,
  transformObjects?: boolean,
  transformFillPatterns?: boolean,
  transformFillGradients?: boolean,
  transformStrokePattern?: boolean,
  ): void

/\*\*

- Place the art in relation to other art in its group or layer.
- @param zOrderCmd Arrangement command for the art.
  \*/
  zOrder(zOrderCmd: ZOrderMethod): void
  }

/\*\*

- Compound path artwork item object.
  \*/
  declare class CompoundPathItem extends PageItem {
  /\*\*
  - Unique path identifier.
    \*/
    readonly uuid: string
    /\*\*
  - Path artwork contained by this compound path.
    \*/
    readonly pathItems: PathItems
    }

/\*\*

- Tag linked to a piece of artwork.
  \*/
  declare class Tag {
  /\*\*
  - Name assigned to the tag.
    \*/
    name: string

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Data held by this tag.
  \*/
  value: string

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Artwork path item object.
  \*/
  declare class PathItem extends PageItem {
  /\*\*
  - Unique path identifier.
    \*/
    readonly uuid: string
    /\*\*
  - Area of this path, measured in square points.
    \*/
    readonly area: number

/\*\*

- Whether this path should serve as a clipping path.
  \*/
  clipping: boolean

/\*\*

- Whether this path is closed.
  \*/
  closed: boolean

/\*\*

- Whether the even-odd rule determines insideness.
  \*/
  evenodd: boolean

/\*\*

- Fill color value.
  \*/
  fillColor: Color

/\*\*

- Whether artwork below a filled object overprints.
  \*/
  fillOverprint: boolean

/\*\*

- Whether the path receives a fill.
  \*/
  filled: boolean

/\*\*

- Whether this path acts as a guide object.
  \*/
  guides: boolean

/\*\*

- Path length measured in points.
  \*/
  readonly length: number

/\*\*

- \*/
  readonly pathPoints: PathPoints

/\*\*

- Polarity assigned to the path.
  \*/
  polarity: PolarityValues

/\*\*

- Resolution assigned to the path.
  \*/
  resolution: number

/\*\*

- Selected-point collection for the path.
  \*/
  readonly selectedPathPoints: PathPoints

/\*\*

- Line cap type.
  \*/
  strokeCap: StrokeCap

/\*\*

- Stroke color value.
  \*/
  strokeColor: Color

/\*\*

- Starting offset into the dash pattern.
  \*/
  strokeDashOffset: number

/\*\*

- Dash lengths; set to {} for a solid line.
  \*/
  strokeDashes: number[]

/\*\*

- Joint type.
  \*/
  strokeJoin: StrokeJoin

/\*\*

- Whether joins use mitered (pointed) or beveled (squared-off) form.
  \*/
  strokeMiterLimit: number

/\*\*

- Whether artwork below a stroked object overprints.
  \*/
  strokeOverprint: boolean

/\*\*

- Stroke width.
  \*/
  strokeWidth: number

/\*\*

- Whether the path receives a stroke.
  \*/
  stroked: boolean

/\*\*

- Define the path from an array of path point (x, y) coordinate pairs.
- @param pathPoints Path point coordinates as (x, y) pairs.
  \*/
  setEntirePath(pathPoints: [number, number][]): void

/\*\*

- Create a duplicate of this object.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject?: object, insertionLocation?: any): PathItem

/\*\*

- Relocate the object.
- @param relativeObject
- @param insertionLocation
  \*/
  move(relativeObject: object, insertionLocation: any): PathItem
  }

/\*\*

- Point object on a path.
  \*/
  declare class PathPoint {
  /\*\*
  - Anchor point position coordinates.
    \*/
    anchor: Point | [number, number]

/\*\*

- Position of the left direction point.
  \*/
  leftDirection: Point | [number, number]

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Point type, smooth or corner.
  \*/
  pointType: PointType

/\*\*

- Out position for the right direction point.
  \*/
  rightDirection: Point | [number, number]

/\*\*

- Selection state for the path point.
  \*/
  selected: PathPointSelection

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Remove this object.
  \*/
  remove(): void

/\*\*

- Remove every element.
  \*/
  removeAll(): void
  }

/\*\*

- Raster artwork item object.
  \*/
  declare class RasterItem extends PageItem {
  /\*\*
  - Bits-per-channel count.
    \*/
    readonly bitsPerChannel: number

/\*\*

- Raster art object dimensions independent of transformations.
  \*/
  boundingBox: Rect

/\*\*

- Number of image channels.
  \*/
  readonly channels: number

/\*\*

- Colorant-name list.
  \*/
  readonly colorants: string[]

/\*\*

- Whether the raster art is a colorized grayscale image.
  \*/
  readonly colorizedGrayscale: boolean

/\*\*

- Content variable linked to this raster art object.
  \*/
  contentVariable: any

/\*\*

- Whether the raster art is embedded inside the illustration.
  \*/
  embedded: boolean

/\*\*

- File that contains the raster artwork.
  \*/
  readonly file: File

/\*\*

- Raster image color space.
  \*/
  readonly imageColorSpace: ImageColorSpace

/\*\*

- Transformation matrix for the raster art object.
  \*/
  matrix: Matrix

/\*\*

- Whether the raster art overprints.
  \*/
  overprint: boolean

/\*\*

- Linked-image status.
  \*/
  readonly status: RasterLinkState

/\*\*

- Whether the raster art is transparent.
  \*/
  readonly transparent: boolean

/\*\*

- Apply a CMYK or RGB Color to colorize the RasterItem.
- @param rasterColor CMYK or RGB Color applied to the TIFF image.
  \*/
  colorize(rasterColor: Color): void

/\*\*

- Run a default trace on this raster object, then reorder this raster to the source art.
  \*/
  trace(): PluginItem
  }

/\*\*

- Placed artwork item object.
  \*/
  declare class PlacedItem extends PageItem {
  /\*\*
  - Placed art object dimensions, independent of transformations.
    \*/
    readonly boundingBox: Rect

/\*\*

- Content variable linked to this placed art object.
  \*/
  contentVariable: any

/\*\*

- File containing the placed artwork.
  \*/
  file: File

/\*\*

- Transformation matrix for the placed art object.
  \*/
  matrix: Matrix

/\*\*

- Embed the placed art inside the illustration.
  \*/
  embed(): void

/\*\*

- Relink the placed art to art supplied by a file.
- @param fileSpec File spec used as the relink source.
  \*/
  relink(fileSpec: File): void

/\*\*

- Trace this raster object using default options, reordering this placed item to the source art.
  \*/
  trace(): PluginItem
  }

/\*\*

- Embedded artwork item object.
  \*/
  declare class EmbedItem extends PageItem {
  /\*\*
  - File containing the placed artwork.
    \*/
    file: File
    }

/\*\*

- Graph artwork item object.
  \*/
  declare class GraphItem extends PageItem {
  /\*\*
  - Content variable linked to this graph.
    \*/
    contentVariable: any
    }

/\*\*

- Non-native artwork item object.
  \*/
  declare class NonNativeItem extends PageItem {}

/\*\*

- Mesh artwork item object.
  \*/
  declare class MeshItem extends PageItem {}

/\*\*

- Plugin artwork item object.
  \*/
  declare class PluginItem extends PageItem {
  /\*\*
  - Whether the plugin group is a tracing.
    \*/
    readonly isTracing: boolean

/\*\*

- Tracing object linked with this plugin item.
  \*/
  readonly tracing: TracingObject
  }

/\*\*

- Artwork group item object.
  \*/
  declare class GroupItem extends PageItem {
  /\*\*
  - Whether group elements are clipped to the clipping path.
    \*/
    clipped: boolean

/\*\*

- Compound path artwork contained in this group.
  \*/
  readonly compoundPathItems: CompoundPathItems

/\*\*

- Graph art items contained in this group.
  \*/
  readonly graphItems: GraphItems

/\*\*

- Group items contained in this group.
  \*/
  readonly groupItems: GroupItems

/\*\*

- Legacy text frame items for this story.
  \*/
  readonly legacyTextItems: LegacyTextItems

/\*\*

- Mesh art items contained in this group.
  \*/
  readonly meshItems: MeshItems

/\*\*

- Non-native art items contained in this group.
  \*/
  readonly nonNativeItems: NonNativeItems

/\*\*

- Complete artwork collection for this group.
  \*/
  readonly pageItems: PageItems

/\*\*

- Path artwork contained in this group.
  \*/
  readonly pathItems: PathItems

/\*\*

- Placed art items contained in this group.
  \*/
  readonly placedItems: PlacedItems

/\*\*

- Plugin art items contained in this group.
  \*/
  readonly pluginItems: PluginItems

/\*\*

- Raster art items contained in this group.
  \*/
  readonly rasterItems: RasterItems

/\*\*

- Symbol items contained in this group.
  \*/
  readonly symbolItems: SymbolItems

/\*\*

- Text frame items contained in this group.
  \*/
  readonly textFrames: TextFrameItems
  }

/\*\*

- Instance object for a Symbol.
  \*/
  declare class SymbolItem extends PageItem {
  /\*\*
  - Symbol used to create this symbol item.
    \*/
    symbol: Symbol

/\*\*

- Disconnect the link to the symbol.
  \*/
  breakLink(): void
  }

/\*\*

- Text path item object.
  \*/
  declare class TextPath {
  /\*\*
  - Area of this path, measured in square points.
    \*/
    readonly area: number

/\*\*

- Compositing mode applied to an object.
  \*/
  blendingMode: BlendModes

/\*\*

- Whether this should serve as a clipping path.
  \*/
  clipping: boolean

/\*\*

- Whether this path is closed.
  \*/
  closed: boolean

/\*\*

- Whether the text path can be changed.
  \*/
  readonly editable: boolean

/\*\*

- Whether the even-odd rule determines insideness.
  \*/
  evenodd: boolean

/\*\*

- Fill color value.
  \*/
  fillColor: Color

/\*\*

- Whether artwork below a filled object overprints.
  \*/
  fillOverprint: boolean

/\*\*

- Whether the path receives a fill.
  \*/
  filled: boolean

/\*\*

- Whether this path acts as a guide object.
  \*/
  guides: boolean

/\*\*

- Text path height.
  \*/
  height: number

/\*\*

- Left coordinate for the text path.
  \*/
  left: number

/\*\*

- Note attached to the path.
  \*/
  note: string

/\*\*

- Object opacity, between 0.0 and 100.0.
  \*/
  opacity: number

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- \*/
  readonly pathPoints: PathPoints

/\*\*

- Polarity assigned to the path.
  \*/
  polarity: PolarityValues

/\*\*

- Top-left corner position for the text path.
  \*/
  position: Point | [number, number]

/\*\*

- Resolution assigned to the path.
  \*/
  resolution: number

/\*\*

- Selected-point collection for the path.
  \*/
  readonly selectedPathPoints: PathPoints

/\*\*

- Line cap type.
  \*/
  strokeCap: StrokeCap

/\*\*

- Stroke color value.
  \*/
  strokeColor: Color

/\*\*

- Starting offset into the dash pattern.
  \*/
  strokeDashOffset: number

/\*\*

- Dash lengths; set to {} for a solid line.
  \*/
  strokeDashes: number[]

/\*\*

- Joint type.
  \*/
  strokeJoin: StrokeJoin

/\*\*

- Whether joins use mitered (pointed) or beveled (squared-off) form.
  \*/
  strokeMiterLimit: number

/\*\*

- Whether artwork below a stroked object overprints.
  \*/
  strokeOverprint: boolean

/\*\*

- Stroke width.
  \*/
  strokeWidth: number

/\*\*

- Whether the path receives a stroke.
  \*/
  stroked: boolean

/\*\*

- Top coordinate for the text path.
  \*/
  top: number

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Text path width.
  \*/
  width: number

/\*\*

- Define the path from the supplied anchor-point array.
- @param pathPoints Anchor values supplied for the path points.
  \*/
  setEntirePath(pathPoints: any[]): void
  }

/\*\*

- Contiguous text block object.
  \*/
  declare class Story {
  /\*\*
  - Character collection for this text range.
    \*/
    readonly characters: Characters

/\*\*

- Insertion-point collection for this text range.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- Character count for the story.
  \*/
  readonly length: number

/\*\*

- Line collection for this text range.
  \*/
  readonly lines: Lines

/\*\*

- Paragraph collection for this text range.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Owning container for this object.
  \*/
  readonly parent: object

/\*\*

- Text frame items for this story.
  \*/
  readonly textFrames: TextFrameItems

/\*\*

- Text range for the story.
  \*/
  readonly textRange: TextRange

/\*\*

- Complete text collection for this text range.
  \*/
  readonly textRanges: TextRanges

/\*\*

- Selected text range(s) for the story.
  \*/
  readonly textSelection: TextRange[]

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Word collection for this text range.
  \*/
  readonly words: Words
  }

/\*\*

- Text frame item object.
  \*/
  declare class TextFrame extends PageItem {
  /\*\*
  - Anchor point position, used as the base-line start for point text.
    \*/
    anchor: Point | [number, number]

/\*\*

- Text anti-aliasing type for the text frame item.
  \*/
  antialias: TextAntialias

/\*\*

- Character collection for this text range.
  \*/
  readonly characters: Characters

/\*\*

- Column count for the text frame, area text only.
  \*/
  columnCount: number

/\*\*

- Column gutter for the text frame, area text only.
  \*/
  columnGutter: number

/\*\*

- Content variable linked to this text art item.
  \*/
  contentVariable: any

/\*\*

- Text contents held by this text frame.
  \*/
  contents: string

/\*\*

- End position of text along a path, relative to the path's segments, path text only.
  \*/
  endTValue: number

/\*\*

- First-baseline offset type for the text frame item, Area Text only.
  \*/
  firstBaseline: FirstBaselineType

/\*\*

- Minimum first-baseline offset value for the text frame item, Area Text only.
  \*/
  firstBaselineMin: number

/\*\*

- Whether text flows horizontally first between linked frames, area text only.
  \*/
  flowLinksHorizontally: boolean

/\*\*

- Insertion-point collection for this text range.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- Type assigned to the text frame item.
  \*/
  readonly kind: TextType

/\*\*

- Line collection for this text range.
  \*/
  readonly lines: Lines

/\*\*

- Transformation matrix for the text frame object.
  \*/
  readonly matrix: Matrix

/\*\*

- Linked text frame that follows this one.
  \*/
  nextFrame: TextFrame

/\*\*

- Whether optical alignment is active.
  \*/
  opticalAlignment: boolean

/\*\*

- Text orientation in the frame.
  \*/
  orientation: TextOrientation

/\*\*

- Paragraph collection for this text range.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Linked text frame that precedes this one.
  \*/
  previousFrame: TextFrame

/\*\*

- Row count for the text frame, area text only.
  \*/
  rowCount: number

/\*\*

- Row gutter for the text frame, area text only.
  \*/
  rowGutter: number

/\*\*

- Spacing amount, path text only.
  \*/
  spacing: number

/\*\*

- Start position of text along a path, relative to the path's segments, path text only.
  \*/
  startTValue: number

/\*\*

- Story linked to the text frame.
  \*/
  readonly story: Story

/\*\*

- Path associated with the text frame (area and path text).
  \*/
  readonly textPath: TextPath

/\*\*

- TextRange linked to this text frame.
  \*/
  readonly textRange: TextRange

/\*\*

- Complete text contained by this text range.
  \*/
  readonly textRanges: TextRanges

/\*\*

- TextRange entries selected in the story.
  \*/
  readonly textSelection: TextRange[]

/\*\*

- Word collection for this text range.
  \*/
  readonly words: Words

/\*\*

- Transforms an Area Type Text Object into a Point Type Object.
  \*/
  convertAreaObjectToPointObject(): TextFrame

/\*\*

- Transforms a Point Type Text Object into an Area Type Object.
  \*/
  convertPointObjectToAreaObject(): TextFrame

/\*\*

- Builds path items from the text item.
  \*/
  createOutline(): GroupItem

/\*\*

- Creates a thumbnail based on the first character's properties in the text frame.
- @param textString Text content used while creating the thumbnail.
- @param fontSize Point size applied to the text string.
- @param textColor Color assigned to the text string.
- @param destinationPath Storage location for the generated thumbnail.
  \*/
  generateThumbnailWithTextFrameProperties(
  textString: string,
  fontSize: number,
  textColor: Color,
  destinationPath: File,
  ): void
  }

/\*\*

- Legacy text items that remain unconverted from documents saved before version 11.
  \*/
  declare class LegacyTextItem extends PageItem {
  /\*\*
  - Indicates whether the legacy text item now exists as a native text frame item.
    \*/
    readonly converted: boolean

/\*\*

- Converts a legacy text item to a native text frame, removing the original legacy item.
  \*/
  convertToNative(): GroupItem
  }

/\*\*

- Character span taken from a text item.
  \*/
  declare class TextRange {
  /\*\*
  - Character formatting attributes for this text range.
    \*/
    readonly characterAttributes: CharacterAttributes

/\*\*

- Character-based position of the range's first character from the story start.
  \*/
  characterOffset: number

/\*\*

- Referenced character styles present in this text range.
  \*/
  readonly characterStyles: CharacterStyles

/\*\*

- Character collection contained in this text range.
  \*/
  readonly characters: Characters

/\*\*

- Stored text content.
  \*/
  contents: string

/\*\*

- Insertion-point collection contained in this text range.
  \*/
  readonly insertionPoints: InsertionPoints

/\*\*

- Sets spacing between two characters (in milli-ems).
  \*/
  kerning: number

/\*\*

- Text range length.
  \*/
  length: number

/\*\*

- Line collection contained in this text range.
  \*/
  readonly lines: Lines

/\*\*

- Paragraph formatting attributes for this text range.
  \*/
  readonly paragraphAttributes: ParagraphAttributes

/\*\*

- Referenced paragraph styles present in this text range.
  \*/
  readonly paragraphStyles: ParagraphStyles

/\*\*

- Paragraph collection contained in this text range.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Story associated with this text range.
  \*/
  readonly story: Story

/\*\*

- TextRanges collection contained in this range.
  \*/
  readonly textRanges: TextRanges

/\*\*

- Selected TextRange entries within this text range.
  \*/
  readonly textSelection: TextRange[]

/\*\*

- Object class identifier.
  \*/
  readonly typename: string

/\*\*

- Word collection contained in this text range.
  \*/
  readonly words: Words

/\*\*

- Updates text capitalization.
- @param type Case type to apply.
  \*/
  changeCaseTo(type: CaseChangeType): void

/\*\*

- Clears selection for the text range.
  \*/
  deSelect(): void

/\*\*

- Makes a duplicate of this object.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject: object, insertionLocation: any): TextRange

/\*\*

- Repositions the object.
- @param relativeObject
- @param insertionLocation
  \*/
  move(relativeObject: object, insertionLocation: any): TextRange

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Clears every element.
  \*/
  removeAll(): void

/\*\*

- Selects the text range.
- @param addToDocument Whether the text range should join the document text selection.
  \*/
  select(addToDocument?: boolean): void
  }

/\*\*

- Position between characters where new text objects can be inserted.
  \*/
  declare class InsertionPoint {
  /\*\*
  - Character collection for this text range.
    \*/
    readonly characters: Characters

/\*\*

- Line collection for this text range.
  \*/
  readonly lines: Lines

/\*\*

- Paragraph collection for this text range.
  \*/
  readonly paragraphs: Paragraphs

/\*\*

- Containing object for this object.
  \*/
  readonly parent: object

/\*\*

- Story associated with this text range.
  \*/
  readonly story: Story

/\*\*

- TextRanges collection for this text range.
  \*/
  readonly textRanges: TextRanges

/\*\*

- Object class identifier.
  \*/
  readonly typename: string
