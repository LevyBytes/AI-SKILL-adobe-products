# Indesign (part 34)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Returns transformation values for the page item.
- @param in* Coordinate space used for the values.
  \*/
  transformValuesOf(in*: CoordinateSpaces): TransformationMatrix[]
  }

/\*\*

- Collection wrapper for Spread objects.
  \*/
  declare class Spreads {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Spread at an index.
- @param index Index to retrieve.
  \*/
  [index: number]: Spread

/\*\*

- Adds a spread.
- @param at Placement for the spread, either relative to a reference object or within the document.
- @param reference Reference object; required when at requests before or after placement.
- @param withProperties Starting property map for the new Spread.
  \*/
  add(at?: LocationOptions, reference?: Spread | Document, withProperties?: object): Spread

/\*\*

- Chooses any Spread from this collection.
  \*/
  anyItem(): Spread

/\*\*

- Reports how many elements the Spread contains.
  \*/
  count(): number

/\*\*

- Retrieves all Spread entries from the collection.
  \*/
  everyItem(): Spread[]

/\*\*

- Retrieves the first Spread in the collection.
  \*/
  firstItem(): Spread

/\*\*

- Retrieves a Spread by index or name.
- @param index Index or name used for lookup.
  \*/
  item(index: number | string): Spread

/\*\*

- Retrieves a Spread by ID.
- @param id ID used for lookup.
  \*/
  itemByID(id: number): Spread

/\*\*

- Retrieves a Spread by name.
- @param name Name used for lookup.
  \*/
  itemByName(name: string): Spread

/\*\*

- Retrieves Spreads falling inside a range.
- @param from Spread, index, or name that starts the range.
- @param to Spread, index, or name that ends the range.
  \*/
  itemByRange(from: Spread | number | string, to: Spread | number | string): Spread[]

/\*\*

- Retrieves the final Spread in the collection.
  \*/
  lastItem(): Spread

/\*\*

- Retrieves the middle Spread in the collection.
  \*/
  middleItem(): Spread

/\*\*

- Retrieves the Spread immediately after the supplied Spread.
- @param obj Spread that precedes the requested one.
  \*/
  nextItem(obj: Spread): Spread

/\*\*

- Retrieves the Spread immediately before the supplied index.
- @param obj Index whose previous Spread is requested.
  \*/
  previousItem(obj: Spread): Spread

/\*\*

- Builds source text that would evaluate back to the Spread.
  \*/
  toSource(): string
  }

/\*\*

