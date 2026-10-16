# Document labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Document {
    /**
    - String-valued label slot available for arbitrary text.
      */
      label: string
    /**
    - Reads the label value stored for the specified key.
    - @param key Key to query.
      */
      extractLabel(key: string): string
    /**
    - Assigns the specified key's stored value to the label.
    - @param key Key to set.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
