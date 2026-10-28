# BookContents collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class BookContents {
    /**
    - Gets an arbitrary BookContent from the collection.
      */
      anyItem(): BookContent
    /**
    - Gets all BookContent objects in this collection.
      */
      everyItem(): BookContent[]
    /**
    - Gets the initial BookContent in the collection.
      */
      firstItem(): BookContent
    /**
    - Gets the final BookContent in the collection.
      */
      lastItem(): BookContent
    /**
    - Gets the central BookContent from this collection.
      */
      middleItem(): BookContent
    /**
    - Gets the BookContent positioned after the supplied BookContent in this collection.
    - @param obj BookContent located just before the target BookContent.
      */
      nextItem(obj: BookContent): BookContent
    /**
    - Gets the BookContent immediately before the supplied index.
    - @param obj Index for the BookContent that comes after the target BookContent.
      */
      previousItem(obj: BookContent): BookContent
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
