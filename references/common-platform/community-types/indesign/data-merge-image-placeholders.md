# DataMergeImagePlaceholders

Community declaration reference: InDesign/2023.

Collection wrapper for data merge image placeholders.

```typescript
declare class DataMergeImagePlaceholders {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Retrieves the DataMergeImagePlaceholder by supplied index.
    - @param index Index value.
      */
      [index: number]: DataMergeImagePlaceholder
    /**

    - Creates an image placeholder for data merge.
    - @param placeholder PageItem that receives the placeholder.
    - @param field Data merge field used for insertion.
    - @param withProperties Starting property values assigned to a created DataMergeImagePlaceholder
      */
      add(placeholder: PageItem, field: DataMergeField, withProperties: object): DataMergeImagePlaceholder
    /**

    - Retrieves any DataMergeImagePlaceholder from the collection.
      */
      anyItem(): DataMergeImagePlaceholder
    /**

    - Reports how many elements DataMergeImagePlaceholder contains.
      */
      count(): number
    /**

    - Retrieves all DataMergeImagePlaceholder objects from the collection.
      */
      everyItem(): DataMergeImagePlaceholder[]
    /**

    - Retrieves the first DataMergeImagePlaceholder from the collection.
      */
      firstItem(): DataMergeImagePlaceholder
    /**

    - Retrieves the DataMergeImagePlaceholder by supplied index or name.
    - @param index Index or name value.
      */
      item(index: number | string): DataMergeImagePlaceholder
    /**

    - Retrieves DataMergeImagePlaceholders across the supplied range.
    - @param from Range start, supplied as DataMergeImagePlaceholder, index, or name.
    - @param to Range end, supplied as DataMergeImagePlaceholder, index, or name.
      */
      itemByRange(from: DataMergeImagePlaceholder | number | string, to: DataMergeImagePlaceholder | number | string): DataMergeImagePlaceholder[]
    /**

    - Retrieves the last DataMergeImagePlaceholder from the collection.
      */
      lastItem(): DataMergeImagePlaceholder
    /**

    - Retrieves the middle DataMergeImagePlaceholder from the collection.
      */
      middleItem(): DataMergeImagePlaceholder
    /**

    - Retrieves the DataMergeImagePlaceholder after the supplied DataMergeImagePlaceholder in the collection.
    - @param obj Existing DataMergeImagePlaceholder immediately before the desired DataMergeImagePlaceholder.
      */
      nextItem(obj: DataMergeImagePlaceholder): DataMergeImagePlaceholder
    /**

    - Retrieves the DataMergeImagePlaceholder immediately before the supplied index.
    - @param obj Index for the member immediately after the desired DataMergeImagePlaceholder.
      */
      previousItem(obj: DataMergeImagePlaceholder): DataMergeImagePlaceholder
    /**

    - Creates source text that, when run, evaluates to the DataMergeImagePlaceholder.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
