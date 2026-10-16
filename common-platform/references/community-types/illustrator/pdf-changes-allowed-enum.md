# PDFChangesAllowedEnum

Community declaration reference: Illustrator/2022.

Choices governing permitted edits in a pdf document.

```typescript
declare enum PDFChangesAllowedEnum {
    /**
    - Allows any changes except page extraction - 128bit.
      */
      CHANGE128ANYCHANGES = 5,
    /**

    - Allows comments - 128bit.
      */
      CHANGE128COMMENTING = 4,
    /**

    - Allows page editing - 128bit.
      */
      CHANGE128EDITPAGE = 2,
    /**

    - Allows form field filling and signing - 128bit.
      */
      CHANGE128FILLFORM = 3,
    /**

    - Allows no changes - 128bit.
      */
      CHANGE128NONE = 1,
    /**

    - Allows any changes except page extraction - 40bit.
      */
      CHANGE40ANYCHANGES = 9,
    /**

    - Allows comments - 40bit.
      */
      CHANGE40COMMENTING = 7,
    /**

    - Allows no changes - 40bit.
      */
      CHANGE40NONE = 6,
    /**

    - Allows page layout changes - 40bit.
      */
      CHANGE40PAGELAYOUT = 8,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
