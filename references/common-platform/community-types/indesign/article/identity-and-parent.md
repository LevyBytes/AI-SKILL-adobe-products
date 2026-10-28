# Article identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Article {
    /**
    - Unique ID assigned to the Article.
      */
      readonly id: number
    /**
    - Position index for the Article inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the Article.
      */
      name: string
    /**
    - Parent object for the Article (a Document).
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
