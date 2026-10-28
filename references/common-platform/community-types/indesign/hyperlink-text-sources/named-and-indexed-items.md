# HyperlinkTextSources named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkTextSources {
    /**
    - Resolves a HyperlinkTextSource by index or name.
    - @param index Index or name to resolve.
      */
      item(index: number | string): HyperlinkTextSource
    /**
    - Resolves a HyperlinkTextSource by ID.
    - @param id ID to resolve.
      */
      itemByID(id: number): HyperlinkTextSource
    /**
    - Resolves a HyperlinkTextSource by name.
    - @param name Name to resolve.
      */
      itemByName(name: string): HyperlinkTextSource
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
