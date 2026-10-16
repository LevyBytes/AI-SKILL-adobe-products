# MotionPreset labels and metadata

Community declaration reference: InDesign/2023.

```typescript
declare class MotionPreset {
    /**
    - String property available for arbitrary labels.
      */
      label: string
    /**
    - Reads the label value stored for the specified key.
    - @param key Key value.
      */
      extractLabel(key: string): string
    /**
    - Stores the supplied value under the specified label key.
    - @param key Key value.
    - @param value Value to store.
      */
      insertLabel(key: string, value: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
