# PrintArtworkDesignation

Community declaration reference: Illustrator/2022.

Artwork layers or objects selected for printing.

```typescript
declare enum PrintArtworkDesignation {
    /**
    - Prints every layer.
      */
      ALLLAYERS = 2,
    /**

    - Prints visible layers.
      */
      VISIBLELAYERS = 1,
    /**

    - Prints layers that are both visible and printable.
      */
      VISIBLEPRINTABLELAYERS = 0,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
