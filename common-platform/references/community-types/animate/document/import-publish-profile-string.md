# Document.importPublishProfileString

Community declaration reference: Animate/22.0.

Imports a publish-profile XML string and makes that profile current. To produce the XML string, call document.exportPublishProfileString() before this method.
@returns true when the string imports successfully; otherwise false.
@param xmlString String containing XML data that becomes active after import.

```typescript
declare class Document {
    importPublishProfileString(xmlString: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
