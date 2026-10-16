# Justification

Community declaration reference: Photoshop/2015.5.

Placement of paragraph text inside the bounding box.

```typescript
declare enum Justification {
    /**
    - Centers text on each line.
      */
      CENTER = 2,
    /**

    - Justifies every line except the final one; the final line is centered.
      */
      CENTERJUSTIFIED = 5,
    /**

    - Justifies all lines, with the last line forced justified.
      */
      FULLYJUSTIFIED = 7,
    /**

    - Aligns left edges and leaves the right edge ragged.
      */
      LEFT = 1,
    /**

    - Justifies every line except the final one; the final line aligns left.
      */
      LEFTJUSTIFIED = 4,
    /**

    - Aligns right edges and leaves the left edge ragged.
      */
      RIGHT = 3,
    /**

    - Justifies every line except the final one; the final line aligns right.
      */
      RIGHTJUSTIFIED = 6,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
