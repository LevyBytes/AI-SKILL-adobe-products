# DataMergeQrcodePlaceholders

Community declaration reference: InDesign/2023.

Collection wrapper for data merge QR code placeholders.

```typescript
declare class DataMergeQrcodePlaceholders {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Retrieves the DataMergeQrcodePlaceholder by supplied index.
    - @param index Index value.
      */
      [index: number]: DataMergeQrcodePlaceholder
    /**

    - Creates a QR code placeholder for data merge.
    - @param placeholder PageItem that receives the placeholder.
    - @param field Data merge field used for insertion.
    - @param withProperties Starting property values assigned to a created DataMergeQrcodePlaceholder
      */
      add(placeholder: PageItem, field: DataMergeField, withProperties: object): DataMergeQrcodePlaceholder
    /**

    - Retrieves any DataMergeQrcodePlaceholder from the collection.
      */
      anyItem(): DataMergeQrcodePlaceholder
    /**

    - Reports how many elements DataMergeQrcodePlaceholder contains.
      */
      count(): number
    /**

    - Retrieves all DataMergeQrcodePlaceholder objects from the collection.
      */
      everyItem(): DataMergeQrcodePlaceholder[]
    /**

    - Retrieves the first DataMergeQrcodePlaceholder from the collection.
      */
      firstItem(): DataMergeQrcodePlaceholder
    /**

    - Retrieves the DataMergeQrcodePlaceholder by supplied index or name.
    - @param index Index or name value.
      */
      item(index: number | string): DataMergeQrcodePlaceholder
    /**

    - Retrieves DataMergeQrcodePlaceholders across the supplied range.
    - @param from Range start, supplied as DataMergeQrcodePlaceholder, index, or name.
    - @param to Range end, supplied as DataMergeQrcodePlaceholder, index, or name.
      */
      itemByRange(from: DataMergeQrcodePlaceholder | number | string, to: DataMergeQrcodePlaceholder | number | string): DataMergeQrcodePlaceholder[]
    /**

    - Retrieves the last DataMergeQrcodePlaceholder from the collection.
      */
      lastItem(): DataMergeQrcodePlaceholder
    /**

    - Retrieves the middle DataMergeQrcodePlaceholder from the collection.
      */
      middleItem(): DataMergeQrcodePlaceholder
    /**

    - Retrieves the DataMergeQrcodePlaceholder after the supplied DataMergeQrcodePlaceholder in the collection.
    - @param obj Existing DataMergeQrcodePlaceholder immediately before the desired DataMergeQrcodePlaceholder.
      */
      nextItem(obj: DataMergeQrcodePlaceholder): DataMergeQrcodePlaceholder
    /**

    - Retrieves the DataMergeQrcodePlaceholder immediately before the supplied index.
    - @param obj Index for the member immediately after the desired DataMergeQrcodePlaceholder.
      */
      previousItem(obj: DataMergeQrcodePlaceholder): DataMergeQrcodePlaceholder
    /**

    - Creates source text that, when run, evaluates to the DataMergeQrcodePlaceholder.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
