# PDFComments collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PDFComments {
    /**
    - Gets any PDFComment from this collection.
      */
      anyItem(): PDFComment
    /**
    - Gets all PDFComment entries in this collection.
      */
      everyItem(): PDFComment[]
    /**
    - Gets the first PDFComment from this collection.
      */
      firstItem(): PDFComment
    /**
    - Gets the final PDFComment in this collection.
      */
      lastItem(): PDFComment
    /**
    - Gets the central PDFComment in this collection.
      */
      middleItem(): PDFComment
    /**
    - Gets the PDFComment positioned after the supplied PDFComment in this collection.
    - @param obj PDFComment positioned before the one being requested.
      */
      nextItem(obj: PDFComment): PDFComment
    /**
    - Gets the PDFComment positioned before the supplied index.
    - @param obj Index of the PDFComment positioned after the requested PDFComment.
      */
      previousItem(obj: PDFComment): PDFComment
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
