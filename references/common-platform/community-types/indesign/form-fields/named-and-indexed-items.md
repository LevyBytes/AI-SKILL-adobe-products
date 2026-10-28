# FormFields named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class FormFields {
    /**
    - Retrieves the FormField identified by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): FormField
    /**
    - Retrieves the FormField matching the supplied ID.
    - @param id ID value.
      */
      itemByID(id: number): FormField
    /**
    - Retrieves the FormField matching the supplied name.
    - @param name Name value.
      */
      itemByName(name: string): FormField
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
