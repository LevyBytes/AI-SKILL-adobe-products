# ParagraphStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ParagraphStyles {
    /**
    - Retrieves any ParagraphStyle from the collection.
      */
      anyItem(): ParagraphStyle
    /**
    - Retrieves all ParagraphStyle objects in the collection.
      */
      everyItem(): ParagraphStyle[]
    /**
    - Retrieves the first ParagraphStyle in the collection.
      */
      firstItem(): ParagraphStyle
    /**
    - Retrieves the final ParagraphStyle in the collection.
      */
      lastItem(): ParagraphStyle
    /**
    - Retrieves the middle ParagraphStyle in the collection.
      */
      middleItem(): ParagraphStyle
    /**
    - Retrieves the ParagraphStyle after the supplied ParagraphStyle.
    - @param obj ParagraphStyle whose index precedes the requested ParagraphStyle.
      */
      nextItem(obj: ParagraphStyle): ParagraphStyle
    /**
    - Retrieves the ParagraphStyle before the supplied index.
    - @param obj Index of the ParagraphStyle following the requested ParagraphStyle.
      */
      previousItem(obj: ParagraphStyle): ParagraphStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
