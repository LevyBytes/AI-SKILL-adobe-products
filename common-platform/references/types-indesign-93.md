# Indesign (part 93)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Owning container for the Widget: DialogColumn, DialogRow, EnablingGroup, BorderPanel, or RadiobuttonGroup.
  \*/
  readonly parent: any

/\*\*

- Lets multiple properties be assigned together.
  \*/
  properties: object

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback or file.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Expands the object specifier into an array of object references.
  \*/
  getElements(): Widget[]

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces source text that can evaluate back to the Widget.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for Widget objects.
  \*/
  declare class Widgets {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the Widget at index.
- @param index Index value.
  \*/
  [index: number]: Widget

/\*\*

- Selects an arbitrary Widget from the collection.
  \*/
  anyItem(): Widget

/\*\*

- Reports the element count for Widget.
  \*/
  count(): number

/\*\*

- Provides every Widget in the collection.
  \*/
  everyItem(): Widget[]

/\*\*

- Provides the first Widget in the collection.
  \*/
  firstItem(): Widget

/\*\*

- Finds the Widget by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Widget

/\*\*

- Finds the Widget by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Widget

/\*\*

- Builds a range of Widgets.
- @param from Starting Widget, index, or name for the range.
- @param to Ending Widget, index, or name for the range.
  \*/
  itemByRange(from: Widget | number | string, to: Widget | number | string): Widget[]

/\*\*

- Provides the final Widget in the collection.
  \*/
  lastItem(): Widget

/\*\*

- Provides the middle Widget in the collection.
  \*/
  middleItem(): Widget

/\*\*

- Provides the Widget after obj in collection order.
- @param obj Widget positioned before the requested Widget.
  \*/
  nextItem(obj: Widget): Widget

/\*\*

- Provides the Widget before obj in collection order.
- @param obj Index positioned after the requested Widget.
  \*/
  previousItem(obj: Widget): Widget

/\*\*

- Produces source text that can evaluate back to the Widget.
  \*/
  toSource(): string
  }

/\*\*

- Text input field.
  \*/
  declare class TextEditbox extends Widget {
  /\*\*
  - Initial contents for an editbox control. Note: Do not set both edit contents and edit value; when both appear, the later one in the script takes effect.
    \*/
    editContents: string
    }

/\*\*

- Collection wrapper for text editboxes.
  \*/
  declare class TextEditboxes {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the TextEditbox at index.
- @param index Index value.
  \*/
  [index: number]: TextEditbox

/\*\*

- Creates a TextEditbox.
- @param withProperties Starting property values for the new TextEditbox
  \*/
  add(withProperties: object): TextEditbox

/\*\*

- Selects an arbitrary TextEditbox from the collection.
  \*/
  anyItem(): TextEditbox

/\*\*

- Reports the element count for TextEditbox.
  \*/
  count(): number

/\*\*

- Provides every TextEditbox in the collection.
  \*/
  everyItem(): TextEditbox[]

/\*\*

- Provides the first TextEditbox in the collection.
  \*/
  firstItem(): TextEditbox

/\*\*

- Finds the TextEditbox by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): TextEditbox

/\*\*

- Finds the TextEditbox by ID.
- @param id ID value.
  \*/
  itemByID(id: number): TextEditbox

/\*\*

- Builds a range of TextEditboxes.
- @param from Starting TextEditbox, index, or name for the range.
- @param to Ending TextEditbox, index, or name for the range.
  \*/
  itemByRange(from: TextEditbox | number | string, to: TextEditbox | number | string): TextEditbox[]

/\*\*

- Provides the final TextEditbox in the collection.
  \*/
  lastItem(): TextEditbox

/\*\*

- Provides the middle TextEditbox in the collection.
  \*/
  middleItem(): TextEditbox

/\*\*

- Provides the TextEditbox after obj in collection order.
- @param obj TextEditbox positioned before the requested TextEditbox.
  \*/
  nextItem(obj: TextEditbox): TextEditbox

/\*\*

- Provides the TextEditbox before obj in collection order.
- @param obj Index positioned after the requested TextEditbox.
  \*/
  previousItem(obj: TextEditbox): TextEditbox

/\*\*

- Produces source text that can evaluate back to the TextEditbox.
  \*/
  toSource(): string
  }

/\*\*

- Static text control, commonly used as a label for another control or control group.
  \*/
  declare class StaticText extends Widget {
  /\*\*
  - Alignment setting for StaticText text.
    \*/
    staticAlignment: StaticAlignmentOptions

/\*\*

- Text displayed by the StaticText.
  \*/
  staticLabel: string
  }

