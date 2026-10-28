# XMLAttribute.convertToElement

Community declaration reference: InDesign/2023.

Changes the XML attribute into a child element under its parent element.
@param located Location for the converted child inside the XML attribute's parent XML element.
@param markupTag XML tag applied to the converted XML element.

```typescript
declare class XMLAttribute {
    convertToElement(located?: XMLElementLocation, markupTag?: XMLTag): XMLElement
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
