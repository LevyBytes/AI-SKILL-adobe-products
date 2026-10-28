# PDFs collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PDFs {
    /**
    - Gets any PDF from the collection.
      */
      anyItem(): PDF
    /**
    - Gets all PDF entries in the collection.
      */
      everyItem(): PDF[]
    /**
    - Gets the first PDF from the collection.
      */
      firstItem(): PDF
    /**
    - Gets the last PDF from the collection.
      */
      lastItem(): PDF
    /**
    - Gets the middle PDF from the collection.
      */
      middleItem(): PDF
    /**
    - Gets the PDF positioned after the specified PDF in the collection.
    - @param obj PDF preceding the requested PDF.
      */
      nextItem(obj: PDF): PDF
    /**
    - Gets the PDF at the index before the specified index.
    - @param obj Index of the PDF after the requested PDF.
      */
      previousItem(obj: PDF): PDF
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
