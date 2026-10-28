# HyperlinkPageItemSources collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkPageItemSources {
    /**
    - Gets any HyperlinkPageItemSource from the collection.
      */
      anyItem(): HyperlinkPageItemSource
    /**
    - Gets every HyperlinkPageItemSource in the collection.
      */
      everyItem(): HyperlinkPageItemSource[]
    /**
    - Gets the first HyperlinkPageItemSource in the collection.
      */
      firstItem(): HyperlinkPageItemSource
    /**
    - Gets the collection's final HyperlinkPageItemSource.
      */
      lastItem(): HyperlinkPageItemSource
    /**
    - Gets the collection's midpoint HyperlinkPageItemSource.
      */
      middleItem(): HyperlinkPageItemSource
    /**
    - Gets the collection member positioned after the specified HyperlinkPageItemSource.
    - @param obj HyperlinkPageItemSource located immediately before the requested HyperlinkPageItemSource.
      */
      nextItem(obj: HyperlinkPageItemSource): HyperlinkPageItemSource
    /**
    - Gets the HyperlinkPageItemSource positioned just before the supplied index.
    - @param obj Index for the HyperlinkPageItemSource located just after the requested HyperlinkPageItemSource.
      */
      previousItem(obj: HyperlinkPageItemSource): HyperlinkPageItemSource
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
