# FootnoteMarkerPositioning

Community declaration reference: InDesign/2023.

Choices for placing footnote reference numbers relative to main-text characters.

```typescript
declare enum FootnoteMarkerPositioning {
    /**
    - Uses the character-style position assigned to footnote reference numbers; for details, see footnote marker style.
      */
      NORMAL_MARKER = 1181576816,
    /**

    - Applies ruby-style positioning to the marker.
      */
      RUBY_MARKER = 1181577840,
    /**

    - Formats footnote reference numbers as subscript.
      */
      SUBSCRIPT_MARKER = 1181578096,
    /**

    - Formats footnote reference numbers as superscript.
      */
      SUPERSCRIPT_MARKER = 1181569904,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
