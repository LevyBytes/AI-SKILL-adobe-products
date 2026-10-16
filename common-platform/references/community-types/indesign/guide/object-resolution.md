# Guide object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class Guide {
    /**
    - Resolves the object specifier and returns object references in an array.
      */
      getElements(): Guide[]
    /**
    - Creates source text that can be executed to obtain this Guide.
      */
      toSource(): string
    /**
    - Provides the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
