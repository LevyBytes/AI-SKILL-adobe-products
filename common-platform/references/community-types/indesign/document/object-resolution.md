# Document object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class Document {
    /**
    - Resolves the object specifier into object-reference array entries.
      */
      getElements(): Document[]
    /**
    - Generates executable source text that returns the Document.
      */
      toSource(): string
    /**
    - Retrieves the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
