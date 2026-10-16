# Articles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Articles {
    /**
    - Supplies any Article from this collection.
      */
      anyItem(): Article
    /**
    - Supplies all Article entries in this collection.
      */
      everyItem(): Article[]
    /**
    - Supplies the first Article in this collection.
      */
      firstItem(): Article
    /**
    - Supplies the last Article in this collection.
      */
      lastItem(): Article
    /**
    - Supplies the middle Article in this collection.
      */
      middleItem(): Article
    /**
    - Retrieves the Article positioned after the specified Article in this collection.
    - @param obj Article located before the target Article.
      */
      nextItem(obj: Article): Article
    /**
    - Retrieves the Article positioned before the specified index.
    - @param obj Index for the Article located after the target Article.
      */
      previousItem(obj: Article): Article
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
