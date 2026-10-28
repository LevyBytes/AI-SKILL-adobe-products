# MetadataPreference.append

Community declaration reference: InDesign/2023.

Populates undefined document metadata properties from the named external file.
@param from Path to the external file that contains metadata.
@param affectAll When true, data from the external file also replaces existing metadata. When false, current metadata is not replaced. Note: Defaults to false.

```typescript
declare class MetadataPreference extends Preference {
    append(from: File, affectAll?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
