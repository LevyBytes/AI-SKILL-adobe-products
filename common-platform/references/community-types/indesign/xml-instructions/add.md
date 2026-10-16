# XMLInstructions.add

Community declaration reference: InDesign/2023.

Adds an XML processing instruction.
@param target Name used by an application reading exported XML to recognize the processing instruction.
@param data Value telling the application what action to take for the processing instruction identified by target.
@param storyOffset In-story placement, expressed as an insertion point.
@param withProperties Initial property map for XMLInstruction creation

```typescript
declare class XMLInstructions {
    add(target: string, data?: string, storyOffset?: InsertionPoint | number, withProperties?: object): XMLInstruction
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
