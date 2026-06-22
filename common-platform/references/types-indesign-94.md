# Indesign (part 94)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Highest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
  \*/
  maximumValue: number

/\*\*

- Lowest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
  \*/
  minimumValue: number

/\*\*

- Value step used when the user selects the control and presses an arrow key.
  \*/
  smallNudge: number
  }

/\*\*

- Collection wrapper for integer editboxes.
  \*/
  declare class IntegerEditboxes {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the IntegerEditbox at index.
- @param index Index value.
  \*/
  [index: number]: IntegerEditbox

/\*\*

- Creates a IntegerEditbox.
- @param withProperties Starting property values for the new IntegerEditbox
  \*/
  add(withProperties: object): IntegerEditbox

/\*\*

- Selects an arbitrary IntegerEditbox from the collection.
  \*/
  anyItem(): IntegerEditbox

/\*\*

- Reports the element count for IntegerEditbox.
  \*/
  count(): number

/\*\*

- Provides every IntegerEditbox in the collection.
  \*/
  everyItem(): IntegerEditbox[]

/\*\*

- Provides the first IntegerEditbox in the collection.
  \*/
  firstItem(): IntegerEditbox

/\*\*

- Finds the IntegerEditbox by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): IntegerEditbox

/\*\*

- Finds the IntegerEditbox by ID.
- @param id ID value.
  \*/
  itemByID(id: number): IntegerEditbox

/\*\*

- Builds a range of IntegerEditboxes.
- @param from Starting IntegerEditbox, index, or name for the range.
- @param to Ending IntegerEditbox, index, or name for the range.
  \*/
  itemByRange(from: IntegerEditbox | number | string, to: IntegerEditbox | number | string): IntegerEditbox[]

/\*\*

- Provides the final IntegerEditbox in the collection.
  \*/
  lastItem(): IntegerEditbox

/\*\*

- Provides the middle IntegerEditbox in the collection.
  \*/
  middleItem(): IntegerEditbox

/\*\*

- Provides the IntegerEditbox after obj in collection order.
- @param obj IntegerEditbox positioned before the requested IntegerEditbox.
  \*/
  nextItem(obj: IntegerEditbox): IntegerEditbox

/\*\*

- Provides the IntegerEditbox before obj in collection order.
- @param obj Index positioned after the requested IntegerEditbox.
  \*/
  previousItem(obj: IntegerEditbox): IntegerEditbox

/\*\*

- Produces source text that can evaluate back to the IntegerEditbox.
  \*/
  toSource(): string
  }

/\*\*

- Integer entry control combining a pop-up menu with an entry field. Note: .5 rounds upward.
  \*/
  declare class IntegerCombobox extends Widget {
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

/\*\*

- Highest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
  \*/
  maximumValue: number

/\*\*

- Lowest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
  \*/
  minimumValue: number

/\*\*

- Value step used when the user selects the control and presses an arrow key.
  \*/
  smallNudge: number

/\*\*

- Dropdown or combobox menu entries, stored as a string array.
  \*/
  stringList: string[]
  }

/\*\*

- Collection wrapper for integer comboboxes.
  \*/
  declare class IntegerComboboxes {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the IntegerCombobox at index.
- @param index Index value.
  \*/
  [index: number]: IntegerCombobox

/\*\*

- Creates a IntegerCombobox.
- @param withProperties Starting property values for the new IntegerCombobox
  \*/
  add(withProperties: object): IntegerCombobox

/\*\*

- Selects an arbitrary IntegerCombobox from the collection.
  \*/
  anyItem(): IntegerCombobox

/\*\*

- Reports the element count for IntegerCombobox.
  \*/
  count(): number

/\*\*

- Provides every IntegerCombobox in the collection.
  \*/
  everyItem(): IntegerCombobox[]

/\*\*

- Provides the first IntegerCombobox in the collection.
  \*/
  firstItem(): IntegerCombobox

/\*\*

- Finds the IntegerCombobox by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): IntegerCombobox

/\*\*

- Finds the IntegerCombobox by ID.
- @param id ID value.
  \*/
  itemByID(id: number): IntegerCombobox

/\*\*

- Builds a range of IntegerComboboxes.
- @param from Starting IntegerCombobox, index, or name for the range.
- @param to Ending IntegerCombobox, index, or name for the range.
  \*/
  itemByRange(from: IntegerCombobox | number | string, to: IntegerCombobox | number | string): IntegerCombobox[]

/\*\*

