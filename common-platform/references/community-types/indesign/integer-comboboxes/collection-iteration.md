# IntegerComboboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class IntegerComboboxes {
    /**
    - Selects an arbitrary IntegerCombobox from the collection.
      */
      anyItem(): IntegerCombobox
    /**
    - Provides every IntegerCombobox in the collection.
      */
      everyItem(): IntegerCombobox[]
    /**
    - Provides the first IntegerCombobox in the collection.
      */
      firstItem(): IntegerCombobox
    /**
    - Provides the final IntegerCombobox in the collection.
      */
      lastItem(): IntegerCombobox
    /**
    - Provides the middle IntegerCombobox in the collection.
      */
      middleItem(): IntegerCombobox
    /**
    - Provides the IntegerCombobox after obj in collection order.
    - @param obj IntegerCombobox positioned before the requested IntegerCombobox.
      */
      nextItem(obj: IntegerCombobox): IntegerCombobox
    /**
    - Provides the IntegerCombobox before obj in collection order.
    - @param obj Index positioned after the requested IntegerCombobox.
      */
      previousItem(obj: IntegerCombobox): IntegerCombobox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
