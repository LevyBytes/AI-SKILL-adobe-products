# TextBoxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TextBoxes {
    /**
    - Gets any TextBox from the collection.
      */
      anyItem(): TextBox
    /**
    - Gets all TextBox objects in the collection.
      */
      everyItem(): TextBox[]
    /**
    - Gets the first TextBox in the collection.
      */
      firstItem(): TextBox
    /**
    - Gets the final TextBox in the collection.
      */
      lastItem(): TextBox
    /**
    - Gets the middle TextBox in the collection.
      */
      middleItem(): TextBox
    /**
    - Gets the TextBox positioned after the supplied TextBox.
    - @param obj TextBox positioned immediately before the desired TextBox.
      */
      nextItem(obj: TextBox): TextBox
    /**
    - Gets the TextBox whose index comes before the supplied index.
    - @param obj Index belonging to the TextBox after the desired TextBox.
      */
      previousItem(obj: TextBox): TextBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
