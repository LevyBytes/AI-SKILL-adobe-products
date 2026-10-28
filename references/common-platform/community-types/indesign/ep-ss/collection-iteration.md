# EPSs collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class EPSs {
    /**
    - Gets any EPS from the collection.
      */
      anyItem(): EPS
    /**
    - Gets all EPS entries in the collection.
      */
      everyItem(): EPS[]
    /**
    - Gets the first EPS from the collection.
      */
      firstItem(): EPS
    /**
    - Gets the last EPS from the collection.
      */
      lastItem(): EPS
    /**
    - Gets the middle EPS from the collection.
      */
      middleItem(): EPS
    /**
    - Gets the EPS positioned after the specified EPS in the collection.
    - @param obj EPS preceding the requested EPS.
      */
      nextItem(obj: EPS): EPS
    /**
    - Gets the EPS at the index before the specified index.
    - @param obj Index of the EPS after the requested EPS.
      */
      previousItem(obj: EPS): EPS
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
