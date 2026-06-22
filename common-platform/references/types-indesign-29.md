# Indesign (part 29)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Holds goto URL behavior objects.
  \*/
  readonly gotoURLBehaviors: GotoURLBehaviors

/\*\*

- Holds graphic line items.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Holds group items.
  \*/
  readonly groups: Groups

/\*\*

- When true, the exported PDF keeps the form field/push button hidden until a trigger fires.
  \*/
  hiddenUntilTriggered: boolean

/\*\*

- Bitmap images are available here across formats such as TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- Holds movie behavior objects.
  \*/
  readonly movieBehaviors: MovieBehaviors

/\*\*

- Holds open file behavior objects.
  \*/
  readonly openFileBehaviors: OpenFileBehaviors

/\*\*

- Holds ellipse items.
  \*/
  readonly ovals: Ovals

/\*\*

- Holds PDF file items.
  \*/
  readonly pdfs: PDFs

/\*\*

- Holds PICT graphics.
  \*/
  readonly picts: PICTs

/\*\*

- Holds polygon items.
  \*/
  readonly polygons: Polygons

/\*\*

- Holds print form behavior objects.
  \*/
  readonly printFormBehaviors: PrintFormBehaviors

/\*\*

- When true, the form field/push button prints in the exported PDF.
  \*/
  printableInPdf: boolean

/\*\*

- When true, the exported PDF treats the form field as read only.
  \*/
  readOnly: boolean

/\*\*

- Holds rectangle items.
  \*/
  readonly rectangles: Rectangles

/\*\*

- When true, the exported PDF requires the form field.
  \*/
  required: boolean

/\*\*

- Holds show/hide fields behavior objects.
  \*/
  readonly showHideFieldsBehaviors: ShowHideFieldsBehaviors

/\*\*

- Holds sound behavior objects.
  \*/
  readonly soundBehaviors: SoundBehaviors

/\*\*

- Spline items are exposed through this collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Holds submit form behavior objects.
  \*/
  readonly submitFormBehaviors: SubmitFormBehaviors

/\*\*

- Holds text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Holds view zoom behavior objects.
  \*/
  readonly viewZoomBehaviors: ViewZoomBehaviors

/\*\*

- Holds WMF graphics.
  \*/
  readonly wmfs: WMFs

/\*\*

- Moves the SignatureField one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the SignatureField at the layer front, optionally ahead of a supplied item.
- @param reference Item to place this object in front of; it must share the same parent.
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Turns the button object into the page item for the active state; page items from other states are discarded.
  \*/
  convertToObject(): void

/\*\*

- Moves the SignatureField one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the SignatureField at the layer back, optionally behind a supplied item with the same parent.
- @param reference Item to place this object behind.
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- SignatureField objects are grouped in this collection.
  \*/
  declare class SignatureFields {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the SignatureField at a given index.
- @param index Index value.
  \*/
  [index: number]: SignatureField

/\*\*

- Creates a new SignatureField.
- @param layer Layer where the SignatureField is created.
- @param at Insertion position for the SignatureField, relative to the reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during creation.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): SignatureField

/\*\*

- Gets any SignatureField from the collection.
  \*/
  anyItem(): SignatureField

/\*\*

- Reports how many elements the SignatureField collection contains.
  \*/
  count(): number

/\*\*

- Gets all SignatureField objects in the collection.
  \*/
  everyItem(): SignatureField[]

/\*\*

- Gets the first SignatureField in the collection.
  \*/
  firstItem(): SignatureField

/\*\*

- Gets the SignatureField identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): SignatureField

/\*\*

- Gets the SignatureField identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): SignatureField

/\*\*

- Gets the SignatureField identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): SignatureField

/\*\*

- Gets SignatureFields from the requested range.
- @param from Starting SignatureField, index, or name for the range.
- @param to Ending SignatureField, index, or name for the range.
  \*/
  itemByRange(from: SignatureField | number | string, to: SignatureField | number | string): SignatureField[]

/\*\*

- Gets the final SignatureField in the collection.
  \*/
  lastItem(): SignatureField

/\*\*

- Gets the middle SignatureField in the collection.
  \*/
  middleItem(): SignatureField

/\*\*

- Gets the SignatureField positioned after the supplied SignatureField.
- @param obj SignatureField positioned immediately before the desired SignatureField.
  \*/
  nextItem(obj: SignatureField): SignatureField

