# Gradients collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Gradients {
    /**
    - Chooses any Gradient from the collection.
      */
      anyItem(): Gradient
    /**
    - Provides all Gradient entries from the collection.
      */
      everyItem(): Gradient[]
    /**
    - Provides the first Gradient entry in this collection.
      */
      firstItem(): Gradient
    /**
    - Provides the final Gradient entry in this collection.
      */
      lastItem(): Gradient
    /**
    - Provides the central Gradient entry in this collection.
      */
      middleItem(): Gradient
    /**
    - Provides the Gradient positioned after the supplied Gradient.
    - @param obj Gradient placed before the target Gradient.
      */
      nextItem(obj: Gradient): Gradient
    /**
    - Provides the Gradient positioned before the supplied index.
    - @param obj Index of the Gradient placed after the target Gradient.
      */
      previousItem(obj: Gradient): Gradient
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
