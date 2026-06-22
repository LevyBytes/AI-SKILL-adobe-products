# Indesign (part 26)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Stores a label value under the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Removes the PageReference object.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the PageReference.
  \*/
  toSource(): string

/\*\*

- Gets this object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing index page references.
  \*/
  declare class PageReferences {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the PageReference at the supplied index.
- @param index Index value.
  \*/
  [index: number]: PageReference

/\*\*

- Creates a PageReference object.
- @param source Text or insertion point targeted by the page reference.
- @param pageReferenceType Page number for an index page reference, or final page for an index page reference range.
- @param pageReferenceLimit Paragraph style or paragraph/page count that sets the final page in a range. Valid only when page reference type requests the next use of a paragraph style or a paragraph/page count. .
- @param pageNumberStyleOverride Style override applied to the page number.
- @param withProperties Initial property values for the new PageReference.
  \*/
  add(source: Text, pageReferenceType?: PageReferenceType, pageReferenceLimit?: ParagraphStyle | number, pageNumberStyleOverride?: CharacterStyle, withProperties?: object): PageReference

/\*\*

- Retrieves an arbitrary PageReference from this collection.
  \*/
  anyItem(): PageReference

/\*\*

- Reports how many elements the PageReference contains.
  \*/
  count(): number

/\*\*

- Retrieves all PageReference entries from this collection.
  \*/
  everyItem(): PageReference[]

/\*\*

- Retrieves the initial PageReference from this collection.
  \*/
  firstItem(): PageReference

/\*\*

- Retrieves the PageReference identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): PageReference

/\*\*

- Retrieves the PageReference matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): PageReference

/\*\*

- Retrieves the PageReference matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): PageReference

/\*\*

- Retrieves the PageReferences inside the supplied range.
- @param from Starting PageReference, index, or name for the range.
- @param to Ending PageReference, index, or name for the range.
  \*/
  itemByRange(from: PageReference | number | string, to: PageReference | number | string): PageReference[]

/\*\*

- Retrieves the final PageReference from this collection.
  \*/
  lastItem(): PageReference

/\*\*

- Retrieves the center PageReference from this collection.
  \*/
  middleItem(): PageReference

/\*\*

- Retrieves the PageReference immediately after the supplied PageReference in this collection.
- @param obj PageReference positioned immediately before the target PageReference.
  \*/
  nextItem(obj: PageReference): PageReference

/\*\*

- Retrieves the PageReference immediately before the supplied index.
- @param obj Index belonging to the PageReference immediately after the target PageReference.
  \*/
  previousItem(obj: PageReference): PageReference

/\*\*

- Builds executable source text that resolves back to the PageReference.
  \*/
  toSource(): string
  }

/\*\*

- Section object inside an index.
  \*/
  declare class IndexSection {
  /\*\*
  - Topics belonging to the specified index section.
    \*/
    readonly allTopics: Topic[]

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the IndexSection.
  \*/
  readonly id: number

/\*\*

- Position of the IndexSection inside its containing object.
  \*/
  readonly index: number

/\*\*

- Boolean result indicating that the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- String-valued custom label property.
  \*/
  label: string

/\*\*

- Name assigned to the IndexSection.
  \*/
  readonly name: string

/\*\*

- Parent object for the IndexSection (a Index).
  \*/
  readonly parent: Index

/\*\*

- Property bag used to assign multiple properties together.
  \*/
  properties: object

/\*\*

- Collection containing index topics.
  \*/
  readonly topics: Topics

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Reads the label value stored for the supplied key.
- @param key Key value.
  \*/
  extractLabel(key: string): string

/\*\*

- Turns the object specifier into an array of object references.
  \*/
  getElements(): IndexSection[]

/\*\*

- Stores a label value under the supplied key.
- @param key Key value.
- @param value Value to store.
  \*/
  insertLabel(key: string, value: string): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds executable source text that resolves back to the IndexSection.
  \*/
  toSource(): string

/\*\*

- Gets this object specifier string.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing index sections.
  \*/
  declare class IndexSections {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the IndexSection at the supplied index.
- @param index Index value.
  \*/
  [index: number]: IndexSection

/\*\*

- Retrieves an arbitrary IndexSection from this collection.
  \*/
  anyItem(): IndexSection

/\*\*

- Reports how many elements the IndexSection contains.
  \*/
  count(): number

/\*\*

- Retrieves all IndexSection entries from this collection.
  \*/
  everyItem(): IndexSection[]

/\*\*

- Retrieves the initial IndexSection from this collection.
  \*/
  firstItem(): IndexSection

/\*\*

- Retrieves the IndexSection identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): IndexSection

/\*\*

- Retrieves the IndexSection matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): IndexSection

/\*\*

