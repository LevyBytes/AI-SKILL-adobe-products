# Dialog labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class Dialog {
    /**
    - String-valued custom property.
      */
      label: string
    /**
    - Gets the label value tied to the supplied key.
    - @param key Key value.
      */
      extractLabel(key: string): string
    /**
    - Sets the label value tied to the supplied key.
    - @param key Key value.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