- Provides the final IntegerCombobox in the collection.
  \*/
  lastItem(): IntegerCombobox

/\*\*

- Provides the middle IntegerCombobox in the collection.
  \*/
  middleItem(): IntegerCombobox

/\*\*

- Provides the IntegerCombobox after obj in collection order.
- @param obj IntegerCombobox positioned before the requested IntegerCombobox.
  \*/
  nextItem(obj: IntegerCombobox): IntegerCombobox

/\*\*

- Provides the IntegerCombobox before obj in collection order.
- @param obj Index positioned after the requested IntegerCombobox.
  \*/
  previousItem(obj: IntegerCombobox): IntegerCombobox

/\*\*

- Produces source text that can evaluate back to the IntegerCombobox.
  \*/
  toSource(): string
  }

/\*\*

- Bordered panel with an enabling checkbox. Clicking that checkbox toggles the enabling group between active and inactive states. An enabling group may hold any control mix and count.
  \*/
  declare class EnablingGroup extends Widget {
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

- When true, the dialog opens with this control checked.
  \*/
  checkedState: boolean

/\*\*

- Dialog column collection.
  \*/
  readonly dialogColumns: DialogColumns

/\*\*

- Dropdown collection.
  \*/
  readonly dropdowns: Dropdowns

/\*\*

- Enabling group collection.
  \*/
  readonly enablingGroups: EnablingGroups

/\*\*

- Integer combobox collection.
  \*/
  readonly integerComboboxes: IntegerComboboxes

/\*\*

- Integer editbox collection.
  \*/
  readonly integerEditboxes: IntegerEditboxes

/\*\*

- Measurement combobox collection.
  \*/
  readonly measurementComboboxes: MeasurementComboboxes

/\*\*

- Measurement editbox collection.
  \*/
  readonly measurementEditboxes: MeasurementEditboxes

/\*\*

- Percent combobox collection.
  \*/
  readonly percentComboboxes: PercentComboboxes

/\*\*

- Percent editbox collection.
  \*/
  readonly percentEditboxes: PercentEditboxes

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

- Text displayed by the EnablingGroup.
  \*/
  staticLabel: string

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
  }

/\*\*

- Collection wrapper for enabling groups.
  \*/
  declare class EnablingGroups {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the EnablingGroup at index.
- @param index Index value.
  \*/
  [index: number]: EnablingGroup

/\*\*

- Creates a EnablingGroup.
- @param withProperties Starting property values for the new EnablingGroup
  \*/
  add(withProperties: object): EnablingGroup

/\*\*

- Selects an arbitrary EnablingGroup from the collection.
  \*/
  anyItem(): EnablingGroup

/\*\*

- Reports the element count for EnablingGroup.
  \*/
  count(): number

/\*\*

- Provides every EnablingGroup in the collection.
  \*/
  everyItem(): EnablingGroup[]

/\*\*

- Provides the first EnablingGroup in the collection.
  \*/
  firstItem(): EnablingGroup

/\*\*

- Finds the EnablingGroup by index or name.
- @param index Index or name value.
  \*/
  item(index: number | string): EnablingGroup

/\*\*

- Finds the EnablingGroup by ID.
- @param id ID value.
  \*/
  itemByID(id: number): EnablingGroup

/\*\*

- Builds a range of EnablingGroups.
- @param from Starting EnablingGroup, index, or name for the range.
- @param to Ending EnablingGroup, index, or name for the range.
  \*/
  itemByRange(from: EnablingGroup | number | string, to: EnablingGroup | number | string): EnablingGroup[]

/\*\*

- Provides the final EnablingGroup in the collection.
  \*/
  lastItem(): EnablingGroup

/\*\*

- Provides the middle EnablingGroup in the collection.
  \*/
  middleItem(): EnablingGroup

/\*\*

- Provides the EnablingGroup after obj in collection order.
- @param obj EnablingGroup positioned before the requested EnablingGroup.
  \*/
  nextItem(obj: EnablingGroup): EnablingGroup

/\*\*

- Provides the EnablingGroup before obj in collection order.
- @param obj Index positioned after the requested EnablingGroup.
  \*/
  previousItem(obj: EnablingGroup): EnablingGroup

/\*\*

- Produces source text that can evaluate back to the EnablingGroup.
  \*/
  toSource(): string
  }

/\*\*

