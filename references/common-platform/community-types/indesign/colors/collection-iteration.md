# Colors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Colors {
    /**
    - Chooses any Color from the collection.
      */
      anyItem(): Color
    /**
    - Provides all Color entries from the collection.
      */
      everyItem(): Color[]
    /**
    - Provides the first Color entry in this collection.
      */
      firstItem(): Color
    /**
    - Provides the final Color entry in this collection.
      */
      lastItem(): Color
    /**
    - Provides the central Color entry in this collection.
      */
      middleItem(): Color
    /**
    - Provides the Color positioned after the supplied Color.
    - @param obj Color placed before the target Color.
      */
      nextItem(obj: Color): Color
    /**
    - Provides the Color positioned before the supplied index.
    - @param obj Index of the Color placed after the target Color.
      */
      previousItem(obj: Color): Color
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
