# Inks collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Inks {
    /**
    - Gets an arbitrary Ink from the collection.
      */
      anyItem(): Ink
    /**
    - Gets all Ink objects in this collection.
      */
      everyItem(): Ink[]
    /**
    - Gets the initial Ink in the collection.
      */
      firstItem(): Ink
    /**
    - Gets the final Ink in the collection.
      */
      lastItem(): Ink
    /**
    - Gets the central Ink from this collection.
      */
      middleItem(): Ink
    /**
    - Gets the Ink positioned after the supplied Ink in this collection.
    - @param obj Ink located just before the target Ink.
      */
      nextItem(obj: Ink): Ink
    /**
    - Gets the Ink immediately before the supplied index.
    - @param obj Index for the Ink that comes after the target Ink.
      */
      previousItem(obj: Ink): Ink
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
