# TextEditboxes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TextEditboxes {
    /**
    - Selects an arbitrary TextEditbox from the collection.
      */
      anyItem(): TextEditbox
    /**
    - Provides every TextEditbox in the collection.
      */
      everyItem(): TextEditbox[]
    /**
    - Provides the first TextEditbox in the collection.
      */
      firstItem(): TextEditbox
    /**
    - Provides the final TextEditbox in the collection.
      */
      lastItem(): TextEditbox
    /**
    - Provides the middle TextEditbox in the collection.
      */
      middleItem(): TextEditbox
    /**
    - Provides the TextEditbox after obj in collection order.
    - @param obj TextEditbox positioned before the requested TextEditbox.
      */
      nextItem(obj: TextEditbox): TextEditbox
    /**
    - Provides the TextEditbox before obj in collection order.
    - @param obj Index positioned after the requested TextEditbox.
      */
      previousItem(obj: TextEditbox): TextEditbox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
