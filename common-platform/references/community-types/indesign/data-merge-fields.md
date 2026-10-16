# DataMergeFields

Community declaration reference: InDesign/2023.

Collection wrapper for data merge fields.

```typescript
declare class DataMergeFields {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Retrieves the DataMergeField by supplied index.
    - @param index Index value.
      */
      [index: number]: DataMergeField
    /**

    - Retrieves any DataMergeField from the collection.
      */
      anyItem(): DataMergeField
    /**

    - Reports how many elements DataMergeField contains.
      */
      count(): number
    /**

    - Retrieves all DataMergeField objects from the collection.
      */
      everyItem(): DataMergeField[]
    /**

    - Retrieves the first DataMergeField from the collection.
      */
      firstItem(): DataMergeField
    /**

    - Retrieves the DataMergeField by supplied index or name.
    - @param index Index or name value.
      */
      item(index: number | string): DataMergeField
    /**

    - Retrieves DataMergeFields across the supplied range.
    - @param from Range start, supplied as DataMergeField, index, or name.
    - @param to Range end, supplied as DataMergeField, index, or name.
      */
      itemByRange(from: DataMergeField | number | string, to: DataMergeField | number | string): DataMergeField[]
    /**

    - Retrieves the last DataMergeField from the collection.
      */
      lastItem(): DataMergeField
    /**

    - Retrieves the middle DataMergeField from the collection.
      */
      middleItem(): DataMergeField
    /**

    - Retrieves the DataMergeField after the supplied DataMergeField in the collection.
    - @param obj Existing DataMergeField immediately before the desired DataMergeField.
      */
      nextItem(obj: DataMergeField): DataMergeField
    /**

    - Retrieves the DataMergeField immediately before the supplied index.
    - @param obj Index for the member immediately after the desired DataMergeField.
      */
      previousItem(obj: DataMergeField): DataMergeField
    /**

    - Creates source text that, when run, evaluates to the DataMergeField.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
