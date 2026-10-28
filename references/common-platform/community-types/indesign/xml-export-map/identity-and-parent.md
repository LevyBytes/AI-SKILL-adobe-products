# XMLExportMap identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class XMLExportMap {
    /**
    - Position of the XMLExportMap within its containing object.
      */
      readonly index: number
    /**
    - Indicates whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - Parent object for the XMLExportMap (a Application or Document).
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
