# GlobalClashResolutionStrategy

Community declaration reference: InDesign/2023.

Strategy used when imported styles share names with styles already present.

```typescript
declare enum GlobalClashResolutionStrategy {
    /**
    - Skips imported styles whose names collide with existing items.
      */
      DO_NOT_LOAD_THE_STYLE = 1147495276,
    /**

    - Replaces existing styles when their names collide with imported items.
      */
      LOAD_ALL_WITH_OVERWRITE = 1279350607,
    /**

    - Keeps existing items by renaming imported styles that have colliding names.
      */
      LOAD_ALL_WITH_RENAME = 1279350610,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
