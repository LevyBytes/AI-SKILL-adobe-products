# IntegerCombobox

Community declaration reference: InDesign/2023.

Integer entry control combining a pop-up menu with an entry field. Note: .5 rounds upward.

```typescript
declare class IntegerCombobox extends Widget {
    /**
    - Initial contents for an editbox control. Note: Do not set both edit contents and edit value; when both appear, the later one in the script takes effect.
      */
      editContents: string
    /**

    - Real-number default for the editbox or combobox. Note: Measurement controls treat this value as points. When the dialog opens, the points value is converted to edit units. Note: Do not set both edit value and edit contents; when both appear, the later one in the script takes effect.
      */
      editValue: number
    /**

    - Value step used when the user selects the control and presses an arrow key while holding Shift.
      */
      largeNudge: number
    /**

    - Highest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
      */
      maximumValue: number
    /**

    - Lowest value a user may enter in a numeric editbox or combobox. Note: Measurement editbox and combobox values are interpreted as points regardless of the control's edit units. The points value is converted to the edit unit automatically when the dialog opens.
      */
      minimumValue: number
    /**

    - Value step used when the user selects the control and presses an arrow key.
      */
      smallNudge: number
    /**

    - Dropdown or combobox menu entries, stored as a string array.
      */
      stringList: string[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
