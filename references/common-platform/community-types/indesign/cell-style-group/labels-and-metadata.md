# CellStyleGroup labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyleGroup {
    /**
    - String-valued custom label property.
      */
      label: string
    /**
    - Looks up the label value stored for the supplied key.
    - @param key Key to query.
      */
      extractLabel(key: string): string
    /**
    - Stores a label value under the supplied key.
    - @param key Key to assign.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