/\*\*

- Gets the SignatureField whose index comes before the supplied index.
- @param obj Index belonging to the SignatureField after the desired SignatureField.
  \*/
  previousItem(obj: SignatureField): SignatureField

/\*\*

- Builds executable source text that resolves back to the SignatureField.
  \*/
  toSource(): string
  }

/\*\*

- Movie media item.
  \*/
  declare class Movie extends MediaItem {
  /\*\*
  - Name of the video controller skin.
    \*/
    controllerSkin: string

/\*\*

- Description text for the Movie.
  \*/
  description: string

/\*\*

- When true, the file is embedded in the PDF; when false, it remains linked to the PDF. Embedding movie files requires acrobat compatibility of acrobat 6 or higher.
  \*/
  embedInPDF: boolean

/\*\*

- File path, using colon delimiters on the Mac OS.
  \*/
  filePath: string | File

/\*\*

- When true, the movie opens in a new playback window; when false, playback happens inside the poster frame on the PDF document page.
  \*/
  floatingWindow: boolean

/\*\*

- Position for the floating window that presents the movie.
  \*/
  floatingWindowPosition: FloatingWindowPosition

/\*\*

- Size for the floating window that presents the movie.
  \*/
  floatingWindowSize: FloatingWindowSize

/\*\*

- Bitmap images are available here across formats such as TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- Source file for the link.
  \*/
  readonly itemLink: Link

/\*\*

- When true, the movie repeats indefinitely.
  \*/
  movieLoop: boolean

/\*\*

- Poster type used for the movie.
  \*/
  moviePosterType: MoviePosterTypes

/\*\*

- Holds navigation points.
  \*/
  readonly navigationPoints: NavigationPoints

/\*\*

- When true, the movie starts automatically when the user views the page containing its poster in the PDF document.
  \*/
  playOnPageTurn: boolean

/\*\*

- Poster file reference.
  \*/
  posterFile: string

/\*\*

- When true, the controller skin appears on mouse rollover.
  \*/
  showController: boolean

/\*\*

- When true, playback controls appear along the bottom of the movie display window.
  \*/
  showControls: boolean

/\*\*

- URL value.
  \*/
  url: string

/\*\*

- Moves the Movie one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the Movie at the layer front, optionally ahead of a supplied item.
- @param reference Item to place this object in front of; it must share the same parent.
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Moves the Movie one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the Movie at the layer back, optionally behind a supplied item with the same parent.
- @param reference Item to place this object behind.
  \*/
  sendToBack(reference: PageItem): void

/\*\*

- Checks that the supplied URL is valid and includes the requested movie file; this applies only to movies specified by URL rather than file path.
  \*/
  verifyURL(): boolean
  }

/\*\*

- Movie objects are grouped in this collection.
  \*/
  declare class Movies {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Movie at a given index.
- @param index Index value.
  \*/
  [index: number]: Movie

/\*\*

- Creates a new Movie.
- @param layer Layer where the Movie is created.
- @param at Insertion position for the Movie, relative to the reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during creation.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Movie

/\*\*

- Gets any Movie from the collection.
  \*/
  anyItem(): Movie

/\*\*

- Reports how many elements the Movie collection contains.
  \*/
  count(): number

/\*\*

- Gets all Movie objects in the collection.
  \*/
  everyItem(): Movie[]

/\*\*

- Gets the first Movie in the collection.
  \*/
  firstItem(): Movie

/\*\*

- Gets the Movie identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Movie

/\*\*

- Gets the Movie identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Movie

/\*\*

- Gets the Movie identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): Movie

/\*\*

- Gets Movies from the requested range.
- @param from Starting Movie, index, or name for the range.
- @param to Ending Movie, index, or name for the range.
  \*/
  itemByRange(from: Movie | number | string, to: Movie | number | string): Movie[]

/\*\*

- Gets the final Movie in the collection.
  \*/
  lastItem(): Movie

/\*\*

- Gets the middle Movie in the collection.
  \*/
  middleItem(): Movie

/\*\*

- Gets the Movie positioned after the supplied Movie.
- @param obj Movie positioned immediately before the desired Movie.
  \*/
  nextItem(obj: Movie): Movie

/\*\*

- Gets the Movie whose index comes before the supplied index.
- @param obj Index belonging to the Movie after the desired Movie.
  \*/
  previousItem(obj: Movie): Movie

