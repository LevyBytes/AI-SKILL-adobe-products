# KinsokuType

Community declaration reference: InDesign/2023.

Choices for kinsoku processing.

```typescript
declare enum KinsokuType {
    /**
    - Gives priority to the kinsoku adjustment amount.
      */
      KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT = 1248553313,
    /**

    - First tries moving characters to the previous line; if push-in fails, moves them to the next line.
      */
      KINSOKU_PUSH_IN_FIRST = 1248553318,
    /**

    - First tries moving characters to the next line; if push-out fails, moves them to the previous line.
      */
      KINSOKU_PUSH_OUT_FIRST = 1248554854,
    /**

    - Always sends characters to the next line and skips any push-in attempt.
      */
      KINSOKU_PUSH_OUT_ONLY = 1248554863,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
