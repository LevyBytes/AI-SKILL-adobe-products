# Layer identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Layer {
    /**
    - Unique ID value for the Layer.
      */
      readonly id: number
    /**
    - Position of this Layer inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Layer name value.
      */
      name: string
    /**
    - Parent object for this Layer, a Document.
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
