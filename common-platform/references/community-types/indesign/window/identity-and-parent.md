# Window identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Window {
    /**
    - Position of this Window inside its container.
      */
      readonly index: number
    /**
    - True when the object specifier can resolve to valid objects.
      */
      readonly isValid: boolean
    /**
    - Window name.
      */
      readonly name: string
    /**
    - Document parent for this Window.
      */
      readonly parent: Document
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
