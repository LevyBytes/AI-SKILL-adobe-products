# Condition identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Condition {
    /**
    - Unique ID assigned to the Condition.
      */
      readonly id: number
    /**
    - Index position of the Condition inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the Condition.
      */
      name: string
    /**
    - Parent reference for the Condition (a Application or Document).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
