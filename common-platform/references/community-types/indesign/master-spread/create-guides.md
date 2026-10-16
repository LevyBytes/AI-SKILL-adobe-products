# MasterSpread.createGuides

Community declaration reference: InDesign/2023.

Builds guide rows and columns across every page in the spread.
@param numberOfRows Row count created on each page.
@param numberOfColumns Column count created on each page.
@param rowGutter Gutter height separating rows.
@param columnGutter Gutter width separating columns.
@param guideColor Guide color, supplied as three 0 to 255 doubles for R, G, and B, or as a UI color.
@param fitMargins When true, row and column dimensions come from the area inside page margins; otherwise, the whole page is used.
@param removeExisting When true, old guides are deleted before new guides are added.
@param layer Layer where the guides are created.

```typescript
declare class MasterSpread {
    createGuides(numberOfRows?: number, numberOfColumns?: number, rowGutter?: number | string, columnGutter?: number | string, guideColor?: [number, number, number] | UIColors, fitMargins?: boolean, removeExisting?: boolean, layer?: Layer): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
