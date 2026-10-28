# CrossReferenceSources collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CrossReferenceSources {
    /**
    - Gets any CrossReferenceSource from the collection.
      */
      anyItem(): CrossReferenceSource
    /**
    - Gets all CrossReferenceSource entries in the collection.
      */
      everyItem(): CrossReferenceSource[]
    /**
    - Gets the collection's first CrossReferenceSource.
      */
      firstItem(): CrossReferenceSource
    /**
    - Gets the collection's final CrossReferenceSource.
      */
      lastItem(): CrossReferenceSource
    /**
    - Gets the collection's midpoint CrossReferenceSource.
      */
      middleItem(): CrossReferenceSource
    /**
    - Gets the collection member positioned after the specified CrossReferenceSource.
    - @param obj CrossReferenceSource located immediately before the requested CrossReferenceSource.
      */
      nextItem(obj: CrossReferenceSource): CrossReferenceSource
    /**
    - Gets the CrossReferenceSource positioned just before the supplied index.
    - @param obj Index for the CrossReferenceSource located just after the requested CrossReferenceSource.
      */
      previousItem(obj: CrossReferenceSource): CrossReferenceSource
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
