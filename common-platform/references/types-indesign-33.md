# Indesign (part 33)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Builds source text that evaluates back to this TimingGroup.
  \*/
  toSource(): string
  }

/\*\*

- Represents a timing target.
  \*/
  declare class TimingTarget {
  /\*\*
  - Delay, in seconds, for one target or grouped targets after the preceding group finishes.
    \*/
    delaySeconds: number

/\*\*

- Page item target for an animation, media item, or mso.
  \*/
  dynamicTarget: PageItem | Graphic | Behavior | MediaItem

/\*\*

- EventListeners collection reference.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection reference.
  \*/
  readonly events: Events

/\*\*

- Position of this TimingTarget inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Parent object for this TimingTarget, a TimingGroup.
  \*/
  readonly parent: TimingGroup

/\*\*

- Lets multiple properties be set together.
  \*/
  properties: object

/\*\*

- True reverses animation on rolloff; this is valid only for a self rolloff trigger event.
  \*/
  reverseAnimation: boolean

/\*\*

- Attaches an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Resolves this object specifier into object reference entries.
  \*/
  getElements(): TimingTarget[]

/\*\*

- Moves the timing group or target to the requested location.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: required when to targets a before or after position. .
  \*/
  move(to: LocationOptions, reference: TimingGroup | TimingTarget | TimingList): TimingTarget

/\*\*

- Deletes this TimingTarget.
  \*/
  remove(): void

/\*\*

- Detaches an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to this TimingTarget.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string

/\*\*

- Removes the target from this group and places it at the end of this timing list.
  \*/
  unlink(): void
  }

/\*\*

- Collection wrapper for timing targets.
  \*/
  declare class TimingTargets {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the TimingTarget at the given index.
- @param index Numeric position.
  \*/
  [index: number]: TimingTarget

/\*\*

- Adds a target item.
- @param dynamicTarget Page item target for an animation, media item, or mso.
- @param delaySeconds Delay time in seconds for a target.
- @param withProperties Property seed values for a TimingTarget being created.
  \*/
  add(dynamicTarget: PageItem | Graphic | Behavior | MediaItem, delaySeconds?: number, withProperties?: object): TimingTarget

/\*\*

- Selects an arbitrary TimingTarget from the collection.
  \*/
  anyItem(): TimingTarget

/\*\*

- Reports how many TimingTarget elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all TimingTarget entries.
  \*/
  everyItem(): TimingTarget[]

/\*\*

- Gets the leading TimingTarget in the collection.
  \*/
  firstItem(): TimingTarget

/\*\*

- Finds a TimingTarget by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): TimingTarget

/\*\*

- Gets TimingTargets spanning the from and to endpoints.
- @param from Starting TimingTarget, index, or name.
- @param to Ending TimingTarget, index, or name.
  \*/
  itemByRange(from: TimingTarget | number | string, to: TimingTarget | number | string): TimingTarget[]

/\*\*

- Gets the final TimingTarget in the collection.
  \*/
  lastItem(): TimingTarget

/\*\*

- Gets the central TimingTarget in the collection.
  \*/
  middleItem(): TimingTarget

/\*\*

- Gets the TimingTarget whose index comes after the supplied TimingTarget.
- @param obj TimingTarget before the desired entry.
  \*/
  nextItem(obj: TimingTarget): TimingTarget

/\*\*

- Resolves the TimingTarget positioned just before the supplied index.
- @param obj Index for the TimingTarget after the requested one.
  \*/
  previousItem(obj: TimingTarget): TimingTarget

/\*\*

- Builds source text that evaluates back to this TimingTarget.
  \*/
  toSource(): string
  }

/\*\*

