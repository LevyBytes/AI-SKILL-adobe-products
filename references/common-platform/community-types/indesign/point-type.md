# PointType

Community declaration reference: InDesign/2023.

Path point type choices.

```typescript
declare enum PointType {
    /**
    - Corner point with either one direction line or two independent direction lines.
      */
      CORNER = 1668443762,
    /**

    - Plain point with no direction lines.
      */
      PLAIN = 1886151022,
    /**

    - Smooth point whose two direction lines are parallel.
      */
      SMOOTH = 1936553064,
    /**

    - Special smooth point variant with two direction lines of equal length.
      */
      SYMMETRICAL = 1937337709,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
