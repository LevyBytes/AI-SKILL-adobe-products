# Document.getPublishDocumentData

Community declaration reference: Animate/22.0.

Reports whether the specified persistent data is enabled for publishing in the specified format for this document.
@returns Boolean; True when this document publishes the specified persistent data for the specified format. Otherwise False.
@param format String naming the publishing format.
Note: _EMBED_SWF_ is the built-in persistent-data publishing format. When enabled, each document publish embeds persistent data in the SWF file. ActionScript access is through the .metaData property. The requirement is SWF version 19 (Flash Player 11.6) or later, and only onstage symbol instances are covered. Custom JSFL scripts can specify other custom publishing formats when this method is called with the same format.

```typescript
declare class Document {
    getPublishDocumentData(format: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
