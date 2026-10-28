# KinsokuSet

Community declaration reference: InDesign/2023.

Choices for predefined kinsoku sets.

```typescript
declare enum KinsokuSet {
    /**
    - Selects the hard or maximum kinsoku set, covering all Japanese characters that should not start or finish a line.
      */
      HARD_KINSOKU = 1248357235,
    /**

    - Selects the Korean kinsoku set.
      */
      KOREAN_KINSOKU = 1263692659,
    /**

    - Selects no kinsoku set.
      */
      NOTHING = 1851876449,
    /**

    - Selects the simplified Chinese kinsoku set.
      */
      SIMPLIFIED_CHINESE_KINSOKU = 1396927347,
    /**

    - Selects the soft or weak kinsoku set, leaving out long vowel symbols and small hiragana and katakana characters from the hard kinsoku set.
      */
      SOFT_KINSOKU = 1249078131,
    /**

    - Selects the traditional Chinese kinsoku set.
      */
      TRADITIONAL_CHINESE_KINSOKU = 1413704563,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
