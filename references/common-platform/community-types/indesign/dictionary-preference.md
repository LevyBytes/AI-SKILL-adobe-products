# DictionaryPreference

Community declaration reference: InDesign/2023.

User dictionary configuration.

```typescript
declare class DictionaryPreference extends Preference {
    /**
    - Hyphenation exception list used during text composition.
      */
      composition: ComposeUsing
    /**

    - When true, spelling and hyphenation exception lists from the external user dictionary are merged with the document's stored lists.
      */
      mergeUserDictionary: boolean
    /**

    - When true, all stories recompose after compose using settings change or after words are added to or removed from the user dictionary.
      */
      recomposeWhenChanged: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
