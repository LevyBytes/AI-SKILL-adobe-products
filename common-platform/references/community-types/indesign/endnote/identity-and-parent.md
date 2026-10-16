# Endnote identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Endnote {
    /**
    - Unique ID assigned to the Endnote.
      */
      readonly id: number
    /**
    - Position of this Endnote inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Endnote name, implemented as an alias for the label property.
      */
      name: string
    /**
    - Containing object for Endnote: InsertionPoint, Story, XmlStory, Cell or Table.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
