# ParagraphStyle identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class ParagraphStyle {
    /**
    - Unique ParagraphStyle ID.
      */
      readonly id: number
    /**
    - Position of the ParagraphStyle inside its container.
      */
      readonly index: number
    /**
    - True when this object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - ParagraphStyle name.
      */
      name: string
    /**
    - ParagraphStyle parent object: a Document, Application, or ParagraphStyleGroup.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
