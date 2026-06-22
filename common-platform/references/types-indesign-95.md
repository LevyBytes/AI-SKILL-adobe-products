# Indesign (part 95)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Provides the RealEditbox positioned before the supplied index.
- @param obj Index of the RealEditbox immediately after the one being requested.
  \*/
  previousItem(obj: RealEditbox): RealEditbox

/\*\*

- Builds executable source text that resolves back to the RealEditbox.
  \*/
  toSource(): string
  }

/\*\*

- PercentEditbox is an entry field for percentage values.
  \*/
  declare class PercentEditbox extends Widget {
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

- PercentEditboxes groups percent editbox controls.
  \*/
  declare class PercentEditboxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the PercentEditbox addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: PercentEditbox

/\*\*

- Adds a PercentEditbox.
- @param withProperties Starting property values for the created PercentEditbox
  \*/
  add(withProperties: object): PercentEditbox

/\*\*

- Provides an arbitrary PercentEditbox from the collection.
  \*/
  anyItem(): PercentEditbox

/\*\*

- Gives the element total for PercentEditbox.
  \*/
  count(): number

/\*\*

- Provides all PercentEditbox members held by the collection.
  \*/
  everyItem(): PercentEditbox[]

/\*\*

- Provides the collection's initial PercentEditbox.
  \*/
  firstItem(): PercentEditbox

/\*\*

- Finds a PercentEditbox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): PercentEditbox

/\*\*

- Finds a PercentEditbox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): PercentEditbox

/\*\*

- Provides PercentEditboxes bounded by the supplied range.
- @param from Opening PercentEditbox, index, or name for the range.
- @param to Closing PercentEditbox, index, or name for the range.
  \*/
  itemByRange(from: PercentEditbox | number | string, to: PercentEditbox | number | string): PercentEditbox[]

/\*\*

- Provides the collection's final PercentEditbox.
  \*/
  lastItem(): PercentEditbox

/\*\*

- Provides the collection's central PercentEditbox.
  \*/
  middleItem(): PercentEditbox

/\*\*

- Provides the PercentEditbox positioned after the supplied PercentEditbox.
- @param obj PercentEditbox positioned immediately before the one being requested.
  \*/
  nextItem(obj: PercentEditbox): PercentEditbox

/\*\*

- Provides the PercentEditbox positioned before the supplied index.
- @param obj Index of the PercentEditbox immediately after the one being requested.
  \*/
  previousItem(obj: PercentEditbox): PercentEditbox

/\*\*

- Builds executable source text that resolves back to the PercentEditbox.
  \*/
  toSource(): string
  }

/\*\*

- AngleEditbox is an entry field for degree values.
  \*/
  declare class AngleEditbox extends Widget {
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

- AngleEditboxes groups angle editbox controls.
  \*/
  declare class AngleEditboxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the AngleEditbox addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: AngleEditbox

/\*\*

- Adds an AngleEditbox.
- @param withProperties Starting property values for the created AngleEditbox
  \*/
  add(withProperties: object): AngleEditbox

/\*\*

- Provides an arbitrary AngleEditbox from the collection.
  \*/
  anyItem(): AngleEditbox

/\*\*

- Gives the element total for AngleEditbox.
  \*/
  count(): number

/\*\*

- Provides all AngleEditbox members held by the collection.
  \*/
  everyItem(): AngleEditbox[]

/\*\*

- Provides the collection's initial AngleEditbox.
  \*/
  firstItem(): AngleEditbox

/\*\*

- Finds an AngleEditbox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): AngleEditbox

/\*\*

- Finds an AngleEditbox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): AngleEditbox

/\*\*

- Provides AngleEditboxes bounded by the supplied range.
- @param from Opening AngleEditbox, index, or name for the range.
- @param to Closing AngleEditbox, index, or name for the range.
  \*/
  itemByRange(from: AngleEditbox | number | string, to: AngleEditbox | number | string): AngleEditbox[]

/\*\*

- Provides the collection's final AngleEditbox.
  \*/
  lastItem(): AngleEditbox

/\*\*

- Provides the collection's central AngleEditbox.
  \*/
  middleItem(): AngleEditbox

/\*\*

- Provides the AngleEditbox positioned after the supplied AngleEditbox.
- @param obj AngleEditbox positioned immediately before the one being requested.
  \*/
  nextItem(obj: AngleEditbox): AngleEditbox

/\*\*

- Provides the AngleEditbox positioned before the supplied index.
- @param obj Index of the AngleEditbox immediately after the one being requested.
  \*/
  previousItem(obj: AngleEditbox): AngleEditbox

/\*\*

- Builds executable source text that resolves back to the AngleEditbox.
  \*/
  toSource(): string
  }

/\*\*

