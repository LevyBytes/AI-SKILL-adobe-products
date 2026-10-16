# ArrowHead

Community declaration reference: InDesign/2023.

Shape choices for one or both ends of an open path.

```typescript
declare enum ArrowHead {
    /**
    - Solid arrow head with a pierced end that bows sharply toward the point; the point forms a 45-degree angle.
      */
      BARBED_ARROW_HEAD = 1650553442,
    /**

    - Vertical bar cut through by the stroke, meeting it at a right angle and matching its weight. The bar length is 4.5 times the stroke width.
      */
      BAR_ARROW_HEAD = 1651663208,
    /**

    - Hollow circle with an outline matching the stroke weight. Its diameter is 5 times the stroke width.
      */
      CIRCLE_ARROW_HEAD = 1668440424,
    /**

    - Solid circle whose diameter equals 5 times the stroke width.
      */
      CIRCLE_SOLID_ARROW_HEAD = 1668505960,
    /**

    - Solid arrow head with a pierced end curving inward toward the point; the point forms a 45-degree angle.
      */
      CURVED_ARROW_HEAD = 1668702568,
    /**

    - None.
      */
      NONE = 1852796517,
    /**

    - Arrow head made from two slanted lines; their intersection creates a 45-degree angle, and the stroke weight matches the path stroke.
      */
      SIMPLE_ARROW_HEAD = 1936289136,
    /**

    - Arrow head made from two slanted lines; their intersection creates a 90-degree angle, and the stroke weight matches the path stroke.
      */
      SIMPLE_WIDE_ARROW_HEAD = 1937203560,
    /**

    - Hollow square placed perpendicular to the path, with an outline matching the stroke weight. One square side is 5 times the stroke width.
      */
      SQUARE_ARROW_HEAD = 1936810344,
    /**

    - Solid square placed perpendicular to the path end. One square side is 5 times the stroke width.
      */
      SQUARE_SOLID_ARROW_HEAD = 1936941416,
    /**

    - Solid triangle arrow head whose point forms a 45-degree angle.
      */
      TRIANGLE_ARROW_HEAD = 1953655150,
    /**

    - Solid triangle arrow head whose point forms a 90-degree angle.
      */
      TRIANGLE_WIDE_ARROW_HEAD = 1953980776,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
