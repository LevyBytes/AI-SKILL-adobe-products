# UndefinedAreas

Community declaration reference: Photoshop/2015.5.

Controls how undistorted or newly blank areas are handled after a Distort-category filter is applied.

```typescript
declare enum UndefinedAreas {
    /**
    - Extends edge-pixel colors in the specified direction. If edge pixels differ in color, banding can occur.
      */
      REPEATEDGEPIXELS = 2,
    /**

    - Fills undefined space by pulling content from the image's opposite edge.
      */
      WRAPAROUND = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
