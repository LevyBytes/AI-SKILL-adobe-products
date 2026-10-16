# KinsokuHangTypes

Community declaration reference: InDesign/2023.

Choices for hanging punctuation while a kinsoku set is active.

```typescript
declare enum KinsokuHangTypes {
    /**
    - Enables hanging punctuation, requires it outside the text frame, and prevents placement on the frame.
      */
      KINSOKU_HANG_FORCE = 1248553062,
    /**

    - Enables hanging punctuation and allows punctuation marks on or outside the text frame, while keeping burasagari hanging as small as possible. Note: Behavior differs for justified and nonjustified text. For details about justification, see line alignment.
      */
      KINSOKU_HANG_REGULAR = 1248553074,
    /**

    - Turns hanging punctuation off.
      */
      NONE = 1852796517,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
