# RepaginateOption

Community declaration reference: InDesign/2023.

Page-numbering choices for book content objects in a book.

```typescript
declare enum RepaginateOption {
    /**
    - For each book content object, starts numbering at the next even-numbered page after the previous object's last page.
      */
      NEXT_EVEN_PAGE = 1164993131,
    /**

    - For each book content object, starts numbering at the next odd-numbered page after the previous object's last page.
      */
      NEXT_ODD_PAGE = 1332765291,
    /**

    - Continues page numbering in sequence from the previous book content object.
      */
      NEXT_PAGE = 1885500011,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
