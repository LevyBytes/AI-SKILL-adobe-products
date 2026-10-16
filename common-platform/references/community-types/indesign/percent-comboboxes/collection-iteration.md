# PercentComboboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PercentComboboxes {
    /**
    - Provides an arbitrary PercentCombobox from the collection.
      */
      anyItem(): PercentCombobox
    /**
    - Provides all PercentCombobox members held by the collection.
      */
      everyItem(): PercentCombobox[]
    /**
    - Provides the collection's initial PercentCombobox.
      */
      firstItem(): PercentCombobox
    /**
    - Provides the collection's final PercentCombobox.
      */
      lastItem(): PercentCombobox
    /**
    - Provides the collection's central PercentCombobox.
      */
      middleItem(): PercentCombobox
    /**
    - Provides the PercentCombobox positioned after the supplied PercentCombobox.
    - @param obj PercentCombobox positioned immediately before the one being requested.
      */
      nextItem(obj: PercentCombobox): PercentCombobox
    /**
    - Provides the PercentCombobox positioned before the supplied index.
    - @param obj Index of the PercentCombobox immediately after the one being requested.
      */
      previousItem(obj: PercentCombobox): PercentCombobox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
