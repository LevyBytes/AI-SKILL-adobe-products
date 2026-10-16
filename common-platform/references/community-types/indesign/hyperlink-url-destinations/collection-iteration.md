# HyperlinkURLDestinations collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkURLDestinations {
    /**
    - Gets any HyperlinkURLDestination from the collection.
      */
      anyItem(): HyperlinkURLDestination
    /**
    - Gets all HyperlinkURLDestination entries in the collection.
      */
      everyItem(): HyperlinkURLDestination[]
    /**
    - Gets the collection's first HyperlinkURLDestination.
      */
      firstItem(): HyperlinkURLDestination
    /**
    - Gets the collection's final HyperlinkURLDestination.
      */
      lastItem(): HyperlinkURLDestination
    /**
    - Gets the collection's midpoint HyperlinkURLDestination.
      */
      middleItem(): HyperlinkURLDestination
    /**
    - Gets the collection member positioned after the specified HyperlinkURLDestination.
    - @param obj HyperlinkURLDestination located immediately before the requested HyperlinkURLDestination.
      */
      nextItem(obj: HyperlinkURLDestination): HyperlinkURLDestination
    /**
    - Gets the HyperlinkURLDestination positioned just before the supplied index.
    - @param obj Index for the HyperlinkURLDestination located just after the requested HyperlinkURLDestination.
      */
      previousItem(obj: HyperlinkURLDestination): HyperlinkURLDestination
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
