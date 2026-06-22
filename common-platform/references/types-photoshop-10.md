# Photoshop (part 10)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Layer name.
  \*/
  name: string

/\*\*

- Master opacity for the layer as a percentage. Range: 0.0 to 100.0.
  \*/
  opacity: number

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- When true, the layer is shown.
  \*/
  visible: boolean

/\*\*

- XMP metadata attached to the Layer.
  \*/
  readonly xmpMetadata: XMPMetadata

/\*\*

- Produces a duplicate.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): Layer

/\*\*

- Links this layer to the supplied layer.
- @param with* Layer to link with.
  \*/
  link(with*: Layer): void

/\*\*

- Moves it.
- @param relativeObject
- @param insertionLocation
  \*/
  move(relativeObject: object, insertionLocation: ElementPlacement): Layer

/\*\*

- ...
- @param layerSet
  \*/
  moveToEnd(layerSet?: LayerSet): void

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void

/\*\*

- Resizes the object.
- @param horizontal Horizontal scaling amount as a percentage.
- @param vertical Vertical scaling amount as a percentage.
- @param anchor Anchor point used for resizing.
  \*/
  resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void

/\*\*

- Rotates it.
- @param angle Rotation amount in degrees.
- @param anchor Anchor point used for rotation.
  \*/
  rotate(angle: number, anchor?: AnchorPosition): void

/\*\*

- Moves the object from its current position by a relative offset.
- @param deltaX Horizontal movement amount.
- @param deltaY Vertical movement amount.
  \*/
  translate(deltaX?: UnitValue | number, deltaY?: UnitValue | number): void

/\*\*

- Removes links from the layer.
  \*/
  unlink(): void
  }

/\*\*

- Stores image color-element information, similar to a printing plate that applies one color. The document's color mode controls how many default channels exist. For example, an RGB document includes four defaults: the composite channel RGB plus the red, green, and blue component channels. A channel may also be an alpha channel for mask-style selections or a spot channel for spot colors.
  \*/
  declare class Channel {
  /\*\*
  - Channel color; not valid for component channels.
    \*/
    color: SolidColor

/\*\*

- Color histogram for the channel.
  \*/
  readonly histogram: number[]

/\*\*

- Channel type.
  \*/
  kind: ChannelType

/\*\*

- Channel name.
  \*/
  name: string

/\*\*

- Opacity for alpha channels, known as solidity on spot channels. Range: 0 to 100. Applies only when 'type' = masked area or selected area.
  \*/
  opacity: number

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- When true, the channel is shown.
  \*/
  visible: boolean

/\*\*

- Adds an element.
  \*/
  add(): Channel

/\*\*

- Creates a duplicate of this object.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): Channel

/\*\*

- Creates a copy of the channel.
- @param targetDocument Document receiving the duplicated channel.
  \*/
  duplicate(targetDocument?: Document): Channel

/\*\*

