# ProofingType

Community declaration reference: InDesign/2023.

Choices for proofing colors.

```typescript
declare enum ProofingType {
    /**
    - Allows a custom proofing setup for a particular output condition.
      */
      CUSTOM = 1131639917,
    /**

    - Creates a color soft proof with the document's CMYK profile.
      */
      DOCUMENT_CMYK = 1347708003,
    /**

    - Disables the soft proof display.
      */
      PROOF_OFF = 1347710822,
    /**

    - Creates a color soft proof with the current CMYK working space.
      */
      WORKING_CMYK = 1347712867,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
