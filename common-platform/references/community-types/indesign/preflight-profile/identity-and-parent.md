# PreflightProfile identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class PreflightProfile {
    /**
    - Unique ID for the PreflightProfile.
      */
      readonly id: number
    /**
    - Position of the PreflightProfile inside its containing object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name of the PreflightProfile.
      */
      name: string
    /**
    - Parent object for the PreflightProfile (a Application or Document).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