- Combines a spot channel with the component channels.
  \*/
  merge(): void

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Guide within the document.
  \*/
  declare class Guide {
  /\*\*
  - Guide location measured from the image origin.
    \*/
    coordinate: UnitValue | number

/\*\*

- Whether the guide is vertical or horizontal.
  \*/
  direction: Direction

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Automatically stored document version, also added to the history states collection that records state whenever the document changes.
  \*/
  declare class HistoryState {
  /\*\*
  - History-state name.
    \*/
    readonly name: string

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- When true, this history state is a snapshot.
  \*/
  readonly snapshot: boolean

/\*\*

- Object class name.
  \*/
  readonly typename: string
  }

/\*\*

- Installed font.
  \*/
  declare class TextFont {
  /\*\*
  - Font family.
    \*/
    readonly family: string

/\*\*

- Font name.
  \*/
  readonly name: string

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- PostScript name for the font.
  \*/
  readonly postScriptName: string

/\*\*

- Font style.
  \*/
  readonly style: string

/\*\*

- Object class name.
  \*/
  readonly typename: string
  }

/\*\*

- Text object stored inside an art layer.
  \*/
  declare class TextItem {
  /\*\*
  - When true, alternate ligatures are enabled.
    \*/
    alternateLigatures: boolean

/\*\*

- Anti-aliasing method to use.
  \*/
  antiAliasMethod: AntiAlias

/\*\*

- Auto-kerning options.
  \*/
  autoKerning: AutoKernType

/\*\*

- Auto-leading percentage. Range: 0.01 to 5000.00.
  \*/
  autoLeadingAmount: number

/\*\*

- Baseline offset amount for text.
  \*/
  baselineShift: UnitValue | number

/\*\*

- Text case setting.
  \*/
  capitalization: Case

/\*\*

- Color applied to text.
  \*/
  color: SolidColor

/\*\*

- Actual layer text.
  \*/
  contents: string

/\*\*

- Desired horizontal glyph scaling for text letters, as a percentage. Range: 50 - 200; at 100, character width is unscaled. Applies only to justified text.
  \*/
  desiredGlyphScaling: number

/\*\*

- Desired letter-spacing percentage. Range: 100 - 500; at 0, no letter spacing is added. Applies only to justified text.
  \*/
  desiredLetterScaling: number

/\*\*

- Desired word-spacing percentage. Range: 0 -1000; at 100, no extra word spacing is added. Applies only to justified text.
  \*/
  desiredWordScaling: number

/\*\*

- Text orientation.
  \*/
  direction: Direction

/\*\*

- When true, faux bold is active.
  \*/
  fauxBold: boolean

/\*\*

- When true, faux italic is active.
  \*/
  fauxItalic: boolean

/\*\*

- First-line paragraph indent amount. Range: -1296 to 1296.
  \*/
  firstLineIndent: UnitValue | number

/\*\*

- Character text face.
  \*/
  font: string

/\*\*

- When true, Roman hanging punctuation is used.
  \*/
  hangingPuntuation: boolean

/\*\*

- Paragraph-text bounding-box height.
  \*/
  height: UnitValue | number

/\*\*

- Horizontal character scaling relative to horizontal scale. Range: 0 - 1000 as a percentage.
  \*/
  horizontalScale: number

/\*\*

- Maximum consecutive line count that may end with a hyphenated word.
  \*/
  hyphenLimit: number

/\*\*

- Letter count after which word-wrap hyphenation may occur. Range: 1 to 15.
  \*/
  hyphenateAfterFirst: number

/\*\*

- Letter count before which word-wrap hyphenation may occur. Range: 1 to 15.
  \*/
  hyphenateBeforeLast: number

/\*\*

- When true, capitalized words may be hyphenated.
  \*/
  hyphenateCapitalWords: boolean

/\*\*

- Minimum word length required before word-wrap hyphenation is allowed. Range: 2 to 25.
  \*/
  hyphenateWordsLongerThan: number

/\*\*

- When true, hyphenation is enabled.
  \*/
  hyphenation: boolean

/\*\*

- End-of-line distance that triggers a break for a word in unjustified type. Range: 0 - 720 picas.
  \*/
  hyphenationZone: UnitValue | number

/\*\*

- Paragraph justification.
  \*/
  justification: Justification

/\*\*

- Text type.
  \*/
  kind: TextType

/\*\*

- Language setting.
  \*/
  language: Language

/\*\*

- Leading amount.
  \*/
  leading: UnitValue | number

/\*\*

- Left text indent amount. Range: -1296 to 1296.
  \*/
  leftIndent: UnitValue | number

/\*\*

- When true, ligatures are enabled.
  \*/
  ligatures: boolean

/\*\*

- Maximum horizontal glyph scaling for text letters, as a percentage. Range: 50 - 200; at 100, character width is unscaled. Applies only to justified text.
  \*/
  maximumGlyphScaling: number

/\*\*

- Maximum letter-spacing percentage. Range: 100 - 500; at 0, no letter spacing is added. Applies only to justified text.
  \*/
  maximumLetterScaling: number

/\*\*

- Maximum word-spacing percentage (0 -1000; at 100, no extra word spacing is added). Applies only to justified text.
  \*/
  maximumWordScaling: number

/\*\*

- Minimum horizontal glyph scaling for text letters, as a percentage. Range: 50 - 200; at 100, character width is unscaled. Applies only to justified text.
  \*/
  minimumGlyphScaling: number

/\*\*

- Minimum letter-spacing percentage. Range: 100 to 500; at 0, no letter spacing is added. Applies only to justified text.
  \*/
  minimumLetterScaling: number

/\*\*

- Minimum word-spacing percentage. Range: 0 -1000; at 100, no extra word spacing is added. Applies only to justified text.
  \*/
  minimumWordScaling: number

/\*\*

- When true, words cannot break at line ends. Applied to long runs of consecutive characters, this can block word wrap and may keep some text off-screen.
  \*/
  noBreak: boolean

/\*\*

- When true, old style is enabled.
  \*/
  oldStyle: boolean

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- Text-origin position. The array must contain two values. Setting this is roughly the same as clicking a point in the document with the text tool to create the text origin.
  \*/
  position: UnitPoint

/\*\*

- Right text indent amount. Range: -1296 to 1296.
  \*/
  rightIndent: UnitValue | number

/\*\*

- Font size in points.
  \*/
  size: UnitValue | number

/\*\*

- Space after each paragraph. Range: -1296 to 1296.
  \*/
  spaceAfter: UnitValue | number

/\*\*

- Space before each paragraph. Range: -1296 to 1296.
  \*/
  spaceBefore: UnitValue | number

/\*\*

- Strike-through option.
  \*/
  strikeThru: StrikeThruType

/\*\*

- Text composing engine.
  \*/
  textComposer: TextComposer

/\*\*

- Uniform spacing amount between multiple characters. Range: -1000 to 10000.
  \*/
  tracking: number

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Underline options for the text.
  \*/
  underline: UnderlineType

/\*\*

- When true, uses built-in leading data from the font.
  \*/
  useAutoLeading: boolean

/\*\*

- Vertical character scaling relative to horizontal scale. Range: 0 - 1000 as a percentage.
  \*/
  verticalScale: number

/\*\*

- Warp bend percentage. Range: -100 to 100.
  \*/
  warpBend: number

/\*\*

- Warp direction.
  \*/
  warpDirection: Direction

/\*\*

- Warp horizontal distortion percentage. Range: -100 to 100.
  \*/
  warpHorizontalDistortion: number

/\*\*

- Warp style.
  \*/
  warpStyle: WarpStyle

/\*\*

- Warp vertical distortion percentage. Range: -100 to 100.
  \*/
  warpVerticalDistortion: number

/\*\*

- Paragraph-text bounding-box width.
  \*/
  width: UnitValue | number

/\*\*

- Converts the text object and containing layer into a fill layer, with text changed into a clipping path.
  \*/
  convertToShape(): void

/\*\*

- Builds a clipping path from actual text outlines, including letters or words.
  \*/
  createPath(): void
  }

/\*\*

- Snapshot of document layer state, usable for viewing different page layouts or compositions.
  \*/
  declare class LayerComp {
  /\*\*
  - When true, layer appearance settings, including layer styles, are used.
    \*/
    appearance: boolean

/\*\*

- Layer comp description.
  \*/
  comment: any

/\*\*

- Layer comp name.
  \*/
  name: string

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- When true, layer position is used.
  \*/
  position: boolean

/\*\*

- When true, this layer comp is selected.
  \*/
  readonly selected: boolean

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- When true, this layer comp is visible.
  \*/
  visibility: boolean

/\*\*

- Adds an element.
  \*/
  add(): LayerComp

/\*\*

- Applies this layer comp to the document.
  \*/
  apply(): void

/\*\*

- Captures the current layer state(s) again for this layer comp.
  \*/
  recapture(): void

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void

/\*\*

- Restores the layer comp state from the document state.
  \*/
  resetFromComp(): void
  }

/\*\*

- Path or drawing object, for example a shape outline or straight/curved line, containing sub paths that define its geometry.
  \*/
  declare class PathItem {
  /\*\*
  - Path type.
    \*/
    kind: PathKind

/\*\*

- Path item name.
  \*/
  name: string

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- Sub path objects belonging to this path item.
  \*/
  readonly subPathItems: SubPathItems

/\*\*

- Object class name.
  \*/
  readonly typename: string

/\*\*

- Adds an element.
  \*/
  add(): PathItem

/\*\*

- Clears selection so no path items remain selected.
  \*/
  deselect(): void

/\*\*

- Creates a duplicate of this object.
- @param relativeObject
- @param insertionLocation
  \*/
  duplicate(relativeObject: object, insertionLocation: ElementPlacement): PathItem

/\*\*

- Creates a copy of this path item.
- @param name Name for the new path.
  \*/
  duplicate(name?: string): PathItem

/\*\*

- Fills the region enclosed by the path.
- @param fillColor Fill color for this path.
- @param mode Fill blending mode for this path.
- @param opacity Path-fill opacity percentage. Range: 0.0 to 100.0.
- @param preserveTransparency When true, keeps transparency intact.
- @param feather Feather amount in pixels. Range: 0.0 to 250.0.
- @param antiAlias When true, anti-aliasing is used for the selection.
- @param wholePath When true, uses every subpath.
  \*/
  fillPath(
  fillColor?: any,
  mode?: ColorBlendMode,
  opacity?: number,
  preserveTransparency?: boolean,
  feather?: number,
  antiAlias?: boolean,
  wholePath?: boolean,
  ): void

/\*\*

- Sets this path item as the document clipping path.
- @param flatness Device-pixel flatness value telling the PostScript printer how curves should be approximated. Range: 0.2 to 100).
  \*/
  makeClippingPath(flatness?: number): void

/\*\*

- Creates a selection from this path item, using the path as the selection border.
- @param feather Feather amount in pixels. Range: 0.0 to 250.0.
- @param antiAlias When true, anti-aliasing is used by the selection.
- @param operation Selection behavior against the current selection when one already exists.
  \*/
  makeSelection(feather?: number, antiAlias?: boolean, operation?: SelectionType): void

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void

/\*\*

- Makes this path item active or selected.
  \*/
  select(): void

/\*\*

- Strokes the path.
- @param tool ToolType used for stroking the path.
- @param simulatePressure When true, simulates pressure while using the tool.
  \*/
  strokePath(tool?: ToolType, simulatePressure?: boolean): void
  }

