# Swatches collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Swatches {
    /**
    - Chooses any Swatch from the collection.
      */
      anyItem(): Swatch
    /**
    - Provides all Swatch entries from the collection.
      */
      everyItem(): Swatch[]
    /**
    - Provides the first Swatch entry in this collection.
      */
      firstItem(): Swatch
    /**
    - Provides the final Swatch entry in this collection.
      */
      lastItem(): Swatch
    /**
    - Provides the central Swatch entry in this collection.
      */
      middleItem(): Swatch
    /**
    - Provides the Swatch positioned after the supplied Swatch.
    - @param obj Swatch placed before the target Swatch.
      */
      nextItem(obj: Swatch): Swatch
    /**
    - Provides the Swatch positioned before the supplied index.
    - @param obj Index of the Swatch placed after the target Swatch.
      */
      previousItem(obj: Swatch): Swatch
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
