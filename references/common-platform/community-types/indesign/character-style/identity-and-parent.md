# CharacterStyle identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class CharacterStyle {
    /**
    - Unique ID for the CharacterStyle.
      */
      readonly id: number
    /**
    - CharacterStyle index within its containing object.
      */
      readonly index: number
    /**
    - Returns true when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Style name.
      */
      name: string
    /**
    - Parent of the CharacterStyle: Document, Application, or CharacterStyleGroup.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
