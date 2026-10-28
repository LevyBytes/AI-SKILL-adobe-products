# AnchorPoint

Community declaration reference: InDesign/2023.

During transformations such as rotation, scaling, flipping, and shearing, this bounding-box reference point stays fixed.

```typescript
declare enum AnchorPoint {
    /**
    - Bottom-edge midpoint of the bounding box.
      */
      BOTTOM_CENTER_ANCHOR = 1095656035,
    /**

    - Lower-left bounding-box corner.
      */
      BOTTOM_LEFT_ANCHOR = 1095656044,
    /**

    - Lower-right bounding-box corner.
      */
      BOTTOM_RIGHT_ANCHOR = 1095656050,
    /**

    - Middle point of the bounding box.
      */
      CENTER_ANCHOR = 1095656308,
    /**

    - Left-edge midpoint of the bounding box.
      */
      LEFT_CENTER_ANCHOR = 1095658595,
    /**

    - Right-edge midpoint of the bounding box.
      */
      RIGHT_CENTER_ANCHOR = 1095660131,
    /**

    - Top-edge midpoint of the bounding box.
      */
      TOP_CENTER_ANCHOR = 1095660643,
    /**

    - Upper-left bounding-box corner.
      */
      TOP_LEFT_ANCHOR = 1095660652,
    /**

    - Upper-right bounding-box corner.
      */
      TOP_RIGHT_ANCHOR = 1095660658,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
