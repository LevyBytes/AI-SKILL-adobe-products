# DialogRow object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class DialogRow {
    /**
    - Produces object-reference array entries from the object specifier.
      */
      getElements(): DialogRow[]
    /**
    - Builds executable source text that resolves back to the DialogRow.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
