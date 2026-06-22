# Indesign (part 28)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Gets the ComboBoxes inside the requested range.
- @param from ComboBox, index, or name that starts the range.
- @param to ComboBox, index, or name that ends the range.
  \*/
  itemByRange(from: ComboBox | number | string, to: ComboBox | number | string): ComboBox[]

/\*\*

- Gets the final ComboBox in the collection.
  \*/
  lastItem(): ComboBox

/\*\*

- Gets the central ComboBox from the collection.
  \*/
  middleItem(): ComboBox

/\*\*

- Gets the ComboBox positioned immediately after the specified ComboBox.
- @param obj ComboBox that precedes the requested ComboBox.
  \*/
  nextItem(obj: ComboBox): ComboBox

/\*\*

- Gets the ComboBox positioned immediately before the specified index.
- @param obj Index of the ComboBox that comes after the requested ComboBox.
  \*/
  previousItem(obj: ComboBox): ComboBox

/\*\*

- Builds a string that can be executed to resolve the ComboBox.
  \*/
  toSource(): string
  }

/\*\*

- ListBox form field.
  \*/
  declare class ListBox extends FormField {
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

- When true, the exported PDF lets multiple list box items be selected at the same time.
  \*/
  multipleSelection: boolean

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

- Moves the ListBox one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the ListBox at the layer front, or ahead of a supplied item.
- @param reference Reference object used as the in-front target (must share the same parent)
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Changes the button object into the page item for the active state; page items from other states are discarded.
  \*/
  convertToObject(): void

/\*\*

- Moves the ListBox one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the ListBox at the layer back, or behind a supplied item (must share the same parent).
- @param reference Reference object used as the behind target
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- Collection containing listboxes.
  \*/
  declare class ListBoxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the ListBox at the given index.
- @param index Index value.
  \*/
  [index: number]: ListBox

/\*\*

- Creates a ListBox instance
- @param layer Layer where the ListBox is created.
- @param at Placement for inserting the ListBox relative to a reference object or inside the container.
- @param reference Reference object; required when at is before or after.
- @param withProperties Starting property values for this ListBox instance
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): ListBox

/\*\*

- Gets an arbitrary ListBox from the collection.
  \*/
  anyItem(): ListBox

/\*\*

- Shows how many elements are in the ListBox collection.
  \*/
  count(): number

/\*\*

- Gets all ListBox entries from the collection.
  \*/
  everyItem(): ListBox[]

/\*\*

- Gets the first ListBox in the collection.
  \*/
  firstItem(): ListBox

/\*\*

- Gets the ListBox addressed by index or name.
- @param index Index or name.
  \*/
  item(index: number | string): ListBox

/\*\*

- Gets the ListBox whose ID matches the value.
- @param id ID value.
  \*/
  itemByID(id: number): ListBox

/\*\*

- Gets the ListBox with the given name.
- @param name Name value.
  \*/
  itemByName(name: string): ListBox

/\*\*

- Gets the ListBoxes inside the requested range.
- @param from ListBox, index, or name that starts the range.
- @param to ListBox, index, or name that ends the range.
  \*/
  itemByRange(from: ListBox | number | string, to: ListBox | number | string): ListBox[]

/\*\*

- Gets the final ListBox in the collection.
  \*/
  lastItem(): ListBox

/\*\*

- Gets the central ListBox from the collection.
  \*/
  middleItem(): ListBox

/\*\*

- Gets the ListBox positioned immediately after the specified ListBox.
- @param obj ListBox that precedes the requested ListBox.
  \*/
  nextItem(obj: ListBox): ListBox

/\*\*

- Gets the ListBox positioned immediately before the specified index.
- @param obj Index of the ListBox that comes after the requested ListBox.
  \*/
  previousItem(obj: ListBox): ListBox

/\*\*

- Builds a string that can be executed to resolve the ListBox.
  \*/
  toSource(): string
  }

/\*\*

