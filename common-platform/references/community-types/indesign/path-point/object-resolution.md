# PathPoint object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class PathPoint {
    /**
    - Resolves the object specifier and returns object references in an array.
      */
      getElements(): PathPoint[]
    /**
    - Creates source text that can be executed to obtain this PathPoint.
      */
      toSource(): string
    /**
    - Provides the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
