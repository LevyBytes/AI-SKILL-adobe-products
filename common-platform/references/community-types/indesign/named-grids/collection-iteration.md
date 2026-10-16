# NamedGrids collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class NamedGrids {
    /**
    - Returns an arbitrary NamedGrid from the collection.
      */
      anyItem(): NamedGrid
    /**
    - Returns all NamedGrid entries from the collection.
      */
      everyItem(): NamedGrid[]
    /**
    - Gets the first NamedGrid from the collection.
      */
      firstItem(): NamedGrid
    /**
    - Gets the last NamedGrid from the collection.
      */
      lastItem(): NamedGrid
    /**
    - Gets the middle NamedGrid from the collection.
      */
      middleItem(): NamedGrid
    /**
    - Returns the NamedGrid immediately after the supplied NamedGrid in the collection.
    - @param obj NamedGrid whose index precedes the desired NamedGrid.
      */
      nextItem(obj: NamedGrid): NamedGrid
    /**
    - Returns the NamedGrid immediately before the supplied index.
    - @param obj Index for the NamedGrid immediately after the desired NamedGrid.
      */
      previousItem(obj: NamedGrid): NamedGrid
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
