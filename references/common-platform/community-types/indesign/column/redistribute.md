# Column.redistribute

Community declaration reference: InDesign/2023.

Makes the specified Column range evenly sized. Note: maximum or minimum height or width settings on cells in the range can keep the result from being perfectly equal.
@param using Direction for the redistribution.
@param thru Final Column included in the range.

```typescript
declare class Column {
    redistribute(using: HorizontalOrVertical, thru: Cell | Column | Row): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
