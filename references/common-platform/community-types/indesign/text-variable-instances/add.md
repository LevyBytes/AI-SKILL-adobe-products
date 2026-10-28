# TextVariableInstances.add

Community declaration reference: InDesign/2023.

Adds a text variable instance at a location.
@param to Placement relative to the reference object or inside the owning container.
@param reference Reference object. Needed only for before/after placement.
@param withProperties Starting property values for the TextVariableInstance being created.

```typescript
declare class TextVariableInstances {
    add(to?: LocationOptions, reference?: TextVariableInstance | XmlStory | TextFrame | EndnoteTextFrame | Story | Note | Cell | Footnote | Table | TextColumn | TextStyleRange | Text | InsertionPoint | Paragraph | Line | Word | Character | Change, withProperties?: object): TextVariableInstance
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
