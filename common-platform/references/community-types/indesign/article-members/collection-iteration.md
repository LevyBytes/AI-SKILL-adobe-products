# ArticleMembers collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ArticleMembers {
    /**
    - Supplies any ArticleMember from this collection.
      */
      anyItem(): ArticleMember
    /**
    - Supplies all ArticleMember entries in this collection.
      */
      everyItem(): ArticleMember[]
    /**
    - Supplies the first ArticleMember in this collection.
      */
      firstItem(): ArticleMember
    /**
    - Supplies the last ArticleMember in this collection.
      */
      lastItem(): ArticleMember
    /**
    - Supplies the middle ArticleMember in this collection.
      */
      middleItem(): ArticleMember
    /**
    - Retrieves the ArticleMember positioned after the specified ArticleMember in this collection.
    - @param obj ArticleMember located before the target ArticleMember.
      */
      nextItem(obj: ArticleMember): ArticleMember
    /**
    - Retrieves the ArticleMember positioned before the specified index.
    - @param obj Index for the ArticleMember located after the target ArticleMember.
      */
      previousItem(obj: ArticleMember): ArticleMember
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
