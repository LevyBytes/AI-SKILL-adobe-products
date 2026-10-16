# Document identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Document {
    /**
    - Document unique ID.
      */
      readonly id: number
    /**
    - Position of this Document inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier can resolve to valid objects.
      */
      readonly isValid: boolean
    /**
    - Document name.
      */
      name: string
    /**
    - Application parent for the Document.
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
