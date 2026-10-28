# HyperlinkPageDestinations collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkPageDestinations {
    /**
    - Gets any HyperlinkPageDestination from the collection.
      */
      anyItem(): HyperlinkPageDestination
    /**
    - Gets all HyperlinkPageDestination entries in the collection.
      */
      everyItem(): HyperlinkPageDestination[]
    /**
    - Gets the collection's first HyperlinkPageDestination.
      */
      firstItem(): HyperlinkPageDestination
    /**
    - Gets the collection's final HyperlinkPageDestination.
      */
      lastItem(): HyperlinkPageDestination
    /**
    - Gets the collection's midpoint HyperlinkPageDestination.
      */
      middleItem(): HyperlinkPageDestination
    /**
    - Gets the collection member positioned after the specified HyperlinkPageDestination.
    - @param obj HyperlinkPageDestination located immediately before the requested HyperlinkPageDestination.
      */
      nextItem(obj: HyperlinkPageDestination): HyperlinkPageDestination
    /**
    - Gets the HyperlinkPageDestination positioned just before the supplied index.
    - @param obj Index for the HyperlinkPageDestination located just after the requested HyperlinkPageDestination.
      */
      previousItem(obj: HyperlinkPageDestination): HyperlinkPageDestination
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
