# XMLInstructions collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class XMLInstructions {
    /**
    - Yields an arbitrary XMLInstruction from this collection.
      */
      anyItem(): XMLInstruction
    /**
    - Yields all XMLInstruction entries in this collection.
      */
      everyItem(): XMLInstruction[]
    /**
    - Yields the leading XMLInstruction in this collection.
      */
      firstItem(): XMLInstruction
    /**
    - Yields the final XMLInstruction in this collection.
      */
      lastItem(): XMLInstruction
    /**
    - Yields the central XMLInstruction in this collection.
      */
      middleItem(): XMLInstruction
    /**
    - Yields the XMLInstruction positioned after the supplied XMLInstruction.
    - @param obj XMLInstruction immediately before the requested XMLInstruction.
      */
      nextItem(obj: XMLInstruction): XMLInstruction
    /**
    - Yields the XMLInstruction positioned before the supplied index.
    - @param obj Index belonging to the XMLInstruction after the requested XMLInstruction.
      */
      previousItem(obj: XMLInstruction): XMLInstruction
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
