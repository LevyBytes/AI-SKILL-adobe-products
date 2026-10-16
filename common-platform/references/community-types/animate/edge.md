# Edge

Community declaration reference: Animate/22.0.

Shape edges on the Stage are modeled by Edge.

```typescript
declare class Edge {
    /**
    - Integer index for one cubic segment on this edge; see shape.getCubicSegmentPoints().
      */
      readonly cubicSegmentIndex: number
    /**
    - Integer identifier assigned uniquely to this edge.
      */
      readonly id: number
    /**
    - Integer flag with value 0 or 1. When the value is 1, the edge is a straight line, and the middle control point bisects the segment between the two endpoints.
      */
      readonly isLine: number
    /**
    - Stroke object associated with the edge.
      */
      stroke: Stroke
    /**
    - Provides a point object positioned at one requested control point on the edge.
    - @returns The requested control point.
    - @param i Integer selector for the control point to read: 0 selects the first control point, 1 selects the middle control point, and 2 selects the end control point. When edge.isLine is true, the middle control point is placed at the midpoint of the segment from the beginning control point to the ending control point.
      */
      getControl(i: number): Point
    /**
    - Provides a HalfEdge object.
    - @returns A HalfEdge object.
    - @param index Integer selector for the half edge to retrieve. Acceptable values: 0 selects first half edge; 1 selects second half edge.
      */
      getHalfEdge(index: number): HalfEdge
    /**
    - Moves one edge control point. Before calling this method, first call shape.beginEdit(). See shape.beginEdit().
    - @param index Integer selector for the control point to change. Values 0, 1, and 2 address the beginning, middle, and end control points, respectively.
    - @param x Floating-point horizontal coordinate for the control point. In edit or edit-in-place mode on the Stage, the coordinate is measured relative to the object being edited; otherwise it is measured relative to the Stage.
    - @param y Floating-point vertical coordinate for the control point. In edit or edit-in-place mode on the Stage, the coordinate is measured relative to the object being edited; otherwise it is measured relative to the Stage.
      */
      setControl(index: number, x: number, y: number): void
    /**
    - Divides the edge into two pieces. Before using this method, call shape.beginEdit().
    - @param t Floating-point split position from 0 through 1. The value 0 means one endpoint, and 1 means the other endpoint. Passing 0.5 cuts a line at its exact center; for a curve, 0.5 is the parametric midpoint.
      */
      splitEdge(t: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
