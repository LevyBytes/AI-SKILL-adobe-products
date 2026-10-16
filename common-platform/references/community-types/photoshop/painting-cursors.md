# PaintingCursors

Community declaration reference: Photoshop/2015.5.

Pointer used by these tools: Marquee, Lasso, Polygonal Lasso, and Magic Wand; Crop, Slice, Patch Eyedropper, and Pen; Gradient, Line, Paint Bucket, and Magnetic Lasso; Magnetic Pen, Freeform Pen, Measure, and Color Sampler.
These labels map to the cursor options below.

```typescript
declare enum PaintingCursors {
    /**
    - Shows cursors as brush shapes that represent the current brush size. Valid only for painting cursors.
    - Very large brushes may not display brush-size cursors.
      */
      BRUSHSIZE = 3,
    /**

    - Shows pointers as cross hairs.
      */
      PRECISE = 2,
    /**

    - Shows pointers as tool icons.
      */
      STANDARD = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
