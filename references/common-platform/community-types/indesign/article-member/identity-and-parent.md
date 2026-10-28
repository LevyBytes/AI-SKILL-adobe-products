# ArticleMember identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class ArticleMember {
    /**
    - Unique ID assigned to the ArticleMember.
      */
      readonly id: number
    /**
    - Position index for the ArticleMember inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Parent object for the ArticleMember (a Article).
      */
      readonly parent: Article
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
