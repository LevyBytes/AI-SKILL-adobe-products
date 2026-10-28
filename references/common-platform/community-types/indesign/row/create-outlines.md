# Row.createOutlines

Community declaration reference: InDesign/2023.

Turns text into outline objects. Each text line becomes a polygon object. For a single-letter conversion with no internal spaces or detached pieces, that polygon has one path only. Note: to check whether a font permits outline creation, see allow outlines.
@param deleteOriginal When true, removes the source text. When false, puts separate outline object(s) above the text.

```typescript
declare class Row {
    createOutlines(deleteOriginal?: boolean): PageItem[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
