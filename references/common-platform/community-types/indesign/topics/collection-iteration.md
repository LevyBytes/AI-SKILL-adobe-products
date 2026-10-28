# Topics collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Topics {
    /**
    - Retrieves an arbitrary Topic from this collection.
      */
      anyItem(): Topic
    /**
    - Retrieves all Topic entries from this collection.
      */
      everyItem(): Topic[]
    /**
    - Retrieves the initial Topic from this collection.
      */
      firstItem(): Topic
    /**
    - Retrieves the final Topic from this collection.
      */
      lastItem(): Topic
    /**
    - Retrieves the center Topic from this collection.
      */
      middleItem(): Topic
    /**
    - Retrieves the Topic immediately after the supplied Topic in this collection.
    - @param obj Topic positioned immediately before the target Topic.
      */
      nextItem(obj: Topic): Topic
    /**
    - Retrieves the Topic immediately before the supplied index.
    - @param obj Index belonging to the Topic immediately after the target Topic.
      */
      previousItem(obj: Topic): Topic
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
