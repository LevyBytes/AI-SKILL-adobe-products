# PrinterPreset object resolution

Community declaration reference: InDesign/2023.

```typescript
declare class PrinterPreset {
    /**
    - Resolves the object specifier and produces object references in an array.
      */
      getElements(): PrinterPreset[]
    /**
    - Builds a string that, when run, returns the PrinterPreset.
      */
      toSource(): string
    /**
    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
