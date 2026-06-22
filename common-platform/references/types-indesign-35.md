# Indesign (part 35)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Pages associated with the master spread.
  \*/
  readonly pages: Pages

/\*\*

- Owning Document for this MasterSpread.
  \*/
  readonly parent: Document

/\*\*

- Polygons on the master spread.
  \*/
  readonly polygons: Polygons

/\*\*

- Preferences objects attached to the master spread.
  \*/
  readonly preferences: Preferences

/\*\*

- Main text frame that carries text flow on the MasterSpread; it must be either a text frame or type on a path spline.
  \*/
  primaryTextFrame: PageItem | NothingEnum

/\*\*

- Use this object slot to assign multiple properties in one operation.
  \*/
  properties: object

/\*\*

- RadioButtons on the master spread.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangles on the master spread.
  \*/
  readonly rectangles: Rectangles

/\*\*

- When true, document pages in the spread show items from the master page.
  \*/
  showMasterItems: boolean

/\*\*

- SignatureFields on the master spread.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- SplineItems available through this collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- TextBoxes on the master spread.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- TextFrames on the master spread.
  \*/
  readonly textFrames: TextFrames

/\*\*

- TimingSetting values for the object.
  \*/
  readonly timingSettings: TimingSetting

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Handler used for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Copies an object into the destination and places it there.
- @param pageItems Page items that should be placed or loaded.
- @param linkPageItems Link pageItems in the content placer; true takes precedence over the story-link setting.
- @param linkStories Link stories in the content placer; applies to one story, while multiple items also create pageItem links.
- @param mapStyles Apply style mapping while content is placed.
- @param placePoint Placement point to use.
- @param destinationLayer Layer receiving the placed content.
- @param showingOptions Open link-options controls during placement.
  \*/
  contentPlace(pageItems: PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, placePoint?: (number | string)[], destinationLayer?: Layer, showingOptions?: boolean): any[]

/\*\*

- Builds guide rows and columns across every page in the spread.
- @param numberOfRows Row count created on each page.
- @param numberOfColumns Column count created on each page.
- @param rowGutter Gutter height separating rows.
- @param columnGutter Gutter width separating columns.
- @param guideColor Guide color, supplied as three 0 to 255 doubles for R, G, and B, or as a UI color.
- @param fitMargins When true, row and column dimensions come from the area inside page margins; otherwise, the whole page is used.
- @param removeExisting When true, old guides are deleted before new guides are added.
- @param layer Layer where the guides are created.
  \*/
  createGuides(numberOfRows?: number, numberOfColumns?: number, rowGutter?: number | string, columnGutter?: number | string, guideColor?: [number, number, number] | UIColors, fitMargins?: boolean, removeExisting?: boolean, layer?: Layer): void

/\*\*

- Separates an overridden master item from its source master page.
  \*/
  detach(): void

/\*\*

- Creates a duplicate of the spread.
- @param to Position for the spread, either against a reference object or inside the document.
- @param reference Reference object; needed only when to requests before or after placement.
  \*/
  duplicate(to?: LocationOptions, reference?: MasterSpread | Document): any

/\*\*

- Reads the label value stored for a key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): MasterSpread[]

/\*\*

- Writes a label value for the supplied key.
- @param key Key whose label entry is set.
- @param value Value stored for that key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Places a file in the target.
- @param fileName File to be placed.
- @param placePoint Placement point to use.
- @param destinationLayer Layer that receives the placed content.
- @param showingOptions Controls whether the import options dialog is shown.
- @param autoflowing Controls autoflow for placed text.
- @param withProperties Seed property values for objects created by placement.
  \*/
  place(fileName: File, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): any[]

/\*\*

- Deprecated: use contentPlace method. Original Description: builds a linked story and inserts it into the target.
- @param parentStory Story used as the placement/link source.
- @param placePoint Placement point to use.
- @param destinationLayer Layer that receives the placed content.
- @param showingOptions Controls whether the link options dialog is shown.
  \*/
  placeAndLink(parentStory: Story, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean): Story

