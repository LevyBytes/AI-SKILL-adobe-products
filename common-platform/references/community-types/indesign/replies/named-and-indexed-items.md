# Replies named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Replies {
    /**
    - Gets a Reply by index or name.
    - @param index Index or name to locate.
      */
      item(index: number | string): Reply
    /**
    - Gets a Reply by ID.
    - @param id ID to locate.
      */
      itemByID(id: number): Reply
    /**
    - Gets a Reply by name.
    - @param name Name to locate.
      */
      itemByName(name: string): Reply
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
