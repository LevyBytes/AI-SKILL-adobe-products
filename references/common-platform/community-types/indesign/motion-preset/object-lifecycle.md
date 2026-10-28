# MotionPreset object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class MotionPreset {
    /**
    - Creates a duplicate motion preset.
    - @param name Name to assign to the duplicated motion preset.
      */
      duplicate(name: string): MotionPreset
    /**
    - Removes the MotionPreset.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
