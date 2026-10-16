# FootnotePrefixSuffix

Community declaration reference: InDesign/2023.

Placement choices for footnote prefixes or suffixes.

```typescript
declare enum FootnotePrefixSuffix {
    /**
    - Omits both prefix and suffix.
      */
      NO_PREFIX_SUFFIX = 1181774702,
    /**

    - Applies the prefix and/or suffix to both the main-text reference number and the footnote-text marker number.
      */
      PREFIX_SUFFIX_BOTH = 1181774690,
    /**

    - Applies the prefix and/or suffix to the marker number within footnote text.
      */
      PREFIX_SUFFIX_MARKER = 1181774708,
    /**

    - Applies the prefix and/or suffix to the reference number in main text.
      */
      PREFIX_SUFFIX_REFERENCE = 1181774706,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
