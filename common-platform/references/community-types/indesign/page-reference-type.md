# PageReferenceType

Community declaration reference: InDesign/2023.

Choices for index page references.

```typescript
declare enum PageReferenceType {
    /**
    - Refers to the page where the index entry appears.
      */
      CURRENT_PAGE = 1668444263,
    /**

    - Covers pages beginning with the page containing the inedex entry and ending at the nth page after it, where n is the included page count.
      */
      FOR_NEXT_N_PAGES = 1718513767,
    /**

    - Covers pages beginning with the page containing the index entry and ending at the page containing the nth full paragraph after the entry's paragraph, where n is the paragraph count.
      */
      FOR_NEXT_N_PARAGRAPHS = 1718513778,
    /**

    - Suppresses page numbers for the index topic.
      */
      SUPPRESS_PAGE_NUMBERS = 1852863079,
    /**

    - Refers to the document's final page.
      */
      TO_END_OF_DOCUMENT = 1701799011,
    /**

    - Refers to the final page in the numbered section that contains the index entry.
      */
      TO_END_OF_SECTION = 1701802851,
    /**

    - Refers to the final page in the story that contains the index entry.
      */
      TO_END_OF_STORY = 1701802868,
    /**

    - Covers pages from the index entry's page through the next paragraph style change.
      */
      TO_NEXT_STYLE_CHANGE = 1953395555,
    /**

    - Covers pages from the index entry's page through the page containing the next occurrence of the specified paragraph style. When no paragraph style is specified, the index entry paragraph's style is used.
      */
      TO_NEXT_USE_OF_STYLE = 1953396083,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
