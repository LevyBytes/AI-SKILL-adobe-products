# Application.packageUCF

Community declaration reference: InDesign/2023.

Packages a folder into a UCF file.
@param sourceFolder Folder packaged into an IDML file; structure is not validated against the IDML spec, so the caller must ensure the folder is organized correctly.
@param ucfFile Destination UCF file, overwritten when it already exists.
@param mimeMediaType MIME media type; by default the value identifies the package as IDML.

```typescript
declare class Application {
    packageUCF(sourceFolder: File, ucfFile: File, mimeMediaType?: string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
