# Replies collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Replies {
    /**
    - Gets any Reply from this collection.
      */
      anyItem(): Reply
    /**
    - Gets all Reply entries in this collection.
      */
      everyItem(): Reply[]
    /**
    - Gets the first Reply from this collection.
      */
      firstItem(): Reply
    /**
    - Gets the final Reply in this collection.
      */
      lastItem(): Reply
    /**
    - Gets the central Reply in this collection.
      */
      middleItem(): Reply
    /**
    - Gets the Reply positioned after the supplied Reply in this collection.
    - @param obj Reply positioned before the one being requested.
      */
      nextItem(obj: Reply): Reply
    /**
    - Gets the Reply positioned before the supplied index.
    - @param obj Index of the Reply positioned after the requested Reply.
      */
      previousItem(obj: Reply): Reply
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
