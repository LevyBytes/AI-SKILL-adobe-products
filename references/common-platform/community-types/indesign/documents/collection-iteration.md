# Documents collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Documents {
    /**
    - Retrieves any Document from the collection.
      */
      anyItem(): Document
    /**
    - Retrieves every Document in the collection.
      */
      everyItem(): Document[]
    /**
    - Retrieves the first Document in the collection.
      */
      firstItem(): Document
    /**
    - Retrieves the last Document in the collection.
      */
      lastItem(): Document
    /**
    - Retrieves the middle Document in the collection.
      */
      middleItem(): Document
    /**
    - Retrieves the Document whose index comes after the specified Document in the collection.
    - @param obj Document immediately before the desired Document.
      */
      nextItem(obj: Document): Document
    /**
    - Retrieves the Document whose index comes before the specified index.
    - @param obj Index of the Document immediately after the desired Document.
      */
      previousItem(obj: Document): Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