/\*\*

- Path information. The sub path item object is not used to create a path; path segments are created with the sub path info object instead. Use the sub path item object when retrieving path details. All properties are read-only.
  \*/
  declare class SubPathItem {
  /\*\*
  - When true, the path is closed.
    \*/
    readonly closed: boolean

/\*\*

- Operation for this sub path against other sub paths.
  \*/
  readonly operation: ShapeOperation

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- PathPoints collection in the sub path.
  \*/
  readonly pathPoints: PathPoints

/\*\*

- Object class name.
  \*/
  readonly typename: string
  }

/\*\*

- Information for an array of path point info objects. Use the path point object to read details about points that describe path segments; creation belongs to the path point info object.
  \*/
  declare class PathPoint {
  /\*\*
  - Anchor-point position coordinates.
    \*/
    readonly anchor: Point | [number, number]

/\*\*

- Point type.
  \*/
  readonly kind: PointKind

/\*\*

- Left direction point location, the "in" position.
  \*/
  readonly leftDirection: Point | [number, number]

/\*\*

- Container object.
  \*/
  readonly parent: object

/\*\*

- Right direction point location, the "out" position.
  \*/
  readonly rightDirection: Point | [number, number]

/\*\*

- Object class name.
  \*/
  readonly typename: string
  }

