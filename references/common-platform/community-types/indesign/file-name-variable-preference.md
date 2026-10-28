# FileNameVariablePreference

Community declaration reference: InDesign/2023.

Preferences for a file name variable.

```typescript
declare class FileNameVariablePreference extends Preference {
    /**
    - When true, the file extension is included.
      */
      includeExtension: boolean
    /**

    - When true, the full file path is included.
      */
      includePath: boolean
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
