# TextPathEffects

Community declaration reference: InDesign/2023.

Choices for type-on-a-path alignment and appearance.

```typescript
declare enum TextPathEffects {
    /**
    - Places each character baseline's center on the path while aligning each vertical edge with the path's center point.
      */
      GRAVITY_PATH_EFFECT = 1601201767,
    /**

    - Places each character baseline's center parallel to the path tangent. This is the default effect.
      */
      RAINBOW_PATH_EFFECT = 1601201778,
    /**

    - Keeps text character horizontal edges perfectly horizontal regardless of path shape.
      */
      RIBBON_PATH_EFFECT = 1601201715,
    /**

    - Keeps text character vertical edges perfectly vertical regardless of path shape.
      */
      SKEW_PATH_EFFECT = 1601201779,
    /**

    - Places the left edge of each character baseline on the path without rotating characters.
      */
      STAIR_STEP_PATH_EFFECT = 1601205107,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
