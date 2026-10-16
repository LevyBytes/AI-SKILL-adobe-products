# FootnoteRestarting

Community declaration reference: InDesign/2023.

Footnote numbering restart choices.

```typescript
declare enum FootnoteRestarting {
    /**
    - Keeps numbering continuous through the whole document without restarting.
      */
      DONT_RESTART = 1180988019,
    /**

    - Begins footnote numbering again on every page.
      */
      PAGE_RESTART = 1181774451,
    /**

    - Begins footnote numbering again in every section.
      */
      SECTION_RESTART = 1181053555,
    /**

    - Begins footnote numbering again on every spread.
      */
      SPREAD_RESTART = 1181971059,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
