# IdleTask labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class IdleTask {
    /**
    - String-valued property available for arbitrary text.
      */
      label: string
    /**
    - Reads the label value for the specified key.
    - @param key Key value.
      */
      extractLabel(key: string): string
    /**
    - Stores the label value for the specified key.
    - @param key Key value.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
