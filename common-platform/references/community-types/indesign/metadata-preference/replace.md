# MetadataPreference.replace

Community declaration reference: InDesign/2023.

Swaps the document's current metadata for metadata loaded from the specified file.
@param using Full path to the file containing replacement metadata.
@param affectAll When true, all properties are handled as external. Note: Defaults to false.

```typescript
declare class MetadataPreference extends Preference {
    replace(using: File, affectAll?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
