# Cell.createOutlines

Community declaration reference: InDesign/2023.

Changes text into outlines. Each text line becomes a polygon object; if the converted text is one letter without internal spaces or detached pieces, that polygon has only one path. Note: use allow outlines to check whether a font permits outline creation.
@param deleteOriginal True removes the original text; false places separate outline object(s) over it.

```typescript
declare class Cell {
    createOutlines(deleteOriginal?: boolean): PageItem[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
