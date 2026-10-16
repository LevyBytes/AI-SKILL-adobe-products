# TextVariableInstance object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class TextVariableInstance {
    /**
    - Resolves this specifier into object references.
      */
      getElements(): TextVariableInstance[]
    /**
    - Builds executable source text that resolves back to this TextVariableInstance.
      */
      toSource(): string
    /**
    - Gets this object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
