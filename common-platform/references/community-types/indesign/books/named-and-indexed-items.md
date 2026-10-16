# Books named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Books {
    /**
    - Gets the Book matching the provided index or name.
    - @param index Index or name to resolve.
      */
      item(index: number | string): Book
    /**
    - Gets the Book whose name matches the argument.
    - @param name Name to resolve.
      */
      itemByName(name: string): Book
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
