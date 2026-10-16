# PathPoint

Community declaration reference: Illustrator/2022.

Point object on a path.

```typescript
declare class PathPoint {
    /**
    - Anchor point position coordinates.
      */
      anchor: Point | [number, number]
    /**

    - Position of the left direction point.
      */
      leftDirection: Point | [number, number]
    /**

    - Owning container for this object.
      */
      readonly parent: object
    /**

    - Point type, smooth or corner.
      */
      pointType: PointType
    /**

    - Out position for the right direction point.
      */
      rightDirection: Point | [number, number]
    /**

    - Selection state for the path point.
      */
      selected: PathPointSelection
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Remove this object.
      */
      remove(): void
    /**

    - Remove every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
