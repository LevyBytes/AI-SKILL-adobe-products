# Assignment labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Assignment {
    /**
    - String-valued property available for custom data.
      */
      label: string
    /**
    - Reads the label value for the specified key.
    - @param key Key to read.
      */
      extractLabel(key: string): string
    /**
    - Sets the label value for the specified key.
    - @param key Key to write.
    - @param value Value to associate with the key.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
