# ListBoxes named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class ListBoxes {
    /**
    - Gets the ListBox addressed by index or name.
    - @param index Index or name.
      */
      item(index: number | string): ListBox
    /**
    - Gets the ListBox whose ID matches the value.
    - @param id ID value.
      */
      itemByID(id: number): ListBox
    /**
    - Gets the ListBox with the given name.
    - @param name Name value.
      */
      itemByName(name: string): ListBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
