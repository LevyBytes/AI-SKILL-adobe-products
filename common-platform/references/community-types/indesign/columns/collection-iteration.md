# Columns collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Columns {
    /**
    - Gets an arbitrary Column from the collection.
      */
      anyItem(): Column
    /**
    - Gets all Column objects in the collection.
      */
      everyItem(): Column[]
    /**
    - Gets the first Column in the collection.
      */
      firstItem(): Column
    /**
    - Gets the final Column in the collection.
      */
      lastItem(): Column
    /**
    - Gets the center Column in the collection.
      */
      middleItem(): Column
    /**
    - Gets the Column whose index comes after the supplied Column.
    - @param obj Column that precedes the requested Column.
      */
      nextItem(obj: Column): Column
    /**
    - Gets the Column indexed before the supplied index.
    - @param obj Index belonging to the Column after the requested Column.
      */
      previousItem(obj: Column): Column
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
