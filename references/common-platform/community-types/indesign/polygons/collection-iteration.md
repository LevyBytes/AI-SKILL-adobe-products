# Polygons collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Polygons {
    /**
    - Gets any Polygon from the collection.
      */
      anyItem(): Polygon
    /**
    - Gets all Polygon entries in the collection.
      */
      everyItem(): Polygon[]
    /**
    - Gets the first Polygon from the collection.
      */
      firstItem(): Polygon
    /**
    - Gets the last Polygon from the collection.
      */
      lastItem(): Polygon
    /**
    - Gets the middle Polygon from the collection.
      */
      middleItem(): Polygon
    /**
    - Gets the Polygon positioned after the specified Polygon in the collection.
    - @param obj Polygon preceding the requested Polygon.
      */
      nextItem(obj: Polygon): Polygon
    /**
    - Gets the Polygon at the index before the specified index.
    - @param obj Index of the Polygon after the requested Polygon.
      */
      previousItem(obj: Polygon): Polygon
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
