# Guide identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Guide {
    /**
    - Unique Guide ID.
      */
      readonly id: number
    /**
    - Guide position within its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves successfully to valid objects.
      */
      readonly isValid: boolean
    /**
    - Guide name, provided as an alias for the Guide's label property.
      */
      name: string
    /**
    - Guide parent, either a Spread or MasterSpread.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
