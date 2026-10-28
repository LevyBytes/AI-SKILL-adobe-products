# Asset identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Asset {
    /**
    - Unique Asset ID.
      */
      readonly id: number
    /**
    - Asset index inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier maps to valid objects.
      */
      readonly isValid: boolean
    /**
    - Asset name.
      */
      name: string
    /**
    - Asset parent, which is a Library.
      */
      readonly parent: Library
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