- RealCombobox is a high-precision numeric control with both a pop-up menu and an editable field.
  \*/
  declare class RealCombobox extends Widget {
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

- RealComboboxes groups real number combobox controls.
  \*/
  declare class RealComboboxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the RealCombobox addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: RealCombobox

/\*\*

- Adds a RealCombobox.
- @param withProperties Starting property values for the created RealCombobox
  \*/
  add(withProperties: object): RealCombobox

/\*\*

- Provides an arbitrary RealCombobox from the collection.
  \*/
  anyItem(): RealCombobox

/\*\*

- Gives the element total for RealCombobox.
  \*/
  count(): number

/\*\*

- Provides all RealCombobox members held by the collection.
  \*/
  everyItem(): RealCombobox[]

/\*\*

- Provides the collection's initial RealCombobox.
  \*/
  firstItem(): RealCombobox

/\*\*

- Finds a RealCombobox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): RealCombobox

/\*\*

- Finds a RealCombobox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): RealCombobox

/\*\*

- Provides RealComboboxes bounded by the supplied range.
- @param from Opening RealCombobox, index, or name for the range.
- @param to Closing RealCombobox, index, or name for the range.
  \*/
  itemByRange(from: RealCombobox | number | string, to: RealCombobox | number | string): RealCombobox[]

/\*\*

- Provides the collection's final RealCombobox.
  \*/
  lastItem(): RealCombobox

/\*\*

- Provides the collection's central RealCombobox.
  \*/
  middleItem(): RealCombobox

/\*\*

- Provides the RealCombobox positioned after the supplied RealCombobox.
- @param obj RealCombobox positioned immediately before the one being requested.
  \*/
  nextItem(obj: RealCombobox): RealCombobox

/\*\*

- Provides the RealCombobox positioned before the supplied index.
- @param obj Index of the RealCombobox immediately after the one being requested.
  \*/
  previousItem(obj: RealCombobox): RealCombobox

/\*\*

- Builds executable source text that resolves back to the RealCombobox.
  \*/
  toSource(): string
  }

/\*\*

- MeasurementCombobox is a measurement input control with both a pop-up menu and an editable field.
  \*/
  declare class MeasurementCombobox extends Widget {
  /\*\*
  - Default text stored in an editbox control. Note: specify either edit contents or edit value, not both. When both appear, the later setting in the script wins.
    \*/
    editContents: string

/\*\*

- MeasurementUnits used when showing values in the measurement control.
  \*/
  editUnits: MeasurementUnits

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

- MeasurementComboboxes groups measurement combobox controls.
  \*/
  declare class MeasurementComboboxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the MeasurementCombobox addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: MeasurementCombobox

/\*\*

- Adds a MeasurementCombobox.
- @param withProperties Starting property values for the created MeasurementCombobox
  \*/
  add(withProperties: object): MeasurementCombobox

/\*\*

- Provides an arbitrary MeasurementCombobox from the collection.
  \*/
  anyItem(): MeasurementCombobox

/\*\*

- Gives the element total for MeasurementCombobox.
  \*/
  count(): number

/\*\*

- Provides all MeasurementCombobox members held by the collection.
  \*/
  everyItem(): MeasurementCombobox[]

/\*\*

- Provides the collection's initial MeasurementCombobox.
  \*/
  firstItem(): MeasurementCombobox

/\*\*

- Finds a MeasurementCombobox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): MeasurementCombobox

/\*\*

- Finds a MeasurementCombobox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): MeasurementCombobox

/\*\*

- Provides MeasurementComboboxes bounded by the supplied range.
- @param from Opening MeasurementCombobox, index, or name for the range.
- @param to Closing MeasurementCombobox, index, or name for the range.
  \*/
  itemByRange(from: MeasurementCombobox | number | string, to: MeasurementCombobox | number | string): MeasurementCombobox[]

/\*\*

- Provides the collection's final MeasurementCombobox.
  \*/
  lastItem(): MeasurementCombobox

/\*\*

- Provides the collection's central MeasurementCombobox.
  \*/
  middleItem(): MeasurementCombobox

/\*\*

- Provides the MeasurementCombobox positioned after the supplied MeasurementCombobox.
- @param obj MeasurementCombobox positioned immediately before the one being requested.
  \*/
  nextItem(obj: MeasurementCombobox): MeasurementCombobox

/\*\*

- Provides the MeasurementCombobox positioned before the supplied index.
- @param obj Index of the MeasurementCombobox immediately after the one being requested.
  \*/
  previousItem(obj: MeasurementCombobox): MeasurementCombobox

/\*\*

- Builds executable source text that resolves back to the MeasurementCombobox.
  \*/
  toSource(): string
  }

/\*\*

