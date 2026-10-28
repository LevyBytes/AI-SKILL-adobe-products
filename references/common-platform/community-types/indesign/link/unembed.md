# Link.unembed

Community declaration reference: InDesign/2023.

Extracts the source file from embedding. Without a folder, the original source file is linked; with a folder, the file is copied there and that copy becomes the link target.
@param to Folder destination for the unembedded file copy.
@param versionComments Comment text for this version.
@param forceSave True forces a version save.

```typescript
declare class Link {
    unembed(to: File, versionComments: string, forceSave?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