/\*\*

- Collection wrapper for static text objects.
  \*/
  declare class StaticTexts {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the StaticText at index.
- @param index Index value.
  \*/
  [index: number]: StaticText

/\*\*

- Creates a StaticText.
- @param withProperties Starting property values for the new StaticText
  \*/
  add(withProperties: object): StaticText

/\*\*

- Selects an arbitrary StaticText from the collection.
  \*/
  anyItem(): StaticText

/\*\*

- Reports the element count for StaticText.
  \*/
  count(): number

/\*\*

- Provides every StaticText in the collection.
  \*/
  everyItem(): StaticText[]

/\*\*

- Provides the first StaticText in the collection.
  \*/
  firstItem(): StaticText

/\*\*

- Finds the StaticText by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): StaticText

/\*\*

- Finds the StaticText by ID.
- @param id ID value.
  \*/
  itemByID(id: number): StaticText

/\*\*

- Builds a range of StaticTexts.
- @param from Starting StaticText, index, or name for the range.
- @param to Ending StaticText, index, or name for the range.
  \*/
  itemByRange(from: StaticText | number | string, to: StaticText | number | string): StaticText[]

/\*\*

- Provides the final StaticText in the collection.
  \*/
  lastItem(): StaticText

/\*\*

- Provides the middle StaticText in the collection.
  \*/
  middleItem(): StaticText

/\*\*

- Provides the StaticText after obj in collection order.
- @param obj StaticText positioned before the requested StaticText.
  \*/
  nextItem(obj: StaticText): StaticText

/\*\*

- Provides the StaticText before obj in collection order.
- @param obj Index positioned after the requested StaticText.
  \*/
  previousItem(obj: StaticText): StaticText

/\*\*

- Produces source text that can evaluate back to the StaticText.
  \*/
  toSource(): string
  }

/\*\*

- Dropdown control.
  \*/
  declare class Dropdown extends Widget {
  /\*\*
  - Current selection index for a dropdown or combobox control.
    \*/
    selectedIndex: number

/\*\*

- Dropdown or combobox menu entries, stored as a string array.
  \*/
  stringList: string[]
  }

/\*\*

- Collection wrapper for dropdowns.
  \*/
  declare class Dropdowns {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the Dropdown at index.
- @param index Index value.
  \*/
  [index: number]: Dropdown

/\*\*

- Creates a Dropdown.
- @param withProperties Starting property values for the new Dropdown
  \*/
  add(withProperties: object): Dropdown

/\*\*

- Selects an arbitrary Dropdown from the collection.
  \*/
  anyItem(): Dropdown

/\*\*

- Reports the element count for Dropdown.
  \*/
  count(): number

/\*\*

- Provides every Dropdown in the collection.
  \*/
  everyItem(): Dropdown[]

/\*\*

- Provides the first Dropdown in the collection.
  \*/
  firstItem(): Dropdown

/\*\*

- Finds the Dropdown by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): Dropdown

/\*\*

- Finds the Dropdown by ID.
- @param id ID value.
  \*/
  itemByID(id: number): Dropdown

/\*\*

- Builds a range of Dropdowns.
- @param from Starting Dropdown, index, or name for the range.
- @param to Ending Dropdown, index, or name for the range.
  \*/
  itemByRange(from: Dropdown | number | string, to: Dropdown | number | string): Dropdown[]

/\*\*

- Provides the final Dropdown in the collection.
  \*/
  lastItem(): Dropdown

/\*\*

- Provides the middle Dropdown in the collection.
  \*/
  middleItem(): Dropdown

/\*\*

- Provides the Dropdown after obj in collection order.
- @param obj Dropdown positioned before the requested Dropdown.
  \*/
  nextItem(obj: Dropdown): Dropdown

/\*\*

- Provides the Dropdown before obj in collection order.
- @param obj Index positioned after the requested Dropdown.
  \*/
  previousItem(obj: Dropdown): Dropdown

/\*\*

- Produces source text that can evaluate back to the Dropdown.
  \*/
  toSource(): string
  }

/\*\*

- Checkbox control.
  \*/
  declare class CheckboxControl extends Widget {
  /\*\*
  - When true, the dialog opens with this control checked.
    \*/
    checkedState: boolean

/\*\*

- Text displayed by the CheckboxControl.
  \*/
  staticLabel: string
  }

/\*\*

