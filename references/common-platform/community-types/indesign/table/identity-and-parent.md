# Table identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Table {
    /**
    - Unique ID assigned to the Table.
      */
      readonly id: number
    /**
    - Position of the Table inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name of the Table; this aliases the Table's label property.
      */
      name: string
    /**
    - Table container may be a XMLElement, XmlStory, TextFrame, EndnoteTextFrame, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or Cell.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
