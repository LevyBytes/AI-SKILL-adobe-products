# FLfileClass.copy

Community declaration reference: Animate/22.0.

Copies one file to another location. The method returns false when copyURI is already present.
@returns Boolean true on success; false otherwise.
@param fileURI String in file:/// URI form that identifies the file to copy.
@param copyURI String in file:/// URI form that identifies the destination and copied-file name.

```typescript
declare class FLfileClass {
    copy(fileURI: string, copyURI: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
