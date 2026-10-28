# Table.createOutlines

Community declaration reference: InDesign/2023.

Converts text into outlines. Each text line becomes a polygon object. If converted text is one letter with no internal spaces or detached parts, that polygon has one path only. To determine whether a font permits outline creation, see allow outlines.
@param deleteOriginal When true, original text is deleted. When false, separate outline object(s) are created over the text.

```typescript
declare class Table {
    createOutlines(deleteOriginal?: boolean): PageItem[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
