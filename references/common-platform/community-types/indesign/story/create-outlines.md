# Story.createOutlines

Community declaration reference: InDesign/2023.

Converts text into outlines; each text line becomes a polygon object. If the converted text is a single letter without internal spaces or detached parts, the polygon has only one path. Note: To check whether a font permits outline creation, see allow outlines.
@param deleteOriginal When true, the source text is deleted. When false, the outlines are created as separate object(s) above the text.

```typescript
declare class Story {
    createOutlines(deleteOriginal?: boolean): PageItem[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
