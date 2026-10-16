# Book identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Book {
    /**
    - Position of the Book inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Book name.
      */
      readonly name: string
    /**
    - Parent object for the Book (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