- Represents one page.
  \*/
  declare class Page {
  /\*\*
  - All Graphic entries contained by this Page.
    \*/
    readonly allGraphics: Graphic[]

/\*\*

- All PageItem entries contained by this Page.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- Alternate-layout Section that owns the page.
  \*/
  readonly appliedAlternateLayout: Section

/\*\*

- MasterSpread currently applied to the Page.
  \*/
  appliedMaster: MasterSpread | NothingEnum

/\*\*

- Section that owns this page.
  \*/
  readonly appliedSection: Section

/\*\*

- TrapPreset assigned to this page.
  \*/
  appliedTrapPreset: TrapPreset | string

/\*\*

- Page bounds in [y1, x1, y2, x2] form.
  \*/
  readonly bounds: (number | string)[]

/\*\*

- Button objects on the page.
  \*/
  readonly buttons: Buttons

/\*\*

- CheckBoxes on the page.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- ComboBoxes on the page.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- Page's sequential position within the document.
  \*/
  readonly documentOffset: number

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- EventListeners attached to the page.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events associated with the page.
  \*/
  readonly events: Events

/\*\*

- FormFields on the page.
  \*/
  readonly formFields: FormFields

/\*\*

- GraphicLines on the page.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Default grid settings, covering named grids, layout grids, and frame/story grids.
  \*/
  readonly gridData: GridDataInformation

/\*\*

- Groups on the page.
  \*/
  readonly groups: Groups

/\*\*

- Guides on the page.
  \*/
  readonly guides: Guides

/\*\*

- Unique Page ID.
  \*/
  readonly id: number

/\*\*

- Page index within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Free-form string label value.
  \*/
  label: string

/\*\*

- Layout rule setting.
  \*/
  layoutRule: LayoutRuleOptions

/\*\*

- ListBoxes on the page.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- MarginPreference settings for the page.
  \*/
  readonly marginPreferences: MarginPreference

/\*\*

- Master-originated items still attached to the applied master and not yet overridden or detached.
  \*/
  readonly masterPageItems: PageItem[] | Guides | Graphics | Movies | Sounds

/\*\*

- Transform applied to the master page before applying it to Page.
  \*/
  masterPageTransform: TransformationMatrix

/\*\*

- MultiStateObjects on the page.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- Page name.
  \*/
  readonly name: string

/\*\*

- Optional HTML5 pagination page; obsolete after CS6.
  \*/
  optionalPage: boolean

/\*\*

- Ellipse objects on the page.
  \*/
  readonly ovals: Ovals

/\*\*

- Page color label, supplied as three 0 to 255 doubles for R, G, and B, or as a UI color.
  \*/
  pageColor: [number, number, number] | UIColors | PageColorOptions

/\*\*

- PageItems gives access to every contained page item, even when their concrete kinds differ.
  \*/
  readonly pageItems: PageItems

/\*\*

- Parent object for this Page, either a Spread or MasterSpread.
  \*/
  readonly parent: any

/\*\*

- Polygons on the page.
  \*/
  readonly polygons: Polygons

/\*\*

- Preferences objects attached to the page.
  \*/
  readonly preferences: Preferences

/\*\*

- Use this object slot to assign multiple properties in one operation.
  \*/
  properties: object

/\*\*

- RadioButtons on the page.
  \*/
  readonly radioButtons: RadioButtons

/\*\*

- Rectangles on the page.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Binding-spine side where the page is positioned inside the spread.
  \*/
  readonly side: PageSideOptions

/\*\*

- SignatureFields on the page.
  \*/
  readonly signatureFields: SignatureFields

/\*\*

- SnapshotBlendingModes setting.
  \*/
  snapshotBlendingMode: SnapshotBlendingModes

/\*\*

- SplineItems available through this collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- PDF tab-key focus order for form fields.
  \*/
  tabOrder: Button[] | CheckBoxes | ComboBoxes | ListBoxes | RadioButtons | TextBoxes | SignatureFields

/\*\*

- TextBoxes on the page.
  \*/
  readonly textBoxes: TextBoxes

/\*\*

- TextFrames on the page.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Registers an event listener.
- @param eventType Event type to listen for.
- @param handler Handler used for the event.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Updates an existing layout using new page size, bleed, and margin values. The first argument is a plain object whose key-value pairs name affected properties. Allowed keys: width, height, bleedInside, bleedTop, bleedOutside, bleedBottom, leftMargin, topMargin, rightMargin, bottomMargin. Values may be decimal numbers measured in Pt or strings containing measurements such as '1 in'. You only need to supply properties that should change. On individual pages, unlike whole-document adjustment, bleed edits do not take effect. E.g. - app.activeDocument.adjustLayout({width:'600px', leftMargin: '1in'}), app.activeDocument.adjustLayout({rightMargin:'1in'}, app.activeDocument.spreads[0].pages), app.activeDocument.spreads[0].pages[0].adjustLayout({width:'400px', leftMargin: '10px'})
- @param adoptTo Changed values; see function definition for details.
- @param affectedPages Page collection affected by the call. Optional, and ignored when called from Page.
  \*/
  adjustLayout(adoptTo: object, affectedPages: Page[]): void

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

- Removes every layout snapshot for this Page.
  \*/
  deleteAllLayoutSnapshots(): void

/\*\*

- Removes the layout snapshot for the current Page size and shape.
  \*/
  deleteLayoutSnapshot(): void

/\*\*

- Separates an overridden master item from its source master page.
  \*/
  detach(): void

/\*\*

- Creates a duplicate page.
- @param to Position for the duplicate page, either against a reference object or within the document or spread.
- @param reference Reference object; required when the to value requests before or after placement.
  \*/
  duplicate(to?: LocationOptions, reference?: Page | Spread): Page

/\*\*

- Reads the label value stored for a key.
- @param key Key to look up.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): Page[]