- Retrieves the IndexSection matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): IndexSection

/\*\*

- Retrieves the IndexSections inside the supplied range.
- @param from Starting IndexSection, index, or name for the range.
- @param to Ending IndexSection, index, or name for the range.
  \*/
  itemByRange(from: IndexSection | number | string, to: IndexSection | number | string): IndexSection[]

/\*\*

- Retrieves the final IndexSection from this collection.
  \*/
  lastItem(): IndexSection

/\*\*

- Retrieves the center IndexSection from this collection.
  \*/
  middleItem(): IndexSection

/\*\*

- Retrieves the IndexSection immediately after the supplied IndexSection in this collection.
- @param obj IndexSection positioned immediately before the target IndexSection.
  \*/
  nextItem(obj: IndexSection): IndexSection

/\*\*

- Retrieves the IndexSection immediately before the supplied index.
- @param obj Index belonging to the IndexSection immediately after the target IndexSection.
  \*/
  previousItem(obj: IndexSection): IndexSection

/\*\*

- Builds executable source text that resolves back to the IndexSection.
  \*/
  toSource(): string
  }

/\*\*

- FormField object.
  \*/
  declare class FormField extends PageItem {
  /\*\*
  - Active-state index within the object's states collection.
    \*/
    activeStateIndex: number

/\*\*

- Settings for anchored objects.
  \*/
  readonly anchoredObjectSettings: AnchoredObjectSetting

/\*\*

- Description assigned to the FormField.
  \*/
  description: string
  }

/\*\*

- Collection containing form fields.
  \*/
  declare class FormFields {
  /\*\*
  - Object count for this collection.
    \*/
    readonly length: number

/\*\*

- Retrieves the FormField at the supplied index.
- @param index Index value.
  \*/
  [index: number]: FormField

/\*\*

- Creates a FormField object.
- @param layer Layer where the FormField is created.
- @param at Placement position for the FormField, either relative to a reference object or inside the container object.
- @param reference Reference object. Note: required when at is before or after.
- @param withProperties Initial property values for the new FormField.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): FormField

/\*\*

- Retrieves an arbitrary FormField from this collection.
  \*/
  anyItem(): FormField

/\*\*

- Reports how many elements the FormField contains.
  \*/
  count(): number

/\*\*

- Retrieves all FormField entries from this collection.
  \*/
  everyItem(): FormField[]

/\*\*

- Retrieves the initial FormField from this collection.
  \*/
  firstItem(): FormField

/\*\*

- Retrieves the FormField identified by index or name.
- @param index Index or name selector.
  \*/
  item(index: number | string): FormField

/\*\*

- Retrieves the FormField matching the supplied ID.
- @param id ID value.
  \*/
  itemByID(id: number): FormField

/\*\*

- Retrieves the FormField matching the supplied name.
- @param name Name value.
  \*/
  itemByName(name: string): FormField

/\*\*

- Retrieves the FormFields inside the supplied range.
- @param from Starting FormField, index, or name for the range.
- @param to Ending FormField, index, or name for the range.
  \*/
  itemByRange(from: FormField | number | string, to: FormField | number | string): FormField[]

/\*\*

- Retrieves the final FormField from this collection.
  \*/
  lastItem(): FormField

/\*\*

- Retrieves the center FormField from this collection.
  \*/
  middleItem(): FormField

/\*\*

- Retrieves the FormField immediately after the supplied FormField in this collection.
- @param obj FormField positioned immediately before the target FormField.
  \*/
  nextItem(obj: FormField): FormField

/\*\*

- Retrieves the FormField immediately before the supplied index.
- @param obj Index belonging to the FormField immediately after the target FormField.
  \*/
  previousItem(obj: FormField): FormField

/\*\*

- Builds executable source text that resolves back to the FormField.
  \*/
  toSource(): string
  }

/\*\*

