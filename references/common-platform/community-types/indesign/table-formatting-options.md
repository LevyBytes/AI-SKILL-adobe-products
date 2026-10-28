# TableFormattingOptions

Community declaration reference: InDesign/2023.

Formatting choices applied to imported spreadsheets.

```typescript
declare enum TableFormattingOptions {
    /**
    - Retains formatting from the source spreadsheet.
      */
      EXCEL_FORMATTED_TABLE = 2020361812,
    /**

    - Applies spreadsheet formatting only during initial import, not during later updates.
      */
      EXCEL_FORMAT_ONLY_ONCE = 2017873748,
    /**

    - Changes the spreadsheet into unformatted, tab-delimited text.
      */
      EXCEL_UNFORMATTED_TABBED_TEXT = 2018858068,
    /**

    - Changes the spreadsheet into an unformatted table.
      */
      EXCEL_UNFORMATTED_TABLE = 2020365652,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
