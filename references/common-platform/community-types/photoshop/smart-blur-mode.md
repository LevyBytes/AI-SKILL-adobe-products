# SmartBlurMode

Community declaration reference: Photoshop/2015.5.

Chooses how smart blur is applied.

```typescript
declare enum SmartBlurMode {
    /**
    - Applies blur only along edges where colors transition.
    - At high-contrast transitions, creates black-and-white edges.
      */
      EDGEONLY = 2,
    /**

    - Applies blur across the full image.
      */
      NORMAL = 1,
    /**

    - Applies blur only along edges where colors transition.
    - At high-contrast transitions, creates white edges.
      */
      OVERLAYEDGE = 3,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
