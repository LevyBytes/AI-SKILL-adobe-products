# Page labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Page {
    /**
    - Free-form string label value.
      */
      label: string
    /**
    - Reads the label value stored for a key.
    - @param key Key to look up.
      */
      extractLabel(key: string): string
    /**
    - Writes a label value for the supplied key.
    - @param key Key whose label entry is set.
    - @param value Value stored for that key.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
