# Dither

Community declaration reference: Photoshop/2015.5.

Kind of dither to apply.

```typescript
declare enum Dither {
    /**
    - Spreads dither effects in random patterns over neighboring pixels.
      */
      DIFFUSION = 2,
    /**

    - Applies a random pattern without spreading it into adjacent pixels, reducing visible joins.
      */
      NOISE = 4,
    /**

    - Applies no dither.
      */
      NONE = 1,
    /**

    - Applies a square pattern similar to halftone.
      */
      PATTERN = 3,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
