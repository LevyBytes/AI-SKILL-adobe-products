# DataMerge

Community declaration reference: InDesign/2023.

Data merge object.

```typescript
declare class DataMerge extends Preference {
    /**
    - Collection containing data merge fields.
      */
      readonly dataMergeFields: DataMergeFields
    /**

    - Data merge preference properties defining target-page layout and content.
      */
      readonly dataMergePreferences: DataMergePreference
    /**

    - Collection containing preference objects.
      */
      readonly preferences: Preferences
    /**

    - Merges records, then exports PDF output.
    - @param to Path of exported PDF file.
    - @param using PDF export style to use.
    - @param outputOversetReportFile File path used for overset report storage.
      */
      exportFile(to: File, using: PDFExportPreset, outputOversetReportFile: File): void
    /**

    - Merges records and can write an overset report.
    - @param outputOversetReportFile File path used for overset report storage.
      */
      mergeRecords(outputOversetReportFile: File): void
    /**

    - Deletes the data source.
      */
      removeDataSource(): void
    /**

    - Sets the file used as the data source.
    - @param dataSourceFile Path to the data source file.
      */
      selectDataSource(dataSourceFile: File): void
    /**

    - Refreshes the data source file with the latest data.
      */
      updateDataSource(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