- Degree entry control combining a pop-up menu with an entry field.
  \*/
  declare class AngleCombobox extends Widget {
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

/\*\*

- Highest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
  \*/
  maximumValue: number

/\*\*

- Lowest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
  \*/
  minimumValue: number

/\*\*

- Value step used when the user selects the control and presses an arrow key.
  \*/
  smallNudge: number

/\*\*

- Dropdown or combobox menu entries, stored as a string array.
  \*/
  stringList: string[]
  }

/\*\*

- Collection wrapper for angle comboboxes.
  \*/
  declare class AngleComboboxes {
  /\*\*
  - How many objects the collection contains.
    \*/
    readonly length: number

/\*\*

- Accesses the AngleCombobox at index.
- @param index Index value.
  \*/
  [index: number]: AngleCombobox

/\*\*

- Creates a AngleCombobox.
- @param withProperties Starting property values for the new AngleCombobox
  \*/
  add(withProperties: object): AngleCombobox

/\*\*

- Selects an arbitrary AngleCombobox from the collection.
  \*/
  anyItem(): AngleCombobox

/\*\*

- Gives the element total for AngleCombobox.
  \*/
  count(): number

/\*\*

- Provides all AngleCombobox members held by the collection.
  \*/
  everyItem(): AngleCombobox[]

/\*\*

- Provides the collection's initial AngleCombobox.
  \*/
  firstItem(): AngleCombobox

/\*\*

- Finds an AngleCombobox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): AngleCombobox

/\*\*

- Finds an AngleCombobox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): AngleCombobox

/\*\*

- Provides AngleComboboxes bounded by the supplied range.
- @param from Opening AngleCombobox, index, or name for the range.
- @param to Closing AngleCombobox, index, or name for the range.
  \*/
  itemByRange(from: AngleCombobox | number | string, to: AngleCombobox | number | string): AngleCombobox[]

/\*\*

- Provides the collection's final AngleCombobox.
  \*/
  lastItem(): AngleCombobox

/\*\*

- Provides the collection's central AngleCombobox.
  \*/
  middleItem(): AngleCombobox

/\*\*

- Provides the AngleCombobox positioned after the supplied AngleCombobox.
- @param obj AngleCombobox positioned immediately before the one being requested.
  \*/
  nextItem(obj: AngleCombobox): AngleCombobox

/\*\*

- Provides the AngleCombobox positioned before the supplied index.
- @param obj Index of the AngleCombobox immediately after the one being requested.
  \*/
  previousItem(obj: AngleCombobox): AngleCombobox

/\*\*

- Builds executable source text that resolves back to the AngleCombobox.
  \*/
  toSource(): string
  }

/\*\*

- PercentCombobox is a percentage input control with both a pop-up menu and an editable field.
  \*/
  declare class PercentCombobox extends Widget {
  /\*\*
  - Default text stored in an editbox control. Note: specify either edit contents or edit value, not both. When both appear, the later setting in the script wins.
    \*/
    editContents: string

/\*\*

- Default real-number value for the editbox or combobox. Note: measurement controls read the value as points, then convert that points value into edit units as the dialog opens. Note: specify either edit value or edit contents, not both. When both appear, the later setting in the script wins.
  \*/
  editValue: number

/\*\*

- Step size used when the control is selected and the user holds Shift while pressing a keyboard arrow key.
  \*/
  largeNudge: number

/\*\*

- Highest numeric entry permitted in the editbox or combobox. Note: a measurement editbox or combobox treats this value as points no matter which edit units the control names. The points value is automatically converted to the edit unit as the dialog opens.
  \*/
  maximumValue: number

/\*\*

- Lowest numeric entry permitted in the editbox or combobox. Note: a measurement editbox or combobox treats this value as points no matter which edit units the control names. The points value is automatically converted to the edit unit as the dialog opens.
  \*/
  minimumValue: number

/\*\*

- Step size used when the selected control receives a keyboard arrow-key press.
  \*/
  smallNudge: number

/\*\*

- Dropdown or combobox menu entries, represented as an array of strings.
  \*/
  stringList: string[]
  }

/\*\*

- PercentComboboxes groups percent combobox controls.
  \*/
  declare class PercentComboboxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the PercentCombobox addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: PercentCombobox

/\*\*

- Adds a PercentCombobox.
- @param withProperties Starting property values for the created PercentCombobox
  \*/
  add(withProperties: object): PercentCombobox

/\*\*

- Provides an arbitrary PercentCombobox from the collection.
  \*/
  anyItem(): PercentCombobox

/\*\*

