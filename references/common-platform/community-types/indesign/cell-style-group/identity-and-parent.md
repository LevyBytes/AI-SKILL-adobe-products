# CellStyleGroup identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyleGroup {
    /**
    - Unique ID assigned to the CellStyleGroup.
      */
      readonly id: number
    /**
    - CellStyleGroup position within its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - CellStyleGroup name.
      */
      name: string
    /**
    - Parent of the CellStyleGroup: a Document, Application or CellStyleGroup.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
