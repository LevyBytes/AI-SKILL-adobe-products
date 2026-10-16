# Index identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Index {
    /**
    - Unique ID for the Index.
      */
      readonly id: number
    /**
    - Position of the Index inside its containing object.
      */
      readonly index: number
    /**
    - Boolean result indicating that the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name for the Index, mapped to the Index label property.
      */
      name: string
    /**
    - Parent object for the Index (a Document).
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
