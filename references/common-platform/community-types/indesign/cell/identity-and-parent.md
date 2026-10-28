# Cell identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Cell {
    /**
    - Unique ID for the Cell.
      */
      readonly id: number
    /**
    - Position index for the Cell inside its container.
      */
      readonly index: number
    /**
    - True when object specifier resolution yields valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the Cell.
      */
      readonly name: string
    /**
    - Parent object for the Cell (a XMLElement, Cell, Table, Column or Row).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
