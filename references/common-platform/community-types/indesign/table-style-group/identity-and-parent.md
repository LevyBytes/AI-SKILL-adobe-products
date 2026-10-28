# TableStyleGroup identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class TableStyleGroup {
    /**
    - Unique ID for the TableStyleGroup.
      */
      readonly id: number
    /**
    - TableStyleGroup position inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves successfully to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the TableStyleGroup.
      */
      name: string
    /**
    - Parent object for the TableStyleGroup, either a Document, Application, or TableStyleGroup.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
