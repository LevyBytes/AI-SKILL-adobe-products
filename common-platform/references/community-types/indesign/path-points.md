# PathPoints

Community declaration reference: InDesign/2023.

Path point collection.

```typescript
declare class PathPoints {
    /**
    - Count of objects in the collection.
      */
      readonly length: number
    /**

    - Provides the PathPoint at the specified index.
    - @param index Index to read.
      */
      [index: number]: PathPoint
    /**

    - Creates a PathPoint.
    - @param withProperties Initial property values for the new PathPoint
      */
      add(withProperties: object): PathPoint
    /**

    - Provides any PathPoint from the collection.
      */
      anyItem(): PathPoint
    /**

    - Shows how many elements are in the PathPoint.
      */
      count(): number
    /**

    - Provides all PathPoint entries in the collection.
      */
      everyItem(): PathPoint[]
    /**

    - Provides the collection's first PathPoint.
      */
      firstItem(): PathPoint
    /**

    - Finds a PathPoint by the supplied index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): PathPoint
    /**

    - Provides the PathPoints covered by the requested range.
    - @param from PathPoint, index, or name that starts the range.
    - @param to PathPoint, index, or name that ends the range.
      */
      itemByRange(from: PathPoint | number | string, to: PathPoint | number | string): PathPoint[]
    /**

    - Provides the collection's final PathPoint.
      */
      lastItem(): PathPoint
    /**

    - Provides the PathPoint positioned in the middle of the collection.
      */
      middleItem(): PathPoint
    /**

    - Provides the PathPoint immediately after the specified PathPoint in collection order.
    - @param obj PathPoint that precedes the requested PathPoint.
      */
      nextItem(obj: PathPoint): PathPoint
    /**

    - Provides the PathPoint positioned before the specified index.
    - @param obj Index for the PathPoint that follows the requested PathPoint.
      */
      previousItem(obj: PathPoint): PathPoint
    /**

    - Creates source text that can be executed to obtain this PathPoint.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
