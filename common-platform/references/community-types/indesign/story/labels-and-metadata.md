# Story labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Story {
    /**
    - String-valued property available for arbitrary text.
      */
      label: string
    /**
    - Returns the label value tied to the specified key.
    - @param key Key to look up.
      */
      extractLabel(key: string): string
    /**
    - Stores a label value under the supplied key.
    - @param key Label key.
    - @param value Label value.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
