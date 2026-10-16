# ColorGroup identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class ColorGroup {
    /**
    - Unique ID assigned to the ColorGroup.
      */
      readonly id: number
    /**
    - ColorGroup index inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier maps to valid objects.
      */
      readonly isValid: boolean
    /**
    - ColorGroup name.
      */
      name: string
    /**
    - Parent object for the ColorGroup, either a Application or Document.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
