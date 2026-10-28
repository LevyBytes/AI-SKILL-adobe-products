# Books collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Books {
    /**
    - Gets an arbitrary Book from the collection.
      */
      anyItem(): Book
    /**
    - Gets all Book objects in this collection.
      */
      everyItem(): Book[]
    /**
    - Gets the initial Book in the collection.
      */
      firstItem(): Book
    /**
    - Gets the final Book in the collection.
      */
      lastItem(): Book
    /**
    - Gets the central Book from this collection.
      */
      middleItem(): Book
    /**
    - Gets the Book positioned after the supplied Book in this collection.
    - @param obj Book located just before the target Book.
      */
      nextItem(obj: Book): Book
    /**
    - Gets the Book immediately before the supplied index.
    - @param obj Index for the Book that comes after the target Book.
      */
      previousItem(obj: Book): Book
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