- RadioButton form field.
  \*/
  declare class RadioButton extends FormField {
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

- Holds goto previous page behavior objects.
  \*/
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors

/\*\*

- Holds goto previous view behavior objects.
  \*/
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors

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

- Holds states.
  \*/
  readonly states: States

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

- Moves the RadioButton one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the RadioButton at the layer front, optionally ahead of a supplied item.
- @param reference Item to place this object in front of; it must share the same parent.
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Turns the button object into the page item for the active state; page items from other states are discarded.
  \*/
  convertToObject(): void

/\*\*

- Moves the RadioButton one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the RadioButton at the layer back, optionally behind a supplied item with the same parent.
- @param reference Item to place this object behind.
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- RadioButton objects are grouped in this collection.
  \*/
  declare class RadioButtons {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the RadioButton at a given index.
- @param index Index value.
  \*/
  [index: number]: RadioButton

/\*\*

- Creates a new RadioButton.
- @param layer Layer where the RadioButton is created.
- @param at Insertion position for the RadioButton, relative to the reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during creation.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): RadioButton

/\*\*

- Gets any RadioButton from the collection.
  \*/
  anyItem(): RadioButton

/\*\*

- Reports how many elements the RadioButton collection contains.
  \*/
  count(): number

/\*\*

- Gets all RadioButton objects in the collection.
  \*/
  everyItem(): RadioButton[]

/\*\*

- Gets the first RadioButton in the collection.
  \*/
  firstItem(): RadioButton

/\*\*

- Gets the RadioButton identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): RadioButton

/\*\*

- Gets the RadioButton identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): RadioButton

/\*\*

- Gets the RadioButton identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): RadioButton

/\*\*

- Gets RadioButtons from the requested range.
- @param from Starting RadioButton, index, or name for the range.
- @param to Ending RadioButton, index, or name for the range.
  \*/
  itemByRange(from: RadioButton | number | string, to: RadioButton | number | string): RadioButton[]

/\*\*

- Gets the final RadioButton in the collection.
  \*/
  lastItem(): RadioButton

/\*\*

- Gets the middle RadioButton in the collection.
  \*/
  middleItem(): RadioButton

/\*\*

- Gets the RadioButton positioned after the supplied RadioButton.
- @param obj RadioButton positioned immediately before the desired RadioButton.
  \*/
  nextItem(obj: RadioButton): RadioButton

/\*\*

- Gets the RadioButton whose index comes before the supplied index.
- @param obj Index belonging to the RadioButton after the desired RadioButton.
  \*/
  previousItem(obj: RadioButton): RadioButton

/\*\*

- Builds executable source text that resolves back to the RadioButton.
  \*/
  toSource(): string
  }

/\*\*

- Text box form field.
  \*/
  declare class TextBox extends FormField {
  /\*\*
  - Font family used by the form field in the exported PDF.
    \*/
    appliedFont: string

/\*\*

- Holds behavior objects.
  \*/
  readonly behaviors: Behaviors

/\*\*

- Holds clear form behavior objects.
  \*/
  readonly clearFormBehaviors: ClearFormBehaviors

/\*\*

- Holds EPS file items.
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

- Holds goto anchor behavior objects.
  \*/
  readonly gotoAnchorBehaviors: GotoAnchorBehaviors

/\*\*

- Holds goto first page behavior objects.
  \*/
  readonly gotoFirstPageBehaviors: GotoFirstPageBehaviors

/\*\*

- Holds goto last page behavior objects.
  \*/
  readonly gotoLastPageBehaviors: GotoLastPageBehaviors

/\*\*

- Holds goto next page behavior objects.
  \*/
  readonly gotoNextPageBehaviors: GotoNextPageBehaviors

/\*\*

- Holds goto next view behavior objects.
  \*/
  readonly gotoNextViewBehaviors: GotoNextViewBehaviors

/\*\*

- Holds goto previous page behavior objects.
  \*/
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors

/\*\*

- Holds goto previous view behavior objects.
  \*/
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors

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

- When true, the exported PDF text field supports multiple lines.
  \*/
  multiline: boolean

/\*\*

- Holds open file behavior objects.
  \*/
  readonly openFileBehaviors: OpenFileBehaviors

/\*\*

- Holds ellipse items.
  \*/
  readonly ovals: Ovals

/\*\*

- When true, the exported PDF text field behaves as a password field.
  \*/
  password: boolean

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

- When true, right to left text is enabled for the form field in the exported PDF.
  \*/
  rightToLeftField: boolean

/\*\*

- When true, the exported PDF text field can scroll.
  \*/
  scrollable: boolean

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

- Moves the TextBox one layer step forward.
  \*/
  bringForward(): void

/\*\*

- Places the TextBox at the layer front, optionally ahead of a supplied item.
- @param reference Item to place this object in front of; it must share the same parent.
  \*/
  bringToFront(reference: PageItem): void

/\*\*

- Turns the button object into the page item for the active state; page items from other states are discarded.
  \*/
  convertToObject(): void

/\*\*

- Moves the TextBox one layer step backward.
  \*/
  sendBackward(): void

/\*\*

- Places the TextBox at the layer back, optionally behind a supplied item with the same parent.
- @param reference Item to place this object behind.
  \*/
  sendToBack(reference: PageItem): void
  }