- Collection wrapper for checkbox controls.
  \*/
  declare class CheckboxControls {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the CheckboxControl at index.
- @param index Index value.
  \*/
  [index: number]: CheckboxControl

/\*\*

- Creates a CheckboxControl.
- @param withProperties Starting property values for the new CheckboxControl
  \*/
  add(withProperties: object): CheckboxControl

/\*\*

- Selects an arbitrary CheckboxControl from the collection.
  \*/
  anyItem(): CheckboxControl

/\*\*

- Reports the element count for CheckboxControl.
  \*/
  count(): number

/\*\*

- Provides every CheckboxControl in the collection.
  \*/
  everyItem(): CheckboxControl[]

/\*\*

- Provides the first CheckboxControl in the collection.
  \*/
  firstItem(): CheckboxControl

/\*\*

- Finds the CheckboxControl by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): CheckboxControl

/\*\*

- Finds the CheckboxControl by ID.
- @param id ID value.
  \*/
  itemByID(id: number): CheckboxControl

/\*\*

- Builds a range of CheckboxControls.
- @param from Starting CheckboxControl, index, or name for the range.
- @param to Ending CheckboxControl, index, or name for the range.
  \*/
  itemByRange(from: CheckboxControl | number | string, to: CheckboxControl | number | string): CheckboxControl[]

/\*\*

- Provides the final CheckboxControl in the collection.
  \*/
  lastItem(): CheckboxControl

/\*\*

- Provides the middle CheckboxControl in the collection.
  \*/
  middleItem(): CheckboxControl

/\*\*

- Provides the CheckboxControl after obj in collection order.
- @param obj CheckboxControl positioned before the requested CheckboxControl.
  \*/
  nextItem(obj: CheckboxControl): CheckboxControl

/\*\*

- Provides the CheckboxControl before obj in collection order.
- @param obj Index positioned after the requested CheckboxControl.
  \*/
  previousItem(obj: CheckboxControl): CheckboxControl

/\*\*

- Produces source text that can evaluate back to the CheckboxControl.
  \*/
  toSource(): string
  }

/\*\*

- Borderless dialog column that holds controls.
  \*/
  declare class DialogColumn {
  /\*\*
  - Angle combobox collection.
    \*/
    readonly angleComboboxes: AngleComboboxes

/\*\*

- Angle editbox collection.
  \*/
  readonly angleEditboxes: AngleEditboxes

/\*\*

- Border panel collection.
  \*/
  readonly borderPanels: BorderPanels

/\*\*

- Checkbox control collection.
  \*/
  readonly checkboxControls: CheckboxControls

/\*\*

- Dialog row collection.
  \*/
  readonly dialogRows: DialogRows

/\*\*

- Dropdown collection.
  \*/
  readonly dropdowns: Dropdowns

/\*\*

- Enabling group collection.
  \*/
  readonly enablingGroups: EnablingGroups

/\*\*

- Event listener collection.
  \*/
  readonly eventListeners: EventListeners

/\*\*

- Event collection.
  \*/
  readonly events: Events

/\*\*

- Unique ID for the DialogColumn.
  \*/
  readonly id: number

/\*\*

- Position of the DialogColumn inside its parent object.
  \*/
  readonly index: number

/\*\*

- Integer combobox collection.
  \*/
  readonly integerComboboxes: IntegerComboboxes

/\*\*

- Integer editbox collection.
  \*/
  readonly integerEditboxes: IntegerEditboxes

/\*\*

- True when the object specifier resolves to valid objects.
  \*/
  readonly isValid: boolean

/\*\*

- Measurement combobox collection.
  \*/
  readonly measurementComboboxes: MeasurementComboboxes

/\*\*

- Measurement editbox collection.
  \*/
  readonly measurementEditboxes: MeasurementEditboxes

/\*\*

- Owning container for the DialogColumn: Dialog, DialogRow, EnablingGroup, or BorderPanel.
  \*/
  readonly parent: any

/\*\*

- Percent combobox collection.
  \*/
  readonly percentComboboxes: PercentComboboxes

/\*\*

- Percent editbox collection.
  \*/
  readonly percentEditboxes: PercentEditboxes

/\*\*

- Lets multiple properties be assigned together.
  \*/
  properties: object

/\*\*

- Radiobutton group collection.
  \*/
  readonly radiobuttonGroups: RadiobuttonGroups

/\*\*

- Real number combobox collection.
  \*/
  readonly realComboboxes: RealComboboxes

/\*\*

- Real number editbox collection.
  \*/
  readonly realEditboxes: RealEditboxes

/\*\*

- Static text object collection.
  \*/
  readonly staticTexts: StaticTexts

/\*\*

- Text editbox collection.
  \*/
  readonly textEditboxes: TextEditboxes

/\*\*

- Widget collection.
  \*/
  readonly widgets: Widgets

/\*\*

- Registers an event listener.
- @param eventType Event type value.
- @param handler Event handler callback or file.
- @param captures Obsolete parameter.
  \*/
  addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener

/\*\*

- Expands the object specifier into an array of object references.
  \*/
  getElements(): DialogColumn[]

/\*\*

- Unregisters an event listener.
- @param eventType Previously registered event type.
- @param handler Previously registered event handler.
- @param captures Obsolete parameter.
  \*/
  removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean

/\*\*

- Produces source text that can evaluate back to the DialogColumn.
  \*/
  toSource(): string

/\*\*

- Gets the object specifier.
  \*/
  toSpecifier(): string
  }