- Button object.
  \*/
  declare class Button extends FormField {
  /\*\*
  - Collection containing animation behaviors.
    \*/
    readonly animationBehaviors: AnimationBehaviors

/\*\*

- Collection containing behavior objects.
  \*/
  readonly behaviors: Behaviors

/\*\*

- Collection containing clear form behavior objects.
  \*/
  readonly clearFormBehaviors: ClearFormBehaviors

/\*\*

- Collection containing endnote text frames.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- Collection containing EPS files.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Collection containing goto anchor behavior objects.
  \*/
  readonly gotoAnchorBehaviors: GotoAnchorBehaviors

/\*\*

- Collection containing goto first page behavior objects.
  \*/
  readonly gotoFirstPageBehaviors: GotoFirstPageBehaviors

/\*\*

- Collection containing goto last page behavior objects.
  \*/
  readonly gotoLastPageBehaviors: GotoLastPageBehaviors

/\*\*

- Collection containing goto next page behavior objects.
  \*/
  readonly gotoNextPageBehaviors: GotoNextPageBehaviors

/\*\*

- Collection containing goto next state behaviors.
  \*/
  readonly gotoNextStateBehaviors: GotoNextStateBehaviors

/\*\*

- Collection containing goto next view behavior objects.
  \*/
  readonly gotoNextViewBehaviors: GotoNextViewBehaviors

/\*\*

- Collection containing go to page behavior objects.
  \*/
  readonly gotoPageBehaviors: GotoPageBehaviors

/\*\*

- Collection containing goto previous page behavior objects.
  \*/
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors

/\*\*

- Collection containing goto previous state behaviors.
  \*/
  readonly gotoPreviousStateBehaviors: GotoPreviousStateBehaviors

/\*\*

- Collection containing goto previous view behavior objects.
  \*/
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors

/\*\*

- Collection containing goto state behaviors.
  \*/
  readonly gotoStateBehaviors: GotoStateBehaviors

/\*\*

- Collection containing goto URL behavior objects.
  \*/
  readonly gotoURLBehaviors: GotoURLBehaviors

/\*\*

- Collection containing graphic lines.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Collection containing groups.
  \*/
  readonly groups: Groups

/\*\*

- When true, the exported PDF keeps the form field/push button hidden until a trigger fires.
  \*/
  hiddenUntilTriggered: boolean

/\*\*

- Bitmap image collection covering formats such as TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- Collection containing movie behavior objects.
  \*/
  readonly movieBehaviors: MovieBehaviors

/\*\*

- Collection containing open file behavior objects.
  \*/
  readonly openFileBehaviors: OpenFileBehaviors

/\*\*

- Collection containing ellipses.
  \*/
  readonly ovals: Ovals

/\*\*

- Collection containing paths.
  \*/
  readonly paths: Paths

/\*\*

- Collection containing PDF files.
  \*/
  readonly pdfs: PDFs

/\*\*

- Collection containing PICT graphics.
  \*/
  readonly picts: PICTs

/\*\*

- Collection containing polygons.
  \*/
  readonly polygons: Polygons

/\*\*

- Collection containing print form behavior objects.
  \*/
  readonly printFormBehaviors: PrintFormBehaviors

/\*\*

- When true, the form field/push button can print from the exported PDF.
  \*/
  printableInPdf: boolean

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Collection containing show/hide fields behavior objects.
  \*/
  readonly showHideFieldsBehaviors: ShowHideFieldsBehaviors

/\*\*

- Collection containing sound behavior objects.
  \*/
  readonly soundBehaviors: SoundBehaviors

/\*\*

- SplineItems collection.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Collection containing states.
  \*/
  readonly states: States

/\*\*

- Collection containing submit form behavior objects.
  \*/
  readonly submitFormBehaviors: SubmitFormBehaviors

/\*\*

- Collection containing text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Collection containing view zoom behavior objects.
  \*/
  readonly viewZoomBehaviors: ViewZoomBehaviors

/\*\*

- Collection containing WMF graphics.
  \*/
  readonly wmfs: WMFs

/\*\*

- Moves the Button one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the Button at the layer front, or ahead of a supplied item.
- @param reference Reference object used as the in-front target (must share the same parent)
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Changes the button object into the page item for the active state; page items from other states are discarded.
  \*/
  convertToObject(): void

/\*\*

- Moves the Button one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the Button at the layer back, or behind a supplied item (must share the same parent).
- @param reference Reference object used as the behind target
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- Collection containing buttons.
  \*/
  declare class Buttons {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the Button at the given index.
- @param index Index value.
  \*/
  [index: number]: Button

/\*\*

- Creates a Button instance
- @param layer Layer where the Button is created.
- @param at Placement for inserting the Button relative to a reference object or inside the container.
- @param reference Reference object; required when at is before or after.
- @param withProperties Starting property values for this Button instance
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Button

/\*\*

- Gets an arbitrary Button from the collection.
  \*/
  anyItem(): Button

/\*\*

- Shows how many elements are in the Button collection.
  \*/
  count(): number

/\*\*

- Gets all Button entries from the collection.
  \*/
  everyItem(): Button[]

/\*\*

- Gets the first Button in the collection.
  \*/
  firstItem(): Button

/\*\*

- Gets the Button addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): Button

/\*\*

- Gets the Button whose ID matches the value.
- @param id ID value.
  \*/
  itemByID(id: number): Button

/\*\*

- Gets the Button with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): Button

/\*\*

- Gets the Buttons inside the requested range.
- @param from Button, index, or name that starts the range.
- @param to Button, index, or name that ends the range.
  \*/
  itemByRange(from: Button | number | string, to: Button | number | string): Button[]

/\*\*

