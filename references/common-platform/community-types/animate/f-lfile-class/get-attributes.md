# FLfileClass.getAttributes

Community declaration reference: Animate/22.0.

Returns a string of attribute characters for the specified file or folder, or an empty string when there are no special attributes, meaning it is not read-only, hidden, and similar. Always call FLfile.exists() first to confirm the file or folder is present before using this method.
The string's characters have these meanings:
â€¢R â€” fileOrFolderURI is read-only
â€¢D â€” fileOrFolderURI is a folder (directory)
â€¢H â€” fileOrFolderURI is hidden (Windows only)
â€¢S â€” fileOrFolderURI is a system file or folder (Windows only)
â€¢A â€” fileOrFolderURI is ready for archiving (Windows only)
For a hidden-folder fileOrFolderURI value, the returned string is "DH".
@returns String containing the attributes for the specified file or folder.
If the file or folder is missing, results are unpredictable. Use FLfile.exists() before calling this method.
@param fileOrFolderURI String in file:/// URI form identifying the file or folder whose attributes should be retrieved.

```typescript
declare class FLfileClass {
    getAttributes(fileOrFolderURI: string): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
