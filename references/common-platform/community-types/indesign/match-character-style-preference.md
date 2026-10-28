# MatchCharacterStylePreference

Community declaration reference: InDesign/2023.

Preferences for a running header/footer variable that matches character style.

```typescript
declare class MatchCharacterStylePreference extends Preference {
    /**
    - Character style assigned to the text.
      */
      appliedCharacterStyle: CharacterStyle | string
    /**

    - Case applied to the matched text.
      */
      changeCase: ChangeCaseOptions
    /**

    - When true, end punctuation is removed from the matched text.
      */
      deleteEndPunctuation: boolean
    /**

    - Start point and direction used for the search.
      */
      searchStrategy: SearchStrategies
    /**

    - Text placed after the variable value. (Limit: 128 characters)
      */
      textAfter: string
    /**

    - Text placed before the variable value. (Limit: 128 characters)
      */
      textBefore: string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
