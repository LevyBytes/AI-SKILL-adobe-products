# Menu identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class Menu {
    /**
    - Index position of Menu in its containing object.
      */
      readonly index: number
    /**
    - Whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Name assigned to Menu.
      */
      readonly name: string
    /**
    - Parent object for Menu (a Application).
      */
      readonly parent: Application
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