- MeasurementEditbox is an entry field for measurement values.
  \*/
  declare class MeasurementEditbox extends Widget {
  /\*\*
  - Default text stored in an editbox control. Note: specify either edit contents or edit value, not both. When both appear, the later setting in the script wins.
    \*/
    editContents: string

/\*\*

- MeasurementUnits used when showing values in the measurement control.
  \*/
  editUnits: MeasurementUnits

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

- MeasurementEditboxes groups measurement editbox controls.
  \*/
  declare class MeasurementEditboxes {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the MeasurementEditbox addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: MeasurementEditbox

/\*\*

- Adds a MeasurementEditbox.
- @param withProperties Starting property values for the created MeasurementEditbox
  \*/
  add(withProperties: object): MeasurementEditbox

/\*\*

- Provides an arbitrary MeasurementEditbox from the collection.
  \*/
  anyItem(): MeasurementEditbox

/\*\*

- Gives the element total for MeasurementEditbox.
  \*/
  count(): number

/\*\*

- Provides all MeasurementEditbox members held by the collection.
  \*/
  everyItem(): MeasurementEditbox[]

/\*\*

- Provides the collection's initial MeasurementEditbox.
  \*/
  firstItem(): MeasurementEditbox

/\*\*

- Finds a MeasurementEditbox by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): MeasurementEditbox

/\*\*

- Finds a MeasurementEditbox by its supplied ID.
- @param id ID to resolve.
  \*/
  itemByID(id: number): MeasurementEditbox

/\*\*

- Provides MeasurementEditboxes bounded by the supplied range.
- @param from Opening MeasurementEditbox, index, or name for the range.
- @param to Closing MeasurementEditbox, index, or name for the range.
  \*/
  itemByRange(from: MeasurementEditbox | number | string, to: MeasurementEditbox | number | string): MeasurementEditbox[]

/\*\*

- Provides the collection's final MeasurementEditbox.
  \*/
  lastItem(): MeasurementEditbox

/\*\*

- Provides the collection's central MeasurementEditbox.
  \*/
  middleItem(): MeasurementEditbox

/\*\*

- Provides the MeasurementEditbox positioned after the supplied MeasurementEditbox.
- @param obj MeasurementEditbox positioned immediately before the one being requested.
  \*/
  nextItem(obj: MeasurementEditbox): MeasurementEditbox

/\*\*

- Provides the MeasurementEditbox positioned before the supplied index.
- @param obj Index of the MeasurementEditbox immediately after the one being requested.
  \*/
  previousItem(obj: MeasurementEditbox): MeasurementEditbox

/\*\*

- Builds executable source text that resolves back to the MeasurementEditbox.
  \*/
  toSource(): string
  }

/\*\*

- BorderPanel is a dialog panel with a border that can hold controls of any type and count.
  \*/
  declare class BorderPanel extends Widget {
  /\*\*
  - AngleComboboxes collection.
    \*/
    readonly angleComboboxes: AngleComboboxes

/\*\*

- AngleEditboxes collection.
  \*/
  readonly angleEditboxes: AngleEditboxes

/\*\*

- BorderPanels collection.
  \*/
  readonly borderPanels: BorderPanels

/\*\*

- CheckboxControls collection.
  \*/
  readonly checkboxControls: CheckboxControls

/\*\*

- DialogColumns collection.
  \*/
  readonly dialogColumns: DialogColumns

/\*\*

- Dropdowns collection.
  \*/
  readonly dropdowns: Dropdowns

/\*\*

- EnablingGroups collection.
  \*/
  readonly enablingGroups: EnablingGroups

/\*\*

- IntegerComboboxes collection.
  \*/
  readonly integerComboboxes: IntegerComboboxes

/\*\*

- IntegerEditboxes collection.
  \*/
  readonly integerEditboxes: IntegerEditboxes

/\*\*

- MeasurementComboboxes collection.
  \*/
  readonly measurementComboboxes: MeasurementComboboxes

/\*\*

- MeasurementEditboxes collection.
  \*/
  readonly measurementEditboxes: MeasurementEditboxes

/\*\*

- PercentComboboxes collection.
  \*/
  readonly percentComboboxes: PercentComboboxes

/\*\*

- PercentEditboxes collection.
  \*/
  readonly percentEditboxes: PercentEditboxes

/\*\*

- RadiobuttonGroups collection.
  \*/
  readonly radiobuttonGroups: RadiobuttonGroups

/\*\*

- RealComboboxes collection.
  \*/
  readonly realComboboxes: RealComboboxes

/\*\*

- RealEditboxes collection.
  \*/
  readonly realEditboxes: RealEditboxes

/\*\*

- StaticTexts collection.
  \*/
  readonly staticTexts: StaticTexts

/\*\*

- TextEditboxes collection.
  \*/
  readonly textEditboxes: TextEditboxes

/\*\*

- Widgets collection.
  \*/
  readonly widgets: Widgets
  }

/\*\*

- BorderPanels groups border panel objects.
  \*/
  declare class BorderPanels {
  /\*\*
  - Count of objects held by the collection.
    \*/
    readonly length: number

/\*\*

- Provides the BorderPanel addressed by the given index.
- @param index Index to resolve.
  \*/
  [index: number]: BorderPanel

/\*\*

- Adds a BorderPanel.
- @param withProperties Starting property values for the created BorderPanel
  \*/
  add(withProperties: object): BorderPanel

/\*\*

- Provides an arbitrary BorderPanel from the collection.
  \*/
  anyItem(): BorderPanel

/\*\*

- Gives the element total for BorderPanel.
  \*/
  count(): number

/\*\*

- Provides all BorderPanel members held by the collection.
  \*/
  everyItem(): BorderPanel[]

/\*\*

- Provides the collection's initial BorderPanel.
  \*/
  firstItem(): BorderPanel

/\*\*

- Finds a BorderPanel by the supplied index or name.
- @param index Index or name to resolve.
  \*/
  item(index: number | string): BorderPanel
