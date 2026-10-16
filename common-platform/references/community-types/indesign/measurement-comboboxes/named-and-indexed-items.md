# MeasurementComboboxes named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class MeasurementComboboxes {
    /**
    - Finds a MeasurementCombobox by the supplied index or name.
    - @param index Index or name to resolve.
      */
      item(index: number | string): MeasurementCombobox
    /**
    - Finds a MeasurementCombobox by its supplied ID.
    - @param id ID to resolve.
      */
      itemByID(id: number): MeasurementCombobox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
