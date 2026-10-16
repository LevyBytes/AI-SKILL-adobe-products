# Table.contents

Community declaration reference: InDesign/2023.

Cell contents supplied as an array: the first item fills the top-left cell, the second fills the next cell to the right, continuing across the top row before moving to the left-most cell of the second row and onward. Note: if there are fewer strings than table cells, the leftover cells stay blank.

```typescript
declare class Table {
    contents: string[] | SpecialCharacters | NothingEnum
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
