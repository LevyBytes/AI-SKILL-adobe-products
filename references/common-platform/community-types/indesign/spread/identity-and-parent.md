# Spread identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Spread {
    /**
    - Unique ID value for the Spread.
      */
      readonly id: number
    /**
    - Position of this Spread inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Spread label exposed through the name alias.
      */
      name: string
    /**
    - Owning Document for this Spread.
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
