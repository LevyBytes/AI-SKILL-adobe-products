# DataMergeTextPlaceholder object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class DataMergeTextPlaceholder {
    /**
    - Builds an array of object references by resolving the object specifier.
      */
      getElements(): DataMergeTextPlaceholder[]
    /**
    - Creates source text that, when run, evaluates to the DataMergeTextPlaceholder.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
