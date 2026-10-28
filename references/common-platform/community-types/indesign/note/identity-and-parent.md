# Note identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Note {
    /**
    - Unique ID for the Note.
      */
      readonly id: number
    /**
    - Position of the Note inside its parent object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Note name; alias for the Note's label property.
      */
      name: string
    /**
    - Note parent; possible containers are XmlStory, Story, TextFrame, EndnoteTextFrame, InsertionPoint or Cell.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
