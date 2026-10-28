# IndexSections collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class IndexSections {
    /**
    - Retrieves an arbitrary IndexSection from this collection.
      */
      anyItem(): IndexSection
    /**
    - Retrieves all IndexSection entries from this collection.
      */
      everyItem(): IndexSection[]
    /**
    - Retrieves the initial IndexSection from this collection.
      */
      firstItem(): IndexSection
    /**
    - Retrieves the final IndexSection from this collection.
      */
      lastItem(): IndexSection
    /**
    - Retrieves the center IndexSection from this collection.
      */
      middleItem(): IndexSection
    /**
    - Retrieves the IndexSection immediately after the supplied IndexSection in this collection.
    - @param obj IndexSection positioned immediately before the target IndexSection.
      */
      nextItem(obj: IndexSection): IndexSection
    /**
    - Retrieves the IndexSection immediately before the supplied index.
    - @param obj Index belonging to the IndexSection immediately after the target IndexSection.
      */
      previousItem(obj: IndexSection): IndexSection
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
