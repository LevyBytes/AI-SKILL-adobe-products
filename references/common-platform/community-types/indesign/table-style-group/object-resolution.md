# TableStyleGroup object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class TableStyleGroup {
    /**
    - Resolves the object specifier and returns object references as an array.
      */
      getElements(): TableStyleGroup[]
    /**
    - Builds a string that returns the TableStyleGroup when executed.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
