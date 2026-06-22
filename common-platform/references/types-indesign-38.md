# Indesign (part 38)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Collection containing PICT graphics.
  \*/
  declare class PICTs {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the PICT at the specified index.
- @param index Index value.
  \*/
  [index: number]: PICT

/\*\*

- Gets any PICT from the collection.
  \*/
  anyItem(): PICT

/\*\*

- Reports the element count for the PICT.
  \*/
  count(): number

/\*\*

- Gets all PICT entries in the collection.
  \*/
  everyItem(): PICT[]

/\*\*

- Gets the first PICT from the collection.
  \*/
  firstItem(): PICT

/\*\*

- Gets the PICT selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): PICT

/\*\*

- Gets the PICT identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): PICT

/\*\*

- Gets the PICT identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): PICT

/\*\*

- Gets the PICTs covered by the specified range.
- @param from PICT, index, or name that starts the range.
- @param to PICT, index, or name that ends the range.
  \*/
  itemByRange(from: PICT | number | string, to: PICT | number | string): PICT[]

/\*\*

- Gets the last PICT from the collection.
  \*/
  lastItem(): PICT

/\*\*

- Gets the middle PICT from the collection.
  \*/
  middleItem(): PICT

/\*\*

- Gets the PICT positioned after the specified PICT in the collection.
- @param obj PICT preceding the requested PICT.
  \*/
  nextItem(obj: PICT): PICT

/\*\*

- Gets the PICT at the index before the specified index.
- @param obj Index of the PICT after the requested PICT.
  \*/
  previousItem(obj: PICT): PICT

/\*\*

- Builds executable source text that returns the PICT.
  \*/
  toSource(): string
  }

/\*\*

- Imported graphic using a graphic format such as vector, metafile, or bitmap.
  \*/
  declare class Graphic extends PageItem {
  /\*\*
  - Image type name.
    \*/
    readonly imageTypeName: string

/\*\*

- Source file for the link.
  \*/
  readonly itemLink: Link

/\*\*

- Exports the Graphic for web output.
- @param to Full pathname for the exported file.
  \*/
  exportForWeb(to: File): string[]
  }

/\*\*

- Collection of imported graphics across vector, metafile, or bitmap formats.
  \*/
  declare class Graphics {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Graphic at the specified index.
- @param index Index value.
  \*/
  [index: number]: Graphic

/\*\*

- Gets any Graphic from the collection.
  \*/
  anyItem(): Graphic

/\*\*

- Reports the element count for the Graphic.
  \*/
  count(): number

/\*\*

- Gets all Graphic entries in the collection.
  \*/
  everyItem(): Graphic[]

/\*\*

- Gets the first Graphic from the collection.
  \*/
  firstItem(): Graphic

/\*\*

- Gets the Graphic selected by the specified index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Graphic

/\*\*

- Gets the Graphic identified by the specified ID.
- @param id ID value.
  \*/
  itemByID(id: number): Graphic

/\*\*

- Gets the Graphic identified by the specified name.
- @param name Name value.
  \*/
  itemByName(name: string): Graphic

/\*\*

- Gets the Graphics covered by the specified range.
- @param from Graphic, index, or name that starts the range.
- @param to Graphic, index, or name that ends the range.
  \*/
  itemByRange(from: Graphic | number | string, to: Graphic | number | string): Graphic[]

/\*\*

- Gets the last Graphic from the collection.
  \*/
  lastItem(): Graphic

/\*\*

- Gets the middle Graphic from the collection.
  \*/
  middleItem(): Graphic

/\*\*

- Gets the Graphic positioned after the specified Graphic in the collection.
- @param obj Graphic preceding the requested Graphic.
  \*/
  nextItem(obj: Graphic): Graphic

/\*\*

- Gets the Graphic at the index before the specified index.
- @param obj Index of the Graphic after the requested Graphic.
  \*/
  previousItem(obj: Graphic): Graphic

/\*\*

- Builds executable source text that returns the Graphic.
  \*/
  toSource(): string
  }

/\*\*

