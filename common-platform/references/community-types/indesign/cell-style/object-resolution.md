# CellStyle object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyle {
    /**
    - Resolves this object specifier into object-reference array entries.
      */
      getElements(): CellStyle[]
    /**
    - Builds a string that returns the CellStyle when run.
      */
      toSource(): string
    /**
    - Returns this object's specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
