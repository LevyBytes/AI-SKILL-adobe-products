# HyperlinkTextDestinations collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkTextDestinations {
    /**
    - Gets any HyperlinkTextDestination from the collection.
      */
      anyItem(): HyperlinkTextDestination
    /**
    - Gets all HyperlinkTextDestination entries in the collection.
      */
      everyItem(): HyperlinkTextDestination[]
    /**
    - Gets the collection's first HyperlinkTextDestination.
      */
      firstItem(): HyperlinkTextDestination
    /**
    - Gets the collection's final HyperlinkTextDestination.
      */
      lastItem(): HyperlinkTextDestination
    /**
    - Gets the collection's midpoint HyperlinkTextDestination.
      */
      middleItem(): HyperlinkTextDestination
    /**
    - Gets the collection member positioned after the specified HyperlinkTextDestination.
    - @param obj HyperlinkTextDestination located immediately before the requested HyperlinkTextDestination.
      */
      nextItem(obj: HyperlinkTextDestination): HyperlinkTextDestination
    /**
    - Gets the HyperlinkTextDestination positioned just before the supplied index.
    - @param obj Index for the HyperlinkTextDestination located just after the requested HyperlinkTextDestination.
      */
      previousItem(obj: HyperlinkTextDestination): HyperlinkTextDestination
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