- Transformation matrix object.
  \*/
  declare class TransformationMatrix {
  /\*\*
  - Shear angle for the transformation matrix.
    \*/
    readonly clockwiseShearAngle: number

/\*\*

- Rotation angle for the transformation matrix.
  \*/
  readonly counterclockwiseRotationAngle: number

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Horizontal scale factor for the transformation matrix.
  \*/
  readonly horizontalScaleFactor: number

/\*\*

- Horizontal translation for the transformation matrix.
  \*/
  readonly horizontalTranslation: number

/\*\*

- Index of the TransformationMatrix inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Unit-triangle mapping produced by the transformation matrix. Return type: Array of Array of 2 Arrays of 2 Reals.
  \*/
  readonly matrixMapping: any[]

/\*\*

- Values stored in the transformation matrix.
  \*/
  readonly matrixValues: number[]

/\*\*

- Name assigned to the TransformationMatrix.
  \*/
  readonly name: string

/\*\*

- Parent object for the TransformationMatrix (a Application).
  \*/
  readonly parent: Application

/\*\*

- Property object for assigning several properties together.
  \*/
  properties: object

/\*\*

- Vertical scale factor for the transformation matrix.
  \*/
  readonly verticalScaleFactor: number

/\*\*

- Vertical translation for the transformation matrix.
  \*/
  readonly verticalTranslation: number

/\*\*

- Adds one event listener.
- @param eventType Event type value.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Multiplies this transformation matrix by another matrix.
- @param withMatrix Right-hand matrix factor
  \*/
  catenateMatrix(withMatrix: TransformationMatrix): TransformationMatrix

/\*\*

- Multiplies the point using the matrix.
- @param point Point being transformed
  \*/
  changeCoordinates(point: number[]): number[]

/\*\*

- Resolves the object specifier and produces an array of object references.
  \*/
  getElements(): TransformationMatrix[]

/\*\*

- Inverts the transformation matrix.
  \*/
  invertMatrix(): TransformationMatrix

/\*\*

- Removes the event listener entry.
- @param eventType Registered event type value.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Rotates the transformation matrix.
- @param byAngle Counterclockwise rotation angle
- @param byCosine Cosine for the requested rotation
- @param bySine Sine for the requested rotation
  \*/
  rotateMatrix(byAngle: number, byCosine: number, bySine: number): TransformationMatrix

/\*\*

- Scales the transformation matrix.
- @param horizontallyBy Horizontal scale factor
- @param verticallyBy Vertical scale factor
  \*/
  scaleMatrix(horizontallyBy: number, verticallyBy: number): TransformationMatrix

/\*\*

- Shears the transformation matrix.
- @param byAngle Horizontal shear angle
- @param bySlope Horizontal shear slope
  \*/
  shearMatrix(byAngle: number, bySlope: number): TransformationMatrix

/\*\*

- Builds executable source text that returns the TransformationMatrix.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Translates the transformation matrix.
- @param horizontallyBy Horizontal translation distance
- @param verticallyBy Vertical translation distance
  \*/
  translateMatrix(horizontallyBy: number, verticallyBy: number): TransformationMatrix
  }

/\*\*

- Collection containing transformation matrices.
  \*/
  declare class TransformationMatrices {
  /\*\*
  - Object count for the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TransformationMatrix at the specified index.
- @param index Index value.
  \*/
  [index: number]: TransformationMatrix

/\*\*

- Creates one TransformationMatrix.
- @param horizontalScaleFactor Horizontal scale factor for the transformation matrix
- @param verticalScaleFactor Vertical scale factor for the transformation matrix
- @param clockwiseShearAngle Shear angle for the transformation matrix
- @param counterclockwiseRotationAngle Rotation angle for the transformation matrix
- @param horizontalTranslation Horizontal translation for the transformation matrix
- @param verticalTranslation Vertical translation for the transformation matrix
- @param matrixValues Values stored in the transformation matrix
- @param matrixMapping Unit-triangle mapping accepted by the transformation matrix. Accepted type: Array of Array of 2 Arrays of 2 Reals.
- @param withProperties Property values applied during TransformationMatrix creation
  \*/
  add(horizontalScaleFactor: number, verticalScaleFactor: number, clockwiseShearAngle: number, counterclockwiseRotationAngle: number, horizontalTranslation: number, verticalTranslation: number, matrixValues: number[], matrixMapping: any[], withProperties: object): TransformationMatrix

/\*\*

- Gets any TransformationMatrix from the collection.
  \*/
  anyItem(): TransformationMatrix

/\*\*

- Reports the element count for the TransformationMatrix.
  \*/
  count(): number

/\*\*

- Provides all TransformationMatrix entries in this collection.
  \*/
  everyItem(): TransformationMatrix[]

/\*\*

- Provides the collection's first TransformationMatrix.
  \*/
  firstItem(): TransformationMatrix

/\*\*

- Finds a TransformationMatrix by the supplied index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): TransformationMatrix

