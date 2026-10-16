# MojikumiTable identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class MojikumiTable {
    /**
    - Unique ID for the MojikumiTable.
      */
      readonly id: number
    /**
    - Position of the MojikumiTable inside its parent object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - MojikumiTable name.
      */
      name: string
    /**
    - Parent object for the MojikumiTable (a Document or Application).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
