# Application.importStyles

Community declaration reference: InDesign/2023.

Loads the requested styles.
@param format Style types to import.
@param from File containing the styles to import.
@param globalStrategy Strategy for resolving imported-style name clashes with existing styles.

```typescript
declare class Application {
    importStyles(format: ImportFormat, from: File, globalStrategy?: GlobalClashResolutionStrategy): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
