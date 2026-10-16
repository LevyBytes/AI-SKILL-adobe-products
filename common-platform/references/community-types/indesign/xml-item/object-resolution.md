# XMLItem object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class XMLItem {
    /**
    - Resolves this object specifier into object-reference array form.
      */
      getElements(): XMLItem[]
    /**
    - Builds executable source text that resolves back to the XMLItem.
      */
      toSource(): string
    /**
    - Gets this object's specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
