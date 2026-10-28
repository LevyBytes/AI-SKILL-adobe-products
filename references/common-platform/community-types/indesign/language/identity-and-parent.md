# Language identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Language {
    /**
    - Unique ID assigned to the Language.
      */
      readonly id: number
    /**
    - Position of this Language inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the Language.
      */
      readonly name: string
    /**
    - Document that contains the Language.
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