/\*\*

- Finds the TransformationMatrix identified by name.
- @param name Name used to locate the item.
  \*/
  itemByName(name: string): TransformationMatrix

/\*\*

- Provides the TransformationMatrices covered by the requested range.
- @param from TransformationMatrix, index, or name that starts the range.
- @param to TransformationMatrix, index, or name that ends the range.
  \*/
  itemByRange(from: TransformationMatrix | number | string, to: TransformationMatrix | number | string): TransformationMatrix[]

/\*\*

- Provides the collection's final TransformationMatrix.
  \*/
  lastItem(): TransformationMatrix

/\*\*

- Provides the TransformationMatrix positioned in the middle of the collection.
  \*/
  middleItem(): TransformationMatrix

/\*\*

- Provides the TransformationMatrix immediately after the specified TransformationMatrix in the collection order.
- @param obj TransformationMatrix that precedes the requested TransformationMatrix.
  \*/
  nextItem(obj: TransformationMatrix): TransformationMatrix

/\*\*

- Provides the TransformationMatrix positioned before the specified index.
- @param obj Index for the TransformationMatrix that follows the requested TransformationMatrix.
  \*/
  previousItem(obj: TransformationMatrix): TransformationMatrix

/\*\*

- Creates source text that can be executed to obtain this TransformationMatrix.
  \*/
  toSource(): string
  }

/\*\*

- Settings for fitting placed or pasted content inside a frame.
  \*/
  declare class FrameFittingOption extends Preference {
  /\*\*
  - When true, resizing a frame reapplies the last saved fitting options to its contents.
    \*/
    autoFit: boolean

/\*\*

- Bottom-edge graphic crop amount, expressed in measurement units.
  \*/
  bottomCrop: number | string

/\*\*

- Anchor point used to align the image empty while fitting inside a frame; see frame fitting options for details.
  \*/
  fittingAlignment: AnchorPoint

/\*\*

- Empty-frame fitting choice for placed or pasted content; it can be set on a frame, object style, document, or application.
  \*/
  fittingOnEmptyFrame: EmptyFrameFittingOptions

/\*\*

- Left-edge graphic crop amount, expressed in measurement units.
  \*/
  leftCrop: number | string

/\*\*

- Right-edge graphic crop amount, expressed in measurement units.
  \*/
  rightCrop: number | string

/\*\*

- Top-edge graphic crop amount, expressed in measurement units.
  \*/
  topCrop: number | string
  }

/\*\*

