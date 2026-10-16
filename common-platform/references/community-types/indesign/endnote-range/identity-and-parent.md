# EndnoteRange identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class EndnoteRange {
    /**
    - Unique ID assigned to the EndnoteRange.
      */
      readonly id: number
    /**
    - Position of this EndnoteRange inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - EndnoteRange name, implemented as an alias for the label property.
      */
      name: string
    /**
    - Containing object for EndnoteRange: Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or XmlStory.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
