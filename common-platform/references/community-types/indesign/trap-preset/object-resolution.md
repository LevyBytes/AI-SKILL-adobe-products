# TrapPreset object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class TrapPreset {
    /**
    - Resolves this object specifier into an array of object references.
      */
      getElements(): TrapPreset[]
    /**
    - Builds source text that evaluates back to the TrapPreset.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
