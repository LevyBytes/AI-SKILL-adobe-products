# CrossReferenceType

Community declaration reference: InDesign/2023.

Instructional-text choices for cross references.

```typescript
declare enum CrossReferenceType {
    /**
    - Places the specified string before the referenced topic.
      */
      CUSTOM_CROSS_REFERENCE = 1131639875,
    /**

    - Places the specified following topic separator plus specified string after the referenced topic. When no following topic separator is specified, a space is inserted.
      */
      CUSTOM_CROSS_REFERENCE_AFTER = 1131639905,
    /**

    - Places the specified string plus specified before cross reference separator before the referenced topic. When no before cross reference separator is specified, a space is inserted.
      */
      CUSTOM_CROSS_REFERENCE_BEFORE = 1131639906,
    /**

    - Places 'See' before the referenced topic.
      */
      SEE = 1701729125,
    /**

    - Places 'See also' before the referenced topic.
      */
      SEE_ALSO = 1399144812,
    /**

    - Places 'See also herein' before the referenced topic.
      */
      SEE_ALSO_HEREIN = 1398884466,
    /**

    - Places 'See herein' before the referenced topic.
      */
      SEE_HEREIN = 1397256814,
    /**

    - Uses 'See also' before the referenced topic when the topic has an associated page reference; otherwise uses 'See'.
      */
      SEE_OR_ALSO_BRACKET = 1399800172,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
