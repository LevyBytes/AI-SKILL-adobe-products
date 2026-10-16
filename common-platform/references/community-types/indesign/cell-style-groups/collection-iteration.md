# CellStyleGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyleGroups {
    /**
    - Provides any CellStyleGroup from the collection.
      */
      anyItem(): CellStyleGroup
    /**
    - Provides all CellStyleGroup objects in the collection.
      */
      everyItem(): CellStyleGroup[]
    /**
    - Provides the first CellStyleGroup in collection order.
      */
      firstItem(): CellStyleGroup
    /**
    - Provides the last CellStyleGroup in collection order.
      */
      lastItem(): CellStyleGroup
    /**
    - Provides the middle CellStyleGroup in collection order.
      */
      middleItem(): CellStyleGroup
    /**
    - Provides the CellStyleGroup immediately after the supplied CellStyleGroup.
    - @param obj CellStyleGroup positioned before the requested CellStyleGroup.
      */
      nextItem(obj: CellStyleGroup): CellStyleGroup
    /**
    - Provides the CellStyleGroup immediately before the supplied index.
    - @param obj Index of the CellStyleGroup positioned after the requested CellStyleGroup.
      */
      previousItem(obj: CellStyleGroup): CellStyleGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
