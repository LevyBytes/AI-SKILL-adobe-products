# TableStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TableStyles {
    /**
    - Gets any TableStyle from the collection.
      */
      anyItem(): TableStyle
    /**
    - Gets all TableStyle objects from the collection.
      */
      everyItem(): TableStyle[]
    /**
    - Gets the first TableStyle in the collection.
      */
      firstItem(): TableStyle
    /**
    - Gets the final TableStyle in the collection.
      */
      lastItem(): TableStyle
    /**
    - Gets the middle TableStyle in the collection.
      */
      middleItem(): TableStyle
    /**
    - Gets the TableStyle whose index comes after the specified TableStyle in the collection.
    - @param obj TableStyle that precedes the wanted TableStyle.
      */
      nextItem(obj: TableStyle): TableStyle
    /**
    - Gets the TableStyle whose index comes before the specified index.
    - @param obj Index of the TableStyle that follows the wanted TableStyle.
      */
      previousItem(obj: TableStyle): TableStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