/\*\*

- Collection wrapper for dialog columns.
  \*/
  declare class DialogColumns {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the DialogColumn at index.
- @param index Index value.
  \*/
  [index: number]: DialogColumn

/\*\*

- Creates a DialogColumn.
- @param withProperties Starting property values for the new DialogColumn
  \*/
  add(withProperties: object): DialogColumn

/\*\*

- Selects an arbitrary DialogColumn from the collection.
  \*/
  anyItem(): DialogColumn

/\*\*

- Reports the element count for DialogColumn.
  \*/
  count(): number

/\*\*

- Provides every DialogColumn in the collection.
  \*/
  everyItem(): DialogColumn[]

/\*\*

- Provides the first DialogColumn in the collection.
  \*/
  firstItem(): DialogColumn

/\*\*

- Finds the DialogColumn by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): DialogColumn

/\*\*

- Finds the DialogColumn by ID.
- @param id ID value.
  \*/
  itemByID(id: number): DialogColumn

/\*\*

- Builds a range of DialogColumns.
- @param from Starting DialogColumn, index, or name for the range.
- @param to Ending DialogColumn, index, or name for the range.
  \*/
  itemByRange(from: DialogColumn | number | string, to: DialogColumn | number | string): DialogColumn[]

/\*\*

- Provides the final DialogColumn in the collection.
  \*/
  lastItem(): DialogColumn

/\*\*

- Provides the middle DialogColumn in the collection.
  \*/
  middleItem(): DialogColumn

/\*\*

- Provides the DialogColumn after obj in collection order.
- @param obj DialogColumn positioned before the requested DialogColumn.
  \*/
  nextItem(obj: DialogColumn): DialogColumn

/\*\*

- Provides the DialogColumn before obj in collection order.
- @param obj Index positioned after the requested DialogColumn.
  \*/
  previousItem(obj: DialogColumn): DialogColumn

/\*\*

- Produces source text that can evaluate back to the DialogColumn.
  \*/
  toSource(): string
  }

/\*\*

- RadiobuttonGroup control containing one or more radiobutton controls.
  \*/
  declare class RadiobuttonGroup extends Widget {
  /\*\*
  - Individual radiobutton control collection.
    \*/
    readonly radiobuttonControls: RadiobuttonControls

/\*\*

- Selection index for a radiobutton group.
  \*/
  selectedButton: number

/\*\*

- Widget collection.
  \*/
  readonly widgets: Widgets
  }

/\*\*

- Collection wrapper for radiobutton groups.
  \*/
  declare class RadiobuttonGroups {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the RadiobuttonGroup at index.
- @param index Index value.
  \*/
  [index: number]: RadiobuttonGroup

/\*\*

- Creates a RadiobuttonGroup.
- @param withProperties Starting property values for the new RadiobuttonGroup
  \*/
  add(withProperties: object): RadiobuttonGroup

/\*\*

- Selects an arbitrary RadiobuttonGroup from the collection.
  \*/
  anyItem(): RadiobuttonGroup

/\*\*

- Reports the element count for RadiobuttonGroup.
  \*/
  count(): number

/\*\*

- Provides every RadiobuttonGroup in the collection.
  \*/
  everyItem(): RadiobuttonGroup[]

/\*\*

- Provides the first RadiobuttonGroup in the collection.
  \*/
  firstItem(): RadiobuttonGroup

/\*\*

- Finds the RadiobuttonGroup by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): RadiobuttonGroup

/\*\*

- Finds the RadiobuttonGroup by ID.
- @param id ID value.
  \*/
  itemByID(id: number): RadiobuttonGroup

/\*\*