/\*\*

- Writes a label value for the supplied key.
- @param key Key whose label entry is set.
- @param value Value stored for that key.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Relocates the page.
- @param to New page position relative to a reference object or within the document or spread.
- @param reference Reference object; required when to specifies before or after placement.
- @param binding Binding-spine location used in spreads.
  \*/
  move(to?: LocationOptions, reference?: Page | Spread, binding?: BindingOptions): Page

/\*\*

- Imports a file onto the page.
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

- Changes the page item's bounding box.
- @param in\_ Bounding box to resize. Accepts a CoordinateSpaces enumerator or an ordered array containing coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
- @param opposingCorners New box corners, expressed in that coordinate space.
  \*/
  reframe(in\_: any, opposingCorners: any[]): void

/\*\*

- Removes this Page.
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

- Resizes the page item.
- @param in\_ Bounding box to resize. Accepts CoordinateSpaces, BoundingBoxLimits, or an ordered array containing coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
- @param from Transform origin. Legal specifications include bounding-box-relative anchor | {anchor | {x,y}, bounds kind [, coordinate space]}; coordinate-space-relative {x,y} | {{x,y}[, coordinate space]}; and layout-window-ruler-relative {{x,y}, page index | bounds kind}. Accepts an Array of 2 Reals, an AnchorPoint enumerator, or arrays/enumerators using CoordinateSpaces, AnchorPoint, BoundingBoxLimits, or Long Integers.
- @param by Rule describing how the supplied values affect current dimensions.
- @param values Width and height inputs. Accepted dimension forms are {x, y [, coordinate space]}, {x, resize constraint [, coordinate space]}, or {resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space controls only the length unit for x and y; for the 'current dimensions times' resize method, coordinate space is ignored.
- @param resizeIndividually When false and several page items are targeted, the new dimensions are reached by moving individual items instead of resizing them.
- @param consideringRulerUnits When true, ruler locations use ruler units instead of points. False is the default. This only applies to page-relative reference points.
  \*/
  resize(in\_: any, from: any, by: ResizeMethods, values: number[] | ResizeConstraints | CoordinateSpaces, resizeIndividually?: boolean, consideringRulerUnits?: boolean): void

/\*\*

- Resolves a location to coordinates in the requested coordinate system.
- @param location Requested location. Accepts an Array of 2 Reals, an AnchorPoint enumerator, or arrays/enumerators using CoordinateSpaces, AnchorPoint, BoundingBoxLimits, or Long Integers.
- @param in\_ Coordinate space used for resolution.
- @param consideringRulerUnits When true, ruler locations use ruler units instead of points. False is the default. This only applies to page-relative reference points.
  \*/
  resolve(location: any, in\_: CoordinateSpaces, consideringRulerUnits?: boolean): any

/\*\*

- Selects this object.
- @param existingSelection Selection handling for this Page relative to objects already selected.
  \*/
  select(existingSelection?: SelectionOptions): void

/\*\*

- Replaces XML element contents with data imported from a file.
- @param using Path for the import file.
- @param relativeBasePath Base path for resolving relative paths.
  \*/
  setContent(using: string, relativeBasePath: string): PageItem

/\*\*

- Creates a layout snapshot for the current Page size and shape.
  \*/
  snapshotCurrentLayout(): void

/\*\*

- Builds source text that would evaluate back to the Page.
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

/\*\*

- Returns transformation values for the page item.
- @param in* Coordinate space used for the values.
  \*/
  transformValuesOf(in*: CoordinateSpaces): TransformationMatrix[]
  }

/\*\*

