# CharacterStyle labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class CharacterStyle {
    /**
    - String-valued custom property.
      */
      label: string
    /**
    - Gets the label value for the specified key.
    - @param key Label key.
      */
      extractLabel(key: string): string
    /**
    - Associates the specified key with a label value.
    - @param key Label key.
    - @param value Label value.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
