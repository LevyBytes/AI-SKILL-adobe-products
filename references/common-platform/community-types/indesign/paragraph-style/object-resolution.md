# ParagraphStyle object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class ParagraphStyle {
    /**
    - Resolves the specifier and returns object references.
      */
      getElements(): ParagraphStyle[]
    /**
    - Produces source text that can evaluate back to the ParagraphStyle.
      */
      toSource(): string
    /**
    - Retrieves the object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
