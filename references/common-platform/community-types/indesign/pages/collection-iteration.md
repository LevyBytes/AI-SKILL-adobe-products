# Pages collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Pages {
    /**
    - Chooses any Page from this collection.
      */
      anyItem(): Page
    /**
    - Retrieves all Page entries from the collection.
      */
      everyItem(): Page[]
    /**
    - Retrieves the first Page in the collection.
      */
      firstItem(): Page
    /**
    - Retrieves the final Page in the collection.
      */
      lastItem(): Page
    /**
    - Retrieves the middle Page in the collection.
      */
      middleItem(): Page
    /**
    - Retrieves the Page immediately after the supplied Page.
    - @param obj Page that precedes the requested one.
      */
      nextItem(obj: Page): Page
    /**
    - Retrieves the Page immediately before the supplied index.
    - @param obj Index whose previous Page is requested.
      */
      previousItem(obj: Page): Page
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
