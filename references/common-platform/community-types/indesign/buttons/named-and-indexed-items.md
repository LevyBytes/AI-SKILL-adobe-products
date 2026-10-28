# Buttons named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Buttons {
    /**
    - Gets the Button addressed by index or name.
    - @param index Index or name.
      */
      item(index: number | string): Button
    /**
    - Gets the Button whose ID matches the value.
    - @param id ID value.
      */
      itemByID(id: number): Button
    /**
    - Gets the Button with the given name.
    - @param name Name value.
      */
      itemByName(name: string): Button
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
