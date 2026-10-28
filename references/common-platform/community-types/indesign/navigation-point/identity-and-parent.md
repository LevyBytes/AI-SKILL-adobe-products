# NavigationPoint identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class NavigationPoint {
    /**
    - Internally generated unique identifier, read only.
      */
      readonly id: number
    /**
    - Position of the NavigationPoint inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Display name shown in the UI.
      */
      name: string
    /**
    - Parent Movie for the NavigationPoint.
      */
      readonly parent: Movie
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
