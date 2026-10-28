# Tints collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Tints {
    /**
    - Chooses any Tint from the collection.
      */
      anyItem(): Tint
    /**
    - Provides all Tint entries from the collection.
      */
      everyItem(): Tint[]
    /**
    - Provides the first Tint entry in this collection.
      */
      firstItem(): Tint
    /**
    - Provides the final Tint entry in this collection.
      */
      lastItem(): Tint
    /**
    - Provides the central Tint entry in this collection.
      */
      middleItem(): Tint
    /**
    - Provides the Tint positioned after the supplied Tint.
    - @param obj Tint placed before the target Tint.
      */
      nextItem(obj: Tint): Tint
    /**
    - Provides the Tint positioned before the supplied index.
    - @param obj Index of the Tint placed after the target Tint.
      */
      previousItem(obj: Tint): Tint
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
