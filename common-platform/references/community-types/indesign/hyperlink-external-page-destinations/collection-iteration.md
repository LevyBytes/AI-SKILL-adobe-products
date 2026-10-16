# HyperlinkExternalPageDestinations collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkExternalPageDestinations {
    /**
    - Gets any HyperlinkExternalPageDestination from the collection.
      */
      anyItem(): HyperlinkExternalPageDestination
    /**
    - Gets all HyperlinkExternalPageDestination entries in the collection.
      */
      everyItem(): HyperlinkExternalPageDestination[]
    /**
    - Gets the collection's first HyperlinkExternalPageDestination.
      */
      firstItem(): HyperlinkExternalPageDestination
    /**
    - Gets the collection's final HyperlinkExternalPageDestination.
      */
      lastItem(): HyperlinkExternalPageDestination
    /**
    - Gets the collection's midpoint HyperlinkExternalPageDestination.
      */
      middleItem(): HyperlinkExternalPageDestination
    /**
    - Gets the collection member positioned after the specified HyperlinkExternalPageDestination.
    - @param obj HyperlinkExternalPageDestination located immediately before the requested HyperlinkExternalPageDestination.
      */
      nextItem(obj: HyperlinkExternalPageDestination): HyperlinkExternalPageDestination
    /**
    - Gets the HyperlinkExternalPageDestination positioned just before the supplied index.
    - @param obj Index for the HyperlinkExternalPageDestination located just after the requested HyperlinkExternalPageDestination.
      */
      previousItem(obj: HyperlinkExternalPageDestination): HyperlinkExternalPageDestination
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
