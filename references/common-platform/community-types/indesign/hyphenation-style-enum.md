# HyphenationStyleEnum

Community declaration reference: InDesign/2023.

Hyphenation styles supplied by a provider. Current support is limited to the Duden hyphenation provider.

```typescript
declare enum HyphenationStyleEnum {
    /**
    - Places hyphens at aesthetic hyphenation points.
      */
      HYPH_AESTHETIC = 1684104563,
    /**

    - Places hyphens at every possible hyphenation point.
      */
      HYPH_ALL = 1684106348,
    /**

    - Places hyphens at all hyphenation points except unaesthetic ones.
      */
      HYPH_ALL_BUT_UNAESTHETIC = 1684103797,
    /**

    - Places hyphens at preferred aesthetic hyphenation points.
      */
      HYPH_PREFERRED_AESTHETIC = 1685086565,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
