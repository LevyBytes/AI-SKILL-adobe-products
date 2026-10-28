# Reply identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Reply {
    /**
    - Unique ID assigned to the Reply.
      */
      readonly id: number
    /**
    - Position of the Reply inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Reply name; aliases the Reply label property.
      */
      name: string
    /**
    - Parent object for the Reply (a PDFComment).
      */
      readonly parent: PDFComment
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
