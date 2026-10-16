# Windows named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Windows {
    /**
    - Retrieves the Window matching the specified index or name.
    - @param index Index or name.
      */
      item(index: number | string): Window
    /**
    - Retrieves the Window with the specified name.
    - @param name Name.
      */
      itemByName(name: string): Window
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
