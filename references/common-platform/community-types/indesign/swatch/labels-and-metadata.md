# Swatch labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Swatch {
    /**
    - String-valued label property.
      */
      label: string
    /**
    - Gets the label value stored for the supplied key.
    - @param key Key selector.
      */
      extractLabel(key: string): string
    /**
    - Stores a label value for the supplied key.
    - @param key Key selector.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
