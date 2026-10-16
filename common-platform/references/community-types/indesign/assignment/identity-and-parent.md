# Assignment identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Assignment {
    /**
    - Unique ID assigned to the Assignment.
      */
      readonly id: number
    /**
    - Assignment index within its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Assignment name.
      */
      name: string
    /**
    - Parent Document for the Assignment.
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
