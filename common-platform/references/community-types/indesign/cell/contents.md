# Cell.contents

Community declaration reference: InDesign/2023.

Text contents. For rows or columns, a string fills every cell in that row or column; an array fills from the left-most row cell or top-most column cell, then continues to the next cell to the right for rows or the next lower cell for columns, and proceeds in order.

```typescript
declare class Cell {
    contents: PageItem | string | SpecialCharacters | string[] | PageItems | NothingEnum
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
