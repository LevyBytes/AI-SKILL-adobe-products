# Dialog identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Dialog {
    /**
    - Unique ID assigned to Dialog.
      */
      readonly id: number
    /**
    - Index position of Dialog in its containing object.
      */
      readonly index: number
    /**
    - Whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to Dialog.
      */
      name: string
    /**
    - Parent object for Dialog (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
