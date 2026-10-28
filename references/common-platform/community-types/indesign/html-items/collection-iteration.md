# HtmlItems collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HtmlItems {
    /**
    - Supplies any HtmlItem from this collection.
      */
      anyItem(): HtmlItem
    /**
    - Supplies all HtmlItem entries in this collection.
      */
      everyItem(): HtmlItem[]
    /**
    - Supplies the first HtmlItem in this collection.
      */
      firstItem(): HtmlItem
    /**
    - Supplies the last HtmlItem in this collection.
      */
      lastItem(): HtmlItem
    /**
    - Supplies the middle HtmlItem in this collection.
      */
      middleItem(): HtmlItem
    /**
    - Retrieves the HtmlItem positioned after the specified HtmlItem in this collection.
    - @param obj HtmlItem located before the target HtmlItem.
      */
      nextItem(obj: HtmlItem): HtmlItem
    /**
    - Retrieves the HtmlItem positioned before the specified index.
    - @param obj Index for the HtmlItem located after the target HtmlItem.
      */
      previousItem(obj: HtmlItem): HtmlItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