- Gives the element total for PercentCombobox.
  \*/
  count(): number

/\*\*

- Provides all PercentCombobox members held by the collection.
  \*/
  everyItem(): PercentCombobox[]

/\*\*

- Provides the collection's initial PercentCombobox.
  \*/
  firstItem(): PercentCombobox

/\*\*

- Finds a PercentCombobox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): PercentCombobox

/\*\*

- Finds a PercentCombobox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): PercentCombobox

/\*\*

- Provides PercentComboboxes bounded by the supplied range.
- @param from Opening PercentCombobox, index, or name for the range.
- @param to Closing PercentCombobox, index, or name for the range.
  \*/
  itemByRange(from: PercentCombobox | number | string, to: PercentCombobox | number | string): PercentCombobox[]

/\*\*

- Provides the collection's final PercentCombobox.
  \*/
  lastItem(): PercentCombobox

/\*\*

- Provides the collection's central PercentCombobox.
  \*/
  middleItem(): PercentCombobox

/\*\*

- Provides the PercentCombobox positioned after the supplied PercentCombobox.
- @param obj PercentCombobox positioned immediately before the one being requested.
  \*/
  nextItem(obj: PercentCombobox): PercentCombobox

/\*\*

- Provides the PercentCombobox positioned before the supplied index.
- @param obj Index of the PercentCombobox immediately after the one being requested.
  \*/
  previousItem(obj: PercentCombobox): PercentCombobox

/\*\*

- Builds executable source text that resolves back to the PercentCombobox.
  \*/
  toSource(): string
  }

/\*\*

- RealEditbox is an entry field for high-precision numeric values.
  \*/
  declare class RealEditbox extends Widget {
  /\*\*
  - Default text stored in an editbox control. Note: specify either edit contents or edit value, not both. When both appear, the later setting in the script wins.
    \*/
    editContents: string

/\*\*

- Default real-number value for the editbox or combobox. Note: measurement controls read the value as points, then convert that points value into edit units as the dialog opens. Note: specify either edit value or edit contents, not both. When both appear, the later setting in the script wins.
  \*/
  editValue: number

/\*\*

- Step size used when the control is selected and the user holds Shift while pressing a keyboard arrow key.
  \*/
  largeNudge: number

/\*\*

- Highest numeric entry permitted in the editbox or combobox. Note: a measurement editbox or combobox treats this value as points no matter which edit units the control names. The points value is automatically converted to the edit unit as the dialog opens.
  \*/
  maximumValue: number

/\*\*

- Lowest numeric entry permitted in the editbox or combobox. Note: a measurement editbox or combobox treats this value as points no matter which edit units the control names. The points value is automatically converted to the edit unit as the dialog opens.
  \*/
  minimumValue: number

/\*\*

- Step size used when the selected control receives a keyboard arrow-key press.
  \*/
  smallNudge: number
  }

/\*\*

- RealEditboxes groups real number editbox controls.
  \*/
  declare class RealEditboxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the RealEditbox addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: RealEditbox

/\*\*

- Adds a RealEditbox.
- @param withProperties Starting property values for the created RealEditbox
  \*/
  add(withProperties: object): RealEditbox

/\*\*

- Provides an arbitrary RealEditbox from the collection.
  \*/
  anyItem(): RealEditbox

/\*\*

- Gives the element total for RealEditbox.
  \*/
  count(): number

/\*\*

- Provides all RealEditbox members held by the collection.
  \*/
  everyItem(): RealEditbox[]

/\*\*

- Provides the collection's initial RealEditbox.
  \*/
  firstItem(): RealEditbox

/\*\*

- Finds a RealEditbox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): RealEditbox

/\*\*

- Finds a RealEditbox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): RealEditbox

/\*\*

- Provides RealEditboxes bounded by the supplied range.
- @param from Opening RealEditbox, index, or name for the range.
- @param to Closing RealEditbox, index, or name for the range.
  \*/
  itemByRange(from: RealEditbox | number | string, to: RealEditbox | number | string): RealEditbox[]

/\*\*

- Provides the collection's final RealEditbox.
  \*/
  lastItem(): RealEditbox

/\*\*

- Provides the collection's central RealEditbox.
  \*/
  middleItem(): RealEditbox

/\*\*

- Provides the RealEditbox positioned after the supplied RealEditbox.
- @param obj RealEditbox positioned immediately before the one being requested.
  \*/
  nextItem(obj: RealEditbox): RealEditbox
