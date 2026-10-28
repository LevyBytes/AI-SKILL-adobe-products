# PurgeTarget

Community declaration reference: Photoshop/2015.5.

Cache selected for a purge operation.

```typescript
declare enum PurgeTarget {
    /**
    - Clears every cache.
      */
      ALLCACHES = 4,
    /**

    - Clears the clipboard cache.
      */
      CLIPBOARDCACHE = 3,
    /**

    - Removes every history state from the History palette.
      */
      HISTORYCACHES = 2,
    /**

    - Clears the undo cache.
      */
      UNDOCACHES = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
