# ColorSettingsPolicy

Community declaration reference: InDesign/2023.

Policy choices for mismatched CMYK configuration handling.

```typescript
declare enum ColorSettingsPolicy {
    /**
    - Disables color management for documents with profiles that do not match the working space. For imported colors, numeric values take precedence over color appearance.
      */
      COLOR_POLICY_OFF = 1129344870,
    /**

    - Keeps raw color numbers and disregards embedded color profiles.
      */
      COMBINATION_OF_PRESERVE_AND_SAFE_CMYK = 1129345124,
    /**

    - Converts newly opened documents into the current working space. For imported colors, color appearance takes precedence over numeric values.
      */
      CONVERT_TO_WORKING_SPACE = 1129346931,
    /**

    - Keeps embedded color profiles in newly opened documents.
      */
      PRESERVE_EMBEDDED_PROFILES = 1129345136,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
