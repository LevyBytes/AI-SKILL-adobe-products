# FlattenerLevel

Community declaration reference: InDesign/2023.

Rasterization level choices.

```typescript
declare enum FlattenerLevel {
    /**
    - Preserves as much artwork as possible as vector data.
      */
      HIGH = 1701726313,
    /**

    - Rasterizes all artwork.
      */
      LOW = 1701727351,
    /**

    - Rasterizes a medium share of artwork.
      */
      MEDIUM = 1701727588,
    /**

    - Rasterizes more artwork than the medium level.
      */
      MEDIUM_HIGH = 1718373704,
    /**

    - Rasterizes nearly all artwork.
      */
      MEDIUM_LOW = 1718373708,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
