# Stories named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class Stories {
    /**
    - Gets the Story identified by index or name.
    - @param index Index or name.
      */
      item(index: number | string): Story
    /**
    - Gets the Story identified by ID.
    - @param id Story ID.
      */
      itemByID(id: number): Story
    /**
    - Gets the Story identified by name.
    - @param name Story name.
      */
      itemByName(name: string): Story
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
