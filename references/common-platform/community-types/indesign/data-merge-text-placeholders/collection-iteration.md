# DataMergeTextPlaceholders collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class DataMergeTextPlaceholders {
    /**
    - Retrieves any DataMergeTextPlaceholder from the collection.
      */
      anyItem(): DataMergeTextPlaceholder
    /**
    - Retrieves all DataMergeTextPlaceholder objects from the collection.
      */
      everyItem(): DataMergeTextPlaceholder[]
    /**
    - Retrieves the first DataMergeTextPlaceholder from the collection.
      */
      firstItem(): DataMergeTextPlaceholder
    /**
    - Retrieves the last DataMergeTextPlaceholder from the collection.
      */
      lastItem(): DataMergeTextPlaceholder
    /**
    - Retrieves the middle DataMergeTextPlaceholder from the collection.
      */
      middleItem(): DataMergeTextPlaceholder
    /**
    - Retrieves the DataMergeTextPlaceholder after the supplied DataMergeTextPlaceholder in the collection.
    - @param obj Existing DataMergeTextPlaceholder immediately before the desired DataMergeTextPlaceholder.
      */
      nextItem(obj: DataMergeTextPlaceholder): DataMergeTextPlaceholder
    /**
    - Retrieves the DataMergeTextPlaceholder immediately before the supplied index.
    - @param obj Index for the member immediately after the desired DataMergeTextPlaceholder.
      */
      previousItem(obj: DataMergeTextPlaceholder): DataMergeTextPlaceholder
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
