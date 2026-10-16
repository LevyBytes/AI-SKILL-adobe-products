# Text.convertToTable

Community declaration reference: InDesign/2023.

Changes the text into a table.
@param columnSeparator Character that begins a new column in the created table.
@param rowSeparator Character that begins a new row in the created table.
@param numberOfColumns Column count for the table. Note: valid only when column and row separator characters match.

```typescript
declare class Text {
    convertToTable(columnSeparator: string, rowSeparator: string, numberOfColumns?: number): Table
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
