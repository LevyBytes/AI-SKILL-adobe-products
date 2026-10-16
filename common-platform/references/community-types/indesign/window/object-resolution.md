# Window object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class Window {
    /**
    - Returns object-reference array entries resolved from the specifier.
      */
      getElements(): Window[]
    /**
    - Generates executable source text that returns the Window.
      */
      toSource(): string
    /**
    - Returns this object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
