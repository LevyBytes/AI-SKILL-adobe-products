# DocumentPreset labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class DocumentPreset {
    /**
    - Property accepting any string value.
      */
      label: string
    /**
    - Reads the label value stored for the specified key.
    - @param key Key to read.
      */
      extractLabel(key: string): string
    /**
    - Writes a label value for the specified key.
    - @param key Key to update.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
