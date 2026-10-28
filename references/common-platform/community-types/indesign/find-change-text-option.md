# FindChangeTextOption

Community declaration reference: InDesign/2023.

Options for find/change text.

```typescript
declare class FindChangeTextOption extends Preference {
    /**
    - When true, matching requires the same case usage as the find text string. When false, strings match the find text string without regard to case.
      */
      caseSensitive: boolean
    /**

    - When true, diacs are ignored in the find/change query.
      */
      ignoreDiacritics: boolean
    /**

    - When true, kashidas are ignored in the find/change query.
      */
      ignoreKashidas: boolean
    /**

    - When true, footnotes participate in the find/change query.
      */
      includeFootnotes: boolean
    /**

    - When true, hidden layers participate in the find/change query.
      */
      includeHiddenLayers: boolean
    /**

    - When true, locked layers participate in the find query.
      */
      includeLockedLayersForFind: boolean
    /**

    - When true, locked stories participate in the find query.
      */
      includeLockedStoriesForFind: boolean
    /**

    - When true, master pages participate in the find/change query.
      */
      includeMasterPages: boolean
    /**

    - When true, only text with the specified kana type is found.
      */
      kanaSensitive: boolean
    /**

    - When true, searching proceeds backward.
      */
      searchBackwards: boolean
    /**

    - When true, only the complete find text string is found. When false, strings containing that find text string are found too.
      */
      wholeWord: boolean
    /**

    - When true, only text matching the specified character width is found.
      */
      widthSensitive: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
