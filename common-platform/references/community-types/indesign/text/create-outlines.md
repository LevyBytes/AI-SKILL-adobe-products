# Text.createOutlines

Community declaration reference: InDesign/2023.

Changes text into outlines. Each text line becomes a polygon object. A single-letter conversion with no internal spaces or detached parts produces a polygon containing one path only. Note: see allow outlines to determine whether a font permits outline creation.
@param deleteOriginal When true, the original text is deleted; when false, outlines are created as separate object(s) over the text.

```typescript
declare class Text {
    createOutlines(deleteOriginal?: boolean): PageItem[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
