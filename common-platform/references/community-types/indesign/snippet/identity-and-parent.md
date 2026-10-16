# Snippet identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Snippet {
    /**
    - Unique ID assigned to the Snippet.
      */
      readonly id: number
    /**
    - Position index for the Snippet inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name for the Snippet, aliased to the Snippet's label property.
      */
      name: string
    /**
    - Parent object for the Snippet (a PlaceGun).
      */
      readonly parent: PlaceGun
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
