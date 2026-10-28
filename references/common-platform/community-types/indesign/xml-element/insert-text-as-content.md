# XMLElement.insertTextAsContent

Community declaration reference: InDesign/2023.

Inserts the chosen text content before, inside, or after the XML element.
@param using Text that will be inserted.
@param position Location for inserting the text. Text inserted before or after the element becomes content of the element's parent, rather than part of the element content.

```typescript
declare class XMLElement extends XMLItem {
    insertTextAsContent(using: string | SpecialCharacters, position: XMLElementPosition): Text
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
