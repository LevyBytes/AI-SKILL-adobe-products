# Indesign (part 27)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Gets the central State from the collection.
  \*/
  middleItem(): State

/\*\*

- Gets the State positioned immediately after the specified State.
- @param obj State that precedes the requested State.
  \*/
  nextItem(obj: State): State

/\*\*

- Gets the State positioned immediately before the specified index.
- @param obj Index of the State that comes after the requested State.
  \*/
  previousItem(obj: State): State

/\*\*

- Builds a string that can be executed to resolve the State.
  \*/
  toSource(): string
  }

/\*\*

- Multi-state object.
  \*/
  declare class MultiStateObject extends FormField {
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

- Collection containing graphic lines.
  \*/
  readonly graphicLines: GraphicLines

/\*\*

- Collection containing groups.
  \*/
  readonly groups: Groups

/\*\*

- Bitmap image collection for formats including TIFF, JPEG, or GIF.
  \*/
  readonly images: Images

/\*\*

- Indicates whether this object starts hidden when shown in an exported file.
  \*/
  initiallyHidden: boolean

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

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- Collection for spline items.
  \*/
  readonly splineItems: SplineItems

/\*\*

- Collection containing states.
  \*/
  readonly states: States

/\*\*

- Collection containing text frames.
  \*/
  readonly textFrames: TextFrames

/\*\*

- Collection containing WMF graphics.
  \*/
  readonly wmfs: WMFs

/\*\*

- Adds items as one appearance state for this object.
- @param pageitems Page items to add as a state.
  \*/
  addItemsAsState(pageitems: PageItem[]): void

/\*\*

- Moves the MultiStateObject one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the MultiStateObject at the layer front, or ahead of a supplied item.
- @param reference Reference object used as the in-front target (must share the same parent)
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Releases every state tied to this object, then destroys the parent object.
  \*/
  releaseAsObjects(): void

/\*\*

- Moves the MultiStateObject one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the MultiStateObject at the layer back, or behind a supplied item (must share the same parent).
- @param reference Reference object used as the behind target
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- Collection containing multi-state objects.
  \*/
  declare class MultiStateObjects {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the MultiStateObject at the given index.
- @param index Index value.
  \*/
  [index: number]: MultiStateObject

/\*\*

- Creates a MultiStateObject instance
- @param layer Layer where the MultiStateObject is created.
- @param at Placement for inserting the MultiStateObject relative to a reference object or inside the container.
- @param reference Reference object; required when at is before or after.
- @param withProperties Starting property values for this MultiStateObject instance
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): MultiStateObject

/\*\*

- Gets an arbitrary MultiStateObject from the collection.
  \*/
  anyItem(): MultiStateObject

/\*\*

- Shows how many elements are in the MultiStateObject collection.
  \*/
  count(): number

/\*\*

- Gets all MultiStateObject entries from the collection.
  \*/
  everyItem(): MultiStateObject[]

/\*\*

- Gets the first MultiStateObject in the collection.
  \*/
  firstItem(): MultiStateObject

/\*\*

- Gets the MultiStateObject addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): MultiStateObject

/\*\*

- Gets the MultiStateObject whose ID matches the value.
- @param id ID value.
  \*/
  itemByID(id: number): MultiStateObject

/\*\*

- Gets the MultiStateObject with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): MultiStateObject

/\*\*

- Gets the MultiStateObjects inside the requested range.
- @param from MultiStateObject, index, or name that starts the range.
- @param to MultiStateObject, index, or name that ends the range.
  \*/
  itemByRange(from: MultiStateObject | number | string, to: MultiStateObject | number | string): MultiStateObject[]

/\*\*

- Gets the final MultiStateObject in the collection.
  \*/
  lastItem(): MultiStateObject

/\*\*

- Gets the central MultiStateObject from the collection.
  \*/
  middleItem(): MultiStateObject

/\*\*

- Gets the MultiStateObject positioned immediately after the specified MultiStateObject.
- @param obj MultiStateObject that precedes the requested MultiStateObject.
  \*/
  nextItem(obj: MultiStateObject): MultiStateObject

/\*\*

