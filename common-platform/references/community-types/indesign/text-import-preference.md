# TextImportPreference

Community declaration reference: InDesign/2023.

Preferences controlling text import.

```typescript
declare class TextImportPreference extends Preference {
    /**
    - Character set for the computer language that produced the text file.
      */
      characterSet: TextImportCharacterSet
    /**

    - When true, replaces the requested count of spaces with a tab. For the count setting, see spaces into tabs count.
      */
      convertSpacesIntoTabs: boolean
    /**

    - Dictionary applied to the incoming text.
      */
      dictionary: string
    /**

    - Platform that generated the text file being imported.
      */
      platform: ImportPlatform
    /**

    - Count of spaces to replace with a tab. Note: Applies only when convert spaces into tabs is true.
      */
      spacesIntoTabsCount: number
    /**

    - When true, the import filter deletes surplus carriage returns from line endings.
      */
      stripReturnsBetweenLines: boolean
    /**

    - When true, the import filter deletes surplus carriage returns separating paragraphs.
      */
      stripReturnsBetweenParagraphs: boolean
    /**

    - When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
      */
      useTypographersQuotes: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
