# CellStyleMappings collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyleMappings {
    /**
    - Gets any CellStyleMapping from the collection.
      */
      anyItem(): CellStyleMapping
    /**
    - Gets every CellStyleMapping in the collection.
      */
      everyItem(): CellStyleMapping[]
    /**
    - Gets the first CellStyleMapping in the collection.
      */
      firstItem(): CellStyleMapping
    /**
    - Gets the last CellStyleMapping in the collection.
      */
      lastItem(): CellStyleMapping
    /**
    - Gets the middle CellStyleMapping in the collection.
      */
      middleItem(): CellStyleMapping
    /**
    - Gets the collection item after the specified CellStyleMapping.
    - @param obj CellStyleMapping positioned before the desired CellStyleMapping.
      */
      nextItem(obj: CellStyleMapping): CellStyleMapping
    /**
    - Gets the CellStyleMapping before the specified index.
    - @param obj Index of the CellStyleMapping after the desired CellStyleMapping.
      */
      previousItem(obj: CellStyleMapping): CellStyleMapping
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
