# FLfileClass.getSize

Community declaration reference: Animate/22.0.

Returns an integer for the specified file's size in bytes, or 0 when the file is absent. If 0 is returned, use FLfile.exists() to tell whether the file is zero bytes or missing.
Correct file size values are returned only for files with sizes less than or equal to 2GB.
@returns Integer size of the specified file in bytes, or 0 when the file is absent.
@param fileURI String in file:/// URI form identifying the file whose size should be retrieved.

```typescript
declare class FLfileClass {
    getSize(fileURI: string): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
