# PageNumberVariablePreference

Community declaration reference: InDesign/2023.

Preferences for a page number variable.

```typescript
declare class PageNumberVariablePreference extends Preference {
    /**
    - Variable format.
      */
      format: VariableNumberingStyles
    /**

    - Scope or page range to include.
      */
      scope: VariableScopes
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
