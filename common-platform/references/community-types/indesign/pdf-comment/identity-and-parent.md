# PDFComment identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class PDFComment {
    /**
    - Unique ID assigned to the PDFComment.
      */
      readonly id: number
    /**
    - Position of the PDFComment inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - PDFComment name; aliases the PDFComment label property.
      */
      name: string
    /**
    - Parent object for the PDFComment (a Document).
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
