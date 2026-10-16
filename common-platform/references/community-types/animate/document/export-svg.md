# Document.exportSVG

Community declaration reference: Animate/22.0.

Exports the document in Flash SWF format.
@param fileURI String as a file:/// URI naming the exported file. If fileURI is empty or omitted, Flash shows the Export Movie dialog box. Optional.
@param bCurrentSettings Boolean that uses current SWF publish settings when true. Otherwise, Flash shows the Export Flash Player dialog box. Default: false; omit when not needed.

```typescript
declare class Document {
    exportSVG(fileURI: string, unknown: boolean, unknown2: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
