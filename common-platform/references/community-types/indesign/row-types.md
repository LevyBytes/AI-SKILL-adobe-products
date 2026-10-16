# RowTypes

Community declaration reference: InDesign/2023.

Row type choices.

```typescript
declare enum RowTypes {
    /**
    - Sets the row as a body row.
      */
      BODY_ROW = 1161982583,
    /**

    - Sets the row as a footer row. Note: when assigning footer-row type, the row must be the table's bottom row or be next to an existing footer row.
      */
      FOOTER_ROW = 1162244727,
    /**

    - Sets the row as a header row. Note: when assigning header-row type, the row must be the table's top row or be next to an existing header row.
      */
      HEADER_ROW = 1162375799,
    /**

    - (Read-only) Indicates the column's rows use multiple row types.
      */
      MIXED_STATE = 1162703479,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
