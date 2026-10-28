# Document.importPublishProfile

Community declaration reference: Animate/22.0.

Imports a profile from a file.
@returns Integer index of the imported profile in the profiles list. Returns -1 when the profile cannot be imported.
@param fileURI String as a file:/// URI naming the XML file definition for the profile import.

```typescript
declare class Document {
    importPublishProfile(fileURI: string): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