- Collection wrapper for Page objects.
  \*/
  declare class Pages {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Looks up a Page at an index.
- @param index Index to retrieve.
  \*/
  [index: number]: Page

/\*\*

- Adds a page.
- @param at Where the added page goes, either relative to a reference object or within the document or spread.
- @param reference Reference object; required when the at value requests before or after placement.
- @param withProperties Starting Page property map.
  \*/
  add(at?: LocationOptions, reference?: Page | Spread | MasterSpread | Document, withProperties?: object): Page

/\*\*

- Chooses any Page from this collection.
  \*/
  anyItem(): Page

/\*\*

- Reports how many elements the Page contains.
  \*/
  count(): number

/\*\*

- Retrieves all Page entries from the collection.
  \*/
  everyItem(): Page[]

/\*\*

- Retrieves the first Page in the collection.
  \*/
  firstItem(): Page

/\*\*

- Retrieves a Page by index or name.
- @param index Index or name used for lookup.
  \*/
  item(index: number | string): Page

/\*\*

- Retrieves a Page by ID.
- @param id ID used for lookup.
  \*/
  itemByID(id: number): Page

/\*\*

- Retrieves a Page by name.
- @param name Name used for lookup.
  \*/
  itemByName(name: string): Page

/\*\*

- Retrieves Pages falling inside a range.
- @param from Page, index, or name that starts the range.
- @param to Page, index, or name that ends the range.
  \*/
  itemByRange(from: Page | number | string, to: Page | number | string): Page[]

/\*\*

- Retrieves the final Page in the collection.
  \*/
  lastItem(): Page

/\*\*

- Retrieves the middle Page in the collection.
  \*/
  middleItem(): Page

/\*\*

- Retrieves the Page immediately after the supplied Page.
- @param obj Page that precedes the requested one.
  \*/
  nextItem(obj: Page): Page

/\*\*

- Retrieves the Page immediately before the supplied index.
- @param obj Index whose previous Page is requested.
  \*/
  previousItem(obj: Page): Page

/\*\*

- Builds source text that would evaluate back to the Page.
  \*/
  toSource(): string
  }

/\*\*

- Represents a master spread.
  \*/
  declare class MasterSpread {
  /\*\*
  - All Graphic entries contained by this MasterSpread.
    \*/
    readonly allGraphics: Graphic[]

/\*\*

- All PageItem entries contained by this MasterSpread.
  \*/
  readonly allPageItems: PageItem[]

/\*\*

- MasterSpread applied to this MasterSpread.
  \*/
  appliedMaster: MasterSpread | NothingEnum

/\*\*

- Base name of the master spread.
  \*/
  baseName: string

/\*\*

- Button objects on the master spread.
  \*/
  readonly buttons: Buttons

/\*\*

- CheckBoxes on the master spread.
  \*/
  readonly checkBoxes: CheckBoxes

/\*\*

- ComboBoxes on the master spread.
  \*/
  readonly comboBoxes: ComboBoxes

/\*\*

- EndnoteTextFrames on the master spread.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- EventListeners attached to the master spread.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Events associated with the master spread.
  \*/
  readonly events: Events

/\*\*

- FormFields on the master spread.
  \*/
  readonly formFields: FormFields

/\*\*

- GraphicLines on the master spread.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Groups on the master spread.
  \*/
  readonly groups: Groups

/\*\*

- Guides on the master spread.
  \*/
  readonly guides: Guides

/\*\*

- Unique MasterSpread ID.
  \*/
  readonly id: number

/\*\*

- IDML component name for the MasterSpread.
  \*/
  idmlComponentName: string

/\*\*

- MasterSpread index within its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Free-form string label value.
  \*/
  label: string

/\*\*

- ListBoxes on the master spread.
  \*/
  readonly listBoxes: ListBoxes

/\*\*

- MultiStateObjects on the master spread.
  \*/
  readonly multiStateObjects: MultiStateObjects

/\*\*

- MasterSpread name.
  \*/
  readonly name: string

/\*\*

- Prefix portion of the master spread name.
  \*/
  namePrefix: string

/\*\*

- Ellipse objects on the master spread.
  \*/
  readonly ovals: Ovals

/\*\*

- MasterSpread color label, supplied as three 0 to 255 doubles for R, G, and B, or as a UI color.
  \*/
  pageColor: [number, number, number] | UIColors | PageColorOptions

/\*\*

- PageItems gives access to every contained page item, even when their concrete kinds differ.
  \*/
  readonly pageItems: PageItems
