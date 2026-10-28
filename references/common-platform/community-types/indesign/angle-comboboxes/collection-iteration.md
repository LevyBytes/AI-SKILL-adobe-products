# AngleComboboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class AngleComboboxes {
    /**
    - Selects an arbitrary AngleCombobox from the collection.
      */
      anyItem(): AngleCombobox
    /**
    - Provides all AngleCombobox members held by the collection.
      */
      everyItem(): AngleCombobox[]
    /**
    - Provides the collection's initial AngleCombobox.
      */
      firstItem(): AngleCombobox
    /**
    - Provides the collection's final AngleCombobox.
      */
      lastItem(): AngleCombobox
    /**
    - Provides the collection's central AngleCombobox.
      */
      middleItem(): AngleCombobox
    /**
    - Provides the AngleCombobox positioned after the supplied AngleCombobox.
    - @param obj AngleCombobox positioned immediately before the one being requested.
      */
      nextItem(obj: AngleCombobox): AngleCombobox
    /**
    - Provides the AngleCombobox positioned before the supplied index.
    - @param obj Index of the AngleCombobox immediately after the one being requested.
      */
      previousItem(obj: AngleCombobox): AngleCombobox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
