# CrossReferenceFormats collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CrossReferenceFormats {
    /**
    - Gets any CrossReferenceFormat from the collection.
      */
      anyItem(): CrossReferenceFormat
    /**
    - Gets all CrossReferenceFormat entries in the collection.
      */
      everyItem(): CrossReferenceFormat[]
    /**
    - Gets the collection's first CrossReferenceFormat.
      */
      firstItem(): CrossReferenceFormat
    /**
    - Gets the collection's final CrossReferenceFormat.
      */
      lastItem(): CrossReferenceFormat
    /**
    - Gets the collection's midpoint CrossReferenceFormat.
      */
      middleItem(): CrossReferenceFormat
    /**
    - Gets the collection member positioned after the specified CrossReferenceFormat.
    - @param obj CrossReferenceFormat located immediately before the requested CrossReferenceFormat.
      */
      nextItem(obj: CrossReferenceFormat): CrossReferenceFormat
    /**
    - Gets the CrossReferenceFormat positioned just before the supplied index.
    - @param obj Index for the CrossReferenceFormat located just after the requested CrossReferenceFormat.
      */
      previousItem(obj: CrossReferenceFormat): CrossReferenceFormat
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
