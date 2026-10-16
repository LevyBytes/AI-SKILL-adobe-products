# Ink object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class Ink {
    /**
    - Resolves this object specifier into an array of object references.
      */
      getElements(): Ink[]
    /**
    - Builds source text that evaluates back to this Ink.
      */
      toSource(): string
    /**
    - Gets this object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