/\*\*

- Removes this MasterSpread.
  \*/
  remove(): void

/\*\*

- Detaches an event listener.
- @param eventType Event type already registered.
- @param handler Handler already registered.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Clears an override from a master page item that had been overridden.
  \*/
  removeOverride(): void

/\*\*

- Resolves a requested location into coordinates within a chosen coordinate system.
- @param location Requested location. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
- @param in\_ Coordinate space used for the result.
- @param consideringRulerUnits When true, a ruler location is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.
  \*/
  resolve(location: any, in\_: CoordinateSpaces, consideringRulerUnits?: boolean): any

/\*\*

- Selects this object.
- @param existingSelection How this MasterSpread selection relates to objects already selected.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Builds a string which, when run, resolves back to this MasterSpread.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Applies a transform to the page item.
- @param in\_ Coordinate space used for the operation.
- @param from Temporary transformation origin. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
- @param withMatrix Transformation matrix.
- @param replacingCurrent Components of the transform to consider. Supplying this optional parameter replaces the target's current transform components with new values.Without this parameter, the supplied matrix is concatenated with the target's existing transform so both effects combine.
- @param consideringRulerUnits When true, a ruler based origin is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.
  \*/
  transform(in\_: CoordinateSpaces, from: any, withMatrix: [number, number, number, number, number, number] | TransformationMatrix, replacingCurrent: MatrixContent | MatrixContent[] | number, consideringRulerUnits?: boolean): void

/\*\*

- Gets this page item's transformation values.
- @param in* Coordinate space used for the lookup.
  \*/
  transformValuesOf(in*: CoordinateSpaces): TransformationMatrix[]
  }

/\*\*

- Collection type for master spreads.
  \*/
  declare class MasterSpreads {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Gets the MasterSpread at the given index.
- @param index Index to access.
  \*/
  [index: number]: MasterSpread

/\*\*

- Creates a master spread.
- @param pagesPerSpread Page count to include in the master spread.
- @param withProperties Starting property values for the new MasterSpread.
  \*/
  add(pagesPerSpread: number, withProperties: object): MasterSpread

/\*\*

- Gets any MasterSpread from the collection.
  \*/
  anyItem(): MasterSpread

/\*\*

- Shows how many elements the MasterSpread contains.
  \*/
  count(): number

/\*\*

- Gets all MasterSpread entries in the collection.
  \*/
  everyItem(): MasterSpread[]

/\*\*

- Gets the first MasterSpread in this collection.
  \*/
  firstItem(): MasterSpread

/\*\*

- Gets the MasterSpread by index or by name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): MasterSpread

/\*\*

- Gets the MasterSpread with the given ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): MasterSpread

/\*\*

- Gets the MasterSpread with the given name.
- @param name Name to resolve.
  \*/
  itemByName(name: string): MasterSpread

/\*\*

- Gets MasterSpreads across a specified range.
- @param from MasterSpread, index, or name that starts the range.
- @param to MasterSpread, index, or name that ends the range.
  \*/
  itemByRange(from: MasterSpread | number | string, to: MasterSpread | number | string): MasterSpread[]

/\*\*

- Gets the final MasterSpread in this collection.
  \*/
  lastItem(): MasterSpread

/\*\*

- Gets the middle MasterSpread in this collection.
  \*/
  middleItem(): MasterSpread

/\*\*

- Gets the MasterSpread positioned immediately after the supplied MasterSpread.
- @param obj MasterSpread whose following neighbor is wanted.
  \*/
  nextItem(obj: MasterSpread): MasterSpread

/\*\*

- Gets the MasterSpread positioned immediately before the supplied index.
- @param obj Index belonging to the MasterSpread that follows the wanted one.
  \*/
  previousItem(obj: MasterSpread): MasterSpread

/\*\*

- Builds a string which, when run, resolves back to this MasterSpread.
  \*/
  toSource(): string
  }

/\*\*

