# ShowHideFieldsBehavior

Community declaration reference: InDesign/2023.

Represents a show/hide fields behavior object.

```typescript
declare class ShowHideFieldsBehavior extends Behavior {
    /**
    - Hidden interactive objects.
      */
      fieldsToHide: Button[] | CheckBoxes | ComboBoxes | ListBoxes | RadioButtons | TextBoxes | SignatureFields
    /**

    - Visible interactive objects.
      */
      fieldsToShow: Button[] | CheckBoxes | ComboBoxes | ListBoxes | RadioButtons | TextBoxes | SignatureFields
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