/\*\*

- Measurement log.
  \*/
  declare class MeasurementLog {
  /\*\*
  - Container object.
    \*/
    readonly parent: object

/\*\*

- Object class-name value.
  \*/
  readonly typename: string

/\*\*

- Removes the chosen measurements.
- @param range Measurement group to remove. Default: selected.
  \*/
  deleteMeasurements(range?: MeasurementRange): void

/\*\*

- Writes out the chosen measurements.
- @param file Destination file for export. When omitted, Photoshop opens a 'file save' dialog.
- @param range Measurement group to write. Default: selected.
- @param dataPoints Data-point identifier array to include in export. Export output keeps the array order. Default set is the data points shown in the Measurement Log palette.
  \*/
  exportMeasurements(file?: File, range?: MeasurementRange, dataPoints?: string[]): void
  }

/\*\*

- Document measurement-scale object.
  \*/
  declare class MeasurementScale {
  /\*\*
  - Logical length represented by this scale.
    \*/
    logicalLength: number

/\*\*

- Logical unit text used for this scale.
  \*/
  logicalUnits: string

/\*\*

- Scale name.
  \*/
  name: string

/\*\*

- Container for this object.
  \*/
  readonly parent: object

/\*\*

- Pixel length represented by this scale.
  \*/
  pixelLength: number

/\*\*

- Object class-name value.
  \*/
  readonly typename: string
  }

