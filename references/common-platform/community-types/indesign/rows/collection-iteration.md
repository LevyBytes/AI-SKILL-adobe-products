# Rows collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Rows {
    /**
    - Gets an arbitrary Row from the collection.
      */
      anyItem(): Row
    /**
    - Gets all Row objects in the collection.
      */
      everyItem(): Row[]
    /**
    - Gets the first Row in the collection.
      */
      firstItem(): Row
    /**
    - Gets the final Row in the collection.
      */
      lastItem(): Row
    /**
    - Gets the center Row in the collection.
      */
      middleItem(): Row
    /**
    - Gets the Row whose index comes after the supplied Row.
    - @param obj Row that precedes the requested Row.
      */
      nextItem(obj: Row): Row
    /**
    - Gets the Row indexed before the supplied index.
    - @param obj Index belonging to the Row after the requested Row.
      */
      previousItem(obj: Row): Row
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
