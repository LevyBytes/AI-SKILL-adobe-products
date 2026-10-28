# XMLComments collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class XMLComments {
    /**
    - Yields an arbitrary XMLComment from this collection.
      */
      anyItem(): XMLComment
    /**
    - Yields all XMLComment entries in this collection.
      */
      everyItem(): XMLComment[]
    /**
    - Yields the leading XMLComment in this collection.
      */
      firstItem(): XMLComment
    /**
    - Yields the final XMLComment in this collection.
      */
      lastItem(): XMLComment
    /**
    - Yields the central XMLComment in this collection.
      */
      middleItem(): XMLComment
    /**
    - Yields the XMLComment positioned after the supplied XMLComment.
    - @param obj XMLComment immediately before the requested XMLComment.
      */
      nextItem(obj: XMLComment): XMLComment
    /**
    - Yields the XMLComment positioned before the supplied index.
    - @param obj Index belonging to the XMLComment after the requested XMLComment.
      */
      previousItem(obj: XMLComment): XMLComment
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