- Gets the MultiStateObject positioned immediately before the specified index.
- @param obj Index of the MultiStateObject that comes after the requested MultiStateObject.
  \*/
  previousItem(obj: MultiStateObject): MultiStateObject

/\*\*

- Builds a string that can be executed to resolve the MultiStateObject.
  \*/
  toSource(): string
  }

/\*\*

- Checkbox form field.
  \*/
  declare class CheckBox extends FormField {
  /\*\*
  - Collection containing behavior objects.
    \*/
    readonly behaviors: Behaviors

/\*\*

- When true, the exported PDF starts with this check box/radio button selected.
  \*/
  checkedByDefault: boolean

/\*\*

- Collection containing clear form behavior objects.
  \*/
  readonly clearFormBehaviors: ClearFormBehaviors

/\*\*

- Collection containing EPS files.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Exported-PDF value used for the check box/radio button.
  \*/
  exportValue: string

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

- Collection containing goto next view behavior objects.
  \*/
  readonly gotoNextViewBehaviors: GotoNextViewBehaviors

/\*\*

- Collection containing goto previous page behavior objects.
  \*/
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors

/\*\*

- Collection containing goto previous view behavior objects.
  \*/
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors

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

- When true, the form field/push button stays hidden in the exported PDF until triggered.
  \*/
  hiddenUntilTriggered: boolean

/\*\*

- Bitmap image collection for formats including TIFF, JPEG, or GIF.
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

- When true, the form field/push button is printable from the exported PDF.
  \*/
  printableInPdf: boolean

/\*\*

- When true, the exported PDF treats the form field as read-only.
  \*/
  readOnly: boolean

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- When true, the exported PDF marks the form field as required.
  \*/
  required: boolean

/\*\*

- Collection containing show/hide fields behavior objects.
  \*/
  readonly showHideFieldsBehaviors: ShowHideFieldsBehaviors

/\*\*

- Collection containing sound behavior objects.
  \*/
  readonly soundBehaviors: SoundBehaviors

/\*\*

- Collection for spline items.
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

- Moves the CheckBox one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the CheckBox at the layer front, or ahead of a supplied item.
- @param reference Reference object used as the in-front target (must share the same parent)
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Changes the button object into the page item for the active state; page items from other states are discarded.
  \*/
  convertToObject(): void

/\*\*

- Moves the CheckBox one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the CheckBox at the layer back, or behind a supplied item (must share the same parent).
- @param reference Reference object used as the behind target
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- Collection containing checkboxes.
  \*/
  declare class CheckBoxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the CheckBox at the given index.
- @param index Index value.
  \*/
  [index: number]: CheckBox

/\*\*

- Creates a CheckBox instance
- @param layer Layer where the CheckBox is created.
- @param at Placement for inserting the CheckBox relative to a reference object or inside the container.
- @param reference Reference object; required when at is before or after.
- @param withProperties Starting property values for this CheckBox instance
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): CheckBox

/\*\*

- Gets an arbitrary CheckBox from the collection.
  \*/
  anyItem(): CheckBox

/\*\*

- Shows how many elements are in the CheckBox collection.
  \*/
  count(): number

/\*\*

- Gets all CheckBox entries from the collection.
  \*/
  everyItem(): CheckBox[]

/\*\*

- Gets the first CheckBox in the collection.
  \*/
  firstItem(): CheckBox

/\*\*

- Gets the CheckBox addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): CheckBox

/\*\*

- Gets the CheckBox whose ID matches the value.
- @param id ID value.
  \*/
  itemByID(id: number): CheckBox

/\*\*

- Gets the CheckBox with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): CheckBox

/\*\*

- Gets the CheckBoxes inside the requested range.
- @param from CheckBox, index, or name that starts the range.
- @param to CheckBox, index, or name that ends the range.
  \*/
  itemByRange(from: CheckBox | number | string, to: CheckBox | number | string): CheckBox[]

/\*\*

- Gets the final CheckBox in the collection.
  \*/
  lastItem(): CheckBox

/\*\*

- Gets the central CheckBox from the collection.
  \*/
  middleItem(): CheckBox

/\*\*

- Gets the CheckBox positioned immediately after the specified CheckBox.
- @param obj CheckBox that precedes the requested CheckBox.
  \*/
  nextItem(obj: CheckBox): CheckBox

