# XMLElements.add

Community declaration reference: InDesign/2023.

Builds a new XML element.
@param markupTag XML tag used to identify the element.
@param xmlContent Content receiving markup.
@param withProperties Property values used at XMLElement creation.

```typescript
declare class XMLElements {
    add(markupTag: string | XMLTag, xmlContent: Text | Story | PageItem | Movie | Sound | Graphic | Table | Cell, withProperties: object): XMLElement
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
