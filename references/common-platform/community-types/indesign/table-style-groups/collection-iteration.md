# TableStyleGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TableStyleGroups {
    /**
    - Gets any TableStyleGroup from the collection.
      */
      anyItem(): TableStyleGroup
    /**
    - Gets all TableStyleGroup objects from the collection.
      */
      everyItem(): TableStyleGroup[]
    /**
    - Gets the first TableStyleGroup in the collection.
      */
      firstItem(): TableStyleGroup
    /**
    - Gets the final TableStyleGroup in the collection.
      */
      lastItem(): TableStyleGroup
    /**
    - Gets the middle TableStyleGroup in the collection.
      */
      middleItem(): TableStyleGroup
    /**
    - Gets the TableStyleGroup whose index comes after the specified TableStyleGroup in the collection.
    - @param obj TableStyleGroup that precedes the wanted TableStyleGroup.
      */
      nextItem(obj: TableStyleGroup): TableStyleGroup
    /**
    - Gets the TableStyleGroup whose index comes before the specified index.
    - @param obj Index of the TableStyleGroup that follows the wanted TableStyleGroup.
      */
      previousItem(obj: TableStyleGroup): TableStyleGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
