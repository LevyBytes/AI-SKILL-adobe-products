# HyperlinkTextSources collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkTextSources {
    /**
    - Gets any HyperlinkTextSource from the collection.
      */
      anyItem(): HyperlinkTextSource
    /**
    - Gets all HyperlinkTextSource entries in the collection.
      */
      everyItem(): HyperlinkTextSource[]
    /**
    - Gets the collection's first HyperlinkTextSource.
      */
      firstItem(): HyperlinkTextSource
    /**
    - Gets the collection's final HyperlinkTextSource.
      */
      lastItem(): HyperlinkTextSource
    /**
    - Gets the collection's midpoint HyperlinkTextSource.
      */
      middleItem(): HyperlinkTextSource
    /**
    - Gets the collection member positioned after the specified HyperlinkTextSource.
    - @param obj HyperlinkTextSource located immediately before the requested HyperlinkTextSource.
      */
      nextItem(obj: HyperlinkTextSource): HyperlinkTextSource
    /**
    - Gets the HyperlinkTextSource positioned just before the supplied index.
    - @param obj Index for the HyperlinkTextSource located just after the requested HyperlinkTextSource.
      */
      previousItem(obj: HyperlinkTextSource): HyperlinkTextSource
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
