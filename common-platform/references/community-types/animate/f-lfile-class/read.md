# FLfileClass.read

Community declaration reference: Animate/22.0.

Reads the specified file and returns its contents as a string, or null when the read operation fails.
@returns File contents as a string, or null when reading fails.
@param fileURI String in file:/// URI form identifying the text-based file to read, such as .js, .txt, or .jsfl.

```typescript
declare class FLfileClass {
    read(fileURI: string): string | null
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
