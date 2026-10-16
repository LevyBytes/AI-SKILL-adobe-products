# Row.contents

Community declaration reference: InDesign/2023.

Text content. For rows or columns, a string value fills every cell in the row or column; with an array, the first array value fills the left-most cell in a row or the top-most cell in a column; subsequent values fill the next cell to the right for rows, or the next lower cell for columns.

```typescript
declare class Row {
    contents: PageItem | string | SpecialCharacters | string[] | PageItems | NothingEnum
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
