# FlattenerPresets named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class FlattenerPresets {
    /**
    - Retrieves the FlattenerPreset identified by index or name.
    - @param index Index or name to use.
      */
      item(index: number | string): FlattenerPreset
    /**
    - Retrieves the FlattenerPreset identified by ID.
    - @param id ID to use.
      */
      itemByID(id: number): FlattenerPreset
    /**
    - Retrieves the FlattenerPreset identified by name.
    - @param name Name to use.
      */
      itemByName(name: string): FlattenerPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
