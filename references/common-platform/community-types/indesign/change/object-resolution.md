# Change object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class Change {
    /**
    - Resolves the object specifier into object-reference results.
      */
      getElements(): Change[]
    /**
    - Builds source text that resolves back to the Change when run.
      */
      toSource(): string
    /**
    - Gets the object specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
