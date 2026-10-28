# InkTypes

Community declaration reference: InDesign/2023.

Ink trapping type choices.

```typescript
declare enum InkTypes {
    /**
    - Intended for traditional process inks and most spot inks.
      */
      NORMAL = 1852797549,
    /**

    - For heavy, nontransparent inks where underlying colors should not trap, while edge trapping still can occur. Best for metallic inks.
      */
      OPAQUE = 1769230192,
    /**

    - For heavy, nontransparent inks where underlying colors should not trap, while edge trapping still can occur. Best for inks that interact poorly with other inks.
      */
      OPAQUE_IGNORE = 1769228647,
    /**

    - For clear inks that require underlying items to trap. Best for varnishes and dieline inks.
      */
      TRANSPARENT = 1769231474,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
