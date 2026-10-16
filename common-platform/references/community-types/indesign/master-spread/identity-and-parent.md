# MasterSpread identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class MasterSpread {
    /**
    - Unique MasterSpread ID.
      */
      readonly id: number
    /**
    - MasterSpread index within its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - MasterSpread name.
      */
      readonly name: string
    /**
    - Owning Document for this MasterSpread.
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
