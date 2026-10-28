# Position

Community declaration reference: InDesign/2023.

Text position choices.

```typescript
declare enum Position {
    /**
    - Normal text position.
      */
      NORMAL = 1852797549,
    /**

    - For OpenType fonts, reduces numeric text while keeping the main baseline. Note: numbers only.
      */
      OT_DENOMINATOR = 1884247140,
    /**

    - For OpenType fonts, reduces numeric text and aligns character tops with primary text. Note: numbers only.
      */
      OT_NUMERATOR = 1884247150,
    /**

    - For OpenType fonts, selects properly sized lowered glyphs when the font provides them.
      */
      OT_SUBSCRIPT = 1884247138,
    /**

    - For OpenType fonts, selects properly sized raised glyphs when the font provides them.
      */
      OT_SUPERSCRIPT = 1884247155,
    /**

    - Applies subscript positioning to text.
      */
      SUBSCRIPT = 1935831907,
    /**

    - Applies superscript positioning to text.
      */
      SUPERSCRIPT = 1936749411,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
