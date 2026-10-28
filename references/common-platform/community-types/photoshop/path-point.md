# PathPoint

Community declaration reference: Photoshop/2015.5.

Information for an array of path point info objects. Use the path point object to read details about points that describe path segments; creation belongs to the path point info object.

```typescript
declare class PathPoint {
    /**
    - Anchor-point position coordinates.
      */
      readonly anchor: Point | [number, number]
    /**

    - Point type.
      */
      readonly kind: PointKind
    /**

    - Left direction point location, the "in" position.
      */
      readonly leftDirection: Point | [number, number]
    /**

    - Container object.
      */
      readonly parent: object
    /**

    - Right direction point location, the "out" position.
      */
      readonly rightDirection: Point | [number, number]
    /**

    - Object class name.
      */
      readonly typename: string
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
