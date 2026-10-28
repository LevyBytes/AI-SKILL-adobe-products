# MojikumiTable object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class MojikumiTable {
    /**
    - Resolves the object specifier into object-reference results.
      */
      getElements(): MojikumiTable[]
    /**
    - Builds source text that resolves back to the MojikumiTable when run.
      */
      toSource(): string
    /**
    - Gets the object specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