- Attributes used for PDFs.
  \*/
  declare class PDFAttribute extends Preference {
  /\*\*
  - Page number from the PDF document page being placed.
    \*/
    readonly pageNumber: number

/\*\*

- Cropping type to use.
  \*/
  readonly pdfCrop: PDFCrop

/\*\*

- When true, the PDF background remains transparent.
  \*/
  readonly transparentBackground: boolean
  }

/\*\*

- Page object type covering rectangles plus ellipses, with graphic lines, polygons, groups, text frames, and buttons.
  \*/
  declare class PageItem {
  /\*\*
  - Event sent after a PageItem is placed. It bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_PLACE`: string

/\*\*

- Event sent before a PageItem is placed. It bubbles and can be canceled.
  \*/
  static readonly `BEFORE_PLACE`: string

/\*\*

- Reports whether the PageItem was flipped separately from its parent object and, when applicable, which direction was used.
  \*/
  absoluteFlip: Flip

/\*\*

- Horizontal scale for the PageItem measured against its containing object.
  \*/
  absoluteHorizontalScale: number

/\*\*

- Rotation angle for the PageItem measured against its containing object. (Range: -360 to 360)
  \*/
  absoluteRotationAngle: number

/\*\*

- Skew angle for the PageItem measured against its containing object. (Range: -360 to 360)
  \*/
  absoluteShearAngle: number

/\*\*

- Vertical scale for the PageItem measured against its containing object.
  \*/
  absoluteVerticalScale: number

/\*\*

- All articles that include this page item.
  \*/
  readonly allArticles: Article[]

/\*\*

- All graphics held inside the PageItem.
  \*/
  readonly allGraphics: Graphic[]

/\*\*

- All page items contained inside this PageItem.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- When true, overrides are allowed for the master page item.
  \*/
  allowOverrides: boolean

/\*\*

- Animation settings for the page item.
  \*/
  readonly animationSettings: AnimationSetting

/\*\*

- Object style assigned to the PageItem.
  \*/
  appliedObjectStyle: ObjectStyle

/\*\*

- Arrowhead alignment assigned to the PageItem.
  \*/
  arrowHeadAlignment: ArrowHeadAlignmentEnum

/\*\*

- XML element linked with the PageItem.
  \*/
  readonly associatedXMLElement: XMLItem

/\*\*

- Shape used for the bottom-left corner of rectangular shapes.
  \*/
  bottomLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the corner effect on the bottom-left corner of rectangular shapes.
  \*/
  bottomLeftCornerRadius: number | string

/\*\*

- Shape used for the bottom-right corner of rectangular shapes.
  \*/
  bottomRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the corner effect on the bottom-right corner of rectangular shapes.
  \*/
  bottomRightCornerRadius: number | string

/\*\*

- Transparency settings that affect PageItem content.
  \*/
  readonly contentTransparencySettings: ContentTransparencySetting

/\*\*

- End shape used on an open path.
  \*/
  endCap: EndCap

/\*\*

- Corner join assigned to the PageItem.
  \*/
  endJoin: EndJoin

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Fill swatch for the PageItem; it may be a color, gradient, tint, or mixed ink. .
  \*/
  fillColor: Swatch | string

/\*\*

- Tint percentage for the PageItem's fill color. Use a number from 0 to 100 for a tint percent; use -1 for inherited or overridden behavior.
  \*/
  fillTint: number

/\*\*

- Transparency settings for the PageItem fill.
  \*/
  readonly fillTransparencySettings: FillTransparencySetting

/\*\*

- Direction used when flipping the printed image.
  \*/
  flip: Flip

/\*\*

- Gap swatch for a dashed, dotted, or striped stroke; it may be color, gradient, tint, or mixed ink. For details, see stroke type.
  \*/
  gapColor: Swatch

/\*\*

- Gap color tint expressed as a percentage. Use a number from 0 to 100 for a tint percent; use -1 for inherited or overridden behavior.
  \*/
  gapTint: number

/\*\*

- PageItem bounds without stroke width, using [y1, x1, y2, x2] to represent the bounding box's top-left and bottom-right coordinates.
  \*/
  geometricBounds: (number | string)[]

/\*\*

- Linear-gradient angle used by the PageItem fill. (Range: -180 to 180)
  \*/
  gradientFillAngle: number

/\*\*

- Length for a linear gradient, or radius for a radial gradient, used by the PageItem fill.
  \*/
  gradientFillLength: number | string

/\*\*

- Fill-gradient starting point in page coordinates, formatted as [x, y].
  \*/
  gradientFillStart: (number | string)[]

/\*\*

- Linear-gradient angle used by the PageItem stroke. (Range: -180 to 180)
  \*/
  gradientStrokeAngle: number

/\*\*

- Length for a linear gradient, or radius for a radial gradient, used by the PageItem stroke.
  \*/
  gradientStrokeLength: number | string

/\*\*

- Stroke-gradient starting point in page coordinates, formatted as [x, y].
  \*/
  gradientStrokeStart: (number | string)[]

/\*\*

- Collection of imported graphics in any graphic file format, including vector, metafile, or bitmap.
  \*/
  readonly graphics: Graphics

/\*\*

- Left margin, width, and right margin constraints that apply under the object-based layout rule.
  \*/
  horizontalLayoutConstraints: DimensionsConstraints[]

/\*\*

- Horizontal scaling assigned to the PageItem.
  \*/
  horizontalScale: number

/\*\*

- Unique ID for the PageItem.
  \*/
  readonly id: number

/\*\*

- Index of the PageItem inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Layer containing the PageItem.
  \*/
  itemLayer: Layer

/\*\*

- String-valued property available for arbitrary text.
  \*/
  label: string

/\*\*

- Scaling applied to the path's starting arrowhead. (Range: 1 to 1000)
  \*/
  leftArrowHeadScale: number

/\*\*

- Arrowhead used at the beginning of the path.
  \*/
  leftLineEnd: ArrowHead

/\*\*

- Options for Linked Page Item.
  \*/
  readonly linkedPageItemOptions: LinkedPageItemOption

/\*\*

- PageItem display-performance setting.
  \*/
  localDisplaySetting: DisplaySettingOptions

/\*\*

- When true, the PageItem is locked.
  \*/
  locked: boolean

/\*\*

- Ratio limit between stroke width and miter length before a miter (pointed) join changes to a bevel (squared-off) join.
  \*/
  miterLimit: number

/\*\*

- Name assigned to the PageItem.
  \*/
  name: string

/\*\*

- When true, the PageItem is omitted from printing.
  \*/
  nonprinting: boolean

/\*\*

- When true, the PageItem fill color overprints underlying objects; when false, it knocks out underlying colors.
  \*/
  overprintFill: boolean

/\*\*

- When true, the gap color overprints underlying colors; when false, it knocks them out.
  \*/
  overprintGap: boolean

/\*\*

- When true, the PageItem stroke color overprints underlying objects; when false, it knocks out theunderlying colors.
  \*/
  overprintStroke: boolean

/\*\*

- True means the object began on a master spread and has since been overridden; false means it either remains an unoverridden master-spread object or did not come from a master page.
  \*/
  readonly overridden: boolean

/\*\*

- Master-page-origin object that has been overridden.
  \*/
  readonly overriddenMasterPageItem: PageItem | Guide | Graphic | Movie | Sound

/\*\*

- Collection for processing every page item in a container, such as a document, page, or group, without regard to type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Parent of the PageItem; possible parent types include Snippet or XMLElement; ComboBox or ListBox; TextBox or SignatureField; CheckBox or RadioButton; Spread or MasterSpread; Polygon or GraphicLine; Rectangle or Oval; SplineItem or Group; State or Cell; Button or MultiStateObject; EndnoteTextFrame or TextFrame; Character or Sound; PlaceGun or Movie; HtmlItem or FormField; MediaItem or EPSText; SVG or ImportedPage; PICT, WMF, PDF, EPS, Image, Graphic or PageItem.
  \*/
  readonly parent: any

/\*\*

- Page where this page item is displayed.
  \*/
  readonly parentPage: Page

/\*\*

- Collection of preference objects.
  \*/
  readonly preferences: Preferences

/\*\*

- Property used to set multiple properties together.
  \*/
  properties: object

/\*\*

- Scaling applied to the path's ending arrowhead. (Range: 1 to 1000)
  \*/
  rightArrowHeadScale: number

/\*\*

- Arrowhead used at the end of the path.
  \*/
  rightLineEnd: ArrowHead

/\*\*

- PageItem rotation angle. (Range: -360 to 360)
  \*/
  rotationAngle: number

/\*\*

- Skew angle assigned to the PageItem. (Range: -360 to 360)
  \*/
  shearAngle: number

/\*\*

- Stroke alignment assigned to the PageItem.
  \*/
  strokeAlignment: StrokeAlignment

/\*\*

- Stroke swatch for the PageItem; it may be color, gradient, tint, or mixed ink.
  \*/
  strokeColor: Swatch | string

/\*\*

- Corner adjustment assigned to the PageItem.
  \*/
  strokeCornerAdjustment: StrokeCornerAdjustment

/\*\*

- Dash and gap measurements for a custom dashed line pattern. Up to six point values can be supplied in the format [dash1, gap1, dash2, gap2, dash3, gap3].
  \*/
  strokeDashAndGap: (number | string)[]

/\*\*

- Tint percentage used for the object's stroke color. Use a number from 0 to 100 for a tint percent; use -1 for inherited or overridden behavior.
  \*/
  strokeTint: number

/\*\*

- Transparency settings for the stroke.
  \*/
  readonly strokeTransparencySettings: StrokeTransparencySetting

/\*\*

- Stroke style name to apply.
  \*/
  strokeType: StrokeStyle | string

/\*\*

- PageItem stroke weight in points.
  \*/
  strokeWeight: number | string

/\*\*

- Collection of SVG files.
  \*/
  readonly svgs: SVGs

/\*\*

- Text wrap preference properties that set default formatting for wrapping text around objects.
  \*/
  readonly textWrapPreferences: TextWrapPreference

/\*\*

- Timing settings for the object.
  \*/
  readonly timingSettings: TimingSetting

/\*\*

- Top-left corner shape for rectangular objects and every corner on non-rectangular objects. Note: corner option differs from end join because a corner option can have a radius, while the rounded or beveled result of an end join depends on stroke weight.
  \*/
  topLeftCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the corner effect at the upper-left of rectangular shapes and at every corner of non-rectangular shapes.
  \*/
  topLeftCornerRadius: number | string

/\*\*

- Shape used at the upper-right corner of rectangular shapes.
  \*/
  topRightCornerOption: CornerOptions

/\*\*

- Measurement-unit radius for the corner effect at the upper-right of rectangular shapes.
  \*/
  topRightCornerRadius: number | string

/\*\*

- Transparency settings.
  \*/
  readonly transparencySettings: TransparencySetting

/\*\*

- Top margin, height, and bottom margin constraints that apply under the object-based layout rule.
  \*/
  verticalLayoutConstraints: DimensionsConstraints[]

/\*\*

- Vertical scaling assigned to the PageItem.
  \*/
  verticalScale: number

/\*\*

- When true, the PageItem is visible.
  \*/
  visible: boolean

/\*\*

- PageItem bounds including stroke width, using [y1, x1, y2, x2] for the bounding box's top-left and bottom-right coordinates.
  \*/
  visibleBounds: (number | string)[]

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Applies a chosen object style.
- @param using Object style to apply.
- @param clearingOverrides When true, the PageItem's current attributes are cleared before the style is applied.
- @param clearingOverridesThroughRootObjectStyle When true, PageItem attributes and formatting not specified by the object style are cleared.
  \*/
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void