/\*\*

- TextBox objects are grouped in this collection.
  \*/
  declare class TextBoxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Gets the TextBox at a given index.
- @param index Index value.
  \*/
  [index: number]: TextBox

/\*\*

- Creates a new TextBox.
- @param layer Layer where the TextBox is created.
- @param at Insertion position for the TextBox, relative to the reference object or inside the container object.
- @param reference Reference object; required when at is before or after.
- @param withProperties Property values applied during creation.
  \*/
  add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): TextBox

/\*\*

- Gets any TextBox from the collection.
  \*/
  anyItem(): TextBox

/\*\*

- Reports how many elements the TextBox collection contains.
  \*/
  count(): number

/\*\*

- Gets all TextBox objects in the collection.
  \*/
  everyItem(): TextBox[]

/\*\*

- Gets the first TextBox in the collection.
  \*/
  firstItem(): TextBox

/\*\*

- Gets the TextBox identified by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): TextBox

/\*\*

- Gets the TextBox identified by ID.
- @param id ID value.
  \*/
  itemByID(id: number): TextBox

/\*\*

- Gets the TextBox identified by name.
- @param name Name value.
  \*/
  itemByName(name: string): TextBox

/\*\*

- Gets TextBoxes from the requested range.
- @param from Starting TextBox, index, or name for the range.
- @param to Ending TextBox, index, or name for the range.
  \*/
  itemByRange(from: TextBox | number | string, to: TextBox | number | string): TextBox[]

/\*\*

- Gets the final TextBox in the collection.
  \*/
  lastItem(): TextBox

/\*\*

- Gets the middle TextBox in the collection.
  \*/
  middleItem(): TextBox

/\*\*

- Gets the TextBox positioned after the supplied TextBox.
- @param obj TextBox positioned immediately before the desired TextBox.
  \*/
  nextItem(obj: TextBox): TextBox

/\*\*

- Gets the TextBox whose index comes before the supplied index.
- @param obj Index belonging to the TextBox after the desired TextBox.
  \*/
  previousItem(obj: TextBox): TextBox

/\*\*

- Builds executable source text that resolves back to the TextBox.
  \*/
  toSource(): string
  }

/\*\*

- Signature field form field.
  \*/
  declare class SignatureField extends FormField {
  /\*\*
  - Holds behavior objects.
    \*/
    readonly behaviors: Behaviors

/\*\*

- Holds clear form behavior objects.
  \*/
  readonly clearFormBehaviors: ClearFormBehaviors

/\*\*

- Holds EPS file items.
  \*/
  readonly epss: EPSs

/\*\*

- EPSTexts
  \*/
  readonly epstexts: EPSTexts

/\*\*

- Holds goto anchor behavior objects.
  \*/
  readonly gotoAnchorBehaviors: GotoAnchorBehaviors

/\*\*

- Holds goto first page behavior objects.
  \*/
  readonly gotoFirstPageBehaviors: GotoFirstPageBehaviors

/\*\*

- Holds goto last page behavior objects.
  \*/
  readonly gotoLastPageBehaviors: GotoLastPageBehaviors

/\*\*

- Holds goto next page behavior objects.
  \*/
  readonly gotoNextPageBehaviors: GotoNextPageBehaviors

/\*\*

- Holds goto next view behavior objects.
  \*/
  readonly gotoNextViewBehaviors: GotoNextViewBehaviors

/\*\*

- Holds goto previous page behavior objects.
  \*/
  readonly gotoPreviousPageBehaviors: GotoPreviousPageBehaviors

/\*\*

- Holds goto previous view behavior objects.
  \*/
  readonly gotoPreviousViewBehaviors: GotoPreviousViewBehaviors
