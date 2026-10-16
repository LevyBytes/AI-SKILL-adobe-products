# CharacterAlignment

Community declaration reference: InDesign/2023.

Choices for lining up smaller characters with the line's largest character.

```typescript
declare enum CharacterAlignment {
    /**
    - Lines up small characters in a line with the large character.
      */
      ALIGN_BASELINE = 1247896172,
    /**

    - In horizontal text, lines up small characters with the bottom of the em box of large characters. In vertical text, places them at the left of the em box.
      */
      ALIGN_EM_BOTTOM = 1247896173,
    /**

    - Centers small characters within the em box of large characters.
      */
      ALIGN_EM_CENTER = 1247896436,
    /**

    - In horizontal text, lines up small characters with the top of the em box of large characters. In vertical text, places them at the right of the em box.
      */
      ALIGN_EM_TOP = 1247900784,
    /**

    - In horizontal text, lines up small characters with the bottom of the ICF of large characters. In vertical text, places them at the left of the ICF.
      */
      ALIGN_ICF_BOTTOM = 1248420461,
    /**

    - In horizontal text, lines up small characters with the top of the ICF of large characters. In vertical text, places them at the right of the ICF.
      */
      ALIGN_ICF_TOP = 1248425072,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
