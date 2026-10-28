# TransformPositionReference

Community declaration reference: InDesign/2023.

Reference-position choices for style X and Y attributes; choosing none disables the attribute.

```typescript
declare enum TransformPositionReference {
    /**
    - Uses the matching page edge: left edge for X attribute, top edge for Y attribute.
      */
      PAGE_EDGE_REFERENCE = 1348945255,
    /**

    - Uses page margins as references: X follows page.Left, and Y follows the top margin.
      */
      PAGE_MARGIN_REFERENCE = 1883721063,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
