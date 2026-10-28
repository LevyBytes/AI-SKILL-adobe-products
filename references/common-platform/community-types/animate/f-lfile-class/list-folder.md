# FLfileClass.listFolder

Community declaration reference: Animate/22.0.

Returns an array of strings for the folder's contents.
@returns Array of strings for the folder contents. If the folder is missing, or if no file or folder matches the specified criteria, an empty array is returned.
@param folderURI String in file:/// URI form identifying the folder whose contents should be retrieved. folderURI may include a wildcard mask; use \* for one-or-more-character matches and ? for exactly one character.
@param filesOrDirectories Optional string selecting only filenames or only folder (directory) names. If omitted, the result includes filenames and folder names. Use "files" or "directories" as accepted values.

```typescript
declare class FLfileClass {
    listFolder(folderURI: string, filesOrDirectories?: string): string[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
