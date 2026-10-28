# DialogColumn identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class DialogColumn {
    /**
    - Unique ID for the DialogColumn.
      */
      readonly id: number
    /**
    - Position of the DialogColumn inside its parent object.
      */
      readonly index: number
    /**
    - True when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Owning container for the DialogColumn: Dialog, DialogRow, EnablingGroup, or BorderPanel.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
