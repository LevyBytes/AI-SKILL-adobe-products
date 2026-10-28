# PageItem object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class PageItem {
    /**
    - Produces an array containing the resolved object references.
      */
      getElements(): PageItem[]
    /**
    - Builds a string which, when run, resolves back to this PageItem.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