/\*\*

- Gets the CheckBox positioned immediately before the specified index.
- @param obj Index of the CheckBox that comes after the requested CheckBox.
  \*/
  previousItem(obj: CheckBox): CheckBox

/\*\*

- Builds a string that can be executed to resolve the CheckBox.
  \*/
  toSource(): string
  }

/\*\*

- ComboBox form field.
  \*/
  declare class ComboBox extends FormField {
  /\*\*
  - Font family used by the form field in the exported PDF.
    \*/
    appliedFont: string

/\*\*

- Collection containing behavior objects.
  \*/
  readonly behaviors: Behaviors

/\*\*

- Choices presented by combo and list boxes in the exported PDF.
  \*/
  choiceList: string[]

/\*\*

- Collection containing clear form behavior objects.
  \*/
  readonly clearFormBehaviors: ClearFormBehaviors

/\*\*

- Collection containing EPS files.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Font size used by the form field in the exported PDF.
  \*/
  fontSize: number

/\*\*

- Font style used by the form field in the exported PDF.
  \*/
  fontStyle: string

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

- Collection containing goto next view behavior objects.
  \*/
  readonly gotoNextViewBehaviors: GotoNextViewBehaviors

/\*\*

- Collection containing goto previous page behavior objects.
  \*/
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors

/\*\*

- Collection containing goto previous view behavior objects.
  \*/
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors

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

- When true, the form field/push button stays hidden in the exported PDF until triggered.
  \*/
  hiddenUntilTriggered: boolean

/\*\*

- Bitmap image collection for formats including TIFF, JPEG, or GIF.
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

- When true, the form field/push button is printable from the exported PDF.
  \*/
  printableInPdf: boolean

/\*\*

- When true, the exported PDF treats the form field as read-only.
  \*/
  readOnly: boolean

/\*\*

- Collection containing rectangles.
  \*/
  readonly rectangles: Rectangles

/\*\*

- When true, the exported PDF marks the form field as required.
  \*/
  required: boolean

/\*\*

- When true, right-to-left text is enabled for this form field in the exported PDF.
  \*/
  rightToLeftField: boolean

/\*\*

- Collection containing show/hide fields behavior objects.
  \*/
  readonly showHideFieldsBehaviors: ShowHideFieldsBehaviors

/\*\*

- When true, the exported PDF sorts the available choices.
  \*/
  sortChoices: boolean

/\*\*

- Collection containing sound behavior objects.
  \*/
  readonly soundBehaviors: SoundBehaviors

/\*\*

- Collection for spline items.
  \*/
  readonly splineItems: SplineItems

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

- Moves the ComboBox one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the ComboBox at the layer front, or ahead of a supplied item.
- @param reference Reference object used as the in-front target (must share the same parent)
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Changes the button object into the page item for the active state; page items from other states are discarded.
  \*/
  convertToObject(): void

/\*\*

- Moves the ComboBox one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the ComboBox at the layer back, or behind a supplied item (must share the same parent).
- @param reference Reference object used as the behind target
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- Collection containing comboboxes.
  \*/
  declare class ComboBoxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the ComboBox at the given index.
- @param index Index value.
  \*/
  [index: number]: ComboBox

/\*\*

- Creates a ComboBox instance
- @param layer Layer where the ComboBox is created.
- @param at Placement for inserting the ComboBox relative to a reference object or inside the container.
- @param reference Reference object; required when at is before or after.
- @param withProperties Starting property values for this ComboBox instance
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): ComboBox

/\*\*

- Gets an arbitrary ComboBox from the collection.
  \*/
  anyItem(): ComboBox

/\*\*

- Shows how many elements are in the ComboBox collection.
  \*/
  count(): number

/\*\*

- Gets all ComboBox entries from the collection.
  \*/
  everyItem(): ComboBox[]

/\*\*

- Gets the first ComboBox in the collection.
  \*/
  firstItem(): ComboBox

/\*\*

- Gets the ComboBox addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): ComboBox

/\*\*

- Gets the ComboBox whose ID matches the value.
- @param id ID value.
  \*/
  itemByID(id: number): ComboBox

/\*\*

- Gets the ComboBox with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): ComboBox
