# TextVariable identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class TextVariable {
    /**
    - Position of the TextVariable inside its parent container.
      */
      readonly index: number
    /**
    - True when the object specifier resolves successfully.
      */
      readonly isValid: boolean
    /**
    - TextVariable name.
      */
      name: string
    /**
    - Owning object for the TextVariable: Application or Document.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