- Gets the final Button in the collection.
  \*/
  lastItem(): Button

/\*\*

- Gets the central Button from the collection.
  \*/
  middleItem(): Button

/\*\*

- Gets the Button positioned immediately after the specified Button.
- @param obj Button that precedes the requested Button.
  \*/
  nextItem(obj: Button): Button

/\*\*

- Gets the Button positioned immediately before the specified index.
- @param obj Index of the Button that comes after the requested Button.
  \*/
  previousItem(obj: Button): Button

/\*\*

- Builds a string that can be executed to resolve the Button.
  \*/
  toSource(): string
  }

/\*\*

- A state; states control how the field appears in an exported PDF.
  \*/
  declare class State {
  /\*\*
  - When true, the state is active in the exported PDF.
    \*/
    active: boolean

/\*\*

- When true, PDF documents have this state enabled.
  \*/
  enabled: boolean

/\*\*

- Collection containing endnote text frames.
  \*/
  readonly endnoteTextFrames: EndnoteTextFrames

/\*\*

- Collection containing EPS files.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Collection containing event listeners.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Collection containing events.
  \*/
  readonly events: Events

/\*\*

- Collection containing graphic lines.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Imported graphics collection for graphic formats such as vector, metafile, or bitmap.
  \*/
  readonly graphics: Graphics

/\*\*

- Collection containing groups.
  \*/
  readonly groups: Groups

/\*\*

- Unique ID assigned to the State.
  \*/
  readonly id: number

/\*\*

- Bitmap image collection for formats including TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- Position of the State inside its containing object.
  \*/
  readonly index: number

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Name assigned to the State.
  \*/
  name: string

/\*\*

- Collection containing ellipses.
  \*/
  readonly ovals: Ovals

/\*\*

- PageItems can traverse each page item held by a document, page, group, or similar container without narrowing by item type.
  \*/
  readonly pageItems: PageItems

/\*\*

- Parent object for the State (a Button, MultiStateObject, CheckBox or RadioButton).
  \*/
  readonly parent: any

/\*\*

- Collection containing PDF files.
  \*/
  readonly pdfs: PDFs

/\*\*

- Collection containing PICT graphics.
  \*/
  readonly picts: PICTs

/\*\*

- Collection containing polygons.
  \*/
  readonly polygons: Polygons

/\*\*

- Lets several properties be assigned in one operation.
  \*/
  properties: object

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Collection for spline items.
  \*/
  readonly splineItems: SplineItems

/\*\*

- For a button, statetype records the user action that drives appearance; for a MultiStateObject, where states are not tied to user actions, it stores a numeric state identifier.
  \*/
  statetype: StateTypes | number

/\*\*

- Collection containing SVG files.
  \*/
  readonly svgs: SVGs

/\*\*

- Collection containing text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Collection containing WMF graphics.
  \*/
  readonly wmfs: WMFs

/\*\*

- Registers an event listener.
- @param eventType Event type.
- @param handler Event handler.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Adds page items into this state.
- @param pageitems Page item entries to include in this state.
  \*/
  addItemsToState(pageitems: PageItem[]): void

/\*\*

- Resolves the object specifier and produces object-reference entries.
  \*/
  getElements(): State[]

/\*\*

- Repositions the state within its parent collection.
- @param newPosition target index inside the parent collection for the state
  \*/
  move(newPosition: number): void

/\*\*

- Exposes this state's appearance as a page item and removes the state from its parent object.
  \*/
  releaseAsObject(): void

/\*\*

- Removes the State.
  \*/
  remove(): void

/\*\*

- Unregisters the event listener.
- @param eventType Registered event type.
- @param handler Registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Builds a string that can be executed to resolve the State.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection containing states.
  \*/
  declare class States {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the State at the given index.
- @param index Index value.
  \*/
  [index: number]: State

/\*\*

- Creates a State instance.
- @param withProperties Starting property values for this State instance
  \*/
  add(withProperties: object): State

/\*\*

- Gets an arbitrary State from the collection.
  \*/
  anyItem(): State

/\*\*

- Shows how many elements are in the State collection.
  \*/
  count(): number

/\*\*

- Gets all State entries from the collection.
  \*/
  everyItem(): State[]

/\*\*

- Gets the first State in the collection.
  \*/
  firstItem(): State

/\*\*

- Gets the State addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): State

/\*\*

- Gets the State whose ID matches the value.
- @param id ID value.
  \*/
  itemByID(id: number): State

/\*\*

- Gets the State with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): State

/\*\*

- Gets the States inside the requested range.
- @param from State, index, or name that starts the range.
- @param to State, index, or name that ends the range.
  \*/
  itemByRange(from: State | number | string, to: State | number | string): State[]

/\*\*

- Gets the final State in the collection.
  \*/
  lastItem(): State
