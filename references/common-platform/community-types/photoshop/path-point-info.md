# PathPointInfo

Community declaration reference: Photoshop/2015.5.

Path point represented by three coordinate arrays: anchor point, left direction point, and right direction point. Straight path segments use identical coordinates for all three points. Curved segements use different coordinates. The arc of the curve comes from the distance between the anchor point and the left or right direction points. The left direction point bends the curve "outward" or makes it convex; the right direction point bends it "inward" or makes it concave.

```typescript
declare class PathPointInfo {
    /**
    - x and y coordinates for one endpoint of the path segment.
      */
      static anchor: (Point | [number, number])[]
    /**

    - x and y coordinates for one endpoint of the path segment.
      */
      anchor: (Point | [number, number])[]
    /**

    - Point type value.
      */
      static kind: PointKind
    /**

    - Point type value.
      */
      kind: PointKind
    /**

    - Location for the left direction point ("in" position).
      */
      static leftDirection: (Point | [number, number])[]
    /**

    - Location for the left direction point ("in" position).
      */
      leftDirection: (Point | [number, number])[]
    /**

    - Location for the right direction point ("out" position).
      */
      static rightDirection: (Point | [number, number])[]
    /**

    - Location for the right direction point ("out" position).
      */
      rightDirection: (Point | [number, number])[]
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
