# KinsokuTables collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class KinsokuTables {
    /**
    - Selects an arbitrary KinsokuTable from this collection.
      */
      anyItem(): KinsokuTable
    /**
    - Gets all KinsokuTable objects in this collection.
      */
      everyItem(): KinsokuTable[]
    /**
    - Gets the initial KinsokuTable in this collection.
      */
      firstItem(): KinsokuTable
    /**
    - Gets the final KinsokuTable in this collection.
      */
      lastItem(): KinsokuTable
    /**
    - Gets the central KinsokuTable in this collection.
      */
      middleItem(): KinsokuTable
    /**
    - Gets the KinsokuTable positioned after the supplied KinsokuTable.
    - @param obj KinsokuTable that comes before the wanted KinsokuTable.
      */
      nextItem(obj: KinsokuTable): KinsokuTable
    /**
    - Gets the KinsokuTable positioned before the supplied index.
    - @param obj Index belonging to the KinsokuTable after the wanted KinsokuTable.
      */
      previousItem(obj: KinsokuTable): KinsokuTable
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
