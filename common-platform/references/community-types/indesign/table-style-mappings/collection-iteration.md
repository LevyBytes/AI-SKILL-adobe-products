# TableStyleMappings collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TableStyleMappings {
    /**
    - Gets any TableStyleMapping from the collection.
      */
      anyItem(): TableStyleMapping
    /**
    - Gets every TableStyleMapping in the collection.
      */
      everyItem(): TableStyleMapping[]
    /**
    - Gets the first TableStyleMapping in the collection.
      */
      firstItem(): TableStyleMapping
    /**
    - Gets the last TableStyleMapping in the collection.
      */
      lastItem(): TableStyleMapping
    /**
    - Gets the middle TableStyleMapping in the collection.
      */
      middleItem(): TableStyleMapping
    /**
    - Gets the collection item after the specified TableStyleMapping.
    - @param obj TableStyleMapping positioned before the desired TableStyleMapping.
      */
      nextItem(obj: TableStyleMapping): TableStyleMapping
    /**
    - Gets the TableStyleMapping before the specified index.
    - @param obj Index of the TableStyleMapping after the desired TableStyleMapping.
      */
      previousItem(obj: TableStyleMapping): TableStyleMapping
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
