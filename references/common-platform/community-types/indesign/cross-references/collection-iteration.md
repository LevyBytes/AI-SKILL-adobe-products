# CrossReferences collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CrossReferences {
    /**
    - Retrieves an arbitrary CrossReference from this collection.
      */
      anyItem(): CrossReference
    /**
    - Retrieves all CrossReference entries from this collection.
      */
      everyItem(): CrossReference[]
    /**
    - Retrieves the initial CrossReference from this collection.
      */
      firstItem(): CrossReference
    /**
    - Retrieves the final CrossReference from this collection.
      */
      lastItem(): CrossReference
    /**
    - Retrieves the center CrossReference from this collection.
      */
      middleItem(): CrossReference
    /**
    - Retrieves the CrossReference immediately after the supplied CrossReference in this collection.
    - @param obj CrossReference positioned immediately before the target CrossReference.
      */
      nextItem(obj: CrossReference): CrossReference
    /**
    - Retrieves the CrossReference immediately before the supplied index.
    - @param obj Index belonging to the CrossReference immediately after the target CrossReference.
      */
      previousItem(obj: CrossReference): CrossReference
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
