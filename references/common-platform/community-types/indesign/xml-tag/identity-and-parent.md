# XMLTag identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class XMLTag {
    /**
    - Unique ID assigned to the XMLTag.
      */
      readonly id: number
    /**
    - Position of the XMLTag within its containing object.
      */
      readonly index: number
    /**
    - Indicates whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the XMLTag.
      */
      name: string
    /**
    - Parent object for the XMLTag (a Application or Document).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