- Represents a Layer.
  \*/
  declare class Layer {
  /\*\*
  - All graphics contained in the Layer.
    \*/
    readonly allGraphics: Graphic[]

/\*\*

- All page items contained in the Layer.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- Buttons collection reference.
  \*/
  readonly buttons: Buttons

/\*\*

- CheckBoxes collection reference.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- ComboBoxes collection reference.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- EndnoteTextFrames collection reference.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- EventListeners collection reference.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection reference.
  \*/
  readonly events: Events

/\*\*

- FormFields collection reference.
  \*/
  readonly formFields: FormFields

/\*\*

- GraphicLines collection reference.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Groups collection reference.
  \*/
  readonly groups: Groups

/\*\*

- Guides collection reference.
  \*/
  readonly guides: Guides

/\*\*

- Unique ID value for the Layer.
  \*/
  readonly id: number

/\*\*

- When true, hidden-layer objects keep their text wrap from influencing text on other layers.
  \*/
  ignoreWrap: boolean

/\*\*

- Position of this Layer inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued label property.
  \*/
  label: string

/\*\*

- Layer color can be a three-number array using 0 to 255 R, G, and B components, or a UI color.
  \*/
  layerColor: [number, number, number] | UIColors

/\*\*

- ListBoxes collection reference.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- When true, guide positions on the layer cannot be changed.
  \*/
  lockGuides: boolean

/\*\*

- True means the Layer is locked.
  \*/
  locked: boolean

/\*\*

- MultiStateObjects collection reference.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Layer name value.
  \*/
  name: string

/\*\*

- Ovals collection reference.
  \*/
  readonly ovals: Ovals

/\*\*

- PageItems lets callers process every page item in a container, such as a document, page, or group, without filtering by item type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Parent object for this Layer, a Document.
  \*/
  readonly parent: Document

/\*\*

- Polygons collection reference.
  \*/
  readonly polygons: Polygons

/\*\*

- True means the layer prints.
  \*/
  printable: boolean

/\*\*

- Lets multiple properties be set together.
  \*/
  properties: object

/\*\*

- RadioButtons collection reference.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangles collection reference.
  \*/
  readonly rectangles: Rectangles

/\*\*

- True shows guides on the layer.
  \*/
  showGuides: boolean

/\*\*

- SignatureFields collection reference.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- SplineItems collection reference.
  \*/
  readonly splineItems: SplineItems

/\*\*

- TextBoxes collection reference.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- TextFrames collection reference.
  \*/
  readonly textFrames: TextFrames

/\*\*

- True means the Layer is visible.
  \*/
  visible: boolean

/\*\*

- Attaches an event listener.
- @param eventType Event type value.
- @param handler Event handler value.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Creates a duplicate Layer.
  \*/
  duplicate(): Layer

/\*\*

- Reads the label value for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Resolves this object specifier into object reference entries.
  \*/
  getElements(): Layer[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Merges this layer with other layer entries.
- @param with* Layer entries used for the merge.
  \*/
  merge(with*: Layer[]): Layer

/\*\*

- Moves the Layer to the requested location.
- @param to Location relative to the reference object or inside the containing object.
- @param reference Reference object. Note: required when to specifies before or after.
  \*/
  move(to: LocationOptions, reference: Layer): Layer

/\*\*

- Deletes this Layer.
  \*/
  remove(): void

/\*\*

- Detaches an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds source text that evaluates back to this Layer.
  \*/
  toSource(): string

/\*\*

- Gets this object's specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for layers.
  \*/
  declare class Layers {
  /\*\*
  - Total objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Accesses the Layer at the given index.
- @param index Numeric position.
  \*/
  [index: number]: Layer

/\*\*

- Adds a Layer instance.
- @param withProperties Property values assigned to the new Layer.
  \*/
  add(withProperties: object): Layer

/\*\*

- Selects an arbitrary Layer from the collection.
  \*/
  anyItem(): Layer

/\*\*

- Reports how many Layer elements exist.
  \*/
  count(): number

/\*\*

- Expands the collection to all Layer entries.
  \*/
  everyItem(): Layer[]

/\*\*

- Gets the leading Layer in the collection.
  \*/
  firstItem(): Layer

/\*\*

- Finds a Layer by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): Layer

/\*\*

- Finds a Layer by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Layer

/\*\*

- Finds a Layer by name.
- @param name Name value.
  \*/
  itemByName(name: string): Layer

/\*\*

- Gets Layers spanning the from and to endpoints.
- @param from Starting Layer, index, or name.
- @param to Ending Layer, index, or name.
  \*/
  itemByRange(from: Layer | number | string, to: Layer | number | string): Layer[]

/\*\*

- Gets the final Layer in the collection.
  \*/
  lastItem(): Layer

/\*\*

- Gets the central Layer in the collection.
  \*/
  middleItem(): Layer

/\*\*

- Gets the Layer whose index comes after the supplied Layer.
- @param obj Layer before the desired entry.
  \*/
  nextItem(obj: Layer): Layer

/\*\*

- Resolves the Layer positioned just before the supplied index.
- @param obj Index for the Layer after the requested one.
  \*/
  previousItem(obj: Layer): Layer

/\*\*

- Builds source text that evaluates back to this Layer.
  \*/
  toSource(): string
  }

/\*\*

- Represents a Spread.
  \*/
  declare class Spread {
  /\*\*
  - All graphics contained in the Spread.
    \*/
    readonly allGraphics: Graphic[]

/\*\*

- All page items contained in the Spread.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- When true, added pages are constrained so the spread contains no more than two pages. When false, pages can be added or moved into existing spreads. For override details, see preserve layout when shuffling.
  \*/
  allowPageShuffle: boolean

/\*\*

- MasterSpread applied to this Spread.
  \*/
  appliedMaster: MasterSpread | NothingEnum

/\*\*

- Buttons collection reference.
  \*/
  readonly buttons: Buttons

/\*\*

- CheckBoxes collection reference.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- ComboBoxes collection reference.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- EndnoteTextFrames collection reference.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- EventListeners collection reference.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events collection reference.
  \*/
  readonly events: Events

/\*\*

- Spread transparency flattener override preference.
  \*/
  flattenerOverride: SpreadFlattenerLevel

/\*\*

- FlattenerPreference settings reference.
  \*/
  readonly flattenerPreferences: FlattenerPreference

/\*\*

- FormFields collection reference.
  \*/
  readonly formFields: FormFields

/\*\*

- GraphicLines collection reference.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Groups collection reference.
  \*/
  readonly groups: Groups

/\*\*

- Guides collection reference.
  \*/
  readonly guides: Guides

/\*\*

- Unique ID value for the Spread.
  \*/
  readonly id: number

/\*\*

- IDML component name for the Spread.
  \*/
  idmlComponentName: string

/\*\*

- Position of this Spread inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued label property.
  \*/
  label: string

/\*\*

- ListBoxes collection reference.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- MultiStateObjects entries for this object.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Spread label exposed through the name alias.
  \*/
  name: string

/\*\*

- Ellipse objects available on the spread.
  \*/
  readonly ovals: Ovals

/\*\*

- PageItems gives access to every contained page item, even when their concrete kinds differ.
  \*/
  readonly pageItems: PageItems

/\*\*

- Direction setting used by the page transition.
  \*/
  pageTransitionDirection: PageTransitionDirectionOptions

/\*\*

- Duration setting used by the page transition.
  \*/
  pageTransitionDuration: PageTransitionDurationOptions

/\*\*

- Transition kind selected for the page.
  \*/
  pageTransitionType: PageTransitionTypeOptions

/\*\*

- Pages associated with the spread.
  \*/
  readonly pages: Pages

/\*\*

- Owning Document for this Spread.
  \*/
  readonly parent: Document

/\*\*

- Polygon objects available on the spread.
  \*/
  readonly polygons: Polygons

/\*\*

- Preferences objects attached to this spread.
  \*/
  readonly preferences: Preferences

/\*\*

- Use this object slot to assign multiple properties in one operation.
  \*/
  properties: object

/\*\*

- RadioButtons held by this spread.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangle objects available on the spread.
  \*/
  readonly rectangles: Rectangles

/\*\*

- When true, document pages in the spread show items from the master page.
  \*/
  showMasterItems: boolean

/\*\*

- SignatureFields held by this spread.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- SplineItems available through this collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- TextBoxes held by this spread.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- TextFrames held by this spread.
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
  duplicate(to?: LocationOptions, reference?: Spread | Document | MasterSpread): any

/\*\*

- Reads the label value stored for a key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): Spread[]

/\*\*

- Writes a label value for the supplied key.
- @param key Key whose label entry is set.
- @param value Value stored for that key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates the spread.
- @param to New position for the spread, either relative to a reference object or within the document.
- @param reference Reference object; required when to requests before or after placement.
  \*/
  move(to?: LocationOptions, reference?: Spread | Page | Document): Spread

/\*\*

- Imports a file onto the spread.
- @param fileName File that will be placed.
- @param placePoint Point used for placement.
- @param destinationLayer Layer receiving the file.
- @param showingOptions Show the import options dialog.
- @param autoflowing Autoflow placed text when enabled.
- @param withProperties Starting property values for the placed object or objects.
  \*/
  place(fileName: File, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): any[]

/\*\*

- Deprecated: use contentPlace method. Original behavior creates and places a linked story in the target.
- @param parentStory Story used as the source for placement and linking.
- @param placePoint Point used for placement.
- @param destinationLayer Layer receiving the story.
- @param showingOptions Open link-options controls.
  \*/
  placeAndLink(parentStory: Story, placePoint: (number | string)[], destinationLayer: Layer, showingOptions?: boolean): Story

/\*\*

- Places an XML element on a page; if the point sits over an existing page item, the XML element goes into that item.
- @param using XML element to place.
- @param placePoint Placement point for the object, written as [x, y].
- @param autoflowing When true, placed text autoflows.
  \*/
  placeXML(using: XMLElement, placePoint: (number | string)[], autoflowing?: boolean): PageItem

/\*\*

- Removes this Spread.
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

- Clears an override from a master page item that had been overridden.
  \*/
  removeOverride(): void

/\*\*

- Resolves a location to coordinates in the requested coordinate system.
- @param location Requested location. Accepts an Array of 2 Reals, an AnchorPoint enumerator, or arrays/enumerators using CoordinateSpaces, AnchorPoint, BoundingBoxLimits, or Long Integers.
- @param in\_ Coordinate space used for resolution.
- @param consideringRulerUnits When true, ruler locations use ruler units instead of points. False is the default. This only applies to page-relative reference points.
  \*/
  resolve(location: any, in\_: CoordinateSpaces, consideringRulerUnits?: boolean): any

/\*\*

- Selects this object.
- @param existingSelection Selection handling for this Spread relative to objects already selected.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Replaces XML element contents with data imported from a file.
- @param using Path for the import file.
- @param relativeBasePath Base path for resolving relative paths.
  \*/
  setContent(using: string, relativeBasePath: string): PageItem

/\*\*

- Builds source text that would evaluate back to the Spread.
  \*/
  toSource(): string

/\*\*

- Returns the object's specifier string.
  \*/
  toSpecifier(): string

/\*\*

- Applies a transformation to the page item.
- @param in\_ Coordinate space used for the operation.
- @param from Temporary origin for the transform. Accepts an Array of 2 Reals, an AnchorPoint enumerator, or arrays/enumerators using CoordinateSpaces, AnchorPoint, BoundingBoxLimits, or Long Integers.
- @param withMatrix Matrix used for the transformation.
- @param replacingCurrent Transform components to replace; with this optional value, the target receives new values.Without it, the matrix is concatenated with the target's current transform so both effects combine.
- @param consideringRulerUnits When true, a ruler-based origin uses ruler units rather than points. False is the default. This only applies to page-relative reference points.
  \*/
  transform(in\_: CoordinateSpaces, from: any, withMatrix: [number, number, number, number, number, number] | TransformationMatrix, replacingCurrent: MatrixContent | MatrixContent[] | number, consideringRulerUnits?: boolean): void
