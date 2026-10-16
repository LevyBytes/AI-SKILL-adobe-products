# ChapterNumberPreference

Community declaration reference: InDesign/2023.

Preferences for chapter numbering.

```typescript
declare class ChapterNumberPreference extends Preference {
    /**
    - Value for chapter numbering.
      */
      chapterNumber: number
    /**

    - Formatting options for chapter numbers.
      */
      chapterNumberFormat: NumberingStyle | string
    /**

    - Source used to generate the chapter number.
      */
      chapterNumberSource: ChapterNumberSources
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
