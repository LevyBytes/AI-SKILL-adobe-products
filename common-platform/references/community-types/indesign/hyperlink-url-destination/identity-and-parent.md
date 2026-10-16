# HyperlinkURLDestination identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkURLDestination {
    /**
    - Unique ID assigned to HyperlinkURLDestination.
      */
      readonly id: number
    /**
    - Position of HyperlinkURLDestination inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves successfully to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to HyperlinkURLDestination.
      */
      name: string
    /**
    - Document that owns HyperlinkURLDestination.
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
