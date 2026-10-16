# Tables collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Tables {
    /**
    - Returns any Table from the collection.
      */
      anyItem(): Table
    /**
    - Yields every Table object held by the collection.
      */
      everyItem(): Table[]
    /**
    - Yields the collection's first Table.
      */
      firstItem(): Table
    /**
    - Yields the collection's last Table.
      */
      lastItem(): Table
    /**
    - Yields the collection's middle Table.
      */
      middleItem(): Table
    /**
    - Finds the Table whose index comes after the specified Table in the collection.
    - @param obj Table positioned immediately before the target Table.
      */
      nextItem(obj: Table): Table
    /**
    - Finds the Table immediately before the supplied index.
    - @param obj Index of the Table positioned after the target Table.
      */
      previousItem(obj: Table): Table
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
