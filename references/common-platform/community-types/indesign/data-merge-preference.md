# DataMergePreference

Community declaration reference: InDesign/2023.

Preferences controlling data merge.

```typescript
declare class DataMergePreference extends Preference {
    /**
    - Order for placing multiple records on the target document page.
      */
      arrangeBy: ArrangeBy
    /**

    - Offset value for the bottom margin in the target document.
      */
      bottomMargin: number | string
    /**

    - Space amount between record columns in the target document.
      */
      columnSpacing: number | string
    /**

    - Offset value for the left margin in the target document.
      */
      leftMargin: number | string
    /**

    - Record number selected for merge. Note: Applies only when record selection is one record.
      */
      recordNumber: number
    /**

    - Record range selected for merge. Note: Applies only when record selection is range.
      */
      recordRange: string
    /**

    - Records selected for merge.
      */
      recordSelection: RecordSelection
    /**

    - Number of records placed on each page in the document.
      */
      recordsPerPage: RecordsPerPage
    /**

    - Offset value for the right margin in the target document.
      */
      rightMargin: number | string
    /**

    - Space amount between record rows in the target document.
      */
      rowSpacing: number | string
    /**

    - Offset value for the top margin in the target document.
      */
      topMargin: number | string
    /**

    - When true, missing images are listed in the specified output file.
    - @param outputMissingImagesReportFile Path to the output file.
      */
      alertMissingImages(outputMissingImagesReportFile: File): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
