# Footnote identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Footnote {
    /**
    - Unique Footnote ID.
      */
      readonly id: number
    /**
    - Position of the Footnote inside its parent container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves successfully.
      */
      readonly isValid: boolean
    /**
    - Footnote name; aliases the Footnote label property.
      */
      name: string
    /**
    - Owning object for the Footnote: XmlStory, Cell, Story, TextFrame, EndnoteTextFrame or InsertionPoint.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
