# Flash.xmlPanel

Community declaration reference: Animate/22.0.

Opens the XML To UI dialog from a URI pointing to an XML-format file.
@returns XMLUI. The returned object contains properties for every control defined in the XML file. All properties come back as strings. The object also has a predefined "dismiss" property whose string value is either "accept" or "cancel".
@param xmlURI URI specifying the XML file that defines the controls in the panel. The full path name is required.

```typescript
declare class Flash {
    xmlPanel(xmlURI: string): XMLUI
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
