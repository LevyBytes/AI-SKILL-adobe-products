# OffsetUndefinedAreas

Community declaration reference: Photoshop/2015.5.

Chooses how empty space created by offsetting an image or selection is filled.

```typescript
declare enum OffsetUndefinedAreas {
    /**
    - Extends edge-pixel colors in the specified direction. If edge pixels differ in color, banding can occur.
      */
      REPEATEDGEPIXELS = 3,
    /**

    - For background layers, changes pixels to the background layer color. For nonbackground layers, makes the pixels transparent.
      */
      SETTOBACKGROUND = 1,
    /**

    - Fills undefined space by pulling content from the image's opposite edge.
      */
      WRAPAROUND = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
