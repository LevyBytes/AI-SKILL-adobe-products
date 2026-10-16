# CharStyleMapping object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class CharStyleMapping {
    /**
    - Converts the object specifier to an object-reference array.
      */
      getElements(): CharStyleMapping[]
    /**
    - Creates an executable string that returns the CharStyleMapping.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
