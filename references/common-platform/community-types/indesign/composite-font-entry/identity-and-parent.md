# CompositeFontEntry identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class CompositeFontEntry {
    /**
    - Unique ID assigned to the CompositeFontEntry.
      */
      readonly id: number
    /**
    - Index position of the CompositeFontEntry inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the CompositeFontEntry.
      */
      name: string
    /**
    - Parent reference for the CompositeFontEntry (a CompositeFont).
      */
      readonly parent: CompositeFont
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
