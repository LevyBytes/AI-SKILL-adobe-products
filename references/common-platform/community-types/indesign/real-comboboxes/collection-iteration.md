# RealComboboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class RealComboboxes {
    /**
    - Provides an arbitrary RealCombobox from the collection.
      */
      anyItem(): RealCombobox
    /**
    - Provides all RealCombobox members held by the collection.
      */
      everyItem(): RealCombobox[]
    /**
    - Provides the collection's initial RealCombobox.
      */
      firstItem(): RealCombobox
    /**
    - Provides the collection's final RealCombobox.
      */
      lastItem(): RealCombobox
    /**
    - Provides the collection's central RealCombobox.
      */
      middleItem(): RealCombobox
    /**
    - Provides the RealCombobox positioned after the supplied RealCombobox.
    - @param obj RealCombobox positioned immediately before the one being requested.
      */
      nextItem(obj: RealCombobox): RealCombobox
    /**
    - Provides the RealCombobox positioned before the supplied index.
    - @param obj Index of the RealCombobox immediately after the one being requested.
      */
      previousItem(obj: RealCombobox): RealCombobox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
