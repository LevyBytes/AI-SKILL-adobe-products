# MeasurementCombobox

Community declaration reference: InDesign/2023.

MeasurementCombobox is a measurement input control with both a pop-up menu and an editable field.

```typescript
declare class MeasurementCombobox extends Widget {
    /**
    - Default text stored in an editbox control. Note: specify either edit contents or edit value, not both. When both appear, the later setting in the script wins.
      */
      editContents: string
    /**

    - MeasurementUnits used when showing values in the measurement control.
      */
      editUnits: MeasurementUnits
    /**

    - Default real-number value for the editbox or combobox. Note: measurement controls read the value as points, then convert that points value into edit units as the dialog opens. Note: specify either edit value or edit contents, not both. When both appear, the later setting in the script wins.
      */
      editValue: number
    /**

    - Step size used when the control is selected and the user holds Shift while pressing a keyboard arrow key.
      */
      largeNudge: number
    /**

    - Highest numeric entry permitted in the editbox or combobox. Note: a measurement editbox or combobox treats this value as points no matter which edit units the control names. The points value is automatically converted to the edit unit as the dialog opens.
      */
      maximumValue: number
    /**

    - Lowest numeric entry permitted in the editbox or combobox. Note: a measurement editbox or combobox treats this value as points no matter which edit units the control names. The points value is automatically converted to the edit unit as the dialog opens.
      */
      minimumValue: number
    /**

    - Step size used when the selected control receives a keyboard arrow-key press.
      */
      smallNudge: number
    /**

    - Dropdown or combobox menu entries, represented as an array of strings.
      */
      stringList: string[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
