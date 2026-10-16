# PrinterPreset identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class PrinterPreset {
    /**
    - PrinterPreset index inside its containing object.
      */
      readonly index: number
    /**
    - Returns true when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - PrinterPreset name.
      */
      name: string
    /**
    - Owning object for this PrinterPreset (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
