# PathPoints

Community declaration reference: Photoshop/2015.5.

Collection containing the path points that make up the path points property on a sub path item object.

```typescript
declare class PathPoints {
    /**
    - Element count for this collection.
      */
      readonly length: number
    /**

    - Container that owns this object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Returns the collection element at the supplied index.
    - @param index
      */
      [index: number]: PathPoint
    /**

    - Returns the first collection element matching the supplied name.
    - @param name
      */
      getByName(name: string): PathPoint
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
