# TOCStyle identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class TOCStyle {
    /**
    - Unique ID for the TOCStyle.
      */
      readonly id: number
    /**
    - Position of the TOCStyle inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name of the TOCStyle.
      */
      name: string
    /**
    - Parent object for the TOCStyle (a Document).
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
