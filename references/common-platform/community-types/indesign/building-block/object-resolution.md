# BuildingBlock object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class BuildingBlock {
    /**
    - Resolves this specifier into an array of object references.
      */
      getElements(): BuildingBlock[]
    /**
    - Builds an executable source string that resolves back to the BuildingBlock.
      */
      toSource(): string
    /**
    - Gets this object's specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
