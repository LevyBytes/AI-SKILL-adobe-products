# SpellPreference

Community declaration reference: InDesign/2023.

Spell-check configuration.

```typescript
declare class SpellPreference extends Preference {
    /**
    - When true, first words in sentences are checked for missing capitalization.
      */
      checkCapitalizedSentences: boolean
    /**

    - When true, proper nouns are checked for missing capitalization.
      */
      checkCapitalizedWords: boolean
    /**

    - When true, words are checked for misspellings.
      */
      checkMisspelledWords: boolean
    /**

    - When true, repeated words are checked.
      */
      checkRepeatedWords: boolean
    /**

    - When true, misspellings, repeated words, uncapitalized proper nouns, and uncapitalized sentence starters are underlined. Note: Valid only when the matching properties are true. Related controls include checkMisspelledWords, checkRepeatedWords, checkCapitalizedWords, and checkCapitalizedSentences.
      */
      dynamicSpellCheck: boolean
    /**

    - Underline color for misspelled words, given as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check misspelled words to both be true.
      */
      misspelledWordColor: [number, number, number] | UIColors
    /**

    - Underline color for repeated words, supplied as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check repeated words to both be true.
      */
      repeatedWordColor: [number, number, number] | UIColors
    /**

    - Underline color for sentence-opening words that do not start with a capital letter, supplied as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check capitalized sentences to both be true.
      */
      uncapitalizedSentenceColor: [number, number, number] | UIColors
    /**

    - Underline color for uncapitalized proper nouns, supplied as a UI color or as a three-double R, G, and B array whose values run from 0 to 255. Note: Requires dynamic spell check and check capitalized words to both be true.
      */
      uncapitalizedWordColor: [number, number, number] | UIColors
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
