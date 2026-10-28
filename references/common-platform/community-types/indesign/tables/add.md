# Tables.add

Community declaration reference: InDesign/2023.

Creates a table.
@param to Placement location, either relative to the reference object or within the container object.
@param reference Reference object. Required when the to value specifies before or after.
@param withProperties Initial Table property values

```typescript
declare class Tables {
    add(to?: LocationOptions, reference?: Table | XMLElement | XmlStory | TextFrame | EndnoteTextFrame | Text | InsertionPoint | TextStyleRange | Paragraph | TextColumn | Line | Word | Character | Story | Cell, withProperties?: object): Table
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
