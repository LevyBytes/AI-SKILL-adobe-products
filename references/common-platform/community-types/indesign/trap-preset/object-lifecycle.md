# TrapPreset object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class TrapPreset {
    /**
    - Creates a copy of the TrapPreset.
      */
      duplicate(): TrapPreset
    /**
    - Deletes the trap preset.
    - @param replacingWith Trap preset to use instead of the deleted preset.
      */
      remove(replacingWith: TrapPreset): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
