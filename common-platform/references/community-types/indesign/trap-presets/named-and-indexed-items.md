# TrapPresets named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class TrapPresets {
    /**
    - Finds a TrapPreset by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): TrapPreset
    /**
    - Finds the TrapPreset associated with the supplied ID.
    - @param id ID selector.
      */
      itemByID(id: number): TrapPreset
    /**
    - Finds the TrapPreset associated with the supplied name.
    - @param name Name selector.
      */
      itemByName(name: string): TrapPreset
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
