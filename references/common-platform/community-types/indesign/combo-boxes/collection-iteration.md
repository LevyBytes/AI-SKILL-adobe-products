# ComboBoxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ComboBoxes {
    /**
    - Gets an arbitrary ComboBox from the collection.
      */
      anyItem(): ComboBox
    /**
    - Gets all ComboBox entries from the collection.
      */
      everyItem(): ComboBox[]
    /**
    - Gets the first ComboBox in the collection.
      */
      firstItem(): ComboBox
    /**
    - Gets the final ComboBox in the collection.
      */
      lastItem(): ComboBox
    /**
    - Gets the central ComboBox from the collection.
      */
      middleItem(): ComboBox
    /**
    - Gets the ComboBox positioned immediately after the specified ComboBox.
    - @param obj ComboBox that precedes the requested ComboBox.
      */
      nextItem(obj: ComboBox): ComboBox
    /**
    - Gets the ComboBox positioned immediately before the specified index.
    - @param obj Index of the ComboBox that comes after the requested ComboBox.
      */
      previousItem(obj: ComboBox): ComboBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