- Guide object.
  \*/
  declare class Guide {
  /\*\*
  - Fires after a Guide is placed; the event bubbles and cannot be canceled.
    \*/
    static readonly `AFTER_PLACE`: string

/\*\*

- When true, the master page item is allowed to be overridden.
  \*/
  allowOverrides: boolean

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- When true, horizontal guides end at the specified page edges; when false, they span the spread width and continue into the pasteboard.
  \*/
  fitToPage: boolean

/\*\*

- Guide color, either a UI color or an RGB array of three doubles from 0 to 255.
  \*/
  guideColor: [number, number, number] | UIColors

/\*\*

- Guide type.
  \*/
  guideType: GuideTypeOptions

/\*\*

- Guide zone.
  \*/
  guideZone: number | string

/\*\*

- Unique Guide ID.
  \*/
  readonly id: number

/\*\*

- Guide position within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Layer containing the Guide.
  \*/
  itemLayer: Layer

/\*\*

- String-valued custom property.
  \*/
  label: string

/\*\*

- Guide placement relative to the current ruler zero point.
  \*/
  location: number | string

/\*\*

- When true, the Guide cannot be edited.
  \*/
  locked: boolean

/\*\*

- Guide name, provided as an alias for the Guide's label property.
  \*/
  name: string

/\*\*

- Guide orientation.
  \*/
  orientation: HorizontalOrVertical

/\*\*

- True means the object came from a master spread and has been overridden; false covers master-spread objects not overridden and objects that did not originate on a master page.
  \*/
  readonly overridden: boolean

/\*\*

- Overridden object whose original source was a master page.
  \*/
  readonly overriddenMasterPageItem: PageItem | Guide | Graphic | Movie | Sound

/\*\*

- Guide parent, either a Spread or MasterSpread.
  \*/
  readonly parent: any

/\*\*

- Page where this page item is visible.
  \*/
  readonly parentPage: Page

/\*\*

- Object used to assign multiple properties at once.
  \*/
  properties: object

/\*\*

- View magnification percentage below which guides stop being shown. (Range: 5.0 to 4000.0)
  \*/
  viewThreshold: number

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Separates an overridden master page item from its master page.
  \*/
  detach(): void

/\*\*

- Creates a duplicate Guide.
  \*/
  duplicate(): Guide

/\*\*

- Reads the label value stored for the specified key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves the object specifier and returns object references in an array.
  \*/
  getElements(): Guide[]

/\*\*

- Stores the specified value as the label for the given key.
- @param key Key to write.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Moves the guide elsewhere. Note: Either to or by is required; when both are supplied, to takes precedence.
- @param to New guide coordinates as [x, y].
- @param by Offset from the current guide coordinates as [x, y].
  \*/
  move(to: (number | string)[], by: (number | string)[]): void

/\*\*

- Places an overridden master page item onto the document page as a new object.
- @param destinationPage Document page containing the master page item to override.
  \*/
  override(destinationPage: Page): any

/\*\*

- Deletes this Guide.
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

- Clears the override from a master page item that was previously overridden.
  \*/
  removeOverride(): void

/\*\*

- Converts the requested location into coordinates in the specified coordinate system.
- @param location Requested location. Valid forms include Long Integers, AnchorPoint enumerators, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Array of 2 Reals, or Array of Arrays of 2 Reals.
- @param in\_ Coordinate space to use.
- @param consideringRulerUnits When true, ruler locations are interpreted in ruler units instead of points. The default value is false. This applies only when the reference point is page-relative.
  \*/
  resolve(location: any, in\_: CoordinateSpaces, consideringRulerUnits?: boolean): any

/\*\*

- Selects this object.
- @param existingSelection Selection state for the Guide relative to objects already selected.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Creates source text that can be executed to obtain this Guide.
  \*/
  toSource(): string

/\*\*

- Provides the object specifier.
  \*/
  toSpecifier(): string

/\*\*

- Gets page item transformation values.
- @param in* Coordinate space to use
  \*/
  transformValuesOf(in*: CoordinateSpaces): TransformationMatrix[]
  }

/\*\*

