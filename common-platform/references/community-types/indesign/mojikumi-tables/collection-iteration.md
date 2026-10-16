# MojikumiTables collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MojikumiTables {
    /**
    - Selects an arbitrary MojikumiTable from this collection.
      */
      anyItem(): MojikumiTable
    /**
    - Gets all MojikumiTable objects in this collection.
      */
      everyItem(): MojikumiTable[]
    /**
    - Gets the initial MojikumiTable in this collection.
      */
      firstItem(): MojikumiTable
    /**
    - Gets the final MojikumiTable in this collection.
      */
      lastItem(): MojikumiTable
    /**
    - Gets the central MojikumiTable in this collection.
      */
      middleItem(): MojikumiTable
    /**
    - Gets the MojikumiTable positioned after the supplied MojikumiTable.
    - @param obj MojikumiTable that comes before the wanted MojikumiTable.
      */
      nextItem(obj: MojikumiTable): MojikumiTable
    /**
    - Gets the MojikumiTable positioned before the supplied index.
    - @param obj Index belonging to the MojikumiTable after the wanted MojikumiTable.
      */
      previousItem(obj: MojikumiTable): MojikumiTable
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
