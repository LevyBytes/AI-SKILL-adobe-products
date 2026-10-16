# PlacedItem

Community declaration reference: Illustrator/2022.

Placed artwork item object.

```typescript
declare class PlacedItem extends PageItem {
    /**
    - Placed art object dimensions, independent of transformations.
      */
      readonly boundingBox: Rect
    /**

    - Content variable linked to this placed art object.
      */
      contentVariable: any
    /**

    - File containing the placed artwork.
      */
      file: File
    /**

    - Transformation matrix for the placed art object.
      */
      matrix: Matrix
    /**

    - Embed the placed art inside the illustration.
      */
      embed(): void
    /**

    - Relink the placed art to art supplied by a file.
    - @param fileSpec File spec used as the relink source.
      */
      relink(fileSpec: File): void
    /**

    - Trace this raster object using default options, reordering this placed item to the source art.
      */
      trace(): PluginItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