- Guide collection.
  \*/
  declare class Guides {
  /\*\*
  - Count of objects in the collection.
    \*/
    readonly length: number

/\*\*

- Provides the Guide at the specified index.
- @param index Index to read.
  \*/
  [index: number]: Guide

/\*\*

- Creates a guide.
- @param layer Layer where the guide is created.
- @param withProperties Initial property values for the new Guide
  \*/
  add(layer: Layer, withProperties: object): Guide

/\*\*

- Provides any Guide from the collection.
  \*/
  anyItem(): Guide

/\*\*

- Shows how many elements are in the Guide.
  \*/
  count(): number

/\*\*

- Provides all Guide entries in the collection.
  \*/
  everyItem(): Guide[]

/\*\*

- Provides the collection's first Guide.
  \*/
  firstItem(): Guide

/\*\*

- Finds a Guide by the supplied index or name.
- @param index Index or name identifying the item.
  \*/
  item(index: number | string): Guide

/\*\*

- Finds the Guide with the supplied ID.
- @param id ID to locate.
  \*/
  itemByID(id: number): Guide

/\*\*

- Finds the Guide identified by name.
- @param name Name used to locate the item.
  \*/
  itemByName(name: string): Guide

/\*\*

- Provides the Guides covered by the requested range.
- @param from Guide, index, or name that starts the range.
- @param to Guide, index, or name that ends the range.
  \*/
  itemByRange(from: Guide | number | string, to: Guide | number | string): Guide[]

/\*\*

- Provides the collection's final Guide.
  \*/
  lastItem(): Guide

/\*\*

- Provides the Guide positioned in the middle of the collection.
  \*/
  middleItem(): Guide

/\*\*

- Provides the Guide immediately after the specified Guide in collection order.
- @param obj Guide that precedes the requested Guide.
  \*/
  nextItem(obj: Guide): Guide

/\*\*

- Provides the Guide positioned before the specified index.
- @param obj Index for the Guide that follows the requested Guide.
  \*/
  previousItem(obj: Guide): Guide

/\*\*

- Creates source text that can be executed to obtain this Guide.
  \*/
  toSource(): string
  }

/\*\*

- Preferences controlling text wrap.
  \*/
  declare class TextWrapPreference extends Preference {
  /\*\*
  - When true, text wraps on a master spread affect only that spread, not pages using that master spread.
    \*/
    applyToMasterPageOnly: boolean

/\*\*

- Text-wrap contour settings, valid only for contour text wrap type.
  \*/
  readonly contourOptions: ContourOption

/\*\*

- When true, reverses the text wrap.
  \*/
  inverse: boolean

/\*\*

- Path collection.
  \*/
  readonly paths: Paths

/\*\*

- Preferences object collection.
  \*/
  readonly preferences: Preferences

/\*\*

- Text wrap mode.
  \*/
  textWrapMode: TextWrapModes

/\*\*

- Minimum gap between text and the wrapped object's edges. Text wrap type determines the offset format: jump object text wrap uses 2 values in [top, bottom]; next column text wrap or contour uses one value; bounding box text wrap uses 4 values in [top, left, bottom, right].
  \*/
  textWrapOffset: number | number[] | NothingEnum

/\*\*

- Options for the side used by text wrap.
  \*/
  textWrapSide: TextWrapSideOptions

/\*\*

- True after the user has explicitly changed the text wrap path.
  \*/
  readonly userModifiedWrap: boolean
  }

/\*\*

- Contour option settings.
  \*/
  declare class ContourOption extends Preference {
  /\*\*
  - Names of alpha channels stored in the graphic.
    \*/
    readonly alphaChannelPathNames: string[]

/\*\*

- Photoshop path or alpha channel used by this contour option; valid only for photoshop path or alpha channel contour options.
  \*/
  contourPathName: string

/\*\*

- Contour type.
  \*/
  contourType: ContourOptionsTypes

/\*\*

- When true, adds interior clipping paths inside the surrounding clipping path. Note: Valid only for alpha channel or detect edges clipping type.
  \*/
  includeInsideEdges: boolean

/\*\*

- Names of clipping paths stored in the graphic.
  \*/
  readonly photoshopPathNames: string[]
  }

/\*\*

- Section object.
  \*/
  declare class Section {
  /\*\*
  - Alternate layout name for a page set.
    \*/
    alternateLayout: string

/\*\*

- Page count in the alternate layout section.
  \*/
  readonly alternateLayoutLength: number

/\*\*

- When true, numbering continues sequentially from the previous section.
  \*/
  continueNumbering: boolean

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique Section ID.
  \*/
  readonly id: number

/\*\*

- When true, places the specified prefix before section page numbers.
  \*/
  includeSectionPrefix: boolean

/\*\*

- Section position within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves successfully to valid objects.
  \*/
  readonly isValid: boolean
