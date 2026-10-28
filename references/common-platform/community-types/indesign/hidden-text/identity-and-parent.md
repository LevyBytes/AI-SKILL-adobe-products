# HiddenText identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class HiddenText {
    /**
    - Unique ID assigned to the HiddenText.
      */
      readonly id: number
    /**
    - Index position of the HiddenText inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - HiddenText name; alias for the HiddenText's label property.
      */
      name: string
    /**
    - Parent object for HiddenText: Story, XmlStory, TextFrame, EndnoteTextFrame, InsertionPoint, Note, Cell, or Footnote.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
