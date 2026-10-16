# Document.saveAs

Community declaration reference: Photoshop/2015.5.

Saves the Document with supplied save settings.
@param saveIn File path or alias to save to; when omitted, saving uses the existing Document file.
@param options Settings for the chosen file type.
@param asCopy When true, saves a copy and keeps the original open.
@param extensionType ExtensionType suffix for the saved name.

```typescript
declare class Document {
    saveAs(saveIn: File, options?: any, asCopy?: boolean, extensionType?: Extension): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
