# SVGs collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class SVGs {
    /**
    - Supplies any SVG from this collection.
      */
      anyItem(): SVG
    /**
    - Supplies all SVG entries in this collection.
      */
      everyItem(): SVG[]
    /**
    - Supplies the first SVG in this collection.
      */
      firstItem(): SVG
    /**
    - Supplies the last SVG in this collection.
      */
      lastItem(): SVG
    /**
    - Supplies the middle SVG in this collection.
      */
      middleItem(): SVG
    /**
    - Retrieves the SVG positioned after the specified SVG in this collection.
    - @param obj SVG located before the target SVG.
      */
      nextItem(obj: SVG): SVG
    /**
    - Retrieves the SVG positioned before the specified index.
    - @param obj Index for the SVG located after the target SVG.
      */
      previousItem(obj: SVG): SVG
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