/\*\*

- Builds executable source text that resolves back to the Movie.
  \*/
  toSource(): string
  }

/\*\*

- Navigation point.
  \*/
  declare class NavigationPoint {
  /\*\*
  - Holds event listeners.
    \*/
    readonly eventListeners: EventListeners

/\*\*

- Holds events.
  \*/
  readonly events: Events

/\*\*

- Internally generated unique identifier, read only.
  \*/
  readonly id: number

/\*\*

- Position of the NavigationPoint inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Display name shown in the UI.
  \*/
  name: string

/\*\*

- Parent Movie for the NavigationPoint.
  \*/
  readonly parent: Movie

/\*\*

- Property bundle for assigning multiple properties together.
  \*/
  properties: object

/\*\*

- Time value in seconds, rounded upward to hundredths (e.g., 3.115 becomes 3.12).
  \*/
  time: number

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): NavigationPoint[]

/\*\*

- Deletes this NavigationPoint.
  \*/
  remove(): void

/\*\*

- Removes an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the NavigationPoint.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- NavigationPoint objects are grouped in this collection.
  \*/
  declare class NavigationPoints {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the NavigationPoint at a given index.
- @param index Index value.
  \*/
  [index: number]: NavigationPoint

/\*\*

- Creates a new NavigationPoint.
- @param withProperties Property values applied during creation.
  \*/
  add(withProperties: object): NavigationPoint

/\*\*

- Gets any NavigationPoint from the collection.
  \*/
  anyItem(): NavigationPoint

/\*\*

- Reports how many elements the NavigationPoint collection contains.
  \*/
  count(): number

/\*\*

- Gets all NavigationPoint objects in the collection.
  \*/
  everyItem(): NavigationPoint[]

/\*\*

- Gets the first NavigationPoint in the collection.
  \*/
  firstItem(): NavigationPoint

/\*\*

- Gets the NavigationPoint identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): NavigationPoint

/\*\*

- Gets the NavigationPoint identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): NavigationPoint

/\*\*

- Gets the NavigationPoint identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): NavigationPoint

/\*\*

- Gets NavigationPoints from the requested range.
- @param from Starting NavigationPoint, index, or name for the range.
- @param to Ending NavigationPoint, index, or name for the range.
  \*/
  itemByRange(from: NavigationPoint | number | string, to: NavigationPoint | number | string): NavigationPoint[]

/\*\*

- Gets the final NavigationPoint in the collection.
  \*/
  lastItem(): NavigationPoint

/\*\*

- Gets the middle NavigationPoint in the collection.
  \*/
  middleItem(): NavigationPoint

/\*\*

- Gets the NavigationPoint positioned after the supplied NavigationPoint.
- @param obj NavigationPoint positioned immediately before the desired NavigationPoint.
  \*/
  nextItem(obj: NavigationPoint): NavigationPoint

/\*\*

- Gets the NavigationPoint whose index comes before the supplied index.
- @param obj Index belonging to the NavigationPoint after the desired NavigationPoint.
  \*/
  previousItem(obj: NavigationPoint): NavigationPoint

/\*\*

- Builds executable source text that resolves back to the NavigationPoint.
  \*/
  toSource(): string
  }

/\*\*

