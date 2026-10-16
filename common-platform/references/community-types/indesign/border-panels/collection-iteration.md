# BorderPanels collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class BorderPanels {
    /**
    - Provides an arbitrary BorderPanel from the collection.
      */
      anyItem(): BorderPanel
    /**
    - Provides all BorderPanel members held by the collection.
      */
      everyItem(): BorderPanel[]
    /**
    - Provides the collection's initial BorderPanel.
      */
      firstItem(): BorderPanel
    /**
    - Provides the collection's final BorderPanel.
      */
      lastItem(): BorderPanel
    /**
    - Provides the collection's central BorderPanel.
      */
      middleItem(): BorderPanel
    /**
    - Provides the BorderPanel positioned after the supplied BorderPanel.
    - @param obj BorderPanel positioned immediately before the one being requested.
      */
      nextItem(obj: BorderPanel): BorderPanel
    /**
    - Provides the BorderPanel positioned before the supplied index.
    - @param obj Index of the BorderPanel immediately after the one being requested.
      */
      previousItem(obj: BorderPanel): BorderPanel
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
