# MeasurementComboboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MeasurementComboboxes {
    /**
    - Provides an arbitrary MeasurementCombobox from the collection.
      */
      anyItem(): MeasurementCombobox
    /**
    - Provides all MeasurementCombobox members held by the collection.
      */
      everyItem(): MeasurementCombobox[]
    /**
    - Provides the collection's initial MeasurementCombobox.
      */
      firstItem(): MeasurementCombobox
    /**
    - Provides the collection's final MeasurementCombobox.
      */
      lastItem(): MeasurementCombobox
    /**
    - Provides the collection's central MeasurementCombobox.
      */
      middleItem(): MeasurementCombobox
    /**
    - Provides the MeasurementCombobox positioned after the supplied MeasurementCombobox.
    - @param obj MeasurementCombobox positioned immediately before the one being requested.
      */
      nextItem(obj: MeasurementCombobox): MeasurementCombobox
    /**
    - Provides the MeasurementCombobox positioned before the supplied index.
    - @param obj Index of the MeasurementCombobox immediately after the one being requested.
      */
      previousItem(obj: MeasurementCombobox): MeasurementCombobox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
