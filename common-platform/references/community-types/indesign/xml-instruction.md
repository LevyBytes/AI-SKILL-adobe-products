# XMLInstruction

Community declaration reference: InDesign/2023.

XML processing-instruction object.

```typescript
declare class XMLInstruction extends XMLItem {
    /**
    - Guidance for the application that reads exported XML on how to handle this processing instruction.
      */
      data: string
    /**

    - Insertion point immediately before the table inside the table's story.
      */
      readonly storyOffset: InsertionPoint
    /**

    - Name used by the application reading exported XML to identify this processing instruction.
      */
      target: string
    /**

    - Relocates the element to the requested position.
    - @param to Placement relative to the reference object or inside the containing object.
    - @param reference Reference object; required if to is before or after. .
      */
      move(to: LocationOptions, reference: XMLItem | Text): XMLInstruction
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
