# CellStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CellStyles {
    /**
    - Provides any CellStyle from the collection.
      */
      anyItem(): CellStyle
    /**
    - Provides all CellStyle objects in the collection.
      */
      everyItem(): CellStyle[]
    /**
    - Provides the first CellStyle in collection order.
      */
      firstItem(): CellStyle
    /**
    - Provides the last CellStyle in collection order.
      */
      lastItem(): CellStyle
    /**
    - Provides the middle CellStyle in collection order.
      */
      middleItem(): CellStyle
    /**
    - Provides the CellStyle immediately after the supplied CellStyle.
    - @param obj CellStyle positioned before the requested CellStyle.
      */
      nextItem(obj: CellStyle): CellStyle
    /**
    - Provides the CellStyle immediately before the supplied index.
    - @param obj Index of the CellStyle positioned after the requested CellStyle.
      */
      previousItem(obj: CellStyle): CellStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
