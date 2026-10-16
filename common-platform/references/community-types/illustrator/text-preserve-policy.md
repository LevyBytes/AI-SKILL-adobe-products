# TextPreservePolicy

Community declaration reference: Illustrator/2022.

Preserve policies for text in FXG file format.

```typescript
declare enum TextPreservePolicy {
    /**
    - Convert text automatically.
      */
      AUTOMATICALLYCONVERTTEXT = 4,
    /**

    - Keep text editable.
      */
      KEEPTEXTEDITABLE = 3,
    /**

    - Keep text appearance by outlining it.
      */
      OUTLINETEXT = 1,
    /**

    - Keep text appearance by rasterizing it.
      */
      RASTERIZETEXT = 2,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
