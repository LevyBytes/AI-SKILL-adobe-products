# Cell.convertCellType

Community declaration reference: InDesign/2023.

Converts the cell type. The new cell type parameter is required; preserving data is optional.
@param finalCellType Target Cell Type for the conversion.
@param flagToPreserveData True keeps the cell data; converting a graphic cell to a text cell turns the page item inline.

```typescript
declare class Cell {
    convertCellType(finalCellType: CellTypeEnum, flagToPreserveData?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
