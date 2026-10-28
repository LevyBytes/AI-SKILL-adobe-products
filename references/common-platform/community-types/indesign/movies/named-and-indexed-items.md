# Movies named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Movies {
    /**
    - Gets the Movie identified by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Movie
    /**
    - Gets the Movie identified by ID.
    - @param id ID value.
      */
      itemByID(id: number): Movie
    /**
    - Gets the Movie identified by name.
    - @param name Name value.
      */
      itemByName(name: string): Movie
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