- Sound clip.
  \*/
  declare class Sound extends MediaItem {
  /\*\*
  - Description text for the Sound.
    \*/
    description: string

/\*\*

- When true, the sound poster is excluded from document printing.
  \*/
  doNotPrintPoster: boolean

/\*\*

- When true, the file is embedded in the PDF; when false, it remains linked to the PDF. Embedding movie files requires acrobat compatibility of acrobat 6 or higher.
  \*/
  embedInPDF: boolean

/\*\*

- File path, using colon delimiters on the Mac OS.
  \*/
  filePath: string | File

/\*\*

- Bitmap images are available here across formats such as TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- Source file for the link.
  \*/
  readonly itemLink: Link

/\*\*

- When true, the movie starts automatically when the user views the page containing its poster in the PDF document.
  \*/
  playOnPageTurn: boolean

/\*\*

- Poster file reference.
  \*/
  posterFile: string

/\*\*

- When true, the sound repeats indefinitely.
  \*/
  soundLoop: boolean

/\*\*

- Poster type used for the sound.
  \*/
  soundPosterType: SoundPosterTypes

/\*\*

- When true, sound stops playing as its page turns.
  \*/
  stopOnPageTurn: boolean

/\*\*

- Moves the Sound one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the Sound at the layer front, optionally ahead of a supplied item.
- @param reference Item to place this object in front of; it must share the same parent.
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Moves the Sound one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the Sound at the layer back, optionally behind a supplied item with the same parent.
- @param reference Item to place this object behind.
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- Sound objects are grouped in this collection.
  \*/
  declare class Sounds {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Sound at a given index.
- @param index Index value.
  \*/
  [index: number]: Sound

/\*\*

- Creates a new Sound.
- @param layer Layer where the Sound is created.
- @param at Insertion position for the Sound, relative to the reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during creation.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Sound

/\*\*

- Gets any Sound from the collection.
  \*/
  anyItem(): Sound

/\*\*

- Reports how many elements the Sound collection contains.
  \*/
  count(): number

/\*\*

- Gets all Sound objects in the collection.
  \*/
  everyItem(): Sound[]

/\*\*

- Gets the first Sound in the collection.
  \*/
  firstItem(): Sound

/\*\*

- Gets the Sound identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Sound

/\*\*

- Gets the Sound identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Sound

/\*\*

- Gets the Sound identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): Sound

/\*\*

- Gets Sounds from the requested range.
- @param from Starting Sound, index, or name for the range.
- @param to Ending Sound, index, or name for the range.
  \*/
  itemByRange(from: Sound | number | string, to: Sound | number | string): Sound[]

/\*\*

- Gets the final Sound in the collection.
  \*/
  lastItem(): Sound

/\*\*

- Gets the middle Sound in the collection.
  \*/
  middleItem(): Sound

/\*\*

- Gets the Sound positioned after the supplied Sound.
- @param obj Sound positioned immediately before the desired Sound.
  \*/
  nextItem(obj: Sound): Sound

/\*\*

- Gets the Sound whose index comes before the supplied index.
- @param obj Index belonging to the Sound after the desired Sound.
  \*/
  previousItem(obj: Sound): Sound

/\*\*

- Builds executable source text that resolves back to the Sound.
  \*/
  toSource(): string
  }

/\*\*

- Behavior object.
  \*/
  declare class Behavior {
  /\*\*
  - Event that triggers the behavior.
    \*/
    behaviorEvent: BehaviorEvents

/\*\*

- When true, the behavior is enabled.
  \*/
  enableBehavior: boolean

/\*\*

- Holds event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Holds events.
  \*/
  readonly events: Events

/\*\*

- Unique ID assigned to the Behavior.
  \*/
  readonly id: number

/\*\*

- Position of the Behavior inside its containing object.
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

- Name assigned to the Behavior.
  \*/
  readonly name: string

/\*\*

- Parent for the Behavior, either a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
  \*/
  readonly parent: any

/\*\*

- Property bundle for assigning multiple properties together.
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

- Reads the stored label for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Converts the object specifier into an array of object references.
  \*/
  getElements(): Behavior[]

/\*\*

- Assigns the label value associated with the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Deletes this Behavior.
  \*/
  remove(): void

/\*\*

- Removes an event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the Behavior.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Behavior objects are grouped in this collection.
  \*/
  declare class Behaviors {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Behavior at a given index.
- @param index Index value.
  \*/
  [index: number]: Behavior

/\*\*

- Gets any Behavior from the collection.
  \*/
  anyItem(): Behavior

/\*\*

- Reports how many elements the Behavior collection contains.
  \*/
  count(): number

/\*\*

- Gets all Behavior objects in the collection.
  \*/
  everyItem(): Behavior[]

/\*\*

- Gets the first Behavior in the collection.
  \*/
  firstItem(): Behavior

/\*\*

- Gets the Behavior identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Behavior

/\*\*

- Gets the Behavior identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Behavior

/\*\*

- Gets the Behavior identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): Behavior

/\*\*

- Gets Behaviors from the requested range.
- @param from Starting Behavior, index, or name for the range.
- @param to Ending Behavior, index, or name for the range.
  \*/
  itemByRange(from: Behavior | number | string, to: Behavior | number | string): Behavior[]

/\*\*

- Gets the final Behavior in the collection.
  \*/
  lastItem(): Behavior
