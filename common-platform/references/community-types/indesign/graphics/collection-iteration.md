# Graphics collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Graphics {
    /**
    - Gets any Graphic from the collection.
      */
      anyItem(): Graphic
    /**
    - Gets all Graphic entries in the collection.
      */
      everyItem(): Graphic[]
    /**
    - Gets the first Graphic from the collection.
      */
      firstItem(): Graphic
    /**
    - Gets the last Graphic from the collection.
      */
      lastItem(): Graphic
    /**
    - Gets the middle Graphic from the collection.
      */
      middleItem(): Graphic
    /**
    - Gets the Graphic positioned after the specified Graphic in the collection.
    - @param obj Graphic preceding the requested Graphic.
      */
      nextItem(obj: Graphic): Graphic
    /**
    - Gets the Graphic at the index before the specified index.
    - @param obj Index of the Graphic after the requested Graphic.
      */
      previousItem(obj: Graphic): Graphic
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
