# Document.rearrangeArtboards

Community declaration reference: Illustrator/2022.

Reorder the document's Artboards.
@param artboardLayout Artboard layout used for the rearrangement.
@param artboardRowsOrCols Row count for row layouts OR column count for column layouts; accepted values run from 1 through (docNumArtboards - 1), with 1 used by single-row or single-column layouts.
@param artboardSpacing Distance between artboards.
@param artboardMoveArtwork Whether artwork should move together with artboards.

```typescript
declare class Document {
    rearrangeArtboards(
      artboardLayout?: DocumentArtboardLayout,
      artboardRowsOrCols?: number,
      artboardSpacing?: number,
      artboardMoveArtwork?: boolean,
      ): boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
