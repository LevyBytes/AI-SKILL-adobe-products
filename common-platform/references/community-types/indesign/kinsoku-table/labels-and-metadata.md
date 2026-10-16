# KinsokuTable labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class KinsokuTable {
    /**
    - String storage field available for arbitrary labels.
      */
      label: string
    /**
    - Reads the label value stored under a given key.
    - @param key Key whose label value should be returned.
      */
      extractLabel(key: string): string
    /**
    - Stores a label value under the supplied key.
    - @param key Key used for label storage.
    - @param value Value to store for that key.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
