# DashedStrokeStyles named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class DashedStrokeStyles {
    /**
    - Looks up a DashedStrokeStyle by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): DashedStrokeStyle
    /**
    - Finds a DashedStrokeStyle by ID.
    - @param id ID value.
      */
      itemByID(id: number): DashedStrokeStyle
    /**
    - Finds a DashedStrokeStyle by name.
    - @param name Name value.
      */
      itemByName(name: string): DashedStrokeStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
