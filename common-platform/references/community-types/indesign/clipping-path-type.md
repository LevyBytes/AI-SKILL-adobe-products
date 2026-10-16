# ClippingPathType

Community declaration reference: InDesign/2023.

Clipping-path creation type.

```typescript
declare enum ClippingPathType {
    /**
    - Derives the clipping path from an alpha channel assigned to the graphic by a graphics application.
      */
      ALPHA_CHANNEL = 1634756707,
    /**

    - Builds the clipping path from a pixel-value threshold together with tolerance settings.
      */
      DETECT_EDGES = 1685349735,
    /**

    - Applies no clipping path.
      */
      NONE = 1852796517,
    /**

    - Uses the clipping path supplied for the graphic in Photoshop.
      */
      PHOTOSHOP_PATH = 1886613620,
    /**

    - (Read-only) Indicates that the clipping path was edited manually.
      */
      USER_MODIFIED_PATH = 1970106484,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
