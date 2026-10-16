# CheckBoxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CheckBoxes {
    /**
    - Gets an arbitrary CheckBox from the collection.
      */
      anyItem(): CheckBox
    /**
    - Gets all CheckBox entries from the collection.
      */
      everyItem(): CheckBox[]
    /**
    - Gets the first CheckBox in the collection.
      */
      firstItem(): CheckBox
    /**
    - Gets the final CheckBox in the collection.
      */
      lastItem(): CheckBox
    /**
    - Gets the central CheckBox from the collection.
      */
      middleItem(): CheckBox
    /**
    - Gets the CheckBox positioned immediately after the specified CheckBox.
    - @param obj CheckBox that precedes the requested CheckBox.
      */
      nextItem(obj: CheckBox): CheckBox
    /**
    - Gets the CheckBox positioned immediately before the specified index.
    - @param obj Index of the CheckBox that comes after the requested CheckBox.
      */
      previousItem(obj: CheckBox): CheckBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
