# TaggedTextImportPreference

Community declaration reference: InDesign/2023.

Preferences controlling tagged text import.

```typescript
declare class TaggedTextImportPreference extends Preference {
    /**
    - When true, text formatting is stripped.
      */
      removeTextFormatting: boolean
    /**

    - Rule for resolving cases where imported tagged text style names match current publication style names.
      */
      styleConflict: StyleConflict
    /**

    - When true, imported straight quotes and apostrophes become typographic quotation marks and apostrophes.
      */
      useTypographersQuotes: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
