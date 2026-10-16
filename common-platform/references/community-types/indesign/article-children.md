# ArticleChildren

Community declaration reference: InDesign/2023.

Collection containing group items that are also part of an article.

```typescript
declare class ArticleChildren {
    /**
    - Count of objects held by this collection.
      */
      readonly length: number
    /**

    - Retrieves the ArticleChild for the supplied index.
    - @param index Index value.
      */
      [index: number]: ArticleChild
    /**

    - Supplies any ArticleChild from this collection.
      */
      anyItem(): ArticleChild
    /**

    - Reports the element count for the ArticleChild.
      */
      count(): number
    /**

    - Supplies all ArticleChild entries in this collection.
      */
      everyItem(): ArticleChild[]
    /**

    - Supplies the first ArticleChild in this collection.
      */
      firstItem(): ArticleChild
    /**

    - Retrieves the ArticleChild matching the supplied index or name.
    - @param index Index or name value.
      */
      item(index: number | string): ArticleChild
    /**

    - Retrieves the ArticleChild matching the supplied ID.
    - @param id ID value.
      */
      itemByID(id: number): ArticleChild
    /**

    - Retrieves the ArticleChildren inside the requested range.
    - @param from Range start: ArticleChild, index, or name.
    - @param to Range end: ArticleChild, index, or name.
      */
      itemByRange(from: ArticleChild | number | string, to: ArticleChild | number | string): ArticleChild[]
    /**

    - Supplies the last ArticleChild in this collection.
      */
      lastItem(): ArticleChild
    /**

    - Supplies the middle ArticleChild in this collection.
      */
      middleItem(): ArticleChild
    /**

    - Retrieves the ArticleChild positioned after the specified ArticleChild in this collection.
    - @param obj ArticleChild located before the target ArticleChild.
      */
      nextItem(obj: ArticleChild): ArticleChild
    /**

    - Retrieves the ArticleChild positioned before the specified index.
    - @param obj Index for the ArticleChild located after the target ArticleChild.
      */
      previousItem(obj: ArticleChild): ArticleChild
    /**

    - Creates executable source text that resolves back to the ArticleChild.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
