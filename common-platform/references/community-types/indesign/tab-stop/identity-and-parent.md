# TabStop identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class TabStop {
    /**
    - TabStop index within its containing object.
      */
      readonly index: number
    /**
    - Returns true when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Containing object for TabStop: TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
