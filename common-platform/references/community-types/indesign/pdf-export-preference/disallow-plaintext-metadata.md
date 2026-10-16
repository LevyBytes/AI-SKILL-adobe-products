# PDFExportPreference.disallowPlaintextMetadata

Community declaration reference: InDesign/2023.

With acrobat compatibility Acrobat 6 or higher, true hides PDF document metadata from storage systems and search engines. With acrobat compatibility acrobat 5 or higher, it also blocks copying and extracting document content. Requires use security true.

```typescript
declare class PDFExportPreference extends Preference {
    disallowPlaintextMetadata: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
