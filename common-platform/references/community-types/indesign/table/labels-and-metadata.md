# Table labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Table {
    /**
    - Any string can be assigned to this property.
      */
      label: string
    /**
    - Gets the label value stored for the specified key.
    - @param key Key.
      */
      extractLabel(key: string): string
    /**
    - Assigns the value stored for the specified key to the label.
    - @param key Key.
    - @param value Value.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