- Builds a range of RadiobuttonGroups.
- @param from Starting RadiobuttonGroup, index, or name for the range.
- @param to Ending RadiobuttonGroup, index, or name for the range.
  \*/
  itemByRange(from: RadiobuttonGroup | number | string, to: RadiobuttonGroup | number | string): RadiobuttonGroup[]

/\*\*

- Provides the final RadiobuttonGroup in the collection.
  \*/
  lastItem(): RadiobuttonGroup

/\*\*

- Provides the middle RadiobuttonGroup in the collection.
  \*/
  middleItem(): RadiobuttonGroup

/\*\*

- Provides the RadiobuttonGroup after obj in collection order.
- @param obj RadiobuttonGroup positioned before the requested RadiobuttonGroup.
  \*/
  nextItem(obj: RadiobuttonGroup): RadiobuttonGroup

/\*\*

- Provides the RadiobuttonGroup before obj in collection order.
- @param obj Index positioned after the requested RadiobuttonGroup.
  \*/
  previousItem(obj: RadiobuttonGroup): RadiobuttonGroup

/\*\*

- Produces source text that can evaluate back to the RadiobuttonGroup.
  \*/
  toSource(): string
  }

/\*\*

- Single radiobutton control within a radiobutton group.
  \*/
  declare class RadiobuttonControl extends Widget {
  /\*\*
  - When true, the dialog opens with this control checked.
    \*/
    checkedState: boolean

/\*\*

- Text displayed by the RadiobuttonControl.
  \*/
  staticLabel: string
  }

/\*\*

- Collection wrapper for individual radiobutton controls.
  \*/
  declare class RadiobuttonControls {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the RadiobuttonControl at index.
- @param index Index value.
  \*/
  [index: number]: RadiobuttonControl

/\*\*

- Creates a RadiobuttonControl.
- @param withProperties Starting property values for the new RadiobuttonControl
  \*/
  add(withProperties: object): RadiobuttonControl

/\*\*

- Selects an arbitrary RadiobuttonControl from the collection.
  \*/
  anyItem(): RadiobuttonControl

/\*\*

- Reports the element count for RadiobuttonControl.
  \*/
  count(): number

/\*\*

- Provides every RadiobuttonControl in the collection.
  \*/
  everyItem(): RadiobuttonControl[]

/\*\*

- Provides the first RadiobuttonControl in the collection.
  \*/
  firstItem(): RadiobuttonControl

/\*\*

- Finds the RadiobuttonControl by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): RadiobuttonControl

/\*\*

- Finds the RadiobuttonControl by ID.
- @param id ID value.
  \*/
  itemByID(id: number): RadiobuttonControl

/\*\*

- Builds a range of RadiobuttonControls.
- @param from Starting RadiobuttonControl, index, or name for the range.
- @param to Ending RadiobuttonControl, index, or name for the range.
  \*/
  itemByRange(from: RadiobuttonControl | number | string, to: RadiobuttonControl | number | string): RadiobuttonControl[]

/\*\*

- Provides the final RadiobuttonControl in the collection.
  \*/
  lastItem(): RadiobuttonControl

/\*\*

- Provides the middle RadiobuttonControl in the collection.
  \*/
  middleItem(): RadiobuttonControl

/\*\*

- Provides the RadiobuttonControl after obj in collection order.
- @param obj RadiobuttonControl positioned before the requested RadiobuttonControl.
  \*/
  nextItem(obj: RadiobuttonControl): RadiobuttonControl

/\*\*

- Provides the RadiobuttonControl before obj in collection order.
- @param obj Index positioned after the requested RadiobuttonControl.
  \*/
  previousItem(obj: RadiobuttonControl): RadiobuttonControl

/\*\*

- Produces source text that can evaluate back to the RadiobuttonControl.
  \*/
  toSource(): string
  }

/\*\*

- Numeric entry field that rounds to a whole number. Note: .5 rounds upward.
  \*/
  declare class IntegerEditbox extends Widget {
  /\*\*
  - Initial contents for an editbox control. Note: Do not set both edit contents and edit value; when both appear, the later one in the script takes effect.
    \*/
    editContents: string

/\*\*

- Real-number default for the editbox or combobox. Note: Measurement controls treat this value as points. When the dialog opens, the points value is converted to edit units. Note: Do not set both edit value and edit contents; when both appear, the later one in the script takes effect.
  \*/
  editValue: number

/\*\*

- Value step used when the user selects the control and presses an arrow key while holding Shift.
  \*/
  largeNudge: number
