# Document.xmlPanel

Community declaration reference: Animate/22.0.

Opens an XMLUI dialog box. See fl.xmlui.
@returns Object with properties for every control defined in the XML file. Each property is returned as a string. The returned object includes one predefined property named "dismiss" with string value "accept" or "cancel".
@param fileURI String as a file:/// URI giving the XML file path for the panel controls. The full path is required.

```typescript
declare class Document {
    xmlPanel(fileURI: string): any
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
