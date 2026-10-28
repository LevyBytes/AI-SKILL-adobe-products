# TextFrame.createOutlines

Community declaration reference: InDesign/2023.

Turns text into outlines. The conversion makes a polygon object for each text line. For a single converted letter with no internal spaces or separate parts, that polygon has just one path. Note: Check allow outlines to see whether the font permits outline creation.
@param deleteOriginal When true, removes the original text; when false, places separate outline object(s) over the text.

```typescript
declare class TextFrame extends PageItem {
    createOutlines(deleteOriginal?: boolean): PageItem[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
