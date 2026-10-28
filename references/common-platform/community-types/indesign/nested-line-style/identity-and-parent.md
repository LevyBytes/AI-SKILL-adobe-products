# NestedLineStyle identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class NestedLineStyle {
    /**
    - NestedLineStyle position within its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Owning object for the NestedLineStyle; allowed parents include TextDefault, a Paragraph, a ParagraphStyle, Text, an InsertionPoint, a TextStyleRange, a TextColumn, a Line, a Word, a Character, a Story or an XmlStory.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
