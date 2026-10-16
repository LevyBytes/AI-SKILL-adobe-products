# PageItems collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PageItems {
    /**
    - Gets any PageItem from the collection.
      */
      anyItem(): PageItem
    /**
    - Gets all PageItem entries in the collection.
      */
      everyItem(): PageItem[]
    /**
    - Gets the first PageItem in this collection.
      */
      firstItem(): PageItem
    /**
    - Gets the final PageItem in this collection.
      */
      lastItem(): PageItem
    /**
    - Gets the middle PageItem in this collection.
      */
      middleItem(): PageItem
    /**
    - Gets the PageItem positioned immediately after the supplied PageItem.
    - @param obj PageItem whose following neighbor is wanted.
      */
      nextItem(obj: PageItem): PageItem
    /**
    - Gets the PageItem positioned immediately before the supplied index.
    - @param obj Index belonging to the PageItem that follows the wanted one.
      */
      previousItem(obj: PageItem): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
