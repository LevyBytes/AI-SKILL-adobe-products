# VerticallyRelativeTo

Community declaration reference: InDesign/2023.

Vertical reference point choices for anchored objects.

```typescript
declare enum VerticallyRelativeTo {
    /**
    - Uses the capital-letter top as the anchored object's alignment target.
      */
      CAPHEIGHT = 1096185955,
    /**

    - Uses the text or table column edge as the anchored object's alignment target.
      */
      COLUMN_EDGE = 1095787375,
    /**

    - Uses the embox bottom as the anchored object's alignment target.
      */
      EMBOX_BOTTOM = 1096183106,
    /**

    - Uses the embox middle as the anchored object's alignment target.
      */
      EMBOX_MIDDLE = 1096183117,
    /**

    - Uses the embox top as the anchored object's alignment target.
      */
      EMBOX_TOP = 1096181101,
    /**

    - Uses the tallest text glyph tops as the anchored object's alignment target.
      */
      LINE_ASCENT = 1096180083,
    /**

    - Uses the line-of-text baseline as the anchored object's alignment target.
      */
      LINE_BASELINE = 1096180321,
    /**

    - Uses the top of lowercase letters without ascenders, such as x, as the alignment target.
      */
      LINE_XHEIGHT = 1096185960,
    /**

    - Uses the page edge as the anchored object's alignment target.
      */
      PAGE_EDGE = 1095790695,
    /**

    - Uses the page margin as the anchored object's alignment target.
      */
      PAGE_MARGINS = 1095789927,
    /**

    - Uses the text frame edge as the anchored object's alignment target.
      */
      TEXT_FRAME = 1954051174,
    /**

    - Uses the top of text leading as the anchored object's alignment target.
      */
      TOP_OF_LEADING = 1096180332,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
