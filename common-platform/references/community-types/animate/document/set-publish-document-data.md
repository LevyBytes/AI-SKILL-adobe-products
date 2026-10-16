# Document.setPublishDocumentData

Community declaration reference: Animate/22.0.

Enables or disables persistent-data publishing for the whole document.
@param format String naming the publishing format.
Note: _EMBED_SWF_ is the built-in persistent-data publishing format. When set, each document publish embeds persistent data in the SWF file. ActionScript access is through the .metaData property. The requirement is SWF version 19 (Flash Player 11.6) or later, and the feature only applies to symbol instances onstage. Custom JSFL scripts may name other custom publishing formats when calling this method with the same format.
@param publish Boolean indicating whether persistent-data publishing is enabled or disabled for the specified format.

```typescript
declare class Document {
    setPublishDocumentData(format: string, publish: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
