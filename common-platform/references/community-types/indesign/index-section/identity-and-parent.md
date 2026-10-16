# IndexSection identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class IndexSection {
    /**
    - Unique ID for the IndexSection.
      */
      readonly id: number
    /**
    - Position of the IndexSection inside its containing object.
      */
      readonly index: number
    /**
    - Boolean result indicating that the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the IndexSection.
      */
      readonly name: string
    /**
    - Parent object for the IndexSection (a Index).
      */
      readonly parent: Index
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
