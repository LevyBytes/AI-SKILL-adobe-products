# Document.importStyles

Community declaration reference: InDesign/2023.

Brings selected style types into the document.
@param format Style categories to bring in.
@param from Source file containing the styles.
@param globalStrategy Strategy for resolving imported style names that collide with existing ones.

```typescript
declare class Document {
    importStyles(format: ImportFormat, from: File, globalStrategy?: GlobalClashResolutionStrategy): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
