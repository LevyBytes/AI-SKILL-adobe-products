# FLfileClass.write

Community declaration reference: Animate/22.0.

Writes a specified string as UTF-8 into the specified file. If the file is absent, it is created. The containing folder must already be present before calling this method. Use FLfile.createFolder() to make folders.
@returns Boolean true on success; false otherwise.
@param fileURI String in file:/// URI form identifying the file to write to.
@param textToWrite String containing the text to place into the file.
@param strAppendMode Optional string with the value "append", meaning textToWrite is added to the existing file. Without this parameter, textToWrite replaces fileURI content.

```typescript
declare class FLfileClass {
    write(fileURI: string, textToWrite: string, strAppendMode?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
