# MeasurementEditboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MeasurementEditboxes {
    /**
    - Provides an arbitrary MeasurementEditbox from the collection.
      */
      anyItem(): MeasurementEditbox
    /**
    - Provides all MeasurementEditbox members held by the collection.
      */
      everyItem(): MeasurementEditbox[]
    /**
    - Provides the collection's initial MeasurementEditbox.
      */
      firstItem(): MeasurementEditbox
    /**
    - Provides the collection's final MeasurementEditbox.
      */
      lastItem(): MeasurementEditbox
    /**
    - Provides the collection's central MeasurementEditbox.
      */
      middleItem(): MeasurementEditbox
    /**
    - Provides the MeasurementEditbox positioned after the supplied MeasurementEditbox.
    - @param obj MeasurementEditbox positioned immediately before the one being requested.
      */
      nextItem(obj: MeasurementEditbox): MeasurementEditbox
    /**
    - Provides the MeasurementEditbox positioned before the supplied index.
    - @param obj Index of the MeasurementEditbox immediately after the one being requested.
      */
      previousItem(obj: MeasurementEditbox): MeasurementEditbox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
