# Section labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Section {
    /**
    - String-valued custom property.
      */
      label: string
    /**
    - Reads the label value stored for the specified key.
    - @param key Key to look up.
      */
      extractLabel(key: string): string
    /**
    - Stores the specified value as the label for the given key.
    - @param key Key to write.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
