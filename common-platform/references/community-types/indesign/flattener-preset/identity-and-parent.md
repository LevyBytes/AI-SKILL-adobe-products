# FlattenerPreset identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class FlattenerPreset {
    /**
    - Unique ID assigned to the FlattenerPreset.
      */
      readonly id: number
    /**
    - Position of the FlattenerPreset inside its containing object.
      */
      readonly index: number
    /**
    - True indicates that the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to the FlattenerPreset.
      */
      name: string
    /**
    - Parent object for the FlattenerPreset (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
