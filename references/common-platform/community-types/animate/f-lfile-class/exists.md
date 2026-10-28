# FLfileClass.exists

Community declaration reference: Animate/22.0.

Checks whether the specified file exists. When you provide both a folder and filename, that folder must already be present. Use FLfile.createFolder() when folders need to be made.
@returns Boolean true on success; false otherwise.
@param fileURI String in file:/// URI form that identifies the file to check.

```typescript
declare class FLfileClass {
    exists(fileURI: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