/\*\*

- Event-handler object that runs assigned code after a chosen event occurs. Notifiers must be enabled before they can fire. Refer to the 'notifiers enabled' property on the Application object. Events raised from inside scripts usually do not trigger notifiers, since they happen within a "play script" event.
  \*/
  declare class Notifier {
  /\*\*
  - Four-character event ID or unique string tied to this notifier.
    \*/
    readonly event: string

/\*\*

- Event class ID for the Notifier object, given as four characters or a unique string.
  \*/
  readonly eventClass: string

/\*\*

- File path executed when the event fires or activates the notifier.
  \*/
  readonly eventFile: File

/\*\*

- Container for this object.
  \*/
  readonly parent: object

/\*\*

- Object class-name value.
  \*/
  readonly typename: string

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Document count item. Count-item support exists only in the Extended Version.
  \*/
  declare class CountItem {
  /\*\*
  - Container for this object.
    \*/
    readonly parent: object

/\*\*

- Document position for the count item.
  \*/
  readonly position: UnitPoint

/\*\*

- Object class-name value.
  \*/
  readonly typename: string

/\*\*

- Creates an element.
  \*/
  add(): CountItem

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Color sampler object within a document.
  \*/
  declare class ColorSampler {
  /\*\*
  - Sampled color value.
    \*/
    readonly color: SolidColor

/\*\*

- Container for this object.
  \*/
  readonly parent: object

/\*\*

- Document position for the color sampler.
  \*/
  readonly position: UnitPoint

/\*\*

- Object class-name value.
  \*/
  readonly typename: string

/\*\*

- Creates an element.
  \*/
  add(): ColorSampler

/\*\*

- Repositions the color sampler.
- @param position Destination position expressed as a unit value.
  \*/
  move(position: UnitPoint): void

/\*\*

- Removes this object.
  \*/
  remove(): void

/\*\*

- Removes every element.
  \*/
  removeAll(): void
  }

/\*\*

- Camera raw image-file settings kept in an XMP file beside the raw file, using the same base name and an XMP extension.
  \*/
  declare class XMPMetadata {
  /\*\*
  - Container for this object.
    \*/
    readonly parent: object

/\*\*

- File information represented as raw XML.
  \*/
  rawData: string

/\*\*

- Object class-name value.
  \*/
  readonly typename: string
  }

/\*\*

- Rectangle description object; it also behaves as a four-element collection.
  \*/
  declare class Rectangle {
  /\*\*
  - Bottom coordinate.
    \*/
    bottom: number

/\*\*

- Height value.
  \*/
  height: number

/\*\*

- Left coordinate.
  \*/
  left: number

/\*\*

- Array length value.
  \*/
  readonly length: number

/\*\*

- Right coordinate.
  \*/
  right: number

/\*\*

- Top coordinate.
  \*/
  top: number

/\*\*

- Width value.
  \*/
  width: number

/\*\*

- Left coordinate.
  \*/
  x: number

/\*\*

- Top coordinate.
  \*/
  y: number
  }

/\*\*

- Determines the position Photoshop uses when placing an element.
  \*/
  declare enum ElementPlacement {
  /\*\*
  - Position after an element.
    \*/
    PLACEAFTER = 1,

/\*\*

- Position at the end.
  \*/
  PLACEATEND = 3,

/\*\*

- Position before target.
  \*/
  PLACEBEFORE = 2,
  }

type UnitPoint = [UnitValue | number, UnitValue | number]
type UnitRect = [UnitValue | number, UnitValue | number, UnitValue | number, UnitValue | number]
