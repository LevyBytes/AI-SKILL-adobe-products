# ExcelImportPreference

Community declaration reference: InDesign/2023.

Preferences controlling Excel import.

```typescript
declare class ExcelImportPreference extends Preference {
    /**
    - Alignment applied to cells in the imported document.
      */
      alignmentStyle: AlignmentStyleOptions
    /**

    - Decimal-place count to include. Note: Applies only when alignment style is decimal.
      */
      decimalPlaces: number
    /**

    - Error code reported by the import. (Key: 0=Success; 1=Empty Sheet; 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. Error)
      */
      errorCode: number
    /**

    - When true, inline graphics are retained.
      */
      preserveGraphics: boolean
    /**

    - Cell range selected for import. Note: Use a colon (:) between the range's start and end cell names.
      */
      rangeName: string
    /**

    - Index for the worksheet. For details, see sheet name.
      */
      sheetIndex: number
    /**

    - Worksheet selected for import.
      */
      sheetName: string
    /**

    - When true, hidden cells are shown.
      */
      showHiddenCells: boolean
    /**

    - Format used for imported spreadsheets.
      */
      tableFormatting: TableFormattingOptions
    /**

    - When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
      */
      useTypographersQuotes: boolean
    /**

    - Stored custom or personal view(s) imported with the file.
      */
      viewName: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
