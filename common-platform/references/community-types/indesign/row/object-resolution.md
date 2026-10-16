# Row object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class Row {
    /**
    - Resolves the object specifier into object-reference array entries.
      */
      getElements(): Row[]
    /**
    - Builds executable source text that returns the Row.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
