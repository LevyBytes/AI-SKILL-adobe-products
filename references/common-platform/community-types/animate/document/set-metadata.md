# Document.setMetadata

Community declaration reference: Animate/22.0.

Sets XML metadata for the specified document, replacing any existing metadata. The XML supplied as strMetadata is validated and may be rewritten before storage. If validation fails as legal XML or violates specific rules, the metadata is not set and false is returned. When false is returned, no more detailed error information is available.
Note: Even a true return does not guarantee the XML stored is the exact same string you supplied. To read the exact stored XML, call document.getMetadata().
Metadata format is RDF compliant with the XMP specification. For more about RDF and XMP, see:
- RDF Primer: www.w3.org/TR/rdf-primer/
- RDF specification: www.w3.org/TR/1999/REC-rdf-syntax-19990222/
- XMP home page: www.adobe.com/products/xmp/
@returns true when successful; otherwise false.
@param strMetadata String containing the XML metadata to attach to the document. See the preceding description for details.

```typescript
declare class Document {
    setMetadata(strMetadata: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
