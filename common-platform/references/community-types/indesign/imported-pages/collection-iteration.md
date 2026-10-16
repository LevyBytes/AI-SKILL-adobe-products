# ImportedPages collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ImportedPages {
    /**
    - Supplies any ImportedPage from this collection.
      */
      anyItem(): ImportedPage
    /**
    - Supplies all ImportedPage entries in this collection.
      */
      everyItem(): ImportedPage[]
    /**
    - Supplies the first ImportedPage in this collection.
      */
      firstItem(): ImportedPage
    /**
    - Supplies the last ImportedPage in this collection.
      */
      lastItem(): ImportedPage
    /**
    - Supplies the middle ImportedPage in this collection.
      */
      middleItem(): ImportedPage
    /**
    - Retrieves the ImportedPage positioned after the specified ImportedPage in this collection.
    - @param obj ImportedPage located before the target ImportedPage.
      */
      nextItem(obj: ImportedPage): ImportedPage
    /**
    - Retrieves the ImportedPage positioned before the specified index.
    - @param obj Index for the ImportedPage located after the target ImportedPage.
      */
      previousItem(obj: ImportedPage): ImportedPage
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
